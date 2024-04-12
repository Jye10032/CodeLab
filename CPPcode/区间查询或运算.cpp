/**
小苯有一个长度为n的数组α。它定义了一个函数。(|表示位运算中的按位或运算)
现在他有q次询问,每次询问他都会给出一个区间[l,r]，以及一个正整数k，他想知道在区间中是否存在一个右端点，使得，请你帮帮他处理每次询问吧。
输入描述
输入包含若干行。 第一行两个正整数n,q(),分别表示数组α的长度和小苯的询问次数。
第二行n个正整数,表示数组α的每个元素。
接下来q行,每行三个正整数
输出描述
输出包含q行,每行一个整数，如果存在符合条件的,请输出最小的一个,如果不存在输出一个-1。
示例1
输入
5 5
3 2 3 3 6
1 2 3
1 5 7
1 4 7
2 2 2
2 3 7
输出
1
5
-1
2
-1
说明
第一个询问,区间[1.2]中,选择r=1，区间[1,1]的f值为3，因此输出1。

思路：
每位前缀和，统计出1的个数，然后二分查找，找到最小的满足条件的右端点。
 *
 */
#include <iostream>
#include <vector>
using namespace std;
using ll = long long;

int main() {
    int n, q; cin >> n >> q;
    vector<int> a(n);
    vector<vector<int>> S(n + 2, vector<int>(32, 0));
    for (int i = 0; i < n; ++i) {
        cin >> a[i];
        S[i + 1] = S[i];
        for (int j = 0; j < 32; ++j) S[i + 1][j] += (a[i] >> j & 1);
        for (int j = 0; j < 32; ++j)cout << S[i + 1][j] << ' ';
        cout << '\n';
    }
    for (int i = 0; i < q; ++i) {
        ll left, right, k; cin >> left >> right >> k;
        left--, right--;
        ll cur = 0, l = left, r = right;
        while (l <= r) {
            ll mid = (l + r) / 2;
            cur = 0;
            for (int j = 0; j < 32; ++j) {
                int c = S[mid + 1][j] - S[left][j];
                if (c) cur |= (1 << j);
            }
            if (cur >= k) r = mid - 1;
            else l = mid + 1;
        }
        cur = 0;
        for (int j = 0; j < 32; ++j) {
            int c = S[l + 1][j] - S[left][j];
            if (c) cur |= (1 << j);
        }
        if (cur == k && l + 1 <= right + 1) cout << l + 1 << "\n";
        else cout << "-1\n";
    }
}