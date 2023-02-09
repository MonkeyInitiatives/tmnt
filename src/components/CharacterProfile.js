// This is a profile page for me Tom the Turtle. It isn't very interesting. 

import React from 'react';

function CharacterProfile(props) {
    return (
        <div>
            {/* This is just code taken from bootstrap's website. Notice a few changes. First, we use 
            className instead of class in react. Second, inline styling takes in its own "prop", so it'll
            look different to what we've done in the past. */}
            <div className="card h-100" style={{width: '25rem'}} >
                <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Forig00.deviantart.net%2F3fce%2Ff%2F2008%2F318%2F2%2F9%2Fbaby_clothes__ninja_turtle_by_pyr0kitt3h.jpg&f=1&nofb=1&ipt=0aad79a699e798118744cdcdb6bc4cdb212cf8a2ab9571cb9212f90807839a78&ipo=images" className="card-img-top" style={{width: "100%", height: "35vw", objectFit: "cover"}} alt="Tom" />
                <div className="card-body">
                    
                    <h4 className="card-title">Tom, the Ninja Turtle!</h4>
                    <p className="card-text">He's not a pout pout fish with a pout pout face...</p>
                </div>
            </div>
        </div>
    )
}
export default CharacterProfile;