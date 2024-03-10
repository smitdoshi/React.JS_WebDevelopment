import React, { Component }from 'react';

class App extends Component {

    /** BEST Approach of using Class Properties and Initializers Syntax
     *  SO commenting Constructor and
     * Now we don't have to directly attach it to the "this" object.
    */
    state = { displayBio: false };  // this is equivalent to the cod we have in constructor
    
    /** 
     * The above code is so convenient for methods because 
     * we can now directly attach toggelDisplayBio to "this" object by having 
     * toggleDisplayBio equal a callbarck function with the arrow fucntion syntax
     * that calls this.setState
    */
    
    toggleDisplayBio = () =>{
        this.setState({ displayBio: !this.state.displayBio });
        // under hood it's as if we wrote this.toggleDisplayBio equals an arrow function right within the constructor. 
        // this.toggleDisplayBio = () => {...}
    }


    // constructor(){
    //     super(); // Calling super in order invoke the constructor of parent class, React Component in our case.
    //     this.state = { displayBio: false };

    //     this.toggleDisplayBio = this.toggleDisplayBio.bind(this);
    // }
    
    

    // Adding toggle method to combine above readMore and showLess method.
    // toggleDisplayBio => will set the displayBio to it's opposite value whatever currently it may be.
    /**
     *  toggleDisplayBio(){
            this.setState({ displayBio: !this.state.displayBio });
        }
     */
    


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
                            <button onClick={this.toggleDisplayBio}>Show Less</button>

                    </div>
                ) : (
                    <div>
                        <button onClick={this.toggleDisplayBio}>Read More</button>
                    </div>
                )
            }
            </div>
        );
    }
}

export default App;

 