/*
 *  Scene 02 Data By LancerComet at 18:15, 2016.09.15.
 *  # Carry Your World #
 *  ---
 *  场景 02 数据.
 */
import * as utils from '../../utils'
import './scene-02.styl'
const $scenePrefix = 'scene-02'

// 样式定义.
const className = {
  '22': `${$scenePrefix} c-22 p-r bg-no-r bg-contain z-1`
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
      { character: '22', content: '嗨嗨！22 来了！', className: 'dialog-pop-normal' }
    ],
    assets: {
      '22': `${className[22]} normal`
    }
  },
  {
    uid: `${$scenePrefix}-02`,
    type: 'dialog',
    dialog: [
      { character: '22', content: '大家过的吼不吼啊？别忘了给礼物啊！', className: 'dialog-pop-normal' }
    ]
  },
  {
    uid: `${$scenePrefix}-03`,
    type: 'dialog',
    dialog: [
      { character: '22', content: '啥？你说让我念句诗？', className: 'dialog-pop-normal' }
    ],
    assets: {
      '22': `${className[22]} shock`
    }
  },
  {
    uid: `${$scenePrefix}-04`,
    type: 'dialog',
    dialog: [
      { character: '22', content: '呃。。。狗。。。狗。。。', className: 'dialog-pop-normal' }
    ]
  },
  {
    uid: `${$scenePrefix}-05`,
    type: 'option',
    options: [
      { label: 'A', content: 'Naive！连句诗都念不好！（游戏崩溃）', gotoUID: `${$scenePrefix}-A-01` },
      { label: 'B', content: '我只做了三件事（游戏结束）', gotoUID: `${$scenePrefix}-B-01` }
    ],
    next: null
  },
  {
    uid: `${$scenePrefix}-A-01`,
    type: 'dialog',
    dialog: [
      { character: '22', content: '。。。' }
    ],
    next: null
  },
  {
    uid: `${$scenePrefix}-B-01`,
    type: 'dialog',
    dialog: [
      { character: '22', content: '我感到很惭愧，谢谢大家 ♥' }
    ],
    assets: {
      '22': `${className[22]} splashing`
    }
  },
  {
    uid: `${$scenePrefix}-end`,
    type: 'dialog',
    next: null
  }
]

// 数据预处理.
utils.sceneData.dataPretreatment(sceneData)

export default sceneData
