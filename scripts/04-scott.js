// Carga inicial. No repetir: insertMany vuelve a insertar los documentos.
const scott = db.getSiblingDB("scott");
// Datos originales proporcionados en la consigna. Fechas BSON Date en UTC.
const departamentosScott = [
  { deptno: 10, dname: 'ACCOUNTING', loc: 'NEW YORK' },
  { deptno: 20, dname: 'RESEARCH', loc: 'DALLAS' },
  { deptno: 30, dname: 'SALES', loc: 'CHICAGO' },
  { deptno: 40, dname: 'OPERATIONS', loc: 'BOSTON' }
];
const empleadosScott = [
  { empno: 7369, ename: 'SMITH', job: 'CLERK', mgr: 7902, hiredate: ISODate('1980-12-17'), sal: 800, comm: null, deptno: 20 },
  { empno: 7499, ename: 'ALLEN', job: 'SALESMAN', mgr: 7698, hiredate: ISODate('1981-02-20'), sal: 1600, comm: 300, deptno: 30 },
  { empno: 7521, ename: 'WARD', job: 'SALESMAN', mgr: 7698, hiredate: ISODate('1981-02-22'), sal: 1250, comm: 500, deptno: 30 },
  { empno: 7566, ename: 'JONES', job: 'MANAGER', mgr: 7839, hiredate: ISODate('1981-04-02'), sal: 2975, comm: null, deptno: 20 },
  { empno: 7654, ename: 'MARTIN', job: 'SALESMAN', mgr: 7698, hiredate: ISODate('1981-09-28'), sal: 1250, comm: 1400, deptno: 30 },
  { empno: 7698, ename: 'BLAKE', job: 'MANAGER', mgr: 7839, hiredate: ISODate('1981-05-01'), sal: 2850, comm: null, deptno: 30 },
  { empno: 7782, ename: 'CLARK', job: 'MANAGER', mgr: 7839, hiredate: ISODate('1981-06-09'), sal: 2450, comm: null, deptno: 10 },
  { empno: 7788, ename: 'SCOTT', job: 'ANALYST', mgr: 7566, hiredate: ISODate('1987-04-19'), sal: 3000, comm: null, deptno: 20 },
  { empno: 7839, ename: 'KING', job: 'PRESIDENT', mgr: null, hiredate: ISODate('1981-11-17'), sal: 5000, comm: null, deptno: 10 },
  { empno: 7844, ename: 'TURNER', job: 'SALESMAN', mgr: 7698, hiredate: ISODate('1981-09-08'), sal: 1500, comm: 0, deptno: 30 },
  { empno: 7876, ename: 'ADAMS', job: 'CLERK', mgr: 7788, hiredate: ISODate('1987-05-23'), sal: 1100, comm: null, deptno: 20 },
  { empno: 7900, ename: 'JAMES', job: 'CLERK', mgr: 7698, hiredate: ISODate('1981-12-03'), sal: 950, comm: null, deptno: 30 },
  { empno: 7902, ename: 'FORD', job: 'ANALYST', mgr: 7566, hiredate: ISODate('1981-12-03'), sal: 3000, comm: null, deptno: 20 },
  { empno: 7934, ename: 'MILLER', job: 'CLERK', mgr: 7782, hiredate: ISODate('1982-01-23'), sal: 1300, comm: null, deptno: 10 }
];

printjson(scott.departamentos.insertMany(departamentosScott));
printjson(scott.empleados.insertMany(empleadosScott));
