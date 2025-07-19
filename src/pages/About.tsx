import React from 'react';
import { Link } from 'react-router-dom';
import { Users, Target, Award, TrendingUp, CheckCircle, ArrowRight, Mail, Phone, MapPin, User, Sparkles, Crown, Diamond } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Target,
      title: 'Strategic Excellence',
      description: 'We deliver precision-crafted strategies that transform digital landscapes and accelerate business growth.',
    },
    {
      icon: Users,
      title: 'Partnership Approach',
      description: 'We forge lasting partnerships, treating your success as our primary mission and shared achievement.',
    },
    {
      icon: Award,
      title: 'Premium Standards',
      description: 'We maintain exceptional quality benchmarks and consistently exceed expectations in every project.',
    },
    {
      icon: TrendingUp,
      title: 'Innovation Leadership',
      description: 'We leverage cutting-edge technologies and methodologies to keep you ahead of the competition.',
    },
  ];

  const achievements = [
    'Successfully delivered over 850 transformative digital initiatives',
    '98% client satisfaction and long-term retention rate',
    'Average 420% return on marketing investment achieved',
    'Recognized industry expertise and thought leadership',
    'Strategic partnerships with leading technology platforms',
    '24/7 dedicated client support and consultation services',
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-background via-card to-background py-24 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-primary/10 to-accent/10 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-secondary/10 to-primary/10 rounded-full blur-3xl animate-float delay-1000"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center">
            <div className="inline-flex items-center bg-card/60 backdrop-blur-md border border-accent/40 text-accent px-8 py-4 rounded-full text-sm font-semibold mb-8 shadow-soft">
              <Crown className="w-5 h-5 mr-3 text-accent" />
              Premium Creative Agency
              <Sparkles className="w-5 h-5 ml-3 text-accent" />
            </div>
            
            <h1 className="text-4xl md:text-6xl font-heading font-bold text-textPrimary mb-6">
              <span className="block">Discover</span>
              <span className="block bg-gradient-to-r from-primary via-hover to-accent bg-clip-text text-transparent">
                Zenith Creative Studio
              </span>
            </h1>
            <div className="w-32 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-8"></div>
            <p className="text-xl text-textMuted max-w-3xl mx-auto leading-relaxed">
              We are visionary creators and strategic innovators dedicated to transforming brands through 
              exceptional digital experiences and measurable business outcomes.
            </p>
          </div>
        </div>
      </section>

      {/* Core Information Grid */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Our Foundation */}
            <div className="bg-card p-8 rounded-3xl shadow-soft hover:shadow-zenith transition-all duration-300 border border-cardBorder group">
              <div className="bg-gradient-to-r from-primary to-accent w-16 h-16 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-md">
                <Target className="h-8 w-8 text-card" />
              </div>
              <h3 className="text-2xl font-heading font-bold text-textPrimary mb-4">Our Foundation</h3>
              <p className="text-lg text-textMuted leading-relaxed">
                Zenith Creative Studio represents the pinnacle of digital innovation, where strategic thinking 
                meets creative excellence to deliver transformative business solutions.
              </p>
            </div>

            {/* Our Partners */}
            <div className="bg-card p-8 rounded-3xl shadow-soft hover:shadow-zenith transition-all duration-300 border border-cardBorder group">
              <div className="bg-gradient-to-r from-secondary to-primary w-16 h-16 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-md">
                <Users className="h-8 w-8 text-card" />
              </div>
              <h3 className="text-2xl font-heading font-bold text-textPrimary mb-4">Our Partners</h3>
              <p className="text-lg text-textMuted leading-relaxed">
                We collaborate with visionary entrepreneurs, scaling enterprises, and established corporations 
                seeking to elevate their digital presence and achieve sustainable growth.
              </p>
            </div>

            {/* Our Solutions */}
            <div className="bg-card p-8 rounded-3xl shadow-soft hover:shadow-zenith transition-all duration-300 border border-cardBorder group">
              <div className="bg-gradient-to-r from-accent to-secondary w-16 h-16 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-md">
                <Award className="h-8 w-8 text-card" />
              </div>
              <h3 className="text-2xl font-heading font-bold text-textPrimary mb-4">Our Solutions</h3>
              <p className="text-lg text-textMuted leading-relaxed">
                Our comprehensive suite includes strategic branding, digital marketing excellence, 
                web development mastery, and data-driven optimization tailored to your unique objectives.
              </p>
            </div>

            {/* Our Vision */}
            <div className="bg-card p-8 rounded-3xl shadow-soft hover:shadow-zenith transition-all duration-300 border border-cardBorder group">
              <div className="bg-gradient-to-r from-hover to-accent w-16 h-16 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-md">
                <TrendingUp className="h-8 w-8 text-card" />
              </div>
              <h3 className="text-2xl font-heading font-bold text-textPrimary mb-4">Our Vision</h3>
              <p className="text-lg text-textMuted leading-relaxed">
                To empower businesses with innovative digital strategies that create lasting impact, 
                drive exponential growth, and establish market leadership in today's competitive landscape.
              </p>
            </div>
          </div>

          {/* Why Choose Us - Full Width */}
          <div className="mt-16">
            <div className="bg-gradient-to-r from-primary via-hover to-accent text-card p-12 rounded-3xl text-center shadow-zenith">
              <div className="bg-card/20 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Diamond className="h-10 w-10 text-card" />
              </div>
              <h3 className="text-3xl font-heading font-bold mb-6">Why Choose Zenith Creative Studio</h3>
              <p className="text-xl max-w-4xl mx-auto leading-relaxed">
                We combine strategic brilliance, creative innovation, and data-driven precision to deliver 
                exceptional results that transform businesses and create lasting competitive advantages.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-gradient-to-br from-card to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-textPrimary mb-8">Our Journey</h2>
              <div className="space-y-6">
                <p className="text-lg text-textMuted leading-relaxed">
                  Zenith Creative Studio was founded with a singular vision: to democratize access to world-class 
                  digital marketing expertise for businesses of every scale and ambition.
                </p>
                <p className="text-lg text-textMuted leading-relaxed">
                  Our journey began by recognizing the gap between sophisticated marketing technologies and 
                  businesses seeking practical, results-driven solutions. We dedicated ourselves to bridging 
                  this divide through innovative strategies and personalized service excellence.
                </p>
                <p className="text-lg text-textMuted leading-relaxed">
                  Today, we stand as more than service providers—we are strategic growth partners who understand 
                  your vision and craft bespoke solutions that ensure sustainable success and market leadership.
                </p>
              </div>
            </div>
            <div className="bg-card p-8 rounded-3xl shadow-zenith border border-cardBorder">
              <h3 className="text-2xl font-heading font-bold text-textPrimary mb-6">Our Mission</h3>
              <p className="text-lg text-textMuted mb-8 leading-relaxed">
                To empower businesses of all sizes with marketing solutions that are strategically sound, 
                results-oriented, and designed to scale with their success.
              </p>
              <h3 className="text-2xl font-heading font-bold text-textPrimary mb-6">Our Vision</h3>
              <p className="text-lg text-textMuted leading-relaxed">
                To become the most trusted digital marketing partner—recognized for integrity, innovation, 
                and results that drive meaningful business transformation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-textPrimary mb-4">Our Core Values</h2>
            <p className="text-xl text-textMuted max-w-3xl mx-auto">
              These fundamental principles guide our approach and define how we deliver exceptional results 
              for our valued partners.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-card p-8 rounded-3xl shadow-soft hover:shadow-zenith transition-all duration-300 text-center border border-cardBorder group">
                <div className="bg-gradient-to-r from-primary to-accent w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform shadow-md">
                  <value.icon className="h-8 w-8 text-card" />
                </div>
                <h3 className="text-xl font-heading font-semibold text-textPrimary mb-4">{value.title}</h3>
                <p className="text-textMuted leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20 bg-gradient-to-br from-card to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-textPrimary mb-4">Leadership Excellence</h2>
            <p className="text-xl text-textMuted max-w-3xl mx-auto">
              Led by our visionary founder and supported by a team of seasoned professionals who bring 
              decades of experience and unwavering commitment to client success.
            </p>
          </div>
          
          {/* Founder Section */}
          <div className="mb-16">
            <h3 className="text-2xl font-heading font-bold text-textPrimary mb-8 text-center">Executive Leadership</h3>
            <div className="bg-card border-2 border-accent/30 rounded-3xl p-12 max-w-5xl mx-auto shadow-zenith">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <div className="text-center lg:text-left">
                  <div className="bg-gradient-to-r from-primary to-accent w-24 h-24 rounded-full flex items-center justify-center mx-auto lg:mx-0 mb-6 shadow-zenith">
                    <User className="h-12 w-12 text-card" />
                  </div>
                  <h4 className="text-3xl font-heading font-bold text-textPrimary mb-3">RANDY LEROY LOWE</h4>
                  <p className="text-accent font-semibold text-xl mb-6">Founder & Chief Executive</p>
                  <p className="text-textMuted mb-8 leading-relaxed">
                    With over two decades of experience in digital marketing and business transformation, 
                    Randy leads our strategic vision and client relationships. A recognized expert in growth 
                    strategies and innovation, he founded Zenith Creative Studio with a mission to help 
                    businesses achieve extraordinary success in the digital realm.
                  </p>
                  <div className="flex flex-wrap justify-center lg:justify-start gap-3">
                    <span className="bg-accent/20 text-accent px-4 py-2 rounded-full text-sm font-medium">Strategic Leadership</span>
                    <span className="bg-primary/20 text-primary px-4 py-2 rounded-full text-sm font-medium">Client Excellence</span>
                    <span className="bg-secondary/20 text-secondary px-4 py-2 rounded-full text-sm font-medium">Business Growth</span>
                  </div>
                </div>
                
                <div className="space-y-6">
                  <h5 className="text-xl font-heading font-semibold text-textPrimary mb-6">Executive Contact</h5>
                  
                  <div className="flex items-start space-x-4">
                    <Mail className="h-6 w-6 text-accent mt-1 flex-shrink-0" />
                    <div>
                      <p className="text-sm font-medium text-textMuted">Email Address</p>
                      <a href="mailto:brownjulianumm175@hotmail.com" className="text-accent hover:text-hover transition-colors font-medium">
                        brownjulianumm175@hotmail.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <Phone className="h-6 w-6 text-accent mt-1 flex-shrink-0" />
                    <div>
                      <p className="text-sm font-medium text-textMuted">Direct Line</p>
                      <a href="tel:+18478475608" className="text-accent hover:text-hover transition-colors font-medium">
                        +1 (847) 847-5608
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <MapPin className="h-6 w-6 text-accent mt-1 flex-shrink-0" />
                    <div>
                      <p className="text-sm font-medium text-textMuted">Executive Office</p>
                      <div className="text-textMuted">
                        <p>West 13th Avenue 503</p>
                        <p>Kennewick, WA 99337</p>
                        <p>United States of America</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Office Showcase */}
          <div className="mt-16">
            <h3 className="text-2xl font-heading font-bold text-textPrimary mb-8 text-center">Our Creative Headquarters</h3>
            <div className="bg-card border border-cardBorder rounded-3xl overflow-hidden shadow-zenith">
              <img 
                src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop" 
                alt="Zenith Creative Studio Headquarters" 
                className="w-full h-64 md:h-80 object-cover"
              />
              <div className="p-8">
                <h4 className="text-xl font-heading font-semibold text-textPrimary mb-3">Zenith Creative Studio Headquarters</h4>
                <p className="text-textMuted leading-relaxed">
                  Our state-of-the-art creative headquarters in Kennewick, Washington, where innovation meets 
                  strategy and our expert team crafts transformative digital solutions for ambitious businesses 
                  seeking extraordinary growth and market leadership.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-20 bg-gradient-to-r from-primary via-hover to-accent text-card relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">Our Achievements</h2>
            <p className="text-xl max-w-3xl mx-auto">
              We celebrate our accomplishments, but we're more focused on the extraordinary success 
              we'll achieve together as strategic partners.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="flex items-center bg-card/20 backdrop-blur-md p-6 rounded-2xl border border-card/30">
                <CheckCircle className="h-6 w-6 text-secondary mr-4 flex-shrink-0" />
                <span className="text-card font-medium">{achievement}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-card p-12 rounded-3xl shadow-zenith border border-cardBorder">
            <div className="bg-gradient-to-r from-primary to-accent w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-8 shadow-md">
              <Sparkles className="h-10 w-10 text-card" />
            </div>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-textPrimary mb-6">
              Ready to Begin Our Partnership?
            </h2>
            <p className="text-xl text-textMuted mb-10 max-w-2xl mx-auto leading-relaxed">
              Let's explore how we can elevate your brand, accelerate your growth, and achieve 
              extraordinary results together.
            </p>
            <Link
              to="/contact"
              className="bg-gradient-to-r from-buttonGradientStart to-buttonGradientEnd text-card px-12 py-6 rounded-full font-bold hover:shadow-zenith transform hover:-translate-y-2 transition-all duration-300 inline-flex items-center text-lg"
            >
              Start Your Transformation
              <ArrowRight className="ml-3 h-6 w-6" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;