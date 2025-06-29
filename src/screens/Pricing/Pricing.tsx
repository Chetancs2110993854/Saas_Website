import {
  ArrowRightIcon,
  CheckIcon,
  XIcon,
  StarIcon,
  ShieldCheckIcon,
  ZapIcon,
  UsersIcon,
  BarChart3Icon,
  HeadphonesIcon,
  CrownIcon,
  TrendingUpIcon,
  LockIcon,
  CloudIcon,
  DatabaseIcon,
  CogIcon,
  GlobeIcon,
} from "lucide-react";
import React, { useState } from "react";
import { Badge } from "../../components/ui/badge";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import { Tabs, TabsList, TabsTrigger } from "../../components/ui/tabs";
import { Navigation } from "../../components/Navigation";

export const Pricing = (): JSX.Element => {
  const [billingCycle, setBillingCycle] = useState("monthly");

  const pricingPlans = [
    {
      name: "Starter",
      description: "Perfect for small teams and startups getting started",
      monthlyPrice: 29,
      yearlyPrice: 290,
      savings: "Save $58",
      features: [
        "Up to 5 team members",
        "Basic analytics dashboard",
        "Email support",
        "5GB storage",
        "Basic integrations",
        "Mobile app access",
        "Standard templates",
        "Basic reporting"
      ],
      limitations: [
        "Advanced analytics",
        "Priority support",
        "Custom integrations",
        "Advanced security"
      ],
      buttonText: "Start Free Trial",
      popular: false,
      badge: "Great for Startups",
      color: "from-blue-50 to-blue-100",
      icon: <ZapIcon size={24} className="text-blue-600" />
    },
    {
      name: "Professional",
      description: "Ideal for growing businesses and established teams",
      monthlyPrice: 99,
      yearlyPrice: 990,
      savings: "Save $198",
      features: [
        "Up to 25 team members",
        "Advanced analytics & reporting",
        "Priority support",
        "100GB storage",
        "All integrations included",
        "Custom workflows",
        "API access",
        "Advanced templates",
        "Team collaboration tools",
        "Custom branding",
        "Advanced security features",
        "Data export options"
      ],
      limitations: [
        "Dedicated account manager",
        "Custom integrations",
        "On-premise deployment"
      ],
      buttonText: "Get Started",
      popular: true,
      badge: "Most Popular",
      color: "from-purple-50 to-purple-100",
      icon: <CrownIcon size={24} className="text-purple-600" />
    },
    {
      name: "Enterprise",
      description: "For large organizations with specific requirements",
      monthlyPrice: "Custom",
      yearlyPrice: "Custom",
      savings: "Contact for pricing",
      features: [
        "Unlimited team members",
        "Enterprise analytics suite",
        "24/7 dedicated support",
        "Unlimited storage",
        "Custom integrations",
        "Advanced security features",
        "On-premise deployment",
        "SLA guarantee",
        "Dedicated account manager",
        "Custom training",
        "White-label options",
        "Advanced compliance",
        "Custom development",
        "Priority feature requests"
      ],
      limitations: [],
      buttonText: "Contact Sales",
      popular: false,
      badge: "Enterprise Grade",
      color: "from-green-50 to-green-100",
      icon: <ShieldCheckIcon size={24} className="text-green-600" />
    },
  ];

  const comparisonFeatures = [
    {
      category: "Core Features",
      features: [
        { name: "Team Members", starter: "5", professional: "25", enterprise: "Unlimited" },
        { name: "Storage", starter: "5GB", professional: "100GB", enterprise: "Unlimited" },
        { name: "Projects", starter: "10", professional: "100", enterprise: "Unlimited" },
        { name: "API Calls/month", starter: "1,000", professional: "10,000", enterprise: "Unlimited" },
      ]
    },
    {
      category: "Analytics & Reporting",
      features: [
        { name: "Basic Analytics", starter: true, professional: true, enterprise: true },
        { name: "Advanced Analytics", starter: false, professional: true, enterprise: true },
        { name: "Custom Reports", starter: false, professional: true, enterprise: true },
        { name: "Real-time Data", starter: false, professional: true, enterprise: true },
        { name: "Data Export", starter: false, professional: true, enterprise: true },
        { name: "Advanced Visualizations", starter: false, professional: false, enterprise: true },
      ]
    },
    {
      category: "Integrations",
      features: [
        { name: "Basic Integrations", starter: true, professional: true, enterprise: true },
        { name: "Premium Integrations", starter: false, professional: true, enterprise: true },
        { name: "Custom Integrations", starter: false, professional: false, enterprise: true },
        { name: "API Access", starter: false, professional: true, enterprise: true },
        { name: "Webhooks", starter: false, professional: true, enterprise: true },
      ]
    },
    {
      category: "Support & Security",
      features: [
        { name: "Email Support", starter: true, professional: true, enterprise: true },
        { name: "Priority Support", starter: false, professional: true, enterprise: true },
        { name: "24/7 Support", starter: false, professional: false, enterprise: true },
        { name: "Dedicated Account Manager", starter: false, professional: false, enterprise: true },
        { name: "SSO Integration", starter: false, professional: true, enterprise: true },
        { name: "Advanced Security", starter: false, professional: true, enterprise: true },
        { name: "Compliance Certifications", starter: false, professional: false, enterprise: true },
      ]
    }
  ];

  const faqs = [
    {
      question: "Can I change my plan at any time?",
      answer: "Yes, you can upgrade or downgrade your plan at any time. Changes will be reflected in your next billing cycle, and we'll prorate any differences."
    },
    {
      question: "Is there a free trial available?",
      answer: "Yes, we offer a 14-day free trial for all plans. No credit card required to start your trial."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards, PayPal, and bank transfers for annual plans. Enterprise customers can also pay via invoice."
    },
    {
      question: "Do you offer discounts for non-profits?",
      answer: "Yes, we offer special pricing for qualified non-profit organizations. Contact our sales team for more information."
    },
    {
      question: "What happens if I exceed my plan limits?",
      answer: "We'll notify you when you're approaching your limits. You can upgrade your plan or purchase additional resources as needed."
    },
    {
      question: "Is my data secure?",
      answer: "Absolutely. We use enterprise-grade security measures including encryption, regular backups, and compliance with industry standards."
    }
  ];

  const testimonials = [
    {
      quote: "The Professional plan has been perfect for our growing team. The analytics features alone have saved us countless hours.",
      author: "Sarah Johnson",
      role: "CEO, TechFlow",
      plan: "Professional"
    },
    {
      quote: "Enterprise support is exceptional. Having a dedicated account manager makes all the difference for our large organization.",
      author: "Michael Chen",
      role: "CTO, GlobalCorp",
      plan: "Enterprise"
    },
    {
      quote: "Started with Starter plan and quickly upgraded. The seamless transition and feature set convinced us to stay long-term.",
      author: "Emily Rodriguez",
      role: "Founder, StartupXYZ",
      plan: "Professional"
    }
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
              💰 Simple Pricing
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold leading-tight text-gray-900 mb-6">
              Choose the Perfect{" "}
              <span className="text-blue-600 relative">
                Plan
                <div className="absolute -bottom-2 left-0 w-full h-3 bg-blue-200 opacity-30 rounded-full"></div>
              </span>{" "}
              for Your Business
            </h1>
            <p className="text-lg lg:text-xl text-gray-600 leading-relaxed mb-8 max-w-3xl mx-auto">
              Transparent pricing with no hidden fees. Start free and scale as you grow. All plans include our core features with varying limits and advanced capabilities.
            </p>
            
            {/* Billing Toggle */}
            <div className="inline-block mb-8">
              <Tabs value={billingCycle} onValueChange={setBillingCycle} className="w-[320px]">
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
        </section>

        {/* Pricing Cards */}
        <section className="container mx-auto px-4 py-12">
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
                  {/* Plan Header */}
                  <div className="text-center mb-8">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${plan.color} flex items-center justify-center mx-auto mb-4`}>
                      {plan.icon}
                    </div>
                    <h3 className="text-2xl font-bold mb-3 text-gray-900">{plan.name}</h3>
                    <p className="text-gray-600 leading-relaxed mb-6">
                      {plan.description}
                    </p>
                    
                    {/* Pricing */}
                    <div className="mb-4">
                      <div className="flex items-baseline justify-center">
                        {typeof plan.monthlyPrice === 'number' ? (
                          <>
                            <span className="text-4xl lg:text-5xl font-bold text-gray-900">
                              ${billingCycle === 'monthly' ? plan.monthlyPrice : Math.floor(plan.yearlyPrice / 12)}
                            </span>
                            <span className="text-gray-600 ml-3 text-lg">
                              per month
                            </span>
                          </>
                        ) : (
                          <span className="text-4xl lg:text-5xl font-bold text-gray-900">
                            {plan.monthlyPrice}
                          </span>
                        )}
                      </div>
                      {billingCycle === 'yearly' && typeof plan.monthlyPrice === 'number' && (
                        <div className="text-green-600 font-medium mt-2">
                          {plan.savings} annually
                        </div>
                      )}
                    </div>
                  </div>
                  
                  {/* Features */}
                  <div className="mb-8">
                    <h4 className="font-bold text-gray-900 mb-4">What's included:</h4>
                    <ul className="space-y-3">
                      {plan.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-3">
                          <CheckIcon size={16} className="text-green-500 flex-shrink-0" />
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    
                    {plan.limitations.length > 0 && (
                      <div className="mt-6">
                        <h4 className="font-bold text-gray-900 mb-4">Not included:</h4>
                        <ul className="space-y-3">
                          {plan.limitations.map((limitation, i) => (
                            <li key={i} className="flex items-center gap-3">
                              <XIcon size={16} className="text-gray-400 flex-shrink-0" />
                              <span className="text-gray-500">{limitation}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                  
                  {/* CTA Button */}
                  <Button
                    className={`w-full py-4 rounded-xl font-semibold text-lg transition-all duration-200 ${
                      plan.popular
                        ? "bg-blue-600 hover:bg-blue-700 text-white shadow-lg hover:shadow-xl"
                        : "border-2 border-gray-300 text-gray-700 hover:bg-gray-50"
                    }`}
                    variant={plan.popular ? "default" : "outline"}
                  >
                    {plan.buttonText}
                  </Button>
                  
                  {plan.name !== "Enterprise" && (
                    <p className="text-center text-gray-500 text-sm mt-4">
                      14-day free trial • No credit card required
                    </p>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Feature Comparison Table */}
        <section className="container mx-auto px-4 py-20 lg:py-28">
          <div className="text-center mb-16">
            <Badge className="bg-purple-50 text-purple-700 border-purple-200 px-4 py-2 rounded-full font-medium mb-6">
              📊 Detailed Comparison
            </Badge>
            <h2 className="text-3xl lg:text-5xl font-bold mb-6 text-gray-900">
              Compare All{" "}
              <span className="text-blue-600">Features</span>
            </h2>
            <p className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Get a detailed breakdown of what's included in each plan to make the best decision for your business.
            </p>
          </div>
          
          <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="text-left p-6 font-bold text-gray-900">Features</th>
                    <th className="text-center p-6 font-bold text-gray-900">Starter</th>
                    <th className="text-center p-6 font-bold text-gray-900 bg-blue-50">
                      Professional
                      <Badge className="ml-2 bg-blue-600 text-white text-xs">Popular</Badge>
                    </th>
                    <th className="text-center p-6 font-bold text-gray-900">Enterprise</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonFeatures.map((category, categoryIndex) => (
                    <React.Fragment key={categoryIndex}>
                      <tr className="bg-gray-25">
                        <td colSpan={4} className="p-4 font-bold text-gray-900 bg-gray-100">
                          {category.category}
                        </td>
                      </tr>
                      {category.features.map((feature, featureIndex) => (
                        <tr key={featureIndex} className="border-t border-gray-100">
                          <td className="p-4 text-gray-700">{feature.name}</td>
                          <td className="p-4 text-center">
                            {typeof feature.starter === 'boolean' ? (
                              feature.starter ? (
                                <CheckIcon size={20} className="text-green-500 mx-auto" />
                              ) : (
                                <XIcon size={20} className="text-gray-400 mx-auto" />
                              )
                            ) : (
                              <span className="text-gray-900 font-medium">{feature.starter}</span>
                            )}
                          </td>
                          <td className="p-4 text-center bg-blue-25">
                            {typeof feature.professional === 'boolean' ? (
                              feature.professional ? (
                                <CheckIcon size={20} className="text-green-500 mx-auto" />
                              ) : (
                                <XIcon size={20} className="text-gray-400 mx-auto" />
                              )
                            ) : (
                              <span className="text-gray-900 font-medium">{feature.professional}</span>
                            )}
                          </td>
                          <td className="p-4 text-center">
                            {typeof feature.enterprise === 'boolean' ? (
                              feature.enterprise ? (
                                <CheckIcon size={20} className="text-green-500 mx-auto" />
                              ) : (
                                <XIcon size={20} className="text-gray-400 mx-auto" />
                              )
                            ) : (
                              <span className="text-gray-900 font-medium">{feature.enterprise}</span>
                            )}
                          </td>
                        </tr>
                      ))}
                    </React.Fragment>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Customer Testimonials */}
        <section className="bg-gray-50 py-20 lg:py-28">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <Badge className="bg-green-50 text-green-700 border-green-200 px-4 py-2 rounded-full font-medium mb-6">
                💬 Customer Stories
              </Badge>
              <h2 className="text-3xl lg:text-5xl font-bold mb-6 text-gray-900">
                What Our Customers{" "}
                <span className="text-blue-600">Say</span>
              </h2>
              <p className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                See how businesses like yours are succeeding with QuickSpace across all our pricing plans.
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white rounded-2xl">
                  <CardContent className="p-8">
                    <div className="flex text-yellow-400 mb-6">
                      {[...Array(5)].map((_, i) => (
                        <StarIcon key={i} size={20} fill="currentColor" />
                      ))}
                    </div>
                    <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                      "{testimonial.quote}"
                    </p>
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-bold text-gray-900">{testimonial.author}</div>
                        <div className="text-gray-600">{testimonial.role}</div>
                      </div>
                      <Badge className="bg-blue-50 text-blue-700 border-blue-200">
                        {testimonial.plan}
                      </Badge>
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
              ❓ FAQ
            </Badge>
            <h2 className="text-3xl lg:text-5xl font-bold mb-6 text-gray-900">
              Frequently Asked{" "}
              <span className="text-blue-600">Questions</span>
            </h2>
            <p className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Got questions? We've got answers. Here are the most common questions about our pricing and plans.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {faqs.map((faq, index) => (
                <Card key={index} className="border-0 shadow-lg bg-white rounded-2xl">
                  <CardContent className="p-8">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">
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
                Join thousands of businesses that trust QuickSpace. Start your free trial today and experience the difference.
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
              
              <p className="text-blue-200 text-sm mt-6">
                14-day free trial • No credit card required • Cancel anytime
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