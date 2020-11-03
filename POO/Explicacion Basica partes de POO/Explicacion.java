class Car {  //clase
    String license; //atributos
    Account driver; 
    public Car(String license, Account driver) { //Metodo constructor, con sus parámetros
        this.license = license;
        this.driver = driver; //Parámetros con la palabra reservada "this"
    }
    
    void printDataCar() { //Método declarado en Java para imprimir información
        System.out.println("License: " + license + " Driver: " + driver.name);
    }

}