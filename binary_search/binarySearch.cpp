/* 
Given an array of integers nums which is sorted in ascending order, and an integer target, write a function to search target in nums. If target exists, then return its index. Otherwise, return -1.

You must write an algorithm with O(log n) runtime complexity.
*/

#include <bits/stdc++.h>

using namespace std;

int main(vector<int>& nums, int target) {
  int L = 0, R = nums.size() - 1;
  while (L <= R) {
    int mid = L + (R - L) / 2;
    if(nums[mid] == target) return mid;
    if(nums[mid] < target) L = mid + 1;
    else R = mid - 1;
  }
  return -1;
}