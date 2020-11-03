class Champ {
    constructor(name, cost, traits) {
        this.name = name;
        this.cost = cost;
        this.traits = traits;
    }
    printDataChamp(){
        console.log("El campeón tiene como nombre: "+this.name);
        console.log(this.traits); //Object object, pero no dice mas
        console.log("El primero trait es: "+this.traits.primeraClase);
        console.log("El segunda trait es: "+this.traits.segundaClase);
    }
}