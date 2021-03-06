#pragma GCC optimize("Ofast")
#include <bits/stdc++.h>
#define ll long long
using namespace std;

struct IO {
  char ibuf[1 << 18], *s, *t, obuf[1 << 18], *o, vbuf[65];
  IO() : s(ibuf), t(ibuf), o(obuf) {}
  ~IO() { fwrite(obuf, 1, o - obuf, stdout); }
  inline char gc() {
    (s == t) && (t = (s = ibuf) + fread(ibuf, 1, 1 << 18, stdin));
    return s == t ? 0 : *s++;
  }
  inline void pc(char c) {
    (o == obuf + (1 << 18)) && (fwrite(obuf, 1, 1 << 18, stdout), o = obuf);
    *o++ = c;
  }
  template <typename T>
  operator T() {
    register T r = 0, f = 1;
    register char c = gc();
    for (; !isdigit(c); c = gc()) f = c == '-' ? -1 : 1;
    for (; isdigit(c); c = gc()) r = (((r << 2) + r) << 1) + (c - '0');
    return f == 1 ? r : -r;
  }
  void operator=(char x) { pc(x); }
  void operator=(const char *x) {
    register int u = 0;
    while (x[u]) pc(x[u++]);
  }
  template <typename T>
  void operator=(T x) {
    register int u = 0;
    if (x == 0) return pc('0'), void();
    if (x < 0) x = -x, pc('-');
    while (x) vbuf[++u] = x % 10 + 48, x /= 10;
    while (u) pc(vbuf[u--]);
  }
} io;
const int N = 100005, M = 600005;
struct Edge {
  int u, v, w;
  bool operator<(const Edge &e) const { return w < e.w; }
} a[M];
int n, m, head[N], ver[M], nxt[M], edge[M], tot, fa[N], dep[N], vis[M];
ll f[N][35], g[N][35][2];
inline void addedge(int u, int v, int w) {
  ver[tot] = v;
  edge[tot] = w;
  nxt[tot] = head[u];
  head[u] = tot++;
}
inline void dfs(int x) {
  for (int i = head[x], to; ~i; i = nxt[i])
    if ((to = ver[i]) != f[x][0]) {
      f[to][0] = x;
      g[to][0][0] = edge[i];
      g[to][0][1] = -(1ll << 60);
      dep[to] = dep[x] + 1;
      dfs(to);
    }
}
inline int find(int x) { return x == fa[x] ? x : fa[x] = find(fa[x]); }
inline ll Query(int x, int y, int z) {
  if (dep[x] < dep[y]) swap(x, y);
  ll ans = 0;
  for (int t = 25; t >= 0; --t)
    if (dep[f[x][t]] >= dep[y]) {
      ans = max(ans, g[x][t][0] == z ? g[x][t][1] : g[x][t][0]);
      x = f[x][t];
    }
  if (x == y) return ans;
  for (int t = 25; t >= 0; --t)
    if (f[x][t] != f[y][t]) {
      ans = max(ans, g[x][t][0] == z ? g[x][t][1] : g[x][t][0]);
      ans = max(ans, g[y][t][0] == z ? g[y][t][1] : g[y][t][0]);
      x = f[x][t];
      y = f[y][t];
    }
  ans = max(ans, g[x][0][0] == z ? g[x][0][1] : g[x][0][0]);
  ans = max(ans, g[y][0][0] == z ? g[y][0][1] : g[y][0][0]);
  return ans;
}
int main() {
  memset(head, -1, sizeof head);
  n = io, m = io;
  for (int i = 1; i <= n; ++i) fa[i] = i;
  for (int i = 1; i <= m; ++i) a[i].u = io, a[i].v = io, a[i].w = io;
  sort(a + 1, a + 1 + m);
  ll ans = 1ll << 60, sum = 0;
  int cnt = 0;
  for (int i = 1, x, y; i <= m; ++i)
    if ((x = find(a[i].u)) != (y = find(a[i].v))) {
      fa[x] = y;
      sum += a[i].w;
      vis[i] = 1;
      addedge(a[i].u, a[i].v, a[i].w);
      addedge(a[i].v, a[i].u, a[i].w);
      if (++cnt == n - 1) break;
    }
  g[1][0][1] = -(1ll << 60);
  dfs(1);
  for (int t = 1; t <= 25; ++t)
    for (int i = 1; i <= n; ++i) {
      f[i][t] = f[f[i][t - 1]][t - 1],
      g[i][t][0] = max(g[i][t - 1][0], g[f[i][t - 1]][t - 1][0]);
      if (g[i][t - 1][0] == g[f[i][t - 1]][t - 1][0])
        g[i][t][1] = max(g[i][t - 1][1], g[f[i][t - 1]][t - 1][1]);
      else if (g[i][t - 1][0] < g[f[i][t - 1]][t - 1][0])
        g[i][t][1] = max(g[i][t - 1][0], g[f[i][t - 1]][t - 1][1]);
      else
        g[i][t][1] = max(g[i][t - 1][1], g[f[i][t - 1]][t - 1][0]);
    }
  for (int i = 1; i <= m; ++i)
    if (!vis[i]) {
      int b = Query(a[i].u, a[i].v, a[i].w);
      if (b != a[i].w) ans = min(ans, sum - b + a[i].w);
    }
  io = ans;
}