/* 
Given a 1-indexed array of integers numbers that is already sorted in non-decreasing order, find two numbers such that they add up to a specific target number. Let these two numbers be numbers[index1] and numbers[index2] where 1 <= index1 < index2 <= numbers.length.

Return the indices of the two numbers, index1 and index2, added by one as an integer array [index1, index2] of length 2.

The tests are generated such that there is exactly one solution. You may not use the same element twice.
*/

#include <bits/stdc++.h>

using namespace std;

int main(vector<int>& numbers, int target) {
  int L = 0, R = numbers.size() -1;
  while(L <= R) {
    if(numbers[L] + numbers[R] == target) return {L+1, R+1} ;
    if(numbers[L] + numbers[R] > target) R -= 1;
    else L += 1;
  }
  return {-1, -1};
}