import {
  ArrowRightIcon,
  MailIcon,
  PhoneIcon,
  MapPinIcon,
  ClockIcon,
  MessageSquareIcon,
  HeadphonesIcon,
  UsersIcon,
  GlobeIcon,
  CheckIcon,
  StarIcon,
  SendIcon,
  LinkedinIcon,
  TwitterIcon,
  FacebookIcon,
  InstagramIcon,
} from "lucide-react";
import React, { useState } from "react";
import { Badge } from "../../components/ui/badge";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import { Input } from "../../components/ui/input";
import { Navigation } from "../../components/Navigation";

export const ContactUs = (): JSX.Element => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    subject: "",
    message: "",
    inquiryType: "general"
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactMethods = [
    {
      title: "Email Support",
      description: "Get help from our support team",
      contact: "support@quickspace.com",
      icon: <MailIcon size={32} className="text-blue-600" />,
      color: "from-blue-50 to-blue-100",
      responseTime: "Within 24 hours"
    },
    {
      title: "Phone Support",
      description: "Speak directly with our experts",
      contact: "+1 (555) 123-4567",
      icon: <PhoneIcon size={32} className="text-green-600" />,
      color: "from-green-50 to-green-100",
      responseTime: "Mon-Fri, 9AM-6PM EST"
    },
    {
      title: "Live Chat",
      description: "Instant help when you need it",
      contact: "Available 24/7",
      icon: <MessageSquareIcon size={32} className="text-purple-600" />,
      color: "from-purple-50 to-purple-100",
      responseTime: "Average 2 min response"
    },
    {
      title: "Schedule a Call",
      description: "Book a personalized demo",
      contact: "calendly.com/quickspace",
      icon: <HeadphonesIcon size={32} className="text-orange-600" />,
      color: "from-orange-50 to-orange-100",
      responseTime: "30-60 min sessions"
    }
  ];

  const offices = [
    {
      city: "San Francisco",
      address: "123 Innovation Drive, Suite 100",
      zipCode: "San Francisco, CA 94105",
      phone: "+1 (555) 123-4567",
      email: "sf@quickspace.com",
      isHeadquarters: true
    },
    {
      city: "New York",
      address: "456 Business Avenue, Floor 25",
      zipCode: "New York, NY 10001",
      phone: "+1 (555) 234-5678",
      email: "ny@quickspace.com",
      isHeadquarters: false
    },
    {
      city: "London",
      address: "789 Tech Street, Level 12",
      zipCode: "London, UK EC1A 1BB",
      phone: "+44 20 1234 5678",
      email: "london@quickspace.com",
      isHeadquarters: false
    },
    {
      city: "Tokyo",
      address: "321 Digital Plaza, 8th Floor",
      zipCode: "Tokyo, Japan 100-0001",
      phone: "+81 3 1234 5678",
      email: "tokyo@quickspace.com",
      isHeadquarters: false
    }
  ];

  const inquiryTypes = [
    { value: "general", label: "General Inquiry" },
    { value: "sales", label: "Sales & Pricing" },
    { value: "support", label: "Technical Support" },
    { value: "partnership", label: "Partnership" },
    { value: "press", label: "Press & Media" },
    { value: "careers", label: "Careers" }
  ];

  const supportStats = [
    { value: "< 2 min", label: "Average Response Time", icon: <ClockIcon size={24} className="text-blue-600" /> },
    { value: "99.9%", label: "Customer Satisfaction", icon: <StarIcon size={24} className="text-yellow-600" /> },
    { value: "24/7", label: "Support Availability", icon: <HeadphonesIcon size={24} className="text-green-600" /> },
    { value: "50+", label: "Support Languages", icon: <GlobeIcon size={24} className="text-purple-600" /> }
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
              📞 Get in Touch
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold leading-tight text-gray-900 mb-6">
              We're Here to{" "}
              <span className="text-blue-600 relative">
                Help
                <div className="absolute -bottom-2 left-0 w-full h-3 bg-blue-200 opacity-30 rounded-full"></div>
              </span>
            </h1>
            <p className="text-lg lg:text-xl text-gray-600 leading-relaxed mb-8 max-w-3xl mx-auto">
              Have questions about QuickSpace? Need help getting started? Our expert team is ready to assist you every step of the way.
            </p>
            
            {/* Quick Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
              {supportStats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="flex justify-center mb-3">
                    {stat.icon}
                  </div>
                  <div className="text-2xl lg:text-3xl font-bold text-gray-900 mb-2">
                    {stat.value}
                  </div>
                  <div className="text-gray-600 font-medium text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Methods */}
        <section className="container mx-auto px-4 py-12">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-gray-900">
              Choose Your Preferred{" "}
              <span className="text-blue-600">Contact Method</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              We offer multiple ways to get in touch. Pick the one that works best for you.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactMethods.map((method, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-2xl transition-all duration-300 bg-white rounded-2xl overflow-hidden group hover:-translate-y-2">
                <CardContent className="p-8 text-center">
                  <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${method.color} flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300`}>
                    {method.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900">
                    {method.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {method.description}
                  </p>
                  <div className="text-blue-600 font-semibold mb-3">
                    {method.contact}
                  </div>
                  <div className="text-sm text-gray-500">
                    {method.responseTime}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Contact Form & Illustration */}
        <section className="bg-gray-50 py-20 lg:py-28">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              {/* Contact Form */}
              <div>
                <div className="mb-8">
                  <Badge className="bg-purple-50 text-purple-700 border-purple-200 px-4 py-2 rounded-full font-medium mb-6">
                    📝 Send us a Message
                  </Badge>
                  <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                    Let's Start a{" "}
                    <span className="text-blue-600">Conversation</span>
                  </h2>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    Fill out the form below and we'll get back to you as soon as possible. We typically respond within 24 hours.
                  </p>
                </div>
                
                <Card className="border-0 shadow-xl bg-white rounded-2xl">
                  <CardContent className="p-8">
                    <form className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Full Name *
                          </label>
                          <Input
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            placeholder="John Doe"
                            className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-blue-500"
                            required
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Email Address *
                          </label>
                          <Input
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            placeholder="john@company.com"
                            className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-blue-500"
                            required
                          />
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Company
                          </label>
                          <Input
                            name="company"
                            value={formData.company}
                            onChange={handleInputChange}
                            placeholder="Your Company"
                            className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-blue-500"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Inquiry Type
                          </label>
                          <select
                            name="inquiryType"
                            value={formData.inquiryType}
                            onChange={handleInputChange}
                            className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-blue-500 bg-white"
                          >
                            {inquiryTypes.map((type) => (
                              <option key={type.value} value={type.value}>
                                {type.label}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Subject *
                        </label>
                        <Input
                          name="subject"
                          value={formData.subject}
                          onChange={handleInputChange}
                          placeholder="How can we help you?"
                          className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-blue-500"
                          required
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Message *
                        </label>
                        <textarea
                          name="message"
                          value={formData.message}
                          onChange={handleInputChange}
                          placeholder="Tell us more about your inquiry..."
                          rows={5}
                          className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-blue-500 resize-none"
                          required
                        />
                      </div>
                      
                      <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 shadow-lg hover:shadow-xl flex items-center justify-center gap-2">
                        Send Message
                        <SendIcon size={20} />
                      </Button>
                      
                      <p className="text-sm text-gray-500 text-center">
                        We'll get back to you within 24 hours. For urgent matters, please call us directly.
                      </p>
                    </form>
                  </CardContent>
                </Card>
              </div>
              
              {/* Contact Illustration */}
              <div className="relative">
                <div className="bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 rounded-3xl p-8 lg:p-12 overflow-hidden">
                  {/* Background decoration */}
                  <div className="absolute inset-0">
                    <div className="absolute top-10 left-10 w-16 h-16 bg-blue-200 rounded-full opacity-20 animate-pulse"></div>
                    <div className="absolute top-32 right-16 w-12 h-12 bg-purple-200 rounded-full opacity-30"></div>
                    <div className="absolute bottom-20 left-20 w-8 h-8 bg-indigo-200 rounded-full opacity-25"></div>
                  </div>

                  {/* Support Dashboard Illustration */}
                  <div className="relative z-10 bg-white rounded-2xl shadow-2xl p-6 border border-gray-100">
                    {/* Header */}
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                          <HeadphonesIcon size={16} className="text-white" />
                        </div>
                        <h3 className="text-lg font-bold text-gray-900">Support Center</h3>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                        <span className="text-xs text-gray-600">Online</span>
                      </div>
                    </div>

                    {/* Chat Messages */}
                    <div className="space-y-4 mb-6">
                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                          <UsersIcon size={14} className="text-white" />
                        </div>
                        <div className="bg-blue-50 p-3 rounded-lg rounded-tl-none max-w-xs">
                          <p className="text-sm text-gray-700">Hi! How can I help you today?</p>
                          <span className="text-xs text-gray-500">Support Team • 2 min ago</span>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-3 justify-end">
                        <div className="bg-gray-100 p-3 rounded-lg rounded-tr-none max-w-xs">
                          <p className="text-sm text-gray-700">I need help setting up my account</p>
                          <span className="text-xs text-gray-500">You • 1 min ago</span>
                        </div>
                        <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center flex-shrink-0">
                          <UsersIcon size={14} className="text-gray-600" />
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                          <UsersIcon size={14} className="text-white" />
                        </div>
                        <div className="bg-blue-50 p-3 rounded-lg rounded-tl-none max-w-xs">
                          <p className="text-sm text-gray-700">I'd be happy to help! Let me guide you through the setup process.</p>
                          <span className="text-xs text-gray-500">Support Team • Just now</span>
                        </div>
                      </div>
                    </div>

                    {/* Quick Actions */}
                    <div className="grid grid-cols-2 gap-3">
                      <button className="bg-gray-50 p-3 rounded-lg text-left hover:bg-gray-100 transition-colors">
                        <div className="text-sm font-medium text-gray-900">Quick Setup</div>
                        <div className="text-xs text-gray-600">Get started in 5 min</div>
                      </button>
                      <button className="bg-gray-50 p-3 rounded-lg text-left hover:bg-gray-100 transition-colors">
                        <div className="text-sm font-medium text-gray-900">Video Call</div>
                        <div className="text-xs text-gray-600">Schedule demo</div>
                      </button>
                    </div>
                  </div>

                  {/* Floating Elements */}
                  <div className="absolute -top-6 -right-6 bg-white p-4 rounded-2xl shadow-2xl border border-gray-100">
                    <div className="flex items-center gap-2 mb-2">
                      <CheckIcon size={16} className="text-green-500" />
                      <div className="text-xs text-gray-600 font-medium">Resolved</div>
                    </div>
                    <div className="text-lg font-bold text-gray-900">98.7%</div>
                    <div className="text-xs text-green-600 font-medium">Success Rate</div>
                  </div>
                  
                  <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-2xl border border-gray-100">
                    <div className="flex items-center gap-2 mb-2">
                      <ClockIcon size={16} className="text-blue-600" />
                      <div className="text-xs text-gray-600 font-medium">Response</div>
                    </div>
                    <div className="text-lg font-bold text-gray-900">< 2 min</div>
                    <div className="text-xs text-blue-600 font-medium">Average</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Office Locations */}
        <section className="container mx-auto px-4 py-20 lg:py-28">
          <div className="text-center mb-16">
            <Badge className="bg-green-50 text-green-700 border-green-200 px-4 py-2 rounded-full font-medium mb-6">
              🌍 Global Presence
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-gray-900">
              Our{" "}
              <span className="text-blue-600">Offices</span>{" "}
              Worldwide
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              With offices across the globe, we're always here to support you no matter where you are.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {offices.map((office, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white rounded-2xl relative">
                {office.isHeadquarters && (
                  <div className="absolute -top-3 -right-3">
                    <Badge className="bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                      HQ
                    </Badge>
                  </div>
                )}
                <CardContent className="p-8">
                  <div className="text-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <MapPinIcon size={32} className="text-blue-600" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {office.city}
                    </h3>
                  </div>
                  
                  <div className="space-y-4 text-sm">
                    <div className="flex items-start gap-3">
                      <MapPinIcon size={16} className="text-gray-400 flex-shrink-0 mt-0.5" />
                      <div>
                        <div className="text-gray-700">{office.address}</div>
                        <div className="text-gray-600">{office.zipCode}</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <PhoneIcon size={16} className="text-gray-400 flex-shrink-0" />
                      <div className="text-gray-700">{office.phone}</div>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <MailIcon size={16} className="text-gray-400 flex-shrink-0" />
                      <div className="text-blue-600">{office.email}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Social Media & Community */}
        <section className="bg-gray-50 py-20 lg:py-28">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <Badge className="bg-orange-50 text-orange-700 border-orange-200 px-4 py-2 rounded-full font-medium mb-6">
                🤝 Join Our Community
              </Badge>
              <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-gray-900">
                Connect with Us on{" "}
                <span className="text-blue-600">Social Media</span>
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Follow us for the latest updates, tips, and insights. Join thousands of professionals in our growing community.
              </p>
            </div>
            
            <div className="flex justify-center gap-6 mb-12">
              <Button variant="outline" size="lg" className="rounded-full p-4 hover:bg-blue-50 hover:border-blue-200 transition-all duration-200">
                <LinkedinIcon size={24} className="text-blue-600" />
              </Button>
              <Button variant="outline" size="lg" className="rounded-full p-4 hover:bg-blue-50 hover:border-blue-200 transition-all duration-200">
                <TwitterIcon size={24} className="text-blue-400" />
              </Button>
              <Button variant="outline" size="lg" className="rounded-full p-4 hover:bg-blue-50 hover:border-blue-200 transition-all duration-200">
                <FacebookIcon size={24} className="text-blue-700" />
              </Button>
              <Button variant="outline" size="lg" className="rounded-full p-4 hover:bg-pink-50 hover:border-pink-200 transition-all duration-200">
                <InstagramIcon size={24} className="text-pink-600" />
              </Button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <Card className="border-0 shadow-lg bg-white rounded-2xl text-center">
                <CardContent className="p-8">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <UsersIcon size={24} className="text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Community Forum</h3>
                  <p className="text-gray-600 mb-4">Connect with other users, share tips, and get help from the community.</p>
                  <Button variant="outline" className="w-full">
                    Join Forum
                  </Button>
                </CardContent>
              </Card>
              
              <Card className="border-0 shadow-lg bg-white rounded-2xl text-center">
                <CardContent className="p-8">
                  <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <MessageSquareIcon size={24} className="text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Live Webinars</h3>
                  <p className="text-gray-600 mb-4">Join our weekly webinars to learn best practices and new features.</p>
                  <Button variant="outline" className="w-full">
                    Register Now
                  </Button>
                </CardContent>
              </Card>
              
              <Card className="border-0 shadow-lg bg-white rounded-2xl text-center">
                <CardContent className="p-8">
                  <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <StarIcon size={24} className="text-purple-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Success Stories</h3>
                  <p className="text-gray-600 mb-4">Read how other businesses are succeeding with QuickSpace.</p>
                  <Button variant="outline" className="w-full">
                    Read Stories
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="container mx-auto px-4 py-20 lg:py-28">
          <div className="bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 rounded-3xl p-8 lg:p-16 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-purple-600/20"></div>
            <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -translate-y-48 translate-x-48"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full translate-y-48 -translate-x-48"></div>
            
            <div className="relative z-10 text-center">
              <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">
                Ready to Get{" "}
                <span className="text-blue-200">Started?</span>
              </h2>
              <p className="text-lg lg:text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed mb-8">
                Don't wait any longer. Join thousands of businesses that have already transformed their operations with QuickSpace.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 shadow-lg hover:shadow-xl">
                  Start Free Trial
                </Button>
                <Button
                  variant="outline"
                  className="border-2 border-white/30 text-white hover:bg-white/10 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200"
                >
                  Schedule Demo
                </Button>
              </div>
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