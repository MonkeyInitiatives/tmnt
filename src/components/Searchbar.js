import React from 'react';

function Searchbar(props) {
    return (
        <div>
            <div className="input-group mb-3">
                {/* Our input box for search. Notice we are using that function we passed in as props and attached it to the 
                onChange part. This allows us to call that function (i.e. filter our data) every time this input box changes.
                In other words, every time a letter is pressed the filtering happens! */}
                <input className="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default"
                    onChange={props.handleSearchboxChange} type="name" />
            </div>
            <div>

                {/* A new section of check boxes, passing in  handleCheckboxChangNEW from Characters.js to handle the changes*/}
                {/* Notice that each style has a class that matches its section (Style, Mood, and Food all lowercased and matching the values in the charater info
                    
                    
                    ) */}
                <p>Style</p>
                <ul>
                    <li>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input style" type="checkbox" id="inlineCheckbox4" onChange={props.handleCheckboxChangNEW} />
                            <label className="form-check-label" htmlFor="inlineCheckbox4">Careful</label>
                        </div>
                    </li>
                    <li>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input style" type="checkbox" id="inlineCheckbox4" onChange={props.handleCheckboxChangNEW} />
                            <label className="form-check-label" htmlFor="inlineCheckbox4">Wild</label>
                        </div>
                    </li>
                </ul>
                <p>Mood</p>
                <ul>
                    <li>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input mood" type="checkbox" id="inlineCheckbox4" onChange={props.handleCheckboxChangNEW} />
                            <label className="form-check-label" htmlFor="inlineCheckbox4">Happy</label>
                        </div>
                    </li>
                    <li>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input mood" type="checkbox" id="inlineCheckbox5" onChange={props.handleCheckboxChangNEW} />
                            <label className="form-check-label" htmlFor="inlineCheckbox5">Sad</label>
                        </div>
                    </li>
                </ul>
                <p>Food</p>
                <ul>
                    <li>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input food" type="checkbox" id="inlineCheckbox4" onChange={props.handleCheckboxChangNEW} />
                            <label className="form-check-label" htmlFor="inlineCheckbox4">Pizza</label>
                        </div>
                    </li>
                    <li>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input food" type="checkbox" id="inlineCheckbox5" onChange={props.handleCheckboxChangNEW} />
                            <label className="form-check-label" htmlFor="inlineCheckbox5">Chinese</label>
                        </div>
                    </li>
                    <li>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input food" type="checkbox" id="inlineCheckbox5" onChange={props.handleCheckboxChangNEW} />
                            <label className="form-check-label" htmlFor="inlineCheckbox5">Tacos</label>
                        </div>
                    </li>
                    <li>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input food" type="checkbox" id="inlineCheckbox5" onChange={props.handleCheckboxChangNEW} />
                            <label className="form-check-label" htmlFor="inlineCheckbox5">Tofu</label>
                        </div>
                    </li>
                </ul>
            </div>
        </div >
    )
}
export default Searchbar;