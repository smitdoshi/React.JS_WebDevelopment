import React, { Component }from 'react';

class App extends Component {
    constructor(){
        super();
        this.state = { displayBio: false};
    }

    render() {
        // to make block of JSX use ();
        // As soon as JSX sees null value it will skip to render bio part

        // Now the above bio = whole div block we can render bio within the render method by using {}
        // {} = Allows you render variables within actual JSX and display them.

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

 