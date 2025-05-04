export default function AboutStory() {
    const milestones = [
      {
        year: "2021",
        title: "The Beginning",
        description:
          "SkillBridge was founded with a simple idea: create a platform where people could exchange skills and knowledge directly, without monetary transactions.",
      },
      {
        year: "2022",
        title: "AI Integration",
        description:
          "We integrated advanced AI algorithms to better match users based on their skills, interests, and learning goals, significantly improving the quality of connections.",
      },
      {
        year: "2023",
        title: "Global Expansion",
        description:
          "SkillBridge expanded globally, reaching users in over 50 countries and supporting multiple languages to create a truly international community of skill exchangers.",
      },
      {
        year: "2024",
        title: "Community Milestone",
        description:
          "We celebrated reaching 100,000 active users and over 250,000 successful skill exchanges, marking a significant milestone in our mission to democratize learning.",
      },
    ]
  
    return (
      <section className="bg-background py-20">
        <div className="container-custom">
          <div className="mb-12 text-center">
            <div className="mb-3 inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary dark:bg-primary/20">
              Our Story
            </div>
            <h2 className="heading-2 mb-4">The SkillBridge Journey</h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              From a simple idea to a global platform, our journey has been driven by a passion for connecting people and
              facilitating knowledge exchange.
            </p>
          </div>
  
          <div className="relative mx-auto max-w-4xl">
            <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-border"></div>
  
            {milestones.map((milestone, index) => (
              <div
                key={index}
                className={`relative mb-12 flex ${index % 2 === 0 ? "flex-row-reverse" : ""} items-center gap-8`}
              >
                <div className="flex-1">
                  <div className="card-hover rounded-xl border bg-card p-6 shadow-sm">
                    <div className="mb-2 text-xl font-bold text-primary">{milestone.year}</div>
                    <h3 className="mb-3 text-xl font-semibold">{milestone.title}</h3>
                    <p className="text-muted-foreground">{milestone.description}</p>
                  </div>
                </div>
  
                <div className="absolute left-1/2 z-10 flex h-12 w-12 -translate-x-1/2 items-center justify-center rounded-full bg-gradient-to-r from-primary to-secondary text-white">
                  {index + 1}
                </div>
  
                <div className="flex-1"></div>
              </div>
            ))}
          </div>
  
          <div className="mt-16 rounded-xl bg-muted p-8 text-center">
            <h3 className="mb-4 text-2xl font-semibold">Join Us on Our Journey</h3>
            <p className="mb-6 text-muted-foreground">
              We're just getting started, and we'd love for you to be part of our story. Join SkillBridge today and help
              us build a world where knowledge is freely shared and everyone has the opportunity to learn and grow.
            </p>
            <a
              href="/signup"
              className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-primary to-secondary px-6 py-3 font-medium text-white shadow-md transition-all hover:-translate-y-0.5 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
            >
              Join SkillBridge
            </a>
          </div>
        </div>
      </section>
    )
  }
  