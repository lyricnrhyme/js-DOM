/*Use the Document Object Model (DOM) to complete the following exercises below:*/

/*1. Taylor Swift

Find the div with the id of "name1" and replace the n/a with the following:

Tay-Tay*/

var divElem = document.getElementById("name1");
divElem.innerHTML = "Tay-Tay";


/*2. DJ Khaled

Find the div with the id of "position2" and replace the n/a with the following: 

Project Manager*/

var anotherOne = document.getElementById("position2");
anotherOne.innerHTML = "Project Manager";

/*3. Piko Taro

Find the div with the id of "alias3" and replace the n/a with the following:

Concatenation*/

var ppap = document.getElementById("alias3");
ppap.innerHTML = "Concatenation";

/*4. Prince

Find the div with the class name of "profile" and replace the n/a with a verse from your favorite Prince song.*/

var legends = document.getElementsByClassName("profile");
legends[0].innerHTML = "Laughing in the Purple Rain";

/*5. Bruce Lee

Find the div with the class name of "profile" and replace the n/a with a quote from the legend himself.*/

legends[1].innerHTML = "Knowledge will give you power, but character repect.";

/*6. Samuel L Jackson

Find the div with the class name of "alias" and replace the n/a with your favorite character that Sammy portrayed.*/

var samuel = document.getElementsByClassName("alias");
samuel[2].innerHTML = "Nick Fury";

/*7. Peter Griffin

Create a div element and give it an id of "name7". Inside this div element, give it the contents of "Peter Griffin".

Append this div element to the nameParent div*/

var pg = document.createElement("div");
pg.id = "name7";
var peterGriffin = document.createTextNode("Peter Griffin");
pg.appendChild(peterGriffin);
nameParent.appendChild(pg);


 
/*8. Tim Duncan

Create a div element give it an id of "alias8". Inside this div element, give it the contents of "Old Man Riverwalk".

Append this div element to the aliasParent div.*/



//Final Boss
/*9. Create your own profile.*/

