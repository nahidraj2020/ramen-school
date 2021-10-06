import React, { useEffect, useState } from 'react';
import Course from '../Course/Course';
const Home = () => {
        const [courses, setCourses] = useState([]);
        useEffect(() => {
            fetch('./service.JSON')
                .then(res => res.json())
                .then(data => setCourses(data));
        }, [])
    return (
        <div className="grid sm:grid-cols-1 lg:grid-cols-2">
            <div>
                <img src="https://images.unsplash.com/photo-1606914501449-5a96b6ce24ca?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="" srcset="" />
            </div>
            <div className="lg:px-32 my-auto sm:text-center lg:text-left font-serif">
                <h1 className="sm:text-3xl lg:text-4xl uppercase font-bold text-gray-600 pt-2">Welcome to</h1>
                <h1 className="sm:text-5xl md:text-7xl font-bold text-red-400 pt-4 pb-10">Ramen-School</h1>
                <p className="text-xl text-gray-600 ">The School of <span className="text-red-400 pr-1 italic">Cooking</span> to learn about your passion and explore like a professional.</p>
            </div>
            <div className="lg:px-32 my-auto sm:text-center lg:text-left font-serif">
                <h1 className="sm:text-3xl lg:text-4xl uppercase font-bold text-gray-600 pt-2">Feel Free to join us</h1>
                <p className="text-xl text-gray-600 ">Culinarians are required to have knowledge of food science, nutrition and diet and are responsible for preparing meals that are as pleasing to the eye as well as to the palate. After restaurants, their primary places of work include delicatessens and relatively large institutions.

                    There are many methods of cooking, most of which have been known since antiquity. These include baking, roasting, frying, grilling, barbecuing, smoking, boiling, steaming and braising.</p>
            </div>
            <div>
                <img src="https://images.unsplash.com/photo-1568623970736-27bea63b4489?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80" alt="" srcset="" />
            </div>
            <div>
            {
                courses.map(raj => <Course
                    key={raj.id}
                    course={raj}>
                </Course>)
            }

        </div>

        </div >
    );
};

export default Home;