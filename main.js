var vueInstance = new Vue({
    el: '#app',
    data: {
        title: 'Áo thun nam ',
        url: 'https://vuejs.org/',
        target: '_blank',
        price: 20000,
        sale: 0.1,
        selectedProduct: 2,
        cardNumber: 1,
        listProductDetail: [{
            image: './images/red.jpg',
            quantity: 0,
            textColor: 'Màu Đỏ'
        }, {
            image: './images/blue.jpg',
            quantity: 8,
            textColor: 'Màu Xanh'
        }, {
            image: './images/black.jpg',
            quantity: 2,
            textColor: 'Màu Đen'
        }, ],
        listDesc: [
            'lorem 1',
            'lorem 2',
            'lorem 3',

        ],

    },
    methods: {
        handleClickColor(e, index) {
            this.selectedProduct = index;
            // console.log(e, index, this);
        },
        classActive(index) {
            return {
                active: this.selectedProduct === index
            }
        },
        handleAddToCart(e) {
            if (this.cardNumber + 1 > this.getProduct.quantity) {
                alert('So luong khong du');
            } else {
                this.cardNumber = this.cardNumber + 1;
            }
            console.log(e.target)
        }
    },
    computed: {
        formatOriginalPrice() {
            var number = this.price;
            return new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'VND' }).format(number);
        },
        formatFinalPrice() {
            var number = this.price - this.sale * this.price;
            return new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'VND' }).format(number);
        },
        getProduct() {
            let index = this.selectedProduct;
            return this.listProductDetail[index];
        }
    }
});