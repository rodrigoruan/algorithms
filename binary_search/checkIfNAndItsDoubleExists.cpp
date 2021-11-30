/*
Given an array arr of integers, check if there exists two integers N and M such that N is the double of M ( i.e. N = 2 * M).

More formally check if there exists two indices i and j such that :

i != j
0 <= i, j < arr.length
arr[i] == 2 * arr[j]
*/

#include <bits/stdc++.h>

using namespace std;

bool checkIfExist(vector<int>& arr) {
  sort(arr.begin(), arr.end());
  for(int i = 0; i < arr.size(); i++) {
    int val = arr[i], L = 0, R = arr.size() - 1;
    while(L <= R) {
      int mid = L + (R - L) / 2;
      if(arr[mid]*2 == val && mid != i) return true;
      if(arr[mid]*2 < val) L = mid + 1;
      else R = mid - 1;
    }
  }
  return false; 
}