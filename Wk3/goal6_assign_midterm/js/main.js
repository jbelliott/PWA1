/*  Joshua Elliott
	Mid Terms for PWA-1
	Due 18 April 2014

*/


(function(){

//Define the student variable and assign values for two students to start with


    var stu = {};

    stu.name1 = "Gomer Pyle";
    stu.addy1 = {};
    stu.addy1.street1 = "123 Sesame St";
    stu.addy1.city1 = "Orlando";
    stu.addy1.state1 = "FL";
    stu.gpa1 = [2.5, 3.0, 3.0];

    stu.name2 = "Fred Durst";
    stu.addy2 = {};
    stu.addy2.street2 = "404 Internet Blvd";
    stu.addy2.city2 = "Miami";
    stu.addy2.state2 = "FL";
    stu.gpa2 = [3.5, 4.0, 3.5];


    var newStu = {};
    newStu.name = "Luke Skywalker";
    newStu.addy = {};
    newStu.addy.street = "5921 Echo Lake Way";
    newStu.addy.city = "Celebration";
    newStu.addy.state = "FL";
    newStu.newGpa = [4.0, 4.0, 3.5];

//When called, this function will add the values from the newStu object to the classList object under stu3
//Alternatively, we could use a push command to add to an object as well

    function addDate(name, newAddy1, newAddy2, newAddy3, grades) {


        stu.name3 = name;
        stu.addy3 = {};
        stu.addy3.street3 = newAddy1;
        stu.addy3.city3 = newAddy2;
        stu.addy3.state3 = newAddy3;
        stu.gpa3 = grades;


    }

    addDate(newStu.name, newStu.addy.street, newStu.addy.city, newStu.addy.state, newStu.newGpa);

//This function will take the array of values from the GPA field and return the average score
//The average score is fixed to 2 decimal places

    function gpaAverage(arrScores) {
        var arraySum = 0;
        for (var i = 0; i < arrScores.length; i++) {
            arraySum += (arrScores[i]);

        }
        var arrayAvg = arraySum / arrScores.length;
        arrayAvg = arrayAvg.toFixed(2);
        return arrayAvg;
    }

//This is the function activated by the event button on the HTML page. It basically cycles through the student records
//until it has reached the end, then disables the event button.


    var event = 0;              //An event counter to sort the event arrays

        onclick = function studentList() {
        var localDate = new Date();

        passNames(event);
        passAddy(event);
        passGPA(event);
        document.getElementById("date").innerHTML = "Date: " + localDate.toLocaleDateString();

        

        event++;

    };

    //This function utilizes the event variable as a counter to determine which block of code is going to be called.
    //As the name suggests, it passes the name of the student to the document
    function passNames(counter) {

        if (counter == 0) {
            document.getElementById("name").innerHTML = "Name: " + stu.name1;
        } else if (counter == 1) {
            document.getElementById("name").innerHTML = "Name: " + stu.name2;
        } else {
            document.getElementById("name").innerHTML = "Name: " + stu.name3;
        }
    }
    //This function utilizes the event variable as a counter to determine which block of code is going to be called.
    //As the name suggests, it passes the address of the student to the document
    function passAddy(counter) {

        if (counter == 0) {
            document.getElementById("address").innerHTML = "Address: " + stu.addy1.street1 + ", " + stu.addy1.city1 + ", " + stu.addy1.state1;
        } else if (counter == 1) {
            document.getElementById("address").innerHTML = "Address: " + stu.addy2.street2 + ", " + stu.addy2.city2 + ", " + stu.addy2.state2;
        } else {
            document.getElementById("address").innerHTML = "Address: " + stu.addy3.street3 + ", " + stu.addy3.city3 + ", " + stu.addy3.state3;
        }
    }

    //This function utilizes the event variable as a counter to determine which block of code is going to be called.
    //As the name suggests, it passes the GPA of the student to the document
    function passGPA(counter) {

        if (counter == 0) {
            document.getElementById("gpa").innerHTML = "GPA: " + stu.gpa1[0] + ", " + stu.gpa1[1] + ", " + stu.gpa1[2];
        } else if (counter == 1) {
            document.getElementById("gpa").innerHTML = "GPA: " + stu.gpa2[0] + ", " + stu.gpa2[1] + ", " + stu.gpa2[2];
        } else {
            document.getElementById("gpa").innerHTML = "GPA: " + stu.gpa3[0] + ", " + stu.gpa3[1] + ", " + stu.gpa3[2];
        }
    }


//
})();