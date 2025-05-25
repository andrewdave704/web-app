"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Eye, Smartphone, CheckCircle } from "lucide-react"
import Link from "next/link"

export default function Step2ChooseDevice() {
  const [selectedDevice, setSelectedDevice] = useState<"iphone" | "android" | null>(null)

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
          <div className="max-w-6xl mx-auto">
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
                  <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">
                    2
                  </div>
                  <span className="ml-2 text-white font-medium">Choose Device</span>
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

            {/* Title */}
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold text-white mb-4">
                Which device do you want to monitor?
              </h1>
              <p className="text-xl text-blue-100 max-w-2xl mx-auto">
                Select the type of device you'll be monitoring. Don't worry, you can add more devices later.
              </p>
            </div>

            {/* Device Options */}
            <div className="flex justify-center gap-6 mb-12">
              {/* iPhone */}
              <Card
                className={`eyezy-card-gradient border-white/20 hover:border-blue-400/50 transition-all duration-300 cursor-pointer group ${
                  selectedDevice === "iphone" ? "ring-4 ring-blue-400 border-blue-400" : ""
                }`}
                onClick={() => setSelectedDevice("iphone")}
              >
                <CardContent className="p-8 text-center">
                  <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-gray-400 to-gray-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Smartphone className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">iPhone</h3>
                  <p className="text-blue-100 text-sm mb-4">iOS 9.0 and above</p>
                  <div className="space-y-2 text-left">
                    <div className="flex items-center text-green-400 text-sm">
                      <CheckCircle className="w-4 h-4 mr-2" />
                      <span>Social Media Monitoring</span>
                    </div>
                    <div className="flex items-center text-green-400 text-sm">
                      <CheckCircle className="w-4 h-4 mr-2" />
                      <span>Location Tracking</span>
                    </div>
                    <div className="flex items-center text-green-400 text-sm">
                      <CheckCircle className="w-4 h-4 mr-2" />
                      <span>iCloud Sync</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Android Phone */}
              <Card
                className={`eyezy-card-gradient border-white/20 hover:border-blue-400/50 transition-all duration-300 cursor-pointer group ${
                  selectedDevice === "android" ? "ring-4 ring-blue-400 border-blue-400" : ""
                }`}
                onClick={() => setSelectedDevice("android")}
              >
                <CardContent className="p-8 text-center">
                  <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-green-400 to-green-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Smartphone className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">Android Phone</h3>
                  <p className="text-blue-100 text-sm mb-4">Android 5.0 and above</p>
                  <div className="space-y-2 text-left">
                    <div className="flex items-center text-green-400 text-sm">
                      <CheckCircle className="w-4 h-4 mr-2" />
                      <span>Full App Access</span>
                    </div>
                    <div className="flex items-center text-green-400 text-sm">
                      <CheckCircle className="w-4 h-4 mr-2" />
                      <span>Screen Recording</span>
                    </div>
                    <div className="flex items-center text-green-400 text-sm">
                      <CheckCircle className="w-4 h-4 mr-2" />
                      <span>Keylogger</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Continue Button */}
            <div className="text-center">
              <Link href="/step-3-choose-plan">
                <Button
                  className="bg-eyezy-coral hover:bg-eyezy-coral text-white font-semibold px-12 py-3 text-lg"
                  disabled={!selectedDevice}
                >
                  Continue
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
