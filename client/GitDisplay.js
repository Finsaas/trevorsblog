var React = require('react');
var GitData = require('./GitData');

var Github = React.createClass({

	render: function(){
		var gitStuff = this.props.data.map(function(commits){
			if(commits.coms){
			var commitInfo = commits.coms.map(function(c){
				return(
					<p>{c.message}</p>
					)
				});
			}
			return(
				<div className="container-fluid">             
					    <div className="panel panel-default">
					        <h3 className="panel-header">{commits.repo}</h3>
				                <div className="panel-body">
				                    <p>{commitInfo}</p>
				                </div>
			                	<div className="panel-footer">
			                   		{commits.timeStamp}
			                	</div>
			            </div>
			    </div>
			)
		});
		return(
			<div>
				<div className="container">
					<div className="col-md-4">
						<div className="well">
							<h3>Github</h3>
						</div>
					</div>		
				</div>
				<div>
					<div className="container">
						<div className="col-md-4">
							{gitStuff}
						</div>
					</div>
				</div>
			</div>
		)

	}
});

module.exports = Github;