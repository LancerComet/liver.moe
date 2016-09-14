/**
 *  methods.init-game-data By LancerComet at 21:40, 2016/9/13.
 *  # Carry Your World #
 *  ---
 *  游戏数据初始化方法.
 *
 *  @export { Function }
 *  @return void
 */
import { dataTrans } from '../../services'
import SENSE_DATA_01 from '../../data/scene-01'

export default function () {
  // 读取 Scene 01 数据.
  insertSceneData.call(this, SENSE_DATA_01)

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

    this.storyLine.insertNode(newNode)
  })
}
