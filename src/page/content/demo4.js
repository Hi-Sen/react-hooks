
/**
 *   Portals 将子节点渲染在父组件以外的DOM节点上 ， 类似于插槽 
 *   Profiler 测量组件 
 */

import React, { Component, Fragment, Profiler } from 'react'
import ReactDOM from "react-dom";
import { prestyle, divstyle } from './style'


/*
  模拟 react 子元素 
*/
function Child (props) {
  return <div>{props.text}</div>
}

class Demo4 extends Component {
  constructor(props) {
    super(props);
    this.state = {}
    this.parent = document.getElementsByClassName("content_style")[0];
    this.el = document.createElement('div');
  }

  componentDidMount () {
    this.parent.appendChild(this.el)
  }

  render () {
    return (
      <div style={divstyle}>
        <div>
          <Fragment>
            {ReactDOM.createPortal(<Child text="我是 Portals 插槽" />, this.el)}

            <div>
              <Profiler id="Child" onRender={this.callback}>
                <Child text="我是 Profiler 测量组件" />
              </Profiler>
            </div>
          </Fragment>
        </div>
        <div style={prestyle}>
          <p style={{ textAlign: "center", fontSize: "2rem", marginBottom: 0 }}>部分实践代码</p>
          <pre>
            {'\n              \n/**\n *   Portals 将子节点渲染在父组件以外的DOM节点上 ， 类似于插槽 \n *   Profiler 测量组件 \n */\n\nimport React, { Component, Fragment, Profiler } from \'react\'\nimport ReactDOM from "react-dom";\n\n\n/*\n  模拟 react 子元素 \n*/\nfunction Child (props) {\n  return <div>{props.text}</div>\n}\n\nclass Demo4 extends Component {\n  constructor(props) {\n    super(props);\n    this.state = {}\n    this.parent = document.getElementsByClassName("content_style")[0];\n    this.el = document.createElement(\'div\');\n  }\n\n  componentDidMount () {\n    this.parent.appendChild(this.el)\n  }\n\n  render () {\n    return (\n     \n          <Fragment>\n            {ReactDOM.createPortal(<Child text="我是 Portals 插槽" />, this.el)}\n\n            <div>\n              <Profiler id="Child" onRender={this.callback}>\n                <Child text="我是 Profiler 测量组件" />\n              </Profiler>\n            </div>\n          </Fragment>\n        \n      </div>\n    )\n  }\n\n  /**\n      id,                     // 发生提交的 Profiler 树的 “id”\n      phase,                  // "mount" （如果组件树刚加载） 或者 "update" （如果它重渲染了）之一\n      actualDuration,         // 本次更新 committed 花费的渲染时间\n      baseDuration,           // 估计不使用 memoization 的情况下渲染整颗子树需要的时间\n      startTime,              // 本次更新中 React 开始渲染的时间\n      commitTime,             // 本次更新中 React committed 的时间\n      interactions            // 属于本次更新的 interactions 的集合\n   */\n\n  callback = (id, phase, actualDuration, baseDuration, startTime, commitTime, interactions) => {\n    console.log(id, phase, actualDuration, baseDuration, startTime, commitTime, interactions)\n  }\n\n}\n\nexport default Demo4;\n\n\n            '}
          </pre>
        </div>
      </ div>
    );
  }

  /**
      id,                     // 发生提交的 Profiler 树的 “id”
      phase,                  // "mount" （如果组件树刚加载） 或者 "update" （如果它重渲染了）之一
      actualDuration,         // 本次更新 committed 花费的渲染时间
      baseDuration,           // 估计不使用 memoization 的情况下渲染整颗子树需要的时间
      startTime,              // 本次更新中 React 开始渲染的时间
      commitTime,             // 本次更新中 React committed 的时间
      interactions            // 属于本次更新的 interactions 的集合
   */

  callback = (id, phase, actualDuration, baseDuration, startTime, commitTime, interactions) => {
    console.log(id, phase, actualDuration, baseDuration, startTime, commitTime, interactions)
  }

}

export default Demo4;

