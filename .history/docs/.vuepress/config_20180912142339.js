module.exports = {
  title:'Hello 伊人笑桃花酒',
  description:'用文字记录路过的风景',
  themeConfig: {
    nav:[
      { text: '前端面试', 
        items: [
          { text :'HTML && CSS',
            link :'./interview/HTML.md'
          },{
            text :'JavaScript',
            link:''
          },{
            text :'框架',
            link:''
          },{
            text :'webpack',
            link:''
          },{
            text :'网络',
            link:''
          },{
            text :'算法',
            link:''
          }
        ]
      }, 
      { text: 'js原生方法', link: '' }, 
      { text: '功能组合', link: '' },
      { text: '趣味Demo', link: '' },   
      { text: 'GitHub', link:'https://github.com/TianQianTQ'},
      { text: '博客', link:'https://blog.csdn.net/t_tq_bnsg_bs_ll'}  
    ],
    navbar: false,
    sidebar:[
      '/',
      '/page-a',
      ['/page-b', 'Explicit link text']
    ],
    sidebarDepth: 2,   // 设置嵌套的标题链接深度\
    displayAllHeaders: true // 默认值：false  设置所有页面的标题链接
  }, 
  markdown: { // 为每个代码块显示行号
    lineNumbers: true
  }
}