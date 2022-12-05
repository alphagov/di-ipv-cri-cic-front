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
        new Date().getMonth(),
        new Date().getDate() - 1,
      )
        .toISOString()
        .split("T")[0],'months')

      req.sessionModel.set("isOutsideExpireWindow", isOutsideExpireWindow);
      
      return next();
    } catch (err) {
      return next(err);
    }
  }
    next(req) {
      console.log(req.sessionModel.get("isOutsideExpireWindow"));
      if (!req.sessionModel.get("isOutsideExpireWindow")) {
        console.log(`Succes, DOB is ${req.form.values.dateOfBirth}`)
        return "/landingPage"
      } else{
        console.log(`Boo, DOB is ${req.form.values.dateOfBirth} and in the future`)
        return "/photoIdExpiry"
      }
    } 
}
module.exports = DateOfBirthController; 
