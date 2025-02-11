let employees = [
    {
      employeeId: 1,
      name: "Dev Bhattacharya",
      email: "devbhattacharya42@gmail.com",
      departmentId: 1,
      roleId: 1,
    },
    {
      employeeId: 2,
      name: "Debu Bhattacharya",
      email: "debubhattacharya42@gmail.com",
      departmentId: 2,
      roleId: 2,
    },
    {
      employeeId: 3,
      name: "Deban Bhattacharya",
      email: "debanbhattacharya42@gmail.com",
      departmentId: 1,
      roleId: 3,
    },
  ];
  function getAllEmployees() {
    return employees;
  }
  function getEmployeesById(id) {
    return employees.find((employee) => employee.employeeId === id);
  }
  module.exports = { getAllEmployees, getEmployeesById };
  