#include <stdio.h>

int main() {
    int number = 12;
    int * pointerNumber = &number;

    printf("%d\n", *pointerNumber);
}