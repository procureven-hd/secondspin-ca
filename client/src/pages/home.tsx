import { useState, useEffect } from 'react';
import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Navigation,
  ArrowRight,
  Menu,
  X,
  Moon,
  Sun,
  Shirt,
  Home as HomeIcon,
  Footprints,
  Tag,
  Leaf,
  Users,
  CheckCircle,
  XCircle,
  NotebookPen,
} from 'lucide-react';
import { FaFacebookF, FaInstagram } from 'react-icons/fa';
import logoPath from '@assets/image_1752182186032.png';
import storeWide from '@assets/optimized/store-wide.jpg';
import storeAisle from '@assets/optimized/store-aisle.jpg';
import storeSkirts from '@assets/optimized/store-skirts.jpg';
import storeShoes from '@assets/optimized/store-shoes.jpg';
import storeHousewares from '@assets/optimized/store-housewares.jpg';
import { STORE } from '@/lib/store-info';

const NAV = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'Why Second Spin' },
  { id: 'shop', label: 'Shop' },
  { id: 'donations', label: 'Donate' },
  { id: 'visit', label: 'Visit Us' },
  { id: 'careers', label: 'Careers' },
];

const DEPARTMENTS = [
  {
    icon: Shirt,
    title: 'Clothing',
    text: 'Aisles of tops, pants, dresses, skirts and jackets for all ages and styles.',
    img: storeSkirts,
    alt: 'Racks of skirts and dresses at Second Spin Thrift',
  },
  {
    icon: HomeIcon,
    title: 'Housewares',
    text: 'Plates, bowls, glassware and kitchen essentials.',
    img: storeHousewares,
    alt: 'Shelves of dishes and kitchenware at Second Spin Thrift',
  },
  {
    icon: Footprints,
    title: 'Shoes',
    text: 'Boots, sneakers, sandals and more.',
    img: storeShoes,
    alt: 'Shelves of boots and sneakers at Second Spin Thrift',
  },
];

const ACCEPT = [
  'Clothing & shoes',
  'Accessories & bags',
  'Small electronics',
  'Sports gear & toys',
  'Kitchen items',
  'Decor & jewellery',
  'Books & media',
  'Linens & textiles',
];

const CANNOT_ACCEPT = [
  'Mattresses, cribs & car seats',
  'Large appliances',
  'Hazardous or flammable items',
  'Damaged furniture',
];

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme') === 'dark';
    }
    return false;
  });

  useEffect(() => {
    document.title = 'Second Spin Thrift | Trenton, Ontario Thrift Store';
  }, []);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;
      NAV.forEach(({ id }) => {
        const element = document.getElementById(id);
        if (element && scrollPosition >= element.offsetTop && scrollPosition < element.offsetTop + element.offsetHeight) {
          setActiveSection(id);
        }
      });
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Arriving from another page with a #section link: scroll to it once the page renders.
  useEffect(() => {
    const id = window.location.hash.slice(1);
    if (id) document.getElementById(id)?.scrollIntoView();
  }, []);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const NavLink = ({ id, children }: { id: string; children: React.ReactNode }) => (
    <button
      onClick={() => scrollToSection(id)}
      className={`transition-colors font-medium hover:text-brand-red ${
        activeSection === id ? 'text-brand-red' : 'text-brand-gray dark:text-gray-300'
      }`}
    >
      {children}
    </button>
  );

  const ThemeToggle = ({ className = '' }: { className?: string }) => (
    <button
      onClick={() => setIsDark(!isDark)}
      className={`p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors ${className}`}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      {isDark ? <Sun size={20} className="text-yellow-400" /> : <Moon size={20} className="text-brand-gray dark:text-gray-300" />}
    </button>
  );

  const sectionTitle = 'text-3xl sm:text-4xl font-bold text-brand-navy dark:text-gray-100 mb-4';
  const sectionLead = 'text-lg sm:text-xl text-brand-gray dark:text-gray-300 max-w-3xl';

  return (
    <div className="font-poppins bg-white dark:bg-gray-950 dark:text-gray-100">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/95 dark:bg-gray-950/95 backdrop-blur-sm z-50 shadow-sm dark:shadow-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-3">
            <button onClick={() => scrollToSection('home')} aria-label="Second Spin Thrift, back to top">
              <img src={logoPath} alt="Second Spin Thrift" className="h-14 w-auto" />
            </button>
            <div className="hidden lg:flex space-x-7 items-center">
              {NAV.map((n) => (
                <NavLink key={n.id} id={n.id}>{n.label}</NavLink>
              ))}
              <ThemeToggle className="ml-1" />
            </div>
            <div className="flex items-center gap-2 lg:hidden">
              <ThemeToggle />
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 text-brand-gray dark:text-gray-300 hover:text-brand-red"
                aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
                aria-expanded={isMenuOpen}
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {isMenuOpen && (
            <div className="lg:hidden py-4 border-t border-gray-200 dark:border-gray-700">
              <div className="flex flex-col space-y-4">
                {NAV.map((n) => (
                  <NavLink key={n.id} id={n.id}>{n.label}</NavLink>
                ))}
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero */}
      <section id="home" className="bg-gradient-to-br from-brand-light to-white dark:from-gray-900 dark:to-gray-950 pt-28 pb-16 lg:pt-32 lg:pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-12 items-center">
            <div className="text-center lg:text-left">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-brand-navy dark:text-gray-100 mb-5 leading-tight">
                Thrift Different in <span className="text-brand-red">Trenton</span>
              </h1>
              <p className="text-lg sm:text-xl text-brand-gray dark:text-gray-300 mb-6 max-w-xl mx-auto lg:mx-0">
                Quality secondhand clothing, housewares and shoes from our own community, at prices that leave room in your budget.
              </p>

              <ul className="inline-flex flex-col sm:flex-row gap-2 sm:gap-6 text-brand-navy dark:text-gray-100 font-medium mb-8">
                <li className="flex items-center justify-center lg:justify-start gap-2">
                  <Clock className="h-5 w-5 text-brand-red" aria-hidden="true" />
                  {STORE.hoursShort}
                </li>
                <li className="flex items-center justify-center lg:justify-start gap-2">
                  <MapPin className="h-5 w-5 text-brand-red" aria-hidden="true" />
                  {STORE.street}, Trenton
                </li>
              </ul>

              <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
                <Button asChild className="bg-brand-red hover:bg-brand-red-dark text-white px-7 py-6 text-lg font-semibold">
                  <a href={STORE.directionsUrl} target="_blank" rel="noopener noreferrer">
                    <Navigation className="mr-2 h-5 w-5" aria-hidden="true" />
                    Get directions
                  </a>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="border-2 border-brand-red text-brand-red hover:bg-brand-red hover:text-white px-7 py-6 text-lg font-semibold bg-transparent"
                >
                  <a href={STORE.phoneHref}>
                    <Phone className="mr-2 h-5 w-5" aria-hidden="true" />
                    {STORE.phone}
                  </a>
                </Button>
              </div>
            </div>
            <img
              src={storeWide}
              alt="A long aisle of clothing racks inside Second Spin Thrift"
              width={1184}
              height={864}
              className="rounded-2xl shadow-2xl w-full h-auto"
            />
          </div>
        </div>
      </section>

      {/* Why Second Spin: prices, local sourcing, sustainability in one place */}
      <section id="about" className="py-20 bg-white dark:bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className={sectionTitle}>Better Clothes, Better Prices</h2>
              <p className={`${sectionLead} mb-10`}>
                We're an independent, local thrift store. No corporate overhead means the savings go to you, and every item
                comes from Trenton and the surrounding community.
              </p>

              <div className="space-y-7">
                {[
                  {
                    icon: Tag,
                    title: 'Prices that make sense',
                    text: 'Quality pieces for a fraction of what national chains charge.',
                  },
                  {
                    icon: Users,
                    title: 'Sourced from your neighbours',
                    text: 'Donations come from our own community, so racks are restocked all day and there is always something new.',
                  },
                  {
                    icon: Leaf,
                    title: 'Good for the planet',
                    text: 'Every purchase keeps clothing and household goods out of landfill.',
                  },
                ].map(({ icon: Icon, title, text }) => (
                  <div key={title} className="flex items-start gap-4">
                    <Icon className="h-7 w-7 text-brand-red flex-shrink-0 mt-0.5" aria-hidden="true" />
                    <div>
                      <h3 className="text-lg font-semibold text-brand-navy dark:text-gray-100 mb-1">{title}</h3>
                      <p className="text-brand-gray dark:text-gray-300">{text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-brand-light dark:bg-gray-900 rounded-2xl p-6 sm:p-8 shadow-lg">
              <h3 className="text-xl font-bold text-brand-navy dark:text-gray-100 mb-1 text-center">How our prices compare</h3>
              <p className="text-sm text-brand-gray dark:text-gray-400 mb-6 text-center">Typical prices for similar items</p>
              <div className="divide-y divide-gray-200 dark:divide-gray-800">
                {[
                  ["Women's blouse", 18, 6],
                  ["Men's dress shirt", 22, 8],
                  ["Kids' jeans", 15, 5],
                ].map(([item, chain, ours]) => (
                  <div key={item as string} className="flex justify-between items-center py-4">
                    <span className="text-brand-navy dark:text-gray-200 font-medium">{item}</span>
                    <div className="text-right">
                      <div className="text-sm text-brand-gray dark:text-gray-400">
                        National chain: <span className="line-through">${chain}</span>
                      </div>
                      <div className="text-lg font-bold text-brand-red">Second Spin: ${ours}</div>
                    </div>
                  </div>
                ))}
              </div>
              <img
                src={storeAisle}
                alt="Organized clothing racks at Second Spin Thrift"
                width={1184}
                height={864}
                loading="lazy"
                className="rounded-xl mt-6 w-full h-48 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Departments */}
      <section id="shop" className="py-20 bg-brand-light dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className={sectionTitle}>Shop by Department</h2>
            <p className={`${sectionLead} mx-auto`}>A well-organized store with clothing, housewares, shoes and more.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {DEPARTMENTS.map(({ icon: Icon, title, text, img, alt }) => (
              <Card key={title} className="overflow-hidden hover:shadow-xl transition-shadow" data-testid={`card-${title.toLowerCase()}`}>
                <img src={img} alt={alt} width={1184} height={864} loading="lazy" className="w-full h-56 object-cover" />
                <CardContent className="p-6">
                  <div className="flex items-center mb-2">
                    <Icon className="text-brand-red h-5 w-5 mr-2" aria-hidden="true" />
                    <h3 className="text-xl font-semibold text-brand-navy dark:text-gray-100">{title}</h3>
                  </div>
                  <p className="text-brand-gray dark:text-gray-300">{text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Donations summary; the full guide lives at /donations */}
      <section id="donations" className="py-20 bg-white dark:bg-gray-950">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className={sectionTitle}>Donate Your Pre-Loved Items</h2>
            <p className={`${sectionLead} mx-auto`}>
              Bring donations inside the store any time we're open. Your items get a second life and stay out of landfill.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="rounded-2xl border border-gray-200 dark:border-gray-800 p-6">
              <h3 className="text-lg font-semibold text-brand-navy dark:text-gray-100 mb-4">We gladly take</h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2">
                {ACCEPT.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-brand-gray dark:text-gray-300">
                    <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-gray-200 dark:border-gray-800 p-6">
              <h3 className="text-lg font-semibold text-brand-navy dark:text-gray-100 mb-4">We can't take</h3>
              <ul className="space-y-2">
                {CANNOT_ACCEPT.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-brand-gray dark:text-gray-300">
                    <XCircle className="h-4 w-4 text-brand-red flex-shrink-0" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="text-center mt-8">
            <Link
              href="/donations"
              className="inline-flex items-center font-semibold text-brand-red dark:text-red-400 hover:text-brand-red-dark underline-offset-4 hover:underline"
            >
              See the full donation guide
              <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      {/* Visit us */}
      <section id="visit" className="py-20 bg-brand-navy text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">Visit Us</h2>
              <p className="text-lg opacity-90 mb-8">Open every day. Shop, donate, or just come and browse.</p>

              <dl className="space-y-5 text-lg">
                <div className="flex items-start gap-4">
                  <MapPin className="h-6 w-6 text-brand-red flex-shrink-0 mt-0.5" aria-hidden="true" />
                  <div>
                    <dt className="sr-only">Address</dt>
                    <dd>
                      {STORE.street}
                      <br />
                      {STORE.cityLine}
                    </dd>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Clock className="h-6 w-6 text-brand-red flex-shrink-0 mt-0.5" aria-hidden="true" />
                  <div>
                    <dt className="sr-only">Hours</dt>
                    <dd>{STORE.hoursLong}</dd>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Phone className="h-6 w-6 text-brand-red flex-shrink-0 mt-0.5" aria-hidden="true" />
                  <div>
                    <dt className="sr-only">Phone</dt>
                    <dd>
                      <a href={STORE.phoneHref} className="hover:underline whitespace-nowrap">{STORE.phone}</a>
                    </dd>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Mail className="h-6 w-6 text-brand-red flex-shrink-0 mt-0.5" aria-hidden="true" />
                  <div>
                    <dt className="sr-only">Email</dt>
                    <dd>
                      <a href={`mailto:${STORE.email}`} className="hover:underline">{STORE.email}</a>
                    </dd>
                  </div>
                </div>
              </dl>

              <div className="flex flex-col sm:flex-row gap-3 mt-8">
                <Button asChild className="bg-brand-red hover:bg-brand-red-dark text-white px-7 py-6 text-lg font-semibold">
                  <a href={STORE.directionsUrl} target="_blank" rel="noopener noreferrer">
                    <Navigation className="mr-2 h-5 w-5" aria-hidden="true" />
                    Get directions
                  </a>
                </Button>
                <div className="flex items-center gap-3 sm:ml-4">
                  <span className="opacity-90">Follow us:</span>
                  <a
                    href={STORE.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Second Spin Thrift on Facebook"
                    className="w-11 h-11 rounded-full bg-white/10 hover:bg-brand-red flex items-center justify-center transition-colors"
                  >
                    <FaFacebookF aria-hidden="true" />
                  </a>
                  <a
                    href={STORE.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Second Spin Thrift on Instagram"
                    className="w-11 h-11 rounded-full bg-white/10 hover:bg-brand-red flex items-center justify-center transition-colors"
                  >
                    <FaInstagram aria-hidden="true" />
                  </a>
                </div>
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden shadow-2xl bg-white/5 aspect-[4/3]">
              <iframe
                title="Map showing Second Spin Thrift at 390 Sidney Street, Trenton"
                src={STORE.mapEmbedUrl}
                className="w-full h-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Careers */}
      <section id="careers" className="py-16 bg-brand-light dark:bg-gray-900">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className={sectionTitle}>Join Our Team</h2>
          <p className={`${sectionLead} mx-auto mb-8`}>
            We're a growing local business looking for people who enjoy helping customers and care about their community.
          </p>
          <Button asChild className="bg-brand-red hover:bg-brand-red-dark text-white px-8 py-6 text-lg font-semibold">
            <a href={`mailto:${STORE.jobsEmail}?subject=Job%20application%20-%20Second%20Spin%20Thrift`}>
              <NotebookPen className="mr-2 h-5 w-5" aria-hidden="true" />
              Apply now
            </a>
          </Button>
          <p className="text-sm text-brand-gray dark:text-gray-400 mt-4">
            Or send your resume to <strong>{STORE.jobsEmail}</strong>
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-brand-navy text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-3">second spin thrift</h3>
              <p className="text-sm opacity-90 mb-4">Your local thrift store in Trenton, Ontario. Quality finds at fair prices.</p>
              <div className="flex space-x-4">
                <a href={STORE.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="hover:text-brand-red transition-colors">
                  <FaFacebookF aria-hidden="true" />
                </a>
                <a href={STORE.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-brand-red transition-colors">
                  <FaInstagram aria-hidden="true" />
                </a>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm opacity-90">
                {NAV.map((n) => (
                  <li key={n.id}>
                    <button onClick={() => scrollToSection(n.id)} className="hover:text-brand-red transition-colors">{n.label}</button>
                  </li>
                ))}
                <li>
                  <Link href="/donations" className="hover:text-brand-red transition-colors">Donation guide</Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <ul className="space-y-3 text-sm opacity-90">
                <li className="flex gap-2">
                  <MapPin className="h-4 w-4 flex-shrink-0 mt-0.5" aria-hidden="true" />
                  <span>
                    {STORE.street}
                    <br />
                    {STORE.cityLine}
                  </span>
                </li>
                <li className="flex gap-2">
                  <Phone className="h-4 w-4 flex-shrink-0 mt-0.5" aria-hidden="true" />
                  <a href={STORE.phoneHref} className="hover:text-brand-red">{STORE.phone}</a>
                </li>
                <li className="flex gap-2">
                  <Mail className="h-4 w-4 flex-shrink-0 mt-0.5" aria-hidden="true" />
                  <a href={`mailto:${STORE.email}`} className="hover:text-brand-red">{STORE.email}</a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Hours</h4>
              <p className="text-sm opacity-90 flex gap-2">
                <Clock className="h-4 w-4 flex-shrink-0 mt-0.5" aria-hidden="true" />
                {STORE.hoursLong}
              </p>
            </div>
          </div>

          <div className="border-t border-white/20 pt-8 mt-8 text-center text-sm opacity-90">
            <p>&copy; {new Date().getFullYear()} Second Spin Thrift Inc. All rights reserved. | A proud Trenton, Ontario business.</p>
            <p className="mt-2 space-x-4">
              <Link href="/terms" className="hover:text-brand-red transition-colors underline-offset-2 hover:underline">Terms of Service</Link>
              <Link href="/privacy" className="hover:text-brand-red transition-colors underline-offset-2 hover:underline">Privacy Policy</Link>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
