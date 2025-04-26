
// // function random_item(items) { return items[Math.floor(Math.random()*items.length)]; } function randomPost(items) {
// //    items = [ "BvG2eDOlauV", "BvtXgE7lz4U", "Bw9L2rzF6iq" ]; 
// //     return random_item(items); 
// //   } 
// //   function getPost() { window.open("https://www.instagram.com/p/" + randomPost()); }

import { InstagramEmbed } from 'react-social-media-embed';
import { useTheme } from '../context/ThemeContext'; // Adjust path as needed

const InstagramFeed = () => {
  const { theme } = useTheme();
  const instagramPosts = [
    'https://www.instagram.com/scientastic.rsa/p/C4H3-_1JWdF/',
    'https://www.instagram.com/scientastic.rsa/p/C4NLKe9pI5F/',
    'https://www.instagram.com/scientastic.rsa/reel/C5nSC9nPhC2/',
  ];

  return (
    <section
      className={`py-16 ${
        theme === 'dark' ? 'bg-zinc-900' : 'bg-gray-100'
      } transition-colors duration-500`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2
          className={`text-3xl font-bold text-center mb-10 ${
            theme === 'dark' ? 'text-zinc-100' : 'text-gray-900'
          }`}
        >
          Our Instagram Feed
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {instagramPosts.map((url, index) => (
            <div
              key={index}
              className={`overflow-hidden rounded-xl shadow-lg transition-transform duration-300 hover:scale-105 ${
                theme === 'dark' ? 'bg-zinc-800' : 'bg-white'
              }`}
            >
              <InstagramEmbed
                url={url}
                width="100%"
                className="max-w-[540px] mx-auto"
              />
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-10">
          <a
            href="https://www.instagram.com/yourusername/"
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-block font-semibold py-3 px-8 rounded-full transition duration-300 ease-in-out transform hover:scale-105 text-lg ${
              theme === 'dark'
                ? 'bg-indigo-700 text-white hover:bg-yellow-300 hover:text-black'
                : 'bg-yellow-300 text-black hover:bg-indigo-700 hover:text-white'
            }`}
          >
            📷Follow Us
          </a>
        </div>
      </div>
    </section>
  );
};

export default InstagramFeed;
