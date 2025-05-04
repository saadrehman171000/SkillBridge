"use client"

import { useState } from "react"
import { CreditCard, Lock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function PaymentGateway() {
  const [paymentMethod, setPaymentMethod] = useState("credit-card")

  return (
    <section className="bg-muted py-20">
      <div className="container-custom">
        <div className="mx-auto max-w-3xl">
          <div className="mb-10 text-center">
            <h2 className="heading-2 mb-4">Secure Payment</h2>
            <p className="text-lg text-muted-foreground">
              Your payment information is securely processed and encrypted. We never store your full credit card
              details.
            </p>
          </div>

          <div className="rounded-xl border bg-card p-8 shadow-md">
            <div className="mb-8">
              <h3 className="mb-4 text-xl font-semibold">Payment Method</h3>
              <RadioGroup
                defaultValue="credit-card"
                onValueChange={setPaymentMethod}
                className="grid gap-4 md:grid-cols-3"
              >
                <div>
                  <RadioGroupItem value="credit-card" id="credit-card" className="peer sr-only" />
                  <Label
                    htmlFor="credit-card"
                    className="flex cursor-pointer flex-col items-center rounded-lg border bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary peer-data-[state=checked]:bg-primary/10"
                  >
                    <CreditCard className="mb-2 h-6 w-6" />
                    <span className="font-medium">Credit Card</span>
                  </Label>
                </div>
                <div>
                  <RadioGroupItem value="paypal" id="paypal" className="peer sr-only" />
                  <Label
                    htmlFor="paypal"
                    className="flex cursor-pointer flex-col items-center rounded-lg border bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary peer-data-[state=checked]:bg-primary/10"
                  >
                    <svg className="mb-2 h-6 w-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M19.5 6.5C19.5 9.26 17.26 11.5 14.5 11.5H10.5C7.74 11.5 5.5 9.26 5.5 6.5C5.5 3.74 7.74 1.5 10.5 1.5H14.5C17.26 1.5 19.5 3.74 19.5 6.5Z"
                        className="fill-primary"
                      />
                      <path
                        d="M18.5 12.5C18.5 15.26 16.26 17.5 13.5 17.5H9.5C6.74 17.5 4.5 15.26 4.5 12.5C4.5 9.74 6.74 7.5 9.5 7.5H13.5C16.26 7.5 18.5 9.74 18.5 12.5Z"
                        className="fill-primary/70"
                      />
                    </svg>
                    <span className="font-medium">PayPal</span>
                  </Label>
                </div>
                <div>
                  <RadioGroupItem value="apple-pay" id="apple-pay" className="peer sr-only" />
                  <Label
                    htmlFor="apple-pay"
                    className="flex cursor-pointer flex-col items-center rounded-lg border bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary peer-data-[state=checked]:bg-primary/10"
                  >
                    <svg className="mb-2 h-6 w-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M17.2 12.2C17.2 9.2 19.6 8 19.7 7.9C18.5 6.1 16.7 5.8 16 5.8C14.4 5.7 12.9 6.8 12.1 6.8C11.2 6.8 10 5.8 8.6 5.8C6.8 5.8 5.1 6.9 4.2 8.6C2.3 12 3.7 17 5.5 19.7C6.4 21 7.5 22.5 8.9 22.5C10.3 22.4 10.8 21.6 12.5 21.6C14.1 21.6 14.6 22.5 16.1 22.4C17.6 22.4 18.6 21 19.5 19.7C20.5 18.2 20.9 16.7 21 16.6C20.9 16.5 17.3 15.2 17.2 12.2Z"
                        className="fill-current"
                      />
                      <path
                        d="M15.1 4.4C15.8 3.5 16.3 2.3 16.2 1C15.1 1.1 13.8 1.7 13 2.6C12.3 3.4 11.7 4.6 11.8 5.9C13 6 14.3 5.3 15.1 4.4Z"
                        className="fill-current"
                      />
                    </svg>
                    <span className="font-medium">Apple Pay</span>
                  </Label>
                </div>
              </RadioGroup>
            </div>

            {paymentMethod === "credit-card" && (
              <div className="space-y-6">
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="card-name">Cardholder Name</Label>
                    <Input id="card-name" placeholder="John Doe" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="card-number">Card Number</Label>
                    <Input id="card-number" placeholder="1234 5678 9012 3456" />
                  </div>
                </div>

                <div className="grid gap-4 md:grid-cols-3">
                  <div className="space-y-2">
                    <Label htmlFor="expiry-month">Expiry Month</Label>
                    <Select>
                      <SelectTrigger id="expiry-month">
                        <SelectValue placeholder="Month" />
                      </SelectTrigger>
                      <SelectContent>
                        {Array.from({ length: 12 }, (_, i) => (
                          <SelectItem key={i + 1} value={(i + 1).toString().padStart(2, "0")}>
                            {(i + 1).toString().padStart(2, "0")}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="expiry-year">Expiry Year</Label>
                    <Select>
                      <SelectTrigger id="expiry-year">
                        <SelectValue placeholder="Year" />
                      </SelectTrigger>
                      <SelectContent>
                        {Array.from({ length: 10 }, (_, i) => (
                          <SelectItem key={i} value={(new Date().getFullYear() + i).toString()}>
                            {new Date().getFullYear() + i}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="cvv">CVV</Label>
                    <Input id="cvv" placeholder="123" />
                  </div>
                </div>
              </div>
            )}

            {paymentMethod === "paypal" && (
              <div className="rounded-lg bg-muted p-6 text-center">
                <p className="mb-4">You will be redirected to PayPal to complete your payment securely.</p>
                <Button className="w-full">Continue to PayPal</Button>
              </div>
            )}

            {paymentMethod === "apple-pay" && (
              <div className="rounded-lg bg-muted p-6 text-center">
                <p className="mb-4">Click the button below to pay with Apple Pay.</p>
                <Button className="w-full bg-black text-white hover:bg-gray-800">
                  <svg className="mr-2 h-5 w-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M17.2 12.2C17.2 9.2 19.6 8 19.7 7.9C18.5 6.1 16.7 5.8 16 5.8C14.4 5.7 12.9 6.8 12.1 6.8C11.2 6.8 10 5.8 8.6 5.8C6.8 5.8 5.1 6.9 4.2 8.6C2.3 12 3.7 17 5.5 19.7C6.4 21 7.5 22.5 8.9 22.5C10.3 22.4 10.8 21.6 12.5 21.6C14.1 21.6 14.6 22.5 16.1 22.4C17.6 22.4 18.6 21 19.5 19.7C20.5 18.2 20.9 16.7 21 16.6C20.9 16.5 17.3 15.2 17.2 12.2Z"
                      fill="white"
                    />
                    <path
                      d="M15.1 4.4C15.8 3.5 16.3 2.3 16.2 1C15.1 1.1 13.8 1.7 13 2.6C12.3 3.4 11.7 4.6 11.8 5.9C13 6 14.3 5.3 15.1 4.4Z"
                      fill="white"
                    />
                  </svg>
                  Pay
                </Button>
              </div>
            )}

            <div className="mt-8 flex items-center justify-between">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Lock className="h-4 w-4" />
                <span>Secure payment powered by Stripe</span>
              </div>
              <Button className="bg-gradient-to-r from-primary to-secondary">Complete Payment</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
