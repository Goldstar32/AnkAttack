var app = new Vue({
    el: '#app',
    data: {
        duckX: -70,
        duckY: -70,
        ducksShot: -1,
        scene: "menu",
    },

    mounted() {

    },

    computed: {
        duckPositionStyle: function() {
            return `top:${this.duckY}px;left:${this.duckX}px`
        }
    },

    methods: {

        setScene(scene) {
            this.scene = scene
        },

        startGame() {
            this.setScene("gameInProgress")
            setTimeout(() => this.rndDuckPos(), 100)
        },

        backToMenu() {
            if (this.ducksShot === 32) {
                this.scene = "menu"
                this.ducksShot = -1
            }
        },

        rndDuckPos() {
            var screenWitdth = this.$refs.duckContainer.clientWidth;
            var screenHeight = this.$refs.duckContainer.clientHeight;
            var duckSize = 140;
            var minX = 0 + duckSize / 2
            var minY = 0 + duckSize / 2
            var maxX = screenWitdth - duckSize / 2
            var maxY = screenHeight - duckSize / 2
            var x = this.getRndInteger(minX, maxX)
            var y = this.getRndInteger(minY, maxY)
            this.duckX = x
            this.duckY = y
            this.ducksShot += 1
            this.backToMenu()
        },

        getRndInteger(min, max) {
            return Math.floor(Math.random() * (max - min)) + min;
        },
    }
});
