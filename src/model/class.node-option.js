/**
 *  class.node-option By LancerComet at 10:10, 2016/9/14.
 *  # Carry Your World #
 *  ---
 *  游戏选项节点类型.
 *  ---
 *  @constructor
 *
 *  @typedef { Node } NodeOption
 *  @property { string } character - 当前选项对应的角色.
 *  @property { string } dialog - 当前选项内容.
 *  ---
 *  参数:
 *  @param { Array } options - 当前选项内容存储数组, 保存选项数据存储对象.
 *  @param { object } assets - 场景内物品定义对象.
 *  ---
 *  返回:
 *  @return { NodeOption }
 */

import Node from './class.node'

export default class NodeOption extends Node {
  constructor ({
    $uid, $prev, $prevUID, $next, $nextUID,
    options = [],
    assets = {}
  }) {
    super({ $uid, $prev, $prevUID, $next, $nextUID, $assets: assets })
    this.$type = 'option'
    this.options = options
  }
}
