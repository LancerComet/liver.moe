/**
 *  Class NodeDialog By LancerComet at 16:16, 2016.09.12.
 *  \# Carry Your World #
 *  ---
 *  游戏对话节点类型.
 *  ---
 *  @typedef { Node } NodeDialog
 *  @property { string } character - 当前对话对应的角色.
 *  @property { string } dialog - 当前对话内容.
 *  ---
 *  参数:
 *  @param { array } dialog - 当前对话内容存储数组, 保存对话数据存储对象.
 *  @param { object } assets - 场景内物品定义对象.
 *  ---
 *  返回:
 *  @return { NodeDialog }
 */

import Node from './class.node'

export default class NodeDialog extends Node {
  constructor ({
    $uid, $prev, $prevUID, $next, $nextUID,
    dialog = [],
    assets = {}
  }) {
    super({ $uid, $prev, $prevUID, $next, $nextUID, $assets: assets })
    this.$type = 'dialog'
    this.dialog = dialog
  }
}
