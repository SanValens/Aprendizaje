var x = 0;
var items = [3, 94, 86, 82, 9010, 87, 36, 61, 817, 15, 22, 10, 2378, 25, 2, 30, 4598, 43, 98, 59, 5357, 2, 64, 1, 4132, 58, 19, 99, 6074, 48, 80, 44, 2568, 1, 89, 77, 6025, 99, 30, 76, 3257, 82, 52, 44, 7287, 34, 87, 65, 3054, 6, 31, 33, 4444, 42, 82, 90, 179, 98, 28, 86, 693, 17, 8, 45, 9812, 47, 95, 43, 7239, 41, 82, 74, 5665, 79, 50, 26, 67100, 24, 67, 38, 57];
var front = items.length;
var back = 0;
var exchanger;
var isFinished = false;
theWholeStack();
printArray();

function sortOneHalf(){
  if(x < front-1){
    if(items[x]>items[x+1]){
      isFinished = false;
      exchanger = items[x];
      items[x] = items[x+1];
      items[x+1] = exchanger;
    }
  } else {
    return 0;
  }
  x++;
  sortOneHalf();
}
function theWholeStack(){
  if(!isFinished){
    isFinished = true;
    x = 0;
    sortOneHalf();
  } else {
    return 0;
  }
  theWholeStack();
}
function printArray(){
  for(x=0; x<front; x++){
    resultado.innerHTML += items[x];
    if(!(x == front-1)){
      resultado.innerHTML += ", ";
    }
  }
}