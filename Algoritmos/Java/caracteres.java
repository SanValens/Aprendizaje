public class caracteres{
  public static void main(String[] args) {
    caracteres obj = new caracteres();
    String result = obj.reverseString("Arenera");
    System.out.println(result);
  }
  public String reverseString(String str){ //El "String" identifica que tipo de valor hará return, pues no es void
  if(str.isEmpty()){
      return str;
    } else {
      //System.out.println(str); Aquí podrás ver como str cada vez vale uno menos y return vale uno mas
      return str.charAt(0)+reverseString(str.substring(1));
      /*Acumula los .charAt a medida que se repite,
      .chatAt  selecciona el caracter en esa posicion del String
      /*str.charAt(0) debe ir al final, por alguna razon, tal vez porque se debe sumar:
      "4+3+2+1+0" (al reves) y no "0+1+2+3+4", que lo dejaría igual*/
    }
  }
} 