// App.js
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
function App() {
return (
    <Router basename="/1">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}
import { Laptop, Server, Globe, Code, Phone, GraduationCap, Menu, X } from 'lucide-react';

// Services data with online images & detailed descriptions
const services = [
  {
    icon: <Laptop className="w-10 h-10 text-blue-600" />,
    title: "IT Consulting",
    description: "Empowering businesses with strategic technology insights and digital transformation solutions.",
    details:
      "Our expert IT consultants analyze your business needs to architect scalable, secure, and innovative technology strategies. We specialize in cloud migrations, cybersecurity frameworks, and custom software solutions.",
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80"
  },
  {
    icon: <Server className="w-10 h-10 text-blue-600" />,
    title: "Cloud Hosting",
    description: "Fast, scalable, and secure hosting infrastructure tailored for global impact.",
    details:
      "Experience enterprise-grade cloud hosting optimized for speed, uptime, and security. Our solutions support auto-scaling, disaster recovery, and worldwide CDN integration to ensure your services run flawlessly.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80"
  },
  {
    icon: <Globe className="w-10 h-10 text-blue-600" />,
    title: "Luxury Tourism",
    description: "World-class curated travel experiences blending culture, comfort, and discovery.",
    details:
      "From exotic escapes to cultural immersions, we craft bespoke travel itineraries that exceed expectations. Our network includes luxury resorts, private guides, and exclusive events worldwide.",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80"
  },
  {
    icon: <Code className="w-10 h-10 text-blue-600" />,
    title: "Web Development",
    description: "Custom-built web applications that drive performance and engagement.",
    details:
      "Our development team delivers modern, responsive websites and applications tailored to your brand and audience. Utilizing the latest frameworks and best practices, we focus on UX, SEO, and scalability.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80"
  },
 {
  icon: <Phone className="w-10 h-10 text-blue-600" />,
  title: "24/7 Support",
  description: "Dedicated global tech support to keep your systems running around the clock.",
  details:
    "Our multilingual support team is available anytime to troubleshoot, maintain, and optimize your IT ecosystem, ensuring minimal downtime and maximum productivity.",
  image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80"
},

,
  {
    icon: <GraduationCap className="w-10 h-10 text-blue-600" />,
    title: "Student Placement",
    description: "Personalized international education consultation with 100% visa success rate.",
    details:
      "We provide comprehensive guidance for students seeking global education opportunities — from university selection to visa processing, financial planning, and pre-departure briefings.",
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=800&q=80"
  }
];

function Navbar() {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = React.useState(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50 py-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4">
        <div className="flex items-center gap-3">
          <img
            src={`${process.env.PUBLIC_URL}/logo.png`}
            alt="Hiddenza Logo"
            className="h-12 w-12 object-cover rounded-full"
          />
          <div>
            <h1 className="text-2xl font-bold text-blue-700">Hiddenza</h1>
            <p className="text-xs text-gray-500">Innovate. Explore. Educate.</p>
          </div>
        </div>
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            className="focus:outline-none focus:ring-2 focus:ring-blue-600 rounded"
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
        <ul className="hidden md:flex gap-6 text-sm font-semibold">
          <li>
            <Link
              to="/"
              className={`hover:text-blue-600 ${location.pathname === '/' ? 'text-blue-600 font-bold' : ''}`}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/services"
              className={`hover:text-blue-600 ${location.pathname === '/services' ? 'text-blue-600 font-bold' : ''}`}
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className={`hover:text-blue-600 ${location.pathname === '/about' ? 'text-blue-600 font-bold' : ''}`}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className={`hover:text-blue-600 ${location.pathname === '/contact' ? 'text-blue-600 font-bold' : ''}`}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>

      {menuOpen && (
        <ul className="md:hidden px-4 pt-4 pb-2 space-y-2 text-sm font-medium bg-white shadow-md">
          <li>
            <Link to="/" onClick={() => setMenuOpen(false)} className="block hover:text-blue-600">
              Home
            </Link>
          </li>
          <li>
            <Link to="/services" onClick={() => setMenuOpen(false)} className="block hover:text-blue-600">
              Services
            </Link>
          </li>
          <li>
            <Link to="/about" onClick={() => setMenuOpen(false)} className="block hover:text-blue-600">
              About
            </Link>
          </li>
          <li>
            <Link to="/contact" onClick={() => setMenuOpen(false)} className="block hover:text-blue-600">
              Contact
            </Link>
          </li>
        </ul>
      )}
    </nav>
  );
}

function Home() {
  return (
    <main className="px-6 py-20 max-w-7xl mx-auto">
      <section className="flex flex-col md:flex-row items-center gap-10">
        <img
          src={`${process.env.PUBLIC_URL}/profile.jpg`}
          alt="Musaab Al-Dabbagh"
          className="rounded-full w-40 h-40 object-cover border-4 border-blue-600 shadow-lg"
        />
        <div className="text-center md:text-left max-w-xl">
          <h2 className="text-4xl font-extrabold text-blue-700">Musaab Al-Dabbagh</h2>
          <p className="text-blue-600 font-semibold mb-3">Founder, CEO & Visionary Technologist</p>
          <p className="text-gray-700 mb-6 leading-relaxed">
            Musaab Al-Dabbagh is the dynamic force behind Hiddenza, a trailblazing enterprise at the intersection of technology, travel, and education. As Founder and CEO, Musaab leads with a visionary mindset and unmatched expertise, driving innovation that empowers individuals and businesses across more than 20 countries worldwide.

A globally recognized technologist and strategist, Musaab combines profound industry knowledge with bold creativity to craft transformative solutions that break boundaries and unlock new opportunities. His leadership is defined by a relentless pursuit of excellence, fostering a culture of innovation, integrity, and impactful growth.

With a proven track record in spearheading large-scale digital initiatives and educational programs, Musaab is dedicated to shaping the future by bridging technology with real-world experiences, enabling Hiddenza’s clients to thrive in an ever-evolving global landscape.
          </p>
          <a
            href="#discover-hiddenza"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded shadow hover:bg-blue-700 transition"
          >
            Discover Hiddenza
          </a>
        </div>
      </section>

      {/* Discover Hiddenza Section */}
      <section
        id="discover-hiddenza"
        className="mt-20 max-w-5xl mx-auto text-center space-y-10"
      >
        <h2 className="text-5xl font-extrabold text-blue-800">
          Welcome to a Universe of Possibilities
        </h2>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed px-4 md:px-0">
          Hiddenza is more than a company — it’s a movement redefining excellence. From AI-driven applications
          that streamline your workflows, to seamless, curated travel itineraries that immerse you in culture and comfort,
          and comprehensive mentorship programs that guide students toward global educational success, we champion progress and innovation
          across industries.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4 md:px-0">
          <div className="max-w-sm mx-auto">
            <img
              src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&q=80"
              alt="AI and Tech Innovation"
              className="rounded-lg shadow-lg hover:scale-105 transition-transform cursor-pointer w-full h-48 object-cover"
              loading="lazy"
            />
            <h3 className="mt-4 font-semibold text-blue-700 text-xl">
              AI & Tech Innovation
            </h3>
            <p className="mt-2 text-gray-700 text-sm leading-relaxed">
              Pushing boundaries with cutting-edge AI-driven solutions designed to automate and elevate your business processes.
            </p>
          </div>

          <div className="max-w-sm mx-auto">
            <img
              src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80"
              alt="Curated Travel Experiences"
              className="rounded-lg shadow-lg hover:scale-105 transition-transform cursor-pointer w-full h-48 object-cover"
              loading="lazy"
            />
            <h3 className="mt-4 font-semibold text-blue-700 text-xl">
              Curated Travel Experiences
            </h3>
            <p className="mt-2 text-gray-700 text-sm leading-relaxed">
              Explore the world through personalized journeys that balance luxury, culture, and adventure.
            </p>
          </div>

          <div className="max-w-sm mx-auto">
            <img
              src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=800&q=80"
              alt="Global Student Mentorship"
              className="rounded-lg shadow-lg hover:scale-105 transition-transform cursor-pointer w-full h-48 object-cover"
              loading="lazy"
            />
            <h3 className="mt-4 font-semibold text-blue-700 text-xl">
              Global Student Mentorship
            </h3>
            <p className="mt-2 text-gray-700 text-sm leading-relaxed">
              Guiding students worldwide with tailored educational consulting, ensuring successful admissions and visas.
            </p>
          </div>
        </div>

        <div className="mt-12 max-w-4xl mx-auto bg-blue-50 rounded-lg p-8 text-left text-gray-800 shadow-lg">
          <h3 className="text-3xl font-bold mb-4 text-blue-700">Why Hiddenza?</h3>
          <ul className="list-disc list-inside space-y-3 text-lg leading-relaxed">
            <li>Over 10 years of cross-industry experience delivering excellence.</li>
            <li>Award-winning IT architecture and innovative design methodologies.</li>
            <li>Trusted partnerships with top-tier universities and global travel networks.</li>
            <li>Multilingual team providing 24/7 worldwide client support.</li>
          </ul>
        </div>
      </section>
    </main>
  );
}

function Services() {
  const [expandedIndex, setExpandedIndex] = React.useState(null);

  const toggleExpand = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <main className="px-6 py-20 max-w-7xl mx-auto">
      <h2 className="text-5xl font-bold text-center text-blue-800 mb-12">Our Expertise</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {services.map((service, index) => (
          <article
            key={index}
            onClick={() => toggleExpand(index)}
            className="bg-white rounded-xl shadow-lg p-6 cursor-pointer hover:shadow-2xl transition flex flex-col select-none"
            aria-expanded={expandedIndex === index}
          >
            <img
              src={service.image}
              alt={service.title}
              loading="lazy"
              className="w-full h-40 md:h-48 object-cover rounded-lg mb-4 flex-shrink-0"
              style={{ maxHeight: '192px' }}
            />
            <div className="flex items-center gap-3 mb-3">
              {service.icon}
              <h3 className="text-2xl font-semibold text-blue-700">{service.title}</h3>
            </div>
            <p className="text-gray-700 mb-3 flex-grow">{service.description}</p>

            {expandedIndex === index && (
              <div className="mt-2 p-4 bg-blue-50 rounded-md text-gray-800 border border-blue-200">
                <p>{service.details}</p>
              </div>
            )}

            <p className="mt-3 text-sm text-blue-600 underline self-start">
              Click to {expandedIndex === index ? 'collapse' : 'learn more'}
            </p>
          </article>
        ))}
      </div>
    </main>
  );
}

function About() {
  return (
    <main className="px-6 py-20 max-w-4xl mx-auto text-center">
      <h2 className="text-5xl font-bold text-blue-800">About Hiddenza</h2>
      <p className="mt-6 text-lg text-gray-700 leading-relaxed">
        Hiddenza stands as a premier global consultancy uniquely positioned at the crossroads of cutting-edge technology, bespoke luxury travel, and world-class educational guidance. For over a decade, we have been the trusted partner for government bodies, innovative startups, and ambitious international students—delivering unparalleled results that consistently exceed expectations.

Our holistic and multidisciplinary approach transcends traditional consulting. We blend deep industry expertise, strategic foresight, and creative innovation to craft solutions that not only solve immediate challenges but also future-proof our clients’ success in an increasingly complex and fast-paced world.

At Hiddenza, excellence is more than a standard—it’s our ethos. Our passionate team of seasoned professionals relentlessly pursues transformative impact, driving meaningful change and measurable growth across every sector we touch.

Choosing Hiddenza means gaining a visionary ally who understands your unique ambitions and crafts personalized strategies that empower you to lead, innovate, and thrive on the global stage. Experience the difference of a consultancy that combines visionary insight with flawless execution—because your goals deserve nothing less than extraordinary.
      </p>
      <p className="mt-6 text-lg text-gray-700 leading-relaxed">
        Our multidisciplinary approach and passionate team ensure every project achieves lasting impact.
      </p>
    </main>
  );
  
}

function Contact() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-20">
      <h2 className="text-5xl font-bold mb-12 text-blue-800 text-center">Get in Touch with Hiddenza</h2>
      <p className="text-center max-w-xl mx-auto mb-10 text-gray-700">
        We're excited to hear from you! Use the form below or email us directly.
      </p>

      <div className="flex flex-col md:flex-row gap-12">
        {/* Contact Form */}
        <form
          action="https://formspree.io/f/mvgakake"
          method="POST"
          className="flex-1 space-y-6 bg-white p-8 rounded-lg shadow-lg"
          aria-label="Contact form"
        >
          <div>
            <label htmlFor="name" className="block text-gray-800 font-semibold mb-2">
              Your Name:
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              placeholder="Enter your name"
              className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-600 transition"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-gray-800 font-semibold mb-2">
              Your Email:
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              placeholder="Enter your email"
              className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-600 transition"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-gray-800 font-semibold mb-2">
              Your Message:
            </label>
            <textarea
              id="message"
              name="message"
              rows="6"
              required
              placeholder="Write your message here"
              className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-600 transition"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-indigo-600 hover:to-blue-600 text-white font-semibold py-3 rounded-lg shadow-lg transition transform hover:scale-105"
          >
            Send Message
          </button>
        </form>

        {/* Contact Info */}
        <div className="flex-1 bg-gradient-to-tr from-blue-50 to-indigo-50 rounded-lg shadow-lg p-8 flex flex-col justify-center items-center text-center text-gray-700">
          <h3 className="text-3xl font-extrabold mb-6 text-blue-800">Reach Out Anytime</h3>
          <p className="text-lg max-w-xs mb-6">
            For inquiries, collaborations, or just to say hello, email us at:
          </p>
          <a
            href="mailto:musaab.asa@gmail.com"
            className="text-blue-700 font-bold text-xl underline hover:text-indigo-700 transition"
          >
            musaab.asa@gmail.com
          </a>
          {/* Optional social links */}
          <div className="mt-8 space-y-2 text-blue-600">
            <p>
              TikTok:{" "}
              <a href="https://www.tiktok.com/@Hiddenza1" target="_blank" rel="noreferrer" className="hover:underline">
                Hiddenza1
              </a>
            </p>
            <p>
              Instagram:{" "}
              <a href="https://www.instagram.com/Hiddenza1" target="_blank" rel="noreferrer" className="hover:underline">
                Hiddenza1
              </a>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}



function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
