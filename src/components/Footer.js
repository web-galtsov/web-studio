import React,  {Component} from "react";

class Footer  extends Component {
    render() {
        return (
            <div>
                <footer className="footer">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="footer-social-list text-center">
                                    <h6>תיצור איתי קשר</h6>
                                    <ul className="list-inline">
                                        <li><a href="https://www.facebook.com/oxana.galtsov.9" target="_blank"  rel="noopener noreferrer">
                                            <i className="mdi mdi-facebook" /></a></li>
                                        <li><a href="https://www.linkedin.com/feed/" target="_blank" rel="noopener noreferrer">
                                            <i  className="mdi mdi-linkedin"/></a></li>
                                    </ul>
                                </div>
                                <div className="copyright-text text-center"><p><small className="block">
                                    <span  id="year">2020</span> © | אוקסנה גלצוב</small></p></div>
                            </div>
                        </div>
                    </div>
                </footer>
                <a href={'#'} className="back-to-top"><i className="mdi mdi-keyboard-caps"/></a>
            </div>
        )
    }
}
export default Footer