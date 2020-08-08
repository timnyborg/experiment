import Vue from 'https://cdn.jsdelivr.net/npm/vue@2.6.11/dist/vue.esm.browser.js';
import {PRODUCERS} from './producers.js';
import {buy, data} from './main.js';

Vue.component('producer', {
  props: ['count', 'cost', 'name', 'id', 'base_cost', 'buyable'],
  template: `
    <div class="level">
        <div class="level-left">
            <p>{{ name }}</p>
        </div>
        <div class="level-item">
            <p>{{ count }}</p>
        </div>
        <div class="level-right">
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
}

new Vue({
  el: '#app',
  data: obj,
  methods: {
        buy: buy,
    }
})