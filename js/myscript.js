const userAge = document.getElementById(input_age);
console.log(input_age.value);

const userKm = document.getElementById(input_km);
console.log(input_km.value);

const FullTicket = (input_km.value * 0.233);
console.log(FullTicket)


if (input_age.value < 18){
    const DiscountTiket = (19.4 / 100) * FullTicket;
    console.log(DiscountTiket);
    console.log(FullTicket - DiscountTiket);
}   

else if (input_age.value > 65){
    const DiscountTiket = (37.7 / 100) * FullTicket;
    console.log(DiscountTiket);
    console.log(FullTicket - DiscountTiket);
}

