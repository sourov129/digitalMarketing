import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Target, TrendingUp, Users, Award, CheckCircle, Star, Play, BarChart3, Zap, Globe, Smartphone, Search, MousePointer, Share2, Mail, Send, Sparkles, Crown, Diamond, Rocket, CloudLightning as Lightning } from 'lucide-react';

const Home = () => {
  const [email, setEmail] = useState('');
  const [subscriptionStatus, setSubscriptionStatus] = useState('');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscriptionStatus('success');
      setEmail('');
      setTimeout(() => setSubscriptionStatus(''), 5000);
    }
  };

  const features = [
    {
      icon: Target,
      title: 'Strategic Precision',
      description: 'Advanced targeting methodologies that connect your brand with the most valuable audiences through intelligent market analysis.',
    },
    {
      icon: TrendingUp,
      title: 'Growth Acceleration',
      description: 'Systematic optimization frameworks that amplify performance metrics and drive sustainable business expansion.',
    },
    {
      icon: Users,
      title: 'Expert Team',
      description: 'Seasoned digital strategists and creative professionals with proven track records across diverse market segments.',
    },
    {
      icon: Award,
      title: 'Proven Results',
      description: 'Award-winning campaigns that consistently deliver outstanding outcomes and exceed ambitious performance goals.',
    },
  ];

  const stats = [
    { number: '850+', label: 'Projects Completed' },
    { number: '98%', label: 'Client Satisfaction' },
    { number: '420%', label: 'Average ROI Increase' },
    { number: '24/7', label: 'Support Available' },
  ];

  const services = [
    {
      icon: Search,
      title: 'Search Excellence',
      description: 'Dominate search results with advanced SEO strategies that capture premium organic visibility and authority.',
      features: ['Technical SEO Audits', 'Content Optimization', 'Link Building', 'Local Search Mastery'],
    },
    {
      icon: MousePointer,
      title: 'Digital Advertising',
      description: 'Maximize ROI with precision-targeted campaigns across high-converting platforms and emerging channels.',
      features: ['Campaign Strategy', 'Multi-Platform Management', 'Creative Development', 'Performance Optimization'],
    },
    {
      icon: Share2,
      title: 'Social Media Mastery',
      description: 'Build commanding brand presence and engaged communities across all major social platforms.',
      features: ['Platform Strategy', 'Content Creation', 'Community Management', 'Influencer Partnerships'],
    },
    {
      icon: Mail,
      title: 'Email Marketing',
      description: 'Nurture relationships and drive revenue through sophisticated automation and personalization.',
      features: ['Advanced Segmentation', 'Automation Workflows', 'A/B Testing', 'Revenue Tracking'],
    },
    {
      icon: Globe,
      title: 'Web Development',
      description: 'Create exceptional websites that deliver outstanding user experiences and conversion optimization.',
      features: ['Responsive Design', 'E-commerce Solutions', 'CMS Integration', 'Performance Optimization'],
    },
    {
      icon: BarChart3,
      title: 'Analytics Intelligence',
      description: 'Transform complex data into actionable insights with advanced analytics and reporting dashboards.',
      features: ['Data Visualization', 'Custom Dashboards', 'ROI Tracking', 'Predictive Analytics'],
    },
  ];

  const packages = [
    {
      name: 'Starter',
      price: '$1,899',
      period: '/month',
      description: 'Perfect for growing businesses ready to expand their digital presence',
      features: [
        'Comprehensive SEO Strategy',
        'Google Ads Management',
        'Social Media Management (3 platforms)',
        'Monthly Performance Reports',
        'Email Support',
      ],
      popular: false,
    },
    {
      name: 'Professional',
      price: '$3,499',
      period: '/month',
      description: 'Complete digital ecosystem for businesses seeking market leadership',
      features: [
        'Everything in Starter Package',
        'Advanced Content Marketing',
        'Multi-Channel Advertising',
        'Full Social Media Suite (5 platforms)',
        'Marketing Automation',
        'Real-Time Analytics Dashboard',
        'Dedicated Account Manager',
      ],
      popular: true,
    },
    {
      name: 'Enterprise',
      price: '$5,999',
      period: '/month',
      description: 'Premium solutions for industry leaders and large organizations',
      features: [
        'Everything in Professional Package',
        'Executive Strategy Consultation',
        'Custom Solution Development',
        'AI-Enhanced Analytics',
        'Complete Creative Production',
        'Video Marketing Suite',
        'White-Glove 24/7 Support',
      ],
      popular: false,
    },
  ];

  const testimonials = [
    {
      name: 'Sarah Mitchell',
      company: 'TechFlow Solutions',
      text: 'Zenith Creative Studio transformed our entire digital strategy. Their innovative approach delivered exceptional growth and market leadership within just a few months.',
      rating: 5,
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
    },
    {
      name: 'Michael Chen',
      company: 'Apex Ventures',
      text: 'Their strategic expertise and creative innovation exceeded every expectation. Truly a transformative partnership that redefined our business trajectory.',
      rating: 5,
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
    },
    {
      name: 'Emma Rodriguez',
      company: 'Pinnacle Brands',
      text: 'Outstanding expertise, flawless execution, and remarkable results. They completely transformed our approach to digital excellence and market presence.',
      rating: 5,
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
    },
  ];

  const caseStudies = [
    {
      title: 'E-commerce Transformation',
      client: 'Fashion Retailer',
      result: '540% Revenue Growth',
      description: 'Comprehensive digital strategy combining advanced SEO, targeted advertising, and social excellence for extraordinary growth.',
      image: 'https://images.pexels.com/photos/1267338/pexels-photo-1267338.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop',
      metrics: ['540% Revenue Growth', '380% Traffic Increase', '265% Conversion Rate'],
    },
    {
      title: 'Lead Generation Success',
      client: 'Technology Platform',
      result: '680% Lead Increase',
      description: 'Strategic content marketing and automation excellence generating premium business opportunities and market leadership.',
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop',
      metrics: ['680% Lead Growth', '290% Conversion Rate', '65% Cost Reduction'],
    },
    {
      title: 'Market Expansion',
      client: 'Healthcare Network',
      result: '420% Market Reach',
      description: 'Local SEO and reputation management strategy achieving market dominance across multiple premium locations.',
      image: 'https://images.pexels.com/photos/590016/pexels-photo-590016.jpg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop',
      metrics: ['420% Market Reach', '245% Client Inquiries', '350% Online Visibility'],
    },
  ];

  const process = [
    {
      step: '01',
      title: 'Discovery & Analysis',
      description: 'We analyze your business landscape, competitive environment, and market opportunities to identify strategic advantages.',
    },
    {
      step: '02',
      title: 'Strategy Development',
      description: 'Create comprehensive digital marketing strategies aligned with your vision and business objectives.',
    },
    {
      step: '03',
      title: 'Implementation',
      description: 'Execute strategies with precision, utilizing cutting-edge technologies and proven methodologies.',
    },
    {
      step: '04',
      title: 'Optimization',
      description: 'Monitor, analyze, and optimize campaigns for maximum performance and exceptional return on investment.',
    },
  ];

  const industries = [
    { name: 'E-commerce', icon: '🛒' },
    { name: 'Healthcare', icon: '🏥' },
    { name: 'Technology', icon: '💻' },
    { name: 'Real Estate', icon: '🏠' },
    { name: 'Finance', icon: '💰' },
    { name: 'Education', icon: '🎓' },
    { name: 'Hospitality', icon: '🏨' },
    { name: 'Manufacturing', icon: '🏭' },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative min-h-screen bg-gradient-to-br from-background via-card to-background overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-10 right-10 w-[500px] h-[500px] bg-gradient-to-bl from-primary/10 to-accent/10 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-10 left-10 w-[400px] h-[400px] bg-gradient-to-tr from-secondary/10 to-primary/10 rounded-full blur-3xl animate-float delay-700"></div>
          <div className="absolute top-1/3 left-1/2 w-[300px] h-[300px] bg-gradient-to-r from-accent/5 to-secondary/5 rounded-full blur-2xl animate-float delay-1500"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-screen">
            {/* Left Column - Content */}
            <div className="order-2 lg:order-1">
              {/* Status Badge */}
              <div className="inline-flex items-center bg-card/60 backdrop-blur-md border border-accent/40 text-accent px-8 py-4 rounded-full text-sm font-medium mb-8 shadow-soft">
                <div className="w-2 h-2 bg-accent rounded-full mr-3 animate-pulse"></div>
                Premium Digital Solutions
                <Zap className="w-4 h-4 ml-3 text-accent" />
              </div>

              {/* Main Headlines */}
              <div className="mb-8">
                <h1 className="text-5xl md:text-7xl font-heading font-bold text-textPrimary mb-4 leading-tight">
                  <span className="block">ELEVATE</span>
                  <span className="block">YOUR</span>
                  <span className="block bg-gradient-to-r from-primary via-hover to-accent bg-clip-text text-transparent">
                    DIGITAL PRESENCE
                  </span>
                </h1>
                <div className="w-32 h-2 bg-gradient-to-r from-primary to-accent mb-6 rounded-full"></div>
                <p className="text-xl md:text-2xl text-textMuted leading-relaxed max-w-2xl font-light">
                  Transform your brand with innovative digital strategies that deliver 
                  exceptional results. Experience the pinnacle of creative excellence and strategic innovation.
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <Link
                  to="/contact"
                  className="group relative bg-gradient-to-r from-buttonGradientStart to-buttonGradientEnd text-card px-10 py-5 rounded-full font-semibold text-lg hover:shadow-zenith transform hover:-translate-y-2 transition-all duration-300 inline-flex items-center justify-center overflow-hidden"
                >
                  <span className="relative z-10 flex items-center">
                    <Rocket className="mr-3 h-5 w-5" />
                    Start Your Project
                    <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
                <Link
                  to="/services"
                  className="group border-2 border-accent text-accent px-10 py-5 rounded-full font-semibold text-lg hover:bg-accent/10 hover:border-accent transition-all duration-300 inline-flex items-center justify-center backdrop-blur-sm"
                >
                  <Diamond className="mr-3 h-5 w-5" />
                  Explore Services
                </Link>
              </div>

              {/* Key Metrics */}
              <div className="grid grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-1">850+</div>
                  <div className="text-sm text-textMuted">Projects</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-1">98%</div>
                  <div className="text-sm text-textMuted">Satisfaction</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-1">24/7</div>
                  <div className="text-sm text-textMuted">Support</div>
                </div>
              </div>
            </div>

            {/* Right Column - Visual Elements */}
            <div className="order-1 lg:order-2 relative">
              {/* Main Visual Container */}
              <div className="relative">
                {/* Central Dashboard Mockup */}
                <div className="bg-card/80 backdrop-blur-xl border border-cardBorder rounded-3xl p-8 shadow-zenith">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-secondary rounded-full"></div>
                      <div className="w-3 h-3 bg-accent rounded-full"></div>
                    </div>
                    <div className="text-accent text-sm font-medium">Zenith Analytics</div>
                  </div>
                  
                  {/* Dashboard Content */}
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 bg-background/50 rounded-2xl border border-cardBorder">
                      <div className="flex items-center space-x-3">
                        <TrendingUp className="w-5 h-5 text-secondary" />
                        <span className="text-textPrimary font-medium">Revenue Growth</span>
                      </div>
                      <span className="text-secondary font-bold">+420%</span>
                    </div>
                    <div className="flex items-center justify-between p-4 bg-background/50 rounded-2xl border border-cardBorder">
                      <div className="flex items-center space-x-3">
                        <Users className="w-5 h-5 text-accent" />
                        <span className="text-textPrimary font-medium">Lead Generation</span>
                      </div>
                      <span className="text-accent font-bold">+680%</span>
                    </div>
                    <div className="flex items-center justify-between p-4 bg-background/50 rounded-2xl border border-cardBorder">
                      <div className="flex items-center space-x-3">
                        <Target className="w-5 h-5 text-primary" />
                        <span className="text-textPrimary font-medium">Conversion Rate</span>
                      </div>
                      <span className="text-primary font-bold">+265%</span>
                    </div>
                  </div>
                </div>

                {/* Floating Elements */}
                <div className="absolute -top-6 -right-6 bg-gradient-to-r from-primary to-accent p-4 rounded-full shadow-zenith animate-float">
                  <Zap className="w-6 h-6 text-card" />
                </div>
                <div className="absolute -bottom-4 -left-4 bg-gradient-to-r from-secondary to-primary p-3 rounded-2xl shadow-soft animate-float delay-1000">
                  <Target className="w-5 h-5 text-card" />
                </div>
              </div>

              {/* Floating Service Cards */}
              <div className="absolute top-20 -left-20 hidden lg:block">
                <div className="bg-card/60 backdrop-blur-md border border-cardBorder rounded-full p-4 shadow-soft transform rotate-12 hover:rotate-0 transition-transform duration-300">
                  <Search className="w-8 h-8 text-secondary mb-2" />
                  <div className="text-textPrimary font-semibold text-sm">SEO Excellence</div>
                </div>
              </div>
              
              <div className="absolute bottom-32 -right-16 hidden lg:block">
                <div className="bg-card/60 backdrop-blur-md border border-cardBorder rounded-full p-4 shadow-soft transform -rotate-12 hover:rotate-0 transition-transform duration-300">
                  <Share2 className="w-8 h-8 text-accent mb-2" />
                  <div className="text-textPrimary font-semibold text-sm">Social Media</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-card to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-heading font-bold text-textPrimary mb-4">Performance Excellence</h2>
            <p className="text-xl text-textMuted">Measurable results that demonstrate our exceptional impact</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center bg-card p-8 rounded-3xl shadow-soft hover:shadow-zenith transition-all duration-300 border border-cardBorder hover:border-accent/40 group">
                <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-3 group-hover:scale-110 transition-transform">{stat.number}</div>
                <div className="text-textMuted font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-textPrimary mb-4">
              Premium Digital Solutions
            </h2>
            <p className="text-xl text-textMuted max-w-3xl mx-auto">
              Comprehensive digital services designed to accelerate growth and maximize your competitive advantage.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-card p-8 rounded-3xl shadow-soft hover:shadow-zenith transition-all duration-300 group border border-cardBorder hover:border-accent/40">
                <div className="bg-gradient-to-r from-primary to-accent w-16 h-16 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-md">
                  <service.icon className="h-8 w-8 text-card" />
                </div>
                <h3 className="text-xl font-heading font-semibold text-textPrimary mb-4">{service.title}</h3>
                <p className="text-textMuted mb-6">{service.description}</p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-textMuted">
                      <CheckCircle className="h-4 w-4 text-accent mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className="text-accent font-semibold hover:text-hover inline-flex items-center transition-colors"
                >
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-20 bg-gradient-to-br from-card to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-textPrimary mb-4">Success Stories</h2>
            <p className="text-xl text-textMuted">Exceptional results from our strategic partnerships</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <div key={index} className="bg-card rounded-3xl overflow-hidden hover:shadow-zenith transition-all duration-300 group border border-cardBorder hover:border-accent/40">
                <img src={study.image} alt={study.title} className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" />
                <div className="p-6">
                  <div className="text-sm text-accent font-semibold mb-2">{study.client}</div>
                  <h3 className="text-xl font-heading font-bold text-textPrimary mb-3">{study.title}</h3>
                  <p className="text-textMuted mb-4">{study.description}</p>
                  <div className="space-y-2">
                    {study.metrics.map((metric, metricIndex) => (
                      <div key={metricIndex} className="flex items-center text-sm">
                        <CheckCircle className="h-4 w-4 text-accent mr-2" />
                        <span className="text-textMuted">{metric}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-4 text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">{study.result}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-textPrimary mb-4">Our Process</h2>
            <p className="text-xl text-textMuted">A proven methodology for digital transformation</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <div key={index} className="text-center group">
                <div className="bg-gradient-to-r from-primary to-accent text-card w-24 h-24 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-zenith">
                  {step.step}
                </div>
                <h3 className="text-xl font-heading font-semibold text-textPrimary mb-4">{step.title}</h3>
                <p className="text-textMuted">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20 bg-gradient-to-br from-card to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-textPrimary mb-4">Industries We Serve</h2>
            <p className="text-xl text-textMuted">Specialized expertise across diverse business sectors</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
            {industries.map((industry, index) => (
              <div key={index} className="text-center p-6 bg-card rounded-3xl hover:bg-accent/10 transition-all duration-300 shadow-soft hover:shadow-zenith hover:-translate-y-1 border border-cardBorder hover:border-accent/40">
                <div className="text-3xl mb-3">{industry.icon}</div>
                <div className="text-sm font-medium text-textMuted">{industry.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-textPrimary mb-4">
              Why Choose Zenith Creative Studio?
            </h2>
            <p className="text-xl text-textMuted max-w-3xl mx-auto">
              We combine strategic innovation with data-driven execution to deliver solutions that drive growth and maximize ROI.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-card p-8 rounded-3xl shadow-soft hover:shadow-zenith transition-all duration-300 group border border-cardBorder hover:border-accent/40">
                <div className="bg-gradient-to-r from-primary to-accent w-16 h-16 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-md">
                  <feature.icon className="h-7 w-7 text-card" />
                </div>
                <h3 className="text-xl font-heading font-semibold text-textPrimary mb-2">{feature.title}</h3>
                <p className="text-textMuted">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gradient-to-br from-card via-background to-card text-textPrimary relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-32 h-32 bg-primary/20 rounded-full blur-2xl"></div>
          <div className="absolute bottom-10 right-10 w-40 h-40 bg-accent/20 rounded-full blur-2xl"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">Client Success Stories</h2>
            <p className="text-xl text-textMuted">Hear from our valued partners</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-card/50 backdrop-blur-lg p-8 rounded-3xl border border-cardBorder hover:border-accent/40 transition-all duration-300 shadow-soft hover:shadow-zenith">
                <div className="flex items-center mb-4">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-14 h-14 rounded-full mr-4 border-2 border-accent/30"
                  />
                  <div>
                    <div className="font-bold text-textPrimary">{testimonial.name}</div>
                    <div className="text-sm text-textMuted">{testimonial.company}</div>
                  </div>
                </div>
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-secondary fill-current" />
                  ))}
                </div>
                <p className="text-textMuted italic text-lg">"{testimonial.text}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Email Subscription Section */}
      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-card p-8 md:p-12 rounded-3xl shadow-zenith border border-cardBorder">
            <div className="bg-gradient-to-r from-primary to-accent w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 shadow-md">
              <Mail className="w-10 h-10 text-card" />
            </div>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-textPrimary mb-4">
              Stay Ahead of Digital Trends
            </h2>
            <p className="text-xl text-textMuted mb-8 max-w-2xl mx-auto">
              Get exclusive insights, industry intelligence, and proven strategies delivered to your inbox. 
              Join thousands of digital leaders who trust Zenith Creative Studio for cutting-edge solutions.
            </p>
            
            {subscriptionStatus === 'success' ? (
              <div className="bg-accent/10 border border-accent/20 rounded-full p-6 mb-6">
                <CheckCircle className="w-8 h-8 text-accent mx-auto mb-3" />
                <h3 className="text-lg font-semibold text-accent mb-2">Welcome to Zenith Creative Studio!</h3>
                <p className="text-textMuted">
                  You've successfully joined our community of digital innovators. Expect valuable insights 
                  and strategies that will elevate your digital presence. Your welcome package is on its way!
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="max-w-md mx-auto">
                <div className="flex flex-col sm:flex-row gap-4">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    required
                    className="flex-1 px-6 py-4 border border-cardBorder bg-background text-textPrimary rounded-full focus:ring-2 focus:ring-accent focus:border-transparent text-lg placeholder-textMuted"
                  />
                  <button
                    type="submit"
                    className="bg-gradient-to-r from-primary to-accent text-card px-8 py-4 rounded-full font-bold hover:shadow-zenith transform hover:-translate-y-1 transition-all duration-300 inline-flex items-center justify-center whitespace-nowrap"
                  >
                    Subscribe
                    <Send className="ml-2 h-5 w-5" />
                  </button>
                </div>
              </form>
            )}
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-8 text-sm text-textMuted">
              <div className="flex items-center">
                <CheckCircle className="w-4 h-4 text-accent mr-2" />
                Weekly insights
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-4 h-4 text-accent mr-2" />
                Industry intelligence
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-4 h-4 text-accent mr-2" />
                Premium content
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary via-hover to-accent text-card relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
            Ready to Elevate Your Digital Presence?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Transform your digital strategy and unlock exponential growth with our innovative solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-card text-primary px-12 py-6 rounded-full font-bold hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 inline-flex items-center justify-center text-lg"
            >
              Start Your Project
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              to="/services"
              className="border-2 border-card text-card px-12 py-6 rounded-full font-bold hover:bg-card hover:text-primary transition-all duration-300 inline-flex items-center justify-center text-lg"
            >
              Explore Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;