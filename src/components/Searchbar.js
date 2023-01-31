import React from 'react';

function Searchbar(props) {
    return (
        <div>
            <div className="input-group mb-3">
                {/* Our input box for search. Notice we are using that function we passed in as props and attached it to the 
                onChange part. This allows us to call that function (i.e. filter are data) every time this input box changes.
                In other words, every time a letter is pressed the filtering happens! */}
                <input className="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default"
                    onChange={props.handleSearchboxChange} type="name" />
            </div>
            <div>
                <div className="form-check form-check-inline">
                    <input className="form-check-input" type="checkbox" id="inlineCheckbox1" onChange={props.handleCheckboxChange} />
                    <label className="form-check-label" htmlFor="inlineCheckbox1">Turtle</label>
                </div>
                <div className="form-check form-check-inline">
                    <input className="form-check-input" type="checkbox" id="inlineCheckbox2" onChange={props.handleCheckboxChange} />
                    <label className="form-check-label" htmlFor="inlineCheckbox2">Human</label>
                </div>
                <div className="form-check form-check-inline">
                    <input className="form-check-input" type="checkbox" id="inlineCheckbox3" onChange={props.handleCheckboxChange} />
                    <label className="form-check-label" htmlFor="inlineCheckbox2">Hero</label>
                </div>
                <div className="form-check form-check-inline">
                    <input className="form-check-input" type="checkbox" id="inlineCheckbox4" onChange={props.handleCheckboxChange} />
                    <label className="form-check-label" htmlFor="inlineCheckbox2">Villain</label>
                </div>
            </div>
        </div>
    )
}
export default Searchbar;