var val1 = document.getElementById("div3");

var o1 = val1.closest("#div1");  

var o2 = val1.closest("div div");  

var o3 = val1.closest("div > div");  

var o4 = val1.closest(":not(#div3)");
document.write(o1);
document.write(o2);
document.write(o3);
document.write(o4);