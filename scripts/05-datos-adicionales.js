// 100 empleados adicionales de ejemplo con la misma estructura que Scott.
// Ejecutar una sola vez desde mongos. No modifica los 14 empleados originales.
const scott = db.getSiblingDB("scott");

printjson(scott.empleados.insertMany([
  {
    empno: 8000, ename: 'HARRIS', job: 'MANAGER',
    mgr: 7839, hiredate: ISODate('1982-03-15'),
    sal: 3200, comm: null, deptno: 40
  },
  {
    empno: 8001, ename: 'JOHNSON', job: 'ACCOUNTANT',
    mgr: 7782, hiredate: ISODate('1983-06-08'),
    sal: 1800, comm: null, deptno: 10
  },
  {
    empno: 8002, ename: 'WILLIAMS', job: 'ANALYST',
    mgr: 7566, hiredate: ISODate('1983-11-15'),
    sal: 2400, comm: null, deptno: 20
  },
  {
    empno: 8003, ename: 'BROWN', job: 'SALESMAN',
    mgr: 7698, hiredate: ISODate('1983-04-22'),
    sal: 1150, comm: 0, deptno: 30
  },
  {
    empno: 8004, ename: 'DAVIS', job: 'ENGINEER',
    mgr: 8000, hiredate: ISODate('1983-09-01'),
    sal: 2300, comm: null, deptno: 40
  },
  {
    empno: 8005, ename: 'WILSON', job: 'CLERK',
    mgr: 7782, hiredate: ISODate('1984-02-08'),
    sal: 1185, comm: null, deptno: 10
  },
  {
    empno: 8006, ename: 'MOORE', job: 'CLERK',
    mgr: 7902, hiredate: ISODate('1984-07-15'),
    sal: 1095, comm: null, deptno: 20
  },
  {
    empno: 8007, ename: 'TAYLOR', job: 'SALESMAN',
    mgr: 7698, hiredate: ISODate('1984-12-22'),
    sal: 1220, comm: 250, deptno: 30
  },
  {
    empno: 8008, ename: 'ANDERSON', job: 'TECHNICIAN',
    mgr: 8000, hiredate: ISODate('1984-05-01'),
    sal: 1765, comm: null, deptno: 40
  },
  {
    empno: 8009, ename: 'THOMAS', job: 'AUDITOR',
    mgr: 7782, hiredate: ISODate('1985-10-08'),
    sal: 1970, comm: null, deptno: 10
  },
  {
    empno: 8010, ename: 'JACKSON', job: 'RESEARCHER',
    mgr: 7566, hiredate: ISODate('1985-03-15'),
    sal: 2590, comm: null, deptno: 20
  },
  {
    empno: 8011, ename: 'WHITE', job: 'CLERK',
    mgr: 7698, hiredate: ISODate('1985-08-22'),
    sal: 1290, comm: null, deptno: 30
  },
  {
    empno: 8012, ename: 'LEWIS', job: 'OPERATOR',
    mgr: 8000, hiredate: ISODate('1985-01-01'),
    sal: 1530, comm: null, deptno: 40
  },
  {
    empno: 8013, ename: 'ROBINSON', job: 'ACCOUNTANT',
    mgr: 7782, hiredate: ISODate('1986-06-08'),
    sal: 2055, comm: null, deptno: 10
  },
  {
    empno: 8014, ename: 'WALKER', job: 'ANALYST',
    mgr: 7566, hiredate: ISODate('1986-11-15'),
    sal: 2685, comm: null, deptno: 20
  },
  {
    empno: 8015, ename: 'HALL', job: 'SALESMAN',
    mgr: 7698, hiredate: ISODate('1986-04-22'),
    sal: 1360, comm: 650, deptno: 30
  },
  {
    empno: 8016, ename: 'YOUNG', job: 'CLERK',
    mgr: 8000, hiredate: ISODate('1986-09-01'),
    sal: 1295, comm: null, deptno: 40
  },
  {
    empno: 8017, ename: 'ALLENSON', job: 'CLERK',
    mgr: 7782, hiredate: ISODate('1987-02-08'),
    sal: 1440, comm: null, deptno: 10
  },
  {
    empno: 8018, ename: 'WRIGHT', job: 'CLERK',
    mgr: 7902, hiredate: ISODate('1987-07-15'),
    sal: 1380, comm: null, deptno: 20
  },
  {
    empno: 8019, ename: 'LOPEZ', job: 'SALESMAN',
    mgr: 7698, hiredate: ISODate('1987-12-22'),
    sal: 1430, comm: 900, deptno: 30
  },
  {
    empno: 8020, ename: 'HILL', job: 'ENGINEER',
    mgr: 8000, hiredate: ISODate('1987-05-01'),
    sal: 2560, comm: null, deptno: 40
  },
  {
    empno: 8021, ename: 'GREEN', job: 'AUDITOR',
    mgr: 7782, hiredate: ISODate('1988-10-08'),
    sal: 2225, comm: null, deptno: 10
  },
  {
    empno: 8022, ename: 'ADAMS', job: 'RESEARCHER',
    mgr: 7566, hiredate: ISODate('1988-03-15'),
    sal: 2875, comm: null, deptno: 20
  },
  {
    empno: 8023, ename: 'BAKER', job: 'CLERK',
    mgr: 7698, hiredate: ISODate('1988-08-22'),
    sal: 1500, comm: null, deptno: 30
  },
  {
    empno: 8024, ename: 'GONZALEZ', job: 'TECHNICIAN',
    mgr: 8000, hiredate: ISODate('1988-01-01'),
    sal: 2025, comm: null, deptno: 40
  },
  {
    empno: 8025, ename: 'NELSON', job: 'ACCOUNTANT',
    mgr: 7782, hiredate: ISODate('1989-06-08'),
    sal: 2310, comm: null, deptno: 10
  },
  {
    empno: 8026, ename: 'CARTER', job: 'ANALYST',
    mgr: 7566, hiredate: ISODate('1989-11-15'),
    sal: 2970, comm: null, deptno: 20
  },
  {
    empno: 8027, ename: 'MITCHELL', job: 'SALESMAN',
    mgr: 7698, hiredate: ISODate('1989-04-22'),
    sal: 1570, comm: 0, deptno: 30
  },
  {
    empno: 8028, ename: 'PEREZ', job: 'OPERATOR',
    mgr: 8000, hiredate: ISODate('1989-09-01'),
    sal: 1790, comm: null, deptno: 40
  },
  {
    empno: 8029, ename: 'ROBERTS', job: 'CLERK',
    mgr: 7782, hiredate: ISODate('1983-02-08'),
    sal: 1695, comm: null, deptno: 10
  },
  {
    empno: 8030, ename: 'TURNBULL', job: 'CLERK',
    mgr: 7902, hiredate: ISODate('1983-07-15'),
    sal: 1665, comm: null, deptno: 20
  },
  {
    empno: 8031, ename: 'PHILLIPS', job: 'SALESMAN',
    mgr: 7698, hiredate: ISODate('1983-12-22'),
    sal: 1640, comm: 250, deptno: 30
  },
  {
    empno: 8032, ename: 'CAMPBELL', job: 'CLERK',
    mgr: 8000, hiredate: ISODate('1983-05-01'),
    sal: 1555, comm: null, deptno: 40
  },
  {
    empno: 8033, ename: 'PARKER', job: 'AUDITOR',
    mgr: 7782, hiredate: ISODate('1984-10-08'),
    sal: 2480, comm: null, deptno: 10
  },
  {
    empno: 8034, ename: 'EVANS', job: 'RESEARCHER',
    mgr: 7566, hiredate: ISODate('1984-03-15'),
    sal: 3160, comm: null, deptno: 20
  },
  {
    empno: 8035, ename: 'EDWARDS', job: 'CLERK',
    mgr: 7698, hiredate: ISODate('1984-08-22'),
    sal: 1710, comm: null, deptno: 30
  },
  {
    empno: 8036, ename: 'COLLINS', job: 'ENGINEER',
    mgr: 8000, hiredate: ISODate('1984-01-01'),
    sal: 2820, comm: null, deptno: 40
  },
  {
    empno: 8037, ename: 'STEWART', job: 'ACCOUNTANT',
    mgr: 7782, hiredate: ISODate('1985-06-08'),
    sal: 2565, comm: null, deptno: 10
  },
  {
    empno: 8038, ename: 'SANCHEZ', job: 'ANALYST',
    mgr: 7566, hiredate: ISODate('1985-11-15'),
    sal: 3255, comm: null, deptno: 20
  },
  {
    empno: 8039, ename: 'MORRIS', job: 'SALESMAN',
    mgr: 7698, hiredate: ISODate('1985-04-22'),
    sal: 1780, comm: 650, deptno: 30
  },
  {
    empno: 8040, ename: 'ROGERS', job: 'TECHNICIAN',
    mgr: 8000, hiredate: ISODate('1985-09-01'),
    sal: 2285, comm: null, deptno: 40
  },
  {
    empno: 8041, ename: 'REED', job: 'CLERK',
    mgr: 7782, hiredate: ISODate('1986-02-08'),
    sal: 1950, comm: null, deptno: 10
  },
  {
    empno: 8042, ename: 'COOK', job: 'CLERK',
    mgr: 7902, hiredate: ISODate('1986-07-15'),
    sal: 1950, comm: null, deptno: 20
  },
  {
    empno: 8043, ename: 'MORGAN', job: 'SALESMAN',
    mgr: 7698, hiredate: ISODate('1986-12-22'),
    sal: 1850, comm: 900, deptno: 30
  },
  {
    empno: 8044, ename: 'BELL', job: 'OPERATOR',
    mgr: 8000, hiredate: ISODate('1986-05-01'),
    sal: 2050, comm: null, deptno: 40
  },
  {
    empno: 8045, ename: 'MURPHY', job: 'AUDITOR',
    mgr: 7782, hiredate: ISODate('1987-10-08'),
    sal: 2735, comm: null, deptno: 10
  },
  {
    empno: 8046, ename: 'BAILEY', job: 'RESEARCHER',
    mgr: 7566, hiredate: ISODate('1987-03-15'),
    sal: 2445, comm: null, deptno: 20
  },
  {
    empno: 8047, ename: 'RIVERA', job: 'CLERK',
    mgr: 7698, hiredate: ISODate('1987-08-22'),
    sal: 1920, comm: null, deptno: 30
  },
  {
    empno: 8048, ename: 'COOPER', job: 'CLERK',
    mgr: 8000, hiredate: ISODate('1987-01-01'),
    sal: 1815, comm: null, deptno: 40
  },
  {
    empno: 8049, ename: 'RICHARDSON', job: 'ACCOUNTANT',
    mgr: 7782, hiredate: ISODate('1988-06-08'),
    sal: 1820, comm: null, deptno: 10
  },
  {
    empno: 8050, ename: 'COX', job: 'ANALYST',
    mgr: 7566, hiredate: ISODate('1988-11-15'),
    sal: 2540, comm: null, deptno: 20
  },
  {
    empno: 8051, ename: 'HOWARD', job: 'SALESMAN',
    mgr: 7698, hiredate: ISODate('1988-04-22'),
    sal: 1990, comm: 0, deptno: 30
  },
  {
    empno: 8052, ename: 'WARDEN', job: 'ENGINEER',
    mgr: 8000, hiredate: ISODate('1988-09-01'),
    sal: 3080, comm: null, deptno: 40
  },
  {
    empno: 8053, ename: 'TORRES', job: 'CLERK',
    mgr: 7782, hiredate: ISODate('1989-02-08'),
    sal: 1205, comm: null, deptno: 10
  },
  {
    empno: 8054, ename: 'PETERSON', job: 'CLERK',
    mgr: 7902, hiredate: ISODate('1989-07-15'),
    sal: 1235, comm: null, deptno: 20
  },
  {
    empno: 8055, ename: 'GRAY', job: 'SALESMAN',
    mgr: 7698, hiredate: ISODate('1989-12-22'),
    sal: 2060, comm: 250, deptno: 30
  },
  {
    empno: 8056, ename: 'RAMIREZ', job: 'TECHNICIAN',
    mgr: 8000, hiredate: ISODate('1989-05-01'),
    sal: 2545, comm: null, deptno: 40
  },
  {
    empno: 8057, ename: 'WATSON', job: 'AUDITOR',
    mgr: 7782, hiredate: ISODate('1983-10-08'),
    sal: 1990, comm: null, deptno: 10
  },
  {
    empno: 8058, ename: 'BROOKS', job: 'RESEARCHER',
    mgr: 7566, hiredate: ISODate('1983-03-15'),
    sal: 2730, comm: null, deptno: 20
  },
  {
    empno: 8059, ename: 'KELLY', job: 'CLERK',
    mgr: 7698, hiredate: ISODate('1983-08-22'),
    sal: 2130, comm: null, deptno: 30
  },
  {
    empno: 8060, ename: 'SANDERS', job: 'OPERATOR',
    mgr: 8000, hiredate: ISODate('1983-01-01'),
    sal: 1410, comm: null, deptno: 40
  },
  {
    empno: 8061, ename: 'PRICE', job: 'ACCOUNTANT',
    mgr: 7782, hiredate: ISODate('1984-06-08'),
    sal: 2075, comm: null, deptno: 10
  },
  {
    empno: 8062, ename: 'BENNETT', job: 'ANALYST',
    mgr: 7566, hiredate: ISODate('1984-11-15'),
    sal: 2825, comm: null, deptno: 20
  },
  {
    empno: 8063, ename: 'WOOD', job: 'SALESMAN',
    mgr: 7698, hiredate: ISODate('1984-04-22'),
    sal: 2200, comm: 650, deptno: 30
  },
  {
    empno: 8064, ename: 'BARNES', job: 'CLERK',
    mgr: 8000, hiredate: ISODate('1984-09-01'),
    sal: 1175, comm: null, deptno: 40
  },
  {
    empno: 8065, ename: 'ROSS', job: 'CLERK',
    mgr: 7782, hiredate: ISODate('1985-02-08'),
    sal: 1460, comm: null, deptno: 10
  },
  {
    empno: 8066, ename: 'HENDERSON', job: 'CLERK',
    mgr: 7902, hiredate: ISODate('1985-07-15'),
    sal: 1520, comm: null, deptno: 20
  },
  {
    empno: 8067, ename: 'COLEMAN', job: 'SALESMAN',
    mgr: 7698, hiredate: ISODate('1985-12-22'),
    sal: 1170, comm: 900, deptno: 30
  },
  {
    empno: 8068, ename: 'JENKINS', job: 'ENGINEER',
    mgr: 8000, hiredate: ISODate('1985-05-01'),
    sal: 2440, comm: null, deptno: 40
  },
  {
    empno: 8069, ename: 'PERRY', job: 'AUDITOR',
    mgr: 7782, hiredate: ISODate('1986-10-08'),
    sal: 2245, comm: null, deptno: 10
  },
  {
    empno: 8070, ename: 'POWELL', job: 'RESEARCHER',
    mgr: 7566, hiredate: ISODate('1986-03-15'),
    sal: 3015, comm: null, deptno: 20
  },
  {
    empno: 8071, ename: 'LONG', job: 'CLERK',
    mgr: 7698, hiredate: ISODate('1986-08-22'),
    sal: 1240, comm: null, deptno: 30
  },
  {
    empno: 8072, ename: 'PATTERSON', job: 'TECHNICIAN',
    mgr: 8000, hiredate: ISODate('1986-01-01'),
    sal: 1905, comm: null, deptno: 40
  },
  {
    empno: 8073, ename: 'HUGHES', job: 'ACCOUNTANT',
    mgr: 7782, hiredate: ISODate('1987-06-08'),
    sal: 2330, comm: null, deptno: 10
  },
  {
    empno: 8074, ename: 'FLORES', job: 'ANALYST',
    mgr: 7566, hiredate: ISODate('1987-11-15'),
    sal: 3110, comm: null, deptno: 20
  },
  {
    empno: 8075, ename: 'WASHINGTON', job: 'SALESMAN',
    mgr: 7698, hiredate: ISODate('1987-04-22'),
    sal: 1310, comm: 0, deptno: 30
  },
  {
    empno: 8076, ename: 'BUTLER', job: 'OPERATOR',
    mgr: 8000, hiredate: ISODate('1987-09-01'),
    sal: 1670, comm: null, deptno: 40
  },
  {
    empno: 8077, ename: 'SIMMONS', job: 'CLERK',
    mgr: 7782, hiredate: ISODate('1988-02-08'),
    sal: 1715, comm: null, deptno: 10
  },
  {
    empno: 8078, ename: 'FOSTER', job: 'CLERK',
    mgr: 7902, hiredate: ISODate('1988-07-15'),
    sal: 1805, comm: null, deptno: 20
  },
  {
    empno: 8079, ename: 'GRAHAM', job: 'SALESMAN',
    mgr: 7698, hiredate: ISODate('1988-12-22'),
    sal: 1380, comm: 250, deptno: 30
  },
  {
    empno: 8080, ename: 'BRYANT', job: 'CLERK',
    mgr: 8000, hiredate: ISODate('1988-05-01'),
    sal: 1435, comm: null, deptno: 40
  },
  {
    empno: 8081, ename: 'ALEXANDER', job: 'AUDITOR',
    mgr: 7782, hiredate: ISODate('1989-10-08'),
    sal: 2500, comm: null, deptno: 10
  },
  {
    empno: 8082, ename: 'RUSSELL', job: 'RESEARCHER',
    mgr: 7566, hiredate: ISODate('1989-03-15'),
    sal: 3300, comm: null, deptno: 20
  },
  {
    empno: 8083, ename: 'GRIFFIN', job: 'CLERK',
    mgr: 7698, hiredate: ISODate('1989-08-22'),
    sal: 1450, comm: null, deptno: 30
  },
  {
    empno: 8084, ename: 'DIAZ', job: 'ENGINEER',
    mgr: 8000, hiredate: ISODate('1989-01-01'),
    sal: 2700, comm: null, deptno: 40
  },
  {
    empno: 8085, ename: 'HAYES', job: 'ACCOUNTANT',
    mgr: 7782, hiredate: ISODate('1983-06-08'),
    sal: 2585, comm: null, deptno: 10
  },
  {
    empno: 8086, ename: 'MYERS', job: 'ANALYST',
    mgr: 7566, hiredate: ISODate('1983-11-15'),
    sal: 3395, comm: null, deptno: 20
  },
  {
    empno: 8087, ename: 'FORDSON', job: 'SALESMAN',
    mgr: 7698, hiredate: ISODate('1983-04-22'),
    sal: 1520, comm: 650, deptno: 30
  },
  {
    empno: 8088, ename: 'HAMILTON', job: 'TECHNICIAN',
    mgr: 8000, hiredate: ISODate('1983-09-01'),
    sal: 2165, comm: null, deptno: 40
  },
  {
    empno: 8089, ename: 'SULLIVAN', job: 'CLERK',
    mgr: 7782, hiredate: ISODate('1984-02-08'),
    sal: 1970, comm: null, deptno: 10
  },
  {
    empno: 8090, ename: 'WALLACE', job: 'CLERK',
    mgr: 7902, hiredate: ISODate('1984-07-15'),
    sal: 1090, comm: null, deptno: 20
  },
  {
    empno: 8091, ename: 'WOODS', job: 'SALESMAN',
    mgr: 7698, hiredate: ISODate('1984-12-22'),
    sal: 1590, comm: 900, deptno: 30
  },
  {
    empno: 8092, ename: 'COLE', job: 'OPERATOR',
    mgr: 8000, hiredate: ISODate('1984-05-01'),
    sal: 1930, comm: null, deptno: 40
  },
  {
    empno: 8093, ename: 'WEST', job: 'AUDITOR',
    mgr: 7782, hiredate: ISODate('1985-10-08'),
    sal: 2755, comm: null, deptno: 10
  },
  {
    empno: 8094, ename: 'JORDAN', job: 'RESEARCHER',
    mgr: 7566, hiredate: ISODate('1985-03-15'),
    sal: 2585, comm: null, deptno: 20
  },
  {
    empno: 8095, ename: 'OWENS', job: 'CLERK',
    mgr: 7698, hiredate: ISODate('1985-08-22'),
    sal: 1660, comm: null, deptno: 30
  },
  {
    empno: 8096, ename: 'REYNOLDS', job: 'CLERK',
    mgr: 8000, hiredate: ISODate('1985-01-01'),
    sal: 1695, comm: null, deptno: 40
  },
  {
    empno: 8097, ename: 'FISHER', job: 'ACCOUNTANT',
    mgr: 7782, hiredate: ISODate('1986-06-08'),
    sal: 1840, comm: null, deptno: 10
  },
  {
    empno: 8098, ename: 'ELLIS', job: 'ANALYST',
    mgr: 7566, hiredate: ISODate('1986-11-15'),
    sal: 2680, comm: null, deptno: 20
  },
  {
    empno: 8099, ename: 'HARRISON', job: 'SALESMAN',
    mgr: 7698, hiredate: ISODate('1986-04-22'),
    sal: 1730, comm: 0, deptno: 30
  }
]));
