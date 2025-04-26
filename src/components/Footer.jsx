

import { useTheme } from '../context/ThemeContext';

const Footer = ({ socialLinks, contactInfo }) => {
  const { theme } = useTheme();

  const isDark = theme === 'dark';

  return (
    <footer
      className={`py-16 px-4 text-base transition-colors duration-500 ${
        isDark
          ? 'bg-gradient-to-br from-gray-800 to-gray-900 text-white'
          : 'bg-gradient-to-br from-indigo-50 to-blue-100 text-gray-800'
      }`}
      role="contentinfo"
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Contact Info Section */}
        <section className="mb-6" aria-label="Contact Information">
          <h2 className="text-lg font-semibold mb-4">Contact Us</h2>
          <address className="not-italic space-y-2">
            <p>
              Email:{' '}
              <a
                href={`mailto:${contactInfo.email}`}
                className={`hover:text-blue-500 ${
                  isDark ? 'text-white' : 'text-gray-800'
                } transition-colors`}
              >
                {contactInfo.email}
              </a>
            </p>
            <p>
              Phone:{' '}
              <a
                href={`tel:${contactInfo.phone}`}
                className={`hover:text-blue-500 ${
                  isDark ? 'text-white' : 'text-gray-800'
                } transition-colors`}
              >
                {contactInfo.phone}
              </a>
            </p>
            <p>{contactInfo.address}</p>
          </address>
        </section>

        {/* Social Media Section */}
        <section className="mb-6" aria-label="Social Media">
          <h2 className="text-lg font-semibold mb-4">Follow Us</h2>
          <ul className="space-y-2">
            {socialLinks.map((social, index) => (
              <li key={index}>
                <a
                  href={social.url}
                  className={`hover:text-blue-500 ${
                    isDark ? 'text-white' : 'text-gray-800'
                  } transition-colors`}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Follow us on ${social.platform}`}
                >
                  {social.platform}
                </a>
              </li>
            ))}
          </ul>
        </section>

        {/* Play Store Section */}
        <div>
          <p className="font-bold mb-2">Find us at Play Store</p>
          <a href="https://play.google.com" target="_blank" rel="noreferrer">
            <img
              src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
              alt="Get it on Google Play"
              className="w-40 hover:scale-105 transition-transform duration-300"
            />
          </a>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-8 pt-8 border-t border-gray-300 dark:border-gray-600 text-center">
        <p className={isDark ? 'text-white' : 'text-gray-800'}>
          © {new Date().getFullYear()} MySite. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
