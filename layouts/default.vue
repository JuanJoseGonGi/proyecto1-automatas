<template>
  <div class="container">
    <b-navbar>
      <template slot="end">
        <b-navbar-item v-for="(item, key) of items" :key="key">
          <nuxt-link :to="item.to" exact-active-class="is-active">
            {{ item.title }}
          </nuxt-link>
        </b-navbar-item>
      </template>
    </b-navbar>

    <nuxt />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'

@Component({
  data() {
    return {
      items: [
        {
          title: 'Inicio',
          to: { name: 'index' }
        }
      ]
    }
  }
})
export default class DefaultLayout extends Vue {}
</script>
