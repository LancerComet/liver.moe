/**
 *  Class Node By LancerComet at 16:06, 2016.09.12.
 *  \# Carry Your World #
 *  ---
 *  游戏流程链表基础节点类型.
 *  游戏中所有的节点的基础类型结构, 其他所有类型的节点都为此节点的子类.
 *  ---
 *  @typedef { object } Node
 *  @property { Array } $assets - 节点中的 Assets 存储数组.
 *  @property { string } $uid - 节点 UID.
 *  @property { Node } $prev - 本节点对应的上一个节点的引用.
 *  @property { Node } $next - 本节点对应的下一个节点的引用.
 *  @property { String } $nextScene - 下一个场景的 name.
 *  ---
 *  @return { Node }
 */
import * as utils from '../utils'

export default class Node {
  constructor ({
    $uid = utils.uid(),
    $prev = null,
    $prevUID = '',
    $next = null,
    $nextUID = '',
    $nextScene = null,
    $assets = []
  }) {
    this.$uid = $uid

    this.$assets = $assets

    this.$prev = $prev
    this.$prevUID = $prevUID

    this.$next = $next
    this.$nextUID = $nextUID

    this.$nextScene = $nextScene
  }
}
