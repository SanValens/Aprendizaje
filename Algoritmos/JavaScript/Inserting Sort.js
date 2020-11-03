//Agregar los numero a continuación:
var objeto = [5, 1, 5, 6, 33, 13, 8, 12, -1, -532];
var size = objeto.length;
main();
function main() {
  insertingSort();
  printData();
}
function insertingSort(){
  var keeper;
  var i, j;
  for(i=1;i<size;i++){
    j = i-1;
    keeper = objeto[j+1];
    while(j>=0 && objeto[j]>keeper){
      objeto[j+1] = objeto[j];
      j--;
    }
    objeto[j+1] = keeper;
  }
}
function printData(){
  for(var x=0; x<size; x++)
    document.write(objeto[x]+" ");
}