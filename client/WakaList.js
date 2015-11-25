var React = require('react');
var WakaBox = require('./WakaBox');

var WakaList = React.createClass({

	render: function(){
		var wakaStuff = this.props.data.map(function(waka){
			
			var wakaInfo = waka.languages.map(function(c){
				return(
					<p>{c.name} - {c.percent}</p>
					)
				})
			
			return(
				<div className="container-fluid">             
					    <div className="panel panel-default">
					        <h3 className="panel-header">{waka.id}</h3>
				                <div className="panel-body">
				                    <p>{wakaInfo}</p>
				                </div>
			                	<div className="panel-footer">
			                   		
			                	</div>
			            </div>
			    </div>
			)
		});
		return(
			<div>
				<div className="container" >
					<div className="col-md-4">
						<div className="well">
							<h3>Wakatime</h3>
						</div>
					</div>		
				</div>
				<div>
					<div className="container">
						<div className="col-md-4">
							{wakaStuff}
						</div>
					</div>
				</div>
			</div>
		)

	}
});

module.exports = WakaList;