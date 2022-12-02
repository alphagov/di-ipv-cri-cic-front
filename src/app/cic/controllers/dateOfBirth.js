const BaseController = require("hmpo-form-wizard").Controller;
const logger = require("hmpo-logger").get();

class DateOfBirthController extends BaseController {
    next(req) {
      return "/"
    } 
}
module.exports = NameEntryController; 
