import React, { Component } from 'react';
import { connect } from 'react-redux';
import QuoteCard from '../components/QuoteCard';
import { removeQuote, upvoteQuote, downvoteQuote } from '../reducers/quotes'

class Quotes extends Component {

  render() {
    return (
      <div>
        <hr />
        <div className="row justify-content-center">
          <h2>Quotes</h2>
        </div>
        <hr />
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              {this.props.quotes.map(q => <QuoteCard key={q.id} quote={q} removeQuotes={this.props.removeQuote} upvoteQuote={this.props.upvoteQuote} downvoteQuote={this.props.downvoteQuote} />)}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state){
  return {
    quotes: state.quotes
  }
}

function mapDispatchToProps(dispatch){
  return {
    removeQuote: id => dispatch(removeQuote(id)),
    upvoteQuote: id => dispatch(upvoteQuote(id)),
    downvoteQuote: id => dispatch(downvoteQuote(id))
  }
}

//add arguments to connect as needed
export default connect(mapStateToProps, mapDispatchToProps)(Quotes);
