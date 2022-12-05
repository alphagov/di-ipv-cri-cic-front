const BaseController = require("hmpo-form-wizard").Controller;
const moment = require('moment');
// const logger = require("hmpo-logger").get();
const DateControllerMixin = require("hmpo-components").mixins.Date;

const DateController = DateControllerMixin(BaseController);

class DateOfBirthController extends DateController {

  locals(req, res, callback) {
    super.locals(req, res, (err, locals) => {
      if (err) {
        return callback(err, locals);
      }

      locals.passportExpiryDate = req.sessionModel.get("passportExpiryDate");

      callback(err, locals);
    });
  }

  async saveValues(req, res, next) {
    try {
      const dateOfBirth = req.form.values.dateOfBirth;
      const inputDate = moment(dateOfBirth, 'YYYY-MM-DD');

      const isOutsideExpireWindow = inputDate.isAfter(  new Date(
        new Date().getFullYear(),
        new Date().getMonth() - 18,
        new Date().getDate()
      )
        .toISOString()
        .split("T")[0],'months')
      console.log(isOutsideExpireWindow)
      req.sessionModel.set("isOutsideExpireWindow", isOutsideExpireWindow);
      console.log(isOutsideExpireWindow)
      return next();
    } catch (err) {
      return next(err);
    }
  }
    next(req) {
      console.log(req.sessionModel.get("isOutsideExpireWindow"));
      if (req.sessionModel.get("isOutsideExpireWindow")) {

        return "/landingPage"
      } else{
        return "/photoIdExpiry"
      }
    } 
}
module.exports = DateOfBirthController; 
