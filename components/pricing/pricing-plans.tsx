"use client"

import { useState } from "react"
import { Check, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function PricingPlans() {
  const [billingCycle, setBillingCycle] = useState("monthly")

  const plans = [
    {
      name: "Free",
      description: "Perfect for getting started with skill exchanges",
      price: {
        monthly: 0,
        annually: 0,
      },
      features: [
        { name: "Up to 5 skill listings", included: true },
        { name: "Basic AI matchmaking", included: true },
        { name: "Community chat access", included: true },
        { name: "Standard user profile", included: true },
        { name: "Priority matches", included: false },
        { name: "Verified user badge", included: false },
        { name: "Advanced analytics", included: false },
        { name: "Priority support", included: false },
      ],
      buttonText: "Get Started",
      buttonVariant: "outline",
      popular: false,
    },
    {
      name: "Pro",
      description: "For active skill exchangers who want more features",
      price: {
        monthly: 9.99,
        annually: 7.99,
      },
      features: [
        { name: "Unlimited skill listings", included: true },
        { name: "Advanced AI matchmaking", included: true },
        { name: "Community chat access", included: true },
        { name: "Enhanced user profile", included: true },
        { name: "Priority matches", included: true },
        { name: "Verified user badge", included: true },
        { name: "Advanced analytics", included: false },
        { name: "Priority support", included: false },
      ],
      buttonText: "Subscribe Now",
      buttonVariant: "default",
      popular: true,
    },
    {
      name: "Premium",
      description: "For power users who want the ultimate experience",
      price: {
        monthly: 19.99,
        annually: 15.99,
      },
      features: [
        { name: "Unlimited skill listings", included: true },
        { name: "Premium AI matchmaking", included: true },
        { name: "Community chat access", included: true },
        { name: "Premium user profile", included: true },
        { name: "Priority matches", included: true },
        { name: "Verified user badge", included: true },
        { name: "Advanced analytics", included: true },
        { name: "Priority support", included: true },
      ],
      buttonText: "Subscribe Now",
      buttonVariant: "default",
      popular: false,
    },
  ]

  return (
    <section className="bg-background py-20">
      <div className="container-custom">
        <div className="mb-12 flex flex-col items-center justify-center">
          <div className="mb-8 flex items-center gap-3 rounded-full bg-muted p-1">
            <button
              className={`rounded-full px-6 py-2 text-sm font-medium transition-all ${
                billingCycle === "monthly"
                  ? "bg-white text-primary shadow-md dark:bg-gray-800"
                  : "text-muted-foreground"
              }`}
              onClick={() => setBillingCycle("monthly")}
            >
              Monthly
            </button>
            <button
              className={`rounded-full px-6 py-2 text-sm font-medium transition-all ${
                billingCycle === "annually"
                  ? "bg-white text-primary shadow-md dark:bg-gray-800"
                  : "text-muted-foreground"
              }`}
              onClick={() => setBillingCycle("annually")}
            >
              Annually
            </button>
          </div>
          {billingCycle === "annually" && (
            <div className="rounded-full bg-accent/10 px-4 py-1 text-sm font-medium text-accent">
              Save up to 20% with annual billing
            </div>
          )}
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-xl border bg-card p-8 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg ${
                plan.popular ? "border-primary" : ""
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-primary to-secondary px-4 py-1 text-xs font-semibold text-white">
                  Most Popular
                </div>
              )}
              <div className="mb-6">
                <h3 className="mb-1 text-2xl font-bold">{plan.name}</h3>
                <p className="text-sm text-muted-foreground">{plan.description}</p>
              </div>

              <div className="mb-6">
                <div className="flex items-baseline">
                  <span className="text-4xl font-bold">
                    ${billingCycle === "monthly" ? plan.price.monthly : plan.price.annually}
                  </span>
                  <span className="ml-1 text-muted-foreground">
                    {plan.price.monthly > 0
                      ? `/${billingCycle === "monthly" ? "month" : "month, billed annually"}`
                      : ""}
                  </span>
                </div>
              </div>

              <div className="mb-8 space-y-3">
                {plan.features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    {feature.included ? (
                      <Check className="h-5 w-5 text-green-500" />
                    ) : (
                      <X className="h-5 w-5 text-muted-foreground" />
                    )}
                    <span className={feature.included ? "" : "text-muted-foreground"}>{feature.name}</span>
                  </div>
                ))}
              </div>

              <Button
                className={`w-full ${plan.popular ? "bg-gradient-to-r from-primary to-secondary" : ""}`}
                variant={plan.buttonVariant === "outline" ? "outline" : "default"}
              >
                {plan.buttonText}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
