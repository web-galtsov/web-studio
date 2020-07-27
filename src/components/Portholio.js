import React,  {Component} from "react";
class Portholio  extends Component {
    render() {
        return (
            <div>
                <section id="portfolio" className="portfolio-area section-padding">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-sm-12">
                                <div className="section-title"><h2 className="title">עבודות אחרונות</h2>
                                    <div className="separate"></div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="portfolio-container">
                                <div className="col-lg-3 col-md-6 portfolio-grid-item all branding webdesign">
                                    <a className="popup-img portfolio-item " href="https://bl-cosmetica.com/"
                                       target="_blank" rel="noopener noreferrer">
                                        <img src={require('../image/bl-cos.jpg')} alt="" />
                                        <div className="portfolio-hover-title">
                                            <div className="portfolio-content"><h4>בניית אתרים</h4>  <h6>צפה
                                                בפרויקט</h6></div>
                                        </div>
                                    </a>
                                </div>
                                <div className="col-lg-3 col-md-6 portfolio-grid-item all application photography">
                                    <a className="popup-img portfolio-item" href="https://nadivwood.co.il"
                                       target="_blank" rel="noopener noreferrer">
                                        <img src={require('../image/nadiwwod.jpg')} alt="" />
                                        <div className="portfolio-hover-title">
                                            <div className="portfolio-content"><h4>בניית אתרים</h4><h6>צפה
                                                בפרויקט</h6></div>
                                        </div>
                                    </a>
                                </div>
                                <div className="col-lg-3 col-md-6 portfolio-grid-item all branding webdesign">
                                    <a className="popup-img portfolio-item " href="https://www.levstudio.co.il/he/"
                                       target="_blank" rel="noopener noreferrer">
                                        <img src={require('../image/lev-stud.jpg')} alt="" />
                                        <div className="portfolio-hover-title">
                                            <div className="portfolio-content"><h4>בניית אתרים</h4>  <h6>צפה
                                                בפרויקט</h6></div>
                                        </div>
                                    </a>
                                </div>
                                <div
                                    className="col-lg-3 col-md-6 portfolio-grid-item all branding webdesig photographyn">
                                    <a className="popup-img portfolio-item" href="http://www.ofis.co.il" target="_blank"
                                       rel="noopener noreferrer">
                                        <img src={require('../image/ofis.jpg')} alt="" />
                                        <div className="portfolio-hover-title">
                                            <div className="portfolio-content"><h4>בניית אתרים</h4> <h6>צפה
                                                בפרויקט</h6></div>
                                        </div>
                                    </a>
                                </div>
                                <div
                                    className="col-lg-3 col-md-6 portfolio-grid-item all application webdesign photography">
                                    <a className="popup-img portfolio-item" href="https://www.sunworldtours.com"
                                       target="_blank" rel="noopener noreferrer">
                                        <img src={require('../image/suntour.jpg')} alt="" />
                                        <div className="portfolio-hover-title">
                                            <div className="portfolio-content"><h4>בניית אתרים</h4><h6>צפה
                                                בפרויקט</h6></div>
                                        </div>
                                    </a>
                                </div>
                                <div className="col-lg-3 col-md-6 portfolio-grid-item all branding photography">
                                    <a className="popup-img portfolio-item"
                                       href="http://tourtech.co.il/travelix/index.html" target="_blank" rel="noopener noreferrer">
                                        <img src={require('../image/trav.jpg')} alt="" />
                                        <div className="portfolio-hover-title">
                                            <div className="portfolio-content"><h4>בניית אתרים</h4><h6>צפה
                                                בפרויקט</h6></div>
                                        </div>
                                    </a>
                                </div>
                                <div className="col-lg-3 col-md-6 portfolio-grid-item all branding photography">
                                    <a className="popup-img portfolio-item" href="http://www.tn-artclub.com"
                                       target="_blank" rel="noopener noreferrer">
                                        <img src={require('../image/tn-art.jpg')} alt="" />
                                        <div className="portfolio-hover-title">
                                            <div className="portfolio-content"><h4>בניית אתרים</h4>  <h6>צפה
                                                בפרויקט</h6></div>
                                        </div>
                                    </a>
                                </div>
                                <div className="col-lg-3 col-md-6 portfolio-grid-item all branding photography">
                                    <a className="popup-img portfolio-item" href="http://www.tamaralhahar.co.il/"
                                       target="_blank" rel="noopener noreferrer">
                                        <img src={require('../image/ygot.jpg')} alt="" />
                                        <div className="portfolio-hover-title">
                                            <div className="portfolio-content"><h4>בניית אתרים</h4> <h6>צפה
                                                בפרויקט</h6></div>
                                        </div>
                                    </a>
                                </div>
                                <div className="col-lg-3 col-md-6 portfolio-grid-item all branding photography">
                                    <a className="popup-img portfolio-item" href="http://tourtech.co.il/"
                                       target="_blank" rel="noopener noreferrer">
                                        <img src={require('../image/tour.jpg')} alt="" />
                                        <div className="portfolio-hover-title">
                                            <div className="portfolio-content"><h4>בניית אתרים</h4> <h6>צפה
                                                בפרויקט</h6></div>
                                        </div>
                                    </a>
                                </div>
                                <div className="col-lg-3 col-md-6 portfolio-grid-item all branding photography">
                                    <a className="popup-img portfolio-item" href="http://www.digitalcard1.co.il/"
                                       target="_blank" rel="noopener noreferrer">
                                        <img src={require('../image/digit.jpg')} alt="" />
                                        <div className="portfolio-hover-title">
                                            <div className="portfolio-content"><h4>בניית אתרים</h4><h6>צפה
                                                בפרויקט</h6></div>
                                        </div>
                                    </a>
                                </div>
                                <div className="col-lg-3 col-md-6 portfolio-grid-item all branding photography">
                                    <a className="popup-img portfolio-item" href="https://hiphip.co.il/" target="_blank"
                                       rel="noopener noreferrer">
                                        <img src={require('../image/hip.jpg')} alt="" />
                                        <div className="portfolio-hover-title">
                                            <div className="portfolio-content"><h4>בניית אתרים</h4><h6>צפה
                                                בפרויקט</h6></div>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}
export default Portholio;