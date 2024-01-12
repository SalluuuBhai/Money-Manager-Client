import { Form, FormControl } from "react-bootstrap";
import Sidebar from "../sidebar/Sidebar";
import React, { useState } from "react";
import { addIncome } from "../../api/api";
import "../income/Income.css";
// import {Link, Routes, Route, useNavigate} from 'react-router-dom';
import { useHistory } from "react-router-dom";

const Income = () => {
  const [formData, setFormData] = useState({
    title: "",
    amount: "",
    date: "",
    type: "Select Income", // default value for select
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
    e.preventDefault();
    
    console.log("Form data submitted:", formData);

    // Add additional logic for form submission, such as sending data to a server.
    try {
      await addIncome(formData);
      console.log("Income Added Successfully!");
      setFormData({
        title: "",
        amount: "",
        date: "",
        type: "Select Income",
        comment: "",
      });
      history.push("/");
    } catch (error) {
      console.error("Error adding income:", error);
    }
  };

  return (
    <>
      <Sidebar />
      <div className="container-fluid">
        <h2 className="heading1">Add Income</h2>
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
                Select Income Type
              </label>
              <select
                className="form-select"
                id="type"
                name="type"
                value={formData.type}
                onChange={handleChange}
              >
                <option>Select Income</option>
                <option value="salary">Salary</option>
                <option value="freelancing">Freelancing</option>
                <option value="investments">Investments</option>
                <option value="stocks">Stocks</option>
                <option value="cryptocurrency">Cryptocurrency</option>
                <option value="bankTransfer">Bank Transfer</option>
                <option value="youtube">YouTube</option>
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

export default Income;
