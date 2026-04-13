window.siteDataZh = {
  ui: {
    locale: "zh-CN",
    pageTitle: "学术主页",
    toggleLabel: "EN",
    toggleAriaLabel: "切换到英文",
    nav: {
      about: "关于",
      news: "动态",
      projects: "论文",
      education: "教育",
      experience: "经历",
      awards: "奖项"
    },
    sectionHeadings: {
      about: "🐾 关于我",
      news: "🎉 最新动态",
      projects: "📄 论文发表",
      education: "🎓 教育背景",
      experience: "👜 个人经历",
      awards: "🏆 荣誉奖项"
    },
    lightboxAriaLabel: "奖项图片预览",
    lightboxCloseAriaLabel: "关闭图片预览",
    lightboxOpenPrefix: "查看大图："
  },

  profile: {
    avatar: "./assets/avatar-512.jpg",
    navAvatar: "./assets/album-64.jpg",
    navName: "Welcome to my world ♪",
    nameCn: "陈瑾 | Jin Chen",
    college: "西南财经大学 · 人工智能",
    tagline:
      "从算法竞赛到大语言模型系统与AI安全",
    links: [
      { name: "邮箱", url: "mailto:Jord8061@foxmail.com", icon: "email" },
      { name: "CV", url: "./assets/CHEN_Jin_CV.pdf", icon: "cv" },
      { name: "GitHub", url: "https://github.com/Jord8061", icon: "github" },
      { name: "谷歌学术", url: "https://scholar.google.com/citations?user=8yJ3MZEAAAAJ", icon: "scholar" }
    ]
  },

  about: [
    "我目前就读于西南财经大学人工智能专业，研究兴趣主要集中在 LLM 系统与 AI 系统安全，尤其关注推理、检索与系统可靠性交叉问题。",
    "我的背景起点是算法竞赛，也长期参与系统实现与工程落地。这让我对那些同时要求安全性、鲁棒性与可复现实现的问题尤其感兴趣。",
    "近期工作主要围绕 LLM 系统中的安全问题展开，关注 GraphRAG 与 Agent Memory 场景，并与香港理工大学 X Lab 持续合作。"
  ],

  news: [
    { 
      date: "2026.04", 
      text: "LogicPoison 论文（共一）被 ACL 2026 主会 录用。", 
      url: "https://it.swufe.edu.cn/info/1167/21488.htm",
      linkText: "✨ 学院新闻"
    },
    { date: "2026.01", text: "入职泰康在线前端实习，所在团队正持续推进 AI 融合方向。" },
    {
      date: "2025.10",
      text: "作为学生代表在 2025 CCPC 女生赛开幕式发言，并获得银奖。",
      url: "https://it.swufe.edu.cn/info/1167/20588.htm",
      linkText: "✨ 学院新闻"
    },
    {
      date: "2025.06",
      text: "成为西南财经大学计算机与人工智能学院奇点工作室学生负责人。",
      url: "https://it.swufe.edu.cn/info/1166/19548.htm",
      linkText: "✨ 学院新闻"
    }
  ],

  projects: [
    {
      title: "LogicPoison：面向 GraphRAG 的逻辑攻击研究",
      meta: "共同一作 | ACL 2026 主会论文",
      image: "./assets/main_figure.png",
      imageAlt: "LogicPoison 论文主图",
      description:
        "该论文研究 GraphRAG 系统中的对抗攻击问题。作为共同一作，我独立完成了完整实验流程，并在方法改进与实验设计中做出主要贡献。工作已被 ACL 2026 Main Conference 录用，论文、代码与数据均已公开。",
      tags: ["GraphRAG", "安全", "LLM", "ACL 2026 Main"],
      links: [
        { name: "论文", url: "https://arxiv.org/abs/2604.02954" },
        { name: "数据", url: "https://huggingface.co/datasets/Jord8061/datasets" },
        { name: "代码", url: "https://github.com/Jord8061/logicPoison" }
      ]
    }
  ],

  education: [
    {
      title: "西南财经大学",
      meta: "人工智能 本科 | 2022.09 - 2026.06",
      image: "./assets/swufelogo.png",
      description:
        "GPA: 3.4/5.0 · 平均分: 85.40/100 · 排名: 2/26\n关注方向：大语言模型、智能体、算法、AI 应用与系统构建。",
      descriptionTip:
        "参照{{link}}中的综合测评办法，综合测评成绩由学业成绩和综合能力加分构成，并按专业综合成绩进行排序。",
      descriptionTipLinkText: "《西南财经大学计算机与人工智能学院推荐免试研究生工作实施细则》",
      descriptionTipLinkUrl: "https://it.swufe.edu.cn/info/1166/1724.htm",
      descriptionTipMarker: "i"
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
      meta: "前端开发实习生 | 2026.01 - 2026.04",
      description:
        "目前在泰康在线从事前端开发，团队正积极探索 AI 融合场景。基于 AI 与工程复合背景，在前端工作的基础上，进一步参与 AI 系统建设与协作。"
    },
    {
      title: "中国行为经济与行为金融研究中心",
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
      title: "第50届国际大学生程序设计竞赛亚洲区域赛（西安）",
      date: "2025.10",
      description: "🥉 铜奖 | 2025.10",
      images: [
        {
          image: "./assets/full/ICPC Asia Xi'an Regional Contest_01-full.jpg",
          thumb: "./assets/thumbs/ICPC Asia Xi'an Regional Contest_01-thumb.jpg",
          alt: "ICPC亚洲区域赛（西安）铜奖证书"
        },
        {
          image: "./assets/full/ICPC西安铜奖-full.jpg",
          thumb: "./assets/thumbs/ICPC西安铜奖-thumb.jpg",
          alt: "ICPC西安区域赛铜奖照片"
        }
      ]
    },
    {
      title: "2025年中国大学生程序设计竞赛（女生专场）",
      date: "2025.10",
      description: "🥈 银奖 | 2025.10",
      images: [
        {
          image: "./assets/China Collegiate Programming Contest for Girls.jpg",
          thumb: "./assets/thumbs/China Collegiate Programming Contest for Girls-thumb.jpg",
          alt: "CCPC女生专场银奖证书"
        },
        {
          image: "./assets/full/CCPC女生赛银奖-full.jpg",
          thumb: "./assets/thumbs/CCPC女生赛银奖-thumb.jpg",
          alt: "CCPC女生赛银奖照片"
        }
      ]
    },
    {
      title: "第二十届“花旗杯”金融创新应用大赛",
      date: "2025.06",
      description: "全国三等奖 | 2025.06",
      image: "./assets/full/Citi Cup Financial Innovation Application Competition_01-full.jpg",
      thumb: "./assets/thumbs/Citi Cup Financial Innovation Application Competition_01-thumb.jpg"
    },
    {
      title: "全国大学生数学建模竞赛",
      date: "2024.09",
      description: "四川省一等奖 | 2024.09",
      image: "./assets/full/Mathematical Contest in Modeling-full.jpg",
      thumb: "./assets/thumbs/Mathematical Contest in Modeling-thumb.jpg"
    },
    {
      title: "2023-2024学年西南财经大学“三好学生”",
      date: "2024.09",
      description: "三好学生 | 2024.09",
      image: "./assets/full/三好学生202409-full.jpg",
      thumb: "./assets/thumbs/三好学生202409-thumb.jpg",
      alt: "三好学生荣誉证书"
    },
    {
      title: "2023-2024学年第一学期丙等奖学金",
      date: "2024.06",
      description: "丙等奖学金 | 2024.06",
      image: "./assets/丙等奖学金202406.jpg",
      thumb: "./assets/thumbs/丙等奖学金202406-thumb.jpg",
      alt: "丙等奖学金证书"
    },
    {
      title: "2023-2024学年第一学期“文体活动奖学金”",
      date: "2024.05",
      description: "文体活动奖学金 | 2024.05",
      image: "./assets/文体活动奖学金202405.jpg",
      thumb: "./assets/thumbs/文体活动奖学金202405-thumb.jpg",
      alt: "文体活动奖学金证书"
    },
    {
      title: "第七届广西大学生程序设计大赛暨2024中国-东盟国际大学生程序设计大赛",
      pinPosition: 3,
      date: "2024.05",
      description: "🥇 金奖 | 2024.05",
      images: [
        {
          image: "./assets/full/CCPC Guangxi Collegiate Programming Contest-full.jpg",
          thumb: "./assets/thumbs/CCPC Guangxi Collegiate Programming Contest-thumb.jpg",
          alt: "中国大学生程序设计竞赛广西省赛获奖证书"
        },
        {
          image: "./assets/full/中国-东盟国际大学生程序设计大赛-full.jpg",
          thumb: "./assets/thumbs/中国-东盟国际大学生程序设计大赛-thumb.jpg",
          alt: "中国-东盟国际大学生程序设计大赛照片"
        }
      ]
    },
    {
      title: "四川省第十届大学生艺术展演活动",
      date: "2023.08",
      description: "二等奖 | 2023.08",
      image: "./assets/大艺展省二等奖202308.jpg",
      thumb: "./assets/thumbs/大艺展省二等奖202308-thumb.jpg",
      alt: "大艺展省二等奖证书"
    },
    {
      title: "CCCC-GPLT团体程序设计天梯赛",
      date: "2024.04",
      description: "全国个人三等奖 | 2024.04",
      image: "./assets/full/Chinese Collegiate Computing Contest GPLT-full.jpg",
      thumb: "./assets/thumbs/Chinese Collegiate Computing Contest GPLT-thumb.jpg"
    },
    {
      title: "蓝桥杯Python程序设计大学A组",
      date: "2024.04",
      description: "四川省一等奖 | 2024.04",
      image: "./assets/full/Lanqiao Cup (Python A Group)-full.jpg",
      thumb: "./assets/thumbs/Lanqiao Cup (Python A Group)-thumb.jpg"
    }
  ],

  footer: "© 2026 Jord. All rights reserved. Last updated: 2026.04."
};
