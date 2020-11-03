#/usr/bin/env python3.8
from champs import Champs
from traits import Traits
from stackTraits import StackTraits
if __name__ == "__main__":
    getTraits = StackTraits #Aquí estoy llamando los valores de Stack, y metiendolos en la variable "getTraits"
    IreliaInfo = Champs("Irelia", 4, Traits(getTraits.isBlademaster, getTraits.isCybernetic, getTraits.isManaReaver))
    #Agreguence los Traits en orden alfebeticos
    IreliaInfo.printDataChamp()
    #Ahora rito quizo crear un nuevo campeón
    MissFortuneInfo = Champs("Miss Fortune", 5, Traits(getTraits.isBlaster, getTraits.isMercenary, getTraits.isValkyrie))
    MissFortuneInfo.printDataChamp()