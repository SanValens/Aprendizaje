class Insert{
  static int j;
  static int i;
  static int[] objeto;
  static int size;
  static int x;
  public static void main(String[] args) throws Exception{
    objeto = new int[]{1, 2, 3, 4, 5};
    size = objeto.length; 
    insertSort();
  }
  public static void insertSort() throws Exception{
    int keeper;
    for(i=1; i<size; i++){
      j = i-1;
      keeper = objeto[j+1];
      while(j>=0 && objeto[j]>keeper){
        objeto[j+1] = objeto[j];
        j--;
      }
      objeto[j+1] = keeper;
    } 
    printData();
  }
  public static void printData() throws Exception {
    for(x=0; x<size; x++)
      System.out.print(objeto[x]+" ");
  }
}