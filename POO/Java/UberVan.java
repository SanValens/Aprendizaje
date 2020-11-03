import java.util.ArrayList;
import java.util.Map;

class UberVan extends Car {
    Map<String, Map<String, Integer>> typeAccepted;
    ArrayList<String> materialSeats;
    private Integer passenger;
    public UberVan(String license, Account driver){
        super(license, driver);
    }

    @Override //Clave para saber que estamos usando polimorfismo
    public void setPassenger(Integer passenger) {
        if(passenger == 6){
            this.passenger = passenger; //Sin este this el valor no es válido en el objeto
        }
        else System.out.println("Por favor no intentes hacer trampa");
    }
    
    @Override
    void printDataCar() {
        if(passenger != null){
            System.out.println("Passengers: "+passenger);
        }
    }
}