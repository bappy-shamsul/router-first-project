// import React from 'react';

import { Outlet, useLocation, useNavigation } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const Home = () => {
    const navigation = useNavigation();
    const location = useLocation();
    console.log(location)
    return (
        <div>
            <Header></Header>
            <h1>This is Home page of this site</h1>
            {
                navigation.state === "loading" ? <h3>Loading.....</h3>:<Outlet></Outlet>
            } 
            <Footer></Footer>

        </div>
    );
};

export default Home;