import { ArityOneFn, FirstFnParameterType, LastFnReturnType } from "./types"

export const capitalize = (s: string): string => s[0].toUpperCase() + s.slice(1)
export const generateSlug = (title: string): string => title.toLowerCase().split(/\s/).join("-")
export const isEmpty = <T>(xs: Array<T>): boolean => xs.length > 0

export const listOfKeys = <T, K extends keyof T>(xs: Array<T>) => (key: K): Array<T[K]> =>
  xs.map((x) => x[key])

export const getUniqueList = <T>(xs: Array<T>): Array<T> =>
  xs.filter((val, index, list) => list.indexOf(val) === index)

export const compose = <T extends ArityOneFn[]>(...fns: T) => (
  p: FirstFnParameterType<T>
): LastFnReturnType<T> => fns.reduceRight((acc: any, cur: any) => cur(acc), p)

export const getList = <T, K extends keyof T>(key: K) => (xs: Array<T>) => listOfKeys<T, K>(xs)(key)
