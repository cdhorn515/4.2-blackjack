// (function() {
//
//   'use strict';


/*
   Implement a Blackjack hand value calculator.

   Open up the `index.html` file and your console
   to watch the assertions pass as you write your code.

   Also remember, that the parameter `hand` will be an array, so
   you'll need to parse through that first before you can start to
   write your logic.
*/
function handValue(hand) {
  var total = 0;
  // var cardsInHand = [];
  var holdingAces = 0;
  for (var i = 0; i < hand.length; i++) {
    if (hand[i] === "K" || hand[i] === "Q" || hand[i] === "J") {
      total += 10;
    } else if (hand[i] === "A") {
      holdingAces++;
    } else {
      total += Number(hand[i]);
    }
  }
  // var cardTotal = 0;
  for (var i = 0; i < holdingAces; i++) {
    if (total + 11 > 21) {
      total++;
    } else {
      total += 11;
    }
  }
  // console.log(total);
  return total;
}

//  handValue(["8", "7", "A", "A"]);


//   cardsInHand[i] = parseInt(hand[i]);
//   console.log(cardsInHand);
//   cardTotal += cardsInHand[i];
// }
// if (cardTotal > 18) {
//   cardTotal = cardTotal - (10 * holdingAces);
//   console.log(holdingAces);
// }

/* -----  Hints ------

1..10   ==> Worth face value (1 = 1, 4 = 4, etc)
K, Q, J ==> Worth 10
A       ==> Worth 1 or 11

*/
// })();
