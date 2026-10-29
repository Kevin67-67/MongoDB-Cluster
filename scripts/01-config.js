// Primera inicialización: ejecutar una sola vez por conjunto de volúmenes.
printjson(rs.initiate({
  _id: "configRS",
  configsvr: true,
  members: [{ _id: 0, host: "configsvr:27017" }]
}));
