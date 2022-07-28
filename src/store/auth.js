import { observable, action, makeAutoObservable, computed } from 'mobx';

import * as AsyncStore from '../utils/AsyncStorageUtils';

export default class AuthStore {
  @observable isAuthenticated=true
  constructor(store) {
    this.store = store;
    makeAutoObservable(this);
  }

}
