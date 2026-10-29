// Ejecutar una sola vez, desde mongos, antes de cargar documentos.
printjson(sh.addShard("shard1RS/shard1:27017"));
printjson(sh.addShard("shard2RS/shard2:27017"));
printjson(sh.addShard("shard3RS/shard3:27017"));
// Desde MongoDB 6.0 no es obligatorio antes de shardCollection;
// se incluye para representar explícitamente la etapa de la actividad.
printjson(sh.enableSharding("scott"));
const scott = db.getSiblingDB("scott");
printjson(scott.createCollection("departamentos"));
printjson(scott.createCollection("empleados"));
print(scott.departamentos.createIndex({ deptno: 1 }, { unique: true }));
print(scott.empleados.createIndex({ empno: "hashed" }));
printjson(sh.shardCollection("scott.empleados", { empno: "hashed" }));
