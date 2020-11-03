class UberX extends Car {
    constructor(license, driver, model, brand){ //brand y model se declaran acá mismo
        super(license, driver);
        this.model = model;
        this.brand = brand;
    }
    printDataCar(){
        console.log(this.model);
    }
}