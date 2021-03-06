import { NgModule } from '@angular/core';
import { CacheService } from './cache.service';
import { IonicStorageModule } from '@ionic/storage';
var CacheModule = (function () {
    function CacheModule() {
    }
    CacheModule.forRoot = function () {
        return {
            ngModule: CacheModule,
            providers: [
                CacheService
            ]
        };
    };
    return CacheModule;
}());
export { CacheModule };
CacheModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    IonicStorageModule.forRoot({
                        name: '__ionicCache',
                        driverOrder: ['sqlite', 'websql', 'indexeddb']
                    })
                ]
            },] },
];
/** @nocollapse */
CacheModule.ctorParameters = function () { return []; };
//# sourceMappingURL=cache.module.js.map