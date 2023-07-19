import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";

const initialState = {
  title: "",
  category: "",
  details: "",
};

const categoryOption = ["Party", "Music", "Fashion", "Tech", "Business"];

const Create = () => {
  const [form, setForm] = useState(initialState);
  const [events, setEvents] = useState([]); // New state for storing events
  // const navigate = useNavigate();

  const { title, category, details } = form;

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const onCategoryChange = (e) => {
    setForm({ ...form, category: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Create a new event object with the form data
    const newEvent = {
      title: form.title,
      category: form.category,
      details: form.details,
    };
    // Add the new event to the list of events
    setEvents([...events, newEvent]);
    // Clear the form fields after submission
    setForm(initialState);
  };

  return (
    <div className="container mx-auto p-4">
      <div className="text-center text-4xl font-bold pb-6">Create Event</div>
      <div className="flex justify-center">
        <div className="w-full max-w-md">
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <input
                type="text"
                className="w-full p-4 rounded border"
                placeholder="Title"
                name="title"
                value={title}
                onChange={handleChange}
              />
            </div>
            <div className="mb-4">
              <select
                value={category}
                onChange={onCategoryChange}
                className="w-full p-4 rounded border"
              >
                <option>Please select category</option>
                {categoryOption.map((option, index) => (
                  <option value={option || ""} key={index}>
                    {option}
                  </option>
                ))}
              </select>
            </div>
            <div className="mb-4">
              <textarea
                className="w-full p-4 rounded border"
                placeholder="Details"
                value={details}
                name="details"
                onChange={handleChange}
              />
            </div>
            <div className="text-center">
              <button
                className="bg-gradient-to-r from-purple-500 to-pink-500 px-6 py-3 rounded text-white font-bold"
                type="submit"
              >
                Submit
              </button>
              <button
                className="bg-gradient-to-r from-purple-500 to-pink-500 px-6 py-3 rounded text-white font-bold ml-4"
                // onClick={() => navigate(-1)}
              >
                Go back
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="mt-8 flex items-center">
        {events.length > 0 && (
          <section className="mx-auto">
            <h2 className="text-2xl font-bold mb-4">Added Events:</h2>
            <div className="flex space-x-4">
              {events.map((event, index) => (
                <div key={index} className="w-52 border-2 p-4 mb-4">
                  <h3 className="text-lg font-bold">{event.title}</h3>
                  <p className="mb-2">Category: {event.category}</p>
                  <p>{event.details}</p>
                </div>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
};

export default Create;
