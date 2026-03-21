window.siteDataZh = {
  ui: {
    locale: "zh-CN",
    pageTitle: "学术主页",
    toggleLabel: "EN",
    toggleAriaLabel: "切换到英文",
    nav: {
      about: "关于",
      news: "动态",
      projects: "项目",
      education: "教育",
      experience: "经历",
      awards: "奖项"
    },
    sectionHeadings: {
      about: "🐾 关于我",
      news: "🎉 最新动态",
      projects: "🎯 代表项目",
      education: "🎓 教育背景",
      experience: "👜 个人经历",
      awards: "🏆 荣誉奖项"
    },
    lightboxAriaLabel: "奖项图片预览",
    lightboxCloseAriaLabel: "关闭图片预览",
    lightboxOpenPrefix: "查看大图："
  },

  profile: {
    avatar: "./assets/avatar.jpg",
    navAvatar: "./assets/nav.jpg",
    navName: "日安，法厄同大人",
    nameCn: "陈瑾 | Jin Chen",
    college: "西南财经大学 · 人工智能",
    tagline:
      "西南财经大学人工智能本科生，关注大语言模型、智能体、算法与实用 AI 系统。",
    links: [
      { name: "邮箱", url: "mailto:Jord8061@foxmail.com", icon: "email" },
      { name: "GitHub", url: "https://github.com/Jord8061", icon: "github" },
      { name: "OpenReview", url: "https://openreview.net/profile?id=%7EJin_Chen12", icon: "openreview" },
      { name: "ORCID", url: "https://orcid.org/0009-0009-3425-8118", icon: "orcid" }
    ]
  },

  about: [
    "我目前就读于西南财经大学人工智能专业，研究兴趣包括大语言模型、智能体与 LLM 系统。",
    "我的背景覆盖算法竞赛、全栈开发与 AI 应用工程。相比单纯实现功能，我更关注研究思路与工程落地之间的连接。",
    "近期工作主要围绕 LLM 系统中的安全与效率问题，尤其关注 RAG、GraphRAG 与 Agent Memory 场景，并与香港理工大学 DEEP Lab 持续合作。"
  ],

  news: [
    { date: "2026.01", text: "入职泰康在线前端实习，所在团队正持续推进 AI 融合方向。" },
    { date: "2026.01", text: "完成 LogicPoison（ACL 2026 投稿）核心实验与方法迭代，聚焦 GraphRAG 攻击问题。" },
    {
      date: "2025.10",
      text: "作为学生代表在 2025 CCPC 女生赛开幕式发言，并获得银奖。",
      url: "https://it.swufe.edu.cn/info/1167/20588.htm",
      linkText: "学院新闻"
    },
    {
      date: "2025.06",
      text: "成为西南财经大学计算机与人工智能学院奇点工作室学生总负责人。",
      url: "https://it.swufe.edu.cn/info/1166/19548.htm",
      linkText: "学院新闻"
    }
  ],

  projects: [
    {
      title: "LogicPoison：面向 GraphRAG 的逻辑攻击研究",
      meta: "共同一作 | ACL 2026 投稿",
      description:
        "该项目研究 GraphRAG 系统中的对抗攻击问题。我负责实验流水线搭建，并在方法改进与实验设计中做出主要贡献。工作关注在文本层面保持隐蔽的同时，如何破坏推理链路。代码计划在评审结束后开源。",
      tags: ["GraphRAG", "安全", "LLM", "ACL 投稿"],
      links: [
        { name: "论文", url: "#" }
      ]
    },
    {
      title: "自动化数据处理与大模型微调 AI-Agent 系统",
      meta: "全栈开发 | 2024.12 - 2025.06",
      description:
        "搭建了集文档处理、数据清洗、RAG 流程接入与模型任务执行于一体的系统。我主要负责前端架构与核心模块开发，并参与后端流水线整合、实时任务监控与 Docker 部署。项目进入花旗杯全国总决赛并获全国三等奖（Top 20）。",
      tags: ["Vue3", "Node.js", "FastAPI", "RAG", "AI Agent"],
      links: [
        { name: "代码", url: "#" }
      ]
    }
  ],

  education: [
    {
      title: "西南财经大学",
      meta: "人工智能 本科 | 2022.09 - 2026.06",
      image: "./assets/swufelogo.png",
      description:
        "关注方向：大语言模型、智能体、算法、AI 应用与系统构建。"
    },
    {
      title: "华中师范大学第一附属中学",
      meta: "高中 | 2019.09 - 2022.06",
      image: "./assets/华师一校徽.jpg",
      description:
        "高中阶段通过课外研究项目探索了 3D 打印（增材制造）与天文学方向，并参与了小组关于小行星 2021 GB68 的发现工作。"
    }
  ],

  experience: [
    {
      title: "泰康在线财产保险股份有限公司",
      meta: "前端开发实习生 | 2026.01 - 至今",
      description:
        "目前在泰康在线从事前端开发，团队正积极探索 AI 融合场景。基于 AI 与工程复合背景，在前端工作的基础上，进一步参与 AI 系统建设与协作。"
    },
    {
      title: "西南财经大学中国行为经济与行为金融研究中心",
      meta: "RAG 项目爬虫工程师 | 2025.02 - 2025.06",
      description:
        "负责面向学术文献知识库的 RAG 数据采集流程，设计多源爬虫与结构化解析清洗，并使用 LLM 判断筛选行为经济学主题论文 4000+ 篇。"
    },
    {
      title: "西南财经大学计算机与人工智能学院奇点工作室",
      meta: "学生总负责人 | 2025.06 - 至今",
      description:
        "负责工作室整体运营，包括训练体系建设、比赛组织、队员选拔及校内奇点杯等活动统筹。"
    },
    {
      title: "西南财经大学计算机与人工智能学院奇点工作室",
      meta: "程序设计部部长 | 2023.12 - 2025.06",
      description:
        "主要负责算法训练、周赛组织、题目命制与成员培养，并参与线上训练平台维护及 ACM/ICPC 训练流程建设。"
    }
  ],

  awards: [
    {
      title: "国际大学生程序设计大赛亚洲区域赛（西安）",
      date: "2025.10",
      description: "铜奖 | 2025.10",
      image: "./assets/ICPC Asia Xi'an Regional Contest_01.png"
    },
    {
      title: "中国大学生程序设计竞赛女生专场",
      date: "2025.10",
      description: "银奖 | 2025.10",
      image: "./assets/China Collegiate Programming Contest for Girls.jpg"
    },
    {
      title: "第二十届“花旗杯”金融创新应用大赛",
      date: "2025.06",
      description: "全国三等奖 | 2025.06",
      image: "./assets/Citi Cup Financial Innovation Application Competition_01.png"
    },
    {
      title: "全国大学生数学建模竞赛",
      date: "2024.09",
      description: "四川省一等奖 | 2024.09",
      image: "./assets/Mathematical Contest in Modeling.png"
    },
    {
      title: "中国大学生程序设计竞赛广西省赛",
      date: "2024.05",
      description: "金奖 | 2024.05",
      image: "./assets/CCPC Guangxi Collegiate Programming Contest.jpg"
    },
    {
      title: "CCCC-GPLT团体程序设计天梯赛",
      date: "2024.04",
      description: "全国个人三等奖 | 2024.04",
      image: "./assets/Chinese Collegiate Computing Contest GPLT.png"
    },
    {
      title: "蓝桥杯Python程序设计大学A组",
      date: "2024.04",
      description: "四川省一等奖 | 2024.04",
      image: "./assets/Lanqiao Cup (Python A Group).jpg"
    }
  ]
};
