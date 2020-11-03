var getTraits = new ConjuntoTraits; //aunque no es obligatorio, es buena practica asignar estos valores a 
//una variable local
var NeekoInfo = new Champ("Neeko", 2, new Traits(getTraits.isStarG, getTraits.isProtector, null)); //Ingresense en orden alfabetico
//console.log(this.isStarG); = console.log(getTraits.isStarG);
    NeekoInfo.printDataChamp();
var KaiSaInfo = new Champ("Kai'Sa", 2, new Traits(getTraits.isInfiltrator, getTraits.isValkyrie, null));
    KaiSaInfo.printDataChamp();