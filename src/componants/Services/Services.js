import React, { useEffect, useState } from 'react';
import Course from '../Course/Course';

const Services = () => {
    const [courses, setCourses] = useState([]);
    useEffect(() => {
        fetch('./service.JSON')
            .then(res => res.json())
            .then(data => setCourses(data));
    }, [])
    return (
        <div className="container mx-auto grid grid-cols-2">
            {
                courses.map(raj => <Course
                    key={raj.id}
                    course={raj}>
                </Course>)
            }

        </div>
    );
};

export default Services;