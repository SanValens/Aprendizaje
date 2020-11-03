resultado.innerHTML += "Hola </br>"; //agregar cosas al HTML con "innerHTML", se usa "=" y no "()";
var front = -1;
var rear = -1;
var SIZE = 5;
var items = [];
function enQueue(value){
  this.value = value;
    if(rear == SIZE-1)
     console.log("Tienes el coso lleno pendeja");
    else{
      if(front == -1) 
        front = 0;
      rear++;
      items[rear] = value;
      document.write("El valor "+items[rear]+" se ha agregado con exito </br>");
    }
}
function deQueue() {
  if(front == -1)
    document.write("No existen elementos que eliminar </br>");
  else{
    if(rear==SIZE-1){
      items[front] = items[front+1];
      items[front+1] = items[front+2];
      items[front+2] = items[front+3];
      items[front+3] = items[front+4];
      items[front+4] = 0;
      rear -=1;
    }
    else if(rear==SIZE-2){
      items[front] = items[front+1];
      items[front+1] = items[front+2];
      items[front+2] = items[front+3];
      items[front+3] = 0;
      rear -=1;
    }
    else if(rear==SIZE-3){
      items[front] = items[front+1];
      items[front+1] = items[front+2];
      items[front+2] = 0;
      rear -=1;
    }
    else if(rear==SIZE-4){
      items[front] = items[front+1];
      items[front+1] = 0;
      rear -=1;
    }
    else if(rear==SIZE-5){
      items[front] = 0;
      rear = front = -1;
    }
  }
}
function printDataOrder() {
  document.write("Nuestro arreglo es: "+items[0]+", "+items[1]+", "+items[2]+", "+items[3]+", "+items[4]+"</br>");
}
enQueue(10);
enQueue(20);
enQueue(30);
enQueue(40);
enQueue(50);
printDataOrder();
deQueue();
