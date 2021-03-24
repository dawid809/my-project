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
];

const admins: Person[] = [
    { name: 'Matthew', surname: 'Ryan', age: 43, role: 'admin'},
    { name: 'Adam', surname: 'Terry', age: 24, role: 'admin'},
];

function logPerson(person: Person){
   console.log(`${person.name} ${person.surname}, ${person.age}, ${person.role}`)
//    users.forEach(logPerson);
//    admins.forEach(logPerson);
}


function filterPersons(persons: Person[], criteria: any): Person[] {
    return persons.filter(o =>
        Object.keys(o).some(k => o[k].includes(criteria.toLowerCase())));
}

//1.
console.log('Kolejno  osoby z tablicy Users:');
users.forEach(logPerson);
console.log('\nKolejno osoby  z tablicy Admins:');
admins.forEach(logPerson);

//2.
let persons = [...users, ...admins];
console.log('\nPołączenie dwóch tablic:');
console.log(persons);

//3.
console.log('\nWszystkie osoby w wieku powyżej 25 lat:');
console.log(persons.filter((x) => x.age >= 25));

//4.
console.log('\nOsoby o imieniu Adam:')
console.log(filterPersons(persons, { name: 'Adam' }));