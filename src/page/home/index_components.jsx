import React, {
  useState,
  useEffect
} from "react"

import EventBus from "../components/event/eventBus"
import HeadComp from "../components/head/head"


// 获取对应映射组件 
function GetContentComp (props) {
  let Comp = null, ComName = "";
  ComName = props.comName ? props.comName : "contentMain";
  Comp = require("../components/main/" + ComName).default;
  return <Comp {...props} />;
}

// 列表点击
function listClick (item, setContent, setComName) {
  setComName("contentDetail");
  setContent(item);
}

function HeaderComp (props) {

  const [tle] = useState('搞一个社区看看效果');
  const [content, setContent] = useState(null);
  const [comName, setComName] = useState("contentMain");

  // 订阅 
  EventBus.on("goHome", () => {
    setComName("contentMain");
  })

  useEffect(() => {
    document.title = tle;
  }, [tle])

  return (
    <div>
      <HeadComp {...props} />
      <GetContentComp comName={comName} content={content} listClick={(item) => { listClick(item, setContent, setComName) }} />
    </div>
  )
}

export default HeaderComp;

