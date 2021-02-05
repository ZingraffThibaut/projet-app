<template>
  <v-app>
    <!-- Left Menu -->
    <v-navigation-drawer
      v-model="drawer"
      disable-resize-watcher
      :clipped="clipped"
      fixed
      app
    >
      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <!-- Top bar -->
    <v-app-bar
      :clipped-left="clipped"
      app
      flat
      
      color="rgb(255,255,255)"
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />

      <v-toolbar-title v-text="title" />
      <v-spacer />
      <v-btn
        text
        v-for="(log, i) in logs"
        :key="i"
        :to="log.to"
      >
        {{log.title}}
      </v-btn>
    </v-app-bar>

    <!-- Content -->
    <v-main>
      <nuxt />
    </v-main>

  
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      clipped: true,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'mdi-home',
          title: 'Welcome',
          to: '/'
        },
        {
          icon: 'mdi-briefcase',
          title: 'Work',
          to: '/work'
        },
      ],
      logs: [
        {
          icon: 'mdi-home',
          title: 'log in',
          to: '/login'
        },
        {
          title: 'Sing up',
          to: '/singup'
        },
      ],
      title: 'Thibaut Zingraff'
    }
  }
}
</script>

<style lang="scss">
#app{
  font-family: 'Montserrat', sans-serif;
}

</style>