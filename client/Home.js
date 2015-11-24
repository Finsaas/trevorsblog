var React = require('react');

var Index = React.createClass({
	render: function(){
		return(
	<div>


	<div className="jumbotron">
        <div>
            <h1>Coding Adventure</h1>
            <p> Follow me while I work through 12 weeks with Montana Code School!</p>
        </div>    
    </div>
    <div className="col-sm-4">
        <h4>                    
            <p><img src ="img/BlogPicture.jpg" className="picture"/></p>
        </h4>
    </div> 
    <div className="container">
     <div className="buttonDiv">
        <div>
            <ul className="col-sm-4 col-sm-offset-1">           
                <button className="navButtons" type="button">Home</button>
                <button className="navButtons" type="button">Blogs</button>
                <button className="navButtons" type="button">Contact</button>
                <button className="navButtons" type="button">Login</button>
                <button className="navButtons" type="button">Signup</button>
                <button className="navButtons" type="button">Post</button>  
            </ul>   
        </div>
    </div>      
    <div className="container">             
        <div className = "row">        
            <div className = "col-sm-4 col-sm-offset-1">    
                <p>My name is Trevor. I for the most part grew up in Missoula, Montana with a brother and three sisters.</p>
                <p>More recently I have developed an interest in coding and enrolled in the Montana Code school. I will be writing a weekly blog for the duration of the 12 week course and I hope you follow along.</p>
            </div>

        </div> 
    </div>
    </div>
    </div>
		)
	}
});

module.exports = Index;