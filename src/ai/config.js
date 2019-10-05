export const CONFIG = {
  // 搜索深度
  MAX_DEPTH: 6,
  // 迭代加深起始深度
  ITERATION_DEPTH: 2,
  // 搜索时间（经测试 搜6层 平均时间在20秒左右）
  TIME_LIMIT: 40
}

// 先完成判断输赢的逻辑，当判断到任意一方连五就返回当前节点的分数（和depth=0一起）
// 完成杀手启发
// 完成算杀

// 当自己这边能连五了   但是对手有活四  总会去堵对方的活四  而不是自己这边连五。。（测试 debug）