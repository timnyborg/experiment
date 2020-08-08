import {PRODUCERS} from './producers.js';
import _ from 'https://cdn.jsdelivr.net/npm/lodash-es@4.17.15/lodash.min.js';


export let data = {
    score: 0,
    income: null,
}

export function buy(item, count=1){
    let producer = PRODUCERS[item]
    let total_cost = producer.cost*count;
    if (data.score >= total_cost) {
        producer.count += count;
        data.score -= total_cost;
    }
}

function income(){
    return _.sum(_.map(PRODUCERS, p => p.per_tick()))
}

//Core loop
window.setInterval(() => {
    data.income = income();
    data.score += data.income
}, 50);