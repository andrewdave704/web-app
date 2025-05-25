import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Eye, Shield, Smartphone, MapPin, MessageSquare, Users, Star, CheckCircle } from "lucide-react"
import Link from "next/link"


export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="relative z-10 border-b border-white/10">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Eye className="h-8 w-8 text-blue-400" />
              <span className="text-2xl font-bold text-white">Eyezy</span>
            </div>

            <div className="hidden md:flex items-center space-x-8">
              <div className="relative group">
                <button className="text-white hover:text-blue-400 transition-colors">Features</button>
              </div>
              <div className="relative group">
                <button className="text-white hover:text-blue-400 transition-colors">Installation</button>
              </div>
              <a href="#about" className="text-white hover:text-blue-400 transition-colors">About us</a>
              <a href="#faq" className="text-white hover:text-blue-400 transition-colors">FAQ</a>
              <a href="#blog" className="text-white hover:text-blue-400 transition-colors">Blog</a>
            </div>

            <div className="flex items-center space-x-4">
              <Button variant="ghost" className="text-white hover:text-blue-400">
                Log In
              </Button>
              <Link href="/step-1-create-account">
                <Button className="bg-eyezy-coral hover:bg-eyezy-coral text-white font-semibold px-6">
                  Try now
                </Button>
              </Link>
            </div>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative eyezy-gradient min-h-screen flex items-center overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-32 h-32 bg-blue-500/20 rounded-full blur-xl animate-pulse" />
          <div className="absolute top-40 right-32 w-24 h-24 bg-purple-500/20 rounded-full blur-lg animate-pulse delay-300" />
          <div className="absolute bottom-32 left-1/3 w-40 h-40 bg-blue-400/10 rounded-full blur-2xl animate-pulse delay-700" />
        </div>

        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <p className="text-blue-300 text-lg font-medium">Meet Eyezy</p>
                <h1 className="text-5xl lg:text-6xl font-bold text-white leading-tight">
                  The most powerful phone monitoring software on the planet.
                </h1>
                <p className="text-xl text-blue-100 leading-relaxed">
                  You deserve a monitoring app for parental control that keeps up with tomorrow's technology. You deserve Eyezy.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/step-1-create-account">
                  <Button size="lg" className="bg-eyezy-coral hover:bg-eyezy-coral text-white font-semibold px-8 py-3">
                    Try now
                  </Button>
                </Link>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white/30 text-white hover:bg-white/10 px-8 py-3"
                >
                  See it in action
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="relative mx-auto w-80 h-80">
                {/* Central Eye Icon */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-40 h-40 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center">
                    <Eye className="w-20 h-20 text-white" />
                  </div>
                </div>

                {/* Floating Elements */}
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-2">
                  <div className="w-12 h-12 rounded-full bg-blue-500/80 flex items-center justify-center animate-bounce">
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                </div>

                <div className="absolute top-16 right-0">
                  <div className="w-10 h-10 rounded-full bg-purple-500/80 flex items-center justify-center animate-pulse">
                    <Smartphone className="w-5 h-5 text-white" />
                  </div>
                </div>

                <div className="absolute bottom-16 left-0">
                  <div className="w-10 h-10 rounded-full bg-blue-400/80 flex items-center justify-center animate-pulse delay-300">
                    <MapPin className="w-5 h-5 text-white" />
                  </div>
                </div>

                <div className="absolute bottom-0 right-8">
                  <div className="w-8 h-8 rounded-full bg-cyan-500/80 flex items-center justify-center animate-bounce delay-500">
                    <MessageSquare className="w-4 h-4 text-white" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid Section */}
      <section className="py-20 eyezy-blue-gradient">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">
              The only monitoring app you'll ever need.
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Life isn't always easy. And as parents, we feel your pain. Technology is constantly changing,
              and it can be tough to keep up with your kids.
            </p>
            <p className="text-lg text-blue-200 mt-4 max-w-4xl mx-auto">
              That's why we created Eyezy, a monitoring solution that thinks one step ahead to help you
              protect your family right now – and well into the future.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Start seeing - no matter what",
                description: "Get up and running with Eyezy, no matter what devices you and your family have",
                icon: Eye
              },
              {
                title: "See what they're up to without being detected",
                description: "Eyezy keeps you invisible while you see their activity",
                icon: Shield
              },
              {
                title: "See their private stuff",
                description: "Texts, social media chats, pics – whatever they're doing, you'll know",
                icon: MessageSquare
              },
              {
                title: "Get alerted if they're doing something wrong",
                description: "Artificial intelligence alerts you so you don't have to constantly monitor their activity",
                icon: CheckCircle
              },
              {
                title: "See it all at a reasonable price",
                description: "It's incredibly affordable at less than $1 per day – even less than a cup of coffee",
                icon: Star
              },
              {
                title: "See without obstacles",
                description: "And if you come across any, our 24/7 Customer Care team is always there for you",
                icon: Users
              }
            ].map((feature) => (
              <Card key={feature.title} className="eyezy-card-gradient border-white/20 hover:border-blue-400/50 transition-all duration-300">
                <CardContent className="p-8">
                  <feature.icon className="w-12 h-12 text-blue-400 mb-6" />
                  <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                  <p className="text-blue-100 leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/step-1-create-account">
              <Button size="lg" className="bg-eyezy-coral hover:bg-eyezy-coral text-white font-semibold px-8 py-3">
                Get started
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* 3 Steps Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              3 easy steps to get started
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl font-bold text-white">1</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Pick your membership</h3>
              <p className="text-gray-600 leading-relaxed">
                We've got plans for every need. Just create your account and choose the plan that's right for your family.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl font-bold text-white">2</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Install Eyezy</h3>
              <p className="text-gray-600 leading-relaxed">
                Our Friendly Installer will show you everything you need to do to get started. We made it easy for you.
                And in case you need some help, our 24/7 support is always there for you!
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-pink-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl font-bold text-white">3</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Dig out the info</h3>
              <p className="text-gray-600 leading-relaxed">
                Log in to your Eyezy Dashboard and discover the truth about those you care about the most.
                Dispel any doubts in your family relationships and make wise data driven decisions.
              </p>
            </div>
          </div>

          <div className="flex justify-center mt-12">
            <div className="relative w-96 h-96 mx-auto">
              <img
                src="https://ext.same-assets.com/1530515331/1947675298.png"
                alt="Woman using phone with Eyezy app"
                className="w-full h-full object-cover rounded-lg"
              />
              <div className="absolute bottom-4 right-4 bg-blue-600 rounded-lg p-4 shadow-lg">
                <Eye className="w-8 h-8 text-white" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <div className="space-y-4">
                <p className="text-blue-600 text-lg font-medium">Our Mission</p>
                <h2 className="text-4xl font-bold text-gray-900 leading-tight">
                  It's time for a phone monitoring app that actually works
                </h2>
              </div>

              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Technology has an important role to play in keeping your loved ones safe. So why are so many
                  parental control apps so outdated? What was good 10 years ago just doesn't cut it today.
                  That's why we created Eyezy.
                </p>
                <p>
                  As parents, we grew tired of monitoring apps that overpromised and underdelivered. We wanted
                  a solution that wasn't just a bunch of mediocre tools slapped together. We wanted something
                  that would give us access to their digital world and arm us with the information we need to
                  keep them safe.
                </p>
                <p>
                  Eyezy – the most powerful, feature-rich phone monitoring app that thinks one step ahead to
                  help you protect your family right now – and well into the future. It's a product built for
                  today's hyper-connected kids and is designed to work seamlessly with modern social media apps.
                </p>
                <p>
                  Our mission is to protect kids by giving parents a simple-to-use and super-powerful solution.
                  And we promise to never rest on our laurels. We're constantly fine-tuning the Eyezy engine
                  to bring you a product that's always ready for whatever's next.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <img
                  src="https://ext.same-assets.com/1530515331/4153611879.png"
                  alt="Family using devices safely"
                  className="w-full rounded-lg shadow-lg"
                />
                <img
                  src="https://ext.same-assets.com/1530515331/2169194513.png"
                  alt="Parent monitoring child's device"
                  className="w-full rounded-lg shadow-lg mt-8"
                />
              </div>
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center shadow-lg">
                <CheckCircle className="w-8 h-8 text-white" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 eyezy-gradient">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="flex justify-center items-center mb-6">
              <Star className="w-8 h-8 text-yellow-400 fill-current" />
              <Star className="w-8 h-8 text-yellow-400 fill-current" />
              <Star className="w-8 h-8 text-yellow-400 fill-current" />
              <Star className="w-8 h-8 text-yellow-400 fill-current" />
              <Star className="w-8 h-8 text-yellow-400 fill-current" />
            </div>
            <h2 className="text-4xl font-bold text-white mb-6">
              Actually lets you see everything
            </h2>
            <p className="text-xl text-blue-100 mb-4">
              Eyezy is truly an all-rounder and offers more than any other app I've checked out.
            </p>
            <p className="text-blue-200 font-medium">Tony Stevenson, USA</p>
          </div>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" className="bg-eyezy-coral hover:bg-eyezy-coral text-white font-semibold px-8 py-3">
              Try now
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white/30 text-white hover:bg-white/10 px-8 py-3"
            >
              See it in action
            </Button>
          </div>
        </div>
      </section>

      {/* Device Compatibility Section */}
      <section className="py-20 eyezy-blue-gradient">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-6">Eyezy monitors:</h2>
            <p className="text-xl text-blue-100 mb-8">
              iPhones | iPads | Android Phones | Android Tablets
            </p>
            <p className="text-lg text-blue-200 mb-8">
              To check if Eyezy works with your device, just enter the model of the phone you would like to monitor
            </p>
          </div>

          <div className="max-w-md mx-auto">
            <div className="flex gap-2">
              <Input
                placeholder="Device model"
                className="bg-white/10 border-white/20 text-white placeholder-white/60"
              />
              <Button className="bg-eyezy-coral hover:bg-eyezy-coral text-white">
                Check
              </Button>
            </div>
            <p className="text-green-400 text-center mt-4 font-medium">
              Great. Your device is compatible
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 eyezy-blue-gradient">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">FAQ</h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="item-1" className="border border-white/20 rounded-lg bg-white/5">
                <AccordionTrigger className="px-6 py-4 text-white hover:text-blue-300 text-left">
                  Why should I invest in a cell phone monitoring app?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-blue-100">
                  You can't always be with them. And you want to trust that they'll always do the right thing. But let's face it. Kids don't always have all the answers. And sometimes, they do things that adults wouldn't do. That's why it's important to have a phone monitoring app installed on their device. It gives you the peace of mind you need to make sure they're living their digital life responsibly.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="border border-white/20 rounded-lg bg-white/5">
                <AccordionTrigger className="px-6 py-4 text-white hover:text-blue-300 text-left">
                  How do I choose the best cell phone monitoring app?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-blue-100">
                  There are a lot of phone monitor solutions out there, each claiming to be the best of the bunch. That's why it's super important to do your research. Some apps do one thing great, while offering other features that are just sub-par. So do a deep dive into the features and see if the monitoring app you're interested in offers what you need.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="border border-white/20 rounded-lg bg-white/5">
                <AccordionTrigger className="px-6 py-4 text-white hover:text-blue-300 text-left">
                  Can you monitor a cell phone without installing software?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-blue-100">
                  That would be fantastic, wouldn't it? Unfortunately, if you want to be able to monitor someone else's phone, you need to install a cell phone monitoring app on their device. And you need to have access to a companion app or web login that lets you see all their information.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="border border-white/20 rounded-lg bg-white/5">
                <AccordionTrigger className="px-6 py-4 text-white hover:text-blue-300 text-left">
                  Will I be able to read someone's text messaging with a mobile monitoring app?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-blue-100">
                  Absolutely. Phone monitoring apps are designed to let you see everything they do on their phone. And that includes text messaging. So whether they're texting their friend down the street or communicating with a stranger halfway around the world that you never met, you can find out by installing a remote phone monitoring app on their device.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5" className="border border-white/20 rounded-lg bg-white/5">
                <AccordionTrigger className="px-6 py-4 text-white hover:text-blue-300 text-left">
                  Is it legal to use an app to monitor phone activity?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-blue-100">
                  We know you have concerns about using phone monitoring software. The good news is that when it comes to using a phone monitoring app, you're permitted by law in many countries to use it without telling the person you're monitoring them, if you're using it to monitor your own child, living under your own roof, who is under 18 years old. Of course, before using any monitoring app, you must check with the laws in your region.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-blue-600">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              See everything, everywhere:
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Just log in from any browser. Easy as that.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button size="lg" className="bg-eyezy-coral hover:bg-eyezy-coral text-white font-semibold px-8 py-3">
                Get started
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-6">
                <Eye className="h-8 w-8 text-blue-400" />
                <span className="text-2xl font-bold">Eyezy</span>
              </div>
              <p className="text-gray-300 leading-relaxed">
                The most powerful phone monitoring software designed for modern families.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Features</h3>
              <ul className="space-y-2 text-gray-300">
                <li><a href="/features/screen-recorder" className="hover:text-blue-400 transition-colors">Screen Recorder</a></li>
                <li><a href="/features/text-messages" className="hover:text-blue-400 transition-colors">Text Messages</a></li>
                <li><a href="/features/social-media" className="hover:text-blue-400 transition-colors">Social Media</a></li>
                <li><a href="/features/location-tracking" className="hover:text-blue-400 transition-colors">Location Tracking</a></li>
                <li><a href="/features/call-monitoring" className="hover:text-blue-400 transition-colors">Call Monitoring</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-gray-300">
                <li><a href="#about" className="hover:text-blue-400 transition-colors">About us</a></li>
                <li><a href="/blog" className="hover:text-blue-400 transition-colors">Blog</a></li>
                <li><a href="/press" className="hover:text-blue-400 transition-colors">Press room</a></li>
                <li><a href="#faq" className="hover:text-blue-400 transition-colors">FAQ</a></li>
                <li><a href="/support" className="hover:text-blue-400 transition-colors">Support</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Legal</h3>
              <ul className="space-y-2 text-gray-300">
                <li><a href="/privacy-policy" className="hover:text-blue-400 transition-colors">Privacy Policy</a></li>
                <li><a href="/terms-of-service" className="hover:text-blue-400 transition-colors">Terms of Service</a></li>
                <li><a href="/eula" className="hover:text-blue-400 transition-colors">EULA</a></li>
                <li><a href="/refund-policy" className="hover:text-blue-400 transition-colors">Refund Policy</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-700 mt-12 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 text-sm">
                © 2025 Eyezy. Best Phone monitoring software.
              </p>
              <div className="flex space-x-4 mt-4 md:mt-0">
                <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center">
                  <span className="text-white text-xs font-bold">f</span>
                </div>
                <div className="w-8 h-8 bg-blue-400 rounded flex items-center justify-center">
                  <span className="text-white text-xs font-bold">t</span>
                </div>
                <div className="w-8 h-8 bg-blue-700 rounded flex items-center justify-center">
                  <span className="text-white text-xs font-bold">in</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
