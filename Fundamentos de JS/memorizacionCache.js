function factorialNumero(num) {
  if(!this.cache){
    this.cache = {}
  }
  if(this.cache[num]){
    return this.cache[num]
  }
  if(num  == 1){
    return 1
  }
  
  this.cache[num] = num * factorialNumero(num - 1)
  return this.cache[num]
}