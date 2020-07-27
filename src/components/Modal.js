import $ from 'jquery'
import React, {Component} from "react";

export default  class  Modal  extends Component {
    render() {
        return (
            <div>
                <div id="request" className="modal fade" role="dialog">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <span className="close" data-dismiss="modal" aria-label="Close">×</span>
                                <h2 className="modal-title">צור קשר</h2>
                            </div>
                            <div className="modal-body">
                                <div className="container jf-form">
                                    <form data-licenseKey="" name="jqueryform-f3a9b3" id="jqueryform-f3a9b3"
                                          action="admin.php" method="POST" className="needs-validation" noValidate  encType='multipart/form-data' autoComplete="off">
                                        <input type="hidden" name="method" value="validateForm" />
                                        <input type="hidden" id="serverValidationFields"  name="serverValidationFields" value="" />
                                        <div className="md-form form-sm f1" data-fid="f1">
                                            <i className="fas mdi mdi-account prefix" />
                                            <input type="text" id="f1" name="f1" value=""  className="form-control form-control-sm" required />
                                            <label htmlFor="f1" className="">שם</label>
                                            <div className="invalid-feedback">אנא ספק שם תקף</div>
                                        </div>
                                        <div className="md-form form-sm f2" data-fid="f2">
                                            <i className="fas mdi mdi-email prefix" />
                                            <input type="email" id="f2" name="f2" value=""    className="form-control form-control-sm" required />
                                            <label htmlFor="f2">דוא”ל</label>
                                            <div className="invalid-feedback">אנא ספק דוא"ל חוקי.</div>
                                        </div>
                                        <div className="md-form form-sm f4" data-fid="f4">
                                            <i className="fas mdi mdi-phone-classic prefix" />
                                            <input type="tel" id="f4" name="f4" value=""  className="form-control form-control-sm" required />
                                            <label htmlFor="f4">טלפון</label>
                                            <div className="invalid-feedback">אנא ספק טלפון חוקי.</div>
                                        </div>
                                        <div className="md-form form-sm f3 required" data-fid="f3">
                                            <i className="fas mdi mdi-pencil-outline prefix" />
                                            <textarea type="text" id="f3" name="f3"  className="md-textarea form-control" required />
                                            <label htmlFor="f3">ההודעה שלך</label>
                                        </div>
                                        <div className="form-group submit f0 " data-fid="f0"  style="position: relative;">
                                            <label className="control-label sr-only" htmlFor="f0"  style="display: block;">שלח</label>
                                            <div className="progress"  style="display: none; z-index: -1; position: absolute;">
                                                <div className="progress-bar progress-bar-striped active"  role="progressbar" style="width:100%" />
                                            </div>
                                            <button type="submit"  className="btn btn-outline-secondary waves-effect"  style="z-index: 1;">שלח
                                                <i className="mdi mdi-feather" />
                                            </button>
                                        </div>
                                        <div className="clearfix"></div>
                                    </form>
                                </div>
                                <div className="container jf-thankyou" style="display:none;" data-redirect=""  data-seconds="50">
                                    <h3>הטופס שלך נשלח. תודה!</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}









