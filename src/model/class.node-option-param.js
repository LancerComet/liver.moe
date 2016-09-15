/**
 *  class.node-option-param By LancerComet at 0:58, 2016/9/14.
 *  \# Carry Your World #
 *
 *  NodeOption 接收参数数据类型.
 *  @constructor
 *
 *  @param { nodeInfo }
 *
 *  @typedef { Object } NodeOptionParam
 *  @property { String } $uid
 *  @property { String } $prevUID
 *  @property { String } $nextUID
 *  @property { Array } options
 *  @property { Object } assets
 *  @property { String } $nextScene
 *
 *  @return { NodeOptionParam }
 */
export default class NodeOptionParam {
  constructor ({
    uid, prev, next, options, assets, nextScene
  }) {
    this.$uid = uid
    this.$prevUID = prev
    this.$nextUID = next
    this.options = options
    this.assets = assets
    this.$nextScene = nextScene
  }
}
