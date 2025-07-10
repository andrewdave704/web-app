"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Eye, Star, CheckCircle, Crown, Shield, Zap } from "lucide-react"
import Link from "next/link"

export default function Step3ChoosePlan() {
  const handlePlanSelection = () => {
    // Redirect to WhatsApp
    const phoneNumber = "19847428400"
    const message = "Hi! I'm interested in Eyezy phone monitoring software. Can you help me get started?"
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank')
  }

  return (
    <div className="min-h-screen eyezy-gradient">
      {/* Header */}
      <header className="relative z-10 border-b border-white/10">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-2">
              <Eye className="h-8 w-8 text-blue-400" />
              <span className="text-2xl font-bold text-white">Eyezy</span>
            </Link>

            <div className="flex items-center space-x-4">
              <Button variant="ghost" className="text-white hover:text-blue-400">
                Log In
              </Button>
            </div>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            {/* Progress Bar */}
            <div className="mb-12">
              <div className="flex items-center justify-center space-x-4 mb-4">
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white font-bold">
                    ✓
                  </div>
                  <span className="ml-2 text-green-400 font-medium">Create Account</span>
                </div>
                <div className="w-16 h-1 bg-green-500" />
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white font-bold">
                    ✓
                  </div>
                  <span className="ml-2 text-green-400 font-medium">Choose Device</span>
                </div>
                <div className="w-16 h-1 bg-green-500" />
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">
                    3
                  </div>
                  <span className="ml-2 text-white font-medium">Choose Plan</span>
                </div>
              </div>
            </div>

            {/* Title */}
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold text-white mb-4">
                Choose Your Eyezy Plan
              </h1>
              <p className="text-xl text-blue-100 max-w-2xl mx-auto mb-6">
                Select the perfect plan for your family's monitoring needs. All plans include a 14-day money-back guarantee.
              </p>
              <div className="flex items-center justify-center space-x-2">
                <Star className="w-5 h-5 text-yellow-400 fill-current" />
                <Star className="w-5 h-5 text-yellow-400 fill-current" />
                <Star className="w-5 h-5 text-yellow-400 fill-current" />
                <Star className="w-5 h-5 text-yellow-400 fill-current" />
                <Star className="w-5 h-5 text-yellow-400 fill-current" />
                <span className="text-white ml-2">4.8/5 from 10,000+ satisfied parents</span>
              </div>
            </div>

            {/* Pricing Plans */}
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {/* Basic Plan */}
              <Card className="eyezy-card-gradient border-white/20 hover:border-blue-400/50 transition-all duration-300">
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Shield className="w-8 h-8 text-blue-400" />
                  </div>
                  <CardTitle className="text-2xl font-bold text-white">Basic</CardTitle>
                  <p className="text-blue-100">Perfect for single device monitoring</p>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-white mb-2">$104.99</div>
                    <p className="text-blue-200">1 month</p>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center text-white">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      <span>Includes all premium features
</span>
                    </div>
                    <div className="flex items-center text-white">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      <span>For all iOS and Android devices</span>
                    </div>
                    <div className="flex items-center text-white">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      <span>
Invisible mode</span>
                    </div>
              
                  </div>

                  <Button
                    onClick={handlePlanSelection}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3"
                  >
                    Choose Basic Plan
                  </Button>
                </CardContent>
              </Card>

              {/* Premium Plan */}
              <Card className="eyezy-card-gradient border-orange-400/50 relative transform scale-105">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-orange-500 text-white px-4 py-1 rounded-full text-sm font-bold">
                    MOST POPULAR
                  </span>
                </div>
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 bg-orange-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Crown className="w-8 h-8 text-orange-400" />
                  </div>
                  <CardTitle className="text-2xl font-bold text-white">Premium</CardTitle>
                  <p className="text-blue-100">Best value for families</p>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-white mb-2">$199.99</div>
                    <p className="text-blue-200">2 months</p>
                  </div>

                     <div className="space-y-3">
                    <div className="flex items-center text-white">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      <span>Includes all premium features
</span>
                    </div>
                    <div className="flex items-center text-white">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      <span>For all iOS and Android devices</span>
                    </div>
                    <div className="flex items-center text-white">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      <span>
Invisible mode</span>
                    </div>
              
                  </div>

                  <Button
                    onClick={handlePlanSelection}
                    className="w-full bg-eyezy-coral hover:bg-eyezy-coral text-white font-semibold py-3"
                  >
                    Choose Premium Plan
                  </Button>
                </CardContent>
              </Card>

              {/* Ultimate Plan */}
              <Card className="eyezy-card-gradient border-white/20 hover:border-purple-400/50 transition-all duration-300">
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Zap className="w-8 h-8 text-purple-400" />
                  </div>
                  <CardTitle className="text-2xl font-bold text-white">Ultimate</CardTitle>
                  <p className="text-blue-100">Complete family protection</p>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-white mb-2">$349.99</div>
                    <p className="text-blue-200">3 months</p>
                  </div>

                   <div className="space-y-3">
                    <div className="flex items-center text-white">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      <span>Includes all premium features
</span>
                    </div>
                    <div className="flex items-center text-white">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      <span>For all iOS and Android devices</span>
                    </div>
                    <div className="flex items-center text-white">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      <span>
Invisible mode</span>
                    </div>
              
                  </div>

                  <Button
                    onClick={handlePlanSelection}
                    className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3"
                  >
                    Choose Ultimate Plan
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Money Back Guarantee */}
            <div className="text-center mb-8">
              <div className="inline-flex items-center bg-green-500/10 border border-green-400/30 rounded-full px-6 py-3">
                <CheckCircle className="w-6 h-6 text-green-400 mr-3" />
                <span className="text-green-400 font-semibold">14-Day Money-Back Guarantee</span>
              </div>
            </div>

            {/* Features Comparison */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-white mb-6 text-center">
                Why Choose Eyezy?
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Shield className="w-8 h-8 text-blue-400" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">Bank-Grade Security</h3>
                  <p className="text-blue-100">Your data is encrypted and protected with industry-leading security measures.</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8 text-green-400" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">Easy Setup</h3>
                  <p className="text-blue-100">Get started in minutes with our simple installation process and 24/7 support.</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Eye className="w-8 h-8 text-purple-400" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">Invisible Monitoring</h3>
                  <p className="text-blue-100">Monitor devices completely invisibly without affecting performance or battery life.</p>
                </div>
              </div>
            </div>

            {/* Contact Info */}
            <div className="text-center">
              <p className="text-blue-200 mb-4">
                Need help choosing the right plan? Our experts are here to help!
              </p>
              <Button
                onClick={handlePlanSelection}
                variant="outline"
                className="border-white/30 text-white hover:bg-white/10"
              >
                Contact Us on WhatsApp
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
