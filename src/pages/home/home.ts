import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  contatos = [
    {
    id: '1',
    nome: 'Gustavin Da Leste',
    telefone: '40028922',
    email: 'gustavo@gmail.com'
    },
    {
    id: '2',
    nome: 'Gustavin Da Sul',
    telefone: '40038933',
    email: 'Nakzera@gmail.com'
    },
    {
    id: '3',
    nome: 'Gustavon Da Oeste',
    telefone: '40048944',
    email: 'Nakzin@gmail.com'
    },
    {
    id: '4',
    nome: 'Gustavon Do Norte',
    telefone: '40058955',
    email: 'NakzCorp@gmail.com'
    }
  ]
  constructor(public navCtrl: NavController) {

  }

  onItemClick(contato){
    console.log('item.click', contato);
  }

}