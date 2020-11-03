#include <stdio.h>
//For reading reading this code's output you must use: "echo $?", you'r welcome
int main() {
	int un_valor = 121212, otro_valor = 1;
	do {
		un_valor -= otro_valor;
		otro_valor++;
	} while(un_valor > 10);
	printf("To see the output write: echo $?\n");
	return otro_valor;
}
