var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
var users = [
    { name: 'John', surname: 'Smith', age: 25, role: 'user' },
    { name: 'Adam', surname: 'Johnson', age: 35, role: 'user' },
    { name: 'Andy', surname: 'Cole', age: 18, role: 'user' },
];
var admins = [
    { name: 'Matthew', surname: 'Ryan', age: 43, role: 'admin' },
    { name: 'Adam', surname: 'Terry', age: 24, role: 'admin' },
];
function logPerson(person) {
    console.log(person.name + " " + person.surname + ", " + person.age + ", " + person.role);
    //    users.forEach(logPerson);
    //    admins.forEach(logPerson);
}
users.forEach(logPerson);
admins.forEach(logPerson);
var mergedArray = __spreadArray(__spreadArray([], users), admins);
console.log.apply(console, mergedArray);
function filterByAge(element, index, array) {
    return element > 25;
}
var filteredArray = mergedArray.filter(filterByAge);
console.log(filteredArray);
