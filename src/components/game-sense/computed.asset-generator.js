import Vue from 'vue'

export default function () {
  const assets = this.storyLine.$currentNode.$assets
  if (!assets) { return }

  Object.keys(assets).forEach(assetName => {
    // 如果此场景传入 null 则删除之前以存在的此场景.
    if (assets[assetName] === null) {
      Vue.delete(this.assetNodes, assetName)
    }

    Vue.set(this.assetNodes, assetName, assets[assetName])
  })
}
