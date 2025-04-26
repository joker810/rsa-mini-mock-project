import AboutUs from "./AboutUs";
import InstagramFeed from "./InstagramFeed";
// import InstagramHashtagFeed from "./InstagramFeedTwo";
import Reviews from "./Reviews";

function Home() {
    return ( 
        <>
        <main >
        <InstagramFeed/>
        <AboutUs/>
        <Reviews/>
        </main>
        </>
     );
}

export default Home;