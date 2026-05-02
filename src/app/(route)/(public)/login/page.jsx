"use client";
import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import React from "react";
import { toast } from "react-toastify";

const page = () => {
   const handleSubmit = async (e) => {
      e.preventDefault();
  
      const formData = new FormData(e.currentTarget);
      const formdata = Object.fromEntries(formData.entries());
  

      const { data, error } = await authClient.signIn.email({
       
        email: formdata.email, // required
        password: formdata.password, // required
      
        callbackURL: "/",
      });
if(!error){
 toast.success('User Log in Sucssesfully ')

}
if(error){
 toast.error( error.message)

}
    };
  return (
    <div>
      <div className="card bg-base-300 md:p-50  shadow-2xl border border-base-300 flex items-center">
        <form onSubmit={handleSubmit} className="card-body p-8">
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
            <legend className="fieldset-legend text-center text-2xl font-bold font-serif ">Login</legend>

            <label className="label text-black text-[18px] ">Email</label>
            <input name="email" type="email" className="input" placeholder="Email" />

            <label className="label  text-black text-[18px]">Password</label>
            <input name="password" type="password" className="input" placeholder="Password" />

            <button type="submit" className="w-full bg-gray-900 hover:cursor-pointer hover:bg-blue-600 text-white font-medium py-3 rounded-md transition-colors duration-300 flex items-center justify-center gap-2 mt-2">Login</button>
            <p className="text-center text-sm mt-4">
              Don't have an account?
             <Link href={'/signup'}>  <button className="link link-primary font-medium">Sign Up</button> </Link>
            </p>
          </fieldset>

    
        </form>
      </div>
    </div>
  );
};

export default page;