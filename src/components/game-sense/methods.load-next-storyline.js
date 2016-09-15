/**
 *  methods.load-next-storyline By LancerComet at 18:46, 2016/9/15.
 *  # Carry Your World #
 *  ---
 *  读取下一个场景.
 *  在 watch: this.storyLine.$currentNode 中执行, 当当前节点拥有 nextScene 且 next 为 null 时执行.
 *
 *  @return void
 */
export default function () {
  const currentNode = this.storyLine.$currentNode
  if (currentNode.$next === null && currentNode.$nextScene) {
    console.log('load next scene:', currentNode.$nextScene)
    this.createStoryLine(currentNode.$nextScene)
  }
}
