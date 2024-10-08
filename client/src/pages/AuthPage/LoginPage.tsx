// import { FaGoogle } from "react-icons/fa6";
import videoSrc from "../../assets/video/Before the Exam.mp4";

const LoginPage = () => {
  return (
    <div className="flex items-center justify-center w-full gap-5 h-[100vh] bg-white">
      <section className="flex flex-col items-center gap-4 mx-7 text-center">
        <h1 className="font-bold text-4xl mb-5">Welcome 👋</h1>
        {/* <div className="my-2">
          <p className="my-2">Please enter your details</p>
          <button className="py-2 px-8 border-2 border-black rounded-full flex gap-2 items-center w-80">
            <FaGoogle size={20} />
            Login with Google
          </button>
          <button className="py-2 px-8 border-2 border-black rounded-full flex gap-2 items-center w-80">
            <FaGoogle size={20} />
            Login with Facebook
          </button>
        </div> */}
        <form className="flex flex-col gap-2 items-center justify-center">
          <input
            type="text"
            placeholder="Email"
            className="py-2 px-10 rounded-full w-72 border border-gray-300"
          />
          <input
            type="password"
            placeholder="Password"
            className="py-2 px-6 rounded-full w-72 border border-gray-300"
          />
          <button className="mt-4 py-2 px-2 w-32 rounded-full bg-accent text-white">
            Login
          </button>
        </form>
        <p className="text-gray-400">
          Don't have an account?{" "}
          <a
            href="/signup"
            className="text-gray-700 font-semibold cursor-pointer hover:underline hover:decoration-wavy"
          >
            Sign up
          </a>
        </p>
      </section>
      <section className="text-center flex item-center">
        {/* <img src="https://via.placeholder.com/500" alt="image" /> */}
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
