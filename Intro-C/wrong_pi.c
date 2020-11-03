#include <stdio.h>

int main()
{
	int * pi;
	int a = 5;
	int b = 1;

	pi = &a;
	printf( "Antes a = %d, &a = %p, b = %d, &b = %p, p = %p\n", a, &a, b, &b, pi);
	pi++; //Estamos moviendonos un int hacia adelante, y caemos en b, cuidado con caer variables donde no queremos
	*pi = 10;
	printf( "Despues a = %d, &a = %p, b = %d, &b = %p, p = %p\n", a, &a, b, &b, pi);
}