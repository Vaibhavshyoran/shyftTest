import { observable, action, makeAutoObservable, computed } from 'mobx';

import * as AsyncStore from '../utils/AsyncStorageUtils';

export default class LoanStore {
    @observable loansList = [];
    @observable loanObj = {}
    constructor(store) {
        this.store = store;
        makeAutoObservable(this);
    }

    submitData =async(data) => {
        console.log('test',JSON.stringify(data))
        let modArray=[...this.loansList];
        modArray.push(data);
        this.setLoanList(modArray);
        return true;
    }

    @action
    setLoanList=(data)=>{
        this.loansList=data
    }

}
