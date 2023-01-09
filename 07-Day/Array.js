const myArray = ['v', 'i', 's', 'h', 'w', 'a', 'j', 'e','e', 't']
document.write(myArray[0]);
document.write ("<br>");
document.write(myArray[1]); 
document.write ("<br>");

document.write("a sample 2-D array") 
document.write ("<br>");
var a = [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7]];
 
for (var i in a) 
{
    document.write("row " + i);
    document.write ("<br>");
   for (var j in a[i]) 
     {
      document.write(" " + a[i][j]);
      document.write ("<br>");
     }
}