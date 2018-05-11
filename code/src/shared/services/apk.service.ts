import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import {Platform} from 'ionic-angular';
import { NetworkService } from '../../shared/services/network.service';

import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer';
import { File } from '@ionic-native/file';
import { FileOpener } from '@ionic-native/file-opener';

import { ApplicationService } from '../../shared/services/application.service';

@Injectable()
export class ApkService {
    constructor(private netSrv: NetworkService,
                private transfer: FileTransfer,
                private file: File,
                private fileOpener: FileOpener,
                private appSrv: ApplicationService,
                private platform: Platform) {
        console.log('ApkService contructor')
    }

    downloadApk(apkname, url) {
        this.appSrv.showLoading();
        const fileTransfer: FileTransferObject = this.transfer.create();
        fileTransfer.download(url, this.file.dataDirectory + apkname + '.apk').then((entry) => {
            this.appSrv.hideLoading();
            console.log('download complete: ' + entry.toURL());
            this.fileOpener.open(this.file.dataDirectory + apkname + '.apk', 'application/vnd.android.package-archive')
                .then(() => {
                    console.log('File is opened');
                    this.platform.exitApp();;
                })
                .catch(e => console.log('Error opening file', e));           
        }, (error) => {
            this.appSrv.hideLoading();
        });
    }
}