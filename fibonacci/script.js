function Fibonacci () {
  this.looping = function(n) {
    var a = 0;
    var b = 1;
    var f = 1;

    for(var i = 2; i <= n; i++){
      f = a + b;
      a = b;
      b = f;
    } return f;
  };


}
