import React, { useState } from "react";

const App = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-300 to-purple-300">
      <div className="bg-white p-12 rounded-lg shadow-lg w-96 h-auto">
        <div className="flex justify-between mb-8">
          <button
            onClick={() => setIsLogin(true)} 
            className={`py-3 px-12 rounded-tl-lg rounded-bl-lg text-lg font-semibold transition-colors duration-300 ${
              isLogin
                ? "bg-blue-600 text-white" 
                : "bg-gray-200 text-gray-600 hover:bg-blue-100" 
            }`}
          >
            Login
          </button>
          <button
            onClick={() => setIsLogin(false)} 
            className={`py-3 px-12 rounded-tr-lg rounded-br-lg text-lg font-semibold transition-colors duration-300 ${
              !isLogin
                ? "bg-blue-600 text-white" 
                : "bg-gray-200 text-gray-600 hover:bg-blue-100" 
            }`}
          >
            Signup
          </button>
        </div>

        <form>
          <div className="mb-6">
            <input
              type="email"
              placeholder="Email Address"
              className="w-full px-5 py-4 border rounded-lg "
            />
          </div>
          <div className="mb-6">
            <input
              type="password"
              placeholder="Password"
              className="w-full px-5 py-4 border rounded-lg "
            />
          </div>
          <div className="mb-6 text-right">
            <a href="#" className="text-blue-600 hover:underline">
              Forgot password?
            </a>
          </div>
          <button className="w-full bg-blue-600 text-white py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition duration-300">
            {isLogin ? "Login" : "Signup"}
          </button>
        </form>

        <p className="mt-8 text-center text-gray-600">
          {isLogin ? "Create an account" : "Already have an account?"}{" "}
          <a href="#" className="text-blue-600 hover:underline">
            {isLogin ? "Signup now" : "Login here"}
          </a>
        </p>
      </div>
    </div>
  );
};

export default App;
