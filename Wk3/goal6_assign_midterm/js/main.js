/*  Joshua Elliott
	Mid Terms for PWA-1
	Due 18 April 2014

*/

//Define the student variable and assign values for two students to start with

var classList= {};

classList.stu1 = {};

classList.stu1.name = "Gomer Pyle";
classList.stu1.addy1 = {};
classList.stu1.addy1.street = "123 Sesame St";
classList.stu1.addy1.city = "Orlando";
classList.stu1.addy1.state = "FL";
classList.stu1.gpa1 = [2.5, 3.0, 3.0];

classList.stu2 = {};

classList.stu2.name = "Fred Durst";
classList.stu2.addy2 = {};
classList.stu2.addy2.street = "404 Internet Blvd";
classList.stu2.addy2.city = "Miami";
classList.stu2.addy2.state = "FL";
classList.stu2.gpa2 = [3.5, 4.0, 3.5];



var newStu = {};
newStu.name = "Luke Skywalker";
newStu.addy = {};
newStu.addy.street = "5921 Echo Lake Way";
newStu.addy.city = "Celebration";
newStu.addy.state = "FL";
newStu.newGpa = [4.0, 4.0, 3.5];

//When called, this function will add the values from the newStu object to the classList object under stu3

function addDate(name, newAddy1, newAddy2, newAddy3, grades){
    classList.stu3 = {};

    classList.stu3.name = name;
    classList.stu3.addy3 = {};
    classList.stu3.addy3.street = newAddy1;
    classList.stu3.addy3.city = newAddy2;
    classList.stu3.addy3.state = newAddy3;
    classList.stu3.gpa3 = grades;

    return classList.stu3;
}

addDate(newStu.name, newStu.addy.street, newStu.addy.city, newStu.addy.state, newStu.newGpa);




