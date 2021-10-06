import React from 'react';

const NotFound = () => {
    return (
        
        <div className="grid sm:grid-cols-1 lg:grid-cols-2">
            <div>
                <img src="https://images.unsplash.com/photo-1578328819058-b69f3a3b0f6b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80" alt="" srcset="" />
            </div>
            <div className="lg:px-32 my-auto sm:text-center lg:text-left font-serif">
                <h1 className="sm:text-3xl lg:text-4xl uppercase font-bold text-red-600 pt-2">Page NotFound</h1>
            </div>
        </div>
    );
};

export default NotFound;