import React from "react"
import "./contentMain.css"
import Util from "../../utils"

import { contentList } from "../json/contentMain"
import { Colors } from "../json/menu"

// 设置元素宽度
const getWidth = () => {
  return Util.getWidth();
}

// 图标点击
const ImgClick = (c) => {
  alert(c.text + " 原始作者")
}

// 内容列表
function ContentList (props) {
  return (
    <div className="content-main">
      <div className="content-center" style={{ width: getWidth() }}>
        <div className="content-list-title">
          <div className="content-list-one">主题</div>
          <div className="content-list-two"></div>
          <div className="content-list-three">评论</div>
          <div className="content-list-four">浏览</div>
          <div className="content-list-five">活动</div>
        </div>
        {
          contentList.map((i, n) => {
            return <div key={i.title} className="content-list">
              <div className="content-list-one" onClick={() => {
                props.listClick(i);
              }}>
                <span className="content-list-one-border" style={{
                  borderLeft: `.5rem solid ${Colors[n]}`,
                  color: Colors[n]
                }}>{i.typeTexx}</span>{i.title}
              </div>
              <div className="content-list-two">
                {
                  i.postBy.map((x, y) => {
                    return <span onClick={() => ImgClick(x)} title={x.text + " 原始作者"} key={y} className="centent-circle" style={{
                      background: Colors[
                        Math.floor((Math.random() * i.postBy.length) + 1)]
                    }}>{x.img}</span>
                  })
                }
              </div>
              <div className="content-list-three">{i.comment}</div>
              <div className="content-list-four">{i.lookNum}</div>
              <div className="content-list-five">{i.endTime}</div>
            </div>
          })
        }

        <hr />
        <p> ... 敬请期待 ...</p>

      </div>
    </div>
  )
}

export default ContentList;

