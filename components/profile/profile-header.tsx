import Image from "next/image"
import { MapPin, Calendar, Star, Check } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function ProfileHeader() {
  return (
    <section className="bg-gradient-to-r from-primary to-secondary py-16">
      <div className="container-custom">
        <div className="flex flex-wrap items-center justify-between gap-8">
          <div className="flex flex-wrap items-center gap-6">
            <div className="relative">
              <Image
                src="/placeholder.svg?height=120&width=120"
                alt="User Avatar"
                width={120}
                height={120}
                className="rounded-full border-4 border-white"
              />
              <div className="absolute -right-2 bottom-3 flex h-8 w-8 items-center justify-center rounded-full bg-primary text-white">
                <Check className="h-4 w-4" />
              </div>
            </div>

            <div className="text-white">
              <h1 className="mb-2 text-3xl font-bold">Alex Johnson</h1>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-1 text-white/90">
                  <MapPin className="h-4 w-4" />
                  <span>Seattle, WA</span>
                </div>
                <div className="flex items-center gap-1 text-white/90">
                  <Calendar className="h-4 w-4" />
                  <span>Member since Jan 2023</span>
                </div>
                <div className="flex items-center gap-1 text-white/90">
                  <Star className="h-4 w-4" />
                  <span>4.9 (36 reviews)</span>
                </div>
              </div>
              <p className="mt-2 max-w-xl text-white/90">
                Web developer and designer with 5+ years of experience. I love teaching others and learning new skills.
                Currently looking to exchange web development knowledge for graphic design lessons.
              </p>
            </div>
          </div>

          <div className="flex gap-3">
            <Button variant="outline" className="bg-white/10 text-white hover:bg-white/20">
              Edit Profile
            </Button>
            <Button variant="outline" className="bg-white/10 text-white hover:bg-white/20">
              Settings
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
