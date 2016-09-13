/*
 *  Sense 01 Data By LancerComet at 16:39, 2016.09.12.
 *  # Carry Your World #
 *  ---
 *  场景 01 数据.
 */

import './sense-01.styl'
const $sensePrefix = 'sense-01'

const senseData = [
  {
    uid: `${$sensePrefix}-01`,
    type: 'dialog',
    dialog: [
      { character: '33', content: 'Test~ 嗯~ 貌似连上了呢', className: 'dialog-pop-normal' }
    ],
    assets: {
      'bg': `${$sensePrefix}-bg`,
      '33': `${$sensePrefix} 33-normal`
    },
    next: `${$sensePrefix}-02`
  },
  {
    uid: `${$sensePrefix}-02`,
    type: 'dialog',
    dialog: [
      { character: '33', content: '嗯哼，这里是 33，现在在比利 ♂ 比利校园的门口。。给大家直播。。。' }
    ],
    next: `${$sensePrefix}-03`
  },
  {
    uid: `${$sensePrefix}-03`,
    type: 'dialog',
    dialog: [
      { character: '33', content: '。。。' }
    ],
    assets: {
      '33': null
    },
    next: null
  }
]

senseData.forEach(item => {
  if (!item.assets) item.assets = {}
})

export default senseData
