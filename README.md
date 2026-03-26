# Cloud Functions on EdgeOne Pages - Express

A function request demonstration website based on Next.js + Tailwind CSS, showcasing how to deploy Express applications using Cloud Functions on EdgeOne Pages.

## 🚀 Features

- **Modern UI Design**: Adopts black background with white text theme, using #1c66e5 as accent color
- **Responsive Layout**: Supports desktop and mobile devices, providing optimal user experience
- **Real-time API Demo**: Integrated Express backend with real-time function call testing
- **Component-based Architecture**: Uses shadcn/ui style component system
- **TypeScript Support**: Complete type definitions and type safety

## 🛠️ Tech Stack

### Frontend
- **Next.js 15** - React full-stack framework
- **React 19** - User interface library
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS 4** - Utility-first CSS framework

### UI Components
- **shadcn/ui** - High-quality React components
- **Lucide React** - Beautiful icon library
- **class-variance-authority** - Component style variant management
- **clsx & tailwind-merge** - CSS class name merging utilities

### Backend
- **Express.js** - Node.js web application framework
- **Cloud Functions** - EdgeOne Pages serverless functions

## 📁 Project Structure

```
express-template/
├── src/
│   ├── app/                 # Next.js App Router
│   │   ├── globals.css     # Global styles
│   │   ├── layout.tsx      # Root layout
│   │   └── page.tsx        # Main page
│   ├── components/         # React components
│   │   └── ui/            # UI base components
│   │       ├── button.tsx  # Button component
│   │       └── card.tsx    # Card component
│   └── lib/               # Utility functions
│       └── utils.ts       # Common utilities
├── public/                # Static assets
├── package.json           # Project configuration
└── README.md             # Project documentation
```

## 🚀 Quick Start

### Requirements

- Node.js 18+ 
- npm or yarn

### Install Dependencies

```bash
npm install
# or
yarn install
```

### Development Mode

```bash
edgeone pages dev
```

Visit [http://localhost:8088](http://localhost:8088) to view the application.

### Build Production Version

```bash
edgeone pages build
```

## 🎯 Core Features

### 1. Main Page Display
- Project title and description
- One-click deployment and view documentation buttons
- Express code example showcase

### 2. API Call Demo
- Real-time function call testing
- Loading state display
- Result display

### 3. Responsive Design
- Mobile-friendly layout
- Adaptive component sizing
- Touch-friendly interactions

## 🔧 Configuration

### Tailwind CSS Configuration
The project uses Tailwind CSS 4 with custom color variables:

```css
:root {
  --primary: #1c66e5;        /* Primary color */
  --background: #000000;     /* Background color */
  --foreground: #ffffff;     /* Foreground color */
}
```

### Component Styling
Uses `class-variance-authority` to manage component style variants with multiple preset styles.

## 📚 Documentation

- **EdgeOne Pages Official Docs**: [https://pages.edgeone.ai/document/node-functions](https://pages.edgeone.ai/document/node-functions)
- **Next.js Documentation**: [https://nextjs.org/docs](https://nextjs.org/docs)
- **Tailwind CSS Documentation**: [https://tailwindcss.com/docs](https://tailwindcss.com/docs)
- **Express.js Documentation**: [https://expressjs.com](https://expressjs.com)

## 🚀 Deployment Guide

### EdgeOne Pages Deployment

1. Push code to GitHub repository
2. Create new project in EdgeOne Pages console
3. Select GitHub repository as source
4. Configure build command: `edgeone pages build`
5. Deploy project

### Cloud Functions Configuration

Create `cloud-functions/` folder in project root and add Express application:

```javascript
// cloud-functions/express/[[default]].js
import express from "express";
const app = express();

app.get("/", (req, res) => {
  res.json({ message: "Hello from Express on Cloud Functions!" });
});

export default app;
```

## Deploy

[![Deploy with EdgeOne Pages](https://cdnstatic.tencentcs.com/edgeone/pages/deploy.svg)](https://edgeone.ai/pages/new?from=github&template=express-template)

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](https://github.com/github/choosealicense.com/blob/gh-pages/_licenses/mit.txt) file for details.
