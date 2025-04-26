import { useTheme } from '../context/ThemeContext';
import GoogleReviewsWidget from 'google-reviews-widget';

const Reviews = () => {
  const { theme } = useTheme();

  return (
    <section
      className={`py-8 px-4 ${
        theme === 'dark' ? 'bg-zinc-900 text-blue-400' : 'bg-white text-black'
      }`}
    >
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-10">
          What Our Customers Say
        </h2>
        <div className="p-4 sm:py-6 md:py-8 text-xl">
  <GoogleReviewsWidget instanceId="LgyXTuNtBbRypqyGkxDF" />
</div>
      </div>
    </section>
  );
};

export default Reviews;
