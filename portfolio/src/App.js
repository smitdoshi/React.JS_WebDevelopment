import React, { Component }from 'react';

class App extends Component {
    constructor(){
        super(); // Calling super in order invoke the constructor of parent class, React Component in our case.
        this.state = { displayBio: false };
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
        this.setState({ displayBio: true }); /* the key in this object are whatever key we want to update in the state */
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
                        <button>Read More</button>
                    </div>
                )
            }
            </div>
        );
    }
}

export default App;

 