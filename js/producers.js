import {data} from './main.js'

class Producer{
    constructor(args){
        this.name = args.name;
        this.base_cost = args.base_cost;
        this.count = args.count;
        this.per_tick = args.per_tick
    }

    get cost(){
        return Math.floor(this.base_cost * Math.pow(1.03, this.count));
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
        per_tick(){
            return this.count * 12.02
        },
    }),
    'double-ticker': new Producer({
        name: 'Double-ticker',
        base_cost: 100,
        count: 0,
        per_tick(){
           return this.count ** 2
        },
    })
}