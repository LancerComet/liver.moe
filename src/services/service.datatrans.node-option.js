import { NodeOption, NodeOptionParam } from '../model'

/**
 *  NodeOption 数据类型转换服务.
 *  将 data 中的数据转换为 NodeOption 接受的数据格式.
 *
 *  @typedef { Object } nodeInfo - 存储在场景数据文件中的节点信息对象.
 *  @property { String } uid
 *  @property { String } type
 *  @property { Array } options
 *  @property { Object } assets
 *  @property { String } next
 *  @property { String } nextScene
 *
 *  @param { nodeInfo } nodeInfo
 */
export default function (nodeInfo) {
  return new NodeOption(new NodeOptionParam(nodeInfo))
}
