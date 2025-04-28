import { Zap, Users, Clock, Shield, ArrowRight } from "lucide-react"

export default function Features() {
  const features = [
    {
      icon: <Zap className="h-6 w-6" />,
      title: "AI-Powered Matching",
      description: "Our intelligent algorithm finds the perfect skill matches based on your needs and location.",
      color: "primary",
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Community Driven",
      description: "Join a thriving community of skilled individuals eager to exchange knowledge and services.",
      color: "secondary",
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Real-time Exchange",
      description: "Arrange skill exchanges quickly and efficiently with our intuitive scheduling system.",
      color: "accent",
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Verified Users",
      description: "Trust our verification system to ensure quality exchanges with reliable community members.",
      color: "primary",
    },
  ]

  return (
    <section className="bg-background py-20">
      <div className="container-custom">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <div className="mb-3 inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary dark:bg-primary/20">
            Features
          </div>
          <h2 className="heading-2 mb-4">Why Choose SkillBridge?</h2>
          <p className="text-lg text-muted-foreground">
            Our platform makes skill exchange simple, secure, and beneficial for everyone involved.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <div key={index} className="card-hover relative overflow-hidden rounded-xl border bg-card p-6 shadow-sm">
              <div
                className={`mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-${feature.color}/10 text-${feature.color}`}
              >
                {feature.icon}
              </div>
              <h3 className="mb-2 text-xl font-semibold">{feature.title}</h3>
              <p className="mb-4 text-muted-foreground">{feature.description}</p>
              <a href="#" className={`group inline-flex items-center gap-1 text-sm font-medium text-${feature.color}`}>
                Learn more <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>

              <div className={`absolute -right-6 -top-6 h-24 w-24 rounded-full bg-${feature.color}/5 blur-xl`}></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
