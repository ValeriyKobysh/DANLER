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
        addToBasket(event){
            this.$http.post('/index.php?p1=/cart/', 
                Object.assign({ func: "getProduct" }, { prod_id: parseInt(document.querySelector('.card__buy').id) }),
                { emulateJSON: true })
            .then(response => {
                let data = response.body.result.data;
                this.product.id = data.id;
                this.product.image = data.photo;
                this.product.title = data.name;
                this.product.url = data.url;
                this.product.price = data.amount;
                Basket.add(Object.assign(this.product, { count: 1}))
                this.addToBasketData = Basket.getProduct(this.product.id)
            }, response => {
                console.log('false', response);
            })
            this.showAddToBasket()

        },
        getLocation(){ return window.location.href; },
        shareFB(){ return `https://www.facebook.com/sharer.php?u=${this.getLocation()}` },
        shareGP(){ return `https://plus.google.com/share?url=${this.getLocation()}` },
        shareTW(){ return `https://twitter.com/intent/tweet?text=${this.getLocation()}` },
        shareVK(){ return `http://vkontakte.ru/share.php?url=${this.getLocation()}` }
    }
}

export default mixin