

//定义一组颜色  
const Colors = [
  '#37b3fd', '#5092fb', '#6f5df2', '#efe318', '#5b54e6', '#6f1f91',
  '#c14347', '#35932e', '#cdae0e', '#d26403', '#030c3b', '#0465ba'
]

// 菜单内容  
const menuList = [
  { text: "求助", number: '2.1 k', describe: "紧急求助用的分类~~~", code: "code_1" },
  { text: "作品", number: "998", describe: "如果有作品，可以在这里展示 smile", code: "code_2" },
  { text: "分享", number: "12.6 k", describe: "乐于分享", code: "code_3" },
  { text: "教程", number: "168", describe: "给新手看的文章注意结构清晰，内容明确", code: "code_4" },
  { text: "探讨", number: "25", describe: "这个分类用来集思广益", code: "code_5" },
  { text: "广告", number: "9", describe: "发广告注意避免出现夸大，请不要提供不实的信息", code: "code_6" },
  { text: "未分类", number: "8.9 k", describe: "自我评估吧", code: "code_7" }
]

// 最新，用户，热门   
const menuListBtn = [
  { text: "最新", icon: "TwitterOutlined" },
  { text: "热门", icon: "YoutubeOutlined" },
  { text: "用户", icon: "FacebookOutlined" }
]

export { Colors, menuList, menuListBtn }