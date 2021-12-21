#include <bits/stdc++.h>

using namespace std;

int main()
{
  vector<int> arr = {5, 7, 2, 1, 124, 300, 8, 9, 12, 34, 21, 6, 9, 1, 3, 2, 25, 13, 98};
  int n = arr.size();

  for(int i = 0; i < n; i++) {
    for(int j = 0; j < n; j++) {
      if(arr[j] > arr[j+1]) {
        int temp = arr[j];
        arr[j] = arr[j+1];
        arr[j+1] = temp;
      }
    }
  }

  for (int c : arr)
  {
    cout << c << " ";
  }
}