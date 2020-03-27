import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {ToastController} from 'ionic-angular';
import {AlertController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  title = "Grocery";

  items = [
  {
    name: "Apples",
    quantity: 2,
    price: 2.99
  },{
    name: "Bananas",
    quantity: 1,
    price: 1.49
  },{
    name: "Cantelope",
    quantity: 1,
    price: 1.99
  },{
    name: "Dragon Fruit",
    quantity: 1,
    price: 3.00
  },
];

  constructor(public navCtrl: NavController, public toastCtrl: ToastController, public alertCtrl: AlertController) {

  }

  removeItem(item, index){
    console.log("Item Removed: ", item);
    const toast = this.toastCtrl.create({
      message: 'Item Removed: ' +item.name + " ...",
      duration: 3000
    });
    toast.present();

    this.items.splice(index,1);
  }

  addItem() {
console.log("Add item");
this.showAddItemPrompt();
  }
  showAddItemPrompt() {
    const prompt = this.alertCtrl.create({
      title: 'Add Item',
      message: "Enter item info.",
      inputs: [
        {
          name: 'name',
          placeholder: 'Name'
        }, {
          name: 'quantity',
          placeholder: 'Quantity'
        }, {
          name: 'price',
          placeholder: 'Price'
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Save',
          handler: item => {
            console.log('Saved clicked', item);
            this.items.push(item);
          }
        }
      ]
    });
    prompt.present();
  }
}


