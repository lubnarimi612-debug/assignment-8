"use client";
import { authClient } from "@/lib/auth-client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
import { toast } from "react-toastify";

const Page = () => {

  const userData = authClient.useSession();
  const user = userData.data?.user;
  // console.log(user);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const formdata = Object.fromEntries(formData.entries());
    const { error } = await authClient.updateUser({
      image: formdata.image,
      name: formdata.name,
    });
    if (!error) {
      toast.success('Profile Update Sucssesfully')
    }

  
  
  };

  return (
    <div className="bg-gray-300">
      <div className="flex justify-center items-center py-4  md:py-50">
        <div className="card w-96 bg-base-100 shadow-2xl border border-gray-200">
          <figure className="px-10 pt-10">
            <Image
              src={user?.image}
              width={1000}
              height={1000}
             alt="proflie pic"
              className="rounded-full w-32 h-32 object-cover border-4 border-primary"
            ></Image>
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title text-2xl font-bold">{user?.name}</h2>
            <p className="text-gray-500">
              {" "}
              <i>{user?.email}</i>{" "}
            </p>

            <div className="divider w-full"></div>

            <div className="card-actions w-full">
              {/* You can open the modal using document.getElementById('ID').showModal() method */}
              <button
                className="btn  mx-auto"
                onClick={() =>
                  document.getElementById("my_modal_3").showModal()
                }
              >
                <p className="text-center font-semibold ">
                  Update Your Profile{" "}
                </p>
              </button>
              <dialog id="my_modal_3" className="modal">
                <div className="modal-box">
                  <form method="dialog">
                    {/* if there is a button in form, it will close the modal */}
                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                      ✕
                    </button>
                  </form>
                  <form onSubmit={handleSubmit}>
                    <div className="max-w-md mx-auto bg-base-50 p-8 m-10 shadow-xl rounded-2xl border">
                      <h2 className="text-2xl font-bold mb-6 text-center">
                        Update Profile
                      </h2>
                      <div className="space-y-4">
                        <div className="">
                          <label className=" ">
                            <span className="label-text font-semibold text-left block">
                              Full Name
                            </span>
                          </label>
                          <input
                            type="text"
                            name="name"
                             required
                            placeholder="Enter your name"
                            className="input input-bordered w-full"
                          />
                        </div>
                        <div className="form-control">
                          <label className="">
                            <span className="label-text font-semibold text-left block">
                              Photo URL
                            </span>
                          </label>
                          <input
                            type="text"
                            name="image"
                             required
                            placeholder="https://example.com/photo.jpg"
                            className="input input-bordered w-full"
                          />
                        </div>
                        <button
                          type="submit"
                          className="btn btn-success btn-block mt-4 text-white"
                        >
                          Save Changes
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </dialog>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;