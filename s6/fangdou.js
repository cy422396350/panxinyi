let debounce = (func,wait) => {
  let timeout
  return function () {
    let context = this
    let arg = arguments
    clearTimeout(timeout)
    timeout = setInterval(()=>{
      func.apply(context,arg)
    
    },wait)
  }
}

export default debounce