"use client"

import { useState } from "react"
import {
  Calendar,
  CheckCircle2,
  Code2,
  GitBranch,
  Target,
  TrendingUp,
  User,
  Zap,
  Clock,
  Award,
  Github,
  ExternalLink,
  Brain,
  ChevronRight,
  Flame,
} from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../../components/ui/card"
import { Progress } from "../../components/ui/progress"
import { Badge } from "../../components/ui//badge"
import { Button } from "../../components/ui/button"
import { Checkbox } from "../../components/ui/checkbox"
import { Avatar, AvatarFallback, AvatarImage } from "../../components/ui/avatar"
import { Separator } from "../../components/ui/separator"
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarInset,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarTrigger,
} from "../../components/ui/sidebar"

// Mock data
const user = {
  name: "Alex Chen",
  username: "@alexchen_dev",
  avatar: "/placeholder.svg?height=40&width=40",
  streak: 47,
  totalProblems: 342,
  level: "Advanced",
}

const dailyTasks = [
  { id: 1, task: "Solve 2 Array problems", completed: true },
  { id: 2, task: "Review Binary Search concepts", completed: true },
  { id: 3, task: "Complete System Design reading", completed: false },
  { id: 4, task: "Practice Mock Interview", completed: false },
]

const dsaProgress = [
  { category: "Arrays", completed: 45, total: 60, color: "bg-blue-500" },
  { category: "Strings", completed: 32, total: 40, color: "bg-emerald-500" },
  { category: "Trees", completed: 28, total: 50, color: "bg-purple-500" },
  { category: "Graphs", completed: 15, total: 35, color: "bg-orange-500" },
  { category: "DP", completed: 12, total: 45, color: "bg-red-500" },
]

const projects = [
  {
    id: 1,
    title: "E-commerce Microservices",
    description: "Scalable microservices architecture with Docker",
    techStack: ["Node.js", "MongoDB", "Docker", "Redis"],
    github: "https://github.com",
    demo: "https://demo.com",
    status: "Completed",
  },
  {
    id: 2,
    title: "Real-time Chat App",
    description: "WebSocket-based chat with React and Socket.io",
    techStack: ["React", "Socket.io", "Express", "PostgreSQL"],
    github: "https://github.com",
    demo: "https://demo.com",
    status: "In Progress",
  },
  {
    id: 3,
    title: "ML Recommendation Engine",
    description: "Collaborative filtering recommendation system",
    techStack: ["Python", "TensorFlow", "Flask", "AWS"],
    github: "https://github.com",
    demo: null,
    status: "Planning",
  },
]

const sidebarItems = [
  { title: "Dashboard", icon: Target, isActive: true },
  { title: "DSA Tracker", icon: Code2 },
  { title: "Daily Planner", icon: Calendar },
  { title: "Projects", icon: GitBranch },
  { title: "Analytics", icon: TrendingUp },
  { title: "Profile", icon: User },
]

export default function Dashboard() {
  const [tasks, setTasks] = useState(dailyTasks)

  const toggleTask = (id: number) => {
    setTasks(tasks.map((task) => (task.id === id ? { ...task, completed: !task.completed } : task)))
  }

  const completedTasks = tasks.filter((task) => task.completed).length

  return (
    <SidebarProvider>
      <div className="min-h-screen bg-gray-50">
        <Sidebar className="border-r border-gray-200">
          <SidebarHeader className="border-b border-gray-200 p-6">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600 text-white">
                <Code2 className="h-5 w-5" />
              </div>
              <span className="text-xl font-bold text-gray-900">CodeSpace.io</span>
            </div>
          </SidebarHeader>
          <SidebarContent>
            <SidebarGroup>
              <SidebarGroupContent>
                <SidebarMenu>
                  {sidebarItems.map((item) => (
                    <SidebarMenuItem key={item.title}>
                      <SidebarMenuButton asChild isActive={item.isActive}>
                        <a href="#" className="flex items-center gap-3 px-3 py-2">
                          <item.icon className="h-5 w-5" />
                          <span>{item.title}</span>
                        </a>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          </SidebarContent>
        </Sidebar>

        <SidebarInset>
          <div className="flex flex-col">
            {/* Header */}
            <header className="flex h-16 items-center justify-between border-b border-gray-200 bg-white px-6">
              <div className="flex items-center gap-4">
                <SidebarTrigger />
                <Separator orientation="vertical" className="h-6" />
                <div>
                  <h1 className="text-xl font-semibold text-gray-900">Welcome back, {user.name}!</h1>
                  <p className="text-sm text-gray-500">Let's crush those coding goals today 🚀</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="text-right">
                  <p className="text-sm font-medium text-gray-900">{user.name}</p>
                  <p className="text-xs text-gray-500">{user.username}</p>
                </div>
                <Avatar>
                  <AvatarImage src={user.avatar || "/placeholder.svg"} alt={user.name} />
                  <AvatarFallback>AC</AvatarFallback>
                </Avatar>
              </div>
            </header>

            {/* Main Content */}
            <main className="flex-1 p-6">
              <div className="grid gap-6 lg:grid-cols-3">
                {/* Daily Coding Planner */}
                <Card className="lg:col-span-2">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Calendar className="h-5 w-5 text-blue-600" />
                      Daily Coding Planner
                    </CardTitle>
                    <CardDescription>Stay consistent with your daily coding routine</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="grid gap-4 md:grid-cols-2">
                      <div className="space-y-4">
                        <h3 className="font-medium text-gray-900">Today's Tasks</h3>
                        <div className="space-y-3">
                          {tasks.map((task) => (
                            <div key={task.id} className="flex items-center space-x-3">
                              <Checkbox
                                id={`task-${task.id}`}
                                checked={task.completed}
                                onCheckedChange={() => toggleTask(task.id)}
                              />
                              <label
                                htmlFor={`task-${task.id}`}
                                className={`text-sm ${task.completed ? "line-through text-gray-500" : "text-gray-900"}`}
                              >
                                {task.task}
                              </label>
                            </div>
                          ))}
                        </div>
                        <div className="pt-2">
                          <div className="flex items-center justify-between text-sm">
                            <span className="text-gray-600">Progress</span>
                            <span className="font-medium">
                              {completedTasks}/{tasks.length}
                            </span>
                          </div>
                          <Progress value={(completedTasks / tasks.length) * 100} className="mt-2" />
                        </div>
                      </div>
                      <div className="space-y-4">
                        <div className="rounded-lg bg-gradient-to-r from-blue-50 to-emerald-50 p-4">
                          <div className="flex items-center gap-3">
                            <div className="rounded-full bg-orange-100 p-2">
                              <Flame className="h-5 w-5 text-orange-600" />
                            </div>
                            <div>
                              <p className="text-2xl font-bold text-gray-900">{user.streak}</p>
                              <p className="text-sm text-gray-600">Day Streak</p>
                            </div>
                          </div>
                        </div>
                        <div className="grid grid-cols-2 gap-3">
                          <div className="rounded-lg bg-blue-50 p-3 text-center">
                            <p className="text-lg font-semibold text-blue-600">{user.totalProblems}</p>
                            <p className="text-xs text-gray-600">Problems Solved</p>
                          </div>
                          <div className="rounded-lg bg-emerald-50 p-3 text-center">
                            <p className="text-lg font-semibold text-emerald-600">{user.level}</p>
                            <p className="text-xs text-gray-600">Current Level</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* AI Suggestions */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Brain className="h-5 w-5 text-purple-600" />
                      AI Suggestions
                    </CardTitle>
                    <CardDescription>Personalized recommendations for you</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="rounded-lg border border-purple-200 bg-purple-50 p-4">
                      <div className="flex items-start gap-3">
                        <Zap className="h-5 w-5 text-purple-600 mt-0.5" />
                        <div>
                          <h4 className="font-medium text-purple-900">Next Problem</h4>
                          <p className="text-sm text-purple-700 mt-1">
                            Try "Longest Substring Without Repeating Characters" - it builds on your recent array work!
                          </p>
                          <Button size="sm" className="mt-3 bg-purple-600 hover:bg-purple-700">
                            Start Problem
                            <ChevronRight className="h-4 w-4 ml-1" />
                          </Button>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-medium text-gray-900">Focus Areas</h4>
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="secondary">Dynamic Programming</Badge>
                        <Badge variant="secondary">System Design</Badge>
                        <Badge variant="secondary">Trees</Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* DSA Tracker */}
              <Card className="mt-6">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Target className="h-5 w-5 text-emerald-600" />
                    DSA Progress Tracker
                  </CardTitle>
                  <CardDescription>Track your progress across different data structures and algorithms</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-5">
                    {dsaProgress.map((category) => (
                      <div key={category.category} className="space-y-3">
                        <div className="flex items-center justify-between">
                          <h3 className="font-medium text-gray-900">{category.category}</h3>
                          <span className="text-sm text-gray-500">
                            {category.completed}/{category.total}
                          </span>
                        </div>
                        <div className="space-y-2">
                          <Progress value={(category.completed / category.total) * 100} className="h-2" />
                          <div className="flex justify-between text-xs text-gray-500">
                            <span>{Math.round((category.completed / category.total) * 100)}% Complete</span>
                            <span>{category.total - category.completed} left</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Project Tracker */}
              <Card className="mt-6">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <GitBranch className="h-5 w-5 text-blue-600" />
                    Project Portfolio
                  </CardTitle>
                  <CardDescription>Showcase your development projects and track progress</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                    {projects.map((project) => (
                      <Card key={project.id} className="border border-gray-200">
                        <CardHeader className="pb-3">
                          <div className="flex items-start justify-between">
                            <CardTitle className="text-lg">{project.title}</CardTitle>
                            <Badge
                              variant={
                                project.status === "Completed"
                                  ? "default"
                                  : project.status === "In Progress"
                                    ? "secondary"
                                    : "outline"
                              }
                            >
                              {project.status}
                            </Badge>
                          </div>
                          <CardDescription>{project.description}</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                          <div className="flex flex-wrap gap-1">
                            {project.techStack.map((tech) => (
                              <Badge key={tech} variant="outline" className="text-xs">
                                {tech}
                              </Badge>
                            ))}
                          </div>
                          <div className="flex gap-2">
                            <Button size="sm" variant="outline" className="flex-1 bg-transparent">
                              <Github className="h-4 w-4 mr-1" />
                              Code
                            </Button>
                            {project.demo && (
                              <Button size="sm" variant="outline" className="flex-1 bg-transparent">
                                <ExternalLink className="h-4 w-4 mr-1" />
                                Demo
                              </Button>
                            )}
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Analytics Overview */}
              <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium text-gray-600">Time Spent Today</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center gap-2">
                      <Clock className="h-5 w-5 text-blue-600" />
                      <span className="text-2xl font-bold text-gray-900">3.5h</span>
                    </div>
                    <p className="text-xs text-gray-500 mt-1">+0.5h from yesterday</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium text-gray-600">Weekly Goal</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center gap-2">
                      <Target className="h-5 w-5 text-emerald-600" />
                      <span className="text-2xl font-bold text-gray-900">85%</span>
                    </div>
                    <Progress value={85} className="mt-2 h-1" />
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium text-gray-600">Problems This Week</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="h-5 w-5 text-purple-600" />
                      <span className="text-2xl font-bold text-gray-900">23</span>
                    </div>
                    <p className="text-xs text-gray-500 mt-1">Target: 25 problems</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium text-gray-600">Rank Progress</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center gap-2">
                      <Award className="h-5 w-5 text-orange-600" />
                      <span className="text-2xl font-bold text-gray-900">#1,247</span>
                    </div>
                    <p className="text-xs text-gray-500 mt-1">↑ 156 this month</p>
                  </CardContent>
                </Card>
              </div>
            </main>
          </div>
        </SidebarInset>
      </div>
    </SidebarProvider>
  )
}
