const BaseController = require("hmpo-form-wizard").Controller;
const logger = require("hmpo-logger").get();

class NameEntryController extends BaseController {
    next(req) {
      return "/nameEntry"
    } 
    
      // async saveValues(req, res, next) {
      //   try {
      //     const nameEntry = req.form.values.nameEntry;
          
    
      //     const isOutsideExpireWindow = inputDate.isAfter(  new Date(
      //       new Date().getFullYear(),
      //       new Date().getMonth() - 18,
      //       new Date().getDate()
      //     )
      //       .toISOString()
      //       .split("T")[0],'months')
    
      //     req.sessionModel.set("isOutsideExpireWindow", isOutsideExpireWindow);
    
      //     return next();
      //   } catch (err) {
      //     return next(err);
      //   }
      // }
    
      // next(req) {
      //   console.log(req.sessionModel.get("isOutsideExpireWindow"));
      //   if (req.sessionModel.get("isOutsideExpireWindow")) {
    
      //     return "/done"
      //   } else{
      //     return "/photoIdExpiry"
      //   }
      // }
    
    }
module.exports = NameEntryController; 
