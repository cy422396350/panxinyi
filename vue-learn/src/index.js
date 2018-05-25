import _ from 'lodash'
import liuyifei from './image/changyue1.jpg'
// import data from './data.xml'
// import layer from './layer/layer'
import App from './app.vue'
import Vue from 'vue'

const Apps = function() {

  console.log(data.note.body[0])

  let element = document.createElement('div')

  element.innerHTML = _.join(['Hello', 'World'],' ')

  element.classList.add('hello')

  let img = new Image()

  img.src = liuyifei

  img.style.height = "200px";

  element.appendChild(img)

  let childDiv = document.createElement('div')

  childDiv.innerHTML = layer().tpl

  element.appendChild(childDiv)

  let childDiv2 = document.createElement('div')

  childDiv2.classList.add('John')

  childDiv2.innerHTML = layer().layerTpl({
    name: 'Joy han',
    arr: [1,2,3,4,5,6]
  })

  element.appendChild(childDiv2)


  return element
};

const div = document.createElement('div');

document.body.appendChild(div);

new Vue({
  render: (h) => h(App)
}).$mount(div)