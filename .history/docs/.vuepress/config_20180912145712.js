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
    sidebar: 'auto',    // 自动匹配当前侧边栏---需后续重新配置
    sidebarDepth: 2,   // 设置嵌套的标题链接深度\
    displayAllHeaders: true, // 默认值：false  设置所有页面的标题链接
    lastUpdated: 'Last Updated',   // 最后更新时间  --基于git
    repo: 'https://github.com/TianQianTQ',  // 自定义仓库地址
    // 自定义仓库链接文字。默认从 `themeConfig.repo` 中自动推断为 "GitHub"/"GitLab"/"Bitbucket" 其中之一，或是 "Source"。
    repoLabel: '查看源码',
    // 以下为可选的编辑链接选项
    // 假如你的文档仓库和项目本身不在一个仓库：
    // docsRepo: 'vuejs/vuepress',
    // 假如文档不是放在仓库的根目录下：
    // docsDir: 'docs',
    // 假如文档放在一个特定的分支下：
    // docsBranch: 'master',
    // 默认是 false, 设置为 true 来启用
    // editLinks: true,
    // 默认为 "Edit this page"
    editLinkText: '帮助我们改善此页面！'
  }, 
  markdown: { // 为每个代码块显示行号
    lineNumbers: true
  },
}