const timmy = {
    prescription: "acetaminophen",
    pricePerRefill: 25,
    refills: 3,
    subscription: false,
    coupon: true,
};

const sarah = {
    prescription: "diphenhydramine",
    pricePerRefill: 50,
    refills: 1,
    subscription: true,
    coupon: false,
}

const rocky = {
    prescription: "phenylephrine",
    pricePerRefill: 30,
    refills: 5,
    subscription: true,
    coupon: true,
}

/*
Directions:
1. If a customer has a subscription, the customer will receive a 25% discount after the refill total has been calculated.
2. If the customer has a coupon, the customer will receive a $10 discount after the subscription discount has been calculated.
3. At the end of the script, you should return and log the string "Your grand total is ${finalAmount}." 
*/

/*

Calculate the subscription price for each customer. if/else can determine if the customer has a subscription and a coupon
create a total amount variable to catch the math equations and display it to the end user.
*/



function total(client) {
    let totalRefillPrice = client.pricePerRefill * client.refills;
    let subscriptionDiscount = 0;
    let couponDiscount = 0;
    let totalAmount;

    if (client.subscription === true) { subscriptionDiscount = totalRefillPrice * 0.25;}
    if (client.coupon === true) { couponDiscount = 10;}

    totalAmount = totalRefillPrice - subscriptionDiscount - couponDiscount;
    return totalAmount;
}

console.log("Timmy - Your grand total is $" + total(timmy));
console.log("Sarah - Your grand total is $" + total(sarah));
console.log("Rocky - Your grand total is $" + total(rocky));