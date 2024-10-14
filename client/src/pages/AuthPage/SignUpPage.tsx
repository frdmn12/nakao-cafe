import { useDispatch } from "react-redux";
import { AppDispatch } from "../../store";
import { useState } from "react";
import { userSignUp } from "../../features/AuthSlice";
import { useNavigate } from "react-router-dom";

const SignUpPage = () => {
  const dispatch = useDispatch<AppDispatch>();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // console.log(e.target.value);
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const navigate = useNavigate();

  const submitForm = (e: React.FormEvent) => {
    e.preventDefault();
    // console.log(formData);

    if (!formData.email || !formData.password || !formData.confirmPassword) {
      alert("Please fill in all fields");
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    dispatch(userSignUp({
      name: formData.name,
      email: formData.email,
      password: formData.password,
    }));

    navigate("/login");
  };

  return (
    <div className="flex items-center justify-center m-32 gap-5 h-[85vh]">
      <section className="flex flex-col items-center gap-4 mx-7 text-center">
        <h1 className="font-bold text-4xl mb-5">Make an Account😆</h1>
        <form
          className="flex flex-col gap-2 items-center justify-center"
          onSubmit={(e) => submitForm(e)}
        >
          <input
            type="text"
            placeholder="Name"
            className="py-2 px-10 rounded-full w-72 border border-gray-300"
            onChange={(e) => handleChange(e)}
            name="name"
          />
          <input
            type="email"
            placeholder="Email"
            className="py-2 px-10 rounded-full w-72 border border-gray-300"
            onChange={(e) => handleChange(e)}
            name="email"
          />
          <input
            type="password"
            placeholder="Password"
            className="py-2 px-6 rounded-full w-72 border border-gray-300"
            onChange={(e) => handleChange(e)}
            name="password"
          />
          <input
            type="password"
            placeholder="Confirm Password"
            className="py-2 px-6 rounded-full w-72 border border-gray-300"
            name="confirmPassword"
            onChange={(e) => handleChange(e)}
          />
          <button className="mt-4 py-2 px-2 w-32 rounded-full bg-accent text-white" type="submit">
            Sign Up
          </button>
        </form>
        <p className="text-gray-400">
          Don't have an account?{" "}
          <a
            href="/login"
            className="text-gray-700 font-semibold cursor-pointer hover:underline hover:decoration-wavy"
          >
            Login
          </a>
        </p>
      </section>
      {/* <section>
        <img src="https://via.placeholder.com/500" alt="image" />
      </section> */}
    </div>
  );
};

export default SignUpPage;
