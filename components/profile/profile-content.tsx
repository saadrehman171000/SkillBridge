"use client"

import { useState } from "react"
import Image from "next/image"
import { Star, MessageCircle, Calendar, ChevronRight, Plus } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function ProfileContent() {
  const [activeTab, setActiveTab] = useState("skills")

  const tabs = [
    { id: "skills", label: "Skills" },
    { id: "exchanges", label: "Exchanges" },
    { id: "reviews", label: "Reviews" },
  ]

  const skills = {
    offering: [
      {
        id: 1,
        name: "Web Development",
        level: "Expert",
        description: "Full-stack development with React, Next.js, and Node.js",
      },
      {
        id: 2,
        name: "UI/UX Design",
        level: "Intermediate",
        description: "User interface design with Figma and Adobe XD",
      },
      {
        id: 3,
        name: "JavaScript Tutoring",
        level: "Expert",
        description: "One-on-one tutoring for JavaScript fundamentals and advanced concepts",
      },
    ],
    seeking: [
      {
        id: 1,
        name: "Graphic Design",
        level: "Beginner",
        description: "Looking to learn Adobe Illustrator and Photoshop basics",
      },
      {
        id: 2,
        name: "Spanish Language",
        level: "Beginner",
        description: "Interested in learning conversational Spanish",
      },
    ],
  }

  const exchanges = [
    {
      id: 1,
      user: {
        name: "Maria Rodriguez",
        avatar: "/placeholder.svg?height=48&width=48",
      },
      offering: "Spanish Lessons",
      receiving: "Web Development",
      status: "Upcoming",
      date: "May 15, 2023",
    },
    {
      id: 2,
      user: {
        name: "Robert Chen",
        avatar: "/placeholder.svg?height=48&width=48",
      },
      offering: "Web Development",
      receiving: "Cooking Classes",
      status: "Completed",
      date: "April 22, 2023",
    },
    {
      id: 3,
      user: {
        name: "Sarah Williams",
        avatar: "/placeholder.svg?height=48&width=48",
      },
      offering: "JavaScript Tutoring",
      receiving: "Photography Basics",
      status: "Completed",
      date: "March 10, 2023",
    },
  ]

  const reviews = [
    {
      id: 1,
      user: {
        name: "Robert Chen",
        avatar: "/placeholder.svg?height=48&width=48",
      },
      rating: 5,
      date: "April 25, 2023",
      text: "Alex is an excellent teacher! He explained web development concepts clearly and was very patient. Highly recommend!",
    },
    {
      id: 2,
      user: {
        name: "Sarah Williams",
        avatar: "/placeholder.svg?height=48&width=48",
      },
      rating: 5,
      date: "March 15, 2023",
      text: "Great JavaScript tutor. Alex helped me understand complex concepts and was always available to answer questions.",
    },
    {
      id: 3,
      user: {
        name: "David Kim",
        avatar: "/placeholder.svg?height=48&width=48",
      },
      rating: 4,
      date: "February 28, 2023",
      text: "Alex helped me with my portfolio website. He has great technical skills and explains things well. Would exchange skills again!",
    },
  ]

  return (
    <section className="bg-background py-12">
      <div className="container-custom">
        <div className="mb-8 flex border-b">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              className={`px-6 py-3 text-sm font-medium transition-colors ${
                activeTab === tab.id
                  ? "border-b-2 border-primary text-primary"
                  : "text-muted-foreground hover:text-foreground"
              }`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div>
          {activeTab === "skills" && (
            <div className="space-y-12">
              <div>
                <h3 className="mb-6 text-xl font-semibold">Skills I'm Offering</h3>
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {skills.offering.map((skill) => (
                    <div key={skill.id} className="card-hover rounded-xl border bg-card p-6 shadow-sm">
                      <div className="mb-3 flex items-center justify-between">
                        <h4 className="text-lg font-semibold">{skill.name}</h4>
                        <span className="rounded-full bg-primary/10 px-2 py-1 text-xs font-medium text-primary">
                          {skill.level}
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground">{skill.description}</p>
                    </div>
                  ))}
                  <button className="card-hover flex h-full min-h-[160px] flex-col items-center justify-center rounded-xl border border-dashed bg-card p-6 text-muted-foreground transition-colors hover:border-primary hover:text-primary">
                    <Plus className="mb-2 h-6 w-6" />
                    <span>Add Skill</span>
                  </button>
                </div>
              </div>

              <div>
                <h3 className="mb-6 text-xl font-semibold">Skills I'm Seeking</h3>
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {skills.seeking.map((skill) => (
                    <div key={skill.id} className="card-hover rounded-xl border bg-card p-6 shadow-sm">
                      <div className="mb-3 flex items-center justify-between">
                        <h4 className="text-lg font-semibold">{skill.name}</h4>
                        <span className="rounded-full bg-primary/10 px-2 py-1 text-xs font-medium text-primary">
                          {skill.level}
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground">{skill.description}</p>
                    </div>
                  ))}
                  <button className="card-hover flex h-full min-h-[160px] flex-col items-center justify-center rounded-xl border border-dashed bg-card p-6 text-muted-foreground transition-colors hover:border-primary hover:text-primary">
                    <Plus className="mb-2 h-6 w-6" />
                    <span>Add Skill</span>
                  </button>
                </div>
              </div>
            </div>
          )}

          {activeTab === "exchanges" && (
            <div className="space-y-6">
              {exchanges.map((exchange) => (
                <div key={exchange.id} className="card-hover rounded-xl border bg-card p-6 shadow-sm">
                  <div className="flex flex-wrap gap-6">
                    <div className="flex items-center gap-3">
                      <Image
                        src={exchange.user.avatar || "/placeholder.svg"}
                        alt={exchange.user.name}
                        width={48}
                        height={48}
                        className="rounded-full"
                      />
                      <span className="font-medium">{exchange.user.name}</span>
                    </div>

                    <div className="flex flex-1 flex-wrap items-center gap-4">
                      <div className="rounded-lg bg-muted p-3">
                        <div className="flex flex-wrap items-center gap-3">
                          <div>
                            <div className="text-xs text-muted-foreground">You offered:</div>
                            <div className="font-medium">{exchange.offering}</div>
                          </div>
                          <ChevronRight className="h-4 w-4 text-muted-foreground" />
                          <div>
                            <div className="text-xs text-muted-foreground">You received:</div>
                            <div className="font-medium">{exchange.receiving}</div>
                          </div>
                        </div>
                      </div>

                      <div className="ml-auto flex items-center gap-4">
                        <span
                          className={`rounded-full px-2 py-1 text-xs font-medium ${
                            exchange.status === "Upcoming"
                              ? "bg-accent/10 text-accent"
                              : "bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400"
                          }`}
                        >
                          {exchange.status}
                        </span>
                        <div className="flex items-center gap-1 text-sm text-muted-foreground">
                          <Calendar className="h-3 w-3" />
                          <span>{exchange.date}</span>
                        </div>
                      </div>
                    </div>

                    <div className="flex w-full flex-wrap gap-3">
                      <Button variant="outline" className="flex items-center gap-2">
                        <MessageCircle className="h-4 w-4" />
                        Message
                      </Button>
                      <Button className="flex items-center gap-2">
                        <Calendar className="h-4 w-4" />
                        {exchange.status === "Completed" ? "Schedule Again" : "Reschedule"}
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === "reviews" && (
            <div className="space-y-6">
              {reviews.map((review) => (
                <div key={review.id} className="card-hover rounded-xl border bg-card p-6 shadow-sm">
                  <div className="mb-4 flex flex-wrap items-start justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <Image
                        src={review.user.avatar || "/placeholder.svg"}
                        alt={review.user.name}
                        width={48}
                        height={48}
                        className="rounded-full"
                      />
                      <div>
                        <h4 className="font-medium">{review.user.name}</h4>
                        <div className="text-sm text-muted-foreground">{review.date}</div>
                      </div>
                    </div>
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-4 w-4 ${
                            i < review.rating ? "fill-accent text-accent" : "fill-muted text-muted"
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                  <p className="text-card-foreground">{review.text}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
