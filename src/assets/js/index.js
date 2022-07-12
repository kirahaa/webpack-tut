import { sayHello } from './util';
import '../css/style.scss';
import Swiper from 'swiper';
import 'swiper/css';


function myFunc() {
    sayHello('jack');
    console.log('myFunc');
}
myFunc();

window.onload = function () {

    /**
     * 스와이퍼
     *
     */
    const swiper = document.querySelector("[data-control=swiper]");

    swiper.map((i, s) => {
        let options = document.querySelector('s').dataset;
        console.log(options);
    })
}