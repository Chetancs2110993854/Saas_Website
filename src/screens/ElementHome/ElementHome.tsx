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
  SearchIcon,
  MonitorIcon,
  SmartphoneIcon,
  GlobeIcon,
  EyeIcon,
  MousePointerIcon,
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
      title: "SEO Optimization",
      description:
        "Boost your search rankings with our advanced SEO tools and analytics. Get found by more customers online.",
      icon: <SearchIcon size={32} className="text-blue-600" />,
      color: "from-blue-50 to-blue-100",
    },
    {
      title: "Social Media Management",
      description:
        "Manage all your social platforms from one dashboard. Schedule posts, track engagement, and grow your following.",
      icon: <UsersIcon size={32} className="text-green-600" />,
      color: "from-green-50 to-green-100",
    },
    {
      title: "Website Analytics",
      description:
        "Get deep insights into your website performance with comprehensive analytics and real-time reporting.",
      icon: <BarChart3Icon size={32} className="text-purple-600" />,
      color: "from-purple-50 to-purple-100",
    },
    {
      title: "Online Reputation",
      description:
        "Monitor and manage your online reputation across all platforms. Respond to reviews and build trust.",
      icon: <ShieldCheckIcon size={32} className="text-yellow-600" />,
      color: "from-yellow-50 to-yellow-100",
    },
    {
      title: "Content Creation",
      description:
        "Create engaging content that converts. AI-powered tools help you craft compelling copy and visuals.",
      icon: <ZapIcon size={32} className="text-indigo-600" />,
      color: "from-indigo-50 to-indigo-100",
    },
    {
      title: "Performance Tracking",
      description:
        "Track your online presence growth with advanced metrics, goal setting, and automated reporting.",
      icon: <TrendingUpIcon size={32} className="text-red-600" />,
      color: "from-red-50 to-red-100",
    },
  ];

  const testimonials = [
    {
      quote:
        "StarBoost transformed our online presence completely. Our website traffic increased by 300% and our social media engagement is through the roof!",
      author: "Sarah Johnson",
      role: "CEO, TechFlow",
      avatar: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop",
      rating: 5,
      company: "TechFlow",
    },
    {
      quote:
        "The best investment we've made for our digital marketing. StarBoost's tools helped us reach customers we never knew existed.",
      author: "Michael Chen",
      role: "Marketing Director",
      avatar: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop",
      rating: 5,
      company: "InnovateCorp",
    },
    {
      quote:
        "Outstanding platform with incredible results. Our online reputation improved dramatically and customer trust has never been higher.",
      author: "Emily Rodriguez",
      role: "Brand Manager",
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
      description: "Perfect for small businesses starting their online journey",
      features: [
        "Basic SEO optimization",
        "Social media scheduling",
        "Website analytics",
        "Email support",
        "5 social accounts",
      ],
      buttonText: "Book a Demo",
      popular: false,
      badge: "Great for Startups",
    },
    {
      name: "Professional",
      price: "$99",
      period: "per month",
      description: "Ideal for growing businesses serious about online presence",
      features: [
        "Advanced SEO tools",
        "Multi-platform management",
        "Detailed analytics & reporting",
        "Priority support",
        "Unlimited social accounts",
        "Content creation tools",
        "Reputation monitoring",
      ],
      buttonText: "Book a Demo",
      popular: true,
      badge: "Most Popular",
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "pricing",
      description: "For large organizations with complex online presence needs",
      features: [
        "Custom SEO strategies",
        "Dedicated account manager",
        "Advanced analytics suite",
        "24/7 priority support",
        "White-label solutions",
        "API access",
        "Custom integrations",
        "Training & onboarding",
      ],
      buttonText: "Contact Sales",
      popular: false,
      badge: "Enterprise Grade",
    },
  ];

  const stats = [
    { value: "50K+", label: "Businesses Boosted", icon: <UsersIcon size={24} className="text-blue-600" /> },
    { value: "300%", label: "Avg. Traffic Increase", icon: <TrendingUpIcon size={24} className="text-green-600" /> },
    { value: "150+", label: "Countries Served", icon: <GlobeIcon size={24} className="text-purple-600" /> },
    { value: "24/7", label: "Expert Support", icon: <HeadphonesIcon size={24} className="text-orange-600" /> },
  ];

  const brands = [
    { name: "TechFlow", logo: "https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=120&h=60&fit=crop" },
    { name: "InnovateCorp", logo: "https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=120&h=60&fit=crop" },
    { name: "DesignStudio", logo: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=120&h=60&fit=crop" },
    { name: "GrowthCo", logo: "https://images.pexels.com/photos/164745/pexels-photo-164745.jpeg?auto=compress&cs=tinysrgb&w=120&h=60&fit=crop" },
    { name: "BrandMax", logo: "https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=120&h=60&fit=crop" },
    { name: "DigitalPro", logo: "https://images.pexels.com/photos/261679/pexels-photo-261679.jpeg?auto=compress&cs=tinysrgb&w=120&h=60&fit=crop" },
  ];

  const footerLinks = {
    product: ["Features", "SEO Tools", "Pricing", "API", "Documentation"],
    company: ["About Us", "Blog", "Careers", "Press Kit", "Contact"],
    resources: ["Help Center", "Community", "Webinars", "Case Studies", "Terms of Service"],
    solutions: ["For Startups", "For Enterprise", "For Agencies", "For E-commerce", "For Local Business"],
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
                  🚀 New: AI-Powered SEO Tools
                </Badge>
                <h1 className="text-4xl lg:text-6xl font-bold leading-tight text-gray-900">
                  Boost Your{" "}
                  <span className="text-blue-600 relative">
                    Online Presence
                    <div className="absolute -bottom-2 left-0 w-full h-3 bg-blue-200 opacity-30 rounded-full"></div>
                  </span>{" "}
                  Like Never Before
                </h1>
                <p className="text-lg lg:text-xl text-gray-600 leading-relaxed max-w-lg">
                  Transform your digital footprint with our comprehensive suite of tools. From SEO optimization to social media management, we help businesses shine online.
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
                  <span className="text-gray-600 font-medium">Trusted by 50,000+ businesses</span>
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

                {/* Main Online Presence Dashboard Illustration */}
                <div className="relative z-10 bg-white rounded-2xl shadow-2xl p-6 lg:p-8 border border-gray-100">
                  {/* Dashboard Header */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                        <TrendingUpIcon size={16} className="text-white" />
                      </div>
                      <h3 className="text-lg font-bold text-gray-900">Online Presence Dashboard</h3>
                    </div>
                    <div className="flex gap-2">
                      <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                    </div>
                  </div>

                  {/* Online Presence Metrics */}
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-4 rounded-xl text-center">
                      <SearchIcon size={20} className="text-blue-600 mx-auto mb-2" />
                      <div className="text-xs text-gray-600 mb-1">SEO Score</div>
                      <div className="text-lg font-bold text-gray-900">94/100</div>
                      <div className="text-xs text-green-600 flex items-center justify-center gap-1">
                        <TrendingUpIcon size={10} />
                        +12%
                      </div>
                    </div>
                    <div className="bg-gradient-to-br from-green-50 to-green-100 p-4 rounded-xl text-center">
                      <UsersIcon size={20} className="text-green-600 mx-auto mb-2" />
                      <div className="text-xs text-gray-600 mb-1">Social Reach</div>
                      <div className="text-lg font-bold text-gray-900">48.5K</div>
                      <div className="text-xs text-green-600 flex items-center justify-center gap-1">
                        <TrendingUpIcon size={10} />
                        +24%
                      </div>
                    </div>
                    <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-4 rounded-xl text-center">
                      <EyeIcon size={20} className="text-purple-600 mx-auto mb-2" />
                      <div className="text-xs text-gray-600 mb-1">Visibility</div>
                      <div className="text-lg font-bold text-gray-900">87%</div>
                      <div className="text-xs text-purple-600 flex items-center justify-center gap-1">
                        <TrendingUpIcon size={10} />
                        +18%
                      </div>
                    </div>
                  </div>

                  {/* Growth Chart Area */}
                  <div className="h-32 bg-gradient-to-br from-blue-50 to-indigo-100 rounded-xl relative overflow-hidden mb-4">
                    {/* Animated Growth Bars */}
                    <div className="absolute inset-0 flex items-end justify-center p-4 space-x-2">
                      {[45, 65, 80, 55, 90, 75, 95, 85, 70, 88, 92, 98].map((height, i) => (
                        <div
                          key={i}
                          className="bg-gradient-to-t from-blue-500 to-blue-400 rounded-t-sm opacity-80 hover:opacity-100 transition-all duration-300 animate-pulse"
                          style={{ 
                            height: `${height}%`, 
                            width: '8px',
                            animationDelay: `${i * 0.1}s`
                          }}
                        ></div>
                      ))}
                    </div>
                    
                    {/* Growth Trend Line */}
                    <div className="absolute top-4 left-4 bg-white rounded-lg p-2 shadow-lg">
                      <div className="text-xs text-gray-600 mb-1">Growth Trend</div>
                      <div className="text-lg font-bold text-gray-900 flex items-center gap-1">
                        +127%
                        <TrendingUpIcon size={14} className="text-green-500" />
                      </div>
                    </div>
                  </div>

                  {/* Platform Status */}
                  <div className="grid grid-cols-4 gap-2">
                    <div className="bg-blue-50 p-2 rounded-lg text-center">
                      <MonitorIcon size={16} className="text-blue-600 mx-auto mb-1" />
                      <div className="text-xs text-gray-600">Website</div>
                      <div className="text-xs font-bold text-green-600">Active</div>
                    </div>
                    <div className="bg-green-50 p-2 rounded-lg text-center">
                      <UsersIcon size={16} className="text-green-600 mx-auto mb-1" />
                      <div className="text-xs text-gray-600">Social</div>
                      <div className="text-xs font-bold text-green-600">Growing</div>
                    </div>
                    <div className="bg-purple-50 p-2 rounded-lg text-center">
                      <SearchIcon size={16} className="text-purple-600 mx-auto mb-1" />
                      <div className="text-xs text-gray-600">SEO</div>
                      <div className="text-xs font-bold text-green-600">Optimized</div>
                    </div>
                    <div className="bg-orange-50 p-2 rounded-lg text-center">
                      <StarIcon size={16} className="text-orange-600 mx-auto mb-1" />
                      <div className="text-xs text-gray-600">Reviews</div>
                      <div className="text-xs font-bold text-green-600">4.9★</div>
                    </div>
                  </div>
                </div>

                {/* Floating Elements */}
                <div className="absolute -top-6 -right-6 bg-white p-4 rounded-2xl shadow-2xl border border-gray-100 backdrop-blur-sm">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <div className="text-xs text-gray-600 font-medium">Live Traffic</div>
                  </div>
                  <div className="text-2xl font-bold text-gray-900">+347%</div>
                  <div className="text-xs text-green-600 font-medium">This Month</div>
                </div>
                
                <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-2xl border border-gray-100 backdrop-blur-sm">
                  <div className="flex items-center gap-2 mb-2">
                    <StarIcon size={12} className="text-yellow-500" />
                    <div className="text-xs text-gray-600 font-medium">Rating</div>
                  </div>
                  <div className="text-2xl font-bold text-gray-900">4.9/5</div>
                  <div className="text-xs text-blue-600 font-medium">Online Rep</div>
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
                Trusted by businesses worldwide to boost their online presence
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
              <span className="text-blue-600">Dominate Online</span>
            </h2>
            <p className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Our comprehensive platform provides all the tools you need to build, grow, and maintain a powerful online presence that drives real results.
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
                  Track Your{" "}
                  <span className="text-blue-600">Online Growth</span>
                </h2>
                <p className="text-lg lg:text-xl text-gray-600 leading-relaxed">
                  Get comprehensive insights into your online presence performance. Monitor SEO rankings, social media engagement, website traffic, and reputation metrics all in one place.
                </p>
              </div>
              
              <div className="space-y-6">
                {[
                  { label: "Real-time SEO Tracking", value: "99.9% Accuracy" },
                  { label: "Social Media Analytics", value: "50+ Platforms" },
                  { label: "Reputation Monitoring", value: "24/7 Alerts" },
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
                    <h3 className="text-lg font-bold text-gray-900">Online Presence Overview</h3>
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
                      <div className="text-sm text-gray-600">Online Visibility</div>
                      <div className="text-2xl font-bold text-gray-900">+347%</div>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-4">
                    <div className="bg-gray-50 p-4 rounded-xl text-center">
                      <div className="text-sm text-gray-600 mb-1">SEO Score</div>
                      <div className="text-xl font-bold text-gray-900">94/100</div>
                      <div className="text-xs text-green-600">+12%</div>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-xl text-center">
                      <div className="text-sm text-gray-600 mb-1">Social Reach</div>
                      <div className="text-xl font-bold text-gray-900">48.5K</div>
                      <div className="text-xs text-green-600">+24%</div>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-xl text-center">
                      <div className="text-sm text-gray-600 mb-1">Reputation</div>
                      <div className="text-xl font-bold text-gray-900">4.9★</div>
                      <div className="text-xs text-blue-600">+0.3</div>
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
                💬 Success Stories
              </Badge>
              <h2 className="text-3xl lg:text-5xl font-bold mb-6 text-gray-900">
                Loved by Thousands of{" "}
                <span className="text-blue-600">Businesses</span>
              </h2>
              <p className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Don't just take our word for it. Here's what our customers have to say about their online presence transformation with StarBoost.
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
              <span className="text-blue-600">Growth Plan</span>
            </h2>
            <p className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto mb-8 leading-relaxed">
              Transparent pricing with no hidden fees. Start free and scale as your online presence grows. All plans include our core features with varying limits and advanced capabilities.
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
                  <span className="text-blue-200">StarBoost</span>
                </h2>
                <p className="text-lg lg:text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
                  Get the latest online presence tips, SEO insights, and digital marketing strategies delivered straight to your inbox. Join thousands of business owners who trust StarBoost.
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
                    <span className="text-sm">SEO tips</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckIcon size={16} />
                    <span className="text-sm">Growth strategies</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckIcon size={16} />
                    <span className="text-sm">Exclusive insights</span>
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
                <span className="text-blue-400">⭐</span>StarBoost
              </div>
              <p className="text-gray-400 leading-relaxed max-w-md">
                Empowering businesses worldwide to dominate their online presence with innovative digital marketing solutions and expert guidance.
              </p>
              <div className="text-gray-400 space-y-2">
                <p className="flex items-center gap-2">
                  <span>📧</span> hello@starboost.com
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
              © 2024 StarBoost. All rights reserved.
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