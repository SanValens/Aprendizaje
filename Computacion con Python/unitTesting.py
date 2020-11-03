#/usr/bin/env python3.8
import unittest

def suma(x, y):
    return x + y
    #pass #No hay nada mas, solo para "llenar el espacio vacío"


class CajaNegra(unittest.TestCase):
    def test_suma(self): #Esta funcion se ejecuta automaticamente por ser de la clase con test y eso
        num1 = 10
        num2 = 5
        resultado = suma(num1, num2)

        self.assertEqual(resultado, 15)
        #Comprobamos que resultado sea igual al valor que esperamos

if __name__ == '__main__':
    unittest.main()