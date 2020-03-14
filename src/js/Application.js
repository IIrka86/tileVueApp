import {UserSetting} from './UserSetting'

export class Application {

    constructor(){
        this.userSettings = {}
    };


  get userSettings() {
    return this._userSettings;
  }

  set userSettings(value) {
    this._userSettings = value;
  }

  start(){
    this._userSettings = new UserSetting();
  }
}
