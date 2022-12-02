const BaseController = require("hmpo-form-wizard").Controller;
const logger = require("hmpo-logger").get();

class NameEntryController extends BaseController {
    next(req) {
      return "/dateOfBirth"
    } 
}
module.exports = NameEntryController; 
