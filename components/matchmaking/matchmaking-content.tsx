"use client"

import { useState } from "react"
import Image from "next/image"
import { Zap, MapPin, Star, MessageCircle, Calendar, ChevronRight, Check } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function MatchmakingContent() {
  const [isLoading, setIsLoading] = useState(false)

  const handleFindMatches = () => {
    setIsLoading(true)
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false)
    }, 2000)
  }

  const matches = [
    {
      id: 1,
      matchScore: 95,
      user: {
        name: "Alex Johnson",
        avatar: "/placeholder.svg?height=64&width=64",
        verified: true,
        rating: 4.8,
        reviews: 24,
      },
      offering: "Web Development",
      seeking: "Graphic Design",
      location: "Seattle, WA",
      distance: "2.5 miles",
    },
    {
      id: 2,
      matchScore: 87,
      user: {
        name: "Maria Rodriguez",
        avatar: "/placeholder.svg?height=64&width=64",
        verified: true,
        rating: 4.9,
        reviews: 36,
      },
      offering: "Piano Lessons",
      seeking: "Spanish Conversation",
      location: "Portland, OR",
      distance: "5 miles",
    },
    {
      id: 3,
      matchScore: 82,
      user: {
        name: "Robert Chen",
        avatar: "/placeholder.svg?height=64&width=64",
        verified: false,
        rating: 4.7,
        reviews: 18,
      },
      offering: "Cooking Classes",
      seeking: "Home Repairs",
      location: "San Francisco, CA",
      distance: "3 miles",
    },
  ]

  return (
    <section className="bg-background py-12">
      <div className="container-custom">
        <div className="grid gap-8 lg:grid-cols-[350px_1fr]">
          <div>
            <div className="sticky top-20 rounded-xl border bg-card p-6 shadow-sm">
              <h2 className="mb-6 text-xl font-semibold">Your Preferences</h2>

              <div className="space-y-6">
                <div>
                  <label className="mb-2 block text-sm font-medium">Skills You're Offering</label>
                  <select className="w-full rounded-md border bg-background px-3 py-2 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20">
                    <option value="">Select a skill</option>
                    <option value="webdev">Web Development</option>
                    <option value="graphicdesign">Graphic Design</option>
                    <option value="cooking">Cooking</option>
                    <option value="language">Language Teaching</option>
                    <option value="music">Music Lessons</option>
                  </select>
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium">Skills You're Seeking</label>
                  <select className="w-full rounded-md border bg-background px-3 py-2 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20">
                    <option value="">Select a skill</option>
                    <option value="webdev">Web Development</option>
                    <option value="graphicdesign">Graphic Design</option>
                    <option value="cooking">Cooking</option>
                    <option value="language">Language Teaching</option>
                    <option value="music">Music Lessons</option>
                  </select>
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium">Your Location</label>
                  <input
                    type="text"
                    placeholder="City, State"
                    className="w-full rounded-md border bg-background px-3 py-2 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium">Distance (miles)</label>
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

                <div>
                  <label className="mb-2 block text-sm font-medium">Availability</label>
                  <div className="grid grid-cols-2 gap-2">
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

                <Button className="w-full" onClick={handleFindMatches} disabled={isLoading}>
                  {isLoading ? (
                    <>
                      <svg
                        className="mr-2 h-4 w-4 animate-spin"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      Finding Matches...
                    </>
                  ) : (
                    <>
                      <Zap className="mr-2 h-4 w-4" />
                      Find AI Matches
                    </>
                  )}
                </Button>
              </div>
            </div>
          </div>

          <div>
            <h2 className="mb-6 text-xl font-semibold">Your Matches</h2>

            <div className="space-y-6">
              {matches.map((match) => (
                <div key={match.id} className="card-hover rounded-xl border bg-card p-6 shadow-sm">
                  <div className="flex flex-wrap gap-6">
                    <div className="flex flex-col items-center">
                      <div className="mb-2 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-r from-primary to-secondary text-xl font-bold text-white">
                        {match.matchScore}%
                      </div>
                      <span className="text-sm text-muted-foreground">Match</span>
                    </div>

                    <div className="flex-1">
                      <div className="mb-4 flex flex-wrap items-start justify-between gap-4">
                        <div className="flex items-center gap-3">
                          <div className="relative">
                            <Image
                              src={match.user.avatar || "/placeholder.svg"}
                              alt={match.user.name}
                              width={56}
                              height={56}
                              className="rounded-full"
                            />
                            {match.user.verified && (
                              <div className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-[10px] text-white">
                                <Check className="h-3 w-3" />
                              </div>
                            )}
                          </div>
                          <div>
                            <h4 className="font-medium">{match.user.name}</h4>
                            <div className="flex items-center gap-1 text-sm text-muted-foreground">
                              <Star className="h-3 w-3 fill-accent text-accent" />
                              <span>{match.user.rating}</span>
                              <span>({match.user.reviews} reviews)</span>
                            </div>
                            <div className="flex items-center gap-1 text-sm text-muted-foreground">
                              <MapPin className="h-3 w-3" />
                              <span>{match.distance}</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="mb-4 rounded-lg bg-muted p-4">
                        <div className="flex flex-wrap items-center gap-4">
                          <div>
                            <div className="text-xs text-muted-foreground">Offering:</div>
                            <div className="font-medium">{match.offering}</div>
                          </div>
                          <ChevronRight className="h-5 w-5 text-muted-foreground" />
                          <div>
                            <div className="text-xs text-muted-foreground">Seeking:</div>
                            <div className="font-medium">{match.seeking}</div>
                          </div>
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-3">
                        <Button variant="outline" className="flex items-center gap-2">
                          <MessageCircle className="h-4 w-4" />
                          Message
                        </Button>
                        <Button className="flex items-center gap-2">
                          <Calendar className="h-4 w-4" />
                          Schedule
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
