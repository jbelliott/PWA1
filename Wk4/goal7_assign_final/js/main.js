/*  Joshua Elliott
	Mid Terms for PWA-1
	Due 18 April 2014

*/



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


    var i = 0;              //An event counter to sort the event arrays

        onclick = function nextStudent() {
            var localDate = new Date();
            document.getElementById("date").innerHTML = "Date: " + localDate.toLocaleDateString();
            console.log("Date: " + localDate.toLocaleDateString());
            console.log("-------------------");




            //Changing student object to a constructor
            console.log("test round " + i);

            var StudentInfo = function (name, street, cityState, gpa) {
                this.studentName = name;
                console.log(this.studentName);
                document.getElementById("name").innerHTML = "Name: " + this.studentName;
                this.studentStreet = street;
                console.log(this.studentStreet);
                this.studentCity = cityState;
                console.log(this.studentCity);
                document.getElementById("address").innerHTML = "Address: " + this.studentStreet + ", " + this.studentCity;
                this.studentGrades = gpa;
                console.log(this.studentGrades);
                document.getElementById("gpa").innerHTML = "GPA: " + this.studentGrades;
                this.studentGPA = gpaAverage(gpa);
                console.log(this.studentGPA);
                document.getElementById("gpaavg").innerHTML = "GPA Avg: " + this.studentGPA;

            };

            //Information to pass to the constructor
            var newStudent;
            if (i == 0) {
            newStudent = new StudentInfo("Gomer Pyle", "123 Sesame St", "Orlando, FL", [2.5, 3.0, 3.0]);
                i++;
            } else if (i == 1) {
            newStudent = new StudentInfo("Fred Durst", "404 Internet Blvd", "Miami, FL", [3.5, 4.0, 3.5]);
                i++;
            } else if (i == 2) {
                newStudent = new StudentInfo("Luke Skywalker", "5921 Echo Lake Way", "Celebration, FL", [4.0, 4.0, 3.5]);
                document.getElementById("button").innerHTML = "Done!";
                console.log("No more entries to display.");
                this.onclick=null;
            }


console.log(i);








    };
//})();