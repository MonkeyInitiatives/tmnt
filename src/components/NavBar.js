// This is a NavBar with code from Bootstrap. It will handle onClick when we click Character
// or Tom in the NavBar.
 
function NavBar(props) {

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="#characters" onClick={() => props.handlePageChange('Characters')}>Home</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item active">
                        {/* This is the a-tag that will call the handlePageChange function back in App.js. It will send the string "Characters" as a parameter in the function.
                        When this happens, the renderPage() function in App.js will get called and 
                        change the component based on if the state is Tom or Characters */}
                        <a className="nav-link" href="#characters" onClick={() => props.handlePageChange('Characters')}>Characters <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#tom" onClick={() => props.handlePageChange('Tom')}>Tom</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#lures" onClick={() => props.handlePageChange('Lure')}>Lures</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#cards" onClick={() => props.handlePageChange('Cards')}>Cards</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default NavBar;