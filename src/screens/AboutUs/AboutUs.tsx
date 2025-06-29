import {
  ArrowRightIcon,
  CheckIcon,
  PlayIcon,
  StarIcon,
  TrendingUpIcon,
  UsersIcon,
  ShieldCheckIcon,
  ZapIcon,
  BarChart3Icon,
  HeadphonesIcon,
  AwardIcon,
  TargetIcon,
  EyeIcon,
  HeartIcon,
  LinkedinIcon,
  TwitterIcon,
  InstagramIcon,
  FacebookIcon,
} from "lucide-react";
import React from "react";
import { Badge } from "../../components/ui/badge";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import { Navigation } from "../../components/Navigation";

export const AboutUs = (): JSX.Element => {
  const stats = [
    { value: "50K+", label: "Happy Customers", icon: <UsersIcon size={24} className="text-blue-600" /> },
    { value: "99.9%", label: "Uptime Guarantee", icon: <ShieldCheckIcon size={24} className="text-green-600" /> },
    { value: "150+", label: "Countries Served", icon: <TargetIcon size={24} className="text-purple-600" /> },
    { value: "24/7", label: "Expert Support", icon: <HeadphonesIcon size={24} className="text-orange-600" /> },
  ];

  const values = [
    {
      title: "Innovation First",
      description: "We constantly push boundaries to deliver cutting-edge solutions that transform how businesses operate.",
      icon: <ZapIcon size={32} className="text-yellow-600" />,
      color: "from-yellow-50 to-yellow-100",
    },
    {
      title: "Customer Success",
      description: "Your success is our success. We're committed to helping you achieve your business goals.",
      icon: <HeartIcon size={32} className="text-red-600" />,
      color: "from-red-50 to-red-100",
    },
    {
      title: "Excellence",
      description: "We maintain the highest standards in everything we do, from product quality to customer service.",
      icon: <AwardIcon size={32} className="text-blue-600" />,
      color: "from-blue-50 to-blue-100",
    },
    {
      title: "Transparency",
      description: "We believe in open communication and honest relationships with our customers and partners.",
      icon: <EyeIcon size={32} className="text-green-600" />,
      color: "from-green-50 to-green-100",
    },
  ];

  const team = [
    {
      name: "Sarah Johnson",
      role: "CEO & Founder",
      bio: "Former VP at Google with 15+ years in tech leadership. Passionate about building products that make a difference.",
      avatar: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop",
      social: {
        linkedin: "#",
        twitter: "#",
        instagram: "#",
      }
    },
    {
      name: "Michael Chen",
      role: "CTO & Co-Founder",
      bio: "Ex-Amazon engineer with expertise in scalable systems. Leads our technical vision and product development.",
      avatar: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop",
      social: {
        linkedin: "#",
        twitter: "#",
        instagram: "#",
      }
    },
    {
      name: "Emily Rodriguez",
      role: "Head of Design",
      bio: "Award-winning designer from Apple. Creates beautiful, intuitive experiences that users love.",
      avatar: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop",
      social: {
        linkedin: "#",
        twitter: "#",
        instagram: "#",
      }
    },
    {
      name: "David Kim",
      role: "VP of Engineering",
      bio: "Former Microsoft architect with deep expertise in cloud infrastructure and enterprise solutions.",
      avatar: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop",
      social: {
        linkedin: "#",
        twitter: "#",
        instagram: "#",
      }
    },
    {
      name: "Lisa Thompson",
      role: "Head of Marketing",
      bio: "Growth marketing expert who scaled multiple startups from zero to millions in revenue.",
      avatar: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop",
      social: {
        linkedin: "#",
        twitter: "#",
        instagram: "#",
      }
    },
    {
      name: "James Wilson",
      role: "Head of Sales",
      bio: "Enterprise sales leader with a track record of building high-performing teams and driving growth.",
      avatar: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop",
      social: {
        linkedin: "#",
        twitter: "#",
        instagram: "#",
      }
    },
  ];

  const milestones = [
    {
      year: "2019",
      title: "Company Founded",
      description: "Started with a vision to revolutionize business operations through innovative technology solutions.",
    },
    {
      year: "2020",
      title: "First 1,000 Customers",
      description: "Reached our first major milestone with 1,000 satisfied customers across 25 countries.",
    },
    {
      year: "2021",
      title: "Series A Funding",
      description: "Raised $15M in Series A funding to accelerate product development and market expansion.",
    },
    {
      year: "2022",
      title: "Global Expansion",
      description: "Expanded operations to 50+ countries with localized support and compliance.",
    },
    {
      year: "2023",
      title: "AI Integration",
      description: "Launched advanced AI-powered features that transformed how businesses analyze data.",
    },
    {
      year: "2024",
      title: "50,000+ Users",
      description: "Celebrating 50,000+ active users and $100M+ in customer value created.",
    },
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
              🚀 About QuickSpace
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold leading-tight text-gray-900 mb-6">
              We're Building the{" "}
              <span className="text-blue-600 relative">
                Future
                <div className="absolute -bottom-2 left-0 w-full h-3 bg-blue-200 opacity-30 rounded-full"></div>
              </span>{" "}
              of Business
            </h1>
            <p className="text-lg lg:text-xl text-gray-600 leading-relaxed mb-8 max-w-3xl mx-auto">
              Founded in 2019, QuickSpace has grown from a small startup to a global platform trusted by over 50,000 businesses worldwide. We're passionate about creating innovative solutions that help companies thrive in the digital age.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 shadow-lg hover:shadow-xl flex items-center gap-2">
                Our Story
                <ArrowRightIcon size={20} />
              </Button>
              <Button
                variant="outline"
                className="border-2 border-gray-300 text-gray-700 hover:bg-gray-50 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 flex items-center gap-3"
              >
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                  <PlayIcon size={16} className="text-white ml-0.5" />
                </div>
                Watch Video
              </Button>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="bg-gray-50 py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="flex justify-center mb-4">
                    {stat.icon}
                  </div>
                  <div className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
                    {stat.value}
                  </div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Mission & Vision Section */}
        <section className="container mx-auto px-4 py-20 lg:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <Badge className="bg-purple-50 text-purple-700 border-purple-200 px-4 py-2 rounded-full font-medium">
                  🎯 Our Mission
                </Badge>
                <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 leading-tight">
                  Empowering Businesses to{" "}
                  <span className="text-blue-600">Succeed</span>
                </h2>
                <p className="text-lg lg:text-xl text-gray-600 leading-relaxed">
                  Our mission is to democratize access to powerful business tools and analytics, enabling companies of all sizes to make data-driven decisions and achieve sustainable growth.
                </p>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckIcon size={14} className="text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">Innovation-Driven</h3>
                    <p className="text-gray-600">We continuously innovate to stay ahead of market needs and technological advances.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckIcon size={14} className="text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">Customer-Centric</h3>
                    <p className="text-gray-600">Every decision we make is guided by what's best for our customers and their success.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckIcon size={14} className="text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">Global Impact</h3>
                    <p className="text-gray-600">We're building solutions that create positive impact for businesses worldwide.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-3xl p-8 lg:p-12">
                <img
                  src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop"
                  alt="Team collaboration"
                  className="w-full h-80 lg:h-96 object-cover rounded-2xl shadow-2xl"
                />
                
                {/* Floating achievement card */}
                <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-2xl border border-gray-100">
                  <div className="flex items-center gap-3 mb-2">
                    <AwardIcon size={20} className="text-yellow-600" />
                    <div className="text-sm text-gray-600 font-medium">Achievement</div>
                  </div>
                  <div className="text-2xl font-bold text-gray-900">Top 10</div>
                  <div className="text-sm text-blue-600 font-medium">SaaS Platform 2024</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="bg-gray-50 py-20 lg:py-28">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16 lg:mb-20">
              <Badge className="bg-green-50 text-green-700 border-green-200 px-4 py-2 rounded-full font-medium mb-6">
                💎 Our Values
              </Badge>
              <h2 className="text-3xl lg:text-5xl font-bold mb-6 text-gray-900">
                What Drives Us{" "}
                <span className="text-blue-600">Forward</span>
              </h2>
              <p className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Our core values shape everything we do, from product development to customer relationships.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <Card key={index} className="border-0 shadow-lg hover:shadow-2xl transition-all duration-300 bg-white rounded-2xl overflow-hidden group hover:-translate-y-2">
                  <CardContent className="p-8 text-center">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${value.color} flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300`}>
                      {value.icon}
                    </div>
                    <h3 className="text-xl font-bold mb-4 text-gray-900">
                      {value.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline Section */}
        <section className="container mx-auto px-4 py-20 lg:py-28">
          <div className="text-center mb-16 lg:mb-20">
            <Badge className="bg-orange-50 text-orange-700 border-orange-200 px-4 py-2 rounded-full font-medium mb-6">
              📈 Our Journey
            </Badge>
            <h2 className="text-3xl lg:text-5xl font-bold mb-6 text-gray-900">
              Milestones That{" "}
              <span className="text-blue-600">Matter</span>
            </h2>
            <p className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              From a small startup to a global platform, here's how we've grown and evolved over the years.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-blue-200"></div>
              
              <div className="space-y-12">
                {milestones.map((milestone, index) => (
                  <div key={index} className="relative flex items-start gap-8">
                    {/* Timeline dot */}
                    <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg flex-shrink-0">
                      {milestone.year.slice(-2)}
                    </div>
                    
                    {/* Content */}
                    <div className="flex-1 bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                      <div className="flex items-center gap-4 mb-4">
                        <h3 className="text-2xl font-bold text-gray-900">{milestone.title}</h3>
                        <Badge className="bg-blue-50 text-blue-700 border-blue-200">{milestone.year}</Badge>
                      </div>
                      <p className="text-gray-600 leading-relaxed text-lg">
                        {milestone.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="bg-gray-50 py-20 lg:py-28">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16 lg:mb-20">
              <Badge className="bg-purple-50 text-purple-700 border-purple-200 px-4 py-2 rounded-full font-medium mb-6">
                👥 Our Team
              </Badge>
              <h2 className="text-3xl lg:text-5xl font-bold mb-6 text-gray-900">
                Meet the People Behind{" "}
                <span className="text-blue-600">QuickSpace</span>
              </h2>
              <p className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Our diverse team of experts brings together decades of experience from leading tech companies.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
              {team.map((member, index) => (
                <Card key={index} className="border-0 shadow-lg hover:shadow-2xl transition-all duration-300 bg-white rounded-2xl overflow-hidden group hover:-translate-y-2">
                  <CardContent className="p-8 text-center">
                    <div className="relative mb-6">
                      <img
                        src={member.avatar}
                        alt={member.name}
                        className="w-24 h-24 rounded-full object-cover mx-auto shadow-lg"
                      />
                      <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                        <CheckIcon size={16} className="text-white" />
                      </div>
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-gray-900">
                      {member.name}
                    </h3>
                    <p className="text-blue-600 font-medium mb-4">
                      {member.role}
                    </p>
                    <p className="text-gray-600 leading-relaxed mb-6">
                      {member.bio}
                    </p>
                    <div className="flex justify-center gap-3">
                      <Button variant="ghost" size="icon" className="rounded-full hover:bg-blue-50 text-gray-400 hover:text-blue-600">
                        <LinkedinIcon size={18} />
                      </Button>
                      <Button variant="ghost" size="icon" className="rounded-full hover:bg-blue-50 text-gray-400 hover:text-blue-600">
                        <TwitterIcon size={18} />
                      </Button>
                      <Button variant="ghost" size="icon" className="rounded-full hover:bg-blue-50 text-gray-400 hover:text-blue-600">
                        <InstagramIcon size={18} />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
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
                Ready to Join Our{" "}
                <span className="text-blue-200">Journey?</span>
              </h2>
              <p className="text-lg lg:text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed mb-8">
                Be part of the future of business technology. Start your free trial today and experience the QuickSpace difference.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 shadow-lg hover:shadow-xl">
                  Start Free Trial
                </Button>
                <Button
                  variant="outline"
                  className="border-2 border-white/30 text-white hover:bg-white/10 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200"
                >
                  Contact Sales
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
              <div className="flex gap-4">
                <Button variant="ghost" size="icon" className="rounded-full hover:bg-gray-800 text-gray-400 hover:text-white">
                  <FacebookIcon size={20} />
                </Button>
                <Button variant="ghost" size="icon" className="rounded-full hover:bg-gray-800 text-gray-400 hover:text-white">
                  <TwitterIcon size={20} />
                </Button>
                <Button variant="ghost" size="icon" className="rounded-full hover:bg-gray-800 text-gray-400 hover:text-white">
                  <InstagramIcon size={20} />
                </Button>
                <Button variant="ghost" size="icon" className="rounded-full hover:bg-gray-800 text-gray-400 hover:text-white">
                  <LinkedinIcon size={20} />
                </Button>
              </div>
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