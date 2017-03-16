import React, { Component } from 'react';
import './App.css';
import Landing from './components/Landing/Landing'
import PickingAShirtComponent from "./components/BlogComponents/PickingAShirt/PickingAShirtComponent";
import MyFirstBlogComponent from "./components/BlogComponents/MyFirstBlog/MyFirstBlogComponent";
import DOM from './Utility'

const oBlog = {
    lstBlog : [
        {
            "iID" : 0,//aligns with index
            "sCSSID" : "my-first-blog-component-wrapper",
            "sHeader" : "My First Blog",
            "dtCreated" : new Date(),
            "sThumbnail" : "./1.png", 
            "sBackdrop" : "./myfirstblog.jpg",
            "lstTag" : ["programming", "music", "life"],
            "lstImg" : [],
            "sDescription" : "My first blog ever",
            "sContent" : ""
        },
        {
        	"iID" : 1,//aligns with index
        	"sCSSID" : "picking-a-shirt-component-wrapper",
            "sHeader" : "Picking a Shirt",
            "dtCreated" : new Date(),
            "sThumbnail" : "./img.png",
            "sBackdrop" : "./shirts.png",
            "lstTag" : ["life"],
            "lstImg" : [],
            "sDescription" : "The implications of the shirt we pick today",
            "sContent" : "The blog goes here"
        }, {
        	"iID" : 2,//aligns with index
        	"sCSSID" : "how-much-of-this-actually-matters-component-wrapper",
            "sHeader" : "How much of this actually matters?",
            "dtCreated" : new Date(),
            "sThumbnail" : "./img2.png",
            "sBackdrop" : "./shirts.png",
            "lstTag" : ["programming", "music", "life"],
            "lstImg" : [],
            "sDescription" : "Will this idea/project/creation mean anything?",
            "sContent" : "The blog goes here"
        }
    ]  
}

/**
 * Beggining of react app contents
 * https://github.com/facebookincubator/create-react-app
*/
class App extends Component {
    constructor(props)
    {
        super(props);
        this.state = {
            oBlog : oBlog,
            sCurrentViewCSSID : "landing-component-wrapper"
        };
    }
    render() 
    {
        return (
            <div id="appContainer" className="app-container">
            	<div id="landing-component-wrapper" className='component-wrapper '>
            		<Landing oBlog={this.state.oBlog} funcChangeView={this.ChangeView.bind(this)}/>
            	</div>
                <div id="picking-a-shirt-component-wrapper" className='component-wrapper hide'>
                    <PickingAShirtComponent oBlog={this.GetBlog("Picking a Shirt")}/>
                </div>
                <div id="my-first-blog-component-wrapper" className='component-wrapper hide'>
                    <MyFirstBlogComponent oBlog={this.GetBlog("My First Blog")}/>
                </div>
            </div>
        );
    }

    GetBlog(sBlogTitle)
    {
        return this.state.oBlog.lstBlog.filter(_blog=> _blog.sHeader === sBlogTitle)[0];
    }

    ChangeView(iViewIDTo)
    {
    	let sCSSIDToDisplay = "";
    	let sCSSIDFromDisplay = this.state.sCurrentViewCSSID;

    	sCSSIDToDisplay = iViewIDTo < 0 ? "landing-component-wrapper" : this.state.oBlog.lstBlog[iViewIDTo].sCSSID;

    	DOM.AddClassTo(sCSSIDFromDisplay, "current-to-right");

    	DOM.AddClassTo(sCSSIDToDisplay, "left-to-current");
    	DOM.RemoveClassFrom(sCSSIDToDisplay, "hide");
    	DOM.AddClassTo(sCSSIDToDisplay, "show");


    	//set the state of the new current css id to be the one we just switched to
    	this.setState({
    		sCurrentViewCSSID : sCSSIDToDisplay
    	});

    }

}

export default App;

