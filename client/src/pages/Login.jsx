import React, { useState } from 'react'
import { Lock, Mail, User2 } from 'lucide-react'

const Login = () => {
  const [state, setState] = useState(() => {
    const query = new URLSearchParams(window.location.search);
    return query.get("state") || "login";
  });

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (state === "login") {
        console.log("Login Data:", {
          email: formData.email,
          password: formData.password,
        });

        // Example API call
        // await axios.post("/api/auth/login", {
        //   email: formData.email,
        //   password: formData.password,
        // });
      } else {
        console.log("Signup Data:", formData);

        // Example API call
        // await axios.post("/api/auth/register", formData);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50 px-4">
      <form
        onSubmit={handleSubmit}
        className="w-full sm:w-[380px] border border-gray-300/60 rounded-2xl px-8 bg-white shadow-sm"
      >
        <h1 className="text-gray-900 text-3xl mt-10 font-medium">
          {state === "login" ? "Login" : "Sign Up"}
        </h1>

        <p className="text-gray-500 text-sm mt-2">
          Please {state === "login" ? "login" : "sign up"} to continue
        </p>

        {state === "signup" && (
          <div className="flex items-center mt-6 w-full border border-gray-300/80 h-12 rounded-full overflow-hidden px-5 gap-3">
            <User2 size={18} className="text-gray-500" />
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              className="w-full bg-transparent outline-none"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
        )}

        <div className="flex items-center w-full mt-4 border border-gray-300/80 h-12 rounded-full overflow-hidden px-5 gap-3">
          <Mail size={18} className="text-gray-500" />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            className="w-full bg-transparent outline-none"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="flex items-center mt-4 w-full border border-gray-300/80 h-12 rounded-full overflow-hidden px-5 gap-3">
          <Lock size={18} className="text-gray-500" />
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="w-full bg-transparent outline-none"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>

        {state === "login" && (
          <div className="mt-4 text-left">
            <button
              type="button"
              className="text-sm text-indigo-500 hover:underline"
            >
              Forgot password?
            </button>
          </div>
        )}

        <button
          type="submit"
          className="mt-5 w-full h-11 rounded-full text-white bg-indigo-500 hover:bg-indigo-600 transition-colors"
        >
          {state === "login" ? "Login" : "Sign Up"}
        </button>

        <p className="text-gray-500 text-sm text-center mt-4 mb-10">
          {state === "login"
            ? "Don't have an account?"
            : "Already have an account?"}

          <button
            type="button"
            onClick={() =>
              setState((prev) =>
                prev === "login" ? "signup" : "login"
              )
            }
            className="ml-1 text-indigo-500 hover:underline"
          >
            Click here
          </button>
        </p>
      </form>
    </div>
  );
};

export default Login;