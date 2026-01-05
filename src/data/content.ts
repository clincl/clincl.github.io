// Portfolio Content Data
// This file contains all text content for easy editing and maintenance

export const portfolioContent = {
  // Professional Summary (used in About component)
  summary: {
    title: "👨‍💻 Professional Summary",
    content:
      "I'm a Software Engineer with nearly 4 years of experience at AWS with a background in technical support and full-stack engineering roles.",
  },

  // Core Skills (used in About component)
  skills: {
    title: "🛠️ Core Skills",
    categories: {
      languages: {
        title: "Languages",
        items: ["Java", "TypeScript", "Python"],
      },
      backend: {
        title: "Backend",
        items: ["Spring Boot", "Node.js", "PostgreSQL", "Redis"],
      },
      cloud: {
        title: "Cloud",
        items: ["AWS", "Docker", "Kubernetes"],
      },
    },
  },

  // Experience (used in About component)
  experience: {
    title: "Experience",
    roles: [
      {
        id: "aws-sde",
        title: "AWS System Development Engineer",
        company: "Amazon Web Services",
        period: "May 2024 - Present",
        status: "Current",
        logo: "/aws-logo.svg",
        description:
          "Developing CloudFormation-deployed full-stack applications with React, Node.js, and TypeScript. Leading migration of schemaless DynamoDB tables to S3 using automated conversion and seeding pipelines. Collaborating with cross-functional teams to improve system reliability and performance.",
        achievements: [
          "Led migration of 15+ DynamoDB tables to S3 with automated pipelines",
          "Improved system reliability and performance through cross-functional collaboration",
          "Built full-stack applications with modern React/Node.js/TypeScript stack",
          "Implemented CloudFormation infrastructure as code solutions",
        ],
        technologies: [
          "React",
          "Node.js",
          "TypeScript",
          "CloudFormation",
          "DynamoDB",
          "S3",
        ],
      },
      {
        id: "aws-cse",
        title: "AWS Cloud Support Engineer",
        company: "Amazon Web Services",
        period: "October 2022 - April 2024",
        status: "Previous",
        logo: "/aws-logo.svg",
        description:
          "Specialized in database performance tuning and query optimization for RDS PostgreSQL and Oracle. Built automation tools that reduced manual processes by 70%. Mentored junior engineers and maintained 100% Customer Satisfaction (CSAT) rating.",
        achievements: [
          "Optimized database performance for RDS PostgreSQL and Oracle",
          "Built automation tools reducing manual processes by 70%",
          "Maintained 100% Customer Satisfaction (CSAT) rating",
          "Mentored junior engineers in database troubleshooting",
        ],
        technologies: ["PostgreSQL", "Oracle", "AWS RDS", "Automation Tools"],
      },
      {
        id: "education",
        title: "Computer Science Graduate",
        company: "SUNY University at Buffalo",
        period: "Graduated 2021",
        status: "Education",
        logo: "/ub-logo.svg",
        description: "B.S. Computer Science from SUNY University at Buffalo",
        achievements: [],
        technologies: [],
      },
    ],
  },

  // Projects (used in Projects component)
  projects: {
    title: "🚀 My Projects",
    subtitle:
      "From production-ready applications to innovative concepts - showcasing expertise in real-time systems, AI integration, and scalable architectures",
    items: [
      {
        id: "pantry-chef",
        title: "🍳 Pantry Chef",
        subtitle: "AI-Powered Recipe Generator",
        status: "Production Ready",
        description:
          "Full-stack application that generates personalized recipes based on available ingredients using AI/LLM capabilities.",
        tech: ["Spring Boot", "Next.js", "PostgreSQL", "Redis", "Docker"],
        features: [
          "AI-powered recipe generation",
          "Ingredient-based recommendations",
          "Redis caching for performance",
          "Containerized deployment",
          "RESTful API architecture",
        ],
        links: {
          demo: "#",
          github: "#",
          analysis: "/pantry-chef-tech-analysis.html",
        },
        gradient: "from-emerald-500 to-teal-500",
      },
      {
        id: "bouldering-ai",
        title: "🤖 Bouldering AI Analysis",
        subtitle: "Climbing Technique Analyzer",
        status: "Live Demo",
        description:
          "AI-powered platform for analyzing climbing techniques through video processing and real-time feedback.",
        tech: ["HTML/CSS", "JavaScript", "AI APIs", "Video Processing"],
        features: [
          "Video upload and analysis",
          "Real-time technique feedback",
          "AI-powered movement detection",
          "Progress tracking dashboard",
          "Community feature integration",
        ],
        links: {
          demo: "/bouldering-mock-app.html",
          github: "#",
          analysis: "/bouldering-app-tech-analysis.html",
        },
        gradient: "from-amber-500 to-orange-500",
      },
      {
        id: "anime-recommendation",
        title: "🎌 Anime Recommendation Engine",
        subtitle: "AI-Powered Discovery Platform",
        status: "Live Application",
        description:
          "AI-powered anime discovery platform with real-time community features and personalized recommendations.",
        tech: ["React", "Spring Boot", "WebSockets", "PostgreSQL"],
        features: [
          "AI-powered recommendations",
          "Real-time community features",
          "Personalized user profiles",
          "Live chat and discussions",
          "Advanced search and filtering",
        ],
        links: {
          demo: "/anime-recommendation-demo",
          github: "#",
          analysis: "#",
        },
        gradient: "from-purple-500 to-pink-500",
      },
      {
        id: "ecommerce-platform",
        title: "🛍️ E-commerce Platform",
        subtitle: "Enterprise Shopping Solution",
        status: "Production Deployed",
        description:
          "Enterprise-scale shopping platform with real-time inventory management and advanced analytics.",
        tech: ["Spring Boot", "Apache Kafka", "PostgreSQL", "Redis"],
        features: [
          "Real-time inventory tracking",
          "Advanced analytics dashboard",
          "Multi-tenant architecture",
          "Payment processing integration",
          "Order management system",
        ],
        links: {
          demo: "/ecommerce-platform-demo",
          github: "#",
          analysis: "#",
        },
        gradient: "from-green-500 to-teal-500",
      },
      {
        id: "analytics-dashboard",
        title: "📊 Real-Time Analytics Dashboard",
        subtitle: "Live Data Visualization",
        status: "Live System",
        description:
          "Advanced data visualization platform with WebSocket streaming and real-time updates.",
        tech: ["React", "Spring Boot", "WebSockets", "PostgreSQL"],
        features: [
          "Real-time data streaming",
          "Interactive visualizations",
          "Custom dashboard builder",
          "Alert system integration",
          "Export capabilities",
        ],
        links: {
          demo: "/analytics-dashboard-demo",
          github: "#",
          analysis: "#",
        },
        gradient: "from-blue-500 to-indigo-500",
      },
      {
        id: "trello-clone",
        title: "📋 Trello Clone",
        subtitle: "Collaborative Project Management",
        status: "Live Application",
        description:
          "Full-featured project management platform with real-time collaboration and advanced features.",
        tech: ["React", "Spring Boot", "WebSockets", "gRPC"],
        features: [
          "Real-time collaboration",
          "Drag-and-drop interface",
          "Team management",
          "File attachments",
          "Progress tracking",
        ],
        links: {
          demo: "/trello-clone-demo",
          github: "#",
          analysis: "#",
        },
        gradient: "from-orange-500 to-red-500",
      },
    ],
  },

  // Technologies Section (used in Projects component)
  technologies: {
    title: "🛠️ Technologies",
    items: [
      { name: "Java", icon: "/java-logo.svg", color: "bg-sky-blue" },
      { name: "Spring Boot", icon: "/spring-logo.svg", color: "bg-denim-navy" },
      {
        name: "TypeScript",
        icon: "/typescript-logo.svg",
        color: "bg-golden-earth",
      },
      { name: "React", icon: "/react-logo.svg", color: "bg-sky-blue" },
      { name: "Next.js", icon: "/nextjs-logo.svg", color: "bg-deep-stone" },
      { name: "Node.js", icon: "/nodejs-logo.svg", color: "bg-denim-navy" },
      { name: "Python", icon: "/python-logo.svg", color: "bg-golden-earth" },
      {
        name: "PostgreSQL",
        icon: "/postgresql-logo.svg",
        color: "bg-sky-blue",
      },
      { name: "MongoDB", icon: "/mongodb-logo.svg", color: "bg-denim-navy" },
      { name: "Redis", icon: "/redis-logo.svg", color: "bg-golden-earth" },
      { name: "Docker", icon: "/docker-logo.svg", color: "bg-sky-blue" },
      { name: "AWS", icon: "/aws-logo.svg", color: "bg-denim-navy" },
      {
        name: "Kubernetes",
        icon: "/kubernetes-logo.svg",
        color: "bg-golden-earth",
      },
      { name: "Git", icon: "/git-logo.svg", color: "bg-sky-blue" },
      { name: "Linux", icon: "/linux-logo.svg", color: "bg-deep-stone" },
      { name: "GraphQL", icon: "/graphql-logo.svg", color: "bg-denim-navy" },
      {
        name: "WebSocket",
        icon: "/websocket-logo.svg",
        color: "bg-golden-earth",
      },
      { name: "Kafka", icon: "/kafka-logo.svg", color: "bg-deep-stone" },
      {
        name: "Elasticsearch",
        icon: "/elasticsearch-logo.svg",
        color: "bg-sky-blue",
      },
      {
        name: "Prometheus",
        icon: "/prometheus-logo.svg",
        color: "bg-denim-navy",
      },
    ],
  },

  // Contact Information (used in About component)
  contact: {
    title: "📞 Get In Touch",
    email: "chuan.lin.cl@gmail.com",
    phone: "347-463-1026",
    linkedin: "https://linkedin.com/in/yourprofile",
    github: "https://github.com/yourusername",
  },

  // Tab Labels (used in main page.tsx)
  tabs: {
    about: "About",
    projects: "Projects",
    resume: "Resume",
  },
} as const;
