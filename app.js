// calculate product quantity and price 
function item(id, price, priceId, isIncrease) {
    const mobil = document.getElementById(id);
    const m = mobil.value;
    const mobile = parseInt(m);
    if (isIncrease === true && mobile >= 0) {
        mobil.value = mobile + 1;
        const total = mobil.value * price;
        setInnerText(priceId, total);
    }
    else if (isIncrease === false && mobile > 0) {
        mobil.value = mobile - 1;
        const t = mobil.value * price;
        setInnerText(priceId, t);

    }
}

// set inner text
function setInnerText(id, value) {
    const set = document.getElementById(id);
    set.innerText = value;
}

// calculate total price, vat, total price include vat
function total() {
    const mobilPrice = document.getElementById('mobile-price').innerText;
    const coverPrice = document.getElementById('cover-price').innerText;
    const mp = parseInt(mobilPrice);
    const cp = parseInt(coverPrice);
    const t = mp + cp;
    setInnerText('total-price', t);
    const vat = parseInt(t * 0.1);
    setInnerText('tax', vat);
    const totalPriceIncVat = t + vat;
    setInnerText('vat-total-price', totalPriceIncVat);

}


// mobile
document.getElementById('mobile-btn').addEventListener("click", function () {
    item('mobile', 1219, 'mobile-price', true);
    total();
})

document.getElementById("mobile-btn-minus").addEventListener('click', function () {
    item('mobile', 1219, 'mobile-price', false);
    total();
})


// mobile cover
document.getElementById('mobile-cover-btn-plus').addEventListener('click', function () {
    item('mobile-cover', 59, 'cover-price', true);
    total();
})

document.getElementById('mobile-cover-btn-minus').addEventListener('click', function () {
    item('mobile-cover', 59, 'cover-price', false);
    total();
})


// remove product from shopping cart

const removes = document.getElementsByClassName('remove-item');
for(element of removes){

    element.addEventListener('click', function(event){
        event.target.parentNode.parentNode.parentNode.style.display= 'none';
    })
}


