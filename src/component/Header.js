import React,{Component} from 'react'

export default class Header extends Component {

    render(){
        return(
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="#">Cybersoft</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse ml-auto" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <a className="nav-link active" href="#">Home <span className="sr-only">(current)</span></a>
                        <a className="nav-link" href="#">Features</a>
                        <a className="nav-link" href="#">Pricing</a>
                        <a className="nav-link disabled" href="#" tabIndex={-1} aria-disabled="true">Disabled</a>
                    </div>
                </div>
            </nav>

        )
    }
}