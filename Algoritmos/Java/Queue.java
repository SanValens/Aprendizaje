class Queue {
  public static int size;
  public static int front = -1;
  public static int rear =-1;
  public static int x;
  public static int[] items;
  public static void main(final String[] args) throws Exception{
    items = new int[5];
    size = items.length;
    //Aquí en adelante puedes ingresar tus acciones
    enQueue(5);
    enQueue(6);
    deQueue();
    deQueue();
    deQueue();
    enQueue(1);
    enQueue(2);
    enQueue(3);
    enQueue(4);
    enQueue(5);
    enQueue(6);
    deQueue();
    deQueue();
    deQueue();
    enQueue(6);
    enQueue(7);
    enQueue(8);
    printDataOrder();
  }

  public static void enQueue(Integer value)  throws Exception{
    if(rear == size-1)System.out.println("La cola esta llena");
    else {
      if(front == -1)
        front = 0;
      rear++;
      items[rear] = value;
      System.out.println("El valor "+value+" fue agregado correctamente");
    }
  }
  public static void deQueue() throws Exception{
    if(rear == -1){
      System.out.println("Nuestra Queue esta vacia");
    }
    else{
      System.out.println("Fue eliminado el valor: "+items[0]);
      for(x=0; x<rear; x++){
        items[x]=items[x+1];
      }
      items[rear] = 0;
      rear--;
      if(rear == -1) front = rear;
    }
  }
  public static void printDataOrder() throws Exception{
    for(x=0; x<size; x++){
      System.out.print(items[x]+" ");
    }
    System.out.println();
  }
}