import Link from "next/link"
import Image from "next/image"

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-primary/5 to-background pb-16 pt-24 md:pb-20 md:pt-28 lg:pb-24 lg:pt-32">
      <div className="container-custom relative z-10">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
            <div className="mb-6 inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary dark:bg-primary/20">
              ✨ AI-Powered Skill Exchange
            </div>
            <h1 className="heading-1 mb-6">
              Exchange Skills, <span className="gradient-text">Grow Together</span>
            </h1>
            <p className="mb-8 max-w-lg text-lg text-muted-foreground">
              SkillBridge connects you with people who want to trade skills and services. Our AI-powered platform makes
              bartering easy, efficient, and rewarding.
            </p>
            <div className="mb-10 flex flex-wrap gap-4">
              <Link href="/signup" className="btn-primary">
                Get Started
              </Link>
              <Link href="/skills" className="btn-secondary">
                Explore Skills
              </Link>
            </div>
            <div className="flex items-center divide-x">
              <div className="px-4 text-center">
                <div className="text-3xl font-bold text-primary">10k+</div>
                <div className="text-sm text-muted-foreground">Users</div>
              </div>
              <div className="px-4 text-center">
                <div className="text-3xl font-bold text-primary">5k+</div>
                <div className="text-sm text-muted-foreground">Skills</div>
              </div>
              <div className="px-4 text-center">
                <div className="text-3xl font-bold text-primary">15k+</div>
                <div className="text-sm text-muted-foreground">Exchanges</div>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <div className="relative z-10 overflow-hidden rounded-2xl shadow-2xl">
                <Image
                  src="/placeholder.svg?height=500&width=500"
                  alt="People exchanging skills"
                  width={500}
                  height={500}
                  className="w-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 -z-10 h-full w-full rounded-2xl bg-gradient-to-r from-primary to-secondary opacity-10"></div>

              <div className="absolute -left-12 top-1/4 z-20 animate-float rounded-lg bg-white p-3 shadow-lg dark:bg-gray-800">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-md bg-primary/10 text-xl">🎨</div>
                  <div>
                    <div className="text-xs text-muted-foreground">Design Skills</div>
                    <div className="text-sm font-semibold">+28% this month</div>
                  </div>
                </div>
              </div>

              <div
                className="absolute -right-8 bottom-1/4 z-20 animate-float rounded-lg bg-white p-3 shadow-lg dark:bg-gray-800"
                style={{ animationDelay: "1s" }}
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-md bg-primary/10 text-xl">💻</div>
                  <div>
                    <div className="text-xs text-muted-foreground">Tech Exchange</div>
                    <div className="text-sm font-semibold">1,200+ matches</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute inset-0 -z-10 opacity-30">
        <div className="absolute -right-1/4 -top-1/4 h-96 w-96 rounded-full bg-primary/20 blur-3xl"></div>
        <div className="absolute -bottom-1/4 -left-1/4 h-96 w-96 rounded-full bg-secondary/20 blur-3xl"></div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent"></div>
    </section>
  )
}
