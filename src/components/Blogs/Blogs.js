import React from 'react';
import './Blogs.css';


const Blogs = () => {
    return (
        <div className='blogs'>
            <h4>What is the purpose of Context API?</h4>
            <p>The Context API is a React shape that allows us to trade precise info and assists in fixing prop-drilling from all ranges of our application. The React Context API is a manner for a React app to efficaciously produce international variables that may be handed around. This is the opportunity to "prop drilling" or transferring props from grandparent to infant to discern, and so on. Context is likewise touted as an easier, lighter method to nation control the usage of Redux. React.createContext() is all we want. It returns a client and a company. The company is part that because it's names shows affords the nation to its children. It will preserve the "store" and be the discern of all of the additives that could want that store. Consumer because it so occurs is part that consumes and makes use of the nation.</p>
            <h4>What is difference between inline, inline-block and block elements?</h4>
            <div>
                <h5>Inline:</h5>
                <p>Displays an element as an inline element. Any height and width properties will have no effect.
                The element does not start on a new line and only occupy just the width it requires. We can not set the width or height.</p>
                <h5>Inline-Block:</h5>
                <p>Displays an element as an inline-level block container. We can set height and width values.
                It is formatted just like the inline element, where it does not start on a new line. BUT, we can set width and height values.</p>
                <h5>Block:</h5>
                <p>Displays an element as an block element. The entire width of that particular element will be blocked!
                The element will start on a new line and occupy the full width available. And we can set width and height values.</p>
            </div>
           
        </div>
    
        
    );
};

export default Blogs;