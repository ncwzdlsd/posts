module.exports = {
  title: 'Post Meaningful Posts',
  description: '一个由OIer投稿的OI稿件集合',
  head: 
  [
    [
      'link', { rel: 'icon', href: 'https://photo-1314795557.cos.ap-beijing.myqcloud.com/LOGO.png' }
    ]
  ],
  markdown: 
  {
    lineNumbers: true // 代码块显示行号
  },
  themeConfig: 
  {
    sidebarDepth: 2, // e'b将同时提取markdown中h2 和 h3 标题，显示在侧边栏上。
    lastUpdated: 'Last Updated' // 文档更新时间：每个文件git最后提交的时间
  }
}