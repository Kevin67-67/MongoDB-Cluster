// CREATE
const scott = db.getSiblingDB("scott");
print("CREATE: insertar empleado temporal");
const creacion = scott.empleados.insertOne({
  empno: 999999, ename: "EMPLEADO_CRUD", job: "CLERK", mgr: 7839,
  hiredate: ISODate("2026-10-28"), sal: 1500, comm: null,
  deptno: 20, origen: "crud"
});
printjson(creacion);

// READ
print("READ: consultar empleado por empno");
const lectura = scott.empleados.findOne({ empno: 999999 });
printjson(lectura);

// UPDATE
print("UPDATE: cambiar salario y puesto");
const actualizacion = scott.empleados.updateOne(
  { empno: 999999 }, { $set: { sal: 1800, job: "ANALYST" } }
);
printjson(actualizacion);

const despuesActualizar = scott.empleados.findOne({ empno: 999999 });
printjson(despuesActualizar);

// DELETE
print("DELETE: eliminar exclusivamente el empleado temporal");
const eliminacion = scott.empleados.deleteOne({ empno: 999999, origen: "crud" });
printjson(eliminacion);
const despuesEliminar = scott.empleados.findOne({ empno: 999999 });
printjson({ despuesEliminar });
