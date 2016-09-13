/**
 *  class.node-dialog-param By LancerComet at 0:58, 2016/9/14.
 *  \# Carry Your World #
 *
 *  NodeDialog 接收参数数据类型.
 *  @constructor
 *
 *  @param { nodeInfo }
 *
 *  @typedef { Object } NodeDialogParam
 *  @property { String } $uid
 *  @property { String } $prevUID
 *  @property { String } $nextUID
 *  @property { Array } dialog
 *  @property { Object } assets
 *
 *  @return { NodeDialogParam }
 */
export default class NodeDialogParam {
  constructor ({
    uid, prev, next, dialog, assets
  }) {
    this.$uid = uid
    this.$prevUID = prev
    this.$nextUID = next
    this.dialog = dialog
    this.assets = assets
  }
}
