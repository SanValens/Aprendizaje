class Main { //"LAS CLASES SON LAS FORMAS DE GENERAR OBJETOS"
   public static void main(String[] args) throws Exception {
      System.out.println("Hola perro");
      //ESTE ES EL NOMBRE DE LA CLASE Y SUS ESTADOS (ATRIBUTOS) 
      UberX primerCarro = new UberX("AMQ123", new Account("Andrés Herrera", "102728924"), "Chevrolet", "Sonic");
      primerCarro.setPassenger(4);
      //Llamo al método para asignar el valor que dí, en este se valora como valido o no
      /////////////////SEGÚN MIS EXPERIMENTOS, LA CLASE Y EL MÉTODO DEBEN TENER EL MISMO NOMBRE\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
      //1. tipo de dato- ::: es decir, llama la clase en la misma carpeta 
      //2. crea el objeto - :::: es decir, la vaiable se llamará "car", tambien se puede llamar "pepito" "uydasjñ"
      //3. palabra reservada "new", empieza a vivir en memoria, y creo una "instancia" de la clase
      //4. el tipo de dato pero con (); para que se ejecute MÉTODO CONSTRUCTOR
      //ESTE ES SU COMPORTAMIENTO
      primerCarro.printDataCar();
      //System.out.println(primerCarro.driver.name); un elemento de un elemento de un elemento
      UberVan uVan = new UberVan("FGH763", new Account("Joaquín Loera", "102728924"));
      uVan.setPassenger(6);
      uVan.printDataCar();
   } 
}