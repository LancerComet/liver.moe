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
    this.$name = name || $id
    this.$nodes = {}

    // 设置头节点.
    this.$head = new Node({})
    this.$head.$isHead = true

    // 将当前节点设置为头节点.
    this.$currentNode = this.$head
  }

  /**
   *  游戏场景节点载入方法.
   *  用作 storyLine 创建完毕后载入第一个场景用.
   *  @return void
   */
  initScene () {
    var startScene = null
    return Object.keys(this.$nodes).some(uid => {
      if (uid.indexOf('start') > -1) {
        startScene = this.findNode(uid)
        this.$currentNode = startScene
        this.$currentNode.$prev = this.$head
        return true
      }
    })
  }

  /**
   *  读取上一个场景函数.
   *  @return { Boolean }
   */
  prevScene () {
    if (this.$currentNode.$prev.$isHead) return false
    this.$currentNode = this.$currentNode.$prev
    return true
  }

  /**
   *  读取下一个场景方法.
   *  @param { String | null } targetUID - 目标场景的 UID.
   *  @return { Boolean }
   */
  nextScene (targetUID = null) {
    const nextSceneNode = this.generateScene(targetUID)
    if (!nextSceneNode) return false
    this.$currentNode = nextSceneNode
    return true
  }

  /**
   *  生成节点方法.
   *  节点默认存储在 this.$nodes 中, 当游戏读取到某个节点时会即使生成下一个节点.
   *  @param { String | null } targetUID - 目标场景的 UID.
   *  @return { Node | false }
   */
  generateScene (targetUID) {
    const nextSceneUID = targetUID || this.$currentNode.$nextUID
    if (!nextSceneUID) return false  // 如果没有下一个场景 UID 则返回 false.
    const nextSceneNode = this.findNode(nextSceneUID)
    if (!nextSceneNode) return false  // 如果没有下一个场景节点则返回 false.

    // 设置节点信息.
    nextSceneNode.$prevUID = this.$currentNode.$uid
    nextSceneNode.$prev = this.$currentNode
    nextSceneNode.$next = this.findNode(nextSceneNode.$nextUID)

    return nextSceneNode
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
   *  @return { Node | null }
   */
  findNode (uid) {
    return this.$nodes[uid] || null
  }

  /**
   *  插入节点函数.
   *  @param { Node } newNode - 新插入节点.
   *  @return { Boolean }
   */
  insertNode (newNode) {
    var lastNode = this.findLast()
    lastNode.$next = newNode
    newNode.$prev = lastNode
    return true
  }

  /**
   *  登记节点函数.
   *  将本 storyLine 中的节点的登记在 this.$nodes 中.
   *  @param { Node } newNode - 需要登记的节点.
   *  @return { Boolean }
   */
  registerNode (newNode) {
    const nodeUID = newNode.$uid
    if (!nodeUID || this.$nodes[nodeUID]) return false

    // 将节点登记在 this.$nodes 对象中.
    this.$nodes[nodeUID] = newNode
    return true
  }

  /**
   *  查找选项节点的关联对话节点.
   *  如果当前节点为选项节点, 查找出接下来的关联节点.
   *  @ return { Array }
   */
  findLinkedNodes (optionNode = this.$currentNode) {
    if (optionNode.$type !== 'option' || !optionNode.options) return []
    return optionNode.options.map(optionData => this.findNode(optionData.gotoUID))
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
