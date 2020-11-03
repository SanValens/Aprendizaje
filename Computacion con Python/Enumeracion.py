#/usr/bin/env python3.8
valor = int(input('Elige un valor: '))
resultado = 0

while resultado ** 2 < valor:
    resultado += 1

if resultado ** 2 == valor:
    print(f'La raíz cuadrada de {valor} es {resultado}')
else: print(f'La raíz cuadrada de {valor} no es exacta')