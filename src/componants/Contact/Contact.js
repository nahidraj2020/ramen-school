import React from 'react';

const Contact = () => {
    return (
        <div className="grid sm:grid-cols-1 lg:grid-cols-2">
            <div>
                <img src="https://images.unsplash.com/photo-1480843669328-3f7e37d196ae?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80" alt="" srcset="" />
            </div>
            <div className="lg:px-32 my-auto sm:text-center lg:text-left font-serif">
                <h1 className="sm:text-3xl lg:text-4xl uppercase font-bold text-gray-600 pt-2">Contatct Us</h1>
                <h1 className="sm:text-5xl md:text-2xl font-bold text-red-200 pt-4 ">Mail:ramenscholl@gmail.com</h1>
                <h1 className="sm:text-5xl md:text-2xl font-bold text-red-200">Phone:08849393020</h1>
                <h1 className="sm:text-5xl md:text-2xl font-bold text-red-200">Address: Street 4/7,Carlifornia,USA</h1>
               
            </div>
        </div>
    );
};

export default Contact;