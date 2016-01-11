const React = require('react');
const DispatchedActions = require('../actions/DispatchedActions');


var Counter = React.createClass({

  render: function() {
    return (
      <div>
        //<div className="col-md-1">
        	<b>Count:</b> {this.props.countValue}
        //</div>
        //<div className="col-md-1">
        	<button type="button" className="btn btn-default btn-lg" onClick={this._onclick}>
      		  <span className="glyphicon glyphicon-plus" aria-hidden="true"></span> Increase
      		</button>
        //</div>
      </div>
    );
  },

  _onclick : function() {
  	DispatchedActions.addToValue(1);
  },

});

module.exports = Counter;
