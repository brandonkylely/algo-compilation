/**
 * https://www.tutorialspoint.com/format-specifiers-in-c
 * ctrl+shift+c
 * cd algorithms/01-fibonacci 
 * solution
*/

#include <stdio.h>
int main() {

  int n;
  int n1 = 0;
  int n2 = 1;

  int n3 = n1 + n2;

  printf("Enter the number of terms: ");
  // Signed integer %d
  
  scanf("%d", &n);

  printf("Fibonacci Series: %d, %d, ", n1, n2);

  for (int i = 3; i <= n; ++i) {
    printf("%d, ", n3);
    n1 = n2;
    n2 = n3;
    n3 = n1 + n2;
  }
}
