"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Play, ExternalLink, Zap } from "lucide-react"

export default function Home() {
  const [apiResult, setApiResult] = useState<string>("")
  const [isLoading, setIsLoading] = useState(false)

  const handleApiCall = async () => {
    setIsLoading(true)
    try {
      const response = await fetch("/express");
      const data = await response.json();
      setApiResult(data.message);
    } catch (error) {
      setApiResult("Error: Failed to call API")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="border-b border-gray-800">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <a href="https://pages.edgeone.ai" target="_blank" rel="noopener noreferrer">
            <div className="flex items-center space-x-3">
              <div className="w-6 h-6rounded-full flex items-center justify-center">
                <img src="/eo-logo-blue.svg" alt="EdgeOne Pages" width={32} height={32} />
              </div>
              <h1 className="text-lg font-semibold">EdgeOne Pages</h1>
            </div>
            </a>
            <a
              href="https://github.com/TencentEdgeOne/express-template"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="GitHub"
            >
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-16">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Main Title */}
          <div className="space-y-4">
            <h1 className="text-5xl font-bold leading-tight">
              Node Functions on EdgeOne Pages - Express
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Node Functions allow you to run code in the Node Runtime without managing servers. With its capabilities, you can easily develop and deploy full-stack applications based on the Express framework on Pages.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href="https://edgeone.ai/pages/new?from=github&template=express-template" target="_blank" rel="noopener noreferrer">
            <Button 
              size="lg" 
              className="bg-[#1c66e5] hover:bg-[#1c66e5]/90 text-white px-8 py-3 text-lg cursor-pointer"
            >
              <Zap className="w-5 h-5 mr-2" />
              One-Click Deployment
            </Button>
            </a>
            <a href="https://pages.edgeone.ai/document/node-functions" target="_blank" rel="noopener noreferrer">
            <Button 
              variant="outline" 
              size="lg" 
              className="border-gray-600 hover:bg-gray-800 text-white px-8 py-3 text-lg cursor-pointer"
            >
              <ExternalLink className="w-5 h-5 mr-2" />
              View Documentation
            </Button>
            </a>
          </div>

          {/* Code Block */}
          <Card className="bg-gray-900 border-gray-700 text-left">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-mono text-gray-400">
                ./node-functions/express/[[default]].js
              </CardTitle>
            </CardHeader>
            <CardContent>
              <pre className="text-sm text-gray-200 font-mono leading-relaxed">
{`import express from "express";
const app = express();

// Add logging middleware
app.use((req, res, next) => {
  console.log(\`[Log] $\{req.method} $\{req.url}\`);
  next();
});

// Add root route handling
app.get("/", (req, res) => {
  res.json({ message: "Hello from Express on Node Functions!" });
});

// Export the handling function
export default app;`}
              </pre>
            </CardContent>
          </Card>

          {/* API Call Section */}
          <Card className="bg-gray-900 border-gray-700">
            <CardContent className="pt-6">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <Button 
                  onClick={handleApiCall}
                  disabled={isLoading}
                  className="bg-[#1c66e5] hover:bg-[#1c66e5]/90 text-white cursor-pointer"
                >
                  {isLoading ? (
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                  ) : (
                    <Play className="w-4 h-4 mr-2" />
                  )}
                  Execute API Call
                </Button>
                {apiResult && (
                  <div className="text-left">
                    <p className="text-sm text-gray-400 mb-2">API Call Result:</p>
                    <p className="text-green-400 font-mono bg-gray-800 px-3 py-2 rounded">
                      {apiResult}
                    </p>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-800 mt-16">
        <div className="container mx-auto px-6 py-8">
          <div className="text-center text-gray-400">
            <p>Powered by EdgeOne Pages</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
