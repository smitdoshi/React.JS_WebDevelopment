import React, { Component } from "react";
import SocialProfiles from './data/socialProfiles';

class SocilaProfileList extends Component{
    render(){
        console.log('this.props', this.props);

        // Javascript Destruction Syntax

        const { link, image} = this.props.socialprofilelist;

        /*
            The above code is equal to

            const title = this.props.project.title;
            const image = this.props.project.image;
            const description = this.props.project.description;
            const link  = this.props.project.link;
        */ 

        return (
            <span>
                <a href={link} target="_blank">
                    <img src={image} alt='profile' style={{width:35, height:35, margin:10}}/>
                </a>
            </span>
        )
    }
}

class SocialProfileComponent extends Component{
    render(){
        return (
            <div>
                <h2>Connect with me!</h2>
               {
                    SocialProfiles.map(socialprofile => {
                        return ( 
                            <SocilaProfileList key={socialprofile.id} socialprofilelist={socialprofile}/>
                        )
                    })
                }
            </div>
        )
    }
}
export default SocialProfileComponent;