arr = new Array(1, 2, 3, 6, 5, 4);
var new_arr = arr.filter(function (x){
    return x % 2==0;
});
  
document.write(new_arr)