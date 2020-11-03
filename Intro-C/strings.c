#include <stdio.h>

int main()
{
    //manera 1
    char name[] = "Santiago Andrés";
    //manera 2
    char * nombre = "Santiago Florecito"; 
    //-> también crea un tipo de array printf("%c\n", name[0]);
    printf("%s\n", nombre);
    printf("%s\n", name);
}