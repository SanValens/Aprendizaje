#/usr/bin/env python3.8
import unittest

class CajaCristal(unittest.TestCase):

    def esLegal(self, edad):
        if edad >= 18:
            return True
        else:
            return False

    #Aquí escribimos cada uno de los test que deseamos como def
    def test_es_mayor(self):
        edad = 20
        
        self.assertEqual(self.esLegal(edad), True)

    def test_es_menor(self):
        edad = 15
        self.assertEqual(self.esLegal(edad), False)
  

if __name__ == '__main__':
    unittest.main()