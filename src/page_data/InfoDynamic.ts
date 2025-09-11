export default {
  // API 接口请求优先，数据格式保持和 data 一致
  api: '',
  // api 为空则使用 data 静态数据
  data: [
    {
      id: 'info-001',
      title: '380亿重庆汽车黑马，收编吉利2500人军团 - 千里智驾崛起',
      date: '2025-08-05',
      categories: '行业事件',
      tags: ['智能驾驶', '汽车科技', '吉利'],
      cover: 'https://wp-cdn.4ce.cn/v2/DLm6mwS.png',
      content: '深度分析千里科技如何通过收编吉利2500人军团，打造智能驾驶新格局。印奇掌舵的千里科技正在构建一个全新的"AI+车"生态体系。',
      recommend: true,
      top: false,
      link: '/article/380亿重庆汽车黑马收编吉利2500人军团-千里智驾崛起'
    },
    {
      id: 'info-002',
      title: 'Google 发布的 Genie 3 能从文字或图片即时生成可玩的 3D 互动世界',
      date: '2025-08-07',
      categories: 'AI技术',
      tags: ['Google', 'Genie 3', '3D生成', 'AI', '世界模型', 'DeepMind'],
      cover: 'https://wp-cdn.4ce.cn/v2/bpOe0kA.jpeg',
      content: 'Google发布的Genie 3能从文字或图片即时生成可玩的3D互动世界，支持实时交互、720p画质、24fps帧率，在清晰度、时长、连贯性与可编辑性上都大幅提升。',
      recommend: true,
      top: true,
      link: '/article/Google发布的Genie3能从文字或图片即时生成可玩的3D互动世界'
    },
    {
      id: 'info-003',
      title: 'OpenAI终于"open"了一下 - 发布两款开源大语言模型',
      date: '2025-08-07',
      categories: 'AI技术',
      tags: ['OpenAI', '开源模型', 'GPT', 'gpt-oss-120b', 'gpt-oss-20b', 'AI'],
      cover: 'https://wp-cdn.4ce.cn/v2/4SOuhj7.jpeg',
      content: 'OpenAI发布两款开源大语言模型：gpt-oss-120b和gpt-oss-20b，分别针对高性能和轻量化场景优化，在编程竞赛平台Codeforces上表现优异。',
      recommend: true,
      top: false,
      link: '/article/OpenAI终于open了一下-发布两款开源大语言模型'
    }
    ,
    {
      id: 'info-004',
      title: '2025世界机器人大会（北京）',
      date: '2025-08-11',
      categories: '行业事件',
      tags: ['机器人', '具身智能', '产业趋势', '人形机器人'],
      cover: 'https://wp-cdn.4ce.cn/v2/YZ8LorG.png',
      content: '2025年世界机器人大会在北京亦创国际会展中心举办，主题“让机器人更智慧，让具身更智能”。200+企业、1500+展品、百余新品首发，论坛聚焦产业发展、创新应用与技术融合。',
      recommend: true,
      top: true,
      link: '/info-dynamic/wrc-2025-beijing'
    },
    {
      id: 'info-005',
      title: '谷歌nano banana正式上线：单图成本不到3毛钱，比OpenAI便宜95%',
      date: '2025-01-27',
      categories: 'AI技术',
      tags: ['谷歌', 'AI图像生成', 'Gemini', 'nano-banana', '图像编辑', '成本优势'],
      cover: 'https://wp-cdn.4ce.cn/v2/4SOuhj7.jpeg',
      content: '谷歌神秘的图像生成与编辑模型nano banana终于正式上线，正式命名为gemini-2.5-flash-image-preview，具有SOTA的图像生成能力、惊人的角色一致性和闪电般的速度。',
      recommend: true,
      top: true,
      link: '/article/谷歌nano-banana正式上线-单图成本不到3毛钱-比OpenAI便宜95'
    },
    {
      id: 'info-006',
      title: 'AI周报：2025年9月第二周行业动态汇总',
      date: '2025-09-08',
      categories: 'AI技术',
      tags: ['AI周报', '人工智能', '期权激励', 'OpenAI', '人形机器人', '行业动态'],
      cover: 'https://wp-cdn.4ce.cn/v2/4SOuhj7.jpeg',
      content: '本周AI行业重大动态：大厂掀起期权激励潮，OpenAI预计年烧80亿美元，AI岗位薪资持续攀升，人形机器人订单创新高。深度解读行业变化趋势和投资机会。',
      recommend: true,
      top: true,
      link: '/article/ai-weekly-report-2025-september-week2'
    },
    {
      id: 'info-007',
      title: '华为昇腾重大战略转型：从ASIC架构转向CUDA生态兼容',
      date: '2025-09-10',
      categories: 'AI芯片',
      tags: ['华为', '昇腾', 'CUDA', 'ASIC', 'GPGPU', 'AI芯片', '生态转型'],
      cover: 'https://wp-cdn.4ce.cn/v2/4SOuhj7.jpeg',
      content: '华为昇腾AI芯片正在进行重大战略调整，从专用ASIC架构转向通用GPGPU设计，并通过软件兼容层拥抱CUDA生态。这一转型将如何影响国产AI芯片格局？深度分析战略背景、技术路径和市场影响。',
      recommend: true,
      top: true,
      link: '/article/huawei-ascend-cuda-strategy'
    },
    {
      id: 'info-008',
      title: '黑芝麻智能亏损7.6亿：智驾芯片第一股的增长困境',
      date: '2025-09-10',
      categories: 'AI芯片',
      tags: ['黑芝麻智能', '智驾芯片', '汽车科技', '财务分析', '国产芯片', '自动驾驶'],
      cover: 'https://wp-cdn.4ce.cn/v2/4SOuhj7.jpeg',
      content: '国产智驾芯片龙头黑芝麻智能2025年上半年财报显示，营收增长放缓至40.4%，毛利率腰斩至24.8%，亏损高达7.6亿元。深度分析这家曾经明星企业面临的挑战与困境。',
      recommend: true,
      top: false,
      link: '/article/heisesame-financial-crisis-analysis'
    },
    {
      id: 'info-009',
      title: '2025年中国智驾领域技术领袖盘点：13位一号位的技术征程',
      date: '2025-09-11',
      categories: '产业洞察',
      tags: ['自动驾驶', '技术领袖', '智能驾驶', '端到端', 'VLA', '世界模型', '人工智能', '汽车科技'],
      cover: 'https://wp-cdn.4ce.cn/v2/opMSXT2.png',
      content: '深度盘点2025年中国自动驾驶领域的13位技术领袖，从理想郎咸朋到小马智行楼天城，他们如何引领端到端、VLA和世界模型技术革命，书写中国智驾的未来。',
      recommend: true,
      top: false,
      link: '/article/china-autonomous-driving-leaders-2025'
    },
    {
      id: 'info-010',
      title: '慕尼黑车展：中国智驾供应链的全球化突围战',
      date: '2025-09-11',
      categories: '行业事件',
      tags: ['慕尼黑车展', '智能驾驶', '供应链', '出海', '地平线', 'Momenta', '知行科技', '汽车科技'],
      cover: 'https://wp-cdn.4ce.cn/v2/MSUBOF8.png',
      content: '2025年慕尼黑车展见证了中国智能驾驶供应链企业的集体崛起，中国参展企业数量增长40%，从地平线到Momenta，中国企业通过技术输出和本地化布局重塑全球汽车产业格局。',
      recommend: true,
      top: false,
      link: '/article/munich-auto-show-2025-chinese-supply-chain'
    },
    {
      id: 'info-011',
      title: '每日AI新闻速递-9月11日',
      date: '2025-09-11',
      categories: 'AI技术',
      tags: ['AI新闻', '英伟达', 'Claude', '腾讯', '快手', '谷歌', 'AI编程', '生成式AI', 'AI芯片'],
      cover: 'https://wp-cdn.4ce.cn/v2/bT8vK9L.png',
      content: '今日AI行业重磅动态：英伟达Rubin CPX GPU支持百万Token推理，Claude支持直接生成Office文件，腾讯CodeBuddy开启AI编程L4时代，快手AIGC超级员工一句话生成短视频，AI技术全面进入实用化新阶段。',
      recommend: true,
      top: true,
      link: '/article/daily-ai-news-september-11-2025'
    }
  ]
}
