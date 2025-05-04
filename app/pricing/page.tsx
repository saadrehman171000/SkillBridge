import PricingHeader from "@/components/pricing/pricing-header"
import PricingPlans from "@/components/pricing/pricing-plans"
import PaymentGateway from "@/components/pricing/payment-gateway"
import PricingFAQ from "@/components/pricing/pricing-faq"

export default function PricingPage() {
  return (
    <>
      <PricingHeader />
      <PricingPlans />
      <PaymentGateway />
      <PricingFAQ />
    </>
  )
}
