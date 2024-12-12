import protoRoot from '@/proto/proto'
import type { Type } from 'protobufjs'

// 转换二进制流 -> 数组
export function getTransformBinary<T>(data: any, key: string): T {
  const resContent = new Uint8Array(data)
  const dataGeo = (protoRoot?.lookup(key) as Type).decode(resContent) as T
  return dataGeo
}
