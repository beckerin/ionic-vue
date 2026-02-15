<template>
  <ion-footer :translucent="true">
    <ion-toolbar>
      <ion-grid>
        <ion-row>
          <ion-col>
            <ion-button class="button-column" mode="ios" router-link="/news" fill="clear">
              <ion-grid>
                <ion-row>
                  <ion-col>
                    <ion-icon :ios="repeatOutline" :md="repeatOutline"></ion-icon>
                  </ion-col>
                </ion-row>
                <ion-row>
                    Atualização
                </ion-row>
              </ion-grid>
            </ion-button>
          </ion-col>
          <ion-col>
            <ion-button class="button-column" mode="ios" router-link="/calls" fill="clear">
              <ion-grid>
                <ion-row>
                  <ion-col>
                    <ion-icon :ios="callOutline" :md="callOutline"></ion-icon>
                  </ion-col>
                </ion-row>
                <ion-row>
                  Chamadas
                </ion-row>
              </ion-grid>
            </ion-button>
          </ion-col>
          <ion-col>
            <ion-button class="button-column" mode="ios" router-link="/" fill="clear" router-direction="root">
              <ion-grid>
                <ion-row>
                  <ion-col>
                    <ion-icon :ios="chatbubbleOutline" :md="chatbubbleOutline"></ion-icon>
                  </ion-col>
                </ion-row>
                <ion-row>
                  Chat
                </ion-row>
              </ion-grid>
            </ion-button>
          </ion-col>
          <ion-col>
            <ion-button class="button-column" mode="ios" router-link="/settings" fill="clear">
              <ion-grid>
                <ion-row>
                  <ion-col>
                    <ion-icon :ios="cogOutline" :md="settingsOutline"></ion-icon>
                  </ion-col>
                </ion-row>
                <ion-row>
                  Configurações
                </ion-row>
              </ion-grid>
            </ion-button>
          </ion-col>
        </ion-row>
      </ion-grid>
    </ion-toolbar>
  </ion-footer>
</template>
<script setup lang="ts">
import { IonButton, IonCol, IonFooter, IonGrid, IonIcon, IonRow, IonToolbar } from '@ionic/vue';
import { callOutline, chatbubbleOutline, cogOutline, repeatOutline, settingsOutline } from 'ionicons/icons';
</script>
<style lang="css">
ion-col {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  padding: 0;
}
.button-column {
  height: 100px;
  border-radius: 8px;
  margin: 0;
  padding: 0;
}
</style>