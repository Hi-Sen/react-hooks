import React, { Component } from "react"
import { divstyle, prestyle } from "./style"
import Store from "./store"

class ReduxCom extends Component {
  constructor(props) {
    super(props);
    this.state = Store.getState()
    this.storeChange = this.storeChange.bind(this);
    //  subscribe 状态管理发生变化触发的订阅 ， 执行回调 this.storeChange 
    Store.subscribe(this.storeChange);
  }

  render () {
    return (
      <div style={divstyle} >
        <div>
          <ul>
            {
              this.state.reducer_list.list.map((i, n) => {
                return <li key={n}>{i}</li>
              })
            }
          </ul>

          <p>新增输入的值：{this.state.reducer.text}</p>
          <input type="text" ref="inpRef" onFocus={() => this.onFocus()} onChange={(e) => { this.onChange(e) }} />
          <button onClick={() => { this.onClick() }}>列表增加</button>

          <h4>
            此时就可以在其它组件里导入 store 并且使用 store 的最新状态数据了
            <br />
            导航 [生命周期] 里查看 redux 最新状态 text 的值
          </h4>

        </div>
        <div style={prestyle}>
          <p style={{ textAlign: "center", fontSize: "2rem", marginBottom: 0 }}>部分实践代码</p>
          <pre>
            {'\n              import React, { Component } from "react"\n              import { divstyle, prestyle } from "./style"\n              import Store from "./store"\n              \n              class ReduxCom extends Component {\n                constructor(props) {\n                  super(props);\n                  this.state = Store.getState()\n                  this.storeChange = this.storeChange.bind(this);\n                  Store.subscribe(this.storeChange);\n                }\n              \n                render () {\n                  return (\n                    <div className={divstyle} >\n                      <div>\n                        <ul>\n                          {\n                            this.state.reducer_list.list.map((i, n) => {\n                              return <li key={n}>{i}</li>\n                            })\n                          }\n                        </ul>\n                        <p>新增输入的值：{this.state.reducer.text}</p>\n                        <input type="text" ref="inpRef" onFocus={() => this.onFocus()} onChange={(e) => { this.onChange(e) }} />\n                        <button onClick={() => { this.onClick() }}>列表增加</button>\n                      </div>\n                    </div>\n                  )\n                }\n              \n                // 订阅 store \n                storeChange () {\n                  this.setState(Store.getState());\n                }\n              \n                // 获取焦点，清空输入框\n                onFocus () {\n                  this.refs.inpRef.value = "";\n                }\n              \n                // 新增一条记录\n                onClick () {\n                  let newList = this.state.reducer_list.list;\n                  newList.push(this.state.reducer.text);\n                  const actionList = {\n                    type: "list_action",\n                    value: newList\n                  }\n                  Store.dispatch(actionList);\n                }\n              \n                //  输入框监听事件 \n                onChange (e) {\n                  const actionText = {\n                    type: "change_input_value",\n                    text: e.target.value\n                  }\n                  Store.dispatch(actionText);\n                }\n              \n              }\n              \n              export default ReduxCom;\n            '}
          </pre>
        </div>
      </div>
    );
  }

  // 订阅 store , 实现视图更新的重要步骤 
  storeChange () {
    this.setState(Store.getState());
  }

  // 获取焦点，清空输入框
  onFocus () {
    this.refs.inpRef.value = "";
  }

  // 新增一条记录 ， 并通过 dispatch 提交一个 action 
  onClick () {
    let newList = this.state.reducer_list.list;
    newList.push(this.state.reducer.text);
    const actionList = {
      type: "list_action",
      value: newList
    }
    Store.dispatch(actionList);
  }

  // 输入框监听事件 , 实时提交 action  
  onChange (e) {
    const actionText = {
      type: "change_input_value",
      text: e.target.value
    }
    Store.dispatch(actionText);
  }

}

export default ReduxCom;