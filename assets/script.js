 /** by calling var we create the variable named topics, 
 varaibles are containors that allow us to store strings of data in our code. 
We represent strings by addign quotation marks. 

 var topics = "HTML, CSS, Git, JavaScript";

 we can acces the string by calling the variable:
 we usethe console.org  method to the file and
 methods: are actions tha can be perfomed on objects. 
 A method is a property containing a fuction definition 
 we have added anargument inside the parenteses
 
 console.log(topics);

The order of code affects the outcome.JavaScript is read from top to bottom, and order counts. 

Control flow can be interrupted by using conditional statements and loops to control the order 
in which code is executed, or if it is even executed at all. In this step, we’ll reverse engineer 
code to set up a conditional statement that lets us alter the control flow so that code executes 
only if a certain condition is met.

**/

var topics = ['HTML', 'CSS', 'Git', 'JavaScript'];

for (var x = 0; x < topics.length; x++) {
 console.log(topics[x]);
}

/*
if (topic === 'HTML') {
 console.log("Let's study HTML!");
} else if (topic === 'CSS') {
 console.log("Let's study CSS!");
} else if (topic === 'Git') {
 console.log("Let's study Git!");
} else if (topic === 'JavaScript') {
 console.log("Let's study JavaScript!");
} else {
 console.log('Please try again!');
}
*/