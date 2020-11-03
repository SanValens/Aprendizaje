//Aquí diremos que UberX es una extensión de Car, aplicando la herencia
//Lo que estoy haciendo es trayendo los atributos de Car y agregandolos a UberX, 
//pues tienen atributos en común todos los tipos de carros

class UberX extends Car{
    String model;
    String brand;
    public UberX(String license, Account driver, String model, String brand){ 
        //Este es el constructor, debe tener TODOS 
        //los elementos
        super(license, driver); //Con "super" llamo al método constructor de la clase padre, Car
        //"SUPER" HACE REFERENCIA A LOS ATRIBUTOS DE LA SUPERCLASE
        //"THIS" HACE REFERENCIA A LOS ATRIBUTOS DE LA CLASE ACTUAL O EN LA QUE ESTOY
        this.model = model;
        this.brand = brand;
        //los "this." son únicos en constructores; ya estan definidos en Car.java
        //"super." para LLAMAR a los atributos de la super clase
    }
}