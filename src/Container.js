import React from 'react';
import Todo from "./Todo";

const Container = () => {
    return (
        <>
            <div className="container-sm col-sm-6 py-4" style={{minHeight: "100vh"}}>
                <h2 className="py-4">TODO APP</h2>
                <Todo/>
            </div>

        </>
    );
};

export default Container;