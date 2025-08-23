---
title: "自动驾驶视觉语言模型VLM工作分析"
date: "2025-08-07"
categories: "技术分享"
tags:
  - "自动驾驶"
  - "视觉语言模型"
  - "VLM"
  - "人工智能"
  - "技术分析"
id: "autonomous-driving-vlm-analysis"
cover: "https://wp-cdn.4ce.cn/v2/m0uA81G.png"
recommend: true
top: false
hide: false
---

# 自动驾驶视觉语言模型VLM工作分析

## 概述

本文对最新的自动驾驶大模型方案进行了初步整理，对其中涉及的视觉语言模型在自动驾驶领域的最新工作进行系统分析和总结。

## 工作分类与详细分析

### 第一部分：场景生成与测试

#### 1. CrashAgent
**标题：** CrashAgent: Crash Scenario Generation via Multi-modal Reasoning  
**链接：** https://www.arxiv.org/abs/2505.18341  
**作者单位：** 卡内基梅隆大学、NVIDIA、西北大学

**解决的问题：**
- 自动驾驶算法训练需要多样化场景，但现有数据集主要包含正常驾驶行为
- 安全关键案例数量有限，限制了算法从风险场景中学习的能力
- 长尾分布问题导致罕见但重要的碰撞场景缺乏

**使用的方法：**
- 多模态大语言模型将事故报告转换为结构化场景格式
- 多智能体框架解析多模态真实世界交通事故报告
- 生成道路布局以及自车和周围交通参与者的行为

**创新点：**
- 首次利用多模态大语言模型从事故报告中生成可执行的仿真场景
- 多智能体框架确保场景的复杂性和真实性
- 提供公开的高质量、大规模碰撞数据集

---

#### 2. CurricuVLM
**标题：** CurricuVLM: Towards Safe Autonomous Driving via Personalized Safety-Critical Curriculum Learning with Vision-Language Models  
**链接：** https://arxiv.org/abs/2502.15119  
**项目主页：** https://zihaosheng.github.io/CurricuVLM/  
**作者单位：** 美国威斯康星大学麦迪逊分校，普渡大学，谷歌

**解决的问题：**
- 现有研究缺乏将安全关键场景纳入策略学习的有效方法
- 自动驾驶车辆行为模式与性能瓶颈的训练课程开发不足
- 需要适应性的训练方法来提升安全性

**使用的方法：**
- 利用视觉语言模型分析智能体行为和识别性能弱点
- 动态生成量身定制的训练场景进行课程适应
- 通过对不安全驾驶情境的叙事描述进行综合分析

**创新点：**
- 首次提出利用VLM实现个性化课程学习
- 能够动态识别和针对性能弱点生成训练场景
- 可作为通用方法与各种强化学习算法集成

---

#### 3. From Accidents to Insights
**标题：** From Accidents to Insights: Leveraging Multimodal Data for Scenario-Driven ADS Testing  
**链接：** https://arxiv.org/abs/2502.02025  
**作者单位：** 麦考瑞大学，北德克萨斯大学

**解决的问题：**
- 自动化生成可扩展且具体的测试场景仍是重大挑战
- 当前方法面临场景不真实、车辆轨迹不准确等局限
- 缺乏有效机制缓解大语言模型的幻觉问题

**使用的方法：**
- TRACE框架通过多模态数据从真实车祸报告中提取高挑战性场景
- 结合上下文学习、思维链提示和自验证技术
- 集成含地图信息和车辆坐标的数据作为知识库

**创新点：**
- 显著提升ADS缺陷检测效率（77.5% vs 27%的场景重建准确率）
- 利用LLM从事故报告中提取环境与路网信息
- 构建具备路径规划能力的LLM模型TraceMate

---

#### 4. Generating OOD
**标题：** Generating Out-Of-Distribution Scenarios Using Language Models  
**链接：** https://arxiv.org/abs/2411.16554  
**作者单位：** 麻省理工学院，马萨诸塞大学阿默斯特分校，丰田研究院

**解决的问题：**
- 分布外（OOD）驾驶场景生成极具挑战性
- OOD场景在长尾分布中的稀疏性
- 需要验证车辆自主系统技术栈中模型的可靠性

**使用的方法：**
- 利用LLMs构建分支树结构，每条分支代表一个独特的OOD场景
- 通过自动化框架在CARLA仿真器中实现场景
- 引入"OOD偏离度"指标量化场景偏离典型城市驾驶条件的程度

**创新点：**
- 首次利用LLMs生成多样化OOD驾驶场景
- 探索现代视觉语言模型在解读OOD场景并实现安全导航方面的能力
- 提供语言模型在解决OOD场景问题中可靠性的见解

---

#### 5. From Dashcam Videos to Driving Simulations
**标题：** From Dashcam Videos to Driving Simulations: Stress Testing Automated Vehicles against Rare Events  
**链接：** https://arxiv.org/abs/2411.16027  
**作者单位：** 丰田北美研究院，伊利诺伊大学厄巴纳-香槟分校

**解决的问题：**
- 将真实世界的驾驶视频转化为仿真场景面临重大挑战
- 高维视频数据解释的复杂性
- 精确手动场景重建的耗时性

**使用的方法：**
- 利用提示工程优化的视频语言模型将行车记录仪视频片段转换为SCENIC脚本
- 这些脚本定义了CARLA仿真器中的环境和驾驶行为
- 引入相似性度量指标比较真实视频与仿真视频之间驾驶行为的关键特征

**创新点：**
- 可在数分钟内完成全自动、无需人工干预的真实到仿真转换
- 保持对原始驾驶事件的高保真度
- 提供天气或道路条件等参数的灵活性以支持基于搜索的测试

---

#### 6. OmniTester
**标题：** Multimodal Large Language Model Driven Scenario Testing for Autonomous Vehicles  
**链接：** https://arxiv.org/abs/2409.06450  
**作者单位：** 清华大学，公安部道路交通安全研究院

**解决的问题：**
- 现有方法难以满足多样化的测试需求
- 普遍缺乏对未知场景的泛化能力
- 生成场景的实用性与可用性不足

**使用的方法：**
- 基于多模态大语言模型的框架
- 集成交通仿真工具SUMO以简化LLM生成的代码复杂度
- 引入检索增强生成（RAG）与自改进机制

**创新点：**
- 在生成三类复杂挑战性场景时具备优异的可控性与真实性
- 依托LLM的泛化能力，成功实现基于事故报告的新场景重建
- 充分利用LLM的世界知识与推理能力

---

### 第二部分：数据集与基准

#### 7. WEDGE
**标题：** WEDGE: A multi-weather autonomous driving dataset built from generative vision-language models  
**链接：** https://arxiv.org/pdf/2305.07528  
**项目主页：** https://infernolia.github.io/WEDGE  
**作者单位：** 卡内基梅隆大学，印度共生国际大学

**解决的问题：**
- 开放道路环境对自动驾驶感知提出诸多挑战
- 极端天气条件导致的低能见度问题
- 在良好天气数据集上训练的模型面对分布外场景时性能显著下降

**使用的方法：**
- 通过提示利用视觉语言生成模型构建合成数据集
- 包含3360张图像，涵盖16种极端天气条件
- 手工标注了16513个边界框，支持天气分类和2D目标检测任务

**创新点：**
- 首个通过生成模型构建的多天气自动驾驶数据集
- 可用于微调最先进的检测器，在真实世界天气基准测试上提升性能
- 遵循OpenAI使用条款，以CC BY-NC-SA 4.0许可协议公开发布

---

#### 8. DriveGenVLM
**标题：** DriveGenVLM: Real-world Video Generation for Vision Language Model based Autonomous Driving  
**链接：** https://ieeexplore.ieee.org/abstract/document/10786438  
**作者单位：** 哥伦比亚大学

**解决的问题：**
- 自动驾驶技术需要更先进的方法来理解和预测现实场景
- 需要生成驾驶视频并利用VLMs进行场景理解

**使用的方法：**
- 采用基于去噪扩散概率模型（DDPM）的视频生成框架
- 通过预训练模型"第一人称视角视频高效上下文学习"（EILEV）评估生成视频
- 基于Waymo开放数据集训练扩散模型

**创新点：**
- 将视频生成与VLMs深度融合
- 为生成视频提供场景描述，增强交通场景理解能力
- 标志着利用先进人工智能模型解决自动驾驶复杂挑战的重大突破

---

### 第三部分：决策与推理

#### 9. CBR-LLM
**标题：** Case-based Reasoning Augmented Large Language Model Framework for Decision Making in Realistic Safety-Critical Driving Scenarios  
**链接：** https://arxiv.org/abs/2506.20531  
**作者单位：** NICT

**解决的问题：**
- 在安全关键场景中驾驶需要快速、具有情境感知的决策
- LLMs在领域适配、情境锚定等方面存在挑战
- 缺乏在动态、高风险环境中做出可靠且可解释决策所需的经验知识

**使用的方法：**
- 基于案例推理增强的大语言模型（CBR-LLM）框架
- 将行车记录仪视频输入中的语义场景理解与相关过往驾驶案例的检索相结合
- 风险感知提示策略进一步提升了在不同风险类型下的性能

**创新点：**
- 提高了决策准确性、推理合理性以及与人类专家行为的一致性
- 基于相似度的案例检索在引导上下文学习方面始终优于随机抽样
- 作为智能驾驶系统中一种自适应且可信的决策支持工具的潜力

---

#### 10. FutureSightDrive
**标题：** FutureSightDrive: Thinking Visually with Spatio-Temporal CoT for Autonomous Driving  
**链接：** https://arxiv.org/abs/2505.17685  
**作者单位：** 阿里巴巴集团高德，西安交通大学，阿里巴巴集团达摩院

**解决的问题：**
- 现有视觉语言模型通常采用针对当前场景的离散文本思维链
- 可能导致时空关系模糊和细粒度信息丢失
- 需要基于真实世界的模拟与想象而非纯粹的符号逻辑

**使用的方法：**
- 时空思维链推理方法，使模型能够进行视觉化思考
- 视觉语言模型作为世界模型生成统一图像帧以预测未来世界状态
- 融合视觉生成与理解的统一预训练范式

**创新点：**
- 推动自动驾驶向视觉推理方向发展
- 使视觉语言模型能够作为逆动力学模型进行轨迹规划
- 渐进式视觉思维链增强自回归图像生成

---

### 第四部分：安全与监控

#### 11. OpenLKA-Alert
**标题：** Bridging Human Oversight and Black-box Driver Assistance: Vision-Language Models for Predictive Alerting in Lane Keeping Assist systems  
**链接：** https://arxiv.org/abs/2505.11535  
**作者单位：** 美国南佛罗里达大学

**解决的问题：**
- 车道保持辅助（LKA）系统在实际应用中常出现不可预测的失效情况
- 不透明的黑箱特性限制了驾驶员的预判能力和信任度
- 需要弥合自动化辅助与有效人类监督之间的差距

**使用的方法：**
- LKAlert系统利用视觉-语言模型提前1-3秒预测潜在的LKA风险
- 处理行车记录仪视频和CAN数据，整合来自并行可解释模型的替代车道分割特征
- 提供简洁的自然语言解释，增强驾驶员的情境感知能力和信任度

**创新点：**
- 首个专为预测性和可解释性LKA失效预警设计的基准数据集OpenLKA-Alert
- 可推广的基于VLM的黑箱行为预测方法框架
- 对即将发生的LKA失效的预测准确率为69.8%，F1分数为58.6%

---

#### 12. OpenLKA
**标题：** OpenLKA: An Open Dataset of Lane Keeping Assist from Recent Car Models under Real-world Driving Conditions  
**链接：** https://arxiv.org/abs/2505.09092  
**项目主页：** https://github.com/OpenLKA  
**作者单位：** 美国南佛罗里达大学

**解决的问题：**
- 车道保持辅助（LKA）的实际性能仍不透明
- 由于专有控制栈导致研究人员无法对这项技术进行诊断或改进
- 需要开放的大规模数据集用于LKA评估和改进

**使用的方法：**
- 包含来自62款量产车型的389.1小时LKA控制数据
- 涵盖多种具有挑战性的场景，包括车道标记退化、复杂道路几何形状、恶劣天气等
- 多模态数据包括解码的车辆内部消息、同步高分辨率视频、丰富场景标注

**创新点：**
- 首个用于LKA评估和改进的开放式大规模数据集
- 提供了全面的平台用于基准测试量产LKA系统的实际性能
- 评估当前道路基础设施对自动驾驶的就绪程度

---

#### 13. Vision Foundation Model
**标题：** Vision Foundation Model Embedding-Based Semantic Anomaly Detection  
**链接：** https://arxiv.org/abs/2505.07998  
**作者单位：** 斯坦福大学，NVIDIA等

**解决的问题：**
- 语义异常是熟悉视觉元素在语境中无效或不寻常的组合
- 可能导致自主系统在系统级推理中出现未定义行为和故障
- 需要利用最先进的视觉基础模型的语义先验知识

**使用的方法：**
- 将运行时图像的局部视觉嵌入与正常场景数据库进行比较
- 考虑基于网格的嵌入和以对象为中心的表示两种变体
- 引入简单的过滤机制来抑制误报

**创新点：**
- 结合过滤的基于实例的方法性能可与GPT-4o媲美
- 能提供精确的异常定位
- 凸显了基础模型的视觉嵌入在自主系统实时异常检测中的潜在效用

---

### 第五部分：端到端系统

#### 14. ORION
**标题：** ORION: A Holistic End-to-End Autonomous Driving Framework by Vision-Language Instructed Action Generation  
**链接：** https://www.arxiv.org/abs/2503.19755  
**项目主页：** https://xiaomi-mlab.github.io/Orion/  
**作者单位：** 华中科技大学，小米汽车

**解决的问题：**
- 端到端自动驾驶方法由于因果推理能力有限，在交互式闭环评估中仍难以做出正确决策
- 语义推理空间与动作空间中纯数值轨迹输出之间存在差距
- 很少有适用于端到端方法的VLMs能在闭环评估中表现良好

**使用的方法：**
- 基于视觉-语言指令动作生成的整体端到端自动驾驶框架
- 融合用于聚合长期历史上下文的QT-Former、用于驾驶场景推理的大语言模型、用于精确轨迹预测的生成式规划器
- 通过对齐推理空间与动作空间，实现视觉问答和规划任务的统一端到端优化

**创新点：**
- 在Bench2Drive挑战数据集上取得了令人瞩目的闭环性能
- 驾驶得分（DS）达77.74，成功率（SR）达54.62%
- 大幅超越了最先进方法，领先14.28个驾驶得分和19.61%的成功率

---

#### 15. DriveLMM-o1
**标题：** DriveLMM-o1: A Step-by-Step Reasoning Dataset and Large Multimodal Model for Driving Scenario Understanding  
**链接：** https://arxiv.org/abs/2503.10621  
**项目主页：** https://github.com/ayesha-ishaq/DriveLMM-o1  
**作者单位：** 穆罕默德・本・扎耶德人工智能大学，澳大利亚国立大学

**解决的问题：**
- 大型多模态模型在某些挑战需要复杂的多步骤推理才能得出准确答案
- 对视觉线索的顺序性和解释性理解对于有效的感知、预测和规划至关重要
- 现有方法缺乏一个全面的框架来评估真实驾驶场景中的逐步推理能力

**使用的方法：**
- 专门为推进自动驾驶领域的逐步视觉推理而设计的新数据集和基准
- 在训练集中包含超过18k个VQA示例，在测试集中包含超过4k个
- 涵盖关于感知、预测和规划的各种问题，每个问题都配有逐步推理过程

**创新点：**
- 模型相较于之前最佳的开源模型，在最终答案准确性上提升了7.49%
- 在推理得分上提升了3.62%
- 为自动驾驶任务中的推理能力提供了系统性的比较

---

#### 16. AutoDrive-QA
**标题：** AutoDrive-QA - Automated Generation of Multiple-Choice Questions for Autonomous Driving Datasets Using Large Vision-Language Models  
**链接：** https://arxiv.org/abs/2503.15778  
**项目主页：** https://github.com/Boshrakh/AutoDrive-QA  
**作者单位：** 哥伦比亚大学

**解决的问题：**
- 开放式问答往往因自由形式的回答需要复杂的评估指标或主观的人工判断而面临评估不可靠的问题
- 需要结构化的评估框架来系统评估感知、预测和规划任务

**使用的方法：**
- 自动流水线可将现有的驾驶问答数据集转换为结构化的多项选择题（MCQ）格式
- 利用大语言模型基于自动驾驶场景中常见的特定领域错误模式生成高质量、与上下文相关的干扰项
- 在三个公开数据集上测试基准，并在一个未见过的数据集上进行了零样本实验

**创新点：**
- 建立了一个严格、无偏的标准用于整合和评估不同视觉语言模型
- 零样本评估显示GPT-4V以69.57%的准确率领先
- 提高了该领域的泛化能力

---

### 第六部分：视觉定位与理解

#### 17. NuGrounding
**标题：** NuGrounding: A Multi-View 3D Visual Grounding Framework in Autonomous Driving  
**链接：** https://arxiv.org/abs/2503.22436  
**作者单位：** 清华大学，华为诺亚方舟实验室，香港大学

**解决的问题：**
- 多视图3D视觉定位对于自动驾驶车辆在复杂环境中理解自然语言并定位目标物体至关重要
- 现有数据集和方法存在语言指令粒度粗糙、3D几何推理与语言理解融合不足等问题

**使用的方法：**
- 首个面向自动驾驶多视图3D视觉定位的大规模基准数据集
- 设计了定位层次结构（HoG）方法来构建数据集
- 将多模态大语言模型的指令理解能力与专业检测模型的精确定位能力无缝结合

**创新点：**
- 显著优于从代表性3D场景理解方法改编而来的基线方法
- 精确率达到0.59，召回率达到0.64，分别提升了50.8%和54.7%
- 引入了两个解耦的任务令牌和一个上下文查询用于聚合3D几何信息和语义指令

---

#### 18. ViLA
**标题：** Evaluating Multimodal Vision-Language Model Prompting Strategies for Visual Question Answering in Road Scene Understanding  
**链接：** https://openaccess.thecvf.com/content/WACV2025W/LLVMAD/html/Keskar_Evaluating_Multimodal_Vision-Language_Model_Prompting_Strategies_for_Visual_Question_Answering_WACVW_2025_paper.html  
**作者单位：** 加州大学默塞德分校

**解决的问题：**
- 理解复杂交通场景是推动自动驾驶系统发展的关键挑战
- 需要从多模态交通数据中提取可操作信息，使车辆做出精准的实时决策
- 需要评估VLMs在交通场景理解方面的能力

**使用的方法：**
- 探索了应用英伟达视觉语言模型（ViLA）解决MAPLM-QA中VQA任务的方法
- 针对数据集设计精细提示工程，系统评估了ViLA的性能
- 涵盖了从基本场景识别到复杂因果推理，以及不同条件下的实时决策

**创新点：**
- 证实了视觉语言模型在增强交通场景分析与自动驾驶能力方面的潜力
- 为未来利用VLM和多模态数据集实现可扩展、鲁棒的交通场景理解奠定了坚实基础
- 明确了技术局限性，为后续研发提供了方向

---

### 第七部分：危险检测与预测

#### 19. INSIGHT
**标题：** INSIGHT: Enhancing Autonomous Driving Safety through Vision-Language Models on Context-Aware Hazard Detection and Edge Case Evaluation  
**链接：** https://www.arxiv.org/abs/2502.00262  
**作者单位：** 美国马里兰大学帕克分校，美国北卡罗来纳州立大学

**解决的问题：**
- 自动驾驶系统在处理不可预测的边缘案例场景时面临重大挑战
- 当前端到端驾驶模型在泛化到罕见事件时表现不佳
- 需要增强危险检测和边缘案例评估能力

**使用的方法：**
- 分层视觉-语言模型（VLM）框架，旨在增强危险检测和边缘案例评估能力
- 通过多模态数据融合，整合语义和视觉表征
- 通过对视觉-语言模型进行监督微调，利用基于注意力的机制和坐标回归技术

**创新点：**
- 与现有模型相比，在危险预测的直观性和准确性方面有显著提升
- 泛化性能也得到了明显改善
- 增强了自动驾驶系统的鲁棒性和安全性

---

#### 20. Scenario Understanding
**标题：** Scenario Understanding of Traffic Scenes Through Large Visual Language Models  
**链接：** https://arxiv.org/pdf/2501.17131  
**作者单位：** 慕尼黑工业大学

**解决的问题：**
- 深度学习模型在自动驾驶领域的高性能依赖于海量数据集
- 由于特定领域的数据分布，这些模型的泛化能力往往受限
- 需要对样本进行有效的基于场景的分类，以提高其在不同领域的可靠性

**使用的方法：**
- 评估了包括GPT-4和LLaVA在内的大型视觉语言模型在内部数据集和BDD100K数据集上对城市交通场景的理解与分类能力
- 提出了一个可扩展的标注管道，整合了最先进的模型
- 通过定量指标与定性分析相结合的方式

**创新点：**
- 证实了大型视觉语言模型在理解城市交通场景方面的有效性
- 凸显了其作为自动驾驶领域数据驱动进展的高效工具的潜力
- 能够灵活部署于新数据集

---

### 第八部分：推理与问答

#### 21. DriveLM
**标题：** DriveLM: Driving with Graph Visual Question Answering  
**链接：** https://arxiv.org/abs/2312.14150  
**项目主页：** https://github.com/OpenDriveLab/DriveLM  
**作者单位：** 上海人工智能实验室，香港大学，图宾根大学

**解决的问题：**
- 如何将基于网络规模数据训练的视觉语言模型集成到端到端驾驶系统中
- 需要增强泛化能力并实现与人类用户的交互
- 人类驾驶员在做决策时会进行多步骤推理

**使用的方法：**
- 图视觉问答（Graph VQA）任务通过感知、预测和规划问答对来建模图结构推理
- 基于nuScenes和CARLA构建了数据集（DriveLM-Data）
- 提出了一种基于VLM的基线方法（DriveLM-Agent）用于联合执行图视觉问答和端到端驾驶

**创新点：**
- 图视觉问答为驾驶场景推理提供了一个简单、有原则的框架
- DriveLM-Data为该任务提供了一个具有挑战性的基准
- 在对未见过的传感器配置进行零样本评估时，其优势尤为明显

---

#### 22. POTGui
**标题：** Enhancing Large Vision Model in Street Scene Semantic Understanding through Leveraging Posterior Optimization Trajectory  
**链接：** https://arxiv.org/abs/2501.01710  
**作者单位：** 香港大学，南方科技大学，中国科学院深圳先进技术研究院

**解决的问题：**
- 为提高自动驾驶感知模型的泛化能力，车辆需要基于持续收集的数据随时间更新模型
- 当拟合的数据量超过AD模型的拟合能力时，模型容易出现欠拟合问题
- 需要减轻车辆在运行LVM主干网络时训练感知头的计算负担

**使用的方法：**
- 采用预训练的大型视觉模型（LVMs）作为主干网络，结合下游感知头
- 引入后验优化轨迹（POT）引导的优化方案（POTGui）以加速收敛
- 设计了POT生成器（POTGen），提前生成后验优化方向

**创新点：**
- 与现有的最先进方法相比，性能提升超过66.48%
- 收敛速度加快6倍以上
- 通常能在10个epoch内收敛

---

### 第九部分：评估与基准

#### 23. VLM综述
**标题：** Are VLMs Ready for Autonomous Driving? An Empirical Study from the Reliability, Data, and Metric Perspectives  
**链接：** https://arxiv.org/abs/2501.04003  
**项目主页：** https://drive-bench.github.io/  
**作者单位：** 加州大学欧文分校，上海人工智能实验室，南洋理工大学S-Lab等

**解决的问题：**
- VLMs是否天生能为驾驶提供基于视觉的、可靠且可解释的解释这一假设在很大程度上尚未得到检验
- 需要评估VLMs在多种设置下的可靠性
- 需要改进的评估指标来优先考虑稳健的视觉接地和多模态理解

**使用的方法：**
- 引入了DriveBench基准数据集，旨在评估VLMs在17种设置下的可靠性
- 涵盖19,200帧、20,498个问答对、三种问题类型、四项主流驾驶任务
- 共12个主流VLMs的评估

**创新点：**
- 发现VLMs往往会基于常识或文本线索生成看似合理的响应，而非真正基于视觉
- 提出了改进的评估指标，优先考虑稳健的视觉接地和多模态理解
- 强调了利用VLMs对损坏的感知来提高其可靠性的潜力

---

#### 24. VisionLLM
**标题：** SFF Rendering-Based Uncertainty Prediction using VisionLLM  
**链接：** https://openreview.net/forum?id=q8ptjh1pDl  
**作者单位：** 韩国延世大学

**解决的问题：**
- 自动驾驶中的不确定性预测问题
- 需要基于VisionLLM的创新框架
- 需要模拟真实驾驶挑战，在BEV中引入遮挡掩膜

**使用的方法：**
- 通过利用CARLA仿真平台采集的驾驶数据，生成与后续驾驶动作及不确定性分值配对的BEV
- 在BEV中引入遮挡掩膜，以表征传感器局限导致的视野盲区
- 采用参数高效微调技术（PEFT）如LoRA对VisionLLM进行微调

**创新点：**
- 在遮挡严重的复杂场景中同步预测后续驾驶动作与不确定性分值
- 显著提升了推理能力
- 为高阶驾驶自动化系统实现更安全可靠的决策机制奠定了技术基础

---

#### 25. CODA-LM
**标题：** Automated Evaluation of Large Vision-Language Models on Self-driving Corner Cases  
**链接：** https://arxiv.org/abs/2404.10595  
**项目主页：** https://coda-dataset.github.io/coda-lm/  
**作者单位：** 香港科技大学，大连理工大学，香港中文大学，华为诺亚方舟实验室

**解决的问题：**
- 现有LVLMs评估主要集中于自然场景下的多方面能力
- 缺乏针对自动驾驶的自动化、可量化评估
- 更不用说对严峻的道路极端场景的评估

**使用的方法：**
- 提出了CODA-LM，这是首个用于自动驾驶极端场景下LVLMs自动评估的基准
- 采用分层数据结构，提示强大的LVLMs分析复杂驾驶场景
- 发现使用纯文本大语言模型作为评判者，与人类偏好的一致性甚至优于LVLM评判者

**创新点：**
- 构建了CODA-VLM——一种新的驾驶LVLM
- 在CODA-LM上的表现超过了所有开源同类模型
- 在区域感知任务上甚至超过GPT-4V达21.42%

---

### 第十部分：其他重要工作

#### 26. Think-Driver
**标题：** Think-Driver: From Driving-Scene Understanding to Decision-Making with Vision Language Models  
**PDF：** https://mllmav.github.io/papers/Think-Driver:%20From%20Driving-Scene%20Understanding%20to%20Decision-Making%20with%20Vision%20Language%20Models.pdf  
**作者单位：** 香港科技大学（广州），约翰斯・霍普金斯大学

**解决的问题：**
- 端到端方法往往如同黑盒般运作，缺乏可解释性
- 目前主流的LLM方案将驾驶输入信息转化为语言描述，但这通常依赖人工设计的提示语
- 视觉语言模型在涉及连续驾驶场景理解与上下文推理的任务中有时表现欠佳

**使用的方法：**
- 提出ThinkDriver模型，利用多视角图像生成理性驾驶决策及推理过程
- 能够评估感知到的交通状况，并对当前驾驶行为的风险进行研判
- 通过闭环实验验证

**创新点：**
- 表现优于其他基于视觉语言模型的基线方案
- 生成的驾驶决策具备可解释性
- 充分证明了该模型的有效性及其在未来应用中的潜力

---

#### 27. LLM-Augmented-MTR
**标题：** Large Language Models Powered Context-aware Motion Prediction in Autonomous Driving  
**链接：** https://arxiv.org/abs/2403.11057  
**项目主页：** https://github.com/AIR-DISCOVER/LLM-Augmented-MTR  
**作者单位：** 清华大学

**解决的问题：**
- 运动预测是自动驾驶中最基础的任务之一
- 传统方法缺乏对整体交通语义的全面理解
- 需要利用大语言模型来增强运动预测任务中的全局交通上下文理解

**使用的方法：**
- 系统的提示词工程，将复杂的交通环境和交通参与者的历史轨迹信息可视化到图像提示
- 将这些信息集成到运动预测模型中
- 提出了一种经济高效的部署策略：使用0.7%的大语言模型增强数据集

**创新点：**
- 证明此类上下文能够提高运动预测的准确性
- 大规模提升运动预测任务的准确性
- 为增强大语言模型对交通场景的理解以及自动驾驶的运动预测性能提供了有价值的见解

---

#### 28. Reason2Drive
**标题：** Reason2Drive: Towards Interpretable and Chain-based Reasoning for Autonomous Driving  
**链接：** https://arxiv.org/abs/2312.03661  
**项目主页：** https://github.com/fudan-zvg/reason2drive  
**作者单位：** 复旦大学、华为诺亚方舟实验室

**解决的问题：**
- 自主系统领域的研究因缺乏带有标注推理链的数据集而受阻
- 需要用于解释驾驶决策过程的数据集
- 需要推动复杂驾驶环境中可解释推理的研究

**使用的方法：**
- 提出了Reason2Drive——一个包含超过60万对视频-文本对的基准数据集
- 将自动驾驶过程明确描述为感知、预测和推理步骤的顺序组合
- 引入了一种新颖的聚合评估指标，用于评估自主系统中基于链的推理性能

**创新点：**
- 解决了现有指标（如BLEU和CIDEr）存在的推理模糊性问题
- 开发了一种高效方法，使VLMs能够在特征提取和预测中利用目标级感知元素
- 可扩展实验表明，Reason2Drive对视觉推理和下游规划任务具有支持作用

---

#### 29. OmniDrive
**标题：** OmniDrive: A Holistic Vision-Language Dataset for Autonomous Driving with Counterfactual Reasoning  
**链接：** https://arxiv.org/abs/2405.01533  
**项目主页：** https://github.com/NVlabs/OmniDrive  
**作者单位：** NVIDIA，香港理工大学，北京理工大学

**解决的问题：**
- 视觉语言模型的进步引发了人们在自动驾驶领域对其强大推理能力的关注
- 需要将这些能力从2D扩展到全面的3D理解
- 需要全面的视觉语言数据集

**使用的方法：**
- 通过反事实推理使智能体模型与3D驾驶任务相匹配
- 基于反事实的合成数据标注过程生成了大规模、高质量的数据集
- 探索了两个先进的OmniDrive-Agent框架，即Omni-L和Omni-Q

**创新点：**
- 提供了更密集的监督信号，连接了规划轨迹与基于语言的推理
- 在DriveLM问答基准和nuScenes开环规划任务上的显著改进
- 揭示了设计高效LLM智能体的关键见解

---

#### 30. LATTE
**标题：** LATTE: A Real-time Lightweight Attention-based Traffic Accident Anticipation Engine  
**链接：** https://arxiv.org/abs/2504.04103  
**作者单位：** 澳门大学

**解决的问题：**
- 准确预测交通事故是自动驾驶领域的一项关键挑战
- 现有解决方案往往存在计算开销大的问题
- 无法充分应对交通场景演化的不确定性

**使用的方法：**
- 融合了计算效率与最先进性能的LATTE引擎
- 采用高效多尺度空间聚合（EMSA）捕捉跨尺度空间特征
- 记忆注意力聚合（MAA）增强时序建模，辅助自注意力聚合（AAA）提取长序列潜在依赖关系

**创新点：**
- 在DAD基准上实现了89.74%的平均精度（AP）
- 平均事故提前时间（mTTA）比第二好的模型高5.4%
- 浮点运算（FLOPs）减少93.14%，参数数量（Params）减少31.58%

---

#### 31. EM-VLM4AD
**标题：** Multi-Frame, Lightweight & Efficient Vision-Language Models for Question Answering in Autonomous Driving  
**链接：** https://arxiv.org/abs/2403.19838  
**项目主页：** https://github.com/akshaygopalkr/EM-VLM4AD/tree/main  
**作者单位：** 加利福尼亚大学圣迭戈分校

**解决的问题：**
- 当前这些系统的实现方案采用了昂贵的大语言模型骨干网络和图像编码器
- 使得这类系统不适用于存在严格内存限制且需要快速推理时间的实时自动驾驶系统
- 需要高效、轻量的多帧视觉-语言模型

**使用的方法：**
- 开发了EM-VLM4AD，这是一种高效、轻量的多帧视觉-语言模型
- 与现有方法相比，所需内存和浮点运算至少减少10倍
- 在DriveLM数据集上的CIDEr和ROUGE评分也高于现有基线

**创新点：**
- 能够从与提示相关的交通视图中提取关键信息
- 能回答各种自动驾驶子任务的相关问题
- 为实时自动驾驶系统提供了可行的解决方案

---

#### 32. Is it safe to cross
**标题：** Is it safe to cross? Interpretable Risk Assessment with GPT-4V for Safety-Aware Street Crossing  
**链接：** https://ieeexplore.ieee.org/stamp/stamp.jsp?arnumber=10597464  
**作者单位：** 马萨诸塞大学阿默斯特分校

**解决的问题：**
- 安全穿越街道交叉口对盲人而言是一项复杂挑战
- 传统的决策辅助方法往往存在局限，无法提供全面的场景分析与安全等级评估
- 需要精细感知周边环境

**使用的方法：**
- 利用视觉语言模型解析复杂的过街场景
- 通过生成自然语言描述的安全评分与场景解析
- 采集了包含四足机器人多视角第一人称图像的斑马线交叉口数据集

**创新点：**
- 较之传统交通信号识别技术具有显著进步
- 可为视障群体提供安全决策支持
- 为开发可信赖决策支持系统提供了关键路径

---

#### 33. NuScenes-MQA
**标题：** NuScenes-MQA: Integrated Evaluation of Captions and QA for Autonomous Driving Datasets using Markup Annotations  
**链接：** https://ieeexplore.ieee.org/abstract/document/10495633  
**数据集：** https://github.com/turingmotors/NuScenes-MQA  
**作者单位：** 图灵

**解决的问题：**
- 视觉问答（VQA）作为自动驾驶领域的关键技术，需实现精准环境识别与复杂场景评估
- 目前尚缺乏基于行车场景构建的问答格式标注数据集
- 此类数据集对保证语言生成精确性与场景识别能力至关重要

**使用的方法：**
- 提出创新性标注技术Markup-QA——通过标记语言封装问答对
- 该框架可同步评估模型在语句生成与视觉问答的双重能力
- 基于此标注方法，构建了NuScenes-MQA数据集

**创新点：**
- 聚焦描述能力与精准问答的双重特性
- 为自动驾驶任务的视觉语言模型开发提供新范本
- 实现了语句生成与视觉问答的集成评估

---

#### 34. LLM Multimodal Traffic Accident Forecasting
**标题：** LLM Multimodal Traffic Accident Forecasting  
**链接：** https://www.mdpi.com/1424-8220/23/22/9225  
**作者单位：** 歌德大学，瓦伦西亚理工大学等

**解决的问题：**
- 随着城市中心交通拥堵日益加剧，交通事故预测对于城市规划和公共安全已变得至关重要
- 需要系统评估现代深度学习方法在预测交通事故方面的效能
- 需要通过可操作的视听提示增强L4/L5级驾驶辅助系统

**使用的方法：**
- 基于详细记录交通事故发生情况的丰富数据集，对比验证了Transformer模型与传统时间序列模型
- 运用主成分分析（PCA）载荷深入探究了特征重要性
- 创新性地提出在自动驾驶中利用轻量级紧凑型大语言模型进行实时干预的思路

**创新点：**
- 阐明了在深度学习和深度概率编程中运用大型多模态模型的优势
- 为构建依托数据驱动决策的更安全、更智能的城市奠定了重要基础
- 提升了自动驾驶系统的实时响应能力

---

#### 35. Talk2BEV
**标题：** Talk2BEV: Language-enhanced Bird's-eye View Maps for Autonomous Driving  
**链接：** https://arxiv.org/abs/2310.02251  
**项目主页：** https://llmbev.github.io/talk2bev/  
**作者单位：** 麻省理工学院，不列颠哥伦比亚大学、塔尔图大学等

**解决的问题：**
- 现有自动驾驶感知系统主要聚焦于预定义（封闭）的对象类别和驾驶场景
- 需要将通用语言和视觉模型的最新进展与BEV结构的地图表示相结合
- 需要单一系统能够应对多种自动驾驶任务

**使用的方法：**
- 将通用语言和视觉模型的最新进展与BEV结构的地图表示相结合
- 无需特定任务模型，使得单一系统能够应对多种自动驾驶任务
- 包括视觉与空间推理、预测交通参与者意图以及基于视觉线索的决策

**创新点：**
- 开发并发布了Talk2BEV-Bench基准，包含1000个人工标注的BEV场景
- 来自NuScenes数据集的20000多个问题和真实标注答案
- 推动了大型视觉-语言模型在自动驾驶场景中的进一步研究

---

#### 36. On the Road with GPT-4V
**标题：** On the Road with GPT-4V(ision): Early Explorations of Visual-Language Model on Autonomous Driving  
**链接：** https://arxiv.org/abs/2311.05332  
**项目主页：** https://github.com/PJLab-ADG/GPT4V-AD-Exploration  
**作者单位：** 上海人工智能实验室、华东师范大学、香港中文大学等

**解决的问题：**
- 自动驾驶技术的追求取决于感知、决策和控制系统的复杂整合
- 无论是数据驱动还是基于规则的传统方法，都因无法把握复杂驾驶环境的细微差别而受阻
- 需要实现完全自动驾驶所需的常识推理和精细场景理解

**使用的方法：**
- 对最先进的VLM——GPT-4V（视觉版）及其在自动驾驶场景中的应用进行了全面评估
- 探究了该模型理解和推理驾驶场景、做出决策并最终以驾驶员身份采取行动的能力
- 综合测试涵盖了从基本场景识别到复杂因果推理，以及不同条件下的实时决策

**创新点：**
- 与现有自动驾驶系统相比，GPT-4V在场景理解和因果推理方面表现更优
- 展示出处理分布外场景、识别意图以及在真实驾驶环境中做出明智决策的潜力
- 明确了技术局限性，为后续研发提供了方向

---

#### 37. OpenAnnotate3D
**标题：** OpenAnnotate3D: Open-Vocabulary Auto-Labeling System for Multi-modal 3D Data  
**链接：** https://arxiv.org/abs/2310.13398  
**项目主页：** https://github.com/Fudan-ProjectTitan/OpenAnnotate3D  
**作者单位：** 复旦大学，多伦多大学

**解决的问题：**
- 在大数据和大模型时代，多模态数据的自动标注功能对于现实世界中人工智能驱动的应用具有重要意义
- 与传统的闭集标注不同，开放词汇标注是实现人类级认知能力的关键
- 针对多模态3D数据的开放词汇自动标注系统较少

**使用的方法：**
- 开源的开放词汇自动标注系统，能够为视觉和点云数据自动生成2D掩码、3D掩码和3D边界框标注
- 整合了大语言模型的思维链能力和视觉-语言模型的跨模态能力
- 在公共数据集和内部真实世界数据集上进行了全面评估

**创新点：**
- 据我们所知，OpenAnnotate3D是开放词汇多模态3D自动标注领域的开创性工作之一
- 与人工标注相比，该系统显著提高了标注效率
- 同时提供了准确的开放词汇自动标注结果

---

#### 38. Unsupervised 3D Perception
**标题：** Unsupervised 3D Perception with 2D Vision-Language Distillation for Autonomous Driving  
**链接：** https://arxiv.org/abs/2309.14491  
**作者单位：** WaymoLLC

**解决的问题：**
- 闭集3D感知模型仅在预定义的物体类别集上训练，对于自动驾驶等安全关键应用而言可能存在不足
- 部署后可能会遇到新的物体类型
- 需要开放集类别的模型

**使用的方法：**
- 多模态自动标注流程，能够生成无模态3D边界框和轨迹片段
- 利用点云序列中固有的运动线索，结合可免费获取的2D图像-文本对
- 识别和跟踪所有交通参与者

**创新点：**
- 与领域近期的研究相比，能够以无监督方式处理静态和动态物体
- 由于所提出的视觉-语言知识蒸馏，能够输出开放词汇语义标签
- 在Waymo开放数据集上的实验表明，在各种无监督3D感知任务上显著优于先前的工作

---

## 总结与趋势分析

### 主要研究方向

1. **场景生成与测试**：利用VLM从事故报告、视频等生成测试场景
2. **数据集与基准**：构建专门针对自动驾驶的VLM数据集和评估基准
3. **决策与推理**：基于VLM的驾驶决策和推理系统
4. **安全与监控**：VLM在安全监控和预警方面的应用
5. **端到端系统**：完整的VLM驱动的自动驾驶系统
6. **视觉定位与理解**：3D视觉定位和场景理解
7. **危险检测与预测**：基于VLM的危险场景检测和预测
8. **推理与问答**：驾驶场景的问答和推理能力
9. **评估与基准**：VLM在自动驾驶领域的评估方法和基准
10. **其他应用**：包括事故预测、无障碍驾驶等特殊应用

### 技术趋势

1. **多模态融合**：结合视觉、语言、3D点云等多种模态
2. **实时性优化**：轻量化模型以满足实时性要求
3. **可解释性**：提供决策过程的解释和推理链
4. **鲁棒性**：处理极端天气、遮挡等复杂场景
5. **端到端**：从感知到决策的完整系统
6. **安全性**：重点关注安全关键场景的处理

### 挑战与机遇

**主要挑战：**
- 实时性要求与模型复杂度的平衡
- 在极端场景下的鲁棒性
- 可解释性与性能的权衡
- 数据质量和标注的挑战

**发展机遇：**
- VLM技术的快速发展为自动驾驶带来新的可能性
- 多模态融合提供了更丰富的感知能力
- 可解释性有助于提高用户信任度
- 端到端系统简化了传统模块化方法的复杂性

### 未来展望

视觉语言模型在自动驾驶领域的应用正处于快速发展阶段，从单一任务到端到端系统，从基础研究到实际部署，都显示出巨大的潜力。随着技术的不断进步，VLM有望成为下一代自动驾驶系统的核心技术之一，为更安全、更智能的自动驾驶提供强有力的支撑。
