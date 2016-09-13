/**
 *  methods.init-game-data By LancerComet at 21:40, 2016/9/13.
 *  # Carry Your World #
 *  ---
 *  游戏数据初始化方法.
 *
 *  @export { Function }
 *  @return void
 */
import SENSE_DATA_01 from '../../data/scene-01'

export default function () {
  // 读取游戏场景数据并插入 storyLine.
  SENSE_DATA_01.forEach(sceneNode => {
    this.storyLine.insertNode(sceneNode)
  })

  // 设置第一个游戏场景.
  this.storyLine.nextScene()
}

