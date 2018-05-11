import { Platform } from 'ionic-angular';
import { Injectable } from '@angular/core';
import { Uid } from '@ionic-native/uid';
import { AndroidPermissions } from '@ionic-native/android-permissions';
import { AppVersion } from '@ionic-native/app-version';
import { Device } from '@ionic-native/device';
import { forkJoin } from 'rxjs/observable/forkJoin';


@Injectable()
export class HardwareService {
  private vars: any = {};

  constructor(private uuid: Uid, private androidPermissions: AndroidPermissions, private appVersion: AppVersion, private device: Device, private platform: Platform) {
    console.log("HardwareService constructor ");
  }

  async getImei() {
    const { hasPermission } = await this.androidPermissions.checkPermission(
      this.androidPermissions.PERMISSION.READ_PHONE_STATE
    );

    if (!hasPermission) {
      const result = await this.androidPermissions.requestPermission(
        this.androidPermissions.PERMISSION.READ_PHONE_STATE
      );

      if (!result.hasPermission) {
        throw new Error('Permissions required');
      }

      // ok, a user gave us permission, we can get him identifiers after restart app
      return;
    }

    return this.uuid.IMEI
  }

  getAppName() {
    return this.appVersion.getAppName();
  }

  getAppPackageName() {
    return this.appVersion.getPackageName();
  }

  getAppVersionCode() {
    return this.appVersion.getVersionCode();
  }

  getAppVersionNumber() {
    if(((this.platform.is('mobileweb') == true) || (this.platform.is('core') == true)))
      return new Promise(resolve => {
            resolve("web-browser");
          });
    return this.appVersion.getVersionNumber();
  }

  getDeviceModel() {
    return new Promise((resolve, reject) => {resolve(this.device.model)});
  }
  getDeviceManufacturer() {
    return new Promise((resolve, reject) => {resolve(this.device.manufacturer)});
  }

  getDevicePlatform() {
    return new Promise((resolve, reject) => {resolve(this.device.platform)});
  }

  getDeviceSerial() {
    return new Promise((resolve, reject) => {resolve(this.device.serial)});
  }

  getDeviceUuid() {
    return new Promise((resolve, reject) => {resolve(this.device.uuid)});
  }

  getDeviceVersion() {
    return new Promise((resolve, reject) => {resolve(this.device.version)});
  }

  getDeviceData() {
    return forkJoin(
      this.getAppName(),
      this.getAppPackageName(),
      this.getAppVersionCode(),
      this.getAppVersionNumber(),
      this.getDeviceManufacturer(),
      this.getDeviceModel(),
      this.getDevicePlatform(),
      this.getDeviceVersion(),
      this.getDeviceSerial(),
      this.getDeviceUuid()
    )

  }
}