var React = require('react');
var Link = require('react-router').Link;

var RouteConstants = require('../../constants/route-constants.js');

var Header = React.createClass({

  render: function() {

    return (
      <div className="navbar navbar-default navbar-fixed-top">
        <div className="container">
          <div className="navbar-header">
            <Link to={RouteConstants.HOME} className="navbar-brand">Flux react starter</Link>
          </div>
          <div className="navbar-collapse collapse">
            <ul className="nav navbar-nav">
              <li>
                <Link to={RouteConstants.EXAMPLE}>Example page</Link>
              </li>
            </ul>
            <ul className="nav navbar-nav navbar-right">
              <li>
                <a href="#">login</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }

});

module.exports = Header;
