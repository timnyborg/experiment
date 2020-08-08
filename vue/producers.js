import {data} from './main.js'

class Producer{
    constructor(args){
        this.name = args.name;
        this.base_cost = args.base_cost;
        this.count = args.count;
        this._per_tick = args.per_tick
    }

    per_tick(){
        return this._per_tick(this)
    }

    get cost(){
        return this.base_cost;
    }

    get buyable(){
        return this.cost < data.score
    }
}
export let PRODUCERS = {
    'ticker': new Producer({
        name: 'Ticker',
        base_cost: 10,
        count: 0,
        per_tick: (prod) => {
            return prod.count * .02
        },
    }),
    'double-ticker': new Producer({
        name: 'Double-ticker',
        base_cost: 100,
        count: 0,
        per_tick: (prod) => {
           return prod.count ** 2
        },
    })
}