class Humanfor {
    String name;
    Boolean diseases;
    String id;

    public Humanfor(String name, Boolean diseases, String id) {
        this.name = name;
        this.diseases = diseases;
        this.id = id;
    }    
    void printDataBeen(){
        System.out.println("Nombre: " + name + " | Diseases: " + diseases + " | ID: "+ id);
    }
}
