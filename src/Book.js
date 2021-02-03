import React from 'react'

// Nested Components
const Book = ({ author, img, title }) => {

    const clickHandler = () => {
        alert("hey there!")
    }
    
    const clickComplexHandler = (message) => {
        console.log(message);
    }

    return (
        <article className="book" onMouseOver={() => console.log(title)}>
            <img src={img} alt="" />
            <h1 onClick={() => { console.log("title is : ", title) }}>{title}</h1> {/* Inline function example */}
            {/* Inline CSS overwrites the corresponding properties defined in the imported CSS file. */}
            <h4 style={{ color: 'grey', fontSize: '0.75rem', marginTop: '0.45rem' }}>{author}</h4>
            {/* Event Handling */}
            <button type="button" onClick={clickHandler}>Click Me</button> {/* Reference example */}
            <button type="button" onClick={() => clickComplexHandler(author)}>Complex Click</button> {/* Complex example -> when passing an arguement, use arrow function */}
        </article>
    )
};

export default Book
