window.siteDataEn = {
  ui: {
    locale: "en",
    pageTitle: "Academic Homepage",
    toggleLabel: "中文",
    toggleAriaLabel: "Switch to Chinese",
    nav: {
      about: "About",
      news: "News",
      projects: "Projects",
      education: "Education",
      experience: "Experience",
      awards: "Awards"
    },
    sectionHeadings: {
      about: "🐾 About Me",
      news: "🎉 News",
      projects: "🎯 Selected Projects",
      education: "🎓 Education",
      experience: "👜 Experience",
      awards: "🏆 Honors & Awards"
    },
    lightboxAriaLabel: "Award image preview",
    lightboxCloseAriaLabel: "Close image preview",
    lightboxOpenPrefix: "View full image: "
  },

  profile: {
    avatar: "./assets/avatar-512.jpg",
    navAvatar: "./assets/album-64.jpg",
    navName: "Welcome to my world ♪",
    nameCn: "Jin Chen | 陈瑾",
    college: "B.Eng. in AI · SWUFE",
    tagline:
      "From competitive programming to LLM systems and AI security",
    links: [
      { name: "Email", url: "mailto:Jord8061@foxmail.com", icon: "email" },
      { name: "GitHub", url: "https://github.com/Jord8061", icon: "github" },
      { name: "CSDN", url: "https://blog.csdn.net/2201_76033853", icon: "csdn" },
      { name: "OpenReview", url: "https://openreview.net/profile?id=%7EJin_Chen12", icon: "openreview" },
      // { name: "ORCID", url: "https://orcid.org/0009-0009-3425-8118", icon: "orcid" }
    ]
  },

  about: [
    "I am an undergraduate student in Artificial Intelligence at Southwestern University of Finance and Economics (SWUFE). My research interests lie in LLM-based systems and AI systems security, especially at the intersection of reasoning, retrieval, and system reliability.",
    "My background spans competitive programming and system-oriented engineering, which shaped my interest in building research ideas into solid, reproducible systems. I am particularly drawn to problems where security, robustness, and implementation all matter.",
    "Recently, my work has focused on security issues in LLM-based systems, especially in GraphRAG and agent memory settings. I am currently pursuing this line of research through ongoing collaboration with DEEP Lab."
  ],

  news: [
    { date: "2026.01", text: "Started my front-end internship at Tk.cn Insurance CO.,LTD., in a team actively moving toward AI integration." },
    { date: "2026.01", text: "Independently carried out the full experimental pipeline for LogicPoison, our ACL 2026 submission on attacks against GraphRAG systems, while also contributing to method refinement." },
    {
      date: "2025.10",
      text: "Delivered a speech as the student representative at the opening ceremony of the 2025 CCPC Girls Contest and won the Silver Medal.",
      url: "https://it.swufe.edu.cn/info/1167/20588.htm",
      linkText: "✨ Official News"
    },
    {
      date: "2025.06",
      text: "Became the Student Head of Singularity Lab, School of Computing and Artificial Intelligence, SWUFE.",
      url: "https://it.swufe.edu.cn/info/1166/19548.htm",
      linkText: "✨ Official News"
    }
  ],

  projects: [
    {
      title: "LogicPoison: Logical Attacks on Graph Retrieval-Augmented Generation",
      meta: "Co-first Author | ACL 2026 submission",
      description:
        "A research project on adversarial attacks against GraphRAG systems. As a co-first author, I independently carried out the full experimental pipeline and contributed substantially to method refinement and experimental design. The work studies how logical corruption can compromise GraphRAG reasoning while remaining stealthy at the text level. Code will be released after the review decision.",
      tags: ["GraphRAG", "Security", "LLM", "ACL Submission"],
      links: [
        { name: "Paper", url: "https://openreview.net/forum?id=u5cSIeXVtK" },
        { name: "Code", url: "https://github.com/Jord8061/logicPoison" },
        { name: "Data", url: "https://huggingface.co/datasets/Jord8061/logicPoison" }
      ]
    },
    {
      title: "AI-Agent System for Automated Data Processing and LLM Fine-tuning",
      meta: "Full-stack Developer | 2024.12 - 2025.06",
      description:
        "Built an end-to-end system for automated document processing, data cleaning, RAG workflow integration, and model-related task execution. I was mainly responsible for the front-end architecture and core module development, while also participating in backend pipeline integration, real-time task monitoring, and Docker-based deployment. The project reached the national finals of the Citi Cup and won a National Third Prize (Top 20).",
      tags: ["Vue3", "Node.js", "FastAPI", "RAG", "AI Agent"],
      // links: [
      //   { name: "Code", url: "#" }
      // ]
    }
  ],

  education: [
    {
      title: "Southwestern University of Finance and Economics",
      meta: "B.Eng. in Artificial Intelligence | 2022.09 - 2026.06",
      image: "./assets/swufelogo.png",
      description:
        "GPA: 3.4/5.0 · Average Score: 85.40/100 · Ranking: 2/26\nRelevant interests: LLMs, intelligent agents, algorithms, AI applications, and system building.",
      descriptionTip:
        "According to the comprehensive evaluation method in {{link}}, the final score is composed of academic performance and bonus points for comprehensive abilities, and is ranked within the major.",
      descriptionTipLinkText: "SWUFE SCAI Implementation Rules for Recommended Admission to Graduate Study",
      descriptionTipLinkUrl: "https://it.swufe.edu.cn/info/1166/1724.htm"
    },
    {
      title: "The No.1 Middle School Affiliated To Central China Normal University",
      meta: "Senior High | 2019.09 - 2022.06",
      image: "./assets/华师一校徽.jpg",
      description:
        "Explored 3D printing and astronomy through extracurricular research projects during high school. I was part of a group that contributed to the discovery of asteroid 2021 GB68."
    }
  ],

  experience: [
    {
      title: "Tk.cn Insurance CO.,LTD.",
      meta: "Front-end Development Intern | 2026.01 - Present",
      description:
        "I am currently a front-end development intern at Taikang Online, where my team is actively exploring AI integration. Given my background in both AI and engineering, I am interested in contributing not only to current front-end development, but also to future AI-related system building and collaboration."
    },
    {
      title: "China Center for Behavioral Economics and Finance",
      meta: "RAG Project Crawling Engineer | 2025.02 - 2025.06",
      description:
        "Built the data acquisition pipeline for a RAG-oriented academic literature knowledge base. I designed multi-source crawlers, handled structured parsing and cleaning, and applied LLM-based judging to identify 4,000+ papers aligned with target topics in behavioral finance."
    },
    {
      title: "Singularity Lab, School of Computing and Artificial Intelligence, SWUFE",
      meta: "Student Head | 2025.06 - Present",
      description:
        "Leading the overall operation of the student technical community, including training system design, contest organization, internal selection, and the coordination of the campus-level Singularity Cup."
    },
    {
      title: "Singularity Lab, School of Computing and Artificial Intelligence, SWUFE",
      meta: "Head of Programming Division | 2023.12 - 2025.06",
      description:
        "Focused on algorithm training, weekly practice organization, internal contest problem setting, and member development. I was also involved in managing online training platforms and helping build the studio's ACM/ICPC training workflow."
    }
  ],

  awards: [
    {
      title: "The 2025 ICPC Asia Xi'an Regional Contest",
      date: "2025.10",
      description: "🥉 Bronze Medal | 2025.10",
      images: [
        {
          image: "./assets/full/ICPC Asia Xi'an Regional Contest_01-full.jpg",
          thumb: "./assets/thumbs/ICPC Asia Xi'an Regional Contest_01-thumb.jpg",
          alt: "ICPC Asia Xi'an Regional Contest bronze medal certificate"
        },
        {
          image: "./assets/full/ICPC西安铜奖-full.jpg",
          thumb: "./assets/thumbs/ICPC西安铜奖-thumb.jpg",
          alt: "ICPC Xi'an Regional Contest bronze medal photo"
        }
      ]
    },
    {
      title: "2025 China Collegiate Programming Contest for Girls",
      date: "2025.10",
      description: "🥈 Silver Medal | 2025.10",
      images: [
        {
          image: "./assets/China Collegiate Programming Contest for Girls.jpg",
          thumb: "./assets/thumbs/China Collegiate Programming Contest for Girls-thumb.jpg",
          alt: "CCPC Girls Contest silver medal certificate"
        },
        {
          image: "./assets/full/CCPC女生赛银奖-full.jpg",
          thumb: "./assets/thumbs/CCPC女生赛银奖-thumb.jpg",
          alt: "CCPC Girls Contest silver medal photo"
        }
      ]
    },
    {
      title: "The 20th Citi Cup Financial Innovation Application Competition",
      date: "2025.06",
      description: "National Third Prize | 2025.06",
      image: "./assets/full/Citi Cup Financial Innovation Application Competition_01-full.jpg",
      thumb: "./assets/thumbs/Citi Cup Financial Innovation Application Competition_01-thumb.jpg"
    },
    {
      title: "National College Mathematical Contest in Modeling",
      date: "2024.09",
      description: "Sichuan First Prize | 2024.09",
      image: "./assets/full/Mathematical Contest in Modeling-full.jpg",
      thumb: "./assets/thumbs/Mathematical Contest in Modeling-thumb.jpg"
    },
    {
      title: "SWUFE Merit Student, 2023-2024 Academic Year",
      date: "2024.09",
      description: "Merit Student | 2024.09",
      image: "./assets/full/三好学生202409-full.jpg",
      thumb: "./assets/thumbs/三好学生202409-thumb.jpg",
      alt: "Merit student honor certificate"
    },
    {
      title: "Third-Class Scholarship (First Semester, 2023-2024 Academic Year)",
      date: "2024.06",
      description: "Third-Class Scholarship | 2024.06",
      image: "./assets/丙等奖学金202406.jpg",
      thumb: "./assets/thumbs/丙等奖学金202406-thumb.jpg",
      alt: "Third-class scholarship certificate"
    },
    {
      title: "Cultural and Sports Activity Scholarship (First Semester, 2023-2024 Academic Year)",
      date: "2024.05",
      description: "Cultural and Sports Activity Scholarship | 2024.05",
      image: "./assets/文体活动奖学金202405.jpg",
      thumb: "./assets/thumbs/文体活动奖学金202405-thumb.jpg",
      alt: "Cultural and sports activity scholarship certificate"
    },
    {
      title: "2024 CCPC - The 7th Guangxi CPC - 2024 ASEAN-ICPC",
      pinPosition: 3,
      date: "2024.05",
      description: "🥇 Gold Medal | 2024.05",
      images: [
        {
          image: "./assets/full/CCPC Guangxi Collegiate Programming Contest-full.jpg",
          thumb: "./assets/thumbs/CCPC Guangxi Collegiate Programming Contest-thumb.jpg",
          alt: "CCPC Guangxi Collegiate Programming Contest certificate"
        },
        {
          image: "./assets/full/中国-东盟国际大学生程序设计大赛-full.jpg",
          thumb: "./assets/thumbs/中国-东盟国际大学生程序设计大赛-thumb.jpg",
          alt: "China-ASEAN International Collegiate Programming Contest photo"
        }
      ]
    },
    {
      title: "The 10th Sichuan Provincial College Student Art Exhibition and Performance Activity",
      date: "2023.08",
      description: "Second Prize | 2023.08",
      image: "./assets/大艺展省二等奖202308.jpg",
      thumb: "./assets/thumbs/大艺展省二等奖202308-thumb.jpg",
      alt: "Provincial second prize certificate in college art exhibition"
    },
    {
      title: "Chinese Collegiate Computing Contest (GPLT)",
      date: "2024.04",
      description: "National Individual Third Prize | 2024.04",
      image: "./assets/full/Chinese Collegiate Computing Contest GPLT-full.jpg",
      thumb: "./assets/thumbs/Chinese Collegiate Computing Contest GPLT-thumb.jpg"
    },
    {
      title: "Lanqiao Cup (Python A Group)",
      date: "2024.04",
      description: "Sichuan First Prize | 2024.04",
      image: "./assets/full/Lanqiao Cup (Python A Group)-full.jpg",
      thumb: "./assets/thumbs/Lanqiao Cup (Python A Group)-thumb.jpg"
    }
  ],

  footer: "© 2026 Jord. All rights reserved. Last updated: 2026.03."
};




