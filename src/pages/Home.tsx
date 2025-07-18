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
    <div className="min-h-screen bg-gray-900">
      {/* Revolutionary Hero Section */}
      <section className="relative min-h-screen bg-gradient-to-tr from-slate-900 via-gray-900 to-slate-800 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-10 right-10 w-[500px] h-[500px] bg-gradient-to-bl from-cyan-400/15 to-teal-600/15 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-10 left-10 w-[400px] h-[400px] bg-gradient-to-tr from-teal-400/15 to-cyan-500/15 rounded-full blur-3xl animate-pulse delay-700"></div>
          <div className="absolute top-1/3 left-1/2 w-[300px] h-[300px] bg-gradient-to-r from-cyan-300/10 to-teal-400/10 rounded-full blur-2xl animate-pulse delay-1500"></div>
        </div>

        {/* Hexagonal Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              radial-gradient(circle at 25% 25%, rgb(34 211 238) 2px, transparent 2px),
              radial-gradient(circle at 75% 75%, rgb(20 184 166) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px, 40px 40px'
          }}></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-screen">
            {/* Left Column - Content */}
            <div className="order-2 lg:order-1">
              {/* Status Badge */}
              <div className="inline-flex items-center bg-slate-800/60 backdrop-blur-md border border-cyan-400/40 text-cyan-300 px-6 py-3 rounded-2xl text-sm font-medium mb-8 shadow-xl">
                <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3 animate-pulse"></div>
                Elite Digital Marketing Agency
                <Sparkles className="w-4 h-4 ml-3 text-cyan-400" />
              </div>

              {/* Main Headlines */}
              <div className="mb-8">
                <h1 className="text-5xl md:text-7xl font-black text-white mb-4 leading-tight">
                  <span className="block">DOMINATE</span>
                  <span className="block">THE</span>
                  <span className="block bg-gradient-to-r from-cyan-400 via-teal-500 to-cyan-600 bg-clip-text text-transparent">
                    DIGITAL REALM
                  </span>
                </h1>
                <div className="w-24 h-1.5 bg-gradient-to-r from-cyan-400 to-teal-500 mb-6"></div>
                <p className="text-xl md:text-2xl text-gray-300 leading-relaxed max-w-2xl font-light">
                  Unleash unprecedented growth with cutting-edge marketing strategies that transform 
                  businesses into industry leaders. Experience the power of data-driven excellence.
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <Link
                  to="/contact"
                  className="group relative bg-gradient-to-r from-cyan-400 to-teal-500 text-black px-8 py-4 rounded-xl font-bold text-lg hover:shadow-2xl hover:shadow-cyan-500/30 transform hover:-translate-y-1 transition-all duration-300 inline-flex items-center justify-center overflow-hidden"
                >
                  <span className="relative z-10 flex items-center">
                    <Target className="mr-3 h-5 w-5" />
                    Launch Your Success
                    <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
                <Link
                  to="/services"
                  className="group border-2 border-cyan-400/60 text-cyan-400 px-8 py-4 rounded-xl font-bold text-lg hover:bg-cyan-400/10 hover:border-cyan-400 transition-all duration-300 inline-flex items-center justify-center backdrop-blur-sm"
                >
                  <BarChart3 className="mr-3 h-5 w-5" />
                  Explore Solutions
                </Link>
              </div>

              {/* Key Metrics */}
              <div className="grid grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-teal-500 bg-clip-text text-transparent mb-1">500+</div>
                  <div className="text-sm text-gray-400">Projects Delivered</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-teal-500 bg-clip-text text-transparent mb-1">98%</div>
                  <div className="text-sm text-gray-400">Success Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-teal-500 bg-clip-text text-transparent mb-1">24/7</div>
                  <div className="text-sm text-gray-400">Expert Support</div>
                </div>
              </div>
            </div>

            {/* Right Column - Visual Elements */}
            <div className="order-1 lg:order-2 relative">
              {/* Main Visual Container */}
              <div className="relative">
                {/* Central Dashboard Mockup */}
                <div className="bg-gradient-to-br from-slate-800/80 to-gray-900/80 backdrop-blur-xl border border-cyan-400/30 rounded-3xl p-8 shadow-2xl">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                    </div>
                    <div className="text-cyan-400 text-sm font-medium">BitBoostMedia Dashboard</div>
                  </div>
                  
                  {/* Dashboard Content */}
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 bg-slate-700/50 rounded-xl">
                      <div className="flex items-center space-x-3">
                        <TrendingUp className="w-5 h-5 text-cyan-400" />
                        <span className="text-white font-medium">Revenue Growth</span>
                      </div>
                      <span className="text-cyan-400 font-bold">+347%</span>
                    </div>
                    <div className="flex items-center justify-between p-4 bg-slate-700/50 rounded-xl">
                      <div className="flex items-center space-x-3">
                        <Users className="w-5 h-5 text-teal-400" />
                        <span className="text-white font-medium">Lead Generation</span>
                      </div>
                      <span className="text-teal-400 font-bold">+892%</span>
                    </div>
                    <div className="flex items-center justify-between p-4 bg-slate-700/50 rounded-xl">
                      <div className="flex items-center space-x-3">
                        <Target className="w-5 h-5 text-cyan-400" />
                        <span className="text-white font-medium">Conversion Rate</span>
                      </div>
                      <span className="text-cyan-400 font-bold">+156%</span>
                    </div>
                  </div>
                </div>

                {/* Floating Elements */}
                <div className="absolute -top-6 -right-6 bg-gradient-to-r from-cyan-400 to-teal-500 p-4 rounded-2xl shadow-xl animate-bounce">
                  <Rocket className="w-6 h-6 text-black" />
                </div>
                <div className="absolute -bottom-4 -left-4 bg-gradient-to-r from-teal-400 to-cyan-500 p-3 rounded-xl shadow-xl animate-pulse">
                  <Lightning className="w-5 h-5 text-black" />
                </div>
              </div>

              {/* Floating Service Cards */}
              <div className="absolute top-20 -left-20 hidden lg:block">
                <div className="bg-slate-800/60 backdrop-blur-md border border-cyan-400/30 rounded-2xl p-4 shadow-xl transform rotate-12 hover:rotate-0 transition-transform duration-300">
                  <Search className="w-8 h-8 text-cyan-400 mb-2" />
                  <div className="text-white font-semibold text-sm">SEO Mastery</div>
                </div>
              </div>
              
              <div className="absolute bottom-32 -right-16 hidden lg:block">
                <div className="bg-slate-800/60 backdrop-blur-md border border-teal-400/30 rounded-2xl p-4 shadow-xl transform -rotate-12 hover:rotate-0 transition-transform duration-300">
                  <Share2 className="w-8 h-8 text-teal-400 mb-2" />
                  <div className="text-white font-semibold text-sm">Social Growth</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-slate-800 to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Performance Metrics</h2>
            <p className="text-xl text-gray-300">Quantifiable results that demonstrate our impact</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center bg-gradient-to-br from-slate-800/50 to-gray-900/50 p-6 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 border border-cyan-400/20 hover:border-cyan-400/40">
                <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-teal-500 bg-clip-text text-transparent mb-3">{stat.number}</div>
                <div className="text-gray-300 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Complete Digital Marketing Suite
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Full-spectrum digital marketing services engineered to establish market leadership and accelerate sustainable growth.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-gradient-to-br from-slate-800/50 to-gray-900/50 p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 group border border-cyan-400/20 hover:border-cyan-400/40">
                <div className="bg-gradient-to-r from-cyan-400 to-teal-500 w-16 h-16 rounded-3xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <service.icon className="h-8 w-8 text-black" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">{service.title}</h3>
                <p className="text-gray-300 mb-6">{service.description}</p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="h-4 w-4 text-cyan-400 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className="text-cyan-400 font-semibold hover:text-teal-400 inline-flex items-center transition-colors"
                >
                  Explore More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-20 bg-gradient-to-br from-slate-800 to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Success Transformations</h2>
            <p className="text-xl text-gray-300">Real results that showcase our strategic impact</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <div key={index} className="bg-gradient-to-br from-slate-800/50 to-gray-900/50 rounded-3xl overflow-hidden hover:shadow-2xl transition-all duration-300 group border border-cyan-400/20 hover:border-cyan-400/40">
                <img src={study.image} alt={study.title} className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" />
                <div className="p-6">
                  <div className="text-sm text-cyan-400 font-semibold mb-2">{study.client}</div>
                  <h3 className="text-xl font-bold text-white mb-3">{study.title}</h3>
                  <p className="text-gray-300 mb-4">{study.description}</p>
                  <div className="space-y-2">
                    {study.metrics.map((metric, metricIndex) => (
                      <div key={metricIndex} className="flex items-center text-sm">
                        <CheckCircle className="h-4 w-4 text-cyan-400 mr-2" />
                        <span className="text-gray-300">{metric}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-4 text-2xl font-bold bg-gradient-to-r from-cyan-400 to-teal-500 bg-clip-text text-transparent">{study.result}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Strategic Framework</h2>
            <p className="text-xl text-gray-300">A proven methodology for digital excellence</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <div key={index} className="text-center group">
                <div className="bg-gradient-to-r from-cyan-400 to-teal-500 text-black w-20 h-20 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">{step.title}</h3>
                <p className="text-gray-300">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20 bg-gradient-to-br from-slate-800 to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Industry Specialization</h2>
            <p className="text-xl text-gray-300">Deep expertise across essential business sectors</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
            {industries.map((industry, index) => (
              <div key={index} className="text-center p-6 bg-gradient-to-br from-slate-800/50 to-gray-900/50 rounded-3xl hover:bg-cyan-400/10 transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-1 border border-cyan-400/20 hover:border-cyan-400/40">
                <div className="text-3xl mb-3">{industry.icon}</div>
                <div className="text-sm font-medium text-gray-300">{industry.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose BitBoostMedia?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We combine strategic innovation with analytical precision to develop marketing solutions that drive growth and optimize investment returns.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-gradient-to-br from-slate-800/50 to-gray-900/50 p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 group border border-cyan-400/20 hover:border-cyan-400/40">
                <div className="bg-gradient-to-r from-cyan-400 to-teal-500 w-14 h-14 rounded-3xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <feature.icon className="h-7 w-7 text-black" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Testimonials */}
      <section className="py-20 bg-gradient-to-br from-slate-800 via-black to-gray-900 text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-32 h-32 bg-cyan-400/20 rounded-full blur-2xl"></div>
          <div className="absolute bottom-10 right-10 w-40 h-40 bg-teal-500/20 rounded-full blur-2xl"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Client Experiences</h2>
            <p className="text-xl text-gray-300">Genuine testimonials from successful partnerships</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gradient-to-br from-slate-800/50 to-gray-900/50 backdrop-blur-lg p-8 rounded-3xl border border-cyan-400/20 hover:border-cyan-400/40 transition-all duration-300">
                <div className="flex items-center mb-4">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-14 h-14 rounded-full mr-4 border-2 border-cyan-400/30"
                  />
                  <div>
                    <div className="font-bold text-white">{testimonial.name}</div>
                    <div className="text-sm text-gray-300">{testimonial.company}</div>
                  </div>
                </div>
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-cyan-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 italic text-lg">"{testimonial.text}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Email Subscription Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-br from-slate-800/50 to-gray-900/50 p-8 md:p-12 rounded-3xl shadow-2xl border border-cyan-400/20">
            <div className="bg-gradient-to-r from-cyan-400 to-teal-500 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Mail className="w-10 h-10 text-black" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Access Premium Marketing Intelligence
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Receive advanced strategies, expert insights, and market intelligence delivered to your inbox. 
              Join our network of thriving digital business leaders.
            </p>
            
            {subscriptionStatus === 'success' ? (
              <div className="bg-cyan-400/10 border border-cyan-400/20 rounded-2xl p-6 mb-6">
                <CheckCircle className="w-8 h-8 text-cyan-400 mx-auto mb-3" />
                <h3 className="text-lg font-semibold text-cyan-400 mb-2">Welcome Aboard!</h3>
                <p className="text-gray-300">
                  You've joined our exclusive network. Expect revolutionary insights and strategies 
                  that will elevate your digital presence. Your welcome package is on its way!
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
                    className="flex-1 px-6 py-4 border border-cyan-400/30 bg-slate-800/50 text-white rounded-2xl focus:ring-2 focus:ring-cyan-400 focus:border-transparent text-lg placeholder-gray-400"
                  />
                  <button
                    type="submit"
                    className="bg-gradient-to-r from-cyan-400 to-teal-500 text-black px-8 py-4 rounded-2xl font-bold hover:shadow-xl hover:shadow-cyan-500/25 transform hover:-translate-y-1 transition-all duration-300 inline-flex items-center justify-center whitespace-nowrap"
                  >
                    Subscribe Now
                    <Send className="ml-2 h-5 w-5" />
                  </button>
                </div>
              </form>
            )}
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-8 text-sm text-gray-400">
              <div className="flex items-center">
                <CheckCircle className="w-4 h-4 text-cyan-400 mr-2" />
                Weekly strategic insights
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-4 h-4 text-cyan-400 mr-2" />
                Premium success stories
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-4 h-4 text-cyan-400 mr-2" />
                Zero spam, easy unsubscribe
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-400 via-teal-500 to-cyan-600 text-black relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Lead Your Industry?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Elevate your digital strategy and unlock unprecedented growth with our innovative marketing solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-black text-cyan-400 px-10 py-5 rounded-2xl font-bold hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 inline-flex items-center justify-center text-lg"
            >
              Begin Your Journey
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              to="/services"
              className="border-2 border-black text-black px-10 py-5 rounded-2xl font-bold hover:bg-black hover:text-cyan-400 transition-all duration-300 inline-flex items-center justify-center text-lg"
            >
              View Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;