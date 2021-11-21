const head = require('./config/head.js');
const plugins = require('./config/plugins.js');
const themeConfig = require('./config/themeConfig.js');

module.exports = {
  // theme: 'vdoing', // 使用npm包主题
  theme: require.resolve('../../theme-vdoing'), // 使用本地主题

  title: "LFJINGT's blog",
  description: 'web前端技术博客,简洁至上,专注web前端学习与总结。JavaScript,js,ES6,TypeScript,vue,python,css3,html5,Node,git,github等技术文章。',
  // base: '/', // 格式：'/<仓库名>/'， 默认'/'
  markdown: {
    lineNumbers: true, // 代码行号
  },
  "mottos": [{
    "zh": "愿你保持初心和善良,笑里尽是温暖与坦荡。",
    "en": "May you keep your original heart and kindness, and smile with warmth and magnanimity."
  },
    {
      "zh": "年轻就是无限的可能。",
      "en": "Youth means limitless possibilities."
    },
    {
      "zh": "真正的梦就是现实的彼岸。",
      "en": "Real dream is the other shore of reality."
    },
    {
      "zh": "不为模糊不清的未来担忧，只为清清楚楚的现在努力。",
      "en": "Don't worry about the vague future, just strive for the clear present."
    },
    {
      "zh": "与其装腔作势企图影响别人，不如咬牙切齿狠命修理自己。",
      "en": "Rather than pretending to influence others, it's better to grind your teeth and repair yourself."
    }, {
      "zh": "上天是公平的，只要努力就会有收获，否则就是你不够努力。",
      "en": "God is fair, as long as effort will include results, otherwise is you hard enough."
    },
    {
      "zh": "人生没有后悔，我们只能尽力去不让自己后悔。",
      "en": "Life without regret, we can only do our best to not to regret."
    }
  ],
  "covers": [
    'https://pan.zealsay.com/zealsay/cover/7.jpg',
    'https://pan.zealsay.com/zealsay/cover/1.jpg',
    'https://pan.zealsay.com/zealsay/cover/2.jpg',
    'https://pan.zealsay.com/zealsay/cover/3.jpg',
    'https://pan.zealsay.com/zealsay/cover/4.jpg',
    'https://pan.zealsay.com/zealsay/cover/5.jpg',
    'https://pan.zealsay.com/zealsay/cover/6.jpg'
  ],
  head,
  plugins,
  themeConfig,
}
