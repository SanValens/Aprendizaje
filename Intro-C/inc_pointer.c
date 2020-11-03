#include <stdio.h>

int main()
{
    int n = 5;
    int * pi = &n;
    char c = 'A';
    char * pc = &c;

    printf("Antes pi era: %p, mientras pc: %p\n", pi, pc);
    pi++;
    pc++;
    printf("Después pi es: %p, mientras pc: %p\n", pi, pc);
    return 0;
}
