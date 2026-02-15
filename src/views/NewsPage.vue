<template>
  <ion-page>
    <ion-header class="ion-no-border">
      <ion-toolbar>
        <ion-title>News</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/vue';

</script>

<style scoped>
ion-col {
  display: flex;
  justify-content: center;
  align-items: center;
}

ion-button {
  padding: 0;
  margin: 0;
}
</style>
