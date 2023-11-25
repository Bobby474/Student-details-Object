// Constructor function for Student details
function Student(name, roll_no, className, section, marks_of_5_subjects) {
    this.name = name;
    this.roll_no = roll_no;
    this.class = className;
    this.section = section;
    this.marks_of_5_subjects = marks_of_5_subjects;

    // Method to print top three subjects based on marks
    this.printTop3Subjects = function () {
        // Sorting subjects based on marks
        var sortedSubjects = Object.keys(this.marks_of_5_subjects).sort(function (a, b) {
            return this.marks_of_5_subjects[b] - this.marks_of_5_subjects[a];
        }.bind(this));

        // Printing top three subjects
        console.log("Top 3 Subjects:");
        for (var i = 0; i < 3; i++) {
            console.log(sortedSubjects[i]);
        }
    };

    // Method to print the report card
    this.printReportCard = function () {
        // Calculating percentage
        var totalMarks = 0;
        for (var subject in this.marks_of_5_subjects) {
            totalMarks += this.marks_of_5_subjects[subject];
        }
        var percentage = (totalMarks / (Object.keys(this.marks_of_5_subjects).length * 100)) * 100;

        // Printing report card
        console.log("+--------------------+");
        console.log("|     REPORT CARD    |");
        console.log("+--------------------+");
        console.log("| Name     -", this.name ,  "|");
        console.log("| Roll no. -", this.roll_no,  "     |");
        console.log("| Class    -", this.class,  "      |");
        console.log("| Section  -", this.section,  "      |");

        // Printing marks for each subject
        for (var subject in this.marks_of_5_subjects) {
            console.log("|", subject, " -", this.marks_of_5_subjects[subject] , " |" );
        }

        console.log("| Percentage -", percentage.toFixed(1), "%|" );
        console.log("+--------------------+");
    };
}

// Example usage:
var studentDetails = new Student("Huzaifa", 16, "X", "A", {
    science: 72,
    maths: 75,
    social_science: 79,
    english: 80,
    hindi: 67
});

// Example of calling methods
studentDetails.printTop3Subjects();
studentDetails.printReportCard();

