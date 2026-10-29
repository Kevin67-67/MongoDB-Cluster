# MongoDB sharding con Scott

Actividad 1 — Bases de Datos Avanzadas.

| Alumno | Matricula |
| --- | --- |
| Kevin Andres Rosales Rodriguez | 385814 |
| Edwin Noe Zaragoza Alvarado | 385609 |
| Manuel Ramirez Contreras | 385706 | 

Cinco servicios Docker: configsvr, shard1, shard2, shard3 y mongos.
Base `scott`, con `departamentos` y `empleados`. Shard key de empleados:
`{ empno: "hashed" }`.

## Ejecución manual

Seguir los comandos de [PASOS.md](PASOS.md) desde PowerShell.
El puerto publicado para el router es **27030**; dentro de los contenedores se
conserva 27017. 

La base contiene 4 departamentos, 14 empleados originales y una carga adicional
de 100 empleados con empno de 8000 a 8099: **114 empleados en total**.

Para reanudar contenedores detenidos conservando sus datos:

```powershell
docker compose start
```

## Clonacion y ejecucion

### Requisitos

- Git instalado.
- Docker Engine o Docker Desktop con el motor de contenedores Linux iniciado y `docker compose`.
- Imagen `mongo:8.0.16`. En Windows, Docker Desktop debe tener su entorno Linux operativo.



Los comandos Docker siguientes se pueden ejecutar en PowerShell de Windows o en
una terminal de Linux/macOS. No es necesario instalar MongoDB ni mongosh en el equipo.

### 1. Clonar el repositorio

```bash
git clone https://github.com/Kevin67-67/MongoDB-Cluster.git
cd MongoDB-Cluster
```

Ejecutar los comandos restantes desde esta carpeta, donde está `docker-compose.yml`.

## 2. Abrir la terminal en el proyecto

Utilizar PowerShell y ubicarse en la carpeta que contiene
`docker-compose.yml`, `README.md` y `scripts/`.

Abrir Docker Desktop y esperar a que inicie el motor Linux.

**Si la practica ya se habia configurado y los datos se conservan, ir directamente al
paso 9.** 

## 3. Primera configuracion: iniciar servidores

```powershell
docker compose up -d configsvr shard1 shard2 shard3
```

Esperar unos segundos a que MongoDB termine de iniciar.

## 4. Replica set de configuracion

```powershell
docker compose exec -T configsvr mongosh --quiet --file /scripts/01-config.js
```

## 5. Shards

```powershell
docker compose exec -T shard1 mongosh --quiet --file /scripts/02-shard.js
docker compose exec -T shard2 mongosh --quiet --file /scripts/02-shard.js
docker compose exec -T shard3 mongosh --quiet --file /scripts/02-shard.js
```

Esperar unos segundos a que se elijan los primarios.

## 6. Router y sharding

```powershell
docker compose up -d mongos
```

```powershell
docker compose exec -T mongos mongosh --quiet --file /scripts/03-sharding.js
```

## 7. Carga inicial de Scott y empleados adicionales

```powershell
docker compose exec -T mongos mongosh --quiet --file /scripts/04-scott.js
docker compose exec -T mongos mongosh --quiet --file /scripts/05-datos-adicionales.js
```

## 8. Operaciones CRUD desde mongos

```powershell
docker compose exec -T mongos mongosh --quiet --file /scripts/06-crud.js
```

La eliminación del CRUD afecta exclusivamente al empleado temporal 999999 con
origen crud. 

## 9. Detener y reanudar conservando datos

Para detener los servicios, desde PowerShell en la carpeta del proyecto:

```powershell
docker compose stop
```

### Reanudar una practica ya configurada

Abrir Docker Desktop y PowerShell en la carpeta que contiene `docker-compose.yml`.
Iniciar los servidores con sus volúmenes existentes:

```powershell
docker compose up -d configsvr shard1 shard2 shard3
```

Esperar unos segundos para que arranquen y elijan sus primarios. Después iniciar
el router:

```powershell
docker compose up -d mongos
docker compose ps --all
```

Esperar unos segundos al inicio del router. `up -d` inicia o recrea los contenedores
cuando corresponde y reutiliza los volúmenes nombrados; no vuelve a cargar Scott.
Conservar el archivo Compose y el nombre del proyecto para utilizar los mismos
volúmenes. No ejecutar nuevamente los scripts 01 al 05.

### Consultar la configuración y los datos

Desde PowerShell:

```powershell
docker compose exec mongos mongosh
```

Dentro de mongosh:

```javascript
use scott
sh.status()
db.departamentos.countDocuments({})
db.empleados.countDocuments({})
db.empleados.countDocuments({ empno: { $gte: 8000, $lte: 8099 } })
db.empleados.findOne({ empno: 7369 })
db.empleados.getShardDistribution()
db.getSiblingDB("admin").aggregate([
  { $shardedDataDistribution: {} },
  { $match: { ns: "scott.empleados" } }
]).toArray()
```

### Repetir únicamente el CRUD (opcional)

Desde PowerShell, entrar de nuevo:

```powershell
docker compose exec mongos mongosh
```

Dentro de mongosh:

```javascript
use scott
db.empleados.findOne({ empno: 999999 })
exit
```

Si la consulta devuelve `null`, ejecutar desde PowerShell:

```powershell
docker compose exec -T mongos mongosh --quiet --file /scripts/06-crud.js
```

El script inserta y elimina su propio empleado temporal. Si ya existe el empleado
999999, conservar la salida y revisar ese intento antes de volver a ejecutar el CRUD.

**No utilizar `docker compose down -v`: elimina los volúmenes y sus datos.**
Si aparece un error, conservar el mensaje y detenerse antes de repetir etapas.
## Archivos del proyecto

| Archivo | Tarea |
|---|---|
| `docker-compose.yml` | Define los cinco servicios de MongoDB, su red, volúmenes y el puerto local 27030 del router |
| `scripts/01-config.js` | Inicializa el replica set `configRS` del servidor que guarda los metadatos del clúster |
| `scripts/02-shard.js` | Inicializa el replica set de cada shard usando el nombre y host definidos en Compose |
| `scripts/03-sharding.js` | Registra los tres shards, crea las colecciones e índices y fragmenta `scott.empleados` con la clave `empno` hashed |
| `scripts/04-scott.js` | Inserta los 4 departamentos y 14 empleados originales de Scott |
| `scripts/05-datos-adicionales.js` | Inserta 100 empleados adicionales con datos variados |
| `scripts/06-crud.js` | Inserta, consulta, actualiza y elimina un empleado temporal desde mongos, mostrando las respuestas de cada operación |
| `PASOS.md` | Comandos para configurar y ejecutar manualmente la práctica desde PowerShell |
| `docs/reporte.md` | Explicacion mas detallada de la practica |



## Estructura del proyecto

```text
MongoDB-Cluster/
├── .gitattributes
├── .gitignore
├── docker-compose.yml
├── PASOS.md
├── README.md
├── docs/
│   └── reporte.md
└── scripts/
    ├── 01-config.js
    ├── 02-shard.js
    ├── 03-sharding.js
    ├── 04-scott.js
    ├── 05-datos-adicionales.js
    └── 06-crud.js
```


