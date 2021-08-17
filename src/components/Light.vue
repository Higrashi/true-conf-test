<template>
    <div :style="{'backgroundColor': isActive ? color : disabledColor}"
          class="light-container"
          :class="count <= 3 && isActive ? 'animated': ''"  
    >
    <div v-if="isActive" class='timer'>
        {{count}}
    </div>
    
    </div>
</template>

<script>
export default {
    name: "Light",
    props: {
        color: String,
        name: String,
        disabledColor: String,
        isActive: Boolean,
        duration: Number
    },
   data: function(){
        return {
           count: this.duration,
           time: null
        }
     },
    
    destroyed() {
      this.stop()
    },
    methods: {
       startTimer(){
            this.timer = setInterval(() => {
                this.count -= 1
            },1000)
        },
        stopTimer(){
            clearInterval(this.timer)
        }
    },
    watch:{
    
    isActive(val,oldVal){
        if(this.isActive) {
           this.startTimer()
        } else {
            this.stopTimer()
            this.$set(this, 'count', this.duration)
        } 
    },
    count(time){
        if(time === 0){
            this.stopTimer()
            this.$set(this, 'count', this.duration)
            this.$emit('updateStatus', {name: this.name, status: true})
        }
    }
    
   
    } 


}
</script>

<style scoped>

    .light-container {
        width: 200px;
        height: 200px;
        border: 1px solid black;
        border-radius: 50%;
        margin: 10px;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .timer {
        color: white;
        font-size: 5rem;
    }

    .animated {
    -webkit-animation: flash linear 1s infinite;
	animation: flash linear 1s infinite;
    }

    @-webkit-keyframes flash {
        0% { opacity: 1; } 
        50% { opacity: .1; } 
        100% { opacity: 1; }
    }
    @keyframes flash {
        0% { opacity: 1; } 
        50% { opacity: .1; } 
        100% { opacity: 1; }
    }
    
    @media screen and(max-width: 700px) {
        .light-container {
            width: 150px;
            height: 150px;
        
        }
    }
</style>
