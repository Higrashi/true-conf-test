<template>
  <div id="home">
  
  <router-link to='/red'>
      <Light name='red'
            color='red'
            disabledColor="#570303"
            :isActive="lights.red"
            :duration='10'
            @updateStatus="updateIsDone($event)"
      />
     </router-link>
    
    <router-link to='/yellow'>
      <Light name='yellow'
            color='yellow'
            disabledColor="#a1b811"
            :isActive="lights.yellow"
            :duration='3'
            @updateStatus="updateIsDone($event)"
      />
    </router-link>
    
     <router-link to='/green'>
      <Light name='green'
            color='#0bbf1d'
            disabledColor="#056608"
            :isActive="lights.green"  
            :duration='15'
            @updateStatus="updateIsDone($event)"
      />
     </router-link>

  </div>
</template>

<script>
import Light from '../components/Light.vue'

export default {

    data(){
      return {
        isDone: false,
        lights: {
          red: false,
          yellow: false,
          green: false
        },
        paths: ['red','yellow','green']
      }
     
    },
    mounted(){
     const currentPath = this.$router.history.current
     
     if(currentPath.path === '/') {
       this.$router.push('/red')
     } else {
        this.$set(this,'lights', {
           ...this.lights,
           [currentPath.name]: true
         })
     }
     
    },
    components:{
      Light
    },
    methods: {
      updateIsDone(light){
        if(this.paths.indexOf(light.name) === 2) {
          this.$set(this, 'paths', this.paths.reverse())
        }
        let nextStep = this.paths.indexOf(light.name) + 1
        this.$set(this,'lights', {
          ...this.lights,
          [light.name]: false
        })
        this.$router.push(this.paths[nextStep])
       
      },
     
    },
    watch:{
       $route(to, from) {
         this.$set(this, 'lights', {
           ...this.lights,
           [from.name]: false,
           [to.name]: true
         })
        
       }
     } 
}

</script>


<style  scoped>
#home {
  display: flex;
  flex-direction: column;
  align-content: center;
  background: rgb(37, 36, 36);
  padding: 40px;
  border: 10px solid rgb(99, 96, 96);
  border-radius: 20px;
  margin-top: 5%;
}

a {
  text-decoration: none;
}

</style>
