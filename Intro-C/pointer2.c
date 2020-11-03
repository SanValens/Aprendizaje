#include <stdio.h>

void duplicar(int * a)
{
	*a *=2;
}

int main()
{	
	int entrada;
	int a = 5;

	printf("Su entrada es: ");
	scanf("%d", &entrada); //automaticamente salto de linea, segundo parametro pide una ubicacion para el pointer.
	printf("Pusiste %d en la entrada\n", entrada);
	printf("Antes de duplicar a = %d\n", a);
	duplicar(&a);
	printf("Después de duplicar a = %d\n", a);
}
