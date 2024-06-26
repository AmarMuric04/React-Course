let age: number;

age = 12;

let userName: string = "amar";

let isInstructor: boolean;

isInstructor = false;

let hobbies: string[];

hobbies = ["this one"];

type Person = {
  name: string;
  age: number;
};

let personPerson: Person;

personPerson = {
  name: "amar",
  age: 12,
};

let person: {
  name: string;
  age: number;
};

person = {
  name: "Amar",
  age: 19,
};

let groupOfPeople: {
  name: string;
  age: number;
}[];

// type inference !

const firstName = "amar";

// firstName = 19; wrong!!!

let id: number | string = 123;

id = "amar";

// functions & types

function add(a: number, b: number) {
  return a + b;
}

function printOutput(value: any) {
  console.log(value);
}

// generics

function insertAtBeginning<T>(array: T[], value: T) {
  const newArray = [value, ...array];
  return newArray;
}
