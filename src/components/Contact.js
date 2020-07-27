import React, {Component} from "react";

class Contact  extends Component {
    render() {
        return (
            <div>
                <section id="contact" className="section-padding hero-4-bg contact-area">
                    <div className="container waypoint" data-animation="slide-in-left">
                        <div className="row">
                            <div className="col-sm-12 wow fadeInUp" data-wow-delay=".4s" data-wow-duration="1s">
                                <div className="section-title">
                                    <h2 className="title">צור קשר</h2>
                                    <div className="separate" />
                                </div>
                            </div>
                        </div>
                        <div className="section-body wow fadeInUp" data-wow-delay=".8s" data-wow-duration="1s">
                            <div className="row row-columns row-padding">
                                <div className="col-contact column column-padding col-md-4">
                                    <i className="mdi mdi-phone-classic color"/>
                                    <h3 className="purple">טלפון</h3>
                                    <p dir="ltr">+972 03 658 63 66<br />
                                        <a href="tel:9727977172"  aria-label="telephon"> +972 054 79 77 172</a>
                                    </p>
                                </div>
                                <div className="col-contact column column-padding col-md-4">
                                    <i className="mdi mdi-map-marker color" />
                                    <h3 className="purple">כתובת</h3>
                                    <p>הראשונים 6,<br />ישראל בת-ים</p>
                                </div>
                                <div className="col-contact column column-padding col-md-4">
                                    <i className="mdi mdi-email-variant color"/>
                                    <h3 className="purple">אימייל</h3>
                                    <p><a href="mailto:oksana.galtsov@gmail.com">oksana.galtsov@gmail.com</a></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}
export default Contact;