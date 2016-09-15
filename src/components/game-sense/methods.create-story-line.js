/**
 *  methods.create-story-line By LancerComet at 21:40, 2016/9/13.
 *  # Carry Your World #
 *  ---
 *  StoryLine 数据生成方法.
 *
 *  @export { Function }
 *
 *  @param { String } targetScene - 目标场景名称.
 *  @return void
 */
import { dataTrans } from '../../services'

import * as GAME_DATA from '../../data/'
import * as Model from '../../model'

export default function (targetScene) {
  // Error Handler.
  if (!GAME_DATA[targetScene]) {
    throw new Error(`GameScene.methods.createStoryLine: 不存在场景 "${targetScene}", 游戏中止.`)
  }

  // 清理 this.assetNodes.
  this.assetNodes = {}

  // 创建新的 storyLine.
  this.storyLine = new Model.StoryLine({ name: targetScene })

  // 读取目标场景数据.
  insertSceneData.call(this, GAME_DATA[targetScene])

  // 设置第一个游戏场景.
  this.storyLine.nextScene()
}

/**
 *  场景数据读取函数.
 *  @param { Array } sceneData - 场景数据存储数组.
 *  @return void
 */
function insertSceneData (sceneData) {
  sceneData.forEach(nodeInfo => {
    var newNode = null

    switch (nodeInfo.type) {
      case 'dialog':
        newNode = dataTrans.nodeDialog(nodeInfo)
        break

      case 'option':
        newNode = dataTrans.nodeOption(nodeInfo)
        break
    }

    // 将节点注册在 storyLine 中.
    this.storyLine.registerNode(newNode)

    // 初始化游戏.
    this.storyLine.initScene()
  })
}
