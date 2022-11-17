import { PATH_NAMES } from './app.constants';
import { AUTH_ROOT } from '../../../app.constants';
import {landingPage} from "./landingPageService";
import { accessibilityStatement } from "./accessibilityStatementService";
import { privacyStatement } from "./privacyStatementService";
import {selectPhotoId, validateSelectPhotoId} from "./photoIdSelection";
import {passportDateOfExpiry} from "./passportExpiry";
import {brpDateOfExpiry} from "./brpExpiry";

export const cicRoutes = {
  [`${AUTH_ROOT}${PATH_NAMES.LANDING_PAGE}`]: { "GET": landingPage },
  [`${AUTH_ROOT}${PATH_NAMES.PHOTO_ID_SELECTION}`]: { "GET": selectPhotoId, "POST": validateSelectPhotoId },
  [`${AUTH_ROOT}${PATH_NAMES.PASSPORT_DETAILS}`]: { "GET": passportDateOfExpiry },
  [`${AUTH_ROOT}${PATH_NAMES.BRP_DETAILS}`]: { "GET": brpDateOfExpiry },
  [`${PATH_NAMES.PRIVACY_STATEMENT}`]: { "GET": privacyStatement },
  [`${PATH_NAMES.ACCESSIBILITY_STATEMENT}`]: { "GET": accessibilityStatement }
}