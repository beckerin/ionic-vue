<template>
  <ion-app>
    <ion-content :fullscreen="true">
      <ion-router-outlet />
    </ion-content>
    <MainFooter />
  </ion-app>
</template>

<script setup lang="ts">
import { IonApp, IonRouterOutlet } from '@ionic/vue';
import MainFooter from './components/MainFooter.vue';
</script>
