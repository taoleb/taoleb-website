---
id: "daily-ai-news-october-31-2025"
title: "每日资讯 | OpenAI开源安全模型、Cursor 2.0发布、Sora三大新功能、MiniMax Speech 2.6、智源Emu3.5、OpenAI上市计划、OpenFold3、AI内省研究等"
description: "OpenAI开源gpt-oss-safeguard安全分类模型；Cursor发布2.0版本推出自研编码模型Composer；Sora推出角色客串、视频拼接等三大新功能并限时开放注册；MiniMax Speech 2.6端到端延迟低于250毫秒；智源发布悟界·Emu3.5多模态世界大模型；OpenAI计划2027年上市估值或达1万亿美元；OpenFold Consortium发布OpenFold3预览版；Anthropic发布大语言模型内省迹象研究；前Meta FAIR负责人田渊栋发表Grokking研究揭示AI顿悟本质。"
date: "2025-10-31"
pubDate: "2025-10-31"
updatedDate: "2025-10-31"
categories: "AI技术"
tags: ["AI技术", "OpenAI", "Cursor", "Sora", "MiniMax", "智源", "Emu3.5", "上市", "OpenFold3", "Anthropic", "内省", "Grokking"]
cover: "https://wp-cdn.4ce.cn/v2/Eijloii.png"
heroImage: ""
recommend: true
top: false
hide: false
---

## 生成式AI

### 一、OpenAI 开源两个专门用于安全分类的推理模型

1. OpenAI开源gpt-oss-safeguard安全分类模型（120b和20b版本），采用Apache 2.0许可证，能直接理解策略文档进行内容分类无需重新训练。
2. 该模型在多个基准测试中表现超越GPT-5-thinking，在内容审核评估集和ToxicChat数据集上达到行业最佳性价比。
3. OpenAI内部已使用该技术（Safety Reasoner原型）处理图像生成和Sora 2等产品，安全推理算力占比高达16%。

### 二、Cursor 2.0更新，自研模型Composer，多agent并行

1. Cursor发布2.0版本，推出首个自研编码模型Composer，生成速度达每秒250个token，是同类前沿系统的4倍，标志从"AI外壳"向"AI原生平台"转型。
2. Composer采用混合专家（MoE）架构，通过强化学习针对软件工程优化，在Cursor Bench评测中达到前沿水平，已被团队日常开发使用。
3. 新版界面支持多智能体并行协作，基于git worktree或远程机器实现不同模型同时处理同一任务，并增加原生浏览器工具用于测试迭代。

### 三、Sora连更三大新功能！一键打造IP形象，限时免注册

1. Sora推出角色客串（Character Cameo）功能，支持保持非人类客串角色一致性，可从生成视频中提取虚拟角色实现自循环。
2. 新增视频拼接功能和社区排行榜，分为被使用最多的客串角色、被二创最多的视频等分类。
3. Sora在美国、加拿大、日本和韩国四国限时取消邀请码限制直接开放注册，正值Android版本上线节点抢占安卓市场。

### 四、MiniMax Speech 2.6更新，最强 Voice Agent 来袭

1. MiniMax Speech 2.6端到端延迟低于250毫秒达行业顶尖水平，已成为LiveKit、Pipecat、Vapi等全球语音平台的底层技术引擎。
2. 新版本支持多语言的网址、邮箱、电话、日期及金额等非标准文本格式直接转换，无需繁琐文本预处理实现信息传递更流畅。
3. 提供Fluent LoRA功能，即使是带口音或不流利的非母语录音也可在音色复刻时生成流利自然语音，支持40+语种。

### 五、刚刚，智源悟界·Emu3.5登场，原生具备世界建模能力

1. 北京智源发布悟界·Emu3.5多模态世界大模型，基于34B稠密Transformer在超10万亿Token（约790年视频）上预训练，首次揭示"多模态Scaling范式"。
2. 采用"下一状态预测"目标实现视觉叙事和视觉指导能力，在图像编辑任务上达到与Gemini-2.5-Flash-Image相当性能。
3. 提出离散扩散自适应（DiDA）技术将图像推理速度提升近20倍，成为首个在速度和质量上媲美顶级闭源扩散模型的自回归模型。

### 六、OpenAI明年上市，万亿美元估值将成史上最大IPO

1. OpenAI计划最早2026年下半年提交上市申请，2027年挂牌，拟通过IPO募集至少600亿美元，估值或高达1万亿美元成全球最大规模IPO。
2. 完成架构重组后非营利组织持有新组建OpenAI集团26%股权，微软放弃独享云服务优先权但获得额外2500亿美元Azure采购合同。
3. 双方新协议明确AGI实现需经独立专家验证，微软对OpenAI技术使用权延长至2032年，同时获准自主开展AGI研究或与第三方合作。

## 前沿科技

### 七、全开源、可商用，蛋白质等结构预测模型OpenFold3

1. OpenFold Consortium发布OpenFold3预览版，基于超30万实验结构和1300万合成结构训练，可预测蛋白质与小分子配体、核酸等相互作用。
2. 在单体RNA结构预测中性能匹敌AlphaFold3，采用模块化设计支持用户修改模型使其以原生格式解读数据。
3. 所有组件采用Apache 2.0许可证允许商用，诺和诺德、Outpace Bio、拜耳等公司已计划利用该模型加速研发。

## 报告观点

### 八、Anthropic发布最新研究《大语言模型中的内省迹象》

1. Anthropic通过"概念注入"实验发现，Claude能察觉并报告被人为注入的概念，在最强模型上内省成功率达20%。
2. 研究团队通过追溯性注入概念篡改AI的"记忆"，发现模型会基于伪造的内部状态为自己的"错误"进行辩护和杜撰理由。
3. 实验证明AI已具备对内部表征的刻意控制能力，这是"可达意识"的雏形，但离拥有主观感受的"现象意识"还相差甚远。

### 九、"AI顿悟"的真相、大模型如何学会压缩世界

1. 前Meta FAIR负责人田渊栋发表Grokking研究，以严格数学证明模型仅需O(M log M)样本即可实现泛化，远低于传统M²的需求。
2. 他揭示"顿悟"本质是多峰非凸优化过程，当数据增多使"泛化峰"高于"记忆峰"，参数集体翻越产生从记忆到泛化的跃迁。
3. 田渊栋强调表征学习是所有智能能力的基础，loss function只是优化的代理信号，真正的飞跃源于表征方式的改变。
