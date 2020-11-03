#include <stdio.h>

int main(int argc, const char * argv[]) {
    for (int i = 0; i < argc; i++){
        printf("El parámetro #%d tiene: %s\n", i, argv[i]);
    }
}
