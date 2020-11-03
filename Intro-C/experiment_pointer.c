#include <stdio.h>

int main()
{
	int a = 12;
	char b = 'B';
	char c = 'C';
	char d = 'D';
	char e = 'E';
	int * pointer = &a;
	printf("%p\n", pointer);
	pointer++;
	printf("Ubicación ahora de pointer: %p\n", pointer);
	printf("Ubicación de cada char: %p\n", &b);
	printf("Ubicación de cada char: %p\n", &c);
	printf("Ubicación de cada char: %p\n", &d);
	printf("Ubicación de cada char: %p\n", &e);
}
