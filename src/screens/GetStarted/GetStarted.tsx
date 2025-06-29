import {
  ArrowRightIcon,
  CheckIcon,
  CalendarIcon,
  ClockIcon,
  UserIcon,
  VideoIcon,
  PhoneIcon,
  MessageSquareIcon,
  StarIcon,
  ShieldCheckIcon,
  ZapIcon,
  TrendingUpIcon,
  HeadphonesIcon,
  UsersIcon,
} from "lucide-react";
import React, { useEffect } from "react";
import { Badge } from "../../components/ui/badge";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import { Navigation } from "../../components/Navigation";

export const GetStarted = (): JSX.Element => {
  useEffect(() => {
    // Load Calendly widget script
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup script when component unmounts
      document.body.removeChild(script);
    };
  }, []);

  const benefits = [
    {
      title: "Free 14-Day Trial",
      description: "Full access to all features with no credit card required",
      icon: <ZapIcon size={24} className="text-blue-600" />,
      color: "from-blue-50 to-blue-100"
    },
    {
      title: "Personal Onboarding",
      description: "One-on-one setup session with our expert team",
      icon: <UserIcon size={24} className="text-green-600" />,
      color: "from-green-50 to-green-100"
    },
    {
      title: "Custom Demo",
      description: "See how QuickSpace works specifically for your business",
      icon: <VideoIcon size={24} className="text-purple-600" />,
      color: "from-purple-50 to-purple-100"
    },
    {
      title: "Instant Support",
      description: "Get immediate answers to all your questions",
      icon: <HeadphonesIcon size={24} className="text-orange-600" />,
      color: "from-orange-50 to-orange-100"
    }
  ];

  const meetingTypes = [
    {
      title: "Quick Demo",
      duration: "15 minutes",
      description: "Perfect for a quick overview of QuickSpace features",
      icon: <ZapIcon size={20} className="text-blue-600" />,
      popular: false
    },
    {
      title: "Full Consultation",
      duration: "30 minutes",
      description: "Comprehensive walkthrough tailored to your business needs",
      icon: <UserIcon size={20} className="text-green-600" />,
      popular: true
    },
    {
      title: "Technical Deep Dive",
      duration: "45 minutes",
      description: "Detailed technical discussion for IT teams and developers",
      icon: <ShieldCheckIcon size={20} className="text-purple-600" />,
      popular: false
    }
  ];

  const testimonials = [
    {
      quote: "The onboarding call was incredibly helpful. They set up everything perfectly for our team.",
      author: "Sarah Johnson",
      role: "CEO, TechFlow",
      avatar: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=60&h=60&fit=crop"
    },
    {
      quote: "Best demo I've ever had. They understood our needs immediately and showed exactly what we needed.",
      author: "Michael Chen",
      role: "Operations Director",
      avatar: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=60&h=60&fit=crop"
    },
    {
      quote: "The personal touch made all the difference. We were up and running in no time.",
      author: "Emily Rodriguez",
      role: "Product Manager",
      avatar: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=60&h=60&fit=crop"
    }
  ];

  const stats = [
    { value: "5 min", label: "Average Setup Time", icon: <ClockIcon size={20} className="text-blue-600" /> },
    { value: "98%", label: "Customer Satisfaction", icon: <StarIcon size={20} className="text-yellow-600" /> },
    { value: "24/7", label: "Support Available", icon: <HeadphonesIcon size={20} className="text-green-600" /> },
    { value: "50K+", label: "Happy Customers", icon: <UsersIcon size={20} className="text-purple-600" /> }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Navigation */}
      <Navigation />

      <main>
        {/* Hero Section */}
        <section className="container mx-auto px-4 py-16 lg:py-24">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="bg-blue-50 text-blue-700 border-blue-200 px-4 py-2 rounded-full font-medium mb-6">
              🚀 Get Started Today
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold leading-tight text-gray-900 mb-6">
              Start Your{" "}
              <span className="text-blue-600 relative">
                Free Trial
                <div className="absolute -bottom-2 left-0 w-full h-3 bg-blue-200 opacity-30 rounded-full"></div>
              </span>{" "}
              in Minutes
            </h1>
            <p className="text-lg lg:text-xl text-gray-600 leading-relaxed mb-8 max-w-3xl mx-auto">
              Book a personalized demo with our team and see how QuickSpace can transform your business. No commitment required – just 30 minutes to discover your potential.
            </p>
            
            {/* Quick Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="flex justify-center mb-2">
                    {stat.icon}
                  </div>
                  <div className="text-2xl lg:text-3xl font-bold text-gray-900 mb-1">
                    {stat.value}
                  </div>
                  <div className="text-gray-600 font-medium text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="bg-gray-50 py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-gray-900">
                What You'll Get in Your{" "}
                <span className="text-blue-600">Demo Call</span>
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
                Our team will work with you to understand your needs and show you exactly how QuickSpace can help.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white rounded-2xl group hover:-translate-y-1">
                  <CardContent className="p-8 text-center">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${benefit.color} flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300`}>
                      {benefit.icon}
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-gray-900">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {benefit.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Main Booking Section */}
        <section className="container mx-auto px-4 py-20 lg:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Left Column - Meeting Types & Info */}
            <div className="space-y-8">
              <div className="space-y-6">
                <Badge className="bg-purple-50 text-purple-700 border-purple-200 px-4 py-2 rounded-full font-medium">
                  📅 Choose Your Meeting Type
                </Badge>
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
                  Book Your{" "}
                  <span className="text-blue-600">Perfect Session</span>
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Select the meeting type that best fits your needs. All sessions are completely free and no-commitment.
                </p>
              </div>
              
              {/* Meeting Types */}
              <div className="space-y-4">
                {meetingTypes.map((meeting, index) => (
                  <Card key={index} className={`border-2 transition-all duration-300 hover:shadow-lg ${
                    meeting.popular 
                      ? "border-blue-600 bg-blue-50" 
                      : "border-gray-200 bg-white hover:border-blue-300"
                  }`}>
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center shadow-sm">
                          {meeting.icon}
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <h3 className="text-lg font-bold text-gray-900">{meeting.title}</h3>
                            {meeting.popular && (
                              <Badge className="bg-blue-600 text-white text-xs">Most Popular</Badge>
                            )}
                          </div>
                          <div className="flex items-center gap-2 mb-3">
                            <ClockIcon size={16} className="text-gray-500" />
                            <span className="text-gray-600 font-medium">{meeting.duration}</span>
                          </div>
                          <p className="text-gray-600">{meeting.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
              
              {/* What to Expect */}
              <Card className="border-0 shadow-lg bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl">
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-6">What to Expect</h3>
                  <div className="space-y-4">
                    {[
                      "Personalized demo based on your business needs",
                      "Q&A session with our product experts",
                      "Custom setup recommendations",
                      "Free trial activation with full support"
                    ].map((item, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <CheckIcon size={16} className="text-green-500 flex-shrink-0" />
                        <span className="text-gray-700">{item}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
            
            {/* Right Column - Calendly Widget */}
            <div className="space-y-6">
              <div className="text-center lg:text-left">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Select Your Preferred Time
                </h3>
                <p className="text-gray-600">
                  Choose a time that works best for you. All times are shown in your local timezone.
                </p>
              </div>
              
              {/* Calendly Widget Container */}
              <Card className="border-0 shadow-xl bg-white rounded-2xl overflow-hidden">
                <CardContent className="p-0">
                  <div 
                    className="calendly-inline-widget" 
                    data-url="https://calendly.com/chetan3854/30min"
                    style={{ minWidth: '320px', height: '700px' }}
                  ></div>
                </CardContent>
              </Card>
              
              {/* Contact Alternative */}
              <Card className="border-0 shadow-lg bg-gray-50 rounded-2xl">
                <CardContent className="p-6 text-center">
                  <h4 className="font-bold text-gray-900 mb-3">Prefer to Talk Now?</h4>
                  <p className="text-gray-600 mb-4">
                    Can't find a suitable time? Contact us directly and we'll arrange a call.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3 justify-center">
                    <Button variant="outline" className="flex items-center gap-2">
                      <PhoneIcon size={16} />
                      Call Us
                    </Button>
                    <Button variant="outline" className="flex items-center gap-2">
                      <MessageSquareIcon size={16} />
                      Live Chat
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="bg-gray-50 py-20 lg:py-28">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <Badge className="bg-green-50 text-green-700 border-green-200 px-4 py-2 rounded-full font-medium mb-6">
                💬 Success Stories
              </Badge>
              <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-gray-900">
                What Others Say About{" "}
                <span className="text-blue-600">Our Demos</span>
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
                See what our customers have to say about their demo experience with QuickSpace.
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white rounded-2xl">
                  <CardContent className="p-8">
                    <div className="flex text-yellow-400 mb-6">
                      {[...Array(5)].map((_, i) => (
                        <StarIcon key={i} size={16} fill="currentColor" />
                      ))}
                    </div>
                    <p className="text-gray-700 mb-6 leading-relaxed">
                      "{testimonial.quote}"
                    </p>
                    <div className="flex items-center gap-3">
                      <img
                        src={testimonial.avatar}
                        alt={testimonial.author}
                        className="w-10 h-10 rounded-full object-cover"
                      />
                      <div>
                        <div className="font-bold text-gray-900">{testimonial.author}</div>
                        <div className="text-gray-600 text-sm">{testimonial.role}</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="container mx-auto px-4 py-20 lg:py-28">
          <div className="text-center mb-16">
            <Badge className="bg-orange-50 text-orange-700 border-orange-200 px-4 py-2 rounded-full font-medium mb-6">
              ❓ Common Questions
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-gray-900">
              Frequently Asked{" "}
              <span className="text-blue-600">Questions</span>
            </h2>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  question: "Is the demo really free?",
                  answer: "Yes, absolutely! Our demos are completely free with no hidden costs or obligations."
                },
                {
                  question: "How long does the demo take?",
                  answer: "Typically 30 minutes, but we can adjust based on your needs and questions."
                },
                {
                  question: "What if I need to reschedule?",
                  answer: "No problem! You can easily reschedule or cancel your appointment anytime."
                },
                {
                  question: "Do I need to prepare anything?",
                  answer: "Just bring your questions! We'll handle the rest and tailor the demo to your needs."
                },
                {
                  question: "Can multiple team members join?",
                  answer: "Absolutely! We encourage team participation to ensure everyone's questions are answered."
                },
                {
                  question: "What happens after the demo?",
                  answer: "You'll get access to a free trial with full support. No pressure, just value."
                }
              ].map((faq, index) => (
                <Card key={index} className="border-0 shadow-lg bg-white rounded-2xl">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-bold text-gray-900 mb-3">
                      {faq.question}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="container mx-auto px-4 py-20 lg:py-28">
          <div className="bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 rounded-3xl p-8 lg:p-16 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-purple-600/20"></div>
            <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -translate-y-48 translate-x-48"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full translate-y-48 -translate-x-48"></div>
            
            <div className="relative z-10 text-center">
              <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">
                Ready to Transform{" "}
                <span className="text-blue-200">Your Business?</span>
              </h2>
              <p className="text-lg lg:text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed mb-8">
                Join thousands of businesses that have already discovered the power of QuickSpace. Your journey starts with just one call.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 shadow-lg hover:shadow-xl flex items-center gap-2">
                  <CalendarIcon size={20} />
                  Book Your Demo Now
                </Button>
                <Button
                  variant="outline"
                  className="border-2 border-white/30 text-white hover:bg-white/10 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200"
                >
                  Start Free Trial
                </Button>
              </div>
              
              <p className="text-blue-200 text-sm mt-6">
                No credit card required • 14-day free trial • Cancel anytime
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16 lg:py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 mb-12">
            <div className="lg:col-span-1 space-y-6">
              <div className="text-2xl font-bold">
                <span className="text-blue-400">→</span>QuickSpace
              </div>
              <p className="text-gray-400 leading-relaxed">
                Empowering businesses worldwide with innovative solutions.
              </p>
            </div>
            
            <div>
              <h3 className="font-bold mb-6 text-lg">Product</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Features</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Pricing</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">API</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Documentation</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-bold mb-6 text-lg">Company</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Press</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-bold mb-6 text-lg">Support</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Help Center</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Community</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Status</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8 text-center">
            <div className="text-gray-400">
              © 2024 QuickSpace. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};