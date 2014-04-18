/*  Joshua Elliott
	Mid Terms for PWA-1
	Due 18 April 2014

*/




//Define the student variable and assign values for two students to start with

var classList= {};

classList.stu1 = {};

classList.stu1.name1 = "Gomer Pyle";
classList.stu1.addy1 = {};
classList.stu1.addy1.street = "123 Sesame St";
classList.stu1.addy1.city = "Orlando";
classList.stu1.addy1.state = "FL";
classList.stu1.gpa1 = [2.5, 3.0, 3.0];

classList.stu2 = {};

classList.stu2.name2 = "Fred Durst";
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
//Alternatively, we could use a push command to add to an object as well

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

//This function will take the array of values from the GPA field and return the average score
//The average score is fixed to 2 decimal places

function gpaAverage(arrScores){
    var arraySum = 0;
    for (var i = 0; i < arrScores.length; i++){
        arraySum += (arrScores[i]);

    }
    var arrayAvg = arraySum / arrScores.length;
    arrayAvg = arrayAvg.toFixed(2);
    return arrayAvg;
}

//This is the function activated by the event button on the HTML page. It basically cycles through the student records
//until it has reached the end, then disables the event button.




function studentList(){
    var localDate = new Date();


    document.getElementById("name").innerHTML = "Name: " + classList.stu1.name1;
    document.getElementById("address").innerHTML = "Address: " + classList.stu1.addy1.street + " " + classList.stu1.addy1.city + ", " + classList.stu1.addy1.state;
    document.getElementById("gpa").innerHTML = "GPA: " + classList.stu1.gpa1[0] + ", " + classList.stu1.gpa1[1] + ", " + classList.stu1.gpa1[2];
    document.getElementById("date").innerHTML = localDate.toLocaleDateString();
    document.getElementById("gpaavg").innerHTML = "GPA Avg: " + gpaAverage(classList.stu1.gpa1);


}



