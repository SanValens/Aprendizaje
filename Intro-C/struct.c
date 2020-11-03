#include <stdio.h> 
#include <stdlib.h>
#include <string.h>

//Actualizar este codigo cuando descubramos como hacer strings en C

int main(int argc, char * argv[])
{
    if(argc < 6) {
        printf("Son requeridos 5 datos para la creación de un nuevo trabajador\n");
        return 1; //Usualmente significa error cuando es 1
    }
    struct trabajador
    {
        int id;
        char name[20];
        int edad;
        int cedula;
        char * encargado;
    };
    struct trabajador new_worker;
    if(strlen(argv[3]) < 20) { //Como ubicamos un límite entonces es necesario revisar la logitud -> buffer overflow
        strcpy(argv[3], new_worker.name);
    } else {
        printf("Numero de caracteres en el nombre supera el límite\n");
        return 1;
    }
    new_worker.id = atoi(argv[1]);
    new_worker.edad = atoi(argv[3]);
    new_worker.cedula = atoi(argv[4]);

    strcpy(argv[5], new_worker.encargado);
    
    printf("La informacíon del tabajador a quedado de la siguiente manera:\n");
    printf("ID: %d, name: %s, edad: %d\n", new_worker.id, new_worker.name, new_worker.edad);
    printf("CC: %d, encargado: %s\n", new_worker.cedula, new_worker.encargado);
    return 0;
}
