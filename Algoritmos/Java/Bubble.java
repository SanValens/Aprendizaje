class Bubble {
  static int j;
  static int[] setOfNumbers;
  static int exchanger;
  static int counter = 1;
  static int x;
  static int i;
  public static void main(String[] args) throws Exception{
    setOfNumbers = new int[]{10, 5, 3, 30, 23, -1, 50}; //No se le puede dar la dimension y se proveen los valores
    x= setOfNumbers.length;
    for(j=0; j<x-1;j++){
      System.out.println("");
      System.out.println("Start");
      for(i=0; i<x-1-j; i++){ //Mas sobre el funcionamiento de esto en Bubble.c
        goFroward();
        System.out.print(i+" Move ");
      }
    }
    printResults();
  }
  public static void goFroward() throws Exception{
    if(setOfNumbers[i]>setOfNumbers[i+1]){
      exchanger= setOfNumbers[i];
      setOfNumbers[i] = setOfNumbers[i+1];
      setOfNumbers[i+1] = exchanger;
    }
  }
  public static void printResults() throws Exception{
    System.out.println("");
    for(i=0;i<x;i++){
      System.out.print(setOfNumbers[i]);
      if(i!=x-1) System.out.print(", ");
    }
  }
}
