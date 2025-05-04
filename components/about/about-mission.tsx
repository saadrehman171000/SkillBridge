import Image from "next/image"
import { Target, Users, Heart, Globe } from "lucide-react"

export default function AboutMission() {
  const values = [
    {
      icon: <Target className="h-6 w-6" />,
      title: "Mission",
      description:
        "To create a global platform that democratizes learning by connecting people who want to exchange skills and knowledge.",
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Community",
      description:
        "We believe in the power of community and the incredible potential that emerges when people share their expertise.",
    },
    {
      icon: <Heart className="h-6 w-6" />,
      title: "Passion",
      description:
        "We're passionate about helping people discover new skills, pursue their interests, and achieve their goals.",
    },
    {
      icon: <Globe className="h-6 w-6" />,
      title: "Accessibility",
      description:
        "We're committed to making skill exchange accessible to everyone, regardless of background or location.",
    },
  ]

  return (
    <section className="bg-background py-20">
      <div className="container-custom">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="relative order-2 lg:order-1">
            <div className="relative z-10 overflow-hidden rounded-2xl shadow-2xl">
              <Image
                src="/myimage.avif"
                alt="SkillBridge team collaboration"
                width={500}
                height={600}
                className="w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 -z-10 h-full w-full rounded-2xl bg-gradient-to-r from-primary to-secondary opacity-10"></div>

            <div className="absolute -right-12 -top-12 -z-10 h-64 w-64 rounded-full bg-primary/10 blur-3xl"></div>
          </div>

          <div className="order-1 flex flex-col justify-center lg:order-2">
            <div className="mb-6 inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary dark:bg-primary/20">
              Our Mission & Values
            </div>
            <h2 className="heading-2 mb-6">Connecting Skills, Empowering People</h2>
            <p className="mb-8 text-lg text-muted-foreground">
              At SkillBridge, we believe that everyone has something valuable to teach and something new to learn. Our
              platform harnesses the power of AI to connect people with complementary skills, creating a vibrant
              ecosystem of knowledge exchange.
            </p>

            <div className="grid gap-6 sm:grid-cols-2">
              {values.map((value, index) => (
                <div key={index} className="rounded-lg border bg-card p-4 shadow-sm">
                  <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    {value.icon}
                  </div>
                  <h3 className="mb-2 text-lg font-semibold">{value.title}</h3>
                  <p className="text-sm text-muted-foreground">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
