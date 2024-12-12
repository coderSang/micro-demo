import { getTransformBinary } from '@/utils/proto'
import { tetRequest } from './index'
import { SCATTER } from '@/proto/bundle'
export const getBoundary = async (params: { id: string }) => {
  const data = await tetRequest.get<SCATTER.ScatterObject>({
    url: '/tet/dp/api/blockdata/get_polygon',
    params
  })
  return getTransformBinary<SCATTER.ScatterObject>(data, 'SCATTER.ScatterObject')
}
