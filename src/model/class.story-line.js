/**
 *  Class StoryLine By LancerComet at 15:44, 2016.09.12.
 *  \# Carry Your World #
 *  ---
 *  游戏流程链表类型.
 *  ---
 *  @typedef { object } StoryLine
 *  @property { string } $id - 时间线对象 ID.
 *  @property { string } name - 时间线对象的名称.
 *  @property  { Node } $head - 时间线头节点对象.
 *  @property  { Node } $currentNode - 时间线当前访问到节点引用.
 *  ---
 *  参数:
 *  @param { string } $id - 时间线对象的 ID.
 *  @param { string } name - 时间线对象的名称.
 *  ---
 *  返回:
 *  @return { StoryLine }
 */

import * as utils from '../utils'
import Node from './class.node'

export default class StoryLine {
  constructor ({
    $id = utils.uid(),
    name = ''
  }) {
    this.$id = $id
    this.name = name || $id

    // 设置头节点.
    this.$head = new Node({})
    this.$head.$isHead = true

    // 将当前节点设置为头节点.
    this.$currentNode = this.$head
  }

  /**
   *  读取上一个场景.
   *  @return { Boolean }
   */
  prevScene () {
    if (this.$currentNode.$prev.$isHead) return false
    this.$currentNode = this.$currentNode.$prev
    return true
  }

  /**
   *  读取下一个场景方法.
   *  @return { Boolean }
   */
  nextScene () {
    if (!this.$currentNode.$next) return false
    this.$currentNode = this.$currentNode.$next
    return true
  }

  /**
   *  寻找第一个节点函数.
   *  @return { Node } head -  返回头节点.
   */
  findFirst () {
    return this.$head
  }

  /**
   *  寻找最后一个节点函数.
   *  @return { Node }
   */
  findLast () {
    var result = this.$head
    while (result.$next) {
      result = result.$next
    }
    return result
  }

  /**
   *  寻找节点函数, 返回目标节点.
   *  @param { string } uid - 节点 UID.
   *  @return { Node }
   */
  findNode (uid) {
    var result = this.$head
    while (result.$uid !== uid) {
      result = result.$next
    }
    return result
  }

  /**
   *  插入节点函数.
   *  @param { Node } newNode - 新插入节点..
   *  @return void
   */
  insertNode (newNode) {
    var lastNode = this.findLast()
    lastNode.$next = newNode
    newNode.$prev = lastNode
  }

  /**
   *  更新头节点方法.
   *  @param { Node } newNode - 新的节点.
   */
  updateHead (newNode) {

  }

  /**
   *  观察回调注册方法.
   *  当调用 process 进入下一场景后执行注册的函数.
   */
  observeNextScene (...args) {

  }

}
