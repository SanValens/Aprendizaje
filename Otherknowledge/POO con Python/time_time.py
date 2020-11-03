#/usr/bin/env python3.8
#/usr/bin/env python3.8
import time

respuesta = 0

start = time.time() #Float with a number
for i in range(10000000000):
    respuesta += i
end = time.time() #Float with another number some seconds later

print('Duración: ', end - start)