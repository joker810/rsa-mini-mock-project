import GoogleReviewsWidget from "google-reviews-widget";
import { useTheme } from '../context/ThemeContext';

const Reviews = () => {
  const { theme } = useTheme();

  return (
    <div
      className={`transition-colors duration-500 ease-in-out p-8 rounded-md shadow-lg ${
        theme === 'dark' ? 'bg-zinc-900 text-orange' : 'bg-white text-black'
      }`}
    >
      <h2 className="text-2xl font-semibold mb-4 text-blue-400">
        What Our Customers Say
      </h2>
      <GoogleReviewsWidget instanceId="LgyXTuNtBbRypqyGkxDF" />
    </div>
  );
};

export default Reviews;
