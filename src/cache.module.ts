import { NgModule, ModuleWithProviders } from '@angular/core';
import { CacheService } from './cache.service';
import { IonicStorageModule } from '@ionic/storage';

@NgModule({
  imports: [
    IonicStorageModule.forRoot({
      name: '__ionicCache',
      driverOrder: ['sqlite', 'websql', 'indexeddb']
    })
  ]
})
export class CacheModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: CacheModule,
      providers: [
        CacheService
      ]
    };
  }
}
