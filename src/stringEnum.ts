/** Utility function to create a K:V from a list of strings */
export function stringEnum<T extends string>(array: Array<T>): { [K in T]: K } {
  return array.reduce((res, key) => {
    res[key] = key
    return res
  }, Object.create(null))
}
