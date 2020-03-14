/**
 * Entity for store user settings
 */
export class UserSetting{


  constructor(application){
    this.userRole = 'admin';
    this.application = application;
  }

  /**
   * Getter {@link UserSetting#application}
   * @returns {Application}
   */


  get application() {
    return this._application;
  }


  set application(value) {
    this._application = value;
  }

  /**
   * Getter {@link UserSetting#userRole}
    * @returns {*}
   */


  get userRole() {
    return this._userRole;
  }

  /**
   * Setter {@link UserSetting#userRole}
   * @param role
   */

  set userRole(value) {
    this._userRole = value;
  }
}
