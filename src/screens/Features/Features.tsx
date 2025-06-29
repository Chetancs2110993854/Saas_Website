import {
  ArrowRightIcon,
  CheckIcon,
  BarChart3Icon,
  ShieldCheckIcon,
  ZapIcon,
  UsersIcon,
  TrendingUpIcon,
  HeadphonesIcon,
  CloudIcon,
  DatabaseIcon,
  CogIcon,
  BellIcon,
  LockIcon,
  GlobeIcon,
  SmartphoneIcon,
  MonitorIcon,
  PieChartIcon,
  ActivityIcon,
  SettingsIcon,
  LayersIcon,
  RefreshCwIcon,
  SearchIcon,
  FilterIcon,
  DownloadIcon,
  ShareIcon,
} from "lucide-react";
import React from "react";
import { Badge } from "../../components/ui/badge";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import { Navigation } from "../../components/Navigation";

export const Features = (): JSX.Element => {
  const mainFeatures = [
    {
      title: "Advanced Analytics Dashboard",
      description: "Get comprehensive insights with real-time data visualization, custom reports, and predictive analytics to make informed business decisions.",
      icon: <BarChart3Icon size={40} className="text-blue-600" />,
      color: "from-blue-50 to-blue-100",
      features: ["Real-time data processing", "Custom report builder", "Predictive analytics", "Data export options"]
    },
    {
      title: "Enterprise Security",
      description: "Bank-level security with end-to-end encryption, multi-factor authentication, and compliance with industry standards.",
      icon: <ShieldCheckIcon size={40} className="text-green-600" />,
      color: "from-green-50 to-green-100",
      features: ["End-to-end encryption", "Multi-factor authentication", "SOC 2 compliance", "Regular security audits"]
    },
    {
      title: "Lightning Performance",
      description: "Optimized for speed with global CDN, intelligent caching, and performance monitoring to ensure instant loading.",
      icon: <ZapIcon size={40} className="text-yellow-600" />,
      color: "from-yellow-50 to-yellow-100",
      features: ["Global CDN network", "Intelligent caching", "Performance monitoring", "99.9% uptime guarantee"]
    },
    {
      title: "Team Collaboration",
      description: "Seamless collaboration tools with real-time editing, commenting, task management, and team communication features.",
      icon: <UsersIcon size={40} className="text-purple-600" />,
      color: "from-purple-50 to-purple-100",
      features: ["Real-time collaboration", "Task management", "Team chat", "Permission controls"]
    },
    {
      title: "Growth Tracking",
      description: "Monitor business growth with advanced metrics, KPI tracking, goal setting, and automated reporting features.",
      icon: <TrendingUpIcon size={40} className="text-indigo-600" />,
      color: "from-indigo-50 to-indigo-100",
      features: ["KPI tracking", "Goal setting", "Automated reports", "Growth forecasting"]
    },
    {
      title: "24/7 Expert Support",
      description: "Round-the-clock support from our expert team with live chat, phone support, and comprehensive documentation.",
      icon: <HeadphonesIcon size={40} className="text-red-600" />,
      color: "from-red-50 to-red-100",
      features: ["24/7 live chat", "Phone support", "Video tutorials", "Knowledge base"]
    },
  ];

  const additionalFeatures = [
    { title: "Cloud Infrastructure", icon: <CloudIcon size={24} className="text-blue-600" />, description: "Scalable cloud infrastructure that grows with your business" },
    { title: "Database Management", icon: <DatabaseIcon size={24} className="text-green-600" />, description: "Powerful database tools with backup and recovery" },
    { title: "Automation Tools", icon: <CogIcon size={24} className="text-purple-600" />, description: "Automate repetitive tasks and workflows" },
    { title: "Smart Notifications", icon: <BellIcon size={24} className="text-orange-600" />, description: "Intelligent alerts and notification system" },
    { title: "Advanced Security", icon: <LockIcon size={24} className="text-red-600" />, description: "Multi-layered security with threat detection" },
    { title: "Global Reach", icon: <GlobeIcon size={24} className="text-indigo-600" />, description: "Serve customers worldwide with localization" },
    { title: "Mobile Optimized", icon: <SmartphoneIcon size={24} className="text-pink-600" />, description: "Fully responsive design for all devices" },
    { title: "Desktop Apps", icon: <MonitorIcon size={24} className="text-teal-600" />, description: "Native desktop applications for productivity" },
    { title: "Advanced Reports", icon: <PieChartIcon size={24} className="text-yellow-600" />, description: "Detailed reporting with custom visualizations" },
    { title: "Activity Monitoring", icon: <ActivityIcon size={24} className="text-blue-500" />, description: "Track user activity and system performance" },
    { title: "Custom Settings", icon: <SettingsIcon size={24} className="text-gray-600" />, description: "Flexible configuration options" },
    { title: "API Integration", icon: <LayersIcon size={24} className="text-green-500" />, description: "Connect with your favorite tools and services" },
  ];

  const integrations = [
    { name: "Slack", category: "Communication" },
    { name: "Google Workspace", category: "Productivity" },
    { name: "Microsoft Teams", category: "Communication" },
    { name: "Salesforce", category: "CRM" },
    { name: "HubSpot", category: "Marketing" },
    { name: "Stripe", category: "Payments" },
    { name: "Zapier", category: "Automation" },
    { name: "GitHub", category: "Development" },
    { name: "Jira", category: "Project Management" },
    { name: "Trello", category: "Task Management" },
    { name: "Dropbox", category: "Storage" },
    { name: "AWS", category: "Cloud Services" },
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
              🚀 Powerful Features
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold leading-tight text-gray-900 mb-6">
              Everything You Need to{" "}
              <span className="text-blue-600 relative">
                Succeed
                <div className="absolute -bottom-2 left-0 w-full h-3 bg-blue-200 opacity-30 rounded-full"></div>
              </span>
            </h1>
            <p className="text-lg lg:text-xl text-gray-600 leading-relaxed mb-8 max-w-3xl mx-auto">
              Discover the comprehensive suite of features designed to streamline your workflow, boost productivity, and drive business growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 shadow-lg hover:shadow-xl flex items-center gap-2">
                Start Free Trial
                <ArrowRightIcon size={20} />
              </Button>
              <Button
                variant="outline"
                className="border-2 border-gray-300 text-gray-700 hover:bg-gray-50 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200"
              >
                View Demo
              </Button>
            </div>
          </div>
        </section>

        {/* Main Features Section */}
        <section className="container mx-auto px-4 py-20 lg:py-28">
          <div className="text-center mb-16 lg:mb-20">
            <h2 className="text-3xl lg:text-5xl font-bold mb-6 text-gray-900">
              Core Features That{" "}
              <span className="text-blue-600">Drive Results</span>
            </h2>
            <p className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Our platform combines powerful functionality with intuitive design to deliver exceptional results for your business.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {mainFeatures.map((feature, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-2xl transition-all duration-300 bg-white rounded-2xl overflow-hidden group hover:-translate-y-2">
                <CardContent className="p-8 lg:p-10">
                  <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    {feature.icon}
                  </div>
                  <h3 className="text-2xl lg:text-3xl font-bold mb-4 text-gray-900">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-lg mb-6">
                    {feature.description}
                  </p>
                  <div className="space-y-3">
                    {feature.features.map((item, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <CheckIcon size={16} className="text-green-500 flex-shrink-0" />
                        <span className="text-gray-700">{item}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Feature Illustration Section */}
        <section className="bg-gray-50 py-20 lg:py-28">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div className="space-y-8">
                <div className="space-y-6">
                  <Badge className="bg-purple-50 text-purple-700 border-purple-200 px-4 py-2 rounded-full font-medium">
                    📊 Analytics Power
                  </Badge>
                  <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 leading-tight">
                    Transform Data into{" "}
                    <span className="text-blue-600">Insights</span>
                  </h2>
                  <p className="text-lg lg:text-xl text-gray-600 leading-relaxed">
                    Our advanced analytics engine processes millions of data points to deliver actionable insights that drive business growth and optimize performance.
                  </p>
                </div>
                
                <div className="grid grid-cols-2 gap-6">
                  <div className="bg-white p-6 rounded-xl shadow-md">
                    <RefreshCwIcon size={24} className="text-blue-600 mb-3" />
                    <h4 className="font-bold text-gray-900 mb-2">Real-time Updates</h4>
                    <p className="text-gray-600 text-sm">Live data synchronization across all platforms</p>
                  </div>
                  <div className="bg-white p-6 rounded-xl shadow-md">
                    <SearchIcon size={24} className="text-green-600 mb-3" />
                    <h4 className="font-bold text-gray-900 mb-2">Smart Search</h4>
                    <p className="text-gray-600 text-sm">AI-powered search with intelligent filtering</p>
                  </div>
                  <div className="bg-white p-6 rounded-xl shadow-md">
                    <FilterIcon size={24} className="text-purple-600 mb-3" />
                    <h4 className="font-bold text-gray-900 mb-2">Advanced Filters</h4>
                    <p className="text-gray-600 text-sm">Customize views with powerful filtering options</p>
                  </div>
                  <div className="bg-white p-6 rounded-xl shadow-md">
                    <DownloadIcon size={24} className="text-orange-600 mb-3" />
                    <h4 className="font-bold text-gray-900 mb-2">Export Data</h4>
                    <p className="text-gray-600 text-sm">Export in multiple formats for external use</p>
                  </div>
                </div>
              </div>
              
              {/* Analytics Dashboard Illustration */}
              <div className="relative">
                <div className="bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 rounded-3xl p-8 lg:p-12 overflow-hidden">
                  {/* Background decoration */}
                  <div className="absolute inset-0">
                    <div className="absolute top-10 left-10 w-16 h-16 bg-blue-200 rounded-full opacity-20 animate-pulse"></div>
                    <div className="absolute top-32 right-16 w-12 h-12 bg-purple-200 rounded-full opacity-30"></div>
                    <div className="absolute bottom-20 left-20 w-8 h-8 bg-indigo-200 rounded-full opacity-25"></div>
                  </div>

                  {/* Dashboard Interface */}
                  <div className="relative z-10 bg-white rounded-2xl shadow-2xl p-6 border border-gray-100">
                    {/* Header */}
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                          <BarChart3Icon size={16} className="text-white" />
                        </div>
                        <h3 className="text-lg font-bold text-gray-900">Analytics Overview</h3>
                      </div>
                      <div className="flex gap-2">
                        <Button size="sm" variant="outline" className="text-xs">
                          <ShareIcon size={12} className="mr-1" />
                          Share
                        </Button>
                      </div>
                    </div>

                    {/* Chart Area */}
                    <div className="h-40 bg-gradient-to-br from-blue-50 to-indigo-100 rounded-xl relative overflow-hidden mb-6">
                      {/* Animated Chart */}
                      <div className="absolute inset-0 flex items-end justify-center p-4 space-x-1">
                        {[75, 45, 85, 35, 70, 90, 55, 80, 60, 95, 40, 88].map((height, i) => (
                          <div
                            key={i}
                            className="bg-gradient-to-t from-blue-500 to-blue-400 rounded-t-sm opacity-80 hover:opacity-100 transition-all duration-300"
                            style={{ 
                              height: `${height}%`, 
                              width: '8px',
                              animationDelay: `${i * 0.1}s`
                            }}
                          ></div>
                        ))}
                      </div>
                      
                      {/* Trend Line */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-full h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent opacity-50"></div>
                      </div>
                    </div>

                    {/* Metrics Grid */}
                    <div className="grid grid-cols-3 gap-4">
                      <div className="bg-gradient-to-br from-green-50 to-green-100 p-4 rounded-xl text-center">
                        <div className="text-xs text-gray-600 mb-1">Revenue</div>
                        <div className="text-lg font-bold text-gray-900">$52.3K</div>
                        <div className="text-xs text-green-600 flex items-center justify-center gap-1">
                          <TrendingUpIcon size={10} />
                          +15.2%
                        </div>
                      </div>
                      <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-4 rounded-xl text-center">
                        <div className="text-xs text-gray-600 mb-1">Users</div>
                        <div className="text-lg font-bold text-gray-900">14.8K</div>
                        <div className="text-xs text-blue-600 flex items-center justify-center gap-1">
                          <UsersIcon size={10} />
                          +8.7%
                        </div>
                      </div>
                      <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-4 rounded-xl text-center">
                        <div className="text-xs text-gray-600 mb-1">Growth</div>
                        <div className="text-lg font-bold text-gray-900">+24%</div>
                        <div className="text-xs text-purple-600 flex items-center justify-center gap-1">
                          <ActivityIcon size={10} />
                          +3.1%
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Floating Elements */}
                  <div className="absolute -top-6 -right-6 bg-white p-4 rounded-2xl shadow-2xl border border-gray-100">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                      <div className="text-xs text-gray-600 font-medium">Active</div>
                    </div>
                    <div className="text-xl font-bold text-gray-900">2.4K</div>
                    <div className="text-xs text-green-600 font-medium">Online</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Additional Features Grid */}
        <section className="container mx-auto px-4 py-20 lg:py-28">
          <div className="text-center mb-16 lg:mb-20">
            <Badge className="bg-green-50 text-green-700 border-green-200 px-4 py-2 rounded-full font-medium mb-6">
              ⚡ More Features
            </Badge>
            <h2 className="text-3xl lg:text-5xl font-bold mb-6 text-gray-900">
              Comprehensive{" "}
              <span className="text-blue-600">Toolkit</span>
            </h2>
            <p className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Explore our extensive feature set designed to cover every aspect of your business operations.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
            {additionalFeatures.map((feature, index) => (
              <Card key={index} className="border-0 shadow-md hover:shadow-lg transition-all duration-300 bg-white rounded-xl group hover:-translate-y-1">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-gray-50 rounded-xl flex items-center justify-center mb-4 mx-auto group-hover:bg-gray-100 transition-colors duration-300">
                    {feature.icon}
                  </div>
                  <h3 className="text-lg font-bold mb-3 text-gray-900">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Integrations Section */}
        <section className="bg-gray-50 py-20 lg:py-28">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16 lg:mb-20">
              <Badge className="bg-orange-50 text-orange-700 border-orange-200 px-4 py-2 rounded-full font-medium mb-6">
                🔗 Integrations
              </Badge>
              <h2 className="text-3xl lg:text-5xl font-bold mb-6 text-gray-900">
                Connect with Your{" "}
                <span className="text-blue-600">Favorite Tools</span>
              </h2>
              <p className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Seamlessly integrate with over 200+ popular tools and services to create a unified workflow.
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
              {integrations.map((integration, index) => (
                <Card key={index} className="border-0 shadow-md hover:shadow-lg transition-all duration-300 bg-white rounded-xl group hover:-translate-y-1">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-50 to-indigo-100 rounded-xl flex items-center justify-center mb-4 mx-auto">
                      <div className="w-6 h-6 bg-blue-600 rounded opacity-80"></div>
                    </div>
                    <h3 className="text-lg font-bold mb-2 text-gray-900">
                      {integration.name}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {integration.category}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <div className="text-center mt-12">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 shadow-lg hover:shadow-xl">
                View All Integrations
              </Button>
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
                Ready to Experience{" "}
                <span className="text-blue-200">These Features?</span>
              </h2>
              <p className="text-lg lg:text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed mb-8">
                Start your free trial today and discover how our comprehensive feature set can transform your business operations.
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