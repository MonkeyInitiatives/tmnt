import React from 'react';
function Home() {
    return (
        <div className="row">
            <div className="col-sm d-flex flex-column  justify-content-center align-items-center" style={{"paddingBottom": "2.5rem"}}>
                <h1 id="titleFont">Tom's Awesome Ninja Turtle Site!</h1>
                <img src="https://media2.giphy.com/media/1ZbnufnHeW0W4/giphy.gif" style={{ width: "100%"}}/>
                <p style={{"textAlign": "center"}}>This is a very fun site to demonstrate some awesome feature of React such as:</p>
                <ul style={{"textAlign": "center"}}>
                    <li style={{ "listStyleType": "none" }}>
                        Demonstrating how to have a persistent header and footer between pages
                    </li>
                    <li style={{ "listStyleType": "none" }}>
                        Rendering different pages/components via a navbar
                    </li>
                    <li style={{ "listStyleType": "none" }}>
                        Using a single component many times to map through data
                    </li>
                    <li style={{ "listStyleType": "none" }}>
                        Filtering data via a search box and checkboxes
                    </li>
                    <li style={{ "listStyleType": "none" }}>
                        Showcasing various third-party NPM packages such as parallax-container, react-card-flip, and react-chartkick.
                    </li>
                    <li style={{ "listStyleType": "none" }}>
                        Highlighting Bootstrap's grid system to make a mobile-responsive website.
                    </li>
                </ul>
            </div>
        </div>

    )
}
export default Home;