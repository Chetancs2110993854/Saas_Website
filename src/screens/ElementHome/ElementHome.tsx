import {
  ArrowRightIcon,
  CheckIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  TwitterIcon,
  PlayIcon,
  StarIcon,
  TrendingUpIcon,
  UsersIcon,
  ShieldCheckIcon,
  ZapIcon,
  BarChart3Icon,
  HeadphonesIcon,
  CalendarIcon,
  SparklesIcon,
  RocketIcon,
} from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";
import { Badge } from "../../components/ui/badge";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import { Input } from "../../components/ui/input";
import { Tabs, TabsList, TabsTrigger } from "../../components/ui/tabs";
import { Navigation } from "../../components/Navigation";

export const ElementHome = (): JSX.Element => {
  const features = [
    {
      title: "Advanced Analytics",
      description:
        "Get deep insights into your business performance with our comprehensive analytics dashboard and real-time reporting.",
      icon: <BarChart3Icon size={32} className="text-blue-600" />,
      color: "from-blue-50 to-blue-100",
    },
    {
      title: "24/7 Support",
      description:
        "Our dedicated support team is available around the clock to help you succeed and resolve any issues quickly.",
      icon: <HeadphonesIcon size={32} className="text-green-600" />,
      color: "from-green-50 to-green-100",
    },
    {
      title: "Enterprise Security",
      description:
        "Bank-level security with end-to-end encryption, compliance certifications, and advanced threat protection.",
      icon: <ShieldCheckIcon size={32} className="text-purple-600" />,
      color: "from-purple-50 to-purple-100",
    },
    {
      title: "Lightning Fast",
      description:
        "Optimized performance with global CDN, ensuring your applications load instantly anywhere in the world.",
      icon: <ZapIcon size={32} className="text-yellow-600" />,
      color: "from-yellow-50 to-yellow-100",
    },
    {
      title: "Team Collaboration",
      description:
        "Seamless collaboration tools that keep your team synchronized and productive across all projects.",
      icon: <UsersIcon size={32} className="text-indigo-600" />,
      color: "from-indigo-50 to-indigo-100",
    },
    {
      title: "Growth Tracking",
      description:
        "Monitor your business growth with advanced metrics, forecasting, and performance optimization tools.",
      icon: <TrendingUpIcon size={32} className="text-red-600" />,
      color: "from-red-50 to-red-100",
    },
  ];

  const testimonials = [
    {
      quote:
        "QuickSpace transformed our business operations completely. The analytics dashboard gives us insights we never had before, and the support team is absolutely phenomenal.",
      author: "Sarah Johnson",
      role: "CEO, TechFlow",
      avatar: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop",
      rating: 5,
      company: "TechFlow",
    },
    {
      quote:
        "The best investment we've made for our company. QuickSpace's automation features saved us 40+ hours per week, and the ROI has been incredible.",
      author: "Michael Chen",
      role: "Operations Director",
      avatar: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop",
      rating: 5,
      company: "InnovateCorp",
    },
    {
      quote:
        "Outstanding platform with exceptional customer service. The team collaboration features have revolutionized how we work together remotely.",
      author: "Emily Rodriguez",
      role: "Product Manager",
      avatar: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop",
      rating: 5,
      company: "DesignStudio",
    },
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$29",
      period: "per month",
      description: "Perfect for small teams and startups",
      features: [
        "Up to 5 team members",
        "Basic analytics dashboard",
        "Email support",
        "5GB storage",
        "Basic integrations",
      ],
      buttonText: "Book a Demo",
      popular: false,
      badge: "Most Popular for Startups",
    },
    {
      name: "Professional",
      price: "$99",
      period: "per month",
      description: "Ideal for growing businesses",
      features: [
        "Up to 25 team members",
        "Advanced analytics & reporting",
        "Priority support",
        "100GB storage",
        "All integrations included",
        "Custom workflows",
        "API access",
      ],
      buttonText: "Get Started",
      popular: true,
      badge: "Best Value",
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "pricing",
      description: "For large organizations with specific needs",
      features: [
        "Unlimited team members",
        "Enterprise analytics suite",
        "24/7 dedicated support",
        "Unlimited storage",
        "Custom integrations",
        "Advanced security features",
        "On-premise deployment",
        "SLA guarantee",
      ],
      buttonText: "Contact Sales",
      popular: false,
      badge: "Enterprise Grade",
    },
  ];

  const stats = [
    { value: "50K+", label: "Active Users", icon: <UsersIcon size={24} className="text-blue-600" /> },
    { value: "99.9%", label: "Uptime", icon: <ShieldCheckIcon size={24} className="text-green-600" /> },
    { value: "150+", label: "Countries", icon: <TrendingUpIcon size={24} className="text-purple-600" /> },
    { value: "24/7", label: "Support", icon: <HeadphonesIcon size={24} className="text-orange-600" /> },
  ];

  const brands = [
    { name: "Microsoft", logo: "https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=120&h=60&fit=crop" },
    { name: "Google", logo: "https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=120&h=60&fit=crop" },
    { name: "Amazon", logo: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=120&h=60&fit=crop" },
    { name: "Spotify", logo: "https://images.pexels.com/photos/164745/pexels-photo-164745.jpeg?auto=compress&cs=tinysrgb&w=120&h=60&fit=crop" },
    { name: "Airbnb", logo: "https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=120&h=60&fit=crop" },
    { name: "Uber", logo: "https://images.pexels.com/photos/261679/pexels-photo-261679.jpeg?auto=compress&cs=tinysrgb&w=120&h=60&fit=crop" },
  ];

  const footerLinks = {
    product: ["Features", "Integrations", "Pricing", "API", "Documentation"],
    company: ["About Us", "Blog", "Careers", "Press Kit", "Contact"],
    resources: ["Help Center", "Community", "Webinars", "Status Page", "Terms of Service"],
    solutions: ["For Startups", "For Enterprise", "For Agencies", "For E-commerce", "For SaaS"],
  };

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Navigation */}
      <Navigation />

      <main>
        {/* Hero Section with Creative Illustration */}
        <section className="container mx-auto px-4 py-16 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <Badge className="bg-blue-50 text-blue-700 border-blue-200 px-4 py-2 rounded-full font-medium">
                  🚀 New: Advanced Analytics Dashboard
                </Badge>
                <h1 className="text-4xl lg:text-6xl font-bold leading-tight text-gray-900">
                  Build Your Business{" "}
                  <span className="text-blue-600 relative">
                    Faster
                    <div className="absolute -bottom-2 left-0 w-full h-3 bg-blue-200 opacity-30 rounded-full"></div>
                  </span>{" "}
                  Than Ever
                </h1>
                <p className="text-lg lg:text-xl text-gray-600 leading-relaxed max-w-lg">
                  Transform your business with our comprehensive platform that combines powerful analytics, seamless collaboration, and enterprise-grade security.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/get-started">
                  <Button className="group bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-2xl transform hover:-translate-y-1 flex items-center gap-3 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                    <CalendarIcon size={20} className="group-hover:rotate-12 transition-transform duration-300" />
                    <span className="relative z-10">Book a Demo</span>
                    <SparklesIcon size={16} className="group-hover:scale-125 transition-transform duration-300" />
                  </Button>
                </Link>
                <Button
                  variant="outline"
                  className="group border-2 border-gray-300 text-gray-700 hover:bg-gray-50 hover:border-gray-400 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1 flex items-center gap-3"
                >
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <PlayIcon size={18} className="text-white ml-0.5" />
                  </div>
                  <span>Watch Demo</span>
                </Button>
              </div>
              
              <div className="flex items-center gap-6">
                <div className="flex -space-x-3">
                  {[
                    "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=40&h=40&fit=crop",
                    "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=40&h=40&fit=crop",
                    "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=40&h=40&fit=crop",
                    "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=40&h=40&fit=crop"
                  ].map((avatar, i) => (
                    <img
                      key={i}
                      src={avatar}
                      alt={`User ${i + 1}`}
                      className="w-10 h-10 rounded-full border-3 border-white object-cover shadow-md"
                    />
                  ))}
                </div>
                <div className="flex items-center gap-2">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <StarIcon key={i} size={16} fill="currentColor" />
                    ))}
                  </div>
                  <span className="text-gray-600 font-medium">Trusted by 50,000+ users</span>
                </div>
              </div>
            </div>
            
            {/* Creative Illustration Section */}
            <div className="relative">
              <div className="relative bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 rounded-3xl p-8 lg:p-12 overflow-hidden">
                {/* Background geometric shapes */}
                <div className="absolute inset-0">
                  <div className="absolute top-10 left-10 w-20 h-20 bg-blue-200 rounded-full opacity-20 animate-pulse"></div>
                  <div className="absolute top-32 right-16 w-16 h-16 bg-purple-200 rounded-full opacity-30"></div>
                  <div className="absolute bottom-20 left-20 w-12 h-12 bg-indigo-200 rounded-full opacity-25"></div>
                  <div className="absolute bottom-32 right-8 w-8 h-8 bg-blue-300 rounded-full opacity-40"></div>
                </div>

                {/* Main Dashboard Illustration */}
                <div className="relative z-10 bg-white rounded-2xl shadow-2xl p-6 lg:p-8 border border-gray-100">
                  {/* Dashboard Header */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                        <BarChart3Icon size={16} className="text-white" />
                      </div>
                      <h3 className="text-lg font-bold text-gray-900">Analytics Dashboard</h3>
                    </div>
                    <div className="flex gap-2">
                      <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                    </div>
                  </div>

                  {/* Chart Area */}
                  <div className="h-48 bg-gradient-to-br from-blue-50 to-indigo-100 rounded-xl relative overflow-hidden mb-6">
                    {/* Animated Chart Bars */}
                    <div className="absolute inset-0 flex items-end justify-center p-4 space-x-2">
                      {[65, 45, 80, 35, 70, 90, 55, 75, 60, 85, 40, 95].map((height, i) => (
                        <div
                          key={i}
                          className="bg-gradient-to-t from-blue-500 to-blue-400 rounded-t-sm opacity-80 hover:opacity-100 transition-all duration-300 animate-pulse"
                          style={{ 
                            height: `${height}%`, 
                            width: '12px',
                            animationDelay: `${i * 0.1}s`
                          }}
                        ></div>
                      ))}
                    </div>
                    
                    {/* Chart Grid Lines */}
                    <div className="absolute inset-0 flex flex-col justify-between p-4">
                      {[...Array(5)].map((_, i) => (
                        <div key={i} className="w-full h-px bg-white opacity-20"></div>
                      ))}
                    </div>

                    {/* Revenue Growth Indicator */}
                    <div className="absolute top-4 left-4 bg-white rounded-lg p-3 shadow-lg">
                      <div className="text-xs text-gray-600 mb-1">Revenue Growth</div>
                      <div className="text-xl font-bold text-gray-900 flex items-center gap-1">
                        +24.5%
                        <TrendingUpIcon size={16} className="text-green-500" />
                      </div>
                    </div>
                  </div>

                  {/* Dashboard Metrics */}
                  <div className="grid grid-cols-3 gap-4">
                    <div className="bg-gradient-to-br from-green-50 to-green-100 p-4 rounded-xl text-center">
                      <div className="text-xs text-gray-600 mb-1">Conversion</div>
                      <div className="text-lg font-bold text-gray-900">3.2%</div>
                      <div className="text-xs text-green-600 flex items-center justify-center gap-1">
                        <TrendingUpIcon size={10} />
                        +0.5%
                      </div>
                    </div>
                    <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-4 rounded-xl text-center">
                      <div className="text-xs text-gray-600 mb-1">Revenue</div>
                      <div className="text-lg font-bold text-gray-900">$48.5K</div>
                      <div className="text-xs text-blue-600 flex items-center justify-center gap-1">
                        <TrendingUpIcon size={10} />
                        +12%
                      </div>
                    </div>
                    <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-4 rounded-xl text-center">
                      <div className="text-xs text-gray-600 mb-1">Users</div>
                      <div className="text-lg font-bold text-gray-900">12.4K</div>
                      <div className="text-xs text-purple-600 flex items-center justify-center gap-1">
                        <UsersIcon size={10} />
                        +8%
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating Elements */}
                <div className="absolute -top-6 -right-6 bg-white p-4 rounded-2xl shadow-2xl border border-gray-100 backdrop-blur-sm">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <div className="text-xs text-gray-600 font-medium">Live</div>
                  </div>
                  <div className="text-2xl font-bold text-gray-900">+127%</div>
                  <div className="text-xs text-green-600 font-medium">Growth</div>
                </div>
                
                <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-2xl border border-gray-100 backdrop-blur-sm">
                  <div className="flex items-center gap-2 mb-2">
                    <UsersIcon size={12} className="text-blue-600" />
                    <div className="text-xs text-gray-600 font-medium">Active</div>
                  </div>
                  <div className="text-2xl font-bold text-gray-900">12.4K</div>
                  <div className="text-xs text-blue-600 font-medium">Online</div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute top-1/2 -right-4 w-8 h-8 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-lg rotate-45 opacity-80"></div>
                <div className="absolute bottom-1/4 -left-4 w-6 h-6 bg-gradient-to-br from-pink-400 to-purple-500 rounded-full opacity-70"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Supported Brands Section */}
        <section className="bg-gray-50 py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <p className="text-gray-500 font-medium mb-8">
                Trusted by industry leaders worldwide
              </p>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
                {brands.map((brand, index) => (
                  <div key={index} className="flex items-center justify-center opacity-60 hover:opacity-100 transition-opacity duration-200">
                    <span className="text-lg lg:text-xl font-bold text-gray-700">
                      {brand.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Stats Section */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="flex justify-center mb-3">
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

        {/* Enhanced Features Section */}
        <section id="features" className="container mx-auto px-4 py-20 lg:py-28">
          <div className="text-center mb-16 lg:mb-20">
            <Badge className="bg-blue-50 text-blue-700 border-blue-200 px-4 py-2 rounded-full font-medium mb-6">
              ✨ Features
            </Badge>
            <h2 className="text-3xl lg:text-5xl font-bold mb-6 text-gray-900">
              Everything You Need to{" "}
              <span className="text-blue-600">Succeed</span>
            </h2>
            <p className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Our comprehensive platform provides all the tools and features you need to build, grow, and scale your business effectively.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
            {features.map((feature, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-2xl transition-all duration-300 bg-white rounded-2xl overflow-hidden group hover:-translate-y-2">
                <CardContent className="p-8 lg:p-10">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    {feature.icon}
                  </div>
                  <h3 className="text-xl lg:text-2xl font-bold mb-4 text-gray-900">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-lg">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Enhanced Analytics Section */}
        <section className="container mx-auto px-4 py-20 lg:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <Badge className="bg-purple-50 text-purple-700 border-purple-200 px-4 py-2 rounded-full font-medium">
                  📊 Analytics
                </Badge>
                <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 leading-tight">
                  Make Data-Driven{" "}
                  <span className="text-blue-600">Decisions</span>
                </h2>
                <p className="text-lg lg:text-xl text-gray-600 leading-relaxed">
                  Get comprehensive insights into your business performance with our advanced analytics dashboard. Track key metrics, identify trends, and make informed decisions.
                </p>
              </div>
              
              <div className="space-y-6">
                {[
                  { label: "Real-time Data Processing", value: "99.9% Accuracy" },
                  { label: "Custom Report Generation", value: "50+ Templates" },
                  { label: "API Integration", value: "200+ Connectors" },
                ].map((item, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                    <span className="text-gray-700 font-medium">{item.label}</span>
                    <span className="text-blue-600 font-bold">{item.value}</span>
                  </div>
                ))}
              </div>
              
              <Button className="group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-2xl transform hover:-translate-y-1 flex items-center gap-3">
                <BarChart3Icon size={20} className="group-hover:scale-110 transition-transform duration-300" />
                Explore Analytics 
                <ArrowRightIcon size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-3xl p-8">
                <div className="bg-white rounded-2xl shadow-2xl p-6 lg:p-8">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-lg font-bold text-gray-900">Performance Overview</h3>
                    <Badge className="bg-green-50 text-green-700 border-green-200">Live</Badge>
                  </div>
                  
                  {/* Enhanced chart visualization */}
                  <div className="h-48 bg-gradient-to-br from-blue-50 to-indigo-100 rounded-xl relative overflow-hidden mb-6">
                    <div className="absolute inset-0 flex items-end justify-center p-4 space-x-2">
                      {[65, 45, 80, 35, 70, 90, 55, 75, 60, 85, 40, 95].map((height, i) => (
                        <div
                          key={i}
                          className="bg-blue-500 rounded-t-sm opacity-80 hover:opacity-100 transition-opacity duration-200"
                          style={{ height: `${height}%`, width: '16px' }}
                        ></div>
                      ))}
                    </div>
                    <div className="absolute top-4 left-4">
                      <div className="text-sm text-gray-600">Revenue Growth</div>
                      <div className="text-2xl font-bold text-gray-900">+24.5%</div>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-4">
                    <div className="bg-gray-50 p-4 rounded-xl text-center">
                      <div className="text-sm text-gray-600 mb-1">Conversion</div>
                      <div className="text-xl font-bold text-gray-900">3.2%</div>
                      <div className="text-xs text-green-600">+0.5%</div>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-xl text-center">
                      <div className="text-sm text-gray-600 mb-1">Revenue</div>
                      <div className="text-xl font-bold text-gray-900">$48.5K</div>
                      <div className="text-xs text-green-600">+12%</div>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-xl text-center">
                      <div className="text-sm text-gray-600 mb-1">Users</div>
                      <div className="text-xl font-bold text-gray-900">12.4K</div>
                      <div className="text-xs text-blue-600">+8%</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Enhanced Testimonials Section */}
        <section id="testimonials" className="bg-gray-50 py-20 lg:py-28">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16 lg:mb-20">
              <Badge className="bg-green-50 text-green-700 border-green-200 px-4 py-2 rounded-full font-medium mb-6">
                💬 Testimonials
              </Badge>
              <h2 className="text-3xl lg:text-5xl font-bold mb-6 text-gray-900">
                Loved by Thousands of{" "}
                <span className="text-blue-600">Customers</span>
              </h2>
              <p className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Don't just take our word for it. Here's what our customers have to say about their experience with QuickSpace.
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="border-0 shadow-lg hover:shadow-2xl transition-all duration-300 bg-white rounded-2xl hover:-translate-y-2">
                  <CardContent className="p-8 lg:p-10">
                    <div className="flex text-yellow-400 mb-6">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <StarIcon key={i} size={20} fill="currentColor" />
                      ))}
                    </div>
                    <p className="text-lg lg:text-xl text-gray-700 mb-8 leading-relaxed">
                      "{testimonial.quote}"
                    </p>
                    <div className="flex items-center gap-4">
                      <img
                        src={testimonial.avatar}
                        alt={testimonial.author}
                        className="w-14 h-14 rounded-full object-cover shadow-md"
                      />
                      <div>
                        <div className="font-bold text-gray-900 text-lg">
                          {testimonial.author}
                        </div>
                        <div className="text-gray-600">
                          {testimonial.role}
                        </div>
                        <div className="text-blue-600 text-sm font-medium">
                          {testimonial.company}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Enhanced Pricing Section */}
        <section id="pricing" className="container mx-auto px-4 py-20 lg:py-28">
          <div className="text-center mb-16 lg:mb-20">
            <Badge className="bg-orange-50 text-orange-700 border-orange-200 px-4 py-2 rounded-full font-medium mb-6">
              💰 Pricing
            </Badge>
            <h2 className="text-3xl lg:text-5xl font-bold mb-6 text-gray-900">
              Choose Your Perfect{" "}
              <span className="text-blue-600">Plan</span>
            </h2>
            <p className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto mb-8 leading-relaxed">
              Flexible pricing options designed to grow with your business. Start free and upgrade as you scale.
            </p>
            <div className="inline-block">
              <Tabs defaultValue="monthly" className="w-[320px]">
                <TabsList className="grid w-full grid-cols-2 bg-gray-100 p-1 rounded-xl">
                  <TabsTrigger value="monthly" className="rounded-lg font-semibold">Monthly</TabsTrigger>
                  <TabsTrigger value="yearly" className="rounded-lg font-semibold">
                    Yearly
                    <Badge className="ml-2 bg-green-100 text-green-700 text-xs">Save 20%</Badge>
                  </TabsTrigger>
                </TabsList>
              </Tabs>
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            {pricingPlans.map((plan, index) => (
              <Card
                key={index}
                className={`border-2 rounded-2xl transition-all duration-300 hover:shadow-2xl ${
                  plan.popular 
                    ? "border-blue-600 shadow-2xl bg-white relative scale-105" 
                    : "border-gray-200 shadow-lg bg-white hover:border-blue-300"
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-blue-600 text-white px-6 py-2 rounded-full font-semibold shadow-lg">
                      {plan.badge}
                    </Badge>
                  </div>
                )}
                <CardContent className="p-8 lg:p-10">
                  <div className="mb-8">
                    <h3 className="text-2xl font-bold mb-3 text-gray-900">{plan.name}</h3>
                    <p className="text-gray-600 leading-relaxed">
                      {plan.description}
                    </p>
                  </div>
                  <div className="mb-8">
                    <div className="flex items-baseline">
                      <span className="text-4xl lg:text-5xl font-bold text-gray-900">{plan.price}</span>
                      {plan.period !== "pricing" && (
                        <span className="text-gray-600 ml-3 text-lg">
                          {plan.period}
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="mb-8">
                    <ul className="space-y-4">
                      {plan.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-3">
                          <CheckIcon size={20} className="text-green-500 flex-shrink-0" />
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Link to="/get-started">
                    <Button
                      className={`w-full py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:-translate-y-1 ${
                        plan.popular
                          ? "bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg hover:shadow-2xl"
                          : "border-2 border-gray-300 text-gray-700 hover:bg-gray-50 hover:shadow-lg"
                      }`}
                      variant={plan.popular ? "default" : "outline"}
                    >
                      {plan.buttonText}
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Enhanced Newsletter Section */}
        <section className="container mx-auto px-4 py-20 lg:py-28">
          <div className="bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 rounded-3xl p-8 lg:p-16 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-purple-600/20"></div>
            <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -translate-y-48 translate-x-48"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full translate-y-48 -translate-x-48"></div>
            
            <div className="relative z-10">
              <div className="text-center mb-12">
                <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">
                  Stay Updated with{" "}
                  <span className="text-blue-200">QuickSpace</span>
                </h2>
                <p className="text-lg lg:text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
                  Get the latest updates, feature announcements, and exclusive insights delivered straight to your inbox. Join thousands of professionals who trust QuickSpace.
                </p>
              </div>
              
              <div className="max-w-md mx-auto">
                <div className="flex flex-col sm:flex-row gap-4">
                  <Input 
                    placeholder="Enter your email address" 
                    className="flex-1 px-6 py-4 rounded-xl border-0 bg-white/10 backdrop-blur-sm text-white placeholder-blue-200 focus:bg-white/20 text-lg"
                  />
                  <Button className="group bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-2xl transform hover:-translate-y-1 flex items-center gap-2">
                    <RocketIcon size={18} className="group-hover:scale-110 transition-transform duration-300" />
                    Subscribe Now
                  </Button>
                </div>
                <p className="text-blue-200 text-sm mt-4 text-center">
                  No spam, unsubscribe at any time. We respect your privacy.
                </p>
              </div>
              
              <div className="flex justify-center mt-12">
                <div className="flex items-center gap-8 text-blue-200">
                  <div className="flex items-center gap-2">
                    <CheckIcon size={16} />
                    <span className="text-sm">Weekly insights</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckIcon size={16} />
                    <span className="text-sm">Product updates</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckIcon size={16} />
                    <span className="text-sm">Exclusive content</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Enhanced Footer */}
      <footer className="bg-gray-900 text-white py-16 lg:py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-12 mb-12">
            <div className="lg:col-span-2 space-y-6">
              <div className="text-2xl font-bold">
                <span className="text-blue-400">→</span>QuickSpace
              </div>
              <p className="text-gray-400 leading-relaxed max-w-md">
                Empowering businesses worldwide with innovative solutions that drive growth, efficiency, and success in the digital age.
              </p>
              <div className="text-gray-400 space-y-2">
                <p className="flex items-center gap-2">
                  <span>📧</span> hello@quickspace.com
                </p>
                <p className="flex items-center gap-2">
                  <span>📞</span> +1 (555) 123-4567
                </p>
                <p className="flex items-center gap-2">
                  <span>📍</span> San Francisco, CA
                </p>
              </div>
              <div className="flex gap-4">
                <Button variant="ghost" size="icon" className="rounded-full hover:bg-gray-800 text-gray-400 hover:text-white transition-colors duration-200">
                  <FacebookIcon size={20} />
                </Button>
                <Button variant="ghost" size="icon" className="rounded-full hover:bg-gray-800 text-gray-400 hover:text-white transition-colors duration-200">
                  <TwitterIcon size={20} />
                </Button>
                <Button variant="ghost" size="icon" className="rounded-full hover:bg-gray-800 text-gray-400 hover:text-white transition-colors duration-200">
                  <InstagramIcon size={20} />
                </Button>
                <Button variant="ghost" size="icon" className="rounded-full hover:bg-gray-800 text-gray-400 hover:text-white transition-colors duration-200">
                  <LinkedinIcon size={20} />
                </Button>
              </div>
            </div>
            
            <div>
              <h3 className="font-bold mb-6 text-lg">Product</h3>
              <ul className="space-y-3">
                {footerLinks.product.map((link, index) => (
                  <li key={index}>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-white transition-colors duration-200"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h3 className="font-bold mb-6 text-lg">Company</h3>
              <ul className="space-y-3">
                {footerLinks.company.map((link, index) => (
                  <li key={index}>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-white transition-colors duration-200"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h3 className="font-bold mb-6 text-lg">Resources</h3>
              <ul className="space-y-3">
                {footerLinks.resources.map((link, index) => (
                  <li key={index}>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-white transition-colors duration-200"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8 flex flex-col lg:flex-row justify-between items-center gap-4">
            <div className="text-gray-400">
              © 2024 QuickSpace. All rights reserved.
            </div>
            <div className="flex gap-6 text-gray-400">
              <a href="#" className="hover:text-white transition-colors duration-200">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-white transition-colors duration-200">
                Terms of Service
              </a>
              <a href="#" className="hover:text-white transition-colors duration-200">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};