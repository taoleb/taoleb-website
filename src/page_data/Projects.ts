export default {
  // API 接口请求优先，数据格式保持和 data 一致
  api: "",
  // api 为空则使用 data 静态数据
  data: [
    {
      name: "GitMCP",
      author: "idosal",
      description: "一个免费、开源的远程 Model Context Protocol (MCP) 服务器，可将任何 GitHub 项目转换为文档中心，消除代码幻觉。",
      longDescription: "GitMCP 是一个基于 Model Context Protocol 的服务器，可以让 AI 助手访问 GitHub 仓库的最新文档和代码。支持特定仓库和通用服务器两种模式，提供智能搜索、代码搜索等功能。",
      github: "https://github.com/idosal/git-mcp",
      demo: "https://gitmcp.io",
      tags: ["MCP", "AI", "Documentation", "GitHub"],
      language: "TypeScript",
      stars: "2.5k",
      license: "Apache-2.0",
      featured: true
    },
    {
      name: "Windows-MCP",
      author: "CursorTouch",
      description: "轻量级开源项目，实现 AI 代理与 Windows 操作系统的无缝集成，支持文件导航、应用控制、UI 交互等功能。",
      longDescription: "Windows MCP 是一个 MCP 服务器，在 LLM 和 Windows 操作系统之间架起桥梁，允许代理执行文件导航、应用程序控制、UI 交互、QA 测试等任务。支持 Windows 7-11 系统。",
      github: "https://github.com/CursorTouch/Windows-MCP",
      demo: "",
      tags: ["MCP", "Windows", "Automation", "AI Agent"],
      language: "Python",
      stars: "1.8k",
      license: "MIT",
      featured: true
    },
    {
      name: "Coze Studio",
      author: "coze-dev",
      description: "一体化 AI 代理开发工具，提供可视化设计和构建工具，支持无代码/低代码方式快速创建和调试代理、应用和工作流。",
      longDescription: "Coze Studio 是一个一站式可视化 AI 代理开发工具，使创建、调试和部署 AI 代理变得前所未有的简单。提供最新的大模型和工具、各种开发模式和框架，是构建低代码 AI 产品的理想选择。",
      github: "https://github.com/coze-dev/coze-studio",
      demo: "https://www.coze.cn/home",
      tags: ["AI Agent", "Low-code", "Workflow", "Development Platform"],
      language: "Go",
      stars: "3.2k",
      license: "Apache-2.0",
      featured: true
    }
  ]
};