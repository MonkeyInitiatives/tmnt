// A new react component! Make sure to install it. 
// https://www.npmjs.com/package/react-card-flip
import ReactCardFlip from 'react-card-flip';
import React, { useState, useEffect } from 'react';


function CardFlip(props) {
    // This is my test data. You'd be using a USE_QUERY to get data from your database and your fields are probably different than mine. 
    const testData = [
        {
            cardFront: "Who Needs the Kwik-E-Mart?",
            cardAuthor: "Apu",
            cardBack: "I doooooooo!!!!",
            cardImage: "https://upload.wikimedia.org/wikipedia/fi/thumb/b/b9/495px-Apu.png/250px-495px-Apu.png"
        },
        {
            cardFront: "See my loafers? Former gophers!",
            cardAuthor: "Mr. Burns",
            cardBack: "It was that, or skin my chauffers...",
            cardImage: "https://64.media.tumblr.com/e73b9b99631a905f171721650ca0e190/tumblr_oi0f6fGliq1usf2q5o4_540.png"
        },
        {
            cardFront: "I hate every ape I see, from chimpan-A to chimpan-Z!",
            cardAuthor: "Troy McClure",
            cardBack: "I love you, Dr. Zaius!",
            cardImage: "https://upload.wikimedia.org/wikipedia/en/6/6c/Troymcclure.png"
        }
    ]

    // State to track if the cards are flipped or not.
    const [isFlipped, setFlipped] = useState(false);

    // event listener to flip the cards based on the state (if front, show back, and vice verse)
    const handleClick = (e) => {
        e.preventDefault();
        if (isFlipped) {
            setFlipped(false)
        }
        else {
            setFlipped(true)
        }
    }

    return (
        <div className="row">
            <div className="col-sm" align="center">
                {/* Button to handle when to flip the cards back and forth. */}
                <button onClick={handleClick}>Click to flip</button>
                {/* Mapping through the data to show all the cards at once. */}
                {testData.map(item => {
                    return (
                        <div className="card" style={{ width: '25rem' }} >
                            {/* Using that ReactCardFlip component, and supplying it with info from my testData.  */}
                            <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
                                <div className="card-body">
                                    {/* Filling in data, such as P tag, H4, and the image based on my testData model */}
                                    <h4 className="card-title">{item.cardFront}</h4>
                                    <img src={item.cardImage} className="card-img-top" style={{ width: "100%", height: "35vw", objectFit: "cover" }} alt={item.cardAuthor} />
                                    <p className="card-text">{item.cardAuthor}</p>
                                </div>
                                <div>
                                    <h4 className="card-title">{item.cardBack}</h4>
                                    <img src={item.cardImage} className="card-img-top" style={{ width: "100%", height: "35vw", objectFit: "cover" }} alt={item.cardAuthor} />
                                    <p className="card-text">{item.cardAuthor}</p>
                                </div>
                            </ReactCardFlip>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
export default CardFlip;