import $ from 'jquery'
import React, {Component} from "react";
import { Link, animateScroll as scroll } from "react-scroll";

export default  class  Navbar  extends Component {
    scrollToTop = () => {  scroll.scrollToTop(); };
    render() {
        $(window).trigger('scroll');
        $(window).on('scroll', function () {
            var pixels = 50;
            var top = 1200;
            if ($(window).scrollTop() > pixels) {
                $('.navbar-expand-md').addClass('navbar-reduce');
                $('.navbar-expand-md').removeClass('navbar-trans');
            } else {
                $('.navbar-expand-md').addClass('navbar-trans');
                $('.navbar-expand-md').removeClass('navbar-reduce');
            }
            if ($(window).scrollTop() > top) {
                $('.scrolltop-mf').fadeIn(1000, "easeInOutExpo");
            } else {
                $('.scrolltop-mf').fadeOut(1000, "easeInOutExpo");
            }
        });


           return (
          <div>
            <nav className="navbar navbar-b navbar-trans navbar-expand-md fixed-top" id="mainNav">
                <div className="container">
                    <a className="navbar-brand js-scroll" onClick={this.scrollToTop} >
                        <img src={require('../image/logo-orig.png')} alt=""/>
                    </a>
                    <button className="navbar-toggler collapsed" type="button" data-toggle="collapse"
                            data-target="#navbarDefault" aria-controls="navbarDefault" aria-expanded="false"
                            aria-label="Toggle navigation"><span></span> <span></span> <span></span></button>
                    <div className="navbar-collapse collapse justify-content-end" id="navbarDefault">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link
                                    activeClass="nav-link js-scroll waves-effect waves-light active"
                                    to= "home"
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration={500}
                                >
                                    בית
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link
                                    activeClass="nav-link js-scroll waves-effect waves-light active"
                                    to = "about"
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration={500}
                                >
                                    עליי
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link
                                    activeClass="nav-link js-scroll waves-effect waves-light active"
                                    to="portfolio"
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration={500}
                                >
                                    עבודות אחרונות
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link
                                    activeClass="nav-link js-scroll waves-effect waves-light active"
                                    to="contact"
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration={500}
                                >
                                    צור קשר
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
          </div>
        )
    }
}
