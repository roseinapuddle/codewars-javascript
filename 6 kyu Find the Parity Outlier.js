/*
You are given an array (which will have a length of at least 3, but could be very large) containing integers. 
The array is either entirely comprised of odd integers or entirely comprised of even integers except for a 
single integer N. Write a method that takes the array as an argument and returns N.

For example:

[2, 4, 0, 100, 4, 11, 2602, 36]

Should return: 11

[160, 3, 1719, 19, 11, 13, -21]

Should return: 160
*/

function findOutlier(integers){

  var num_even = 0;
  for (var i = 0; i < 4; i++) {
    if (integers[i] % 2 == 0) {
      num_even +=1;
    }
  }
  if (num_even > 1) {
    for (var i = 0; i < integers.length; i++) {
      if (integers[i] % 2 != 0) {
        return integers[i];
      }
      
    } 
    } else {
      for (var i = 0; i < integers.length; i++) {
        if (integers[i] % 2 == 0) {
          return integers[i];
      }
    }
  }
}
