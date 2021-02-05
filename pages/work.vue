<template>
  <div class="work">
      <h1>Work</h1>
  
      <v-row class="works">
        <v-col
        cols="12"
        md="3"
        v-for="work in works" :key="work.id"
        class="work"
        >
            <v-card
                class="mx-auto"
                max-width="400"
            >
                <v-img
                class="white--text align-end"
                height="200px"
                :src="require(`~/assets/img/${work.img}`)"
                >
                <v-card-title>{{ work.title }}</v-card-title>
                </v-img>

                <v-card-subtitle class="pb-0">
                Number {{ work.id }}
                </v-card-subtitle>

                <v-card-text class="text--primary">
                <div>{{ work.name }}</div>

                <div>Whitsunday Island, Whitsunday Islands</div>
                </v-card-text>

                <v-card-actions>
                <v-btn
                    color="orange"
                    text
                    :to= "work.to"
                >
                    Voir
                </v-btn>

                </v-card-actions>
            </v-card>
        </v-col>
    </v-row>

  </div>
</template>

<script>
export default {
    data() {
        return {
            works: [
            {
                id: 1,
                img: 'weather.jpg',
                title: 'Station météo',
                name: '',
                to: '/station-meteo',
            },
            {
                id: 2,
                img: 'weather.jpg',
                title: 'Site Food',
                name: '',
                to: '',
            },
            {
                id: 3,
                img: 'weather.jpg',
                title: 'Site Food',
                name: '',
                to: '',
            },
            {
                id: 4,
                img: 'weather.jpg',
                title: 'Site Food',
                name: '',
                to: '',
            },
            {
                id: 5,
                img: 'weather.jpg',
                title: 'Site Food',
                name: '',
                to: '',
            },
            {
                id: 6,
                img: 'weather.jpg',
                title: 'Site Food',
                name: '',
                to: '',
            },
            {
                id: 7,
                img: 'weather.jpg',
                title: 'Site Food',
                name: '',
                to: '',
            },
            {
                id: 8,
                img: 'weather.jpg',
                title: 'Site Food',
                name: '',
                to: '',
            },
            {
                id: 9,
                img: 'weather.jpg',
                title: 'Site Food',
                name: '',
                to: '',
            },
            {
                id: 10,
                img: 'weather.jpg',
                title: 'Site Food',
                name: '',
                to: '',
            }
            ],
        }
    }
}
</script>

<style lang="scss" scoped>
.work{
    h1{
        margin-left: 50px;
        margin-top: 3rem;
        margin-bottom: 2rem;
        font-size: 2.5rem;

    }
    .works{
        margin: 0px 50px;
    }
    .work{
        padding-left: 0;
    }
}
</style>