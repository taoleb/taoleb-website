# 🍥 Astro 主题 vhAstro-Theme

## 🚀 vhAstro-Theme：一款基于 Astro 构建的优雅的响应式博客主题

**「当极简主义遇上工程之美」**

在线演示 ➡️ [https://www.vvhan.com](https://www.vvhan.com)

官方文档 ➡️ [vhAstro-Theme](https://www.vvhan.com/article/astro-theme-vhastro-theme)

![Astro主题 vhAstro-Theme](https://i0.wp.com/uxiaohan.github.io/v2/2025/04/1743737394560.webp)

## ✨ 功能特性

- [x] 简洁的响应式设计
- [x] 流畅的动画和页面过渡
- [x] 丝滑的阻尼滚动效果
- [x] 顶部Banner
- [x] 两列布局
- [x] 阅读时间
- [x] 字数统计
- [x] 代码块
- [x] 语法高亮
- [x] 图片懒加载
- [x] 图片灯箱
- [x] LivePhoto
- [x] LaTex 数学公式
- [x] 赞赏功能
- [x] 评论 - 内置【Twikoo、Waline】
- [x] 本地搜索
- [x] 公告
- [x] 标签
- [x] 分类
- [x] 归档
- [x] 动态
- [x] 圈子
- [x] 关于
- [x] 留言板
- [x] 友情链接
- [x] 推荐文章
- [x] 置顶文章
- [x] 谷歌广告
- [x] 侧边栏选择性展示
- [x] 内置 404 页面
- [x] Sitemap 支持
- [x] RSS 支持
- [x] 活跃的社区支持
- [x] 广泛的现代框架兼容性
- [x] 高效的性能优化
- [x] 优秀的开发体验

## 🚀 使用方法

### 使用 Github 模板

- 使用此模板 [生成新仓库或 Fork 此仓库](https://github.com/new?template_name=vhAstro-Theme&template_owner=uxiaohan)
- 进行本地开发，Clone 新的仓库，执行 `pnpm install` 以安装依赖
- 若未安装 [pnpm](https://pnpm.io)，执行 `npm install -g pnpm`
- 通过配置文件 `src/config.ts` 自定义博客
- 执行 pnpm newpost '文章标题' 创建新文章，并在 src/content/posts/ 目录中编辑
- 参考官方指南将博客部署至 Vercel, Netlify,Cloudflare Pages, GitHub Pages 等


### Cloudflare Pages 自动部署

[![vhAstro-Theme](https://deploy.workers.cloudflare.com/button)](https://dash.cloudflare.com/?to=/:account/workers-and-pages/create/deploy-to-workers&repository=https://github.com/uxiaohan/vhAstro-Theme)

### 使用命令拉取模板

```bash
# 使用 pnpm
pnpm create astro@latest --template uxiaohan/vhAstro-Theme astro-blog
# 或者 yarn
yarn create astro --template uxiaohan/vhAstro-Theme astro-blog
# 或者 npm
npm create astro@latest -- --template uxiaohan/vhAstro-Theme astro-blog
# 进入项目目录
cd astro-blog
```

### 本地开发

```bash
# 安装依赖
pnpm install
# 本地开发
pnpm dev
# 构建静态文件
pnpm build
# 创建新文章
pnpm newpost '文章标题'
```

### 信息动态

```js
// 配置文件 src/page_data/InfoDynamic.ts
export default {
	// API 接口请求优先，数据格式保持和 data 一致
	api: "",
	// api 为空则使用 data 静态数据
	data: [
		{
			id: 'info-001',
			title: '千里智驾收编吉利2500人军团，智能驾驶领域重大整合',
			date: '2025-08-04',
			categories: '汽车科技',
			tags: ['智能驾驶', '千里智驾', '吉利', '印奇', '人才整合'],
			cover: '/assets/images/banner/072c12ec85d2d3b5.webp',
			content: '印奇操盘的"千里智驾"一举揽入约2500名吉利员工，涵盖极氪约1500人、吉利研究院近1000人。加上迈驰智行的500人，新公司规模达到3000人。千里智驾刚于7月完成增资，股东方累计现金出资超17亿元。印奇毕业于清华计算机实验室，长于算法，与华为智能汽车解决方案BU首任总裁王军联手，推动千里智驾启航。',
			recommend: true,
			top: true
		}
	]
};
```

### 说说动态

### 圈子（需部署 FreshRSS）

```js
// 配置文件 src/page_data/Friends.ts
export default {
	// API 接口请求优先，数据格式保持和 data 一致
	api: "",
	// api 为空则使用 data 静态数据
	data: [
		{
			title: "Astro 中使用 Lenis 增加鼠标滚动阻尼感",
			auther: "韩小韩博客",
			date: "2025-03-06",
			link: "https://www.vvhan.com/article/Lenis-in-Astro",
			content: "在移动端触控交互中，惯性滚动带来的丝滑体验已成为标配，但鼠标滚轮受限于机械结构，滚动时难免产生生硬的段落感。如何让传统滚轮操作也能获得如触控板般的阻尼反馈？Lenis库通过JavaScript模拟惯性算法，成功将”物理惯性”引入网页滚动，本文将解析其实现原理与实战应用。"
		},
		{
			title: "Astro 添加 Twikoo 评论组件",
			auther: "韩小韩博客",
			date: "2025-03-03",
			link: "https://www.vvhan.com/article/astro-twikoo",
			content: "Astro在使用视图过渡路由时，在跳转路由时，会导致JS文件只有在第一次进入页面时生效，所以Astro在使用视图过渡路由下Twikoo时无法正常使用的，我是单独写了一个评论组件，对Twikoo进行动态加载，然后在需要评论的页面引入的。"
		},
		{
			title: "Astro主题-优雅的vhAstro-Theme【使用文档】",
			auther: "韩小韩博客",
			date: "2025-03-02",
			link: "https://www.vvhan.com/article/astro-theme-vhastro-theme",
			content: "🥝从Z-Blog到Emlog，从Typecho到Hexo，从动态博客到静态博客，作为一个前端，我深入了解了多种SSG工具，如Hexo、Vitepress、Hugo等，并最终锁定了Astro作为重构博客的选择。🍇Astro活跃的社区支持、广泛的现代框架兼容性、高效的性能优化、优秀的开发体验。"
		}
	]
};
```

## 📄 文章格式

```md
---
title: 标题
categories: 分类
tags:
  - 标签1
  - 标签2
id: 文章ID
date: 文章创建日期
updated: 文章更新日期
cover: "封面图URL (为空默认随机内置封面 /public/assets/images/banner)"
recommend: false # 是否推荐文章
top: false # 是否置顶文章
hide: false # 是否隐藏文章
<!-- 页面独有 -->
type: "links" # 页面类型
comment: false # 关闭页面评论（默认开启）
---
```

## ✅ Lighthouse

![vhAstro-Theme-Lighthouse](https://uxiaohan.github.io/v2/2025/03/1742543844078.svg)

## 🌈 项目结构

```t
.
├── public              => 静态资源
├── script              => 命令
├── src
│   ├── components      => 组件
│   ├── content
│   │   └── blog        => 博客文章数据
│   ├── layouts         => Layout 布局
│   ├── page_data       => 页面数据
│   ├── pages
│   │   ├── about                        => 关于页面
│   │   ├── archives                     => 归档页面
│   │   ├── article                      => 文章页面
│   │   ├── categories                   => 分类页面
│   │   ├── friends                      => 圈子页面
│   │   ├── links                        => 友链页面
│   │   ├── message                      => 留言页面
│   │   ├── tag                          => 标签页面
│   │   ├── talking                      => 动态页面
│   │   ├── [...page].astro              => 首页分页
│   │   ├── 404.astro                    => 404页面
│   │   ├── robots.txt.ts                => 爬虫文件
│   │   └── rss.xml.ts                   => RSS文件
│   ├── plugins             => 插件
│   ├── scripts             => 脚本
│   ├── styles              => 样式
│   ├── type                => 类型
│   ├── utils               => 工具
│   ├── content.config.ts   => 内容配置
│   ├── config.ts           => 配置
├── tsconfig.json       => Typescript 配置
├── astro.config.mjs    => Astro 配置
├── package.json        => 依赖管理
└── pnpm-lock.yaml      => 依赖锁定文件
```

## ⚙️ 项目配置
```js
export default {
  Title: '韩小韩博客',
  Site: 'https://www.vvhan.com',
  Subtitle: '不曾与你分享的时间,我在进步.',
  Description: '韩小韩博客 专注于前开发与相关技术的实战分享，涵盖Vue框架、Node.js、Serverless等，并涉及Node、Python、Linux、Docker等领域。同时，博客也分享作者的生活、音乐和旅行的热爱。',
  Author: '.𝙃𝙖𝙣',
  Motto: '运气是计划之外的东西.',
  Avatar: 'https://q1.qlogo.cn/g?b=qq&nk=1655466387&s=640',
  // Cover 网站缩略图
  Cover: '/assets/images/banner/072c12ec85d2d3b5.webp',
  // 网站创建时间
  CreateTime: '2021-09-01',
  // 首页打字机文案列表
  TypeWriteList: [
    '不曾与你分享的时间,我在进步.',
    "I am making progress in the time I haven't shared with you.",
  ],
  // 顶部 Banner 配置
  HomeBanner: {
    enable: true,
    cover: '/assets/images/home-banner.webp'
  },
  // 博客主题配置
  Theme: {
    // 颜色请用 16 进制颜色码
    // 主题颜色
    "--vh-main-color": "#01C4B6",
    // 字体颜色
    "--vh-font-color": "#34495e",
    // 侧边栏宽度
    "--vh-aside-width": "318px",
    // 全局圆角
    "--vh-main-radius": "0.88rem",
    // 主体内容宽度
    "--vh-main-max-width": "1458px",
  },
  // 导航栏 (新窗口打开 newWindow: true)
  Navs: [
    // 仅支持 SVG 且 SVG 需放在 public/assets/images/svg/ 目录下，填入文件名即可（封装了 SVG 组件 为了极致压缩 SVG）
    // 建议使用 https://tabler.io/icons 直接下载 SVG
    { text: '朋友', link: '/links', icon: 'Nav_friends' },
    { text: '圈子', link: '/friends', icon: 'Nav_rss' },
    { text: '动态', link: '/talking', icon: 'Nav_talking' },
    { text: '昔日', link: '/archives', icon: 'Nav_archives' },
    { text: '留言', link: '/message', icon: 'Nav_message' },
    { text: '关于', link: '/about', icon: 'Nav_about' },
    { text: 'API', link: 'https://api.vvhan.com/', target: true, icon: 'Nav_link' },
  ],
  // 侧边栏个人网站
  WebSites: [
    // 仅支持 SVG 且 SVG 需放在 public/assets/images/svg/ 目录下，填入文件名即可（封装了 SVG 组件 为了极致压缩 SVG）
    // 建议使用 https://tabler.io/icons 直接下载 SVG
    { text: 'Github', link: 'https://github.com/uxiaohan', icon: 'WebSite_github' },
    { text: '韩小韩API', link: 'https://api.vvhan.com', icon: 'WebSite_api' },
    { text: '每日热榜', link: 'https://hot.vvhan.com', icon: 'WebSite_hot' },
    { text: '骤雨重山图床', link: 'https://wp-cdn.4ce.cn', icon: 'WebSite_img' },
    { text: 'HanAnalytics', link: 'https://analytics.vvhan.com', icon: 'WebSite_analytics' },
  ],
  // 侧边栏展示
  AsideShow: {
    // 是否展示个人网站
    WebSitesShow: true,
    // 是否展示分类
    CategoriesShow: true,
    // 是否展示个人标签
    TagsShow: true,
    // 是否展示推荐文章
    recommendArticleShow: true
  },
  // DNS预解析地址
  DNSOptimization: [
    'https://i0.wp.com',
    'https://analytics.vvhan.com',
    'https://vh-api.4ce.cn',
    'https://registry.npmmirror.com',
    'https://pagead2.googlesyndication.com'
  ],
  // 博客音乐组件解析接口
  vhMusicApi: 'https://vh-api.4ce.cn/blog/meting',
  // 评论组件（只允许同时开启一个）
  Comment: {
    // Twikoo 评论
    Twikoo: {
      enable: false,
      envId: ''
    },
    // Waline 评论
    Waline: {
      enable: false,
      serverURL: ''
    }
  },
  // Han Analytics 统计（https://github.com/uxiaohan/HanAnalytics）
  HanAnalytics: { enable: true, server: 'https://analytics.vvhan.com', siteId: 'Hello-HanHexoBlog' },
  // Google 广告
  GoogleAds: {
    ad_Client: 'ca-pub-xxxxxxxxxx',
    // 侧边栏广告(不填不开启)
    asideAD_Slot: `<ins class="adsbygoogle" style="display:block" data-ad-client="ca-pub-xxxxxxxxxx" data-ad-slot="xxxxxx" data-ad-format="auto" data-full-width-responsive="true"></ins>`,
    // 文章页广告(不填不开启)
    articleAD_Slot: `<ins class="adsbygoogle" style="display:block" data-ad-client="ca-pub-xxxxxxxxxx" data-ad-slot="xxxxxx" data-ad-format="auto" data-full-width-responsive="true"></ins>`
  },
  // 文章内赞赏码
  Reward: {
    // 支付宝收款码
    AliPay: '/assets/images/alipay.webp',
    // 微信收款码
    WeChat: '/assets/images/wechat.webp'
  }
}
```

## ✨ 功能改进记录

### 【我的哲思】页面功能完善
**改进内容**: 将原有的【API】子页面改为【我的哲思】页面，用于分享哲学思考  
**主要功能**:
- 创建了专门的哲学思考分享页面
- 添加了《中国哲学简史》等哲学文章
- 设计了美观的文章卡片展示界面
- 支持文章分类、标签和特色文章标记
- 提供了哲学思考的引言和说明

**技术实现**:
- 更新了导航栏配置，将"API"改为"我的哲思"
- 完善了`src/page_data/Philosophy.ts`数据文件，添加了封面图片支持
- 优化了`src/styles/Philosophy.less`样式文件，为文章卡片添加了封面图片样式
- 完善了`src/scripts/Philosophy.ts`交互功能，支持封面图片显示
- 创建了详细的《中国哲学简史》文章内容
- 为所有哲学文章设置了统一的封面图片

**页面特色**:
- 响应式设计，适配移动端和桌面端
- 文章卡片悬停效果和动画
- 支持特色文章优先展示
- 优雅的哲学主题配色和布局
- 为《中国哲学简史》文章设置了专门的封面图片  


## ✨ 最新更新记录 (2025-01-27)

### 【信息动态】页面功能升级
**更新内容**: 将原有的【动态】页面改造为【信息动态】页面，用于分享每日信息动态  
**主要改进功能**:

#### 1. 导航栏调整
- 将【动态】移动到【博客】前面，优化导航栏布局
- 更新了页面标题为"信息动态 📰"
- 修改了页面描述为"分享每日信息动态"

#### 2. 【信息动态】页面改造
- 将原有的说说动态样式改为卡片式展示
- 使用与主页相同的文章卡片样式
- 添加了封面图片、分类、标签等完整信息
- 支持推荐和置顶功能

#### 3. 信息动态详情页面
- 创建了`src/pages/info-dynamic/[id].astro`详情页面
- 支持点击卡片查看详细的总结介绍
- 页面显示完整的HTML格式内容，包括多个章节
- 添加了返回按钮和标签链接
- 响应式设计，完美适配移动端和桌面端

#### 4. 信息动态内容
- 添加了多个领域的信息动态内容：
  - AI技术发展预测
  - 量子计算技术突破
  - 新能源技术趋势
  - 区块链应用场景
  - 元宇宙发展现状
  - 生物技术最新进展
- 为每条信息动态添加了详细的HTML格式内容

#### 5. 技术实现
- 创建了`src/page_data/InfoDynamic.ts`数据文件
- 更新了`src/scripts/InfoDynamic.ts`脚本文件
- 新增了`src/styles/InfoDynamic.less`样式文件
- 修改了`src/layouts/ToolLayout/ToolLayout.less`布局样式
- 更新了导航栏配置
- 实现了动态路由和静态页面生成

#### 6. 页面特色
- 响应式设计，完美适配各种设备
- 优雅的卡片悬停效果和动画
- 支持特色内容优先展示
- 统一的视觉风格和用户体验
- 丰富的分类和标签系统
- 详细的HTML格式内容展示

### 【信息动态】页面架构重构 (2025-01-27)
**重大更新**: 将【信息动态】页面的数据源从静态数据改为blog内容集合，实现与【博客】页面相同的数据管理方式

#### 1. 架构重构
- **数据源统一**: 将信息动态的数据源从`src/page_data/InfoDynamic.ts`静态数据改为`src/content/blog`内容集合
- **内容管理统一**: 信息动态现在与博客文章使用相同的内容管理方式，支持Markdown格式
- **路由统一**: 信息动态详情页面现在使用`/article/[id]`路由，与博客文章保持一致

#### 2. 技术实现
- **内容集合配置**: 创建了`src/content/config.ts`文件，定义了blog集合的schema
- **脚本重构**: 修改了`src/scripts/InfoDynamic.ts`，使其从blog集合读取数据而不是静态数据
- **页面重构**: 更新了`src/pages/info-dynamic/[id].astro`，使用Astro的内容渲染功能
- **布局优化**: 修改了`src/layouts/ToolLayout/ToolLayout.astro`，为动态页面添加正确的容器

#### 3. 数据格式统一
- **文章格式**: 信息动态现在使用与博客文章相同的frontmatter格式
- **内容渲染**: 支持Markdown格式的内容渲染，包括标题、段落、列表等
- **元数据**: 支持标题、日期、分类、标签、封面图等完整的元数据

#### 4. 功能优势
- **内容管理**: 统一的内容管理方式，便于维护和更新
- **格式支持**: 支持完整的Markdown格式，包括代码块、图片、链接等
- **SEO优化**: 更好的SEO支持，包括结构化数据和元数据
- **性能优化**: 静态生成，更好的加载性能
- **开发体验**: 更好的开发体验，支持热重载和类型检查

#### 5. 迁移说明
- **现有数据**: 原有的静态数据已迁移到blog内容集合中
- **路由变化**: 信息动态详情页面路由从`/info-dynamic/[id]`改为`/article/[id]`
- **内容格式**: 所有信息动态内容已转换为Markdown格式
- **向后兼容**: 保持了原有的UI和用户体验

### 博客功能全面升级
**更新内容**: 为个人博客添加了多个新功能页面和内容  
**主要新增功能**:

#### 1. 【博客分享】页面
- 创建了专门的博客分享页面，用于展示精选博客文章
- 添加了《2025年AGI核心预测》等重要技术文章
- 设计了美观的文章卡片展示界面
- 支持文章分类、标签和特色文章标记

#### 2. 【项目展示】页面  
- 创建了项目展示页面，用于展示个人项目作品
- 添加了多个开源项目展示
- 支持项目分类、技术栈标签
- 提供了项目链接和详细描述

#### 3. 【我的哲思】页面完善
- 完善了哲学思考分享页面
- 添加了《中国哲学简史》等哲学文章
- 优化了文章展示样式和交互效果
- 为文章添加了封面图片支持

#### 4. 内容更新
- 新增了多篇技术博客文章
- 更新了网站配置和样式
- 优化了页面布局和用户体验
- 添加了新的图片资源和图标

#### 5. 技术改进
- 更新了网站配置文件
- 优化了页面组件和样式
- 完善了脚本功能和交互
- 改进了响应式设计

**技术实现**:
- 新增了`src/page_data/BlogShare.ts`、`src/page_data/Projects.ts`等数据文件
- 创建了`src/pages/blogshare/`、`src/pages/projects/`等页面目录
- 添加了`src/scripts/BlogShare.ts`、`src/scripts/Projects.ts`等交互脚本
- 完善了`src/styles/BlogShare.less`、`src/styles/Projects.less`等样式文件
- 更新了导航栏配置，添加了新的页面链接

**页面特色**:
- 响应式设计，完美适配各种设备
- 优雅的卡片悬停效果和动画
- 支持特色内容优先展示
- 统一的视觉风格和用户体验
- 丰富的文章分类和标签系统

## Stargazers over time

![Stargazers over time](https://starchart.cc/uxiaohan/vhAstro-Theme.svg?variant=adaptive)

## 📝 【动态】子页面更新指南

### 概述
【动态】子页面现在使用`src/content/blog`路径下的markdown文件作为数据源，与【博客】页面共享相同的内容管理系统。这使得信息动态的更新变得更加简单和统一。

### 更新步骤

#### 1. 创建新的Markdown文件
在`src/content/blog/`目录下创建新的markdown文件，文件名建议使用简洁的英文或拼音，避免特殊字符。

**文件命名示例**：
```
src/content/blog/OpenAI终于open了一下.md
src/content/blog/Google发布的Genie3.md
src/content/blog/新功能发布.md
```

#### 2. 配置Frontmatter
每个markdown文件必须在开头包含正确的frontmatter配置，格式如下：

```yaml
---
id: "文章唯一ID"
title: "文章标题"
description: "文章描述"
date: "2025-01-27"
pubDate: "2025-01-27"
updatedDate: "2025-01-27"
categories: "分类名称"
tags: ["标签1", "标签2", "标签3"]
cover: ""
heroImage: ""
recommend: true
top: false
hide: false
---
```

**Frontmatter字段说明**：
- `id`: 文章唯一标识符，用于URL路由，建议使用简洁的英文或拼音
- `title`: 文章标题，支持中文
- `description`: 文章描述，用于SEO和预览
- `date`: 文章发布日期
- `pubDate`: 发布日期（可选）
- `updatedDate`: 更新日期（可选）
- `categories`: 文章分类，如"AI技术"、"科技分析"等
- `tags`: 文章标签数组，用于分类和搜索
- `cover`: 封面图片路径（可选）
- `heroImage`: 主图片路径（可选）
- `recommend`: 是否推荐显示（true/false）
- `top`: 是否置顶显示（true/false）
- `hide`: 是否隐藏文章（true/false）

#### 3. 编写文章内容
在frontmatter下方编写文章内容，支持完整的Markdown格式：

```markdown
# 文章标题

## 概述
文章概述内容...

## 详细内容
### 章节1
详细内容描述...

### 章节2
更多内容...

## 总结
文章总结...
```

**支持的Markdown格式**：
- 标题（# ## ###）
- 段落和文本
- 列表（有序和无序）
- 链接和图片
- 代码块
- 引用块
- 表格
- 粗体和斜体

#### 4. 更新InfoDynamic.ts配置
在`src/page_data/InfoDynamic.ts`中添加对应的信息卡片配置：

```typescript
export default {
  api: '',
  data: [
    // 现有卡片...
    {
      id: 'info-004',
      title: '新文章标题',
      date: '2025-01-27',
      categories: '分类名称',
      tags: ['标签1', '标签2', '标签3'],
      cover: '/assets/images/banner/图片名称.jpg',
      content: '文章简短描述...',
      recommend: true,
      top: false,
      link: '/article/文章ID'
    }
  ]
}
```

**配置说明**：
- `id`: 信息卡片唯一ID
- `title`: 显示在卡片上的标题
- `date`: 发布日期
- `categories`: 分类名称
- `tags`: 标签数组
- `cover`: 封面图片路径
- `content`: 卡片显示的简短描述
- `recommend`: 是否推荐
- `top`: 是否置顶
- `link`: 文章链接，格式为`/article/文章ID`

#### 5. 构建和测试
完成文件创建和配置后，执行以下步骤：

```bash
# 构建项目
npm run build

# 启动开发服务器
npm run dev
```

**验证步骤**：
1. 检查构建是否成功，没有错误信息
2. 访问【动态】页面，确认新文章卡片正确显示
3. 点击文章卡片，确认能正确跳转到文章详情页
4. 检查文章内容是否正确渲染

### 常见问题解决

#### 1. 404错误
**问题**：点击信息卡片出现404错误
**解决方案**：
- 检查markdown文件的frontmatter配置是否正确
- 确认`id`字段与InfoDynamic.ts中的`link`路径匹配
- 检查文件名是否包含特殊字符，建议重命名

#### 2. YAML语法错误
**问题**：构建时出现YAML语法错误
**解决方案**：
- 检查frontmatter中的引号使用，避免嵌套引号
- 确保缩进正确，使用空格而不是制表符
- 验证所有必需字段都已正确配置

#### 3. 图片路径错误
**问题**：文章中的图片无法显示
**解决方案**：
- 将图片文件放在`public/assets/images/`目录下
- 使用正确的相对路径引用图片
- 检查图片文件是否存在

#### 4. 内容不显示
**问题**：文章内容没有正确渲染
**解决方案**：
- 检查markdown语法是否正确
- 确认frontmatter配置完整
- 验证文件编码为UTF-8

### 最佳实践

#### 1. 文件命名
- 使用简洁的英文或拼音命名
- 避免特殊字符和空格
- 使用有意义的文件名

#### 2. 内容组织
- 使用清晰的标题层级
- 添加适当的分类和标签
- 编写简洁的描述

#### 3. 图片管理
- 统一使用`public/assets/images/`目录
- 使用有意义的图片名称
- 优化图片大小和格式

#### 4. 版本控制
- 定期提交更改
- 使用有意义的提交信息
- 保持文件结构整洁

### 自动化脚本
可以使用以下命令快速创建新文章：

```bash
# 创建新文章（需要先配置脚本）
npm run newpost '文章标题'
```

这将自动创建markdown文件并生成基本的frontmatter配置。

### 总结
通过使用统一的内容管理系统，【动态】子页面的更新变得更加简单和高效。只需要创建markdown文件、配置frontmatter、更新InfoDynamic.ts，然后构建项目即可完成更新。这种方式确保了内容的一致性和可维护性。
