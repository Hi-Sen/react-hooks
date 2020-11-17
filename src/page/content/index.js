import React, { Component, Fragment } from "react"

/**
 * 动态渲染函数组件 
 * 通过父组件的 nav_param 参数决定注册对应组件并渲染     
 */
function componentsFun (props) {
  let Com;
  if (!props.nav_param)
    Com = require('./demo1').default;
  else
    Com = require('./' + props.nav_param.com).default;
  return <Com random={props.random} />
}

class Contetnt extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render () {
    return (
      <Fragment>
        {componentsFun(this.props)}
      </Fragment>
    );
  }
}

export default Contetnt;  
