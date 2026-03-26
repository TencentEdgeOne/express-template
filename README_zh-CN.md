# Cloud Functions on EdgeOne Pages - Express

一个基于 Next.js + Tailwind CSS 的函数请求演示网站，展示如何在 EdgeOne Pages 上使用 Cloud Functions 部署 Express 应用。

## 🚀 特性

- **现代化 UI 设计**：采用黑底白字主题，使用 #1c66e5 作为点缀色
- **响应式布局**：支持桌面端和移动端，提供最佳用户体验
- **实时 API 演示**：集成 Express 后端，支持实时函数调用测试
- **组件化架构**：使用 shadcn/ui 风格的组件系统
- **TypeScript 支持**：完整的类型定义和类型安全

## 🛠️ 技术栈

### 前端
- **Next.js 15** - React 全栈框架
- **React 19** - 用户界面库
- **TypeScript** - 类型安全的 JavaScript
- **Tailwind CSS 4** - 实用优先的 CSS 框架

### UI 组件
- **shadcn/ui** - 高质量 React 组件
- **Lucide React** - 精美的图标库
- **class-variance-authority** - 组件样式变体管理
- **clsx & tailwind-merge** - CSS 类名合并工具

### 后端
- **Express.js** - Node.js Web 应用框架
- **Cloud Functions** - EdgeOne Pages 无服务器函数

## 📁 项目结构

```
express-template/
├── src/
│   ├── app/                 # Next.js App Router
│   │   ├── globals.css     # 全局样式
│   │   ├── layout.tsx      # 根布局
│   │   └── page.tsx        # 主页面
│   ├── components/         # React 组件
│   │   └── ui/            # UI 基础组件
│   │       ├── button.tsx  # 按钮组件
│   │       └── card.tsx    # 卡片组件
│   └── lib/               # 工具函数
│       └── utils.ts       # 通用工具
├── public/                # 静态资源
├── package.json           # 项目配置
└── README.md             # 项目文档
```

## 🚀 快速开始

### 环境要求

- Node.js 18+ 
- npm 或 yarn

### 安装依赖

```bash
npm install
# 或
yarn install
```

### 开发模式

```bash
edgeone pages dev
```

访问 [http://localhost:8088](http://localhost:8088) 查看应用。

### 构建生产版本

```bash
edgeone pages build
```

## 🎯 核心功能

### 1. 主页面展示
- 项目标题和描述
- 一键部署和查看文档按钮
- Express 代码示例展示

### 2. API 调用演示
- 实时函数调用测试
- 加载状态显示
- 结果展示

### 3. 响应式设计
- 移动端友好的布局
- 自适应组件尺寸
- 触摸友好的交互

## 🔧 配置说明

### Tailwind CSS 配置
项目使用 Tailwind CSS 4，支持自定义颜色变量：

```css
:root {
  --primary: #1c66e5;        /* 主色调 */
  --background: #000000;     /* 背景色 */
  --foreground: #ffffff;     /* 前景色 */
}
```

### 组件样式
使用 `class-variance-authority` 管理组件样式变体，支持多种预设样式。

## 📚 文档入口

- **EdgeOne Pages 官方文档**：[https://pages.edgeone.ai/document/node-functions](https://pages.edgeone.ai/document/node-functions)
- **Next.js 文档**：[https://nextjs.org/docs](https://nextjs.org/docs)
- **Tailwind CSS 文档**：[https://tailwindcss.com/docs](https://tailwindcss.com/docs)
- **Express.js 文档**：[https://expressjs.com](https://expressjs.com)

## 🚀 部署指南

### EdgeOne Pages 部署

1. 将代码推送到 GitHub 仓库
2. 在 EdgeOne Pages 控制台创建新项目
3. 选择 GitHub 仓库作为源
4. 配置构建命令：`npm run build`
5. 配置输出目录：`.next`
6. 部署项目

### Cloud Functions 配置

在项目根目录创建 `cloud-functions/` 文件夹，添加 Express 应用：

```javascript
// cloud-functions/express/[[default]].js
import express from "express";
const app = express();

app.get("/", (req, res) => {
  res.json({ message: "Hello from Express on Cloud Functions!" });
});

export default app;
```


## 部署

[![Deploy with EdgeOne Pages](https://cdnstatic.tencentcs.com/edgeone/pages/deploy.svg)](https://console.cloud.tencent.com/edgeone/pages/new?from=github&template=express-template)


## 📄 许可证

本项目采用 MIT 许可证 - 查看 [LICENSE](https://github.com/github/choosealicense.com/blob/gh-pages/_licenses/mit.txt) 文件了解详情。
