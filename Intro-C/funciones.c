#include <stdio.h>
int fun(int valor) 
{
	return valor*2;
}


int main() 
{
	int numero = 4;
	printf("%d\n", fun(numero));
	return 0;
}
