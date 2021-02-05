<template>
  <div class="station">
      <h1>Station Météo</h1>
      <v-row>
          <v-col
          cols="12"
          md="4"
          sm="6"
          offset-md="4"
          offset-sm="3"
          >
              <v-text-field label="Ville"></v-text-field>
          </v-col>
      </v-row>
        {{ weather }}
      <v-row>
            <v-col
            cols="12"
            md="6"
            sm="8"
            offset-md="3"
            offset-sm="2"
            >
                <v-card
                    class="mx-auto"
                >
                    <v-list-item two-line>
                    <v-list-item-content>
                        <v-list-item-title class="headline">
                        {{ city.name }}
                        </v-list-item-title>
                        <v-list-item-subtitle>{{ dateBuilder(new Date) }}, {{ weather.weather[0].description }}</v-list-item-subtitle>
                    </v-list-item-content>
                    </v-list-item>

                    <v-card-text>
                    <v-row align="center">
                        <v-col
                        class="display-3"
                        cols="6"
                        >
                        {{ Math.round(weather.main.temp) }}&deg;C
                        </v-col>
                        <v-col cols="6">
                        <v-img
                            src="https://cdn.vuetifyjs.com/images/cards/sun.png"
                            alt="Sunny image"
                            width="92"
                        ></v-img>
                        </v-col>
                    </v-row>
                    </v-card-text>

                    <v-list-item>
                    <v-list-item-icon>
                        <v-icon>mdi-send</v-icon>
                    </v-list-item-icon>
                    <v-list-item-subtitle>{{ Math.round(weather.wind.speed*3.6) }} km/h</v-list-item-subtitle>
                    </v-list-item>

                    <v-list-item>
                    <v-list-item-icon>
                        <v-icon>mdi-cloud-download</v-icon>
                    </v-list-item-icon>
                    <v-list-item-subtitle>{{weather.main.humidity}}%</v-list-item-subtitle>
                    </v-list-item>


                    <v-card-actions>
                    <v-btn text>
                        Full Report
                    </v-btn>
                    </v-card-actions>
                </v-card>
          </v-col>
      </v-row>
  </div>
</template>

<script>
import axios from 'axios'

export default {
    data() {
        return{
            city: {
                name: 'Lyon',
                lat: '4.5833',
                lon: '45.75',
            },
            query: '',
            url_base: 'https://api.openweathermap.org/data/2.5/',
            key: '1b9b5262c0c8b1f5630867880f70ec4c',
            weather: {},
            daily: {},
        }
    },
    mounted(){
        axios
        .get(`${this.url_base}weather?q=${this.city.name}&lang=fr&units=metric&appid=${this.key}`)
        .then((reponse) => {
            this.weather = reponse.data;
            this.city.lat = reponse.data.coord.lat;
            this.city.lon = reponse.data.coord.lon;
        });

        axios
        .get(`${this.url_base}onecall?lat=${this.city.lat}&lon=${this.city.lon}&exclude=current,minutely,hourly,alerts&lang=fr&units=metric&appid=${this.key}`)
        .then((reponse) => {
            this.daily = reponse.data;
        });
        
    },
    methods:{
        fetchWeather (e){
            if (e.key == "Enter"){
                axios
                .get(`${this.url_base}weather?q=${this.query}&lang=fr&appid=${this.key}`)
                .then((reponse) => {
                    this.city.name = reponse.data.name;
                    this.city.lat = reponse.data.coord.lat;
                    this.city.lon = reponse.data.coord.lon;
                });
            }
        },
        dateBuilder(d){
            let a = new Date(d);
            let months = ['Jan','Fev','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
            let year = a.getFullYear();
            let month = months[a.getMonth()];
            let date = a.getDate();

            let time = date + ' ' + month + ' ' + year;
            return time;
        },
    }
}
</script>

<style>

</style>