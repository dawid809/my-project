// TODO:
// 1. Przy pomocy funkcji logPerson wypisać osoby z tablicy users i admins (patrz foreach)
// 2. Złączyć tablice users i admins i wypisać zawartość złączonej tablicy na konsoli (patrz operator spread)
// 3. Wypisać osoby powyżej 25 lat (patrz operator filter)
// 4. Wypisać osoby o imieniu Adam (zaimplementować funkcję filterPersons) -> const filtered = filterPersons(persons, { name: 'Adam' });


interface Person{
    name: string;
    surname: string;
    age: number;
    role: string;
}

const users : Person[] = [
    { name: 'John', surname: 'Smith', age: 25, role: 'user'},
    { name: 'Adam', surname: 'Johnson', age: 35, role: 'user'},
    { name: 'Andy', surname: 'Cole', age: 18, role: 'user'},
]

const admins: Person[] = [
    { name: 'Matthew', surname: 'Ryan', age: 43, role: 'admin'},
    { name: 'Adam', surname: 'Terry', age: 24, role: 'admin'},
]

function logPerson(person: Person){
   console.log(`${person.name} ${person.surname}, ${person.age}, ${person.role}`)
//    users.forEach(logPerson);
//    admins.forEach(logPerson);
}
users.forEach(logPerson);
admins.forEach(logPerson);

let mergedArray = [...users, ...admins];
console.log(...mergedArray);

// const filterByAge(person: Person[], age: number)=>
//    return person.filter(person=> person.age >= 25);
// }
// let filteredArray= mergedArray.filter(filterByAge);
// console.log(filteredArray);