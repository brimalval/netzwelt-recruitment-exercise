import React from "react";

async function handleSubmit() {
  alert("Log-in");
}

const Login: React.FC = () => {
  return (
    <div>
      <h1 className="p-6">Login</h1>
      <form action="#" onSubmit={handleSubmit}>
        <div className="content-center">
          <div className="flex flex-col items-center space-y-5">
            <input
              type="text"
              name="username"
              placeholder="username"
              className="px-2 py-1"
            />
            <input
              type="password"
              name="password"
              placeholder="password"
              className="px-2 py-1"
            />
            <button
              type="submit"
              className="bg-purple-400 text-white px-2 py-1"
            >
              Login
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
