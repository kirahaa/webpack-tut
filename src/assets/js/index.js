import { sayHello } from './util';
import css from '../css/style.css';

function myFunc() {
    sayHello('jack');
    console.log('myFunc');
}
myFunc();
console.log('css', css);