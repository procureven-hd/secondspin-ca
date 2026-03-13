import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { 
  MapPin, 
  Leaf, 
  Heart, 
  DollarSign, 
  Store, 
  Gem, 
  Clock, 
  Handshake, 
  Recycle,
  Calendar,
  ArrowDown,
  Bell,
  ArrowRight,
  NotebookPen,
  Menu,
  X,
  TrendingDown,
  Users,
  Package,
  CheckCircle,
  XCircle,
  Gift,
  Shirt,
  Home as HomeIcon,
  Zap,
  Gamepad2,
  ChefHat,
  Star,
  BookOpen,
  BriefcaseBusiness
} from 'lucide-react';
import { FaFacebookF, FaInstagram, FaTwitter, FaTiktok } from 'react-icons/fa';
import logoPath from '@assets/image_1752182186032.png';
import storeClothingWide from '@assets/Gemini_Generated_Image_gl3c3ogl3c3ogl3c (8)_1759262069438.png';
import storeClothingAisle1 from '@assets/Gemini_Generated_Image_gl3c3ogl3c3ogl3c (6)_1759262069438.png';
import storeClothingPants from '@assets/Gemini_Generated_Image_gl3c3ogl3c3ogl3c (5)_1759262069438.png';
import storeClothingSkirts from '@assets/Gemini_Generated_Image_gl3c3ogl3c3ogl3c (4)_1759262069438.png';
import storeClothingJackets from '@assets/Gemini_Generated_Image_gl3c3ogl3c3ogl3c (3)_1759262069439.png';
import storeShoes from '@assets/Gemini_Generated_Image_gl3c3ogl3c3ogl3c (1)_1759262069439.png';
import storeHousewares1 from '@assets/Gemini_Generated_Image_gl3c3ogl3c3ogl3c (10)_1759262069438.png';
import storeHousewares2 from '@assets/Gemini_Generated_Image_gl3c3ogl3c3ogl3c_1759262069439.png';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [email, setEmail] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'why-us', 'donations', 'careers', 'coming-soon', 'follow'];
      const scrollPosition = window.scrollY + 200;

      sections.forEach(section => {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement newsletter signup
    alert('Newsletter signup functionality will be implemented before launch!');
    setEmail('');
  };

  const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
    <button
      onClick={() => scrollToSection(href)}
      className={`transition-colors font-medium hover:text-brand-red ${
        activeSection === href ? 'text-brand-red' : 'text-brand-gray'
      }`}
    >
      {children}
    </button>
  );

  return (
    <div className="font-poppins bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <img src={logoPath} alt="second spin thrift Logo" className="h-16 w-auto" />
            </div>
            <div className="hidden md:flex space-x-8">
              <NavLink href="home">Home</NavLink>
              <NavLink href="about">About</NavLink>
              <NavLink href="why-us">Why Choose Us</NavLink>
              <NavLink href="donations">Donations</NavLink>
              <NavLink href="careers">Careers</NavLink>
              <NavLink href="coming-soon">Visit Us</NavLink>
            </div>
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-brand-gray hover:text-brand-red"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
          
          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-gray-200">
              <div className="flex flex-col space-y-4">
                <NavLink href="home">Home</NavLink>
                <NavLink href="about">About</NavLink>
                <NavLink href="why-us">Why Choose Us</NavLink>
                <NavLink href="donations">Donations</NavLink>
                <NavLink href="careers">Careers</NavLink>
                <NavLink href="coming-soon">Visit Us</NavLink>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative bg-gradient-to-br from-brand-light to-white pt-20 pb-16 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[600px]">
            <div className="text-center lg:text-left">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-brand-navy mb-6 leading-tight">
                Thrift Different in <span className="text-brand-red">Trenton</span>
              </h1>
              <p className="text-xl text-brand-gray mb-8 max-w-2xl mx-auto lg:mx-0">
                Your favorite thrift store is now open! Discover incredible deals on locally sourced clothing that won't break the bank.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button
                  variant="outline"
                  onClick={() => scrollToSection('about')}
                  className="border-2 border-brand-red text-brand-red hover:bg-brand-red hover:text-white px-8 py-4 text-lg font-semibold"
                >
                  Learn More
                  <ArrowDown className="ml-2 h-5 w-5" />
                </Button>
                <Button 
                  onClick={() => window.location.href = 'tel:+16138475539'}
                  className="bg-brand-red hover:bg-brand-red-dark text-white px-8 py-4 text-lg font-semibold"
                >
                  📞 (613) 847-5539
                </Button>
              </div>
            </div>
            <div className="relative">
              <img
                src={storeClothingWide}
                alt="Wide view of Second Spin Thrift store with organized clothing racks"
                className="rounded-2xl shadow-2xl w-full h-auto"
              />
              <div className="absolute inset-0 bg-brand-red/10 rounded-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Value Proposition Section */}
      <section className="py-20 bg-brand-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-brand-navy mb-6">
                Better Clothes, Better Prices
              </h2>
              <p className="text-xl text-brand-gray mb-8">
                Tired of paying inflated prices at national thrift chains? We offer the same quality clothing at significantly lower prices, because we believe great fashion should be accessible to everyone in our community.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-brand-red rounded-full flex items-center justify-center flex-shrink-0">
                    <DollarSign className="text-white h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-brand-navy mb-1">Up to 70% Less Than National Chains</h3>
                    <p className="text-brand-gray">Why pay $15-25 for a shirt when you can get the same quality for $7?</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-brand-red rounded-full flex items-center justify-center flex-shrink-0">
                    <TrendingDown className="text-white h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-brand-navy mb-1">No Corporate Overhead</h3>
                    <p className="text-brand-gray">As a local business, we pass our savings directly to you instead of shareholders.</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-brand-red rounded-full flex items-center justify-center flex-shrink-0">
                    <Users className="text-white h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-brand-navy mb-1">Community-First Pricing</h3>
                    <p className="text-brand-gray">Fair prices that work for real families, not corporate profit margins.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-xl">
              <h3 className="text-2xl font-bold text-brand-navy mb-6 text-center">Price Comparison</h3>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center py-3 border-b border-gray-100">
                  <span className="text-brand-gray">Women's Blouse</span>
                  <div className="text-right">
                    <div className="text-sm text-gray-400 line-through">National Chain: $18</div>
                    <div className="text-lg font-bold text-brand-red">Second Spin: $6</div>
                  </div>
                </div>
                
                <div className="flex justify-between items-center py-3 border-b border-gray-100">
                  <span className="text-brand-gray">Men's Dress Shirt</span>
                  <div className="text-right">
                    <div className="text-sm text-gray-400 line-through">National Chain: $22</div>
                    <div className="text-lg font-bold text-brand-red">Second Spin: $8</div>
                  </div>
                </div>
                
                <div className="flex justify-between items-center py-3 border-b border-gray-100">
                  <span className="text-brand-gray">Kids' Jeans</span>
                  <div className="text-right">
                    <div className="text-sm text-gray-400 line-through">National Chain: $15</div>
                    <div className="text-lg font-bold text-brand-red">Second Spin: $5</div>
                  </div>
                </div>
                
                <div className="bg-brand-red/10 rounded-lg p-4 mt-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-brand-red mb-1">$7</div>
                    <div className="text-brand-navy font-semibold">Average Item Price</div>
                    <div className="text-sm text-brand-gray">vs. $14+ at national chains</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-brand-navy mb-4">
              Locally Sourced, Globally Inspired
            </h2>
            <p className="text-xl text-brand-gray max-w-3xl mx-auto">
              At <span className="text-brand-red font-semibold">second spin thrift</span>, we believe great fashion shouldn't cost a fortune. Every piece in our collection is carefully sourced from our local community.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <img
                src={storeClothingAisle1}
                alt="Organized clothing racks in Second Spin Thrift store"
                className="rounded-lg shadow-md w-full"
              />
              <img
                src={storeClothingPants}
                alt="Pants section at Second Spin Thrift"
                className="rounded-lg shadow-md w-full"
              />
            </div>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-brand-red rounded-full flex items-center justify-center">
                    <MapPin className="text-white h-6 w-6" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-brand-navy mb-2">100% Local Sourcing</h3>
                  <p className="text-brand-gray">Every item comes directly from our Trenton and surrounding community, supporting local families while reducing waste.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-brand-red rounded-full flex items-center justify-center">
                    <Leaf className="text-white h-6 w-6" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-brand-navy mb-2">Sustainable Fashion</h3>
                  <p className="text-brand-gray">Give pre-loved clothing a second chance while making environmentally conscious choices.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-brand-red rounded-full flex items-center justify-center">
                    <Heart className="text-white h-6 w-6" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-brand-navy mb-2">Community First</h3>
                  <p className="text-brand-gray">We're more than a store - we're your neighbors, committed to making thrift shopping accessible for everyone.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Store Gallery Section */}
      <section className="py-20 bg-brand-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-brand-navy mb-4">
              Shop by Department
            </h2>
            <p className="text-xl text-brand-gray max-w-3xl mx-auto">
              Explore our well-organized store featuring clothing, housewares, shoes, and more—all at unbeatable prices!
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Clothing Section */}
            <Card className="overflow-hidden hover:shadow-xl transition-shadow" data-testid="card-clothing">
              <div className="relative h-64">
                <img
                  src={storeClothingSkirts}
                  alt="Clothing section with skirts and dresses"
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-6">
                <div className="flex items-center mb-3">
                  <Shirt className="text-brand-red h-6 w-6 mr-2" />
                  <h3 className="text-xl font-semibold text-brand-navy">Clothing</h3>
                </div>
                <p className="text-brand-gray">
                  Explore aisles of tops, pants, dresses, skirts, and jackets for all ages and styles.
                </p>
              </CardContent>
            </Card>

            {/* Housewares Section */}
            <Card className="overflow-hidden hover:shadow-xl transition-shadow" data-testid="card-housewares">
              <div className="relative h-64">
                <img
                  src={storeHousewares1}
                  alt="Housewares section with dishes and kitchenware"
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-6">
                <div className="flex items-center mb-3">
                  <HomeIcon className="text-brand-red h-6 w-6 mr-2" />
                  <h3 className="text-xl font-semibold text-brand-navy">Housewares</h3>
                </div>
                <p className="text-brand-gray">
                  Discover plates, bowls, glassware, and home essentials to complete your kitchen.
                </p>
              </CardContent>
            </Card>

            {/* Shoes Section */}
            <Card className="overflow-hidden hover:shadow-xl transition-shadow" data-testid="card-shoes">
              <div className="relative h-64">
                <img
                  src={storeShoes}
                  alt="Shoes section with boots, sneakers, and more"
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-6">
                <div className="flex items-center mb-3">
                  <Star className="text-brand-red h-6 w-6 mr-2" />
                  <h3 className="text-xl font-semibold text-brand-navy">Shoes</h3>
                </div>
                <p className="text-brand-gray">
                  Find your perfect fit with our selection of boots, sneakers, sandals, and more.
                </p>
              </CardContent>
            </Card>

          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section id="why-us" className="py-20 bg-brand-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-brand-navy mb-4">
              Why Choose second spin?
            </h2>
            <p className="text-xl text-brand-gray max-w-3xl mx-auto">
              We're shaking up the thrift game in Trenton with unbeatable prices and a fresh approach to secondhand shopping.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {[
              {
                icon: DollarSign,
                title: "Unbeatable Prices",
                description: "Significant discounts compared to national thrift chains. Quality fashion at prices that make sense.",
                highlight: "Up to 70% less than competitors"
              },
              {
                icon: Store,
                title: "Local Alternative",
                description: "Tired of the same old national brand experience? We offer a fresh, community-focused approach.",
                highlight: "Proudly independent"
              },
              {
                icon: Clock,
                title: "Fresh Inventory",
                description: "Hourly updates to clothing from our local community means there's always something new to discover.",
                highlight: "Hourly updates to clothing"
              },
              {
                icon: Recycle,
                title: "Eco-Friendly",
                description: "Every purchase helps reduce textile waste and supports sustainable fashion practices.",
                highlight: "Planet-friendly choice"
              }
            ].map((item, index) => (
              <Card key={index} className="hover:shadow-xl transition-shadow">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-brand-red rounded-full flex items-center justify-center mb-6">
                    <item.icon className="text-white h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-semibold text-brand-navy mb-4">{item.title}</h3>
                  <p className="text-brand-gray mb-4">{item.description}</p>
                  <div className="text-brand-red font-semibold">{item.highlight}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Donations Section */}
      <section id="donations" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-brand-navy mb-4">
              Donate Your Pre-Loved Items
            </h2>
            <p className="text-xl text-brand-gray max-w-3xl mx-auto">
              Give your items a new purpose and help build a more sustainable community in Trenton, Ontario.
            </p>
          </div>

          {/* Sustainability Message */}
          <div className="bg-brand-light rounded-2xl p-8 mb-16 text-center">
            <div className="max-w-4xl mx-auto">
              <Recycle className="h-16 w-16 text-brand-red mx-auto mb-6" />
              <h3 className="text-2xl font-bold text-brand-navy mb-4">Give Your Items a New Purpose</h3>
              <p className="text-lg text-brand-gray leading-relaxed">
                Donating to second spin thrift promotes sustainability by giving pre-loved items a new lease on life. 
                By choosing to donate rather than discard, you actively participate in reducing waste and conserving resources 
                while supporting our local circular economy. Every donation helps decrease landfill waste and fosters a culture 
                of reuse in our Trenton community.
              </p>
            </div>
          </div>

          {/* What We Accept */}
          <div className="mb-16">
            <h3 className="text-2xl sm:text-3xl font-bold text-brand-navy mb-8 text-center">Items We Accept</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  icon: Shirt,
                  title: "Clothing & Shoes",
                  items: ["Men's, women's, children's clothing", "All types of footwear"]
                },
                {
                  icon: Gift,
                  title: "Accessories",
                  items: ["Hats, mittens, scarves, ties", "Purses, wallets, backpacks", "Socks and belts"]
                },
                {
                  icon: Zap,
                  title: "Small Electronics",
                  items: ["Toasters, radios, irons", "Blenders, mixers, stereos", "Lamps and humidifiers"]
                },
                {
                  icon: Gamepad2,
                  title: "Sports & Toys",
                  items: ["Golf accessories, sports equipment", "Exercise equipment, skis", "Toys, games, puzzles"]
                },
                {
                  icon: ChefHat,
                  title: "Kitchen Items",
                  items: ["Pots, pans, utensils", "China, dishes, cutlery", "Glassware and stemware"]
                },
                {
                  icon: Star,
                  title: "Decorative Items",
                  items: ["Jewelry, crafts, candles", "Pictures, frames, baskets", "Ornaments and hand tools"]
                },
                {
                  icon: BookOpen,
                  title: "Media & Books",
                  items: ["Books and magazines", "Records, CDs, DVDs", "Computer software"]
                },
                {
                  icon: HomeIcon,
                  title: "Textiles",
                  items: ["Towels, sheets, blankets", "Pillows and curtains", "Tablecloths"]
                }
              ].map((category, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow border-2 border-green-100">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                      <category.icon className="text-green-600 h-6 w-6" />
                    </div>
                    <h4 className="text-lg font-semibold text-brand-navy mb-3">{category.title}</h4>
                    <ul className="text-sm text-brand-gray space-y-1">
                      {category.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start">
                          <CheckCircle className="h-3 w-3 text-green-500 mt-1 mr-2 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* What We Cannot Accept */}
          <div className="bg-red-50 rounded-2xl p-8">
            <h3 className="text-2xl sm:text-3xl font-bold text-brand-navy mb-8 text-center">Items We Cannot Accept</h3>
            <p className="text-center text-brand-gray mb-8 max-w-3xl mx-auto">
              We appreciate your interest in donating! However, for safety and legal reasons, we cannot accept certain items.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                "Automobile parts (tires, mufflers, fenders)",
                "Beds & bedding parts (mattresses, box springs, cribs)",
                "Construction materials (lumber, pipes, carpet)",
                "Damaged furniture (torn, soiled, or needing repair)",
                "Hazardous materials (batteries, paints, chemicals)",
                "Flammable products (gas cans, propane, barbecues)",
                "Infant car seats and cribs (restricted by law)",
                "Large appliances (refrigerators, dishwashers, stoves)",
                "Marine vessels (boats, canoes, kayaks)",
                "CRT televisions and computer monitors",
                "Weapons (firearms, ammunition, explosives)",
                "Swing sets, food, and animals"
              ].map((item, index) => (
                <div key={index} className="flex items-start bg-white p-4 rounded-lg">
                  <XCircle className="h-4 w-4 text-red-500 mt-1 mr-3 flex-shrink-0" />
                  <span className="text-sm text-brand-gray">{item}</span>
                </div>
              ))}
            </div>
            <div className="mt-6 p-4 bg-blue-50 rounded-lg">
              <p className="text-sm text-brand-gray">
                <strong>Note:</strong> We do accept LCD, LED, and plasma flat screen TVs. Some construction items like decorative hardware, 
                light fixtures, and stained glass windows may be acceptable.
              </p>
            </div>
          </div>

          {/* Donation Call to Action */}
          <div className="text-center mt-16">
            <Card className="bg-brand-navy text-white max-w-2xl mx-auto">
              <CardContent className="p-8">
                <Package className="h-16 w-16 text-brand-red mx-auto mb-6" />
                <h3 className="text-2xl font-bold mb-4">Ready to Donate?</h3>
                <p className="text-lg mb-6 opacity-90">
                  We accept donations during regular business hours inside the store. 
                  Simply bring your items to our location in Trenton, Ontario.
                </p>
                <p className="text-sm opacity-75">
                  Questions about donations? Call us at (613) 847-5539
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Careers Section */}
      <section id="careers" className="py-20 bg-brand-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-brand-navy mb-4">
              Join Our Team
            </h2>
            <p className="text-xl text-brand-gray max-w-3xl mx-auto">
              Be part of something special in Trenton! We're looking for passionate individuals to help build our community-focused thrift store.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-brand-red rounded-full flex items-center justify-center">
                      <Users className="text-white h-6 w-6" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-brand-navy mb-2">Community-Focused Work Environment</h3>
                    <p className="text-brand-gray">Join a team that values community impact and sustainable practices while building something meaningful in Trenton.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-brand-red rounded-full flex items-center justify-center">
                      <Heart className="text-white h-6 w-6" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-brand-navy mb-2">Make a Real Difference</h3>
                    <p className="text-brand-gray">Help make affordable, quality clothing accessible to everyone while promoting sustainable fashion choices.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-brand-red rounded-full flex items-center justify-center">
                      <BriefcaseBusiness className="text-white h-6 w-6" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-brand-navy mb-2">Growing Opportunities</h3>
                    <p className="text-brand-gray">Be part of a new business from the ground up with opportunities to grow and develop your skills.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-xl">
              <div className="text-center mb-6">
                <BriefcaseBusiness className="h-16 w-16 text-brand-red mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-brand-navy mb-4">Apply Today</h3>
                <p className="text-brand-gray mb-6">
                  We're looking for enthusiastic team members to join our growing business. 
                  If you're passionate about customer service and community impact, we'd love to hear from you.
                </p>
              </div>
              
              <div className="space-y-4">
                
                <Button 
                  onClick={() => window.open('mailto:jobs@secondspin.ca?subject=Job Application - second spin thrift&body=Hi! I am interested in applying for a position at second spin thrift. Please find my resume attached or contact me to discuss opportunities.', '_blank')}
                  className="w-full bg-brand-red hover:bg-brand-red-dark text-white px-8 py-4 text-lg font-semibold"
                >
                  <NotebookPen className="mr-2 h-5 w-5" />
                  Apply Now
                </Button>
                
                <p className="text-xs text-brand-gray text-center">
                  Send your resume and cover letter to <strong>jobs@secondspin.ca</strong>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Now Open Section */}
      <section id="coming-soon" className="py-20 bg-brand-navy text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-brand-navy/90 to-brand-navy/70"></div>
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1472851294608-062f824d29cc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&h=1080')",
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              Now Open in Trenton!
            </h2>
            <p className="text-xl mb-12 max-w-2xl mx-auto opacity-90">
              Visit us today and discover amazing deals on quality clothing, housewares, and unique finds!
            </p>
            
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                <div className="text-4xl sm:text-5xl font-bold mb-4 text-brand-red">
                  📞 (613) 847-5539
                </div>
                <div className="text-xl sm:text-2xl font-semibold mb-2">Call Us Today</div>
                <div className="text-lg opacity-90">Trenton, Ontario</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                <div className="text-4xl sm:text-5xl font-bold mb-4 text-brand-red">
                  🕒 10 AM - 7 PM
                </div>
                <div className="text-xl sm:text-2xl font-semibold mb-2">Store Hours</div>
                <div className="text-lg opacity-90">Open Every Day</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Follow Us Section */}
      <section id="follow" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-brand-navy mb-4">
              Follow Our Journey
            </h2>
            <p className="text-xl text-brand-gray max-w-3xl mx-auto">
              Stay updated on our progress, get sneak peeks of new arrivals, and be the first to know about special offers.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {[
              {
                icon: FaFacebookF,
                title: "Facebook",
                description: "Daily updates and community discussions",
                url: "https://www.facebook.com/profile.php?id=61578210846883"
              },
              {
                icon: FaInstagram,
                title: "Instagram",
                description: "Behind-the-scenes and style inspiration",
                url: "https://www.instagram.com/secondspinthrift.ca/"
              }
            ].map((social, index) => (
              <div key={index} className="text-center">
                <a 
                  href={social.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block"
                >
                  <div className="w-16 h-16 bg-brand-red rounded-full flex items-center justify-center mx-auto mb-4 hover:bg-brand-red-dark transition-colors cursor-pointer">
                    <social.icon className="text-white text-xl" />
                  </div>
                </a>
                <h3 className="font-semibold text-brand-navy mb-2">{social.title}</h3>
                <p className="text-brand-gray text-sm">{social.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-brand-navy text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <div className="mb-4">
                <h3 className="text-2xl font-bold text-white">second spin thrift</h3>
              </div>
              <p className="text-sm opacity-90 mb-4">Your local thrift store alternative in Trenton, Ontario. Quality fashion at unbeatable prices.</p>
              <div className="flex space-x-4">
                <a href="https://www.facebook.com/profile.php?id=61578210846883" target="_blank" rel="noopener noreferrer" className="text-white hover:text-brand-red transition-colors">
                  <FaFacebookF />
                </a>
                <a href="https://www.instagram.com/secondspinthrift.ca/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-brand-red transition-colors">
                  <FaInstagram />
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm opacity-90">
                <li><button onClick={() => scrollToSection('home')} className="hover:text-brand-red transition-colors">Home</button></li>
                <li><button onClick={() => scrollToSection('about')} className="hover:text-brand-red transition-colors">About</button></li>
                <li><button onClick={() => scrollToSection('why-us')} className="hover:text-brand-red transition-colors">Why Choose Us</button></li>
                <li><button onClick={() => scrollToSection('donations')} className="hover:text-brand-red transition-colors">Donations</button></li>
                <li><button onClick={() => scrollToSection('careers')} className="hover:text-brand-red transition-colors">Careers</button></li>
                <li><button onClick={() => scrollToSection('coming-soon')} className="hover:text-brand-red transition-colors">Visit Us</button></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Contact Info</h4>
              <ul className="space-y-2 text-sm opacity-90">
                <li><MapPin className="inline mr-2 h-4 w-4" />Trenton, Ontario</li>
                <li>📞 (613) 847-5539</li>
                <li>✉️ info@secondspin.ca</li>
                <li><Clock className="inline mr-2 h-4 w-4" />10 AM - 7 PM (Every Day)</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Now Open!</h4>
              <div className="text-2xl font-bold text-brand-red mb-2">Visit Us Today</div>
              <p className="text-sm opacity-90">Great deals on quality thrift finds!</p>
            </div>
          </div>
          
          <div className="border-t border-white/20 pt-8 mt-8 text-center text-sm opacity-90">
            <p>&copy; 2025 second spin thrift. All rights reserved. | A proud Trenton, Ontario business.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
