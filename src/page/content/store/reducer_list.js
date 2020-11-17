
const defaultState = {
  list: [
    "张三", "李四", "王五"
  ]
}

function pushList (s, a) {
  let newState = JSON.parse(JSON.stringify(s));
  newState["list"] = a.value;
  return newState;
}

const reducer_list = (state = defaultState, action) => {
  if (action.type === "list_action") {
    return pushList(state, action)
  }
  return state;
}

export default reducer_list;

