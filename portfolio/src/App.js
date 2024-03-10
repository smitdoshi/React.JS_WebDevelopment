import React, { Component }from 'react';

class App extends Component {
    constructor(){
        super(); // Calling super in order invoke the constructor of parent class, React Component in our case.
        this.state = { displayBio: false };
        console.log('Component this', this);
        
        /** BEST Approach Solution
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
        console.log('readMore this', this);
        this.setState({ displayBio: true });
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

 