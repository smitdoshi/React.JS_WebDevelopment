import React, { Component }from 'react';

class App extends Component {
    constructor(){
        super(); // Calling super in order invoke the constructor of parent class, React Component in our case.
        this.state = { displayBio: false };
        console.log('Component this', this);
        // On checking in the console we see the above "this" is the app. 
        // If we expand the app > __prototype__ > __prototype__ > we see this has setState function

        // Solution1 : rather than clearning, declaring a class method within the constructor.
        // this.readMore = () =>{
        //     console.log('readMore this', this);
        //     // this.setState({ displayBio: true });
        // }
        // This worked
        // By attaching the method directly onto this object within the constructor, it has access to the *** app components of this object ***
 
        /** Think of this Scenario where we have 5 or even 10 more of these methods for the component  
         * Would we want to write each of these methods within the constructor every time??
         * Proably Not
         * It's much more cleaner to have this at the class level.
        */

        /** Solution 2: BEST Approach
         * Luckily in Javascript we have a special 
         * .bind method => for methods that allow us to pass this object from one object to another.
         * That way we can bind the "this" object of the component itself to the helper method.
        */

        // this.readMore.bind(this);

        /**
         * This actually produces a new function that is the result of creating a function 
         * that has "this" object from the component bound to this readMore function.
         * */

        // Now set this.readMore to that result.
        this.readMore = this.readMore.bind(this);
    }

    // Adding a trigger functionality to displayBio true in the state.
    // New helper method
    readMore() {
        // let's change the this.state.displayBio to true.
        
        // this.state.displayBio = true; // this really tempting to directly modify the component state object in react.
        // In react it's a huge BAD practice to modify the component's state directly
        
        // Instead of doing this react attaches a helper method to the component called setState.
        // setState -> Component helper method for updating the values in the state object.
        
        // Implementation of setState method is used by calling this.setState and it's input is an object.
        
        // this.setState({ displayBio: true }); /* the key in this object are whatever key we want to update in the state */

        // In react we can use onClick property for an element that references a method to fire.
        // And under the hood the react eninge code react will know to trigger the method when the element is actually clicked.

        /* ------------- Debugging setState undefined issue when button clicked -------------*/
        // console.log('readMore this', this);
        // When clicked on button, we see "this object" within the readMore function itself is undefined.
        // The reason for this is that class method don't have logic to create their own this object
        // Class method written this way is essentially a convenient way to click various methods to fire like a Script.
        // It's not a an object or a class instance itself.
        // Therefor it doesn't make it's own "this" object. Hence the setState won't be attached.

        // But in our case if we still want the setState method attached to "this object of the component" 
        // to be available to "this" object within the readMore method so 
        // one way to do this is to directly attach the method within the constructor to the "component of this object".
    }

    render() {
        // to make block of JSX use ();
        // As soon as JSX sees null value it will skip to render bio part

        // Now the below bio = whole div block we can render bio within the render method by using {}
        // {} = Allows you render variables within actual JSX and display them.
        
        /*
            if(!this.state.displayBio){
            bio = null;
        }*/

        // Instead of above code section we can have ternary operator to check if displayBio is true and toggle then
        // Added a condition to check displayBio value
        // Since we are using const bio variable only once we can take whole bio section and render it inline JSX

        // Now we will be giving control to the users to display Bio or Not, by implementing SetState Concepts
         return (
            <div>
                <h1>Hello!</h1>
                <p>My name is Smit. I'm a software engineer.</p>
                <p>I'm always looking forwared to working on meaningful projects.</p>
            {
                this.state.displayBio ? (
                    <div>
                            <p>I live in Orlando, and code every day.</p>
                            <p> My favourite language is Javasript, and I am learning React.js</p>
                            <p> Beisde coding, I love being outdoor and travelling.</p>
                    </div>
                ) : (
                    <div>
                        <button onClick={this.readMore}>Read More</button>
                    </div>
                )
            }
            </div>
        );
    }
}

export default App;

 