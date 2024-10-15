// import { FaGoogle } from "react-icons/fa6";
import videoSrc from "../../assets/video/Before the Exam.mp4";
import { useDispatch } from "react-redux";
import { userLogin } from "../../features/AuthSlice";
import { useState } from "react";
import { AppDispatch } from "../../store";
import { Link, useNavigate } from "react-router-dom";

const LoginPage = () => {
  // const { loading } = useSelector((state) => state.user);
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const submitForm = (e: React.FormEvent) => {
    e.preventDefault();

    if(!formData.email || !formData.password) {
      alert("Please fill in all fields");
      return;
    }

    // console.log(formData);
    dispatch(
      userLogin({
        email: formData.email,
        password: formData.password,
      })
    );

    navigate("/");
  };

  return (
    <div className="flex items-center justify-center w-full gap-5 h-[100vh] bg-white">
      <section className="flex flex-col items-center gap-4 mx-7 text-center">
        <h1 className="font-bold text-4xl mb-5">Welcome 👋</h1>
        <form
          className="flex flex-col gap-2 items-center justify-center"
          onSubmit={(e) => submitForm(e)}
        >
          <input
            type="email"
            placeholder="Email"
            className="py-2 px-10 rounded-full w-72 border border-gray-300"
            name="email"
            onChange={(e) => handleChange(e)}
          />
          <input
            type="password"
            placeholder="Password"
            className="py-2 px-6 rounded-full w-72 border border-gray-300"
            name="password"
            onChange={(e) => handleChange(e)}
          />
          <button
            type="submit"
            className="mt-4 py-2 px-2 w-32 rounded-full bg-accent text-white"
          >
            Login
          </button>
        </form>
        <p className="text-gray-400">
          Don't have an account?{" "}
          <Link
            to="/signup"
            className="text-gray-700 font-semibold cursor-pointer hover:underline hover:decoration-wavy"
          >
            Sign up
          </Link>
        </p>
      </section>
      <section className="text-center flex item-center">
        <div className="w-[30rem]">
          <video
            autoPlay
            muted
            playsInline={true}
            key={videoSrc}
            className="pointer-events-none"
            loop
          >
            <source src={videoSrc} type="video/mp4" />
          </video>
        </div>
      </section>
    </div>
  );
};

export default LoginPage;
