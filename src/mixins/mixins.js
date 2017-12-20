const mixin = {
    methods:{
        closeDialog: function(){ this.$emit('close') },
        delimiter(numb){
            numb  = parseFloat(numb).toFixed(2).toString();

            var parts = (numb + '').split('.'),
            main = parts[0],
            len = main.length,
            output = '',
            i = len - 1;
        
            while(i >= 0) {
                output = main.charAt(i) + output;
                if ((len - i) % 3 === 0 && i > 0) {
                    output = ' ' + output;
                }
                --i;
            }
    
            if (parts.length > 1) {
                output += '.' + parts[1];
            }

            return output;
        },
    }
}

export default mixin