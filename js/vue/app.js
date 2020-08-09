import { PRODUCERS } from '../producers.js';
import { buy, data } from '../main.js';
import { NOTATIONS } from '../notation.js';

import Vue from 'https://cdn.jsdelivr.net/npm/vue@2.6.11/dist/vue.esm.browser.js';
import { Dropdown, Tabs } from 'https://cdn.jsdelivr.net/npm/buefy@0.8.20/dist/buefy.esm.js';

Vue.use(Dropdown)
Vue.use(Tabs)

Vue.component('producer', {
    props: ['count', 'cost', 'name', 'id', 'base_cost', 'buyable'],
    template: `
    <div class="columns">
        <div class="column is-two-fifths">
            <p>{{ name }}</p>
        </div>
        <div class="column is-one-fifth">
            <p>{{ count }}</p>
        </div>
        <div class="column is-one-fifth">
            <p>{{ cost }}</p>
        </div>
        <div class="column">
            <div class="field has-addons">
                <p class="control">                    
                    <button v-on:click="$emit('buy', id, 1);" :disabled="!buyable"  class="button is-primary is-small">
                        <span>Buy 1</span>
                    </button>
                </p>
                <p class="control">
                    <button v-on:click="$emit('buy', id, 100);" :disabled="!buyable" class="button is-primary is-small">
                        <span>Max</span>
                    </button>
                </p>
            </div>
        </div>
    </div>
  `,
    computed: {

    }

})

var obj = {
    foo: 'bar',
    data: data,
    producers: PRODUCERS,
    notations: NOTATIONS,
    tabs: [
        {
            label: 'Numbers',
            displayed: true,
        },
        {
            label: 'Multipliers',
            displayed: true,
        },
        {
            label: 'Exponents',
            displayed: true,
        },
        {
            label: 'Options',
            displayed: true,
        },
    ],
    active_tab: null,
    active_notation: null,
}

Vue.filter('to_notation', function (value, notation) {
    if (!notation){
        return null;
    }
    return notation.format(value);
});

new Vue({
    el: '#app',
    data: obj,
    methods: {
        buy: buy,
        set_notation(option) {
            this.active_notation = option
        }
    },
    mounted(){
        this.active_tab = this.tabs[0].label;
        this.active_notation = this.notations.metric;
    },    
})

