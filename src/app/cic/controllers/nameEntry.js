class NameEntryController {
    locals(req, res, callback) {
        super.locals(req, res, (err, locals) => {
          if (err) {
            return callback(err, locals);
          }
    
          locals.nameEntry = req.sessionModel.get("nameEntry");
    
          callback(err, locals);
        });
      }
    
      async saveValues(req, res, next) {
        try {
          const nameEntry = req.form.values.nameEntry;
          
    
          const isOutsideExpireWindow = inputDate.isAfter(  new Date(
            new Date().getFullYear(),
            new Date().getMonth() - 18,
            new Date().getDate()
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
        if (req.sessionModel.get("isOutsideExpireWindow")) {
    
          return "/done"
        } else{
          return "/photoIdExpiry"
        }
      }
    
    }
module.exports = NameEntryController; 