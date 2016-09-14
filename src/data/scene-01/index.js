/*
 *  Scene 01 Data By LancerComet at 16:39, 2016.09.12.
 *  # Carry Your World #
 *  ---
 *  场景 01 数据.
 */

import './scene-01.styl'
const $scenePrefix = 'scene-01'

// 样式定义.
const className = {
  '33': `${$scenePrefix} c-33 p-r bg-no-r bg-contain z-1`
}

const sceneData = [
  {
    uid: `${$scenePrefix}-start`,
    type: 'dialog',
    assets: {
      'bg': `${$scenePrefix} bg`
    }
  },
  {
    uid: `${$scenePrefix}-01`,
    type: 'dialog',
    dialog: [
      { character: '33', content: 'Test~ 嗯~ 貌似连上了呢', className: 'dialog-pop-normal' }
    ],
    assets: {
      'bg': `${$scenePrefix} bg`,
      '33': `${className[33]} normal`
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
      '33': `${className[33]} embarrassed`
    }
  },
  {
    uid: `${$scenePrefix}-04`,
    type: 'dialog',
    dialog: [
      { character: '33', content: '死宅真恶心。。。' }
    ]
  },
  {
    uid: `${$scenePrefix}-05`,
    type: 'dialog',
    dialog: [
      { character: '33', content: '那么。。。你们。。。有没有。。。那个。。。', className: 'dialog-pop-normal' }
    ]
  },
  {
    uid: `${$scenePrefix}-06`,
    type: 'option',
    options: [
      { label: 'A', content: '黑人问号？？', gotoUID: `${$scenePrefix}-B-01` },
      { label: 'B', content: '无可奉告！！', gotoUID: `${$scenePrefix}-B-02` }
    ],
    next: null
  },
  {
    uid: `${$scenePrefix}-A-01`,
    type: 'dialog',
    dialog: [
      { character: '33', content: '。。。辣鸡' }
    ],
    assets: {
      '33': `${className[33]} embarrassed`
    },
    next: null
  },
  {
    uid: `${$scenePrefix}-B-01`,
    type: 'dialog',
    dialog: [
      { character: '33', content: '为你续一秒 ♥' }
    ],
    assets: {
      '33': `${className[33]} smile`
    },
    next: null
  }
]

sceneData.forEach((item, index) => {
  // 设置默认 assets 属性.
  if (!item.assets) item.assets = {}

  // 设置节点默认 next.
  if (sceneData[index + 1]) {
    if (item.next === null) return
    item.next = sceneData[index + 1].uid
  }
})

export default sceneData
