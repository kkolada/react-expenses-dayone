import React from 'react';
import { ExpenseDetails } from './ExpenseDetails';
import { ExpenseTable } from './ExpenseTable';

export class Cards extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      item: null
    }
  }

  onClickHandler = (item) => {
    this.setState({
      item: item
    });
  };

  render() {
    const {item} = this.state;

    return (
      <div className="row mb-3 text-center">
        <div className="col-9">
          <ExpenseTable rowClicked={this.onClickHandler}/>
        </div>
        <div className="col-3">
          {item != null ? <ExpenseDetails item={item}/> : null}
        </div>
      </div>
    );
  }
}