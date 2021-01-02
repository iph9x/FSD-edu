import * as $ from 'jquery';
import './assets/js/jquery.inputmask.min.js';
import './styles/main.scss';

let maskDate = document.getElementsByClassName('date-dropdown__input');
for (let i = 0; i < maskDate.length; i++) {
  Inputmask({alias: "datetime", inputFormat: "dd.mm.yyyy", "placeholder": "ДД.ММ.ГГГГ"}).mask(maskDate[i]);
}

let mask = document.getElementsByClassName('masked-text-field');
Inputmask({alias: "datetime", inputFormat: "dd.mm.yyyy", "placeholder": "ДД.ММ.ГГГГ"}).mask(mask);