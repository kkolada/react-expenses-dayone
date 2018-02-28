import React from 'react';
import './ExpenseTable.css';
import { ExpenseTableRow } from './ExpenseTableRow';
import { expenses } from '../data';
import { map } from 'lodash';

export class ExpenseTable extends React.Component {

  constructor() {
    super();

    this.state = {
      expensesList: expenses
    }
  }

  statusClicked = (item) => {
    const newExpenseList = map(this.state.expensesList, (el) => {
      if (el.id === item.id) {
        el.pending = !el.pending;
      }

      return el;
    });

    this.setState({
      expensesList: newExpenseList
    })
  };

  render() {
    const rows = map(expenses, (item) => {
      const { rowClicked } = this.props;
      return <ExpenseTableRow key={item.id} item={item} rowClicked={rowClicked} statusClicked={this.statusClicked}/>;
    });

    return (
      <div id="expense-list" className="card mb-4 box-shadow">
        <div className="card-header">
          <h4 className="my-0 font-weight-normal">Expenses</h4>
        </div>
        <div className="card-body p-0">
          <table className="table mb-0">
            <thead>
            <tr>
              <th scope="col">Category</th>
              <th scope="col">Date</th>
              <th scope="col">Amount</th>
              <th scope="col">Description</th>
              <th scope="col">Status</th>
            </tr>
            </thead>
            <tbody>
            { rows }
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}