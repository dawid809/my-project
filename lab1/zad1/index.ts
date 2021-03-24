// const namee = 'John';
// document.body.innerHTML = `<h1>Hello ${namee}</h1>`


class Person{
    imie: string;
    nazwisko :string;
    wiek: number;

    constructor(imie: string, nazwisko:string, wiek: number){
        this.imie=imie;
        this.nazwisko=nazwisko;
        this.wiek=wiek;
    }

    Show(){
        return document.body.innerHTML = `Witaj ${this.imie} i ${this.nazwisko} mam ${this.wiek} lat`
    }
}

let p = new Person('John', 'Blake', 11);
p.Show();
console.log(p.Show());