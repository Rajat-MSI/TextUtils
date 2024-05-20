import PropTypes from 'prop-types';

export default function Navbar(props)
{
    return (
        <>
            <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">{props.title}</a>
                        <ul className="navbar-nav m-2 list-group-horizontal">
                            <li className="nav-item mx-2 list-group-item">
                                <a className="nav-link" aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item mx-2 list-group-item">
                                <a className="nav-link" href="#">About</a>
                            </li>
                        </ul>
                    <div className="form-check form-switch">
                        <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch"
                               id="flexSwitchCheckDefault"/>
                        <label className={`text-${props.mode === 'light' ? 'dark' : 'light'}`}>Enable DarkMode</label>
                    </div>
                </div>
            </nav>
        </>
    );
}

Navbar.prototype = {title: PropTypes.string.isRequired,}