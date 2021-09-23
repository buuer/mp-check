export const reduceArr = <T>(arr: string[], value: T): Record<string, T> => {
  return arr.reduce((pre, cur) => {
    pre[cur] = value
    return pre
  }, {} as Record<string, T>)
}
