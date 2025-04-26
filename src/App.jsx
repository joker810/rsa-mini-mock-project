import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer'; 
import Home from './components/Home';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';


const About = () => <h2>About Page</h2>;
const Services = () => <h2>Services Page</h2>;
const Contact = () => <h2>Contact Page</h2>;

function App() {
  useEffect(() => {
    AOS.init({once:false, duration: 1000 ,mirror:true});
  }, []);
  const navLinks = [
    { text: 'Home', url: '/' },
    { text: 'About', url: '/about' },
    { text: 'Services', url: '/services' },
    { text: 'Contact', url: '/contact' },
  ];

  const socialLinks = [
    { platform: 'Facebook', url: 'https://facebook.com' },
    { platform: 'Twitter', url: 'https://twitter.com' },
    { platform: 'Instagram', url: 'https://instagram.com' },
  ];

  const contactInfo = {
    email: 'info@mysite.com',
    phone: '+91-123-456-7890',
    address: '123 Street, Banglore, India',
  };

  return (
    <Router>
      <div className="App">
        <Header navLinks={navLinks} />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          
        </main>
        <Footer
          navLinks={navLinks}
          socialLinks={socialLinks}
          contactInfo={contactInfo}
        />
      </div>
    </Router>
  );
}

export default App;