import java.util.ArrayList;
import java.util.Map;

class UberBlack extends Car{
    Map<String, ArrayList<String>> typeCarAccepted; //creamos un mapa, donde se eligen los datos disponibles
    ArrayList<String> seatsMaterial;
    public UberBlack( String license,  Account driver,
    Map<String, ArrayList<String>> typeCarAccepted, ArrayList<String> seatsMaterial) {
        super(license, driver);
        this.typeCarAccepted = typeCarAccepted;
        this.seatsMaterial = seatsMaterial;
    }
} 