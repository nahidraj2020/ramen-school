import React, { useEffect, useState } from 'react';
import Services from '../Services/Services';

const About = () => {

    return (
        <div className="grid sm:grid-cols-1 lg:grid-cols-2">
            <div>
                <img src="https://images.unsplash.com/photo-1624223875266-81ebbb795584?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80" alt="" srcset="" />
            </div>
            <div className="lg:px-32 my-auto sm:text-center lg:text-left font-serif">
                <h1 className="sm:text-3xl lg:text-4xl uppercase font-bold text-gray-600 pt-2">Welcome to Ramen-School</h1>
                <h1 className="sm:text-5xl md:text-7xl font-bold text-red-400 pt-4 pb-10"></h1>
                <p className="text-xl text-gray-600 ">The School of <span className="text-red-400 pr-1 italic">Cooking</span> to learn about your passion and explore like a professional.We are the most prominent scholl to learn cooking.We focus about the course to give our best to make you learn how to cook.</p>
            </div>
            <div className="lg:px-32 my-auto sm:text-center lg:text-left font-serif">
                <h1 className="sm:text-3xl lg:text-4xl uppercase font-bold text-gray-600 pt-2">Why Choose Ramen-School?</h1>
                <p className="text-xl text-gray-600 ">Discover how easy it is to make authentic and delicious Thai food at home. Our fun cooking courses deconstruct Thai staple dishes so that you can replicate them at home, teach you basic aspects of Thai culture, and will even inspire you to plan your next trip to Thailand with our chef's insider tips. 

To improve your learning experience each recipe is broken down into small sections so that you can learn which ingredients to use, how to prep your ingredients efficiently, cook to perfection and plate your dish to impress your guests. Unlike other courses, our master class has been designed so that you can learn as you follow along. We also include links to exclusive offers so that you can get the ingredients that the chef recommends using.</p>
            </div>
            <div>
                <img src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80" alt="" srcset="" />
            </div>
        </div>
    );
};

export default About;