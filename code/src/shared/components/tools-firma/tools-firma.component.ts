import { Component, ViewChild, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

import { SignaturePad } from 'angular2-signaturepad/signature-pad';

const noop = () => {
};

export const CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR: any = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => ToolsFirmaComponent),
    multi: true
};


@Component({
    selector: 'tools-firma',
    templateUrl: 'tools-firma.component.html',
    providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR]
})
export class ToolsFirmaComponent implements ControlValueAccessor {

    /////////////////////////////////////////////////
    //The internal data model
    private innerValue: any = '';

    //Placeholders for the callbacks which are later provided
    //by the Control Value Accessor
    private onTouchedCallback: () => void = noop;
    private onChangeCallback: (_: any) => void = noop;

    //get accessor
    get value(): any {
    console.log('get value:');
        return this.innerValue;
    };

    //set accessor including call the onchange callback
    set value(v: any) {
    console.log('set value:');
        if (v !== this.innerValue) {
            console.log('v!=innervalue');
            this.innerValue = v;
            this.onChangeCallback(v);
        }
    }

    //From ControlValueAccessor interface
    writeValue(value: any) {
    console.log('writeValue');
        if (value !== this.innerValue) {
            this.innerValue = value;
        }
    }

    //From ControlValueAccessor interface
    registerOnChange(fn: any) {
    console.log('registerOnChange');
        this.onChangeCallback = fn;
    }

    //From ControlValueAccessor interface
    registerOnTouched(fn: any) {
    console.log('regisgerOnTouched');
        this.onTouchedCallback = fn;
    }
    /////////////////////////////////////////////////







    @ViewChild(SignaturePad) signaturePad: SignaturePad;

    showPad: boolean = false;
    imgFirma: any;

    signaturePadOptions: Object = {
        'minWidth': 2,
        'canvasWidth': 280,
        'canvasHeight': 300
    };

    constructor() {
        console.log('ToolsFirmaComponent constructor');
    }

    // ngAfterViewInit() {
    //     // this.signaturePad is now available
    //     this.signaturePad.clear(); // invoke functions from szimek/signature_pad API
    //     this.signaturePad.set('minWidth', 5); // set szimek/signature_pad options at runtime
    // }


    firmar() {
        this.showPad = true;
    }

    completar() {
        this.showPad = false;
        this.imgFirma = this.signaturePad.toDataURL();
        this.innerValue = this.imgFirma;
        this.onChangeCallback(this.innerValue);
    }

    limpiar() {
        this.signaturePad.clear();
    }

    cancelar() {
        this.limpiar();
        this.showPad = false;
    }
}


/*
import { Component, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

const noop = () => {
};

export const CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR: any = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => CustomInputComponent),
    multi: true
};

@Component({
    selector: 'custom-input',
    template: `<div class="form-group" style="background:lightblue;padding:20px">
                    <label><ng-content></ng-content>
                        <input [(ngModel)]="value"  
                                class="form-control" 
                                (blur)="onBlur()" >
                    </label>
                    <button (click)="cambiarVal()">Cambiar Valor</button>
                </div>`,
    providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR]
})



export class CustomInputComponent implements ControlValueAccessor {

    //The internal data model
    private innerValue: any = '';

    //Placeholders for the callbacks which are later provided
    //by the Control Value Accessor
    private onTouchedCallback: () => void = noop;
    private onChangeCallback: (_: any) => void = noop;

    //get accessor
    get value(): any {
      console.log('get value:');
        return this.innerValue;
    };

    //set accessor including call the onchange callback
    set value(v: any) {
      console.log('set value:');
        if (v !== this.innerValue) {
            console.log('v!=innervalue');
            this.innerValue = v;
            this.onChangeCallback(v);
        }
    }

    cambiarVal(){
      console.log('cambia Val desde: ', this.innerValue);
      var x = "Hola Mundo";
      this.innerValue = x;
      this.onChangeCallback(x);
    }
    //Set touched on blur
    onBlur() {
      console.log('blur');
        this.onTouchedCallback();
    }

    //From ControlValueAccessor interface
    writeValue(value: any) {
      console.log('writeValue');
        if (value !== this.innerValue) {
            this.innerValue = value;
        }
    }

    //From ControlValueAccessor interface
    registerOnChange(fn: any) {
      console.log('registerOnChange');
        this.onChangeCallback = fn;
    }

    //From ControlValueAccessor interface
    registerOnTouched(fn: any) {
      console.log('regisgerOnTouched');
        this.onTouchedCallback = fn;
    }

}


*/