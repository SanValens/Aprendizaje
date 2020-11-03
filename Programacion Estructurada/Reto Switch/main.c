#include <stdio.h>
#include <stdlib.h>

int main()
{
    printf("Te despiertas una mañana y tu tío te acecha por \n la ventana, parecer que quiere entrar a tu cuarto \n");
    int choice;
    printf("Elige el numero 911 para llamar a la policía");
    printf("Elige el numero 202932483948233021 para huir");
    printf("Elige el número 1 para dejarlo entrar");
    scanf("i%",&choice);
    switch(choice)
    {
    case 1: printf("¿Se te ofrece algo? Tio");
        break;
    case 911: printf("Los policias llegaran tarde para salvarte");
        break;
    case 202932483948233021: printf("Huyes apurado por los bosques, llevas 3 días corriendo en la \n oscuridad hasta morir alejandote de la nada que te seguía");
        break;
    default: printf("Naturalmente lo has dejado entrar");
        break;
    }
    return 0;
}
