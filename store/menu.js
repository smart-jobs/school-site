const menu = [{
  label: '首页',
  link: '/',
}, {
  label: '就业服务',
  link: '/service/',
  children: [{
    label: '就业指导',
    link: '/service/guide',
  }, {
    label: '政策文件',
    link: '/service/policy',
  }, {
    label: '常见问题',
    link: '/service/faq',
  }],
}, {
  label: '新闻公告',
  link: '/news/',
  children: [{
    label: '焦点新闻',
    link: '/news/focus',
  }, {
    label: '就业快讯',
    link: '/news/flash',
  }],
}, {
  label: '招聘信息',
  link: '/jobs/',
  children: [{
    label: '校内宣讲',
    link: '/jobs/campus',
  }, {
    label: '校外宣讲',
    link: '/jobs/campus2',
  }, {
    label: '招聘会',
    link: '/jobs/jobfair',
  }, {
    label: '招聘信息',
    link: '/jobs/jobinfo',
  }],
}, {
  label: '联系我们',
  link: '/about/contact',
}];
export default menu;
