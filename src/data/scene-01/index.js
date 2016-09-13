/*
 *  Scene 01 Data By LancerComet at 16:39, 2016.09.12.
 *  # Carry Your World #
 *  ---
 *  场景 01 数据.
 */

import './scene-01.styl'
const $scenePrefix = 'scene-01'

const sceneData = [
  {
    uid: `${$scenePrefix}-01`,
    type: 'dialog',
    dialog: [
      { character: '33', content: 'Test~ 嗯~ 貌似连上了呢', className: 'dialog-pop-normal' }
    ],
    assets: {
      'bg': `${$scenePrefix} bg`,
      '33': `${$scenePrefix} c-33 normal p-r bg-no-r bg-contain z-1`
    }
  },
  {
    uid: `${$scenePrefix}-02`,
    type: 'dialog',
    dialog: [
      { character: '33', content: '嗯哼，这里是 33，现在在比利 ♂ 比利校园的门口。。给大家直播。。。' }
    ]
  },
  {
    uid: `${$scenePrefix}-03`,
    type: 'dialog',
    dialog: [
      { character: '33', content: '。。。' }
    ],
    assets: {
      '33': `${$scenePrefix} c-33 embarrassed p-r bg-no-r bg-contain z-1`
    },
    next: null
  }
]

sceneData.forEach(item => {
  if (!item.assets) item.assets = {}
})

export default sceneData
