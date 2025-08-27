export default (arr: Array<any>) => {
  // 找到所有置顶文章
  const topItems = arr.filter(item => item.data.top === true);
  const nonTopItems = arr.filter(item => item.data.top !== true);
  
  // 将置顶文章放在最前面，其他文章保持原有顺序
  return [...topItems, ...nonTopItems];
}