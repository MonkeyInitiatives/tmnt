import React from 'react';
import { Accordion } from "react-bootstrap";

function Searchbar(props) {
    return (
        <div>
            <div className="input-group mb-3">
                {/* Our input box for search. Notice we are using that function we passed in as props and attached it to the 
                onChange part. This allows us to call that function (i.e. filter our data) every time this input box changes.
                In other words, every time a letter is pressed the filtering happens! */}
                <input className="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default"
                    onChange={props.handleSearchboxChange} type="name" placeholder="Search for a character via their name here..." />
            </div>
            <div className="input-group row mb-3" style={{"width":"102%"}}>

                {/* A new section of check boxes, passing in  handleCheckboxChangNEW from Characters.js to handle the changes*/}
                {/* Notice that each style has a class that matches its section (Style, Mood, and Food all lowercased and matching the values in the charater info) */}
                <Accordion className="input-group">
                    <Accordion.Item eventKey="0" className="col-sm" >
                        <Accordion.Header>Style</Accordion.Header>
                        <Accordion.Body>
                            {/* <h4>Style:</h4> */}
                            <ul>
                                <li style={{ "listStyleType": "none" }}>
                                    <div className="form-check form-check-inline">
                                        <input className="form-check-input style" type="checkbox" onChange={props.handleCheckboxChangNEW} />
                                        <label className="form-check-label" htmlFor="inlineCheckbox4">Careful</label>
                                    </div>
                                </li>
                                <li style={{ "listStyleType": "none" }}>
                                    <div className="form-check form-check-inline">
                                        <input className="form-check-input style" type="checkbox" onChange={props.handleCheckboxChangNEW} />
                                        <label className="form-check-label" htmlFor="inlineCheckbox4">Wild</label>
                                    </div>
                                </li>
                            </ul>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1" className="col-sm">
                        <Accordion.Header>Mood</Accordion.Header>
                        <Accordion.Body>
                            <ul>
                                <li style={{ "listStyleType": "none" }}>
                                    <div className="form-check form-check-inline">
                                        <input className="form-check-input mood" type="checkbox" onChange={props.handleCheckboxChangNEW} />
                                        <label className="form-check-label" htmlFor="inlineCheckbox4">Happy</label>
                                    </div>
                                </li>
                                <li style={{ "listStyleType": "none" }}>
                                    <div className="form-check form-check-inline">
                                        <input className="form-check-input mood" type="checkbox" onChange={props.handleCheckboxChangNEW} />
                                        <label className="form-check-label" htmlFor="inlineCheckbox4">Angry</label>
                                    </div>
                                </li>
                                <li style={{ "listStyleType": "none" }}>
                                    <div className="form-check form-check-inline">
                                        <input className="form-check-input mood" type="checkbox" onChange={props.handleCheckboxChangNEW} />
                                        <label className="form-check-label" htmlFor="inlineCheckbox5">Sad</label>
                                    </div>
                                </li>
                            </ul>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2" className="col-sm">
                        <Accordion.Header>Food</Accordion.Header>
                        <Accordion.Body>
                            <ul>
                                <li style={{ "listStyleType": "none" }}>
                                    <div className="form-check form-check-inline">
                                        <input className="form-check-input food" type="checkbox" onChange={props.handleCheckboxChangNEW} />
                                        <label className="form-check-label" htmlFor="inlineCheckbox4">Pizza</label>
                                    </div>
                                </li>
                                <li style={{ "listStyleType": "none" }}>
                                    <div className="form-check form-check-inline">
                                        <input className="form-check-input food" type="checkbox" onChange={props.handleCheckboxChangNEW} />
                                        <label className="form-check-label" htmlFor="inlineCheckbox5">Chinese</label>
                                    </div>
                                </li>
                                <li style={{ "listStyleType": "none" }}>
                                    <div className="form-check form-check-inline">
                                        <input className="form-check-input food" type="checkbox" onChange={props.handleCheckboxChangNEW} />
                                        <label className="form-check-label" htmlFor="inlineCheckbox5">Tacos</label>
                                    </div>
                                </li>
                                <li style={{ "listStyleType": "none" }}>
                                    <div className="form-check form-check-inline">
                                        <input className="form-check-input food" type="checkbox" onChange={props.handleCheckboxChangNEW} />
                                        <label className="form-check-label" htmlFor="inlineCheckbox5">Tofu</label>
                                    </div>
                                </li>
                            {/* </ul>
                            <ul> */}
                                <li style={{ "listStyleType": "none" }}>
                                    <div className="form-check form-check-inline">
                                        <input className="form-check-input food" type="checkbox" onChange={props.handleCheckboxChangNEW} />
                                        <label className="form-check-label" htmlFor="inlineCheckbox5">Sushi</label>
                                    </div>
                                </li>
                                <li style={{ "listStyleType": "none" }}>
                                    <div className="form-check form-check-inline">
                                        <input className="form-check-input food" type="checkbox" onChange={props.handleCheckboxChangNEW} />
                                        <label className="form-check-label" htmlFor="inlineCheckbox5">Hot Dogs</label>
                                    </div>
                                </li>
                                <li style={{ "listStyleType": "none" }}>
                                    <div className="form-check form-check-inline">
                                        <input className="form-check-input food" type="checkbox" onChange={props.handleCheckboxChangNEW} />
                                        <label className="form-check-label" htmlFor="inlineCheckbox5">Turtle Soup</label>
                                    </div>
                                </li>
                            </ul>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </div>
        </div >
    )
}
export default Searchbar;