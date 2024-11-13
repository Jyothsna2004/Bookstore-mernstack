import Banner from '../components/banner';
import BestSellerBooks from './BestSellerBooks';
import FavBook from './FavBook';
import OtherBooks from './OtherBooks';
import PromoBromo from './PromoBromo';
import Reviews from './Reviews';

const Home = () => {
    return (
        <div>
            <Banner/>
            <BestSellerBooks/>
            <FavBook/>
            <PromoBromo/>
            <OtherBooks/>
            <Reviews/>
        </div>

    );
}

export default Home;
