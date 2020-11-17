
// 默认state
const defaultState = {
  text: "我是 defaultState",
}

// Store 会把两个参数传入到 reducer 中，当前的state和 action
// state : 老 state 状态
// action : 对应 state 新的状态

const reducer = function (state = defaultState, action) {
  // 深拷贝原有状态state => newState;
  let newState = JSON.parse(JSON.stringify(state));
  if (action.type === "change_input_value") {
    newState.text = action.text;
    return newState;
  }
  return state;
}

export default reducer;
