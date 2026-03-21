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
    avatar: "./assets/avatar.jpg",
    navAvatar: "./assets/nav.jpg",
    navName: "Good day, Lord Phaethon",
    nameCn: "Jin Chen | 陈瑾",
    college: "Artificial Intelligence · SWUFE",
    tagline:
      "AI undergraduate at SWUFE, interested in LLMs, agents, algorithms, and practical AI systems.",
    links: [
      { name: "Email", url: "mailto:Jord8061@foxmail.com", icon: "email" },
      { name: "GitHub", url: "https://github.com/Jord8061", icon: "github" },
      { name: "OpenReview", url: "https://openreview.net/profile?id=%7EJin_Chen12", icon: "openreview" },
      { name: "ORCID", url: "https://orcid.org/0009-0009-3425-8118", icon: "orcid" }
    ]
  },

  about: [
    "I am an undergraduate student in Artificial Intelligence at Southwestern University of Finance and Economics (SWUFE). My research interests include large language models, intelligent agents, and LLM-based systems.",
    "My background spans competitive programming, full-stack development, and AI application engineering. I enjoy connecting research ideas with solid implementation, especially in scenarios where system design, reasoning ability, and engineering reliability all matter.",
    "My recent work focuses on security and efficiency issues in LLM-based systems, particularly in RAG, GraphRAG, and agent memory settings. I pursue this line of research through ongoing collaboration with DEEP Lab."
  ],

  news: [
    { date: "2026.01", text: "Started my front-end internship at Tk.cn Insurance CO.,LTD., in a team actively moving toward AI integration." },
    { date: "2026.01", text: "Completed major experimental work and method refinement for LogicPoison, our ACL 2026 submission on attacks against GraphRAG systems." },
    {
      date: "2025.10",
      text: "Delivered a speech as the student representative at the opening ceremony of the 2025 CCPC Girls Contest and won the Silver Medal.",
      url: "https://it.swufe.edu.cn/info/1167/20588.htm",
      linkText: "Official News"
    },
    {
      date: "2025.06",
      text: "Became the Student General Head of Singularity Lab, School of Computing and Artificial Intelligence, SWUFE.",
      url: "https://it.swufe.edu.cn/info/1166/19548.htm",
      linkText: "Official News"
    }
  ],

  projects: [
    {
      title: "LogicPoison: Logical Attacks on Graph Retrieval-Augmented Generation",
      meta: "Co-first Author | ACL 2026 submission",
      description:
        "A research project on adversarial attacks against GraphRAG systems. As a co-first author, I was responsible for the full experimental pipeline and made major contributions to method refinement and experimental design. The work studies how logical corruption can compromise GraphRAG reasoning while remaining stealthy at the text level. Code will be released after the review decision.",
      tags: ["GraphRAG", "Security", "LLM", "ACL Submission"],
      links: [
        { name: "Paper", url: "#" }
      ]
    },
    {
      title: "AI-Agent System for Automated Data Processing and LLM Fine-tuning",
      meta: "Full-stack Developer | 2024.12 - 2025.06",
      description:
        "Built an end-to-end system for automated document processing, data cleaning, RAG workflow integration, and model-related task execution. I was mainly responsible for the front-end architecture and core module development, while also participating in backend pipeline integration, real-time task monitoring, and Docker-based deployment. The project reached the national finals of the Citi Cup and won a National Third Prize (Top 20).",
      tags: ["Vue3", "Node.js", "FastAPI", "RAG", "AI Agent"],
      links: [
        { name: "Code", url: "#" }
      ]
    }
  ],

  education: [
    {
      title: "Southwestern University of Finance and Economics",
      meta: "B.Eng. in Artificial Intelligence | 2022.09 - 2026.06",
      image: "./assets/swufelogo.png",
      description:
        "Relevant interests: LLMs, intelligent agents, algorithms, AI applications, and system building."
    },
    {
      title: "The No.1 Middle School Affiliated To Central China Normal University",
      meta: "Senior High School | 2019.09 - 2022.06",
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
      title: "China Center for Behavioral Economics and Finance, SWUFE",
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
      title: "ICPC Asia Xi'an Regional Contest",
      date: "2025.10",
      description: "Bronze Medal | 2025.10",
      image: "./assets/ICPC Asia Xi'an Regional Contest_01.png",
      thumb: "./assets/thumbs/ICPC Asia Xi'an Regional Contest_01-thumb.jpg"
    },
    {
      title: "China Collegiate Programming Contest for Girls",
      date: "2025.10",
      description: "Silver Medal | 2025.10",
      image: "./assets/China Collegiate Programming Contest for Girls.jpg",
      thumb: "./assets/thumbs/China Collegiate Programming Contest for Girls-thumb.jpg"
    },
    {
      title: "Citi Cup Financial Innovation Application Competition",
      date: "2025.06",
      description: "National Third Prize | 2025.06",
      image: "./assets/Citi Cup Financial Innovation Application Competition_01.png",
      thumb: "./assets/thumbs/Citi Cup Financial Innovation Application Competition_01-thumb.jpg"
    },
    {
      title: "National College Mathematical Contest in Modeling",
      date: "2024.09",
      description: "Sichuan First Prize | 2024.09",
      image: "./assets/Mathematical Contest in Modeling.png",
      thumb: "./assets/thumbs/Mathematical Contest in Modeling-thumb.jpg"
    },
    {
      title: "CCPC Guangxi Collegiate Programming Contest",
      date: "2024.05",
      description: "Gold Medal | 2024.05",
      image: "./assets/CCPC Guangxi Collegiate Programming Contest.jpg",
      thumb: "./assets/thumbs/CCPC Guangxi Collegiate Programming Contest-thumb.jpg"
    },
    {
      title: "Chinese Collegiate Computing Contest (GPLT)",
      date: "2024.04",
      description: "National Individual Third Prize | 2024.04",
      image: "./assets/Chinese Collegiate Computing Contest GPLT.png",
      thumb: "./assets/thumbs/Chinese Collegiate Computing Contest GPLT-thumb.jpg"
    },
    {
      title: "Lanqiao Cup (Python A Group)",
      date: "2024.04",
      description: "Sichuan First Prize | 2024.04",
      image: "./assets/Lanqiao Cup (Python A Group).jpg",
      thumb: "./assets/thumbs/Lanqiao Cup (Python A Group)-thumb.jpg"
    }
  ]
};
