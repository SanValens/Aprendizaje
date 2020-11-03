#/usr/bin/env python3.8
i = 10
cont = 3
print('Comienzo')
for i in range(3):
    print('Hola ', end='')
print()
print("Final")

#Si le quitas "range" es usar listas, arrays o cadenas

#ITERABLES:
tanti2 = iter({
    'edad': 15,
    'noviazgos': 0 # :(
})
#O crear el objeto y depues iterarlo, o guardando la iteracion sobre si mismo u otra variable


print(next(tanti2))
#Como es la primera vez, muestra el primer key, si fuera un array pues muestra el valor


#FOR: 
tanti = {'nombre': 'Santiago', 'apellido': 'Valenzuela'}

for i, e in tanti.items(): 
    print(f'Vamos en el valor: {i}, que tiene dentro {e}')
#También puedes usar .keys() o .values() para obtener tales atributos en la variable i

