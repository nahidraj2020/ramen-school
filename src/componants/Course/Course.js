import React from 'react';

const Course = (props) => {
    const { picture, title, details } = props.course
    return (
        <div className="grid grid-cols-3 bg-indigo-100 m-4 shadow-sm">
            <div className="col-span-2">
                <img className="" src={picture} alt="" />
            </div>
            <div className="px-8 pt-10 text-justify">
                <h1 className="text-3xl pb-10 font-bold font-serif">{title}</h1>
                <p>{details}</p>
            </div>
        </div>
    );
};

export default Course;