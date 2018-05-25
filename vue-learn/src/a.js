import _ from 'lodash'
import style from './index.css'
const fp = require('lodash/fp');
!function () {

  //分割数组
  let res = _.chunk([1,2,3,4,5],2)
  console.log('%c 输出结果为:'+res,'color:red;font-size:30px')

  //
}();