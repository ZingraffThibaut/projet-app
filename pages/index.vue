<template>
  <div class="home">
    <v-row class="presentation">
        <v-col
          cols="12"
          md="6"
        >

          <div class="bienvenue">
            <span>Hi,</span>
          </div>

          <div>
            <div class="titre">
              <span>I'm </span>
              <span>Développer Front end.</span>
              <br>
              <span>based in Lyon.</span>
              <div class="circle"></div>
              
            </div>
          </div>

        </v-col>
        <v-col
          cols="12"
          md="6"
          class="col-right"
        >
          <illustrations name="developper" class="developper"></illustrations>
        </v-col>
      </v-row>
      <v-row class="about">
        <v-col>
          <div class="titre">
            A propos :
          </div>
          <div class="content">
            
          </div>
        </v-col>
      </v-row>
  </div>
</template>

<script>
import illustrations from '@/components/illustrations.vue';

export default {
  components: {
      illustrations
  }
}
</script>

<style lang="scss" scoped>
.home{
  font-size: 2rem;
  font-weight: 300;

  .row{
    margin: 0;
    padding-left: 5rem;
  }
}

.presentation {
  margin-top: 25vh !important;
  @media (max-width:960px) {
    margin-top: 10vh;
    .col{
      margin-top: 3vh;
    }
  }

  .bienvenue{
    margin-bottom: -20px;
    position: relative;
    z-index: 1;
  }
  
  .titre{
  position: relative;
  z-index: 0;
  }
  .titre span:nth-child(2){
    font-size: 3rem;
    font-weight: 500;
  }

  .circle{
    position: absolute;
    background-color: rgba(220, 220, 220, 0.75);
    height: 50vw;
    width: 50vw;
    border-radius: 50%;
    top: -100px;
    left: -350px;
    z-index: -1;
    transition: 0.2s ease-out;
    @media (max-width:960px){
      transform: scale(1.2);
      top: -200px;
      left: -350px;
    }
    @media (max-width:670px){
      top: -100px;
      left: -250px;
      transform: scale(1.4);
    }
  }

  .col-right {
    @media (max-width:960px){
      margin-top: 5rem;
      text-align: center
    } 
    .developper{
      width: 100%;
      margin-top: -20vh;
      margin-left: -5%;
      @media (max-width:960px) {
        height: 100%;
        margin-top: 2rem;
        width: 80%;
        margin: 0;
      }
    }
  }
 

}

.about{
  position: absolute;
  margin-top: 15rem !important;
  
}
</style>