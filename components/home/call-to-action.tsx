import Link from "next/link"

export default function CallToAction() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-primary/10 to-secondary/10 py-20">
      <div className="container-custom relative z-10">
        <div className="mx-auto max-w-2xl text-center">
          <div className="mb-3 inline-flex items-center rounded-full bg-white px-3 py-1 text-sm font-medium text-primary dark:bg-gray-800">
            Get Started Today
          </div>
          <h2 className="heading-2 mb-4">Ready to Exchange Skills?</h2>
          <p className="mb-8 text-lg text-muted-foreground">
            Join thousands of people who are already sharing knowledge and growing together. Sign up today and start
            your skill exchange journey.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/signup" className="btn-primary">
              Get Started for Free
            </Link>
            <Link href="/how-it-works" className="btn-secondary">
              Learn More
            </Link>
          </div>
        </div>
      </div>

      <div className="absolute inset-0 -z-10">
        <div className="absolute -left-1/4 top-1/4 h-96 w-96 rounded-full bg-primary/20 blur-3xl"></div>
        <div className="absolute -right-1/4 -top-1/4 h-96 w-96 rounded-full bg-secondary/20 blur-3xl"></div>
      </div>
    </section>
  )
}
