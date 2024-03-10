import React, { Component }from 'react';

class App extends Component {
    constructor(){
        super(); // Calling super in order invoke the constructor of parent class, React Component in our case.
        this.state = { displayBio: true };
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
                ) : null
            }
            </div>
        );
    }
}

export default App;

 