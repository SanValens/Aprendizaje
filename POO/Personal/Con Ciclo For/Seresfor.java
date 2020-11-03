class Seresfor {
    static int i = 0;
    public static void main(String[] args) {
        System.out.println("Estos son los seres en la barca de Noe: ");
        
        do {
            Humanfor contador= new Humanfor("Noe", false, "456465");
            contador.printDataBeen();
            //System.out.println(dude1.getClass()); //Con .getclass obetnemos... la clase a la que pertenece  
        } while (i==1); //en el ciclo while, esta acción se realiza y después se revisa la condición
 
    }
}
