
/**
 *  Hoc B组件实现
 * 可以自定义 B 组件其它功能 ， 这里就不单独编写了 ，跟普通编写组件一样
 */

import React, { Component } from "react"
import HocCom from './hoc'

class B extends Component {
  render () {
    return (
      <div>
        <button onClick={this.props.hocClick}> 点击测试共享方法</button>
        <h3> B 组件获取缓存 = {this.props.num}</h3>
        <h3> B 数据：</h3>
        <ul>
          {
            this.props.data.fun().map(c => {
              return <li key={c}>{c}</li>
            })
          }
        </ul>
      </div>
    )
  }
}

export default HocCom(B, "dataB")

