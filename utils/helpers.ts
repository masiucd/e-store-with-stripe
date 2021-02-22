export const capitalize = (s: string): string => s[0].toUpperCase() + s.slice(1)
export const generateSlug = (title: string): string => title.toLowerCase().split(/\s/).join("-")
export const isEmpty = <T>(xs: Array<T>): boolean => xs.length > 0
