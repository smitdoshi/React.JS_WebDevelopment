import React, { Component } from "react";
import PROJECTS from './data/project';

class Project extends Component{
    render(){
        console.log('this.props', this.props);

        // Javascript Destruction Syntax
        const { title, image, description, link} = this.props.project;

        /*
            The above code is equal to

            const title = this.props.project.title;
            const image = this.props.project.image;
            const description = this.props.project.description;
            const link  = this.props.project.link;
        */ 

        return (
            <div>
                <h3>{title}</h3>
                <img src={image} alt='profile'></img>
                <p>{description}</p>
                <a href={link}></a>
            </div>
        )
    }
}

class ProjectsComponent extends Component{
    render(){
        return (
            <div>
                <h2>Highlighted Projects</h2>
                <div>
                    {
                        PROJECTS.map(PROJECT => {
                            return ( 
                                 <Project key={PROJECT.id} project={PROJECT}/>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}
export default ProjectsComponent;