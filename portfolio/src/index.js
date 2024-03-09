import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

class Animal {
    constructor(name, age) {
        this.name = name;
        this.age = age;

    }

    speak() {
        console.log('I am ', this.name, 'and I am', this.age, 'years old');
    }
}

const animal1 = new Animal('Simba', 3);
animal1.speak();

console.log(animal1); // animal class instance

class Lion extends Animal {
    constructor(name, age, furColor, speed){
        /* We do not have to do 
            this.name = name; 
            this.age = age;
            Since that code already exists in Animal Class 
        */
       // Inorder to invoke the constructor of parent class we use SUPER keyword'
       super(name, age);  // Invoke the constructor of parent class.
       this.furColor = furColor;
       this.speed = speed;
    }
    // Classes can have it's unqiue method with it's new properties
    roar(){
        console.log('ROOOAR ! I have',this.furColor,'fur, and I can run', this.speed, 'miles an hours !');
    }
}

const lion1 = new Lion('Mufasa', 20, 'golden', 25);
lion1.speak();
lion1.roar();

console.log(lion1);
