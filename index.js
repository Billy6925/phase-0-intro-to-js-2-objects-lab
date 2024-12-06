const employee = {
    name: "Billy",
    address: "Oyugis",
}
function updateEmployeeWithKeyAndValue(employeeObj, key, value) {
const newEmployeeObj = {...employeeObj};
return {
    ...employeeObj,
    [key] : value
};
}
function destructivelyUpdateEmployeeWithKeyAndValue(employeeObj, key, value) {
    employeeObj[key] = value;
    return employeeObj;
}
function deleteFromEmployeeByKey(employeeObj, key) {
    const newEmployeeObj = {...employeeObj};
    delete newEmployeeObj[key];
    return newEmployeeObj;
}
function destructivelyDeleteFromEmployeeByKey(employeeObj, key) {
delete employeeObj[key];
return employeeObj;
}// Write your solution in this file!
