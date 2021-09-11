import React from 'react';
import Header from './Header/Header';
import Footer from './Footer/Footer';

const Page = ({Component}) => {
    return (
        <>
            <Header/>
            <Component/>
            <Footer/>
        </>
    )
};

export default Page;