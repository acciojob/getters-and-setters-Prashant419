// Person class
class Person {
  constructor(name, age) {
    this._name = name;
    this._age = age;
  }

  // Getter for name
  get name() {
    return this._name;
  }

  // Setter for age
  set age(age) {
    this._age = age;
  }
}

// Student class (subclass of Person)
class Student extends Person {
  // Method to log studying
  study() {
    console.log(`${this._name} is studying`);
  }
}

// Teacher class (subclass of Person)
class Teacher extends Person {
  // Method to log teaching
  teach() {
    console.log(`${this._name} is teaching`);
  }
}

// Example usage
const person = new Person("John", 25);
console.log(person.name); // Output: John

person.age = 30;
console.log(person.age); // Output: 30

const student = new Student("Alice", 22);
student.study(); // Output: Alice is studying

const teacher = new Teacher("Bob", 40);
teacher.teach(); // Output: Bob is teaching
