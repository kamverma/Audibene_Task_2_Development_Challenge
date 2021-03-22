import { LightningElement } from 'lwc';

export default class ListItem extends LightningElement {
    details = [
        {
            id: 1,
            manufacturer: "SIGNIA",
            productName: "Pure 312 7NX",
            design: "RIC",
            level: "7th",
            price: 3025
        },
        {
            id: 2,
            manufacturer: "SIGNIA",
            productName: "Pure 312 7X",
            design: "RIC",
            level: "7th",
            price: 3135
        },
        {
            id: 3,
            manufacturer: "SIGNIA",
            productName: "Pure 312 7X T",
            design: "RIC",
            level: "7th",
            price: 3135
        },
        {
            id: 4,
            manufacturer: "SIGNIA",
            productName: "Pure Charge & Go",
            design: "RIC",
            level: "1",
            price: 1375
        }
    ]
}