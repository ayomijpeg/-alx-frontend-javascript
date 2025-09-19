interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [key: string]: any; // allow additional properties
}

const teacher3: Teacher = {
  firstName: 'John',
  fullTimeEmployee: false,
  lastName: 'Doe',
  location: 'London',
  contract: false,
};

console.log(teacher3);

function workOnHomework() {
    return "Homework in progress";
}





// Teacher interface
interface Teacher {
  readonly firstName: string;   // only set on initialization
  readonly lastName: string;    // only set on initialization
  fullTimeEmployee: boolean;    // must always be defined
  yearsOfExperience?: number;   // optional
  location: string;             // must always be defined
  [key: string]: any;           // allow any extra attributes
}

// Director interface extending Teacher
interface Director extends Teacher {
  numberOfReports: number;  // required attribute
}

// Example usage
const director1: Director = {
  firstName: 'John',
  lastName: 'Doe',
  location: 'London',
  fullTimeEmployee: true,
  numberOfReports: 17,
};

console.log(director1);


function printTeacher(firstName: string, lastName: string): string {
    return firstName.charAt(0) + ". " + lastName;
}

// Example usage
console.log(printTeacher("John", "Doe")); // Output: J. Doe

interface printTeacherFunction {
  (firstName: string, lastName: string): string;

}



return `${firstName}. ${lastName}`;


const teacher = { firstName: "John", lastName: "Doe" };
console.log(teacher.firstName); // John
console.log(teacher.lastName);  // Doe

const { firstName, lastName } = teacher;
console.log(firstName); // John
console.log(lastName);  // Doe

function printTeacher({ firstName, lastName }: { firstName: string; lastName: string }) {
  return `${firstName[0]}. ${lastName}`;
}

const teacher = { firstName: "John", lastName: "Doe" };
console.log(printTeacher(teacher)); // J. Doe


class StudentClass {
  firstName: string;
  lastName: string;
  age: number;
  location: string;

  constructor(firstName: string, lastName: string, age: number, location: string) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.location = location;
  }

  // Example method to get full name
  getFullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }
}

// Example usage:
const student1 = new StudentClass("John", "Doe", 20, "New York");
console.log(student1.getFullName()); // Output: John Doe


const status = ["workOnHomework()", "Currently working"];
console.log(workOnHomework()); // calls the function
console.log(status[1]);        // logs "Currently working"

function workOnHomework() {
    return ["workOnHomework()", "Currently working"];
}

console.log(workOnHomework()); // ["workOnHomework()", "Currently working"]


class StudentClass {
  firstName: string;

  constructor(firstName: string) {
    this.firstName = firstName;
  }

  displayName(): string {
    return this.firstName;
  }
}

// Example usage:
const student1 = new StudentClass("Alice");
console.log(student1.displayName()); // Output: Alice



// Define the interface
interface StudentInterface {
  firstName: string;
  lastName: string;
  workOnHomework(): string; // Method that returns a string
}

// Implement the class based on the interface
class StudentClass implements StudentInterface {
  firstName: string;
  lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  workOnHomework(): string {
    return "Currently working";
  }
}

// Example usage
const student = new StudentClass("John", "Doe");
console.log(student.workOnHomework()); // Output: "Currently working"






