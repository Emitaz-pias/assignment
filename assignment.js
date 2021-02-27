// convert kilometer to meter
function kilomiterToMeter(kilometer) {
  var meter = 0;
  if (kilometer <= -1) {
    return console.log("Distance can't be negative :)");
  } else {
    meter = 1000 * kilometer;
    return meter;
  }
}
var kiloCaller = kilomiterToMeter(5);
console.log(kiloCaller);
// calculate a budget
function budgetCalculator(watch, phone, laptop) {
  var totalPrice = 0;
  var watchPrice = 0;
  var phonePrice = 0;
  var laptopPrice = 0;
  if ((watch, phone, laptop >= -1 && watch, phone, laptop !== 0)) {
    watchPrice = watch * 50;
    phonePrice = phone * 100;
    laptopPrice = laptop * 500;
    return (totalPrice = watchPrice + phonePrice + laptopPrice);
  } else {
    return console.log("please Input a valaid number");
  }
}
var budget = budgetCalculator(100, 100,50);
console.log(budget);
// hotel Discount calculator
function hotelCost(day) {
  var cost = 0;
  if (day <= -1) {
    console.log("sorry day can't be negative :)");
  } else {
    if (day <= 10) {
      cost = day * 100;
      return cost;
    } else if (day <= 20) {
      var first10Days = 10 * 100;
      var remainingDays = day - 10;
      var avobe10Days = remainingDays * 80;
      cost = first10Days + avobe10Days;
      return cost;
    } else {
      var first10Days = 10 * 100;
      var avobe10Days = 10 * 80;
      var remainingDays = day - 20;
      var avobe20Days = remainingDays * 50;
      cost = first10Days + avobe10Days + avobe20Days;
      return cost;
    }
  }
}
var hotel = hotelCost(21);
console.log(hotel);

// find the big name in an array
var longName = " ";
function megaFriend(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length > longName.length) {
      longName = arr[i];
    }
  }
  return longName;
}
var friends = [
  "kashem",
  "Mustafa",
  "Shakib",
  "Shanto",
  "oporadhiMaiya",
  "Rakib",
];
var megaFriendCaller = megaFriend(friends);
console.log(megaFriendCaller);
