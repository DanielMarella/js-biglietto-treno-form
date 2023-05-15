const userAge = document.getElementById(input_age);
console.log(input_age.value);

const userKm = document.getElementById(input_km);
console.log(input_km.value);

let FullTicket = (input_km.value * 0.233);
console.log(FullTicket)

const DiscountTiket = FullTicket ;
const button = document.querySelector('button');


if (input_age.value < 18){
    const DiscountTiket = (19.4 / 100) * FullTicket;
    console.log('il tuo sconto da minorenne è:' + DiscountTiket.toFixed(2) + '€');

    const FinalPrice = (FullTicket - DiscountTiket);
    button.addEventListener('click',
    function(){
        console.log('il tuo prezzo è:' + FinalPrice.toFixed(2)) ;
    }
);
}   

else if (input_age.value >= 65){
    const DiscountTiket = (37.7 / 100) * FullTicket;
    console.log('il tuo sconto da over è:' + DiscountTiket.toFixed(2) + '€');

    const FinalPrice = (FullTicket - DiscountTiket);
    button.addEventListener('click',
    function(){
        console.log('il tuo prezzo è:' + FinalPrice.toFixed(2) + '€') ;
    }
);
}



