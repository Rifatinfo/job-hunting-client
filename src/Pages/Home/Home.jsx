// import LoginForm from "../../Login/LoginForm";

import Banner from "../../Componets/Banner/Banner";
import JobDetails from "../../JobDetails/JobDetails";
import TabCategories from "../../TabCategories/TabCategories";

const Home = () => {
    return (
        <div>
            <Banner/>
            <TabCategories/>
            <JobDetails/>
            <JobDetails/>
        </div>
    );
};

export default Home;