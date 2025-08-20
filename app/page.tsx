"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import {
  ArrowRight,
  ArrowLeft,
  Sparkles,
  Code,
  Zap,
  Users,
  Globe,
  Database,
  Bot,
  Calculator,
  Palette,
  ShoppingCart,
} from "lucide-react"

type ExampleProject = {
  name: string
  description: string
  image: string
}

type Tool = {
  name: string
  description: string
  level: "beginner" | "intermediate" | "advanced"
  bestFor: string[]
  pros: string[]
  cons: string[]
  exampleProjects: ExampleProject[]
  link: string
  isAffiliate?: boolean
  logo: string
}

const tools: Tool[] = [
  {
    name: "ChatGPT/Claude",
    description: "AI chatbots for prompt development and basic UI building",
    level: "beginner",
    bestFor: ["prompt-development", "basic-ui", "troubleshooting", "simple-tools"],
    pros: ["Easy to start", "Great for experimentation", "No setup required"],
    cons: ["Limited deployment options", "Basic functionality"],
    exampleProjects: [
      {
        name: "Plywood Cutting Visualizer",
        description:
          "Input plywood dimensions and get cutting calculations with scrap amounts. Built by Justin Lai for practical woodworking calculations.",
        image: "/placeholder.svg?height=200&width=300&text=Plywood+Calculator",
      },
    ],
    link: "https://chatgpt.com",
    logo: "/placeholder.svg?height=40&width=120&text=ChatGPT",
  },
  {
    name: "Lovable",
    description: "Excels at building interfaces and web pages with direct deployment",
    level: "beginner",
    bestFor: ["web-pages", "interfaces", "portfolios", "simple-apps"],
    pros: ["Direct deployment", "Great for UI/UX", "Beginner-friendly"],
    cons: ["Limited backend functionality", "Less customization"],
    exampleProjects: [
      {
        name: "Portfolio Website",
        description:
          "Michael Lembo's professional portfolio site featuring a custom chatbot that answers questions about his background and experience.",
        image: "/placeholder.svg?height=200&width=300&text=Portfolio+Site",
      },
      {
        name: "Lambo Levels",
        description:
          "A fun crypto gains visualizer that helps users dream big with their 'moonshot' token investments. Built by Joe Frabotta for crypto enthusiasts.",
        image: "/placeholder.svg?height=200&width=300&text=Crypto+Calculator",
      },
    ],
    link: "https://lovable.dev/?via=maddy",
    isAffiliate: true,
    logo: "/placeholder.svg?height=40&width=120&text=Lovable",
  },
  {
    name: "v0",
    description: "Perfect for building simple apps like calculators and tools",
    level: "beginner",
    bestFor: ["calculators", "simple-tools", "prototypes", "components"],
    pros: ["Component-focused", "Clean code output", "React/Next.js based"],
    cons: ["Limited to simple apps", "No direct deployment"],
    exampleProjects: [
      {
        name: "Dreambase",
        description:
          "A Supabase admin tool that adds enhanced functionality for database management. Used in Andy Keil's workflow for prototyping features.",
        image: "/placeholder.svg?height=200&width=300&text=Database+Admin",
      },
    ],
    link: "https://v0.dev",
    logo: "/placeholder.svg?height=40&width=120&text=v0",
  },
  {
    name: "Zapier Agents",
    description: "Build AI agents with natural language, connects to 8,000+ apps",
    level: "beginner",
    bestFor: ["ai-agents", "automation", "integrations", "workflows"],
    pros: ["Massive app integrations", "No coding required", "Automation focus"],
    cons: ["Limited to agent/workflow use cases", "Subscription required"],
    exampleProjects: [
      {
        name: "Resume Scoring Agent",
        description:
          "Pre-built AI agent that automatically scores resumes against job description requirements, helping streamline the hiring process.",
        image: "/placeholder.svg?height=200&width=300&text=Resume+Scorer",
      },
    ],
    link: "https://zapier.com/agents",
    logo: "/placeholder.svg?height=40&width=120&text=Zapier",
  },
  {
    name: "Replit",
    description: "Nice mix of control and guardrails for various projects",
    level: "intermediate",
    bestFor: ["web-apps", "games", "apis", "full-stack"],
    pros: ["Good balance of control", "Multiple languages", "Built-in hosting"],
    cons: ["Can be overwhelming", "Performance limitations"],
    exampleProjects: [
      {
        name: "Podcast Power",
        description:
          "A web app for listening to podcasts about podcasts, built by Matt Medeiros to serve the podcasting community.",
        image: "/placeholder.svg?height=200&width=300&text=Podcast+App",
      },
      {
        name: "Rocket Fuel Rush",
        description:
          "An interactive game created for the Gravity Forms WordPress plugin, showcasing creative marketing applications.",
        image: "/placeholder.svg?height=200&width=300&text=Interactive+Game",
      },
    ],
    link: "https://replit.com/refer/madelineosman1",
    isAffiliate: true,
    logo: "/placeholder.svg?height=40&width=120&text=Replit",
  },
  {
    name: "Bolt",
    description: "Start-to-finish solution for web and mobile app development",
    level: "intermediate",
    bestFor: ["web-apps", "mobile-apps", "full-stack", "complex-projects"],
    pros: ["Full-stack support", "Popular tech stacks", "Comprehensive"],
    cons: ["Steeper learning curve", "Can be complex for simple projects"],
    exampleProjects: [
      {
        name: "WP API Explorer",
        description:
          "A comprehensive tool to discover and test WordPress REST API endpoints, built by Matt Medeiros for WordPress developers.",
        image: "/placeholder.svg?height=200&width=300&text=API+Explorer",
      },
      {
        name: "Pulse",
        description:
          "An app that tracks WordPress news and automatically summarizes each article for busy WordPress professionals.",
        image: "/placeholder.svg?height=200&width=300&text=News+Tracker",
      },
    ],
    link: "https://bolt.new/?rid=ogthao",
    isAffiliate: true,
    logo: "/placeholder.svg?height=40&width=120&text=Bolt",
  },
  {
    name: "Cursor",
    description: "Full IDE that's developer-first but usable by non-developers",
    level: "advanced",
    bestFor: ["complex-apps", "maintenance", "custom-features", "production"],
    pros: ["Full IDE capabilities", "Great for complex projects", "Professional development"],
    cons: ["Steep learning curve", "Overwhelming for beginners"],
    exampleProjects: [
      {
        name: "Taste",
        description:
          "A meal cataloging app with social networking features for sharing dietary preferences and restaurant recommendations.",
        image: "/placeholder.svg?height=200&width=300&text=Food+Social+App",
      },
      {
        name: "MIXCARD",
        description:
          "A creative service that transforms your Spotify playlists into beautiful physical postcards, built by Alfred Megally.",
        image: "/placeholder.svg?height=200&width=300&text=Spotify+Postcards",
      },
      {
        name: "SEO Calculator",
        description:
          "A lead magnet tool that helps prospects calculate SEO metrics, built by Tim Metz at Animalz for marketing funnel optimization.",
        image: "/placeholder.svg?height=200&width=300&text=SEO+Calculator",
      },
    ],
    link: "https://cursor.sh",
    logo: "/placeholder.svg?height=40&width=120&text=Cursor",
  },
  {
    name: "Windsurf",
    description: "IDE for enterprise users, especially in regulated industries",
    level: "advanced",
    bestFor: ["enterprise", "regulated-industries", "complex-apps", "team-projects"],
    pros: ["Enterprise features", "Security focus", "Team collaboration"],
    cons: ["Complex setup", "Overkill for simple projects"],
    exampleProjects: [
      {
        name: "Enterprise Applications",
        description:
          "Secure, compliant applications built for regulated industries with advanced team collaboration features.",
        image: "/placeholder.svg?height=200&width=300&text=Enterprise+App",
      },
    ],
    link: "https://codeium.com/windsurf",
    logo: "/placeholder.svg?height=40&width=120&text=Windsurf",
  },
]

const projectTypes = [
  { id: "simple-tools", label: "Simple Tools & Calculators", icon: Calculator },
  { id: "web-pages", label: "Websites & Landing Pages", icon: Globe },
  { id: "portfolios", label: "Portfolio Sites", icon: Palette },
  { id: "ai-agents", label: "AI Agents & Automation", icon: Bot },
  { id: "web-apps", label: "Web Applications", icon: Code },
  { id: "mobile-apps", label: "Mobile Apps", icon: Zap },
  { id: "games", label: "Games & Interactive Content", icon: Sparkles },
  { id: "e-commerce", label: "E-commerce & Shopping", icon: ShoppingCart },
  { id: "complex-apps", label: "Complex Applications", icon: Database },
  { id: "enterprise", label: "Enterprise Solutions", icon: Users },
]

const features = [
  { id: "direct-deployment", label: "Direct deployment/hosting" },
  { id: "database-integration", label: "Database integration" },
  { id: "user-authentication", label: "User authentication" },
  { id: "api-integration", label: "API integrations" },
  { id: "real-time-features", label: "Real-time features" },
  { id: "mobile-responsive", label: "Mobile responsive design" },
  { id: "custom-styling", label: "Custom styling/branding" },
  { id: "team-collaboration", label: "Team collaboration" },
]

export default function VibeCodingSelector() {
  const [step, setStep] = useState(1)
  const [experience, setExperience] = useState("")
  const [projectType, setProjectType] = useState("")
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>([])
  const [recommendations, setRecommendations] = useState<Tool[]>([])

  const handleFeatureChange = (featureId: string, checked: boolean) => {
    if (checked) {
      setSelectedFeatures([...selectedFeatures, featureId])
    } else {
      setSelectedFeatures(selectedFeatures.filter((f) => f !== featureId))
    }
  }

  const generateRecommendations = () => {
    const filteredTools = tools.filter((tool) => {
      // Filter by experience level
      if (experience === "beginner" && tool.level !== "beginner") return false
      if (experience === "intermediate" && tool.level === "advanced") return false

      // Filter by project type
      if (projectType && !tool.bestFor.includes(projectType)) return false

      return true
    })

    // Score tools based on feature requirements
    const scoredTools = filteredTools.map((tool) => {
      let score = 0

      // Base score by experience match
      if (tool.level === experience) score += 3
      else if (experience === "intermediate" && tool.level === "beginner") score += 1

      // Project type exact match
      if (tool.bestFor.includes(projectType)) score += 2

      // Feature-specific scoring
      selectedFeatures.forEach((feature) => {
        if (feature === "direct-deployment" && ["Lovable", "Replit"].includes(tool.name)) score += 1
        if (feature === "api-integration" && ["Zapier Agents", "Replit", "Bolt", "Cursor"].includes(tool.name))
          score += 1
        if (feature === "database-integration" && ["Bolt", "Cursor", "Windsurf"].includes(tool.name)) score += 1
        if (feature === "team-collaboration" && ["Windsurf", "Cursor"].includes(tool.name)) score += 1
      })

      return { ...tool, score }
    })

    // Sort by score and return top 3
    const sorted = scoredTools.sort((a, b) => b.score - a.score)
    setRecommendations(sorted.slice(0, 3))
    setStep(4)
  }

  const reset = () => {
    setStep(1)
    setExperience("")
    setProjectType("")
    setSelectedFeatures([])
    setRecommendations([])
  }

  const getLevelColor = (level: string) => {
    switch (level) {
      case "beginner":
        return "bg-green-100 text-green-800"
      case "intermediate":
        return "bg-yellow-100 text-yellow-800"
      case "advanced":
        return "bg-red-100 text-red-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Vibe Coding Tool Selector</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-4">
            Find the perfect AI coding tool for your project based on your experience level, project type, and specific
            requirements.
          </p>
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3 max-w-2xl mx-auto">
            <p className="text-sm text-yellow-800">
              <strong>Disclosure:</strong> Some links below are affiliate/referral links. I may earn free credits or
              commissions when you create new accounts through these links, at no extra cost to you.
            </p>
          </div>
        </div>

        {/* Progress indicator */}
        <div className="flex justify-center mb-8">
          <div className="flex items-center space-x-4">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="flex items-center">
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                    i <= step ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-600"
                  }`}
                >
                  {i}
                </div>
                {i < 4 && <div className={`w-12 h-1 mx-2 ${i < step ? "bg-blue-600" : "bg-gray-200"}`} />}
              </div>
            ))}
          </div>
        </div>

        {/* Step 1: Experience Level */}
        {step === 1 && (
          <Card className="max-w-2xl mx-auto">
            <CardHeader>
              <CardTitle>What's your coding experience level?</CardTitle>
              <CardDescription>
                This helps us recommend tools that match your comfort level with technology.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <RadioGroup value={experience} onValueChange={setExperience}>
                <div className="space-y-4">
                  <div className="flex items-center space-x-2 p-4 border rounded-lg hover:bg-gray-50">
                    <RadioGroupItem value="beginner" id="beginner" />
                    <Label htmlFor="beginner" className="flex-1 cursor-pointer">
                      <div className="font-medium">Beginner</div>
                      <div className="text-sm text-gray-600">New to coding, prefer simple tools with minimal setup</div>
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2 p-4 border rounded-lg hover:bg-gray-50">
                    <RadioGroupItem value="intermediate" id="intermediate" />
                    <Label htmlFor="intermediate" className="flex-1 cursor-pointer">
                      <div className="font-medium">Intermediate</div>
                      <div className="text-sm text-gray-600">
                        Some coding experience, comfortable with more complex tools
                      </div>
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2 p-4 border rounded-lg hover:bg-gray-50">
                    <RadioGroupItem value="advanced" id="advanced" />
                    <Label htmlFor="advanced" className="flex-1 cursor-pointer">
                      <div className="font-medium">Advanced</div>
                      <div className="text-sm text-gray-600">
                        Experienced with development tools and complex projects
                      </div>
                    </Label>
                  </div>
                </div>
              </RadioGroup>
              <div className="flex justify-end mt-6">
                <Button onClick={() => setStep(2)} disabled={!experience} className="flex items-center gap-2">
                  Next <ArrowRight className="w-4 h-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Step 2: Project Type */}
        {step === 2 && (
          <Card className="max-w-4xl mx-auto">
            <CardHeader>
              <CardTitle>What type of project are you building?</CardTitle>
              <CardDescription>Select the option that best describes your project goals.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {projectTypes.map((type) => {
                  const Icon = type.icon
                  return (
                    <div
                      key={type.id}
                      className={`p-4 border rounded-lg cursor-pointer transition-all hover:shadow-md ${
                        projectType === type.id ? "border-blue-500 bg-blue-50" : "border-gray-200 hover:border-gray-300"
                      }`}
                      onClick={() => setProjectType(type.id)}
                    >
                      <Icon className="w-8 h-8 text-blue-600 mb-2" />
                      <div className="font-medium text-sm">{type.label}</div>
                    </div>
                  )
                })}
              </div>
              <div className="flex justify-between mt-6">
                <Button variant="outline" onClick={() => setStep(1)} className="flex items-center gap-2">
                  <ArrowLeft className="w-4 h-4" /> Back
                </Button>
                <Button onClick={() => setStep(3)} disabled={!projectType} className="flex items-center gap-2">
                  Next <ArrowRight className="w-4 h-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Step 3: Features */}
        {step === 3 && (
          <Card className="max-w-4xl mx-auto">
            <CardHeader>
              <CardTitle>What features do you need?</CardTitle>
              <CardDescription>Select any features that are important for your project (optional).</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {features.map((feature) => (
                  <div key={feature.id} className="flex items-center space-x-2">
                    <Checkbox
                      id={feature.id}
                      checked={selectedFeatures.includes(feature.id)}
                      onCheckedChange={(checked) => handleFeatureChange(feature.id, checked as boolean)}
                    />
                    <Label htmlFor={feature.id} className="cursor-pointer">
                      {feature.label}
                    </Label>
                  </div>
                ))}
              </div>
              <div className="flex justify-between mt-6">
                <Button variant="outline" onClick={() => setStep(2)} className="flex items-center gap-2">
                  <ArrowLeft className="w-4 h-4" /> Back
                </Button>
                <Button onClick={generateRecommendations} className="flex items-center gap-2">
                  Get Recommendations <Sparkles className="w-4 h-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Step 4: Recommendations */}
        {step === 4 && (
          <div className="space-y-6">
            <div className="text-center">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Your Recommended Tools</h2>
              <p className="text-gray-600">Based on your preferences, here are the best tools for your project:</p>
            </div>

            <div className="grid gap-6">
              {recommendations.map((tool, index) => (
                <Card key={tool.name} className="relative">
                  {index === 0 && (
                    <div className="absolute -top-3 left-4">
                      <Badge className="bg-yellow-500 text-white">Best Match</Badge>
                    </div>
                  )}
                  <CardHeader>
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <img src={tool.logo || "/placeholder.svg"} alt={`${tool.name} logo`} className="h-8" />
                        <div>
                          <CardTitle className="text-xl">{tool.name}</CardTitle>
                          {tool.isAffiliate && (
                            <Badge variant="outline" className="text-xs mt-1">
                              Affiliate Link
                            </Badge>
                          )}
                        </div>
                      </div>
                      <Badge className={getLevelColor(tool.level)}>{tool.level}</Badge>
                    </div>
                    <CardDescription className="text-base">{tool.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-medium text-green-700 mb-2">Pros:</h4>
                        <ul className="text-sm space-y-1">
                          {tool.pros.map((pro, i) => (
                            <li key={i} className="flex items-center gap-2">
                              <div className="w-1.5 h-1.5 bg-green-500 rounded-full" />
                              {pro}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-medium text-red-700 mb-2">Cons:</h4>
                        <ul className="text-sm space-y-1">
                          {tool.cons.map((con, i) => (
                            <li key={i} className="flex items-center gap-2">
                              <div className="w-1.5 h-1.5 bg-red-500 rounded-full" />
                              {con}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    {tool.exampleProjects.length > 0 && (
                      <div className="mt-4">
                        <h4 className="font-medium text-blue-700 mb-3">Real Project Examples:</h4>
                        <div className="space-y-4">
                          {tool.exampleProjects.map((project, i) => (
                            <div key={i} className="border rounded-lg p-4 bg-gray-50">
                              <div className="flex gap-4">
                                <img
                                  src={project.image || "/placeholder.svg"}
                                  alt={project.name}
                                  className="w-24 h-16 object-cover rounded border flex-shrink-0"
                                />
                                <div className="flex-1">
                                  <h5 className="font-medium text-sm text-gray-900 mb-1">{project.name}</h5>
                                  <p className="text-xs text-gray-600 leading-relaxed">{project.description}</p>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                    <div className="mt-4 pt-4 border-t">
                      <Button asChild className="w-full">
                        <a href={tool.link} target="_blank" rel="noopener noreferrer">
                          Try {tool.name} {tool.isAffiliate ? "(Referral Link)" : ""}
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="flex justify-center">
              <Button onClick={reset} variant="outline" className="flex items-center gap-2">
                Start Over <ArrowLeft className="w-4 h-4" />
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
