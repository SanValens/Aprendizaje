class Main {
    public static void main(String[] args) throws Exception {
        definirCampeones();
    }
    public static void definirCampeones() throws Exception {
        //ConjuntoTraits getTraits = new ConjuntoTraits(); //Creamos la variable para usarla localmente
        Champ Leona = new Champ("Leona", 1, new Traits(ConjuntoTraits.isCybernetic, ConjuntoTraits.isVanguard, null));
        //agregar en orden alfabetico, el tercero es condicional (legendarios)
        Leona.printDataChamp();
        Champ Poppy = new Champ("Poppy", 1, new Traits(ConjuntoTraits.isStarGuardian, ConjuntoTraits.isVanguard, null));
        Poppy.printDataChamp();
    }
    
}