/**
 *  Class NodeDialog By LancerComet at 16:16, 2016.09.12.
 *  \# Carry Your World #
 *  ---
 *  游戏对话节点类型.
 *  ---
 *  @constructor
 *
 *  @typedef { Node } NodeDialog
 *  @property { string } $type - 当前节点类型.
 *  @property { string } dialog - 当前对话内容.
 *  ---
 *  参数:
 *  @param { Array } dialog - 当前对话内容存储数组, 保存对话数据存储对象.
 *  @param { Object } assets - 场景内物品定义对象.
 *  ---
 *  返回:
 *  @return { NodeDialog }
 */

import Node from './class.node'

export default class NodeDialog extends Node {
  constructor ({
    $uid, $prev, $prevUID, $next, $nextUID, $nextScene,  // Super.
    dialog = [],
    assets = {}
  }) {
    super({ $uid, $prev, $prevUID, $next, $nextUID, $assets: assets, $nextScene })
    this.$type = 'dialog'
    this.dialog = dialog
  }
}
