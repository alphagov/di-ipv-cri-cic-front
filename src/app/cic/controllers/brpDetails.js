const moment = require("moment");
const BaseController = require("hmpo-form-wizard").Controller;
const DateControllerMixin = require("hmpo-components").mixins.Date;

const DateController = DateControllerMixin(BaseController);

class BrpDetailsController extends DateController {

  async saveValues(req, res, next) {
    try {
      const brpExpiryDate = req.form.values.brpExpiryDate;
      const inputDate = moment(brpExpiryDate, 'YYYY-MM-DD');

      const isOutsideExpireWindow = inputDate.isAfter(  new Date().toISOString().split("T")[0])
      req.sessionModel.set("isOutsideExpireWindow", isOutsideExpireWindow);

      return next();
    } catch (err) {
      return next(err);
    }
  }

  next(req) {
    console.log(req.sessionModel.get("isOutsideExpireWindow"));
    if (req.sessionModel.get("isOutsideExpireWindow")) {

      return "/nameEntry"
    } else{
      return "/photoIdExpiry"
    }
  }

}
module.exports = BrpDetailsController;
