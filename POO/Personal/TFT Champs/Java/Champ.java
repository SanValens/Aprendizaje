class Champ {
    String name;
    Integer cost;
    Traits type;
        public Champ(String name, Integer cost, Traits type){
        this.name = name;
        this.cost = cost;
        this.type = type;
    }
    void printDataChamp(){
        System.out.println("El campeón es: " + name);
        System.out.println("Su primera clase: " + type.primeraClase);
        System.out.println("Su segunda clase: " + type.segundaClase);
    }
}