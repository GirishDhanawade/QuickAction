import { LightningElement, api } from 'lwc';

export default class TestLWC extends LightningElement {
    @api actionName;

    connectedCallback() {
        console.log("Action nsme is"+this.actionName);
        if(this.actionName === 'Test1') {
            console.log('Test1 action clicked!');
        }else if (this.actionName === 'Test2') {
            console.log('Test2 action clicked!');
        }
    }
}
