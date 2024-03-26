import Banner from "../Banner/Banner";
import CategoryList from "../CategoryList/CategoryList";
import Featured from "../Featured/Featured";

const Home = () => {
    return (
        <div className="w-4/5 mx-auto">
            <Banner></Banner>
            <CategoryList></CategoryList>
            <Featured></Featured>
        </div>
    );
};

export default Home;