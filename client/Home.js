var React = require('react');

var Index = React.createClass({
	render: function(){
		return(
	<div>


	<div className="jumbotron" align="center">
        <div>
            <h1 align ="center">Coding Adventure</h1>
            <p align ="center"> Follow me while I work through 12 weeks with Montana Code School!</p>
        </div>    
    </div>
     <div className="buttonDiv">
        <ul>
            <li className="navButtons"><button type="submit" >Home</button></li>
            <li className="navButtons"><button type="submit" >Blogs</button></li>
            <li className="navButtons"><button type="submit" >Contact</button></li>
            <li className="navButtons"><button type="submit" >Login</button></li>
            <li className="navButtons"><button type="submit" >Signup</button></li>
            <li className="navButtons"><button type="submit" >Post</button></li>
        </ul>
    </div>
    <div>
    </div>   
    <div className="container-fluid">             
        <div className = "row">
            <div className="col-sm-4">
                <h4>                    
                    <p><img src ="img/BlogPicture.jpg" className="picture"/></p>
                </h4>
            </div>        
            <div className = "col-sm-4">    
                <p>My name is Trevor. I for the most part grew up in Missoula, Montana with a brother and three sisters.</p>
                <p>More recently I have developed an interest in coding and enrolled in the Montana Code school. I will be writing a weekly blog for the duration of the 12 week course and I hope you follow along.</p>
            </div>
        </div> 
    </div>
    </div>
		)
	}
});

module.exports = Index;