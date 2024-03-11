import React, { Component }from 'react';
import Projects from './Project';

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

    // Keeping render as it is since it's the most fundamental method for a react cmponent and 
    // React already ensures to attach the render method to "this" object within the logic for the regular Component class already that we're extending

    render() {
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
            <hr />
            <Projects />
            </div>
        );
    }
}

export default App;

 