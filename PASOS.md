# Procedimiento manual desde cero

Todos los bloques PowerShell se ejecutan en la terminal del sistema, en la carpeta
de este archivo. Los archivos JS se ejecutan dentro del contenedor mediante mongosh.

## 1. Abrir la terminal en el proyecto

Utilizar PowerShell y ubicarse en la carpeta que contiene
`docker-compose.yml`, `README.md` y `scripts/`.

Abrir Docker Desktop y esperar a que inicie el motor Linux.

**Si la practica ya se habia configurado y los datos se conservan, ir directamente al
paso 8.** 

## 2. Primera configuracion: iniciar servidores

```powershell
docker compose up -d configsvr shard1 shard2 shard3
```

Esperar unos segundos a que MongoDB termine de iniciar.

## 3. Replica set de configuracion

```powershell
docker compose exec -T configsvr mongosh --quiet --file /scripts/01-config.js
```

## 4. Shards

```powershell
docker compose exec -T shard1 mongosh --quiet --file /scripts/02-shard.js
docker compose exec -T shard2 mongosh --quiet --file /scripts/02-shard.js
docker compose exec -T shard3 mongosh --quiet --file /scripts/02-shard.js
```

Esperar unos segundos a que se elijan los primarios.

## 5. Router y sharding

```powershell
docker compose up -d mongos
```

```powershell
docker compose exec -T mongos mongosh --quiet --file /scripts/03-sharding.js
```

## 6. Carga inicial de Scott y empleados adicionales

```powershell
docker compose exec -T mongos mongosh --quiet --file /scripts/04-scott.js
docker compose exec -T mongos mongosh --quiet --file /scripts/05-datos-adicionales.js
```

## 7. Operaciones CRUD desde mongos

```powershell
docker compose exec -T mongos mongosh --quiet --file /scripts/06-crud.js
```

La eliminación del CRUD afecta exclusivamente al empleado temporal 999999 con
origen crud. 

## 8. Detener y reanudar conservando datos

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
