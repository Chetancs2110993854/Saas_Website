import {
  ArrowRightIcon,
  CalendarIcon,
  ClockIcon,
  UserIcon,
  TagIcon,
  SearchIcon,
  TrendingUpIcon,
  BookOpenIcon,
  LightbulbIcon,
  RocketIcon,
  TargetIcon,
  StarIcon,
} from "lucide-react";
import React, { useState } from "react";
import { Badge } from "../../components/ui/badge";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import { Input } from "../../components/ui/input";
import { Navigation } from "../../components/Navigation";

export const Blogs = (): JSX.Element => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", "Business", "Technology", "Analytics", "Growth", "Tips"];

  const featuredPost = {
    title: "The Future of Business Analytics: AI-Driven Insights for 2024",
    excerpt: "Discover how artificial intelligence is revolutionizing business analytics and what it means for your company's future growth strategy.",
    author: "Sarah Johnson",
    date: "December 15, 2024",
    readTime: "8 min read",
    category: "Analytics",
    image: "featured",
    tags: ["AI", "Analytics", "Future", "Business Intelligence"]
  };

  const blogPosts = [
    {
      title: "10 Essential Features Every Modern Business Platform Needs",
      excerpt: "Learn about the must-have features that can transform your business operations and drive sustainable growth in today's competitive market.",
      author: "Michael Chen",
      date: "December 12, 2024",
      readTime: "6 min read",
      category: "Business",
      tags: ["Features", "Platform", "Business Growth"]
    },
    {
      title: "How to Boost Team Productivity with Smart Collaboration Tools",
      excerpt: "Explore proven strategies and tools that can enhance team collaboration and significantly improve overall productivity.",
      author: "Emily Rodriguez",
      date: "December 10, 2024",
      readTime: "5 min read",
      category: "Tips",
      tags: ["Productivity", "Collaboration", "Teams"]
    },
    {
      title: "Data Security Best Practices for Growing Businesses",
      excerpt: "Essential security measures every business should implement to protect sensitive data and maintain customer trust.",
      author: "David Kim",
      date: "December 8, 2024",
      readTime: "7 min read",
      category: "Technology",
      tags: ["Security", "Data Protection", "Best Practices"]
    },
    {
      title: "Scaling Your Business: When and How to Upgrade Your Tools",
      excerpt: "A comprehensive guide to recognizing growth signals and choosing the right tools to scale your business effectively.",
      author: "Lisa Thompson",
      date: "December 5, 2024",
      readTime: "9 min read",
      category: "Growth",
      tags: ["Scaling", "Business Tools", "Growth Strategy"]
    },
    {
      title: "The ROI of Business Automation: Real Numbers and Case Studies",
      excerpt: "Detailed analysis of automation benefits with real-world examples and measurable returns on investment.",
      author: "James Wilson",
      date: "December 3, 2024",
      readTime: "10 min read",
      category: "Business",
      tags: ["Automation", "ROI", "Case Studies"]
    },
    {
      title: "Customer Success Stories: How QuickSpace Transformed These Businesses",
      excerpt: "Real success stories from our customers who achieved remarkable growth using QuickSpace's comprehensive platform.",
      author: "Sarah Johnson",
      date: "December 1, 2024",
      readTime: "8 min read",
      category: "Growth",
      tags: ["Success Stories", "Customer Stories", "Growth"]
    },
    {
      title: "Integration Guide: Connecting Your Favorite Tools with QuickSpace",
      excerpt: "Step-by-step guide to integrating popular business tools with QuickSpace for a seamless workflow experience.",
      author: "Michael Chen",
      date: "November 28, 2024",
      readTime: "6 min read",
      category: "Technology",
      tags: ["Integration", "Workflow", "Tools"]
    },
    {
      title: "Analytics Deep Dive: Understanding Your Business Metrics",
      excerpt: "Learn how to interpret key business metrics and use analytics to make data-driven decisions that drive growth.",
      author: "Emily Rodriguez",
      date: "November 25, 2024",
      readTime: "11 min read",
      category: "Analytics",
      tags: ["Analytics", "Metrics", "Data-Driven Decisions"]
    },
    {
      title: "Remote Team Management: Best Practices for Distributed Teams",
      excerpt: "Effective strategies for managing remote teams, maintaining productivity, and fostering collaboration across distances.",
      author: "David Kim",
      date: "November 22, 2024",
      readTime: "7 min read",
      category: "Tips",
      tags: ["Remote Work", "Team Management", "Productivity"]
    }
  ];

  const filteredPosts = selectedCategory === "All" 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  const popularTags = ["Analytics", "Business Growth", "Productivity", "Security", "Automation", "Integration", "Remote Work", "AI"];

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Navigation */}
      <Navigation />

      <main>
        {/* Hero Section */}
        <section className="container mx-auto px-4 py-16 lg:py-24">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="bg-blue-50 text-blue-700 border-blue-200 px-4 py-2 rounded-full font-medium mb-6">
              📝 Blog & Insights
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold leading-tight text-gray-900 mb-6">
              Stay Ahead with{" "}
              <span className="text-blue-600 relative">
                Expert Insights
                <div className="absolute -bottom-2 left-0 w-full h-3 bg-blue-200 opacity-30 rounded-full"></div>
              </span>
            </h1>
            <p className="text-lg lg:text-xl text-gray-600 leading-relaxed mb-8 max-w-3xl mx-auto">
              Discover the latest trends, best practices, and expert insights to help you grow your business and stay competitive in today's market.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-md mx-auto relative">
              <SearchIcon size={20} className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <Input 
                placeholder="Search articles..." 
                className="pl-12 pr-4 py-4 rounded-xl border-2 border-gray-200 focus:border-blue-500 text-lg"
              />
            </div>
          </div>
        </section>

        {/* Featured Post */}
        <section className="container mx-auto px-4 py-12">
          <div className="mb-8">
            <Badge className="bg-orange-50 text-orange-700 border-orange-200 px-4 py-2 rounded-full font-medium">
              🔥 Featured Article
            </Badge>
          </div>
          
          <Card className="border-0 shadow-2xl bg-white rounded-2xl overflow-hidden hover:shadow-3xl transition-all duration-300">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              {/* Featured Post Illustration */}
              <div className="bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 p-8 lg:p-12 flex items-center justify-center">
                <div className="relative w-full max-w-sm">
                  {/* AI Brain Illustration */}
                  <div className="bg-white rounded-2xl shadow-xl p-8 relative">
                    <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full mx-auto mb-6 flex items-center justify-center">
                      <LightbulbIcon size={40} className="text-white" />
                    </div>
                    
                    {/* Neural Network Visualization */}
                    <div className="space-y-3">
                      <div className="flex justify-center space-x-2">
                        {[...Array(5)].map((_, i) => (
                          <div key={i} className="w-3 h-3 bg-blue-400 rounded-full opacity-60 animate-pulse" style={{ animationDelay: `${i * 0.2}s` }}></div>
                        ))}
                      </div>
                      <div className="flex justify-center space-x-2">
                        {[...Array(3)].map((_, i) => (
                          <div key={i} className="w-4 h-4 bg-purple-400 rounded-full opacity-80 animate-pulse" style={{ animationDelay: `${i * 0.3}s` }}></div>
                        ))}
                      </div>
                      <div className="flex justify-center">
                        <div className="w-6 h-6 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full animate-pulse"></div>
                      </div>
                    </div>
                    
                    {/* Floating Data Points */}
                    <div className="absolute -top-4 -left-4 w-8 h-8 bg-blue-200 rounded-full opacity-60"></div>
                    <div className="absolute -top-2 -right-6 w-6 h-6 bg-purple-200 rounded-full opacity-70"></div>
                    <div className="absolute -bottom-4 -right-2 w-10 h-10 bg-indigo-200 rounded-full opacity-50"></div>
                  </div>
                  
                  {/* Floating Analytics Cards */}
                  <div className="absolute -top-6 -right-8 bg-white p-3 rounded-xl shadow-lg border border-gray-100">
                    <div className="text-xs text-gray-600 mb-1">AI Accuracy</div>
                    <div className="text-lg font-bold text-gray-900">94.7%</div>
                  </div>
                  
                  <div className="absolute -bottom-6 -left-8 bg-white p-3 rounded-xl shadow-lg border border-gray-100">
                    <div className="text-xs text-gray-600 mb-1">Insights</div>
                    <div className="text-lg font-bold text-gray-900">2.4K</div>
                  </div>
                </div>
              </div>
              
              <CardContent className="p-8 lg:p-12 flex flex-col justify-center">
                <div className="space-y-6">
                  <div className="flex items-center gap-3">
                    <Badge className="bg-blue-50 text-blue-700 border-blue-200">
                      {featuredPost.category}
                    </Badge>
                    <div className="flex items-center gap-4 text-gray-500 text-sm">
                      <div className="flex items-center gap-1">
                        <CalendarIcon size={14} />
                        {featuredPost.date}
                      </div>
                      <div className="flex items-center gap-1">
                        <ClockIcon size={14} />
                        {featuredPost.readTime}
                      </div>
                    </div>
                  </div>
                  
                  <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 leading-tight">
                    {featuredPost.title}
                  </h2>
                  
                  <p className="text-lg text-gray-600 leading-relaxed">
                    {featuredPost.excerpt}
                  </p>
                  
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                        <UserIcon size={16} className="text-white" />
                      </div>
                      <span className="text-gray-700 font-medium">{featuredPost.author}</span>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {featuredPost.tags.map((tag, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  
                  <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-200 shadow-lg hover:shadow-xl flex items-center gap-2 w-fit">
                    Read Full Article
                    <ArrowRightIcon size={16} />
                  </Button>
                </div>
              </CardContent>
            </div>
          </Card>
        </section>

        {/* Categories and Posts */}
        <section className="container mx-auto px-4 py-20 lg:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            {/* Sidebar */}
            <div className="lg:col-span-1 space-y-8">
              {/* Categories */}
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-6">Categories</h3>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <button
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                      className={`w-full text-left px-4 py-3 rounded-lg font-medium transition-all duration-200 ${
                        selectedCategory === category
                          ? "bg-blue-600 text-white shadow-lg"
                          : "bg-gray-50 text-gray-700 hover:bg-gray-100"
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>
              
              {/* Popular Tags */}
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-6">Popular Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {popularTags.map((tag, index) => (
                    <Badge key={index} variant="outline" className="cursor-pointer hover:bg-blue-50 hover:border-blue-200 transition-colors duration-200">
                      <TagIcon size={12} className="mr-1" />
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
              
              {/* Newsletter Signup */}
              <div className="bg-gradient-to-br from-blue-50 to-indigo-100 p-6 rounded-2xl">
                <div className="text-center space-y-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center mx-auto">
                    <BookOpenIcon size={24} className="text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900">Stay Updated</h3>
                  <p className="text-gray-600 text-sm">Get the latest articles delivered to your inbox.</p>
                  <Input placeholder="Your email" className="bg-white" />
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                    Subscribe
                  </Button>
                </div>
              </div>
            </div>
            
            {/* Blog Posts Grid */}
            <div className="lg:col-span-3">
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-2xl lg:text-3xl font-bold text-gray-900">
                  {selectedCategory === "All" ? "Latest Articles" : `${selectedCategory} Articles`}
                </h2>
                <div className="text-gray-500">
                  {filteredPosts.length} article{filteredPosts.length !== 1 ? 's' : ''}
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {filteredPosts.map((post, index) => (
                  <Card key={index} className="border-0 shadow-lg hover:shadow-2xl transition-all duration-300 bg-white rounded-2xl overflow-hidden group hover:-translate-y-2">
                    {/* Post Illustration */}
                    <div className="h-48 bg-gradient-to-br from-gray-50 to-gray-100 relative overflow-hidden">
                      <div className="absolute inset-0 flex items-center justify-center">
                        {/* Dynamic illustration based on category */}
                        <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center">
                          {post.category === "Business" && <TargetIcon size={32} className="text-white" />}
                          {post.category === "Technology" && <RocketIcon size={32} className="text-white" />}
                          {post.category === "Analytics" && <TrendingUpIcon size={32} className="text-white" />}
                          {post.category === "Growth" && <StarIcon size={32} className="text-white" />}
                          {post.category === "Tips" && <LightbulbIcon size={32} className="text-white" />}
                        </div>
                      </div>
                      
                      {/* Decorative elements */}
                      <div className="absolute top-4 left-4 w-8 h-8 bg-blue-200 rounded-full opacity-30"></div>
                      <div className="absolute top-8 right-6 w-6 h-6 bg-purple-200 rounded-full opacity-40"></div>
                      <div className="absolute bottom-6 left-8 w-4 h-4 bg-indigo-200 rounded-full opacity-50"></div>
                    </div>
                    
                    <CardContent className="p-6">
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <Badge className="bg-blue-50 text-blue-700 border-blue-200">
                            {post.category}
                          </Badge>
                          <div className="flex items-center gap-4 text-gray-500 text-sm">
                            <div className="flex items-center gap-1">
                              <ClockIcon size={12} />
                              {post.readTime}
                            </div>
                          </div>
                        </div>
                        
                        <h3 className="text-xl font-bold text-gray-900 leading-tight group-hover:text-blue-600 transition-colors duration-200">
                          {post.title}
                        </h3>
                        
                        <p className="text-gray-600 leading-relaxed">
                          {post.excerpt}
                        </p>
                        
                        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                          <div className="flex items-center gap-2">
                            <div className="w-6 h-6 bg-gray-300 rounded-full flex items-center justify-center">
                              <UserIcon size={12} className="text-gray-600" />
                            </div>
                            <span className="text-gray-700 text-sm font-medium">{post.author}</span>
                          </div>
                          <div className="flex items-center gap-1 text-gray-500 text-sm">
                            <CalendarIcon size={12} />
                            {post.date}
                          </div>
                        </div>
                        
                        <div className="flex flex-wrap gap-1">
                          {post.tags.slice(0, 2).map((tag, tagIndex) => (
                            <Badge key={tagIndex} variant="outline" className="text-xs">
                              {tag}
                            </Badge>
                          ))}
                          {post.tags.length > 2 && (
                            <Badge variant="outline" className="text-xs">
                              +{post.tags.length - 2}
                            </Badge>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
              
              {/* Load More Button */}
              <div className="text-center mt-12">
                <Button variant="outline" className="px-8 py-4 rounded-lg font-semibold text-lg border-2 border-gray-300 hover:bg-gray-50">
                  Load More Articles
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gray-50 py-20 lg:py-28">
          <div className="container mx-auto px-4">
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
                  Join thousands of businesses that have already transformed their operations with QuickSpace. Start your free trial today.
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