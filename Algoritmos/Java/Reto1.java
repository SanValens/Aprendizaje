//Mi programa compara parejas de números, si uno menor al otro está donde no debería estar, entonces mueve todos los valores del arreglo (hasta llegar a la ubicación de este numero)  uno a la derecha, y este valor los pone en el principio.
class Reto1 {
  static int[] objeto;
  static int x;
  static boolean unfinished = true;
  static int y;
  static int keeper;
  static int size;
  public static void main(String[] args)  throws Exception{
    objeto = new int[]{61, 4, 1, -5, 76, 21, 98}; //Ingresese el ARRAY
    size = objeto.length;
    process();
    printData();
  }
  public static void process() throws Exception {
    while(unfinished) { //Verifica que no se hicieron cambios
      unfinished = false;
      for(x=0; x<size-1; x++){ //Repite todo el array por parejas
        keeper = objeto[x+1];
        if(objeto[x]>objeto[x+1]){ //Verificador
          unfinished = true;
          for(y=x; y>=0;y--){ /*Mueve los valores del array uno a la derecha
            Hasta llegar al valor erróneo*/
            objeto[y+1] = objeto[y];
          }
          objeto[0] = keeper;
        }
      }
    }
  }
  public static void printData() throws Exception {
    for(x=0; x<size; x++){
      System.out.print(objeto[x] + " ");
    }
  }
}