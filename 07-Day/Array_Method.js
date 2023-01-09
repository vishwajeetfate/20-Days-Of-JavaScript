let dailyActivities = ['sleep', 'work', 'exercise']
let newRoutine = ['eat'];
document.write ("<br>");

document.write("Sorting elements in the alphabetical order")
document.write ("<br>");
dailyActivities.sort();
document.write(dailyActivities);
document.write ("<br>");

document.write("Finding the index position of string")
document.write ("<br>");
const position = dailyActivities.indexOf('work');
document.write(position); 
document.write ("<br>");

document.write("Slicing the array elements")
document.write ("<br>");
const newDailyActivities = dailyActivities.slice(1);
document.write(newDailyActivities);
document.write ("<br>");

document.write(" concatenating two arrays")
document.write ("<br>");
const routine = dailyActivities.concat(newRoutine);
document.write(routine);