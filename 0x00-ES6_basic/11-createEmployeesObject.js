export default function createEmployeesObject(departmentName, ...employees) {
    return Object(departmentName, employees);
}
