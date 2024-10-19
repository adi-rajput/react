import React, { useState } from "react";
import { z } from "zod";

const Form = () => {
  const [form, setForm] = useState({
    email: "",
    password: ""
  });
  const [errors, setErrors] = useState({
    email: "",
    password: ""
  });

  // Define schema using Zod
  const schema = z.object({
    email: z.string().email({ message: "Invalid email address" }),
    password: z.string().min(6, { message: "Password must be at least 6 characters" })
  });

  // Handle form field changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent form reload

    try {
      schema.parse(form); // Validate the form data with Zod schema
      console.log("Validation successful", form);
      setErrors({ email: "", password: "" }); // Reset errors if validation is successful
    } catch (error) {
      // Format errors and set in state
      const formattedErrors = error.errors.reduce((acc, err) => {
        acc[err.path[0]] = err.message;
        return acc;
      }, {});
      setErrors(formattedErrors);
      console.log("Failed to validate form", formattedErrors);
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <form className="p-8 bg-white rounded-lg shadow-lg w-80" onSubmit={handleSubmit}>
        <h2 className="mb-6 text-2xl font-semibold text-center">Login</h2>

        {/* Email Field */}
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            className={`w-full px-4 py-2 mt-1 border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded-md focus:ring-2 focus:ring-purple-400 focus:outline-none`}
            placeholder="Enter your email"
            value={form.email}
            onChange={handleChange}
          />
          {errors.email && <p className="text-sm text-red-500">{errors.email}</p>}
        </div>

        {/* Password Field */}
        <div className="mb-6">
          <label htmlFor="password" className="block text-gray-700">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            className={`w-full px-4 py-2 mt-1 border ${errors.password ? 'border-red-500' : 'border-gray-300'} rounded-md focus:ring-2 focus:ring-purple-400 focus:outline-none`}
            placeholder="Enter your password"
            value={form.password}
            onChange={handleChange}
          />
          {errors.password && <p className="text-sm text-red-500">{errors.password}</p>}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full py-2 font-semibold text-purple-900 bg-purple-400 rounded-md hover:bg-purple-300 focus:ring-2 focus:ring-purple-400 focus:outline-none"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
