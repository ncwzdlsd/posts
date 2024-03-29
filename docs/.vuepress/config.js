module.exports = {
  title: 'Create Meaningful Notes',
  description: '信息学竞赛笔记集合',
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
    sidebar: 'auto',
    search: false,
    searchMaxSuggestions: 10,
    lastUpdated: 'Last Updated', // 文档更新时间：每个文件git最后提交的时间
    repo: 'ncwzdlsd/posts',
    // 自定义仓库链接文字。默认从 `themeConfig.repo` 中自动推断为
    // "GitHub"/"GitLab"/"Bitbucket" 其中之一，或是 "Source"。
    repoLabel: '查看源码',

    // 以下为可选的编辑链接选项

    // 假如你的文档仓库和项目本身不在一个仓库：
    docsRepo: 'vuejs/vuepress',
    // 假如文档不是放在仓库的根目录下：
    // 假如文档放在一个特定的分支下：
    // 默认是 false, 设置为 true 来启用
    editLinks: false,
    // 默认为 "Edit this page"
    editLinkText: '帮助我们改善此页面！',
    smoothScroll: true,
    displayAllHeaders: true, // 默认值：false
    nav:
    [
      { text: 'Home', link: '/' },
      // 可指定链接跳转模式：默认target: '_blank'新窗口打开，_self当前窗口打开
      { text: '图论', link: '/graph/', target: '_self' },
      { text: '哔哩哔哩', link: 'https://bilibili.com', target: '_blank'},
      // 支持嵌套,形成下拉式的导航菜单
    ],
  }
}