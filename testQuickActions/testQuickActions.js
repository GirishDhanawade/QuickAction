import { LightningElement, api, wire } from 'lwc';
import { CurrentPageReference } from 'lightning/navigation';

export default class MyComponent extends LightningElement {
    @api recordId;

    @wire(CurrentPageReference)
    parseParam(currentPageReference) {
        if (currentPageReference.type === 'standard__quickAction') {
            let quickActionPath = currentPageReference.attributes.apiName;
            console.log('quickActionPath'+quickActionPath);
            if (quickActionPath.includes('Test1')) {
                console.log('Test1 is clicked.');
            } else if (quickActionPath.includes('Test2')) {
                console.log('Test2 is clicked.');
            }
        }
    }
}



