import { sayHello } from './util';
import '../css/style.scss';
import image from '../images/webpack.png';

function addImage() {
    const img = document.createElement('img');
    img.arc = "webpack";

    const body = document.querySelector('body');
    body.appendChild(img);
}

function myFunc() {
    sayHello('jack');
    console.log('myFunc');
}
myFunc();