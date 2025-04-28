import Image from "next/image"

export default function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "Create Your Profile",
      description: "Sign up and list the skills you can offer and the skills you want to learn or need help with.",
    },
    {
      number: "02",
      title: "Get AI Matches",
      description: "Our AI algorithm will find people in your area with complementary skills and interests.",
    },
    {
      number: "03",
      title: "Connect & Arrange",
      description: "Chat with your matches and schedule a time to exchange skills or services.",
    },
    {
      number: "04",
      title: "Exchange & Rate",
      description: "Meet up, share your skills, and rate your experience to help build trust in the community.",
    },
  ]

  return (
    <section className="relative overflow-hidden bg-muted py-20">
      <div className="container-custom relative z-10">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <div className="mb-3 inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary dark:bg-primary/20">
            How It Works
          </div>
          <h2 className="heading-2 mb-4">Simple Four-Step Process</h2>
          <p className="text-lg text-muted-foreground">
            Our simple four-step process makes skill exchange easy and accessible for everyone.
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="relative order-2 mx-auto max-w-md lg:order-1 lg:max-w-none">
            <div className="relative z-10 overflow-hidden rounded-2xl shadow-2xl">
              <Image
                src="/steps.png"
                alt="How SkillBridge works"
                width={300}
                height={300}
                className="w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 -z-10 h-full w-full rounded-2xl bg-gradient-to-r from-primary to-secondary opacity-10"></div>

            <div className="absolute -left-12 -top-12 -z-10 h-64 w-64 rounded-full bg-primary/10 blur-3xl"></div>
          </div>

          <div className="order-1 lg:order-2">
            <div className="space-y-10">
              {steps.map((step, index) => (
                <div key={index} className="relative pl-16">
                  {index !== steps.length - 1 && (
                    <div className="absolute bottom-0 left-6 top-14 w-px bg-gradient-to-b from-primary/60 to-primary/0"></div>
                  )}
                  <div className="absolute left-0 top-0 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-lg font-bold text-primary">
                    {step.number}
                  </div>
                  <h3 className="mb-2 text-xl font-semibold">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="absolute inset-0 -z-10 opacity-50">
        <div className="absolute -left-1/4 -top-1/4 h-96 w-96 rounded-full bg-primary/10 blur-3xl"></div>
        <div className="absolute -bottom-1/4 -right-1/4 h-96 w-96 rounded-full bg-secondary/10 blur-3xl"></div>
      </div>
    </section>
  )
}
