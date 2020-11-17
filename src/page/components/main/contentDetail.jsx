import React, { useState, useEffect } from "react"
import "./contentMain.css"
import { Content } from "../json/content"

function ContentDetail (props) {

  useEffect(() => {
    // console.log(props);
  })

  return (
    <div className="content-detail">
      <h2>{props.content.title}</h2>
      <span className="content-type">{props.content.typeTexx}</span>
      <div className="content-container">
        <div className="content-container-head">
          <span className="span-head">{props.content.img}</span>
          <span className="span-name">{props.content.name}</span>
          <span className="span-time">{props.content.time}</span>
        </div>
        <div className="content-container-main"
          dangerouslySetInnerHTML={
            { __html: Content[props.content.code] }
          }></div>
      </div>
      {/* 评论 */}
      <hr />
      <p> ... 敬请期待 ...</p>
    </div >
  )
}

export default ContentDetail;