import { Component } from '@angular/core';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import { fa2 } from '@fortawesome/free-solid-svg-icons';
import { fa3 } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  imgBand = '/assets/img/logos/master-card.png';
  title = 'checkout_project';
  corBorda = '';  corBorda2 = '';  corBorda3 = '';  corBorda4 = '';  corBorda5 = '';  corBorda6 = '';
  msgNum='';  msgNom='';  msgVal='';  msgCvv='';  msgCpf='';  msgNpa='';
  fnumcartao = '';
  numeroCard = 'XXXXX XXXXX XXXXX XXXXX';  nomeCard = '';  validadeCard = '';  cvvCard = '';  cpfCard = '';  npCard = '0';
  iconArrow = faArrowLeft;   iconCheck = faCircleCheck;
  icone2 = fa2;   icone3 = fa3;

  onKeyUp(event: any){
    this.numeroCard = event.target.value;
    if (this.numeroCard.indexOf('4')==0) {
      this.imgBand = '/assets/img/logos/visa-card.png'
    } else if (this.numeroCard.indexOf('5')==0) {
      this.imgBand = '/assets/img/logos/master-card.png'
    } else {
    }
  }

  onKeyUpNome(event: any){
    this.nomeCard = (event.target.value).toUpperCase();
  }

  onKeyUpValidade(event: any){
    this.validadeCard = (event.target.value).toUpperCase();
  }

  onKeyUpCvv(event: any){
    this.cvvCard = (event.target.value).toUpperCase();
  }

  onKeyUpCpf(event: any){
    this.cpfCard = (event.target.value);
  }

  onChangeNp(event: any){
    this.npCard = (event.target.value);
  }

  onClickMe() {
    if ((this.numeroCard === '55555 55555 55555 55555') || (this.numeroCard === '55555555555555555555')){
      this.corBorda = '-success'
      this.msgNum = '';
    } else {
      this.msgNum = 'Número do cartão inválido';
      this.corBorda = '-error'
    }

    if (this.nomeCard === 'WALTER J. WHITE') {
      this.corBorda2 = '-success'
      this.msgNom = '';
    } else {
      this.msgNom = 'Insira seu nome completo';
      this.corBorda2 = '-error'
    }

    if (this.validadeCard === '01/28') {
      this.corBorda3 = '-success'
      this.msgVal = '';
    } else {
      this.msgVal = 'Data inválida';
      this.corBorda3 = '-error'
    }

    if (this.cvvCard === '123') {
      this.corBorda4 = '-success'
      this.msgCvv = '';
    } else if (this.cvvCard === '') {
      this.corBorda4 = '-error'
      this.msgCvv = 'CVV não informado';
    } else {
      this.msgCvv = 'CVV inválido';
      this.corBorda4 = '-error'
    }

    if (this.cpfCard === '132.458.125-19') {
      this.corBorda5 = '-success'
      this.msgCpf = '';
    } else if (this.cvvCard === '13245812519') {
      this.corBorda5 = '-success'
      this.msgCpf = '';
    } else {
      this.msgCpf = 'CPF inválido';
      this.corBorda5 = '-error'
    }

    if (this.npCard === '0') {
      this.corBorda6 = '-error'
      this.msgNpa = 'Escolha o número de parcelas';
    } else {
      this.corBorda6 = '-success'
      this.msgNpa = '';
    } 

    

  }
  
}
