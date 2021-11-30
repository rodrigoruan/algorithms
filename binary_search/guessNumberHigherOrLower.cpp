/*
We are playing the Guess Game. The game is as follows:

I pick a number from 1 to n. You have to guess which number I picked.

Every time you guess wrong, I will tell you whether the number I picked is higher or lower than your guess.

You call a pre-defined API int guess(int num), which returns 3 possible results:

-1: The number I picked is lower than your guess (i.e. pick < num).
1: The number I picked is higher than your guess (i.e. pick > num).
0: The number I picked is equal to your guess (i.e. pick == num).
Return the number that I picked. 
*/

#include <bits/stdc++.h>

using namespace std;

int main(int n)
{
  int L = 0, R = n;
  while (L <= R) {
    int mid = L + (R - L) / 2;
    if (guess(mid) == 0) return mid;
    if (guess(mid) == -1) R = mid - 1;
    else L = mid + 1;
  }
  return -1;
}