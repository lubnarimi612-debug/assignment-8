"use client";
import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import { toast } from "react-toastify";


const page = () => {
    const router = useRouter();
  const handleGoogleSinnup = async () => {
    await authClient.signIn.social({
      provider: "google",
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const formdata = Object.fromEntries(formData.entries());

    //     console.log(formdata);
    const { data, error } = await authClient.signUp.email({
      name: formdata.name, // required
      email: formdata.email, // required
      password: formdata.password, // required
      image: formdata.image,
      //  callbackURL: "https://example.com/callback",
    });
    if (!error) {
        router.push("/");
        toast.success('Sign Up Sucssesfully')
      }
   if(error){
    toast.error( error.message)
   
   }
  };
  return (
    <div>
      <div className="min-h-[80vh] flex items-center justify-center bg-base-100 p-4">
        <div className="card bg-base-200  w-md max-w-md shadow-xl border border-base-300">
          <form onSubmit={handleSubmit} className="card-body  gap-4">
            {/* Title Section */}
            <div className="text-center mb-2">
              <h2 className="text-3xl font-bold font-serif text-primary">
                Create Account
              </h2>
              <p className="text-sm opacity-70 mt-1">
                Join us today! Please enter your details.
              </p>
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold">Full Name</span>
              </label>{" "}
              <br />
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                className="input input-bordered focus:input-primary transition-all"
                required
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold">Photo URL</span>
              </label>{" "}
              <br />
              <input
                type="url"
                name="image"
                placeholder="https://example.com/photo.jpg"
                className="input input-bordered focus:input-primary transition-all"
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold">Email Address</span>
              </label>{" "}
              <br />
              <input
                type="email"
                name="email"
                placeholder="name@company.com"
                className="input input-bordered focus:input-primary transition-all"
                required
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold">Password</span>
              </label>{" "}
              <br />
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered focus:input-primary transition-all"
                required
              />
            </div>

            <div className="form-control mt-4">
              <button
                type="submit"
                className="w-full bg-gray-900 hover:bg-blue-600 text-white font-medium py-3 rounded-xl transition-colors duration-300 flex items-center justify-center gap-2 hover:cursor-pointer"
              >
                Sign Up
              </button>
            </div>
          </form>

          <div className="divider text-xs opacity-50">OR CONTINUE WITH</div>

          <button
            onClick={handleGoogleSinnup}
            className="btn bg-white text-black mx-5 border-[#e5e5e5]"
          >
            <svg
              aria-label="Google logo"
              width="16"
              height="16"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <g>
                <path d="m0 0H512V512H0" fill="#fff"></path>
                <path
                  fill="#34a853"
                  d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                ></path>
                <path
                  fill="#4285f4"
                  d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                ></path>
                <path
                  fill="#fbbc02"
                  d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
                ></path>
                <path
                  fill="#ea4335"
                  d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                ></path>
              </g>
            </svg>
            Login with Google
          </button>

          <p className="text-center text-sm mt-2 mb-4">
            Already have an account?
            <Link href={"/login"} className="link link-primary font-semibold">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default page;