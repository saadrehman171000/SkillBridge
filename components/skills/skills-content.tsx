"use client"

import { useState } from "react"
import Image from "next/image"
import { Search, MapPin, Star, MessageCircle, ChevronDown, Filter, Check } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function SkillsContent() {
  const [sortOption, setSortOption] = useState("relevance")
  const [filtersVisible, setFiltersVisible] = useState(false)

  const categories = [
    "All Categories",
    "Technology",
    "Creative Arts",
    "Education",
    "Home & Garden",
    "Business",
    "Health & Wellness",
    "Culinary",
    "Languages",
    "Music",
    "Sports & Fitness",
  ]

  const skills = [
    {
      id: 1,
      title: "Web Development",
      category: "Technology",
      level: "Intermediate",
      rating: 4.8,
      reviews: 24,
      location: "Seattle, WA",
      distance: "2.5 miles",
      availability: "Weekends",
      user: {
        name: "Alex Johnson",
        avatar: "/placeholder.svg?height=48&width=48",
        verified: true,
      },
      description:
        "I can teach you how to build responsive websites using HTML, CSS, and JavaScript. I specialize in React and Next.js frameworks.",
    },
    {
      id: 2,
      title: "Piano Lessons",
      category: "Music",
      level: "Beginner to Advanced",
      rating: 4.9,
      reviews: 36,
      location: "Portland, OR",
      distance: "5 miles",
      availability: "Weekday Evenings",
      user: {
        name: "Maria Rodriguez",
        avatar: "/placeholder.svg?height=48&width=48",
        verified: true,
      },
      description:
        "Classical piano teacher with 10+ years of experience. I can teach beginners to advanced students of all ages.",
    },
    {
      id: 3,
      title: "Cooking Classes",
      category: "Culinary",
      level: "Beginner",
      rating: 4.7,
      reviews: 18,
      location: "San Francisco, CA",
      distance: "3 miles",
      availability: "Flexible",
      user: {
        name: "Robert Chen",
        avatar: "/placeholder.svg?height=48&width=48",
        verified: false,
      },
      description:
        "Learn to cook authentic Asian cuisine. I'll teach you the basics of Chinese, Japanese, and Thai cooking with simple ingredients.",
    },
    {
      id: 4,
      title: "Photography Basics",
      category: "Creative Arts",
      level: "Beginner to Intermediate",
      rating: 4.6,
      reviews: 15,
      location: "Austin, TX",
      distance: "7 miles",
      availability: "Weekends",
      user: {
        name: "Sarah Williams",
        avatar: "/placeholder.svg?height=48&width=48",
        verified: true,
      },
      description:
        "Learn the fundamentals of photography including composition, lighting, and editing. Bring your own camera (DSLR or smartphone).",
    },
  ]

  return (
    <section className="bg-background py-12">
      <div className="container-custom">
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search for skills..."
              className="w-full rounded-lg border bg-background px-10 py-2 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
            />
          </div>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <span className="text-sm text-muted-foreground">Sort by:</span>
              <select
                value={sortOption}
                onChange={(e) => setSortOption(e.target.value)}
                className="rounded-md border bg-background px-3 py-1 text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
              >
                <option value="relevance">Relevance</option>
                <option value="newest">Newest</option>
                <option value="rating">Highest Rated</option>
                <option value="distance">Nearest</option>
              </select>
            </div>

            <Button
              variant="outline"
              size="sm"
              className="flex items-center gap-2 md:hidden"
              onClick={() => setFiltersVisible(!filtersVisible)}
            >
              <Filter className="h-4 w-4" />
              Filters
              <ChevronDown className={`h-4 w-4 transition-transform ${filtersVisible ? "rotate-180" : ""}`} />
            </Button>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-[280px_1fr]">
          <div className={`${filtersVisible ? "block" : "hidden"} md:block`}>
            <div className="sticky top-20 rounded-xl border bg-card p-6 shadow-sm">
              <h3 className="mb-4 text-lg font-semibold">Filters</h3>

              <div className="mb-6">
                <h4 className="mb-3 font-medium">Categories</h4>
                <div className="space-y-2">
                  {categories.map((category, index) => (
                    <label key={index} className="flex cursor-pointer items-center gap-2">
                      <input
                        type="checkbox"
                        className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                        defaultChecked={index === 0}
                      />
                      <span className="text-sm">{category}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="mb-6">
                <h4 className="mb-3 font-medium">Skill Level</h4>
                <div className="space-y-2">
                  {["Beginner", "Intermediate", "Advanced", "Expert"].map((level, index) => (
                    <label key={index} className="flex cursor-pointer items-center gap-2">
                      <input
                        type="checkbox"
                        className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                      />
                      <span className="text-sm">{level}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="mb-6">
                <h4 className="mb-3 font-medium">Location</h4>
                <div className="space-y-4">
                  <div>
                    <label className="mb-1 block text-sm">Distance (miles)</label>
                    <input
                      type="range"
                      min="1"
                      max="100"
                      defaultValue="25"
                      className="h-2 w-full cursor-pointer appearance-none rounded-lg bg-gray-200 dark:bg-gray-700"
                    />
                    <div className="mt-1 flex justify-between text-xs text-muted-foreground">
                      <span>1</span>
                      <span>25</span>
                      <span>100</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <h4 className="mb-3 font-medium">Availability</h4>
                <div className="space-y-2">
                  {["Weekdays", "Weekends", "Evenings", "Mornings"].map((time, index) => (
                    <label key={index} className="flex cursor-pointer items-center gap-2">
                      <input
                        type="checkbox"
                        className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                      />
                      <span className="text-sm">{time}</span>
                    </label>
                  ))}
                </div>
              </div>

              <Button className="w-full">Apply Filters</Button>
            </div>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
            {skills.map((skill) => (
              <div key={skill.id} className="card-hover rounded-xl border bg-card p-6 shadow-sm">
                <div className="mb-4 flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className="relative">
                      <Image
                        src={skill.user.avatar || "/placeholder.svg"}
                        alt={skill.user.name}
                        width={48}
                        height={48}
                        className="rounded-full"
                      />
                      {skill.user.verified && (
                        <div className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-[10px] text-white">
                          <Check className="h-3 w-3" />
                        </div>
                      )}
                    </div>
                    <div>
                      <h4 className="font-medium">{skill.user.name}</h4>
                      <div className="flex items-center gap-1 text-sm text-muted-foreground">
                        <Star className="h-3 w-3 fill-accent text-accent" />
                        <span>{skill.rating}</span>
                        <span>({skill.reviews} reviews)</span>
                      </div>
                    </div>
                  </div>
                  <span className="rounded-full bg-primary/10 px-2 py-1 text-xs font-medium text-primary">
                    {skill.category}
                  </span>
                </div>

                <h3 className="mb-2 text-xl font-semibold">{skill.title}</h3>
                <p className="mb-4 text-sm text-muted-foreground">{skill.description}</p>

                <div className="mb-4 flex flex-wrap gap-3 text-xs">
                  <div className="flex items-center gap-1 text-muted-foreground">
                    <MapPin className="h-3 w-3" />
                    <span>{skill.distance}</span>
                  </div>
                  <div className="flex items-center gap-1 text-muted-foreground">
                    <span>•</span>
                    <span>{skill.availability}</span>
                  </div>
                  <div className="rounded-full bg-muted px-2 py-0.5 text-xs font-medium">{skill.level}</div>
                </div>

                <div className="flex gap-2">
                  <Button className="flex-1">Request Skill</Button>
                  <Button variant="outline" size="icon">
                    <MessageCircle className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
