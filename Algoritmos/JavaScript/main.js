class User{
  constructor(id, accountName, champName){
    this.id=id;
    this.accountName=accountName;
    this.champName=champName;
  }
}

var primerUsuario = new User("0000001", "Rito Feedersito", "Miss Fortune");
console.log(primerUsuario.champName);