import { Form, FormControl } from "react-bootstrap";
import Sidebar from "../sidebar/Sidebar";
import React, { useState } from "react";
import { addExpense } from "../../api/api";
import "../expense/Expense.css";
// import {Link, Routes, Route, useNavigate} from 'react-router-dom';
import { useHistory } from "react-router-dom";

const Expense = () => {
  const [formData, setFormData] = useState({
    title: "",
    amount: "",
    date: "",
    type: "Select Expense", // default value for select
    comment: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const history = useHistory();
  const handleSubmit = async (e) => {
    // const navigate = useNavigate();
    e.preventDefault();
    history.push("/");
    console.log("Form data submitted:", formData);
    // navigate('/');

    // Add additional logic for form submission, such as sending data to a server.
    try {
      await addExpense(formData);
      console.log("Expense Added Successfully!");
      setFormData({
        title: "",
        amount: "",
        date: "",
        type: "Select Expense",
        comment: "",
      });
    } catch (error) {
      console.error("Error adding Expense:", error);
    }
  };

  return (
    <>
      <Sidebar />
      <div className="container-fluid">
        <h2 className="heading1">Add Expense</h2>
        <div className="form text-center">
          <Form className="form-inline text-center" onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="title" className="form-label">
                Title
              </label>
              <input
                type="text"
                className="form-control"
                id="title"
                name="title"
                placeholder="Salary Title"
                value={formData.title}
                onChange={handleChange}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="amount" className="form-label">
                Amount
              </label>
              <input
                type="number"
                className="form-control"
                id="amount"
                name="amount"
                placeholder="Salary Amount"
                value={formData.amount}
                onChange={handleChange}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="date" className="form-label">
                Date
              </label>
              <input
                type="date"
                className="form-control"
                id="date"
                name="date"
                placeholder="Due date"
                value={formData.date}
                onChange={handleChange}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="type" className="form-label">
                Select Expense Type
              </label>
              <select
                className="form-select"
                id="type"
                name="type"
                value={formData.type}
                onChange={handleChange}
              >
                <option>Select Expense</option>
                <option value="education">Education</option>
                <option value="rent">Rent</option>
                <option value="groceries">Groceries</option>
                <option value="health">Health</option>
                <option value="subscriptions">Subscription</option>
                <option value="takeaways">Takeaways</option>
                <option value="clothing">Clothing</option>
                <option value="travelling">Travelling</option>
                <option value="others">Others</option>
              </select>
            </div>

            <div className="mb-3">
              <label htmlFor="comment" className="form-label">
                Comment
              </label>
              <FormControl
                as="textarea"
                rows={3}
                id="comment"
                name="comment"
                placeholder="Add A Reference"
                value={formData.comment}
                onChange={handleChange}
              />
            </div>

            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </Form>
        </div>
      </div>
    </>
  );
};

export default Expense;
