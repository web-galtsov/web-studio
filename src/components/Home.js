import React,  {Component} from "react";
import {render} from "react-dom";
import '../js/animated.headline' ;
class Home  extends Component {
    render() {
        return (
            <div>
                <div id="home" className="intro">
                    <div id="particles-js" />
                    <div className="display-table">
                        <div className="table-cell">
                            <div className="container p-t-150">
                                <div className="row align-items-center justify-content-center">
                                    <div className="col-md-6">
                                        <div className="header-text">
                                            <h3> סטטיו אינטרנט קריטיבי</h3>
                                            <h1 className="cd-headline clip is-full-width">
                                                אנו מספקים<br />
                                                   <span className="cd-words-wrapper">
									                	<b className="is-visible">בניית אתרים</b>
									                	<b className="is-hidden">עיצוב יצירתי</b>
									                </span>
                                            </h1>
                                            <p>הי, אני אוקסנה. יש לי ניסיון מסחרי של 10 שנים ביצירת אתרים מצליחים אשר
                                                מעוצבים ונבנים בהתחשב עם הביצועים ושיטות העבודה המומלצות בראש.</p>
                                            <a href="#request" className="btn btn-secondary" data-toggle="modal">צרו
                                                איתי קשר עכשיו</a>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-10">
                                        <div className=" mt-5 mt-lg-0">
                                            <img src={require('../image/hero-1-img.png')} alt="" className="img-fluid d-block mx-auto" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Home