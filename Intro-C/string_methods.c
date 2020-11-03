#include <stdio.h>
#include <string.h>

int main() {
    char * nombre = "Gaia";
    char otroName[4] = "Otto";

    printf("Tus animales se llaman %s entre ellos\n", strcmp(nombre, otroName) == 0 ? "igual" : "diferente");
    printf("El nombre tiene una longitud de %ld caracteres\n", strlen(nombre));
    
    strcpy(nombre, otroName);

    printf("Ahora el otro nombre es %s, igual al primero\n", otroName);

    return 0;
}