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
      title: 'Precision Marketing',
      description: 'Advanced targeting methodologies designed to connect with your ideal customer base effectively.',
    },
    {
      icon: TrendingUp,
      title: 'Revenue Acceleration',
      description: 'Systematic optimization processes that amplify your return on investment and business expansion.',
    },
    {
      icon: Users,
      title: 'Specialist Team',
      description: 'Experienced digital marketing professionals with demonstrated success across diverse sectors.',
    },
    {
      icon: Award,
      title: 'Verified Success',
      description: 'Industry-recognized campaigns that consistently deliver quantifiable outcomes and surpass goals.',
    },
  ];

  const stats = [
    { number: '750+', label: 'Completed Projects' },
    { number: '96%', label: 'Client Retention Rate' },
    { number: '320%', label: 'Average Growth Boost' },
    { number: '24/7', label: 'Dedicated Support' },
  ];

  const services = [
    {
      icon: Search,
      title: 'Search Visibility Enhancement',
      description: 'Boost your online presence and attract qualified traffic through advanced search optimization techniques.',
      features: ['Strategic Keyword Analysis', 'Content Optimization', 'Authority Building', 'Technical Enhancement'],
    },
    {
      icon: MousePointer,
      title: 'Targeted Advertising Solutions',
      description: 'Optimize your advertising investment with precision-targeted campaigns across multiple platforms.',
      features: ['Campaign Development', 'Creative Production', 'Budget Optimization', 'Results Tracking'],
    },
    {
      icon: Share2,
      title: 'Social Engagement Strategy',
      description: 'Develop compelling brand presence and foster meaningful connections across social networks.',
      features: ['Content Development', 'Audience Engagement', 'Social Advertising', 'Performance Analysis'],
    },
    {
      icon: Mail,
      title: 'Email Automation Systems',
      description: 'Cultivate prospects and maintain customer relationships through strategic email communication.',
      features: ['Audience Development', 'Workflow Automation', 'Split Testing', 'Conversion Analytics'],
    },
    {
      icon: Globe,
      title: 'Digital Platform Creation',
      description: 'Build powerful, user-friendly websites that transform visitors into loyal customers.',
      features: ['Mobile-First Design', 'Online Commerce', 'Content Management', 'Speed Optimization'],
    },
    {
      icon: BarChart3,
      title: 'Performance Intelligence',
      description: 'Transform data into actionable insights with advanced analytics and comprehensive reporting.',
      features: ['Data Interpretation', 'Custom Dashboards', 'Investment Tracking', 'Market Analysis'],
    },
  ];

  const testimonials = [
    {
      name: 'Marcus Thompson',
      company: 'InnovateTech Solutions',
      text: 'BitBoostMedia transformed our digital approach completely. We experienced remarkable growth and expanded market presence within just a few months!',
      rating: 5,
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
    },
    {
      name: 'Elena Rodriguez',
      company: 'Digital Commerce Hub',
      text: 'Their strategic methodology and analytical approach produced outcomes that exceeded our most optimistic projections. Truly transformative collaboration!',
      rating: 5,
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
    },
    {
      name: 'David Kim',
      company: 'Regional Business Network',
      text: 'Outstanding proficiency, seamless implementation, and remarkable results. They revolutionized our entire business approach and market position.',
      rating: 5,
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
    },
  ];

  const caseStudies = [
    {
      title: 'Online Revenue Transformation',
      client: 'Lifestyle Brand',
      result: '450% Sales Increase',
      description: 'Executed integrated SEO and advertising strategy delivering exceptional business growth.',
      image: 'https://images.pexels.com/photos/1267338/pexels-photo-1267338.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop',
      metrics: ['450% Sales Growth', '280% Traffic Boost', '190% Conversion Improvement'],
    },
    {
      title: 'Regional Market Leadership',
      client: 'Food Service Chain',
      result: '350% Local Presence',
      description: 'Regional optimization campaign achieving market dominance across multiple service areas.',
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop',
      metrics: ['350% Local Reach', '170% Customer Traffic', '220% Digital Orders'],
    },
    {
      title: 'B2B Lead Generation Success',
      client: 'Software Company',
      result: '550% Prospect Growth',
      description: 'Content strategy and advertising approach generating premium qualified business leads.',
      image: 'https://images.pexels.com/photos/590016/pexels-photo-590016.jpg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop',
      metrics: ['550% Lead Growth', '140% Conversion Rate', '75% Cost Reduction'],
    },
  ];

  const process = [
    {
      step: '01',
      title: 'Research & Assessment',
      description: 'We examine your business landscape, competitive environment, and market dynamics to identify strategic opportunities.',
    },
    {
      step: '02',
      title: 'Blueprint Creation',
      description: 'Develop comprehensive digital marketing blueprint aligned with your objectives and investment parameters.',
    },
    {
      step: '03',
      title: 'Strategic Execution',
      description: 'Deploy the blueprint with meticulous attention to detail, utilizing advanced tools and proven methodologies.',
    },
    {
      step: '04',
      title: 'Performance Enhancement',
      description: 'Continuously analyze, refine, and enhance campaigns for optimal performance and maximum returns.',
    },
  ];

  const industries = [
    { name: 'Online Retail', icon: '🛒' },
    { name: 'Medical Services', icon: '🏥' },
    { name: 'Tech Solutions', icon: '💻' },
    { name: 'Property Services', icon: '🏠' },
    { name: 'Financial Services', icon: '💰' },
    { name: 'Learning Platforms', icon: '🎓' },
    { name: 'Food & Beverage', icon: '🍽️' },
    { name: 'Industrial', icon: '🏭' },
  ];

  return (
    <div className="min-h-screen bg-midnight-900">
      {/* Revolutionary Hero Section */}
      <section className="relative min-h-screen bg-gradient-to-tr from-midnight-900 via-midnight-800 to-royal-900/20 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-10 right-10 w-[500px] h-[500px] bg-gradient-to-bl from-royal-400/15 to-gold-600/15 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-10 left-10 w-[400px] h-[400px] bg-gradient-to-tr from-gold-400/15 to-royal-500/15 rounded-full blur-3xl animate-pulse delay-700"></div>
          <div className="absolute top-1/3 left-1/2 w-[300px] h-[300px] bg-gradient-to-r from-royal-300/10 to-gold-400/10 rounded-full blur-2xl animate-pulse delay-1500"></div>
        </div>

        {/* Hexagonal Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              radial-gradient(circle at 25% 25%, rgb(157 107 255) 2px, transparent 2px),
              radial-gradient(circle at 75% 75%, rgb(255 193 7) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px, 40px 40px'
          }}></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-screen">
            {/* Left Column - Content */}
            <div className="order-2 lg:order-1">
              {/* Status Badge */}
              <div className="inline-flex items-center bg-midnight-800/60 backdrop-blur-md border border-gold-400/40 text-gold-300 px-8 py-4 rounded-3xl text-sm font-medium mb-8 shadow-luxury">
                <div className="w-2 h-2 bg-gold-400 rounded-full mr-3 animate-pulse"></div>
                Premium Digital Marketing Consultancy
                <Crown className="w-4 h-4 ml-3 text-gold-400" />
              </div>

              {/* Main Headlines */}
              <div className="mb-8">
                <h1 className="text-5xl md:text-7xl font-display font-bold text-white mb-4 leading-tight">
                  <span className="block">DOMINATE</span>
                  <span className="block">THE</span>
                  <span className="block bg-gradient-to-r from-royal-400 via-gold-500 to-royal-600 bg-clip-text text-transparent">
                    LUXURY MARKET
                  </span>
                </h1>
                <div className="w-32 h-2 bg-gradient-to-r from-royal-400 to-gold-500 mb-6 rounded-full"></div>
                <p className="text-xl md:text-2xl text-platinum-300 leading-relaxed max-w-2xl font-light">
                  Elevate your brand with sophisticated marketing strategies that transform 
                  businesses into luxury market leaders. Experience the pinnacle of digital excellence.
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <Link
                  to="/contact"
                  className="group relative bg-gradient-to-r from-royal-500 to-gold-500 text-white px-10 py-5 rounded-3xl font-semibold text-lg hover:shadow-luxury transform hover:-translate-y-2 transition-all duration-300 inline-flex items-center justify-center overflow-hidden border border-gold-400/30"
                >
                  <span className="relative z-10 flex items-center">
                    <Crown className="mr-3 h-5 w-5" />
                    Begin Your Ascent
                    <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
                <Link
                  to="/services"
                  className="group border-2 border-gold-400/60 text-gold-400 px-10 py-5 rounded-3xl font-semibold text-lg hover:bg-gold-400/10 hover:border-gold-400 transition-all duration-300 inline-flex items-center justify-center backdrop-blur-sm"
                >
                  <Diamond className="mr-3 h-5 w-5" />
                  Discover Excellence
                </Link>
              </div>

              {/* Key Metrics */}
              <div className="grid grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold bg-gradient-to-r from-royal-400 to-gold-500 bg-clip-text text-transparent mb-1">500+</div>
                  <div className="text-sm text-platinum-400">Elite Projects</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold bg-gradient-to-r from-royal-400 to-gold-500 bg-clip-text text-transparent mb-1">98%</div>
                  <div className="text-sm text-platinum-400">Excellence Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold bg-gradient-to-r from-royal-400 to-gold-500 bg-clip-text text-transparent mb-1">24/7</div>
                  <div className="text-sm text-platinum-400">Concierge Support</div>
                </div>
              </div>
            </div>

            {/* Right Column - Visual Elements */}
            <div className="order-1 lg:order-2 relative">
              {/* Main Visual Container */}
              <div className="relative">
                {/* Central Dashboard Mockup */}
                <div className="bg-gradient-to-br from-midnight-800/80 to-royal-900/80 backdrop-blur-xl border border-gold-400/30 rounded-[2rem] p-8 shadow-luxury">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                    </div>
                    <div className="text-gold-400 text-sm font-medium">LuxeVelocity Analytics</div>
                  </div>
                  
                  {/* Dashboard Content */}
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 bg-midnight-700/50 rounded-2xl border border-gold-400/10">
                      <div className="flex items-center space-x-3">
                        <TrendingUp className="w-5 h-5 text-gold-400" />
                        <span className="text-white font-medium">Revenue Growth</span>
                      </div>
                      <span className="text-gold-400 font-bold">+347%</span>
                    </div>
                    <div className="flex items-center justify-between p-4 bg-midnight-700/50 rounded-2xl border border-royal-400/10">
                      <div className="flex items-center space-x-3">
                        <Users className="w-5 h-5 text-royal-400" />
                        <span className="text-white font-medium">Lead Generation</span>
                      </div>
                      <span className="text-royal-400 font-bold">+892%</span>
                    </div>
                    <div className="flex items-center justify-between p-4 bg-midnight-700/50 rounded-2xl border border-gold-400/10">
                      <div className="flex items-center space-x-3">
                        <Target className="w-5 h-5 text-gold-400" />
                        <span className="text-white font-medium">Conversion Rate</span>
                      </div>
                      <span className="text-gold-400 font-bold">+156%</span>
                    </div>
                  </div>
                </div>

                {/* Floating Elements */}
                <div className="absolute -top-6 -right-6 bg-gradient-to-r from-royal-400 to-gold-500 p-4 rounded-3xl shadow-luxury animate-bounce">
                  <Crown className="w-6 h-6 text-white" />
                </div>
                <div className="absolute -bottom-4 -left-4 bg-gradient-to-r from-gold-400 to-royal-500 p-3 rounded-2xl shadow-gold animate-pulse">
                  <Zap className="w-5 h-5 text-white" />
                </div>
              </div>

              {/* Floating Service Cards */}
              <div className="absolute top-20 -left-20 hidden lg:block">
                <div className="bg-midnight-800/60 backdrop-blur-md border border-gold-400/30 rounded-3xl p-4 shadow-luxury transform rotate-12 hover:rotate-0 transition-transform duration-300">
                  <Search className="w-8 h-8 text-gold-400 mb-2" />
                  <div className="text-white font-semibold text-sm">Premium SEO</div>
                </div>
              </div>
              
              <div className="absolute bottom-32 -right-16 hidden lg:block">
                <div className="bg-midnight-800/60 backdrop-blur-md border border-royal-400/30 rounded-3xl p-4 shadow-luxury transform -rotate-12 hover:rotate-0 transition-transform duration-300">
                  <Share2 className="w-8 h-8 text-royal-400 mb-2" />
                  <div className="text-white font-semibold text-sm">Elite Social</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-midnight-800 to-royal-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-display font-bold text-white mb-4">Excellence Metrics</h2>
            <p className="text-xl text-platinum-300">Quantifiable results that demonstrate our luxury impact</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center bg-gradient-to-br from-midnight-800/50 to-royal-900/50 p-8 rounded-[2rem] shadow-elegant hover:shadow-luxury transition-all duration-300 border border-gold-400/20 hover:border-gold-400/40">
                <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-royal-400 to-gold-500 bg-clip-text text-transparent mb-3">{stat.number}</div>
                <div className="text-platinum-300 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-midnight-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
              Premium Digital Marketing Suite
            </h2>
            <p className="text-xl text-platinum-300 max-w-3xl mx-auto">
              Sophisticated digital marketing services crafted to establish luxury market leadership and accelerate premium growth.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-gradient-to-br from-midnight-800/50 to-royal-900/50 p-8 rounded-[2rem] shadow-elegant hover:shadow-luxury transition-all duration-300 group border border-gold-400/20 hover:border-gold-400/40">
                <div className="bg-gradient-to-r from-royal-500 to-gold-500 w-16 h-16 rounded-3xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-md">
                  <service.icon className="h-8 w-8 text-black" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">{service.title}</h3>
                <p className="text-platinum-300 mb-6">{service.description}</p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-platinum-300">
                      <CheckCircle className="h-4 w-4 text-gold-400 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className="text-gold-400 font-semibold hover:text-royal-400 inline-flex items-center transition-colors"
                >
                  Discover More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-20 bg-gradient-to-br from-midnight-800 to-royal-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">Luxury Transformations</h2>
            <p className="text-xl text-platinum-300">Exceptional results that showcase our premium impact</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <div key={index} className="bg-gradient-to-br from-midnight-800/50 to-royal-900/50 rounded-[2rem] overflow-hidden hover:shadow-luxury transition-all duration-300 group border border-gold-400/20 hover:border-gold-400/40">
                <img src={study.image} alt={study.title} className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" />
                <div className="p-6">
                  <div className="text-sm text-gold-400 font-semibold mb-2">{study.client}</div>
                  <h3 className="text-xl font-bold text-white mb-3">{study.title}</h3>
                  <p className="text-platinum-300 mb-4">{study.description}</p>
                  <div className="space-y-2">
                    {study.metrics.map((metric, metricIndex) => (
                      <div key={metricIndex} className="flex items-center text-sm">
                        <CheckCircle className="h-4 w-4 text-gold-400 mr-2" />
                        <span className="text-platinum-300">{metric}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-4 text-2xl font-bold bg-gradient-to-r from-royal-400 to-gold-500 bg-clip-text text-transparent">{study.result}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-midnight-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">Our Luxury Framework</h2>
            <p className="text-xl text-platinum-300">A refined methodology for premium digital excellence</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <div key={index} className="text-center group">
                <div className="bg-gradient-to-r from-royal-500 to-gold-500 text-white w-24 h-24 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-luxury">
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">{step.title}</h3>
                <p className="text-platinum-300">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20 bg-gradient-to-br from-midnight-800 to-royal-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">Premium Industry Focus</h2>
            <p className="text-xl text-platinum-300">Sophisticated expertise across luxury business sectors</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
            {industries.map((industry, index) => (
              <div key={index} className="text-center p-6 bg-gradient-to-br from-midnight-800/50 to-royal-900/50 rounded-[2rem] hover:bg-gold-400/10 transition-all duration-300 shadow-elegant hover:shadow-luxury hover:-translate-y-1 border border-gold-400/20 hover:border-gold-400/40">
                <div className="text-3xl mb-3">{industry.icon}</div>
                <div className="text-sm font-medium text-platinum-300">{industry.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-midnight-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
              Why Choose LuxeVelocity?
            </h2>
            <p className="text-xl text-platinum-300 max-w-3xl mx-auto">
              We combine sophisticated innovation with analytical precision to develop premium marketing solutions that drive luxury growth and optimize elite investment returns.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-gradient-to-br from-midnight-800/50 to-royal-900/50 p-8 rounded-[2rem] shadow-elegant hover:shadow-luxury transition-all duration-300 group border border-gold-400/20 hover:border-gold-400/40">
                <div className="bg-gradient-to-r from-royal-500 to-gold-500 w-16 h-16 rounded-3xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-md">
                  <feature.icon className="h-7 w-7 text-black" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-platinum-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Testimonials */}
      <section className="py-20 bg-gradient-to-br from-midnight-800 via-midnight-900 to-royal-900/30 text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-32 h-32 bg-royal-400/20 rounded-full blur-2xl"></div>
          <div className="absolute bottom-10 right-10 w-40 h-40 bg-gold-500/20 rounded-full blur-2xl"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Elite Client Experiences</h2>
            <p className="text-xl text-platinum-300">Authentic testimonials from prestigious partnerships</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gradient-to-br from-midnight-800/50 to-royal-900/50 backdrop-blur-lg p-8 rounded-[2rem] border border-gold-400/20 hover:border-gold-400/40 transition-all duration-300 shadow-elegant hover:shadow-luxury">
                <div className="flex items-center mb-4">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-14 h-14 rounded-full mr-4 border-2 border-gold-400/30"
                  />
                  <div>
                    <div className="font-bold text-white">{testimonial.name}</div>
                    <div className="text-sm text-platinum-300">{testimonial.company}</div>
                  </div>
                </div>
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-gold-400 fill-current" />
                  ))}
                </div>
                <p className="text-platinum-300 italic text-lg">"{testimonial.text}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Email Subscription Section */}
      <section className="py-20 bg-midnight-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-br from-midnight-800/50 to-royal-900/50 p-8 md:p-12 rounded-[2rem] shadow-luxury border border-gold-400/20">
            <div className="bg-gradient-to-r from-royal-500 to-gold-500 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 shadow-md">
              <Mail className="w-10 h-10 text-black" />
            </div>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
              Access Elite Marketing Intelligence
            </h2>
            <p className="text-xl text-platinum-300 mb-8 max-w-2xl mx-auto">
              Receive sophisticated strategies, premium insights, and luxury market intelligence delivered to your inbox. 
              Join our exclusive network of elite digital business leaders.
            </p>
            
            {subscriptionStatus === 'success' ? (
              <div className="bg-gold-400/10 border border-gold-400/20 rounded-3xl p-6 mb-6">
                <CheckCircle className="w-8 h-8 text-gold-400 mx-auto mb-3" />
                <h3 className="text-lg font-semibold text-gold-400 mb-2">Welcome to Excellence!</h3>
                <p className="text-platinum-300">
                  You've joined our prestigious network. Expect sophisticated insights and strategies 
                  that will elevate your luxury digital presence. Your premium welcome package is on its way!
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
                    className="flex-1 px-6 py-4 border border-gold-400/30 bg-midnight-800/50 text-white rounded-3xl focus:ring-2 focus:ring-gold-400 focus:border-transparent text-lg placeholder-platinum-400"
                  />
                  <button
                    type="submit"
                    className="bg-gradient-to-r from-royal-500 to-gold-500 text-white px-8 py-4 rounded-3xl font-bold hover:shadow-luxury transform hover:-translate-y-1 transition-all duration-300 inline-flex items-center justify-center whitespace-nowrap"
                  >
                    Join Elite
                    <Send className="ml-2 h-5 w-5" />
                  </button>
                </div>
              </form>
            )}
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-8 text-sm text-platinum-400">
              <div className="flex items-center">
                <CheckCircle className="w-4 h-4 text-gold-400 mr-2" />
                Weekly premium insights
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-4 h-4 text-gold-400 mr-2" />
                Elite success stories
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-4 h-4 text-gold-400 mr-2" />
                Exclusive access only
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-royal-500 via-gold-500 to-royal-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            Ready to Dominate the Luxury Market?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Elevate your brand strategy and unlock extraordinary growth with our sophisticated marketing solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-midnight-900 text-gold-400 px-12 py-6 rounded-3xl font-bold hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 inline-flex items-center justify-center text-lg border border-gold-400/30"
            >
              Begin Your Ascent
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              to="/services"
              className="border-2 border-white text-white px-12 py-6 rounded-3xl font-bold hover:bg-white hover:text-royal-600 transition-all duration-300 inline-flex items-center justify-center text-lg"
            >
              Explore Excellence
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;