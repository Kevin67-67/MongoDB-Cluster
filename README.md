# MongoDB sharding con Scott

Actividad 1 — Bases de Datos Avanzadas.

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

### 2. Iniciar los servidores

```bash
docker compose up -d configsvr shard1 shard2 shard3
```

### 3. Inicializar los replica sets (solo en el primer despliegue)

```bash
docker compose exec -T configsvr mongosh --quiet --file /scripts/01-config.js
docker compose exec -T shard1 mongosh --quiet --file /scripts/02-shard.js
docker compose exec -T shard2 mongosh --quiet --file /scripts/02-shard.js
docker compose exec -T shard3 mongosh --quiet --file /scripts/02-shard.js
```

### 4. Iniciar mongos y configurar el sharding

```bash
docker compose up -d mongos
```

Después de que inicie el router:

```bash
docker compose exec -T mongos mongosh --quiet --file /scripts/03-sharding.js
```

### 5. Cargar Scott y los 100 empleados adicionales (una sola vez)

```bash
docker compose exec -T mongos mongosh --quiet --file /scripts/04-scott.js
docker compose exec -T mongos mongosh --quiet --file /scripts/05-datos-adicionales.js
```

Tras una carga completa se esperan 4 departamentos y 114 empleados, no repetir
estas cargas sobre los mismos datos: `insertMany` puede duplicar empleados.

### 6. Ejecutar el CRUD

```bash
docker compose exec -T mongos mongosh --quiet --file /scripts/06-crud.js
```

El script inserta y elimina su propio empleado temporal.

### 7. Consultar los datos y la distribución

Desde la terminal del sistema:

```bash
docker compose exec mongos mongosh
```

Dentro de mongosh:

```javascript
use scott
db.departamentos.countDocuments({})
db.empleados.countDocuments({})
db.empleados.getShardDistribution()
db.getSiblingDB("admin").aggregate([
  { $shardedDataDistribution: {} },
  { $match: { ns: "scott.empleados" } }
]).toArray()
exit
```
Compass puede conectarse a `mongodb://localhost:27030`.

### 8. Reanudar sin volver a cargar

Desde la terminal del sistema, para detener:

```bash
docker compose stop
```

Para reanudar los contenedores existentes:

```bash
docker compose start
```

No repetir la inicialización ni las cargas. Si se eliminaron los contenedores
pero se conservaron los volúmenes, recrearlos con `docker compose up -d configsvr
shard1 shard2 shard3` y, después de su inicio, `docker compose up -d mongos`.
**`docker compose down -v` elimina los datos persistentes.**

## Acceso interactivo

Desde PowerShell:

```powershell
docker compose exec mongos mongosh
```

Dentro de mongosh:

```javascript
use scott
db.departamentos.find()
db.empleados.find({ empno: 7369 })
```

También se puede conectar Compass a `mongodb://localhost:27030`.

## Detener conservando los datos

```powershell
docker compose stop
```

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


