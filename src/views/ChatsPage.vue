<template>
  <ion-page>
    <ion-header class="ion-no-border">
      <ion-toolbar>
        <ion-title>Home</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">
      <ion-list>
        <ion-item v-for="item in items" v-bind:key="item.key">
          <ion-avatar slot="start">
            <img :src="item.avatar" alt="avatar" />
          </ion-avatar>
          <ion-label>{{ item.name }}</ion-label>
        </ion-item>
      </ion-list>
      <ion-infinite-scroll @ionInfinite="ionInfinite">
        <ion-infinite-scroll-content></ion-infinite-scroll-content>
      </ion-infinite-scroll>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { InfiniteScrollCustomEvent, IonAvatar, IonContent, IonHeader, IonInfiniteScroll, IonInfiniteScrollContent, IonItem, IonLabel, IonList, IonPage, IonTitle, IonToolbar } from '@ionic/vue';
import { reactive } from 'vue';

const items: { key: number; name: string; avatar: string }[] = reactive([]);

const generateItems = () => {
  const count = items.length + 1;
  for (let i = 0; i < 50; i++) {
    items.push({ key: count + i, name: `Item ${count + i}`, avatar: `https://picsum.photos/80/80?random=${count + i}` });
  }
};

const ionInfinite = (event: InfiniteScrollCustomEvent) => {
  generateItems();
  setTimeout(() => event.target.complete(), 500);
};

generateItems();
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
