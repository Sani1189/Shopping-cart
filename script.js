document.getElementById('checkout').addEventListener('click', function () {
    alert(
        "Your shopping is done!"
    );
});

function setTextElementValueById(elementId, value) {
    const subTotal = document.getElementById(elementId);
    subTotal.innerText = value;
}

function calculateprice() {
    const gTotal = document.getElementById('galaxy-total');
    const gTotalString = gTotal.innerText;
    const gTotalNum = parseInt(gTotalString);

    const iTotal = document.getElementById('iphone-total');
    const iTotalString = iTotal.innerText;
    const iTotalNum = parseInt(iTotalString);

    const SubTotal = gTotalNum + iTotalNum;

    document.getElementById('subtotal').innerText = SubTotal;

    const taxString = (SubTotal * 0.1).toFixed(2);
    const taxTotal = parseFloat(taxString);

    document.getElementById('tax').innerText = taxTotal;

    const finalAmount = SubTotal + taxTotal;
    document.getElementById('total').innerText = finalAmount;
}

document.getElementById('spin1').addEventListener('input', function () {

    const casenum = document.getElementById('spin1');
    const caseString = casenum.value;
    const caseNum = parseInt(caseString);
    const galaxyTotal = document.getElementById('iphone-total');
    const galaxyValue = 1299;

    if(caseNum > 0){
        const galaxyTotalPrice = galaxyValue * caseNum;
        galaxyTotal.innerText = galaxyTotalPrice;
    }
    else{
        const galaxyTotalPrice = 0;
        galaxyTotal.innerText = galaxyTotalPrice;
    }
    calculateprice();
});
document.getElementById('spin').addEventListener('input', function () {

    const casenum = document.getElementById('spin');
    const caseString = casenum.value;
    const caseNum = parseInt(caseString);
    const galaxyTotal = document.getElementById('galaxy-total');
    const galaxyValue = 1299;

    if(caseNum > 0){
        const galaxyTotalPrice = galaxyValue * caseNum;
        galaxyTotal.innerText = galaxyTotalPrice;
    }
    else{
        const galaxyTotalPrice = 0;
        galaxyTotal.innerText = galaxyTotalPrice;
    }
    calculateprice();
});

document.getElementById('increase').addEventListener('click', function () {
    const spin = gsetnumber("+");
    gpriceUpdate(spin);
    calculateprice();

});
document.getElementById('decrease').addEventListener('click', function () {
    const spin = gsetnumber("-");
    gpriceUpdate(spin);
    calculateprice();
});
document.getElementById('increase1').addEventListener('click', function () {
    const spin = setnumber("+");
    priceUpdate(spin);
    calculateprice();

});
document.getElementById('decrease1').addEventListener('click', function () {
    const spin = setnumber("-");
    priceUpdate(spin);
    calculateprice();
});
function gpriceUpdate(numOfPhone) {
    const galaxyTotal = document.getElementById('galaxy-total');
    const galaxyValue = 1189;

    const galaxyTotalPrice = galaxyValue * numOfPhone

    galaxyTotal.innerText = galaxyTotalPrice;
    return galaxyTotalPrice;
}

function gsetnumber(todo) {
    const casenum = document.getElementById('spin');
    const caseString = casenum.value;
    const prevcaseNum = parseInt(caseString);

    let newCaseNumber;
    if (todo == "+") {
        newCaseNumber = prevcaseNum + 1;
    }
    else {
        if (prevcaseNum <= 0) {
            newCaseNumber = 0;
        }
        else {
            newCaseNumber = prevcaseNum - 1;
        }

    }

    casenum.value = newCaseNumber;

    return newCaseNumber;
}
function priceUpdate(numOfPhone) {
    const galaxyTotal = document.getElementById('iphone-total');
    const galaxyValue = 1299;

    const galaxyTotalPrice = galaxyValue * numOfPhone

    galaxyTotal.innerText = galaxyTotalPrice;
    return galaxyTotalPrice;
}

function setnumber(todo) {
    const casenum = document.getElementById('spin1');
    const caseString = casenum.value;
    const prevcaseNum = parseInt(caseString);

    let newCaseNumber;
    if (todo == "+") {
        newCaseNumber = prevcaseNum + 1;
    }
    else {
        if (prevcaseNum <= 0) {
            newCaseNumber = 0;
        }
        else {
            newCaseNumber = prevcaseNum - 1;
        }

    }

    casenum.value = newCaseNumber;

    return newCaseNumber;
}