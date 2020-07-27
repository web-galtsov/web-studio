import $ from 'jquery'
import React, {Component} from "react";

class About  extends Component {
    render() {
        setTimeout(function start (){
            $('.bar').each(function(i){
                var $bar = $(this);
                $(this).append('<span class="count"></span>')
                setTimeout(function(){
                    $bar.css('width', $bar.attr('data-percent'));
                }, i*100);
            }); })
        return (
            <div>
                <section id="about" className="about-area section-padding">
                    <div className="container waypoint" data-animation="slide-in-left">
                        <div className="row">
                            <div className="col-sm-12 wow fadeInUp" data-wow-delay=".4s" data-wow-duration="1s">
                                <div className="section-title">
                                    <h2 className="title">עליי</h2>
                                    <div className="separate" />
                                    <div className="about-dec">
                                        <p>אני מעצבת אתרים ומפתחת חזית עם 10 שנות ניסיון מסחרי, ויוצרת אתרים מצליחים
                                            שמחשבים היטב ויוצרים תוך התחשבות בפריון ובשיטות העבודה המומלצות.</p>
                                        <p>אני גאה בכך שאני לא יכול רק לבצע את העבודה ברמה הגבוהה שאתה מצפה, אלא גם
                                            לעשות כל מה שאפשר. אני אוהב להכיר את העסק, את היעדים שלו ואיך אני יכול ליישם
                                            את עצמי בצורה הטובה ביותר כדי לוודא שהאתר שלך מצליח. עבור לקוחות קבועים, אני
                                            אוהב במיוחד לנתח את הביצועים שלהם ולקבל החלטות והמלצות על בסיס נתונים, מה
                                            שמוביל לשיעורי הצלחה טובים יותר.</p>
                                        <p> אני משתמש ב- HTML, CSS ו- JavaScript כדי ליצור אתרי אינטרנט ויישומי אינטרנט
                                            מגיבים אשר מספקים למשתמשים את התכונות הטובות והמתאימות ביותר המתאימות למכשיר
                                            ולדפדפן שלהם. </p>
                                        <p> אני כותב קוד מבוסס סטנדרטים שהוא סמנטי, נגיש, ידידותי למנועי חיפוש, קל
                                            לתחזוקה, תואם לדפדפנים שונים ופרודוקטיבי.</p>
                                        <p>אני יכול להצטרף במהירות וביעילות לצוות שלך בשיטות אינטגרציה מתמשכות וכלים כמו
                                            Git.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-6 about-text wow fadeInUp" data-wow-delay=".8s"
                                 data-wow-duration="1s">
                                <div className="about-dec">
                                    <p>מיומנויות</p>
                                    <div className="wrap">
                                        <div className="holder">
                                            <div className="bar-1">
                                                <div className="bar cf" data-percent="95%"><span className="label">Photoshop</span></div>
                                                <span>95%</span></div>
                                            <div className="bar-1">
                                                <div className="bar cf" data-percent="90%"><span className="label">HTML</span></div>
                                                <span>95%</span></div>
                                            <div className="bar-1">
                                                <div className="bar cf" data-percent="95%"><span  className="label">CSS</span></div>
                                                <span>95%</span></div>
                                            <div className="bar-1">
                                                <div className="bar cf" data-percent="80%"><span className="label">jQuery</span></div>
                                                <span>80%</span></div>
                                            <div className="bar-1">
                                                <div className="bar cf" data-percent="70%"><span className="label">JavaScript</span></div>
                                                <span>70%</span></div>
                                            <div className="bar-1">
                                                <div className="bar cf" data-percent="40%"><span className="label">Node.js<small>(ללא ניסיון)</small></span>
                                                </div>
                                                <span>40%</span></div>
                                            <div className="bar-1">
                                                <div className="bar cf" data-percent="45%"><span className="label">ReactJs<small>(ללא ניסיון)</small></span>
                                                </div>
                                                <span>45%</span></div>
                                            <div className="bar-1">
                                                <div className="bar cf" data-percent="50%"><span className="label">Webpack<small>(ללא ניסיון)</small></span>
                                                </div>
                                                <span>50%</span></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 wow fadeInUp" data-wow-delay=".8s" data-wow-duration="1s">
                                <div className="about-video">
                                    <img  src={require('../image/features-img12.png')} alt=""  className="img-fluid d-block mx-auto" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section id="testimonial" className=" testimonial-area section-padding">
                    <div className=" container">
                        <div className=" row">
                            <div className=" col-lg-3 col-md-6 column column-padding wow fadeInUp" data-wow-delay=".4s"
                                 data-wow-duration="1s">
                                <div className="hex-wrap">
                                    <div className="hexagon"><i className="mdi mdi-speedometer"></i></div>
                                </div>
                                <div className="waypoint">
                                    <div className="label bold">מהיר</div>
                                    <div>זמני טעינה מהירים ואינטראקציה ללא פיגור, זמני הטעינה המהירה שלי ואינטראקציה ללא
                                        פיגור, העדיפות הגבוהה ביותר שלי.
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 column column-padding wow fadeInUp" data-wow-delay=".8s"
                                 data-wow-duration="1s">
                                <div className="hex-wrap">
                                    <div className="hexagon"><i className="mdi mdi-cellphone-link"></i></div>
                                </div>
                                <div className="waypoint">
                                    <div className="label bold">רספונסיבי</div>
                                    <div>הפריסות שלי יעבדו על כל מכשיר, גדול או קטן.</div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 column column-padding wow fadeInUp" data-wow-delay="1.2s"
                                 data-wow-duration="1s">
                                <div className="hex-wrap">
                                    <div className="hexagon"><i className="mdi mdi-lightbulb-outline"></i></div>
                                </div>
                                <div className="waypoint">
                                    <div className="label bold">אינטואיטיבי</div>
                                    <div>העדפה חזקה לשימוש קל ואינטואיטיבי UX / UI.</div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 column column-padding  wow fadeInUp" data-wow-delay="1.4s"
                                 data-wow-duration="1s">
                                <div className="hex-wrap">
                                    <div className="hexagon"><i className="mdi mdi-rocket-launch"></i></div>
                                </div>
                                <div className="waypoint">
                                    <div className="label bold">דינמי</div>
                                    <div>אתרי אינטרנט לא חייבים להיות סטטיים, אני אוהב לגרום לדפים להתעורר לחיים.</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}
export default About;