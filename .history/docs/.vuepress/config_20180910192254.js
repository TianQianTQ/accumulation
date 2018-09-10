module.exports = {
  title:'Hello 伊人笑桃花酒',
  description:'用文字记录路过的风景',
  themeConfig: {
    nav:[
      { text: '前端面试', 
        items: [
          { text :'HTML && CSS',
            link :'/as.vue'
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
    sidebar:{
      // docs文件夹下面的accumulate文件夹 文档中md文件 书写的位置(命名随意)
      '/accumulate/': [
          '/accumulate/', // accumulate文件夹的README.md 不是下拉框形式
          {
            title: '侧边栏下拉框的标题1',
            children: [
              '/accumulate/JS/test', // 以docs为根目录来查找文件 
              // 上面地址查找的是：docs>accumulate>JS>test.md 文件
              // 自动加.md 每个子选项的标题 是该md文件中的第一个h1/h2/h3标题
            ]
          }
        ],
        // docs文件夹下面的algorithm文件夹 这是第二组侧边栏 跟第一组侧边栏没关系
        '/algorithm/': [
          '/algorithm/', 
          {
            title: '第二组侧边栏下拉框的标题1',
            children: [
              '/algorithm/simple/test' 
            ]
          }
        ]
    }
  }
}