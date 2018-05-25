import tpl from './layer.html'
import layerTpl from './layer.tpl'
import style from './layer.scss'
let layer = function () {
  return {
    name: 'layer',
    tpl,
    layerTpl
  }
}

export default layer