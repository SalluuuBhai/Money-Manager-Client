import React from "react";
import Sidebar from "../sidebar/Sidebar";
import { getAllIncome, getAllExpense } from "../../api/api";
import { useEffect, useState } from "react";
import Income from "../income/Income";
import "../../App.css";

const BaseDefault = () => {
  let [income, setIncome] = useState();
  let [expense, setExpense] = useState();
  let fetchData = async () => {
    let data = await getAllIncome();
    setIncome(data.data);
    console.log(data);
    let data1 = await getAllExpense();
    setExpense(data1.data);
    console.log(data1);
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <Sidebar />
      <div className="container-fluid">
        <h1 className="heading1">View Transaction</h1>
        <div className="container well">
          <h2 className="heading2">All Transaction</h2>
          <div className="card-body">
            <div className="income">
              <h3 className="title">Income</h3>
              <div>
                <table class="table table-striped table-dark">
                  <thead >
                    <tr>
                      <th scope="col">Title</th>
                      <th scope="col">Amount</th>
                      <th scope="col">Date</th>
                    </tr>
                  </thead>

                  {income &&
                    income.map((item, index) => (
                      <tbody key={index}>
                        <tr>
                          <td>{item.title}</td>
                          <td>{item.amount}</td>
                          <td>{item.date.slice(0, 10)}</td>
                        </tr>
                      </tbody>
                    ))}
                </table>
              </div>
            </div>
            <div className="expense">
              <h3 className="title">Expense</h3>
              <div>
                <table class="table table-striped table-dark">
                  <thead >
                    <tr>
                      <th scope="col">Title</th>
                      <th scope="col">Amount</th>
                      <th scope="col">Date</th>
                    </tr>
                  </thead>

                  {expense &&
                    expense.map((item, index) => (
                      <tbody key={index}>
                        <tr>
                          <td>{item.title}</td>
                          <td>{item.amount}</td>
                          <td>{item.date.slice(0, 10)}</td>
                        </tr>
                      </tbody>
                    ))}
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BaseDefault;
