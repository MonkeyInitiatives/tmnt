// This is a NavBar with code from Bootstrap. It will handle onClick when we click Character
// or Chart in the NavBar.
 
function NavBar(props) {
    return (
        <nav className="navbar navbar-expand-lg navbar-light">
            <a className="navbar-brand" href="/" onClick={() => props.handlePageChange('Home')}>Home</a>
            {/* <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button> */}
            <div id="navbarNav">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item active">
                        {/* This is the a-tag that will call the handlePageChange function back in App.js. It will send the string "Characters" as a parameter in the function.
                        When this happens, the renderPage() function in App.js will get called and 
                        change the component based on if the state is Tom or Characters */}
                        <a className="nav-link" href="#characters" onClick={() => props.handlePageChange('Characters')}>Characters</a>
                    </li>
                    <li className="nav-item"> 
                        <a className="nav-link"  href="#charts"  onClick={() => props.handlePageChange('Charts')}>Charts</a>
                    </li>
                    {/* <li className="nav-item">
                        <a className="nav-link" href="#cards" onClick={() => props.handlePageChange('Cards')}>Cards</a>
                    </li> */}
                </ul>
            </div>
        </nav>
    )
}

export default NavBar;