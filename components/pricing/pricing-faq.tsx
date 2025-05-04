"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function PricingFAQ() {
  const faqs = [
    {
      question: "How does billing work?",
      answer:
        "We offer both monthly and annual billing options. With annual billing, you save up to 20% compared to monthly billing. You can change your billing cycle at any time from your account settings.",
    },
    {
      question: "Can I change my plan later?",
      answer:
        "Yes, you can upgrade or downgrade your plan at any time. If you upgrade, you'll be charged the prorated difference. If you downgrade, you'll receive credit towards your next billing cycle.",
    },
    {
      question: "Is there a free trial?",
      answer:
        "We offer a free plan with limited features that you can use indefinitely. This allows you to try out the platform before committing to a paid plan.",
    },
    {
      question: "What payment methods do you accept?",
      answer:
        "We accept all major credit cards (Visa, Mastercard, American Express), PayPal, and Apple Pay. All payments are securely processed and encrypted.",
    },
    {
      question: "How do I cancel my subscription?",
      answer:
        "You can cancel your subscription at any time from your account settings. Your plan will remain active until the end of your current billing cycle, after which you'll be downgraded to the free plan.",
    },
    {
      question: "Do you offer refunds?",
      answer:
        "We offer a 14-day money-back guarantee for all new subscriptions. If you're not satisfied with your purchase, contact our support team within 14 days for a full refund.",
    },
  ]

  return (
    <section className="bg-background py-20">
      <div className="container-custom">
        <div className="mx-auto max-w-3xl">
          <div className="mb-10 text-center">
            <h2 className="heading-2 mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-muted-foreground">
              Have questions about our pricing or payment process? Find answers to common questions below.
            </p>
          </div>

          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="mt-10 text-center">
            <p className="mb-4 text-muted-foreground">Still have questions?</p>
            <a
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-primary to-secondary px-6 py-3 font-medium text-white shadow-md transition-all hover:-translate-y-0.5 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
            >
              Contact Support
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
