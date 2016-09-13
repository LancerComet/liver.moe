/**
 *  UID Generator By LancerComet at 15:49, 2016.09.12.
 *  \# Carry Your World #
 *  @return { string } uid - 随机 UID 字符串.
 */

export default function () {
  return Math.floor(Math.random() * 10000 * Date.now()).toString(16)
}
