import Image from "next/image"
import { Star } from "lucide-react"

export default function Testimonials() {
  const testimonials = [
    {
      quote:
        "SkillBridge helped me learn web development by trading my graphic design skills. The AI matching was spot on!",
      name: "Alex Johnson",
      role: "Graphic Designer",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
      rating: 5,
    },
    {
      quote: "I taught Spanish and learned photography. This platform has changed how I think about skill development.",
      name: "Maria Rodriguez",
      role: "Language Teacher",
      avatar: "https://randomuser.me/api/portraits/women/44.jpg",
      rating: 5,
    },
    {
      quote:
        "As a retired carpenter, I wanted to share my knowledge while learning about computers. SkillBridge made it possible.",
      name: "Robert Chen",
      role: "Retired Carpenter",
      avatar: "https://randomuser.me/api/portraits/men/65.jpg",
      rating: 4,
    },
  ]

  return (
    <section className="bg-background py-20">
      <div className="container-custom">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <div className="mb-3 inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary dark:bg-primary/20">
            Testimonials
          </div>
          <h2 className="heading-2 mb-4">What Our Community Says</h2>
          <p className="text-lg text-muted-foreground">
            Hear from people who have exchanged skills and grown their capabilities through SkillBridge.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="card-hover relative overflow-hidden rounded-xl border bg-card p-6 shadow-sm">
              <div className="mb-4 flex">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-5 w-5 ${
                      i < testimonial.rating ? "fill-accent text-accent" : "fill-muted text-muted"
                    }`}
                  />
                ))}
              </div>
              <p className="mb-6 text-card-foreground">{testimonial.quote}</p>
              <div className="flex items-center gap-3">
                <Image
                  src={testimonial.avatar || "/placeholder.svg"}
                  alt={testimonial.name}
                  width={48}
                  height={48}
                  className="rounded-full"
                />
                <div>
                  <h4 className="font-semibold">{testimonial.name}</h4>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>

              <div className="absolute -right-4 -top-4 text-6xl opacity-10">"</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
