var app = new Vue({
    el: '#app',
    data: {
        duckX: 300,
        duckY: 300,
        ducksShot: 0,
    },

    mounted() {

    },

    computed: {
        duckPositionStyle: function() {
            return `top:${this.duckY}px;left:${this.duckX}px`
        }
    },

    methods: {

        rndDuckPos() {
            var x = this.getRndInteger(300, 500)
            var y = this.getRndInteger(300, 500)
            this.duckX = x
            this.duckY = y
            this.ducksShot += 1
        },

        getRndInteger(min, max) {
            return Math.floor(Math.random() * (max - min)) + min;
        },
    }
});
