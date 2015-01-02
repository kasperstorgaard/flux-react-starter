var React = require('react');

var ExamplePage = React.createClass({

  render: function() {
    return (
      <section id="mainstage">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="jumbotron">
                <h1>Example Page</h1>
                <p>Example page text.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

});

module.exports = ExamplePage;
