
const userName = document.getElementById(input_Name);
document.getElementById('TickeName').innerHTML = 'Nome:' + input_Name.value;
console.log(input_Name.value);

const userSurname = document.getElementById(input_age);
document.getElementById('TicketSurname').innerHTML = 'Cognome:' + input_Surname.value;
console.log(input_Surname.value);

const userAge = document.getElementById(input_age);
document.getElementById('TicketAge').innerHTML = 'Età:' + input_age.value;
console.log(input_age.value);

const userKm = document.getElementById(input_km);
document.getElementById('TicketKm').innerHTML = 'Kilometri da percorrere: ' + input_km.value + 'km';

console.log(input_km.value);

let FullTicket = (input_km.value * 0.233);
console.log(FullTicket)

const DiscountTiket = FullTicket ;
const button = document.querySelector('button');


if (input_age.value < 18){
    const DiscountTiket = (19.4 / 100) * FullTicket;
    console.log('il tuo sconto da minorenne è:' + DiscountTiket.toFixed(2) + '€');
    document.getElementById('DiscountPrice').innerHTML = 'Il tuo sconto è di ' + DiscountTiket.toFixed(2) + ' €'

    const FinalPrice = (FullTicket - DiscountTiket);
    button.addEventListener('click',
    function(){
        console.log('il tuo prezzo è:' + FinalPrice.toFixed(2)) ;
        document.getElementById('FinalTicket').innerHTML = 'Il biglietto costa: ' + FinalPrice.toFixed(2) + ' €'
    }
);
}   

else if (input_age.value >= 65){
    const DiscountTiket = (37.7 / 100) * FullTicket;
    console.log('il tuo sconto da over è:' + DiscountTiket.toFixed(2) + '€');
    document.getElementById('DiscountPrice').innerHTML = 'Il tuo sconto è di ' + DiscountTiket.toFixed(2) + ' €'
    const FinalPrice = (FullTicket - DiscountTiket);
    button.addEventListener('click',
    function(){
        console.log('il tuo prezzo è:' + FinalPrice.toFixed(2) + '€') ;
        document.getElementById('FinalTicket').innerHTML = 'Il biglietto costa: ' + FinalPrice.toFixed(2) + ' €'
    }
);
}

document.getElementById('FinalTicket').innerHTML = 'Il biglietto costa: ' + FullTicket.toFixed(2) + ' €'

