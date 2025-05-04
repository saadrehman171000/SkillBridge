import { Linkedin, Twitter, Github } from "lucide-react"

export default function AboutTeam() {
  const team = [
    {
      name: "Saad Rehman",
      role: "Chief Executive Officer",
      bio: "Saad leads SkillBridge with a vision to transform how people exchange skills and knowledge. With a background in technology and education, he's passionate about creating platforms that empower communities.",
      social: {
        linkedin: "https://www.linkedin.com/in/saadrehman17100/",
        twitter: "#",
        github: "https://github.com/saadrehman171000",
      },
    },
    {
      name: "Ali Shaikh",
      role: "Chief Executive Officer",
      bio: "Ali co-leads SkillBridge, focusing on business strategy and growth. His expertise in marketplace dynamics and community building has been instrumental in shaping the platform's success.",
      social: {
        linkedin: "https://www.linkedin.com/in/ali-shaiiikh/",
        twitter: "#",
        github: "https://github.com/shaiiikh",
      },
    },
    {
      name: "Muhammad Sami",
      role: "Chief Technology Officer",
      bio: "Sami oversees all technical aspects of SkillBridge, from architecture to implementation. His innovative approach to AI and matchmaking algorithms powers the core of our platform.",
      social: {
        linkedin: "https://www.linkedin.com/in/samiullah68/",
        twitter: "#",
        github: "#",
      },
    },
    {
      name: "Chaudary Muhammad Usman Saleem",
      role: "Head of Product",
      bio: "Usman leads product development at SkillBridge, ensuring our platform delivers exceptional user experiences. His user-centric approach has been key to creating intuitive and engaging features.",
      social: {
        linkedin: "https://www.linkedin.com/in/ch-usman-saleem/",
        twitter: "#",
        github: "#",
      },
    },
    {
      name: "Muhammad Huzaifa",
      role: "Head of Community",
      bio: "Huzaifa manages community engagement and growth at SkillBridge. His passion for building vibrant communities has helped create a thriving ecosystem of skill exchangers around the world.",
      social: {
        linkedin: "#",
        twitter: "#",
        github: "#",
      },
    },
  ]

  return (
    <section className="bg-muted py-20">
      <div className="container-custom">
        <div className="mb-12 text-center">
          <div className="mb-3 inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary dark:bg-primary/20">
            Our Team
          </div>
          <h2 className="heading-2 mb-4">Meet the People Behind SkillBridge</h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Our diverse team of passionate individuals is committed to revolutionizing skill exchange and building a
            global community of learners and teachers.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {team.map((member, index) => (
            <div
              key={index}
              className="card-hover rounded-xl border bg-card p-6 shadow-sm transition-all hover:-translate-y-2 hover:shadow-lg"
            >
              <div className="text-center">
                <h3 className="mb-1 text-xl font-semibold">{member.name}</h3>
                <p className="mb-3 text-sm font-medium text-primary">{member.role}</p>
                <p className="mb-4 text-sm text-muted-foreground">{member.bio}</p>
                <div className="flex justify-center gap-3">
                  <a
                    href={member.social.linkedin}
                    className="flex h-8 w-8 items-center justify-center rounded-full bg-muted text-muted-foreground transition-colors hover:bg-primary hover:text-white"
                  >
                    <Linkedin className="h-4 w-4" />
                  </a>
                  <a
                    href={member.social.twitter}
                    className="flex h-8 w-8 items-center justify-center rounded-full bg-muted text-muted-foreground transition-colors hover:bg-primary hover:text-white"
                  >
                    <Twitter className="h-4 w-4" />
                  </a>
                  <a
                    href={member.social.github}
                    className="flex h-8 w-8 items-center justify-center rounded-full bg-muted text-muted-foreground transition-colors hover:bg-primary hover:text-white"
                  >
                    <Github className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
