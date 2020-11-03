class UberPool extends Car {
    constructor(license, driver, model, brand) {
        super(license, driver)
        this.model = model;
        this.brand = brand;
    }
    printDataCar(){
        console.log(this.model)
    }
}