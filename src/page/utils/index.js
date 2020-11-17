// 根据浏览器宽度设置元素宽度
const getWidth = function () {
  if (window.innerWidth < 500) {
    return "100vw"
  } else return "60vw"
}

export default { getWidth }