class Car{ //se puede escribir así, con "class Car" + constructor
    constructor(license, driver) {
        this.id;
        this.license = license;
        this.driver = driver;
        this.passenger;
    }
    //ya no es necesario el "prototype", porque usamos una clase y no una función en sí
    printDataCar(){
        console.log(this.driver);
        console.log(this.driver.name);
        console.log(this.driver.document);
    }
}