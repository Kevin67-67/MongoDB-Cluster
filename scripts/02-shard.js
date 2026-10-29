// El mismo archivo sirve para los tres shards: Compose define su nombre y host.
// Primera inicialización: ejecutar una sola vez en cada shard.
printjson(rs.initiate({
  _id: process.env.RS_NAME,
  members: [{ _id: 0, host: process.env.RS_HOST + ":27017" }]
}));
