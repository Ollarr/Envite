import React, { useState } from "react";
import { useNavigate, } from "react-router-dom";


const initialState = {
  title: "",
  category: "",
  details: "",
};

const categoryOption = [
  "Fashion",
  "Tech",
  "Business",
];

const Create = () => {
  const [form, setForm] = useState(initialState);


  const navigate = useNavigate();

  const { title, category, details } = form;

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

 
const onCategoryChange = (e) => {
    setForm({ ...form, category: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
   
     navigate("/");
  };

  return (
    <div className="container-fluid mb-4">
      <div className="container">
        <div className="col-12">
          <div className="text-center heading py-2">
            Create Event
          </div>
        </div>
        <div className="row h-100 justify-content-center align-items-center">
          <div className="col-10 col-md-8 col-lg-6">
            <form className="row blog-form" onSubmit={handleSubmit}>
              <div className="col-12 py-3">
                <input
                  type="text"
                  className="form-control input-text-box"
                  placeholder="Title"
                  name="title"
                  value={title}
                  onChange={handleChange}
                />
              </div>
             
             
              <div className="col-12 py-3">
                <select
                  value={category}
                  onChange={onCategoryChange}
                  className="catg-dropdown"
                >
                  <option>Please select category</option>
                  {categoryOption.map((option, index) => (
                    <option value={option || ""} key={index}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>
              <div className="col-12 py-3">
                <textarea
                  className="form-control"
                  placeholder="Details"
                  value={details}
                  name="details"
                  onChange={handleChange}
                />
              </div>
              
              <div className="col-12 py-3 text-center">
                <button
                  className="btn btn-add"
                  type="submit"
                  style={{'backgroundImage': 'linear-gradient(#8456EC, #E87BF8)','padding': '16px', 'borderRadius':'10px', 'color':'#FFFFFF'}}
                >
                  Submit
                </button>
                <button onClick={() => navigate(-1)} style={{'backgroundImage': 'linear-gradient(#8456EC, #E87BF8)','padding': '16px', 'borderRadius':'10px', 'color':'#FFFFFF', 'marginLeft': '8px'}}>Go back</button>

              </div>
              </form>
              </div>
              </div>
              </div>
              </div>
  )
                  }

export default Create