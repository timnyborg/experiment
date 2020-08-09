export let NOTATIONS = {
    scientific: {
        display_name: 'Scientific',
        format: function(number){
            if (number < 10**4) {
                return number.toFixed(0);
            }
            return number.toExponential(3);
        }
    },
    metric: {
        display_name: 'Metric',
        format: function(number){
            if (number < 100000) {
                return number.toFixed(0);
            } else {
                return Math.floor(number / 1000) + 'K'
            }
            
        }
    }
}