// const name = 'John';
// document.body.innerHTML = `<h1>Hello ${name}</h1>`
var Person = /** @class */ (function () {
    function Person(imie, nazwisko, wiek) {
        this.imie = imie;
        this.nazwisko = nazwisko;
        this.wiek = wiek;
    }
    Person.prototype.Show = function () {
        return "Witaj " + this.imie + " i " + this.nazwisko + " mam " + this.wiek + " lat";
    };
    return Person;
}());
var p = new Person('John', 'Blake', 11);
p.Show();
console.log(p.Show());
