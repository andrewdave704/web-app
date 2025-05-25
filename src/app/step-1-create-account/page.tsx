import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Eye, Shield, CheckCircle, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function Step1CreateAccount() {
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
          <div className="max-w-4xl mx-auto">
            {/* Progress Bar */}
            <div className="mb-12">
              <div className="flex items-center justify-center space-x-4 mb-4">
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">
                    1
                  </div>
                  <span className="ml-2 text-white font-medium">Create Account</span>
                </div>
                <div className="w-16 h-1 bg-white/20" />
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center text-white/60 font-bold">
                    2
                  </div>
                  <span className="ml-2 text-white/60 font-medium">Choose Device</span>
                </div>
                <div className="w-16 h-1 bg-white/20" />
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center text-white/60 font-bold">
                    3
                  </div>
                  <span className="ml-2 text-white/60 font-medium">Choose Plan</span>
                </div>
              </div>
            </div>

            <div className="mx-auto max-w-md items-center">
              {/* Left side - Form */}
              <div>
                <Card className="eyezy-card-gradient border-white/20">
                  <CardHeader className="text-center pb-6">
                    <CardTitle className="text-3xl font-bold text-white mb-4">
                      Create account
                    </CardTitle>
                    <p className="text-blue-100 text-lg">
                      Once you’re set up, just log in from any device and see what they’re up to.

                    </p>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="space-y-4">
                      <div>
                        <label className="block text-white font-medium mb-2">Email Address</label>
                        <Input
                          type="email"
                          placeholder="Enter your email address"
                          className="bg-white border-white/20 text-black placeholder-white/60"
                        />
                      </div>

                   
                    </div>

                    <Link href="/step-2-choose-device" className="block">
                      <Button className="w-full bg-eyezy-coral hover:bg-eyezy-coral text-white font-semibold py-3 text-lg">
                        Continue
                        <ArrowRight className="ml-2 w-5 h-5" />
                      </Button>
                    </Link>

                  </CardContent>
                </Card>
              </div>

            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
