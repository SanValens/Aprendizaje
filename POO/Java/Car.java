class Car { //la mayúscula en "Car" es OBLIGATORIA 
    private Integer id;
    private String license;
    private Account driver; //variable de tipo Account, es decir que está en la clase Account
    private Integer passenger;
    //El objeto "primerCarro" esta DEFINIDO por la clase "Car"
    public Car(String license, Account driver) { //se crea el objeto "de tipo" car con algunos parametros necesarios
    //Estos parametros son variables locales, podrian llamarse diferente, pues son cosas diferentes
        this.license = license;
        this.driver = driver; 
    }
    //voy a declarar un método que me sirva para traer los datos de esa clase:
    void printDataCar() { //palabra reservada para poder solo imprimir cosas sin que sea el main String[] principal
        if(passenger != null){
            System.out.println("License: " + license + " Driver: " + driver.name+" Passengers: "+passenger); //AQUI PUEDE SER "this.driver.name" o no
        }
    }
    public Integer getPassenger() { //Getter
        return passenger;
    }
    public void setPassenger(Integer passenger){ //Setter
        if(passenger == 4){
            this.passenger = passenger; //Sin este this el valor no es válido en el objeto
        }
        else System.out.println("Por favor no intentes hacer trampa");
    }
    public Integer getId() {
        return id;
    }
    public void setId(Integer id) {
        this.id = id;
    }
    public String getLicense() {
        return license;
    }
    public void setLicense(String license) {
        this.license = license;
    }
    public Account getDriver() {
        return driver;
    }
    public void setDriver(Account driver) {
        this.driver = driver;
    }
}
