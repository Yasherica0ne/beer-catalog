import ValueParam from './ParamEnum';

class RequestObject {
    constructor(){
        this.ABV = { value: 0, added: ValueParam.ValueNone} ;
        this.IBU = { value: 0, added: ValueParam.ValueNone} ;
        this.EBC = { value: 0, added: ValueParam.ValueNone} ;
        this.beerName = { value: '', added: ValueParam.NoValue} ;
        this.yeast = { value: '', added: ValueParam.NoValue} ;
        this.brewed = { value: '', added: ValueParam.ValueNone} ;
        this.hops = { value: '', added: ValueParam.NoValue} ;
        this.malt = { value: '', added: ValueParam.NoValue} ;
        this.food = { value: '', added: ValueParam.NoValue} ;
    }

    CloneObject() {
        const clone = Object.assign({}, this);
        return clone;
    }
}

export default RequestObject;