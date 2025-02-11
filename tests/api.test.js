const request = require("supertest");
const http = require("http");
const { getAllEmployees, getEmployeesById } = require("../controllers/index");
const { app } = require("../index");

jest.mock("../controllers/index", () => ({
  ...jest.requireActual("../controllers/index"),
  getAllEmployees: jest.fn(),
  getEmployeesById: jest.fn(),
}));
let server;
beforeAll((done) => {
  server = http.createServer(app);
  server.listen(3001, done);
});
afterAll((done) => {
    server.close(done);
});

describe("Controller function tests", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });
  test("Should return all the employees", () => {
    let mockedEmployees = [
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
    getAllEmployees.mockReturnValue(mockedEmployees);
    let result = getAllEmployees();
    expect(result).toEqual(mockedEmployees);
    expect(result.length).toBe(3);
  });
});
describe("Api control tests", () => {
  test("GET /employees should return all the employees", async () => {
    let response = await request(server).get("/employees");
    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual({
      employees: [
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
      ],
    });
  });
});
