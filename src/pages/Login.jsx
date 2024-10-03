// import React, { useState } from "react";

// const Login = () => {
//   //state will manage the login or create form
//   const [state, setState] = useState("Sign Up");
//   //now we will create three state values to store the name email and password values whatever the user will fill during signup
//   const [email, setEmail] = useState("");
//   const [name, setName] = useState("");
//   const [password, setPassword] = useState("");
//   //event means whatever we will get from this from
//   const onSubmitHandler = async (event) => {
//     //event.preventDefault()== whenever we will submit the form it will not reload the webpage
//     event.preventDefault();
//   };
//   return (
//     <form className="min-h-[80vh] flex items-center">
//       <div className="flex flex-col gap-3 m-auto items-start p-8 min-w-[340px] sm:min-w-96 border rounded-xl text-zinc-600 text-sm shadow-lg">
//         <p className="text-2xl font-semibold">
//           {state === "Sign Up" ? "Create Account" : "Login"}
//         </p>
//         <p>
//           Please {state === "Sign Up" ? "sign up" : "Login"} to book
//           appointments.
//         </p>
//         {state === "Sign Up" && (
//           <div className="w-full">
//             <p>Full Name</p>
//             <input
//               className="
//           border border-zinc-300 rounded w-full p-2 mt-1"
//               type="text"
//               onChange={(e) => setName(e.target.value)}
//               value={name}
//               required
//             ></input>
//           </div>
//         )}
//         <div className="w-full">
//           <p>Email</p>
//           <input
//             className="
//           border border-zinc-300 rounded w-full p-2 mt-1"
//             type="email"
//             onChange={(e) => setEmail(e.target.value)}
//             value={email}
//             required
//           ></input>
//         </div>
//         <div className="w-full">
//           <p>Password</p>
//           <input
//             className="
//           border border-zinc-300 rounded w-full p-2 mt-1"
//             type="password"
//             onChange={(e) => setPassword(e.target.value)}
//             value={password}
//             required
//           ></input>
//         </div>
//         <button className="bg-primary text-white w-full py-2 rounded-md text-base">
//           {state === "Sign Up" ? "Create Account" : "Login"}
//         </button>
//         {state === "Sign Up" ? (
//           <p>
//             Already have an account?
//             <span
//               onClick={() => setState("Login")}
//               className="text-blue-500 underline cursor-pointer"
//             >
//               Login here
//             </span>
//           </p>
//         ) : (
//           <p>
//             Create a new account?
//             <span
//               onClick={() => setState("Sign Up")}
//               className="text-blue-500 underline cursor-pointer"
//             >
//               Click here
//             </span>
//           </p>
//         )}
//       </div>
//     </form>
//   );
// };

// export default Login;
import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate

const Login = () => {
  // State will manage the login or create form
  const [state, setState] = useState("Sign Up");
  // Create state values to store the name, email, and password
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  // Initialize navigate
  const navigate = useNavigate();

  // Event handler for form submission
  const onSubmitHandler = async (event) => {
    // Prevent page reload
    event.preventDefault();

    // Perform your form submission logic here (e.g., API call)

    // After successful submission, redirect to the home page
    navigate("/");
  };

  return (
    <form className="min-h-[80vh] flex items-center" onSubmit={onSubmitHandler}>
      <div className="flex flex-col gap-3 m-auto items-start p-8 min-w-[340px] sm:min-w-96 border rounded-xl text-zinc-600 text-sm shadow-lg">
        <p className="text-2xl font-semibold">
          {state === "Sign Up" ? "Create Account" : "Login"}
        </p>
        <p>
          Please {state === "Sign Up" ? "sign up" : "Login"} to book
          appointments.
        </p>
        {state === "Sign Up" && (
          <div className="w-full">
            <p>Full Name</p>
            <input
              className="border border-zinc-300 rounded w-full p-2 mt-1"
              type="text"
              onChange={(e) => setName(e.target.value)}
              value={name}
              required
            />
          </div>
        )}
        <div className="w-full">
          <p>Email</p>
          <input
            className="border border-zinc-300 rounded w-full p-2 mt-1"
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            required
          />
        </div>
        <div className="w-full">
          <p>Password</p>
          <input
            className="border border-zinc-300 rounded w-full p-2 mt-1"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            required
          />
        </div>
        <button className="bg-primary text-white w-full py-2 rounded-md text-base">
          {state === "Sign Up" ? "Create Account" : "Login"}
        </button>
        {state === "Sign Up" ? (
          <p>
            Already have an account?
            <span
              onClick={() => setState("Login")}
              className="text-blue-500 underline cursor-pointer"
            >
              Login here
            </span>
          </p>
        ) : (
          <p>
            Create a new account?
            <span
              onClick={() => setState("Sign Up")}
              className="text-blue-500 underline cursor-pointer"
            >
              Click here
            </span>
          </p>
        )}
      </div>
    </form>
  );
};

export default Login;
