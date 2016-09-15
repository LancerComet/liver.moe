/**
 *  utils.scene-data By LancerComet at 13:52, 2016/9/15.
 *  # Carry Your World #
 *  ---
 *  场景数据处理函数模块.
 */
const module = {
  dataPretreatment
}

/**
 * 场景存储数据预处理函数.
 * @param { Array } sceneData
 * @return { Array } sceneData
 */
function dataPretreatment (sceneData) {
  sceneData.forEach((item, index) => {
    // 设置默认 assets 属性.
    if (!item.assets) item.assets = {}

    const nextSceneNode = sceneData[index + 1]
    if (nextSceneNode) {
      // 设置节点默认 next.
      if (item.next !== null) { item.next = nextSceneNode.uid }

      // 设置下一个节点的 assets 的继承值.
      Object.keys(item.assets).forEach(assetName => {
        if (!nextSceneNode.assets) nextSceneNode.assets = {}
        if (!nextSceneNode.assets[assetName]) { nextSceneNode.assets[assetName] = item.assets[assetName] }
      })
    }
  })
  return sceneData
}

export default module
