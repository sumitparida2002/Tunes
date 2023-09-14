import React from "react";
import { gql, useMutation } from "@apollo/client";
import { type SubmitHandler, useForm } from "react-hook-form";

import toast, { Toaster } from "react-hot-toast";

type FormValues = {
  title: string;
};

const createPlaylistMutation = gql`
  mutation createPlaylist($title: String!) {
    createPlaylist(title: $title) {
      title
    }
  }
`;

export default function Modal() {
  const [showModal, setShowModal] = React.useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormValues>();

  const [createPlaylist, { loading, error }] = useMutation(
    createPlaylistMutation,
    {
      onCompleted: () => reset(),
    }
  );

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    const { title } = data;
    const variables = { title };
    try {
      toast.promise(createPlaylist({ variables }), {
        loading: "Creating new link..",
        success: "Link successfully created!🎉",
        error: `Something went wrong 😥 Please try again -  ${error}`,
      });
    } catch (error) {
      console.log(error);
    }

    // setShowModal(false);
  };
  return (
    <>
      <Toaster />

      <button
        className="  text-gray-600 flex items-center gap-1  text-sm tracking-wide  outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
        type="button"
        onClick={() => setShowModal(true)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="bi bi-plus"
          viewBox="0 0 16 16"
        >
          <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
        </svg>
        Create a new playlist
      </button>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 outline-none focus:outline-none">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="relative  z-40 my-6  mx-auto max-w-3xl">
                {/*content*/}
                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full  px-12 bg-white outline-none focus:outline-none">
                  {/*header*/}
                  <div className="flex items-start justify-between mt-8  mb-4 rounded-t">
                    <h3 className="text-3xl font-semibold">Create Playlist</h3>
                  </div>
                  {/*body*/}
                  <label className="block">
                    <span className="text-gray-700 text-lg">Title</span>
                    <input
                      placeholder="Title"
                      {...register("title", { required: true })}
                      name="title"
                      type="text"
                      className="mt-1 block w-full text-lg rounded-md border-gray-300 shadow-sm focus:outline-none"
                    />
                  </label>
                  {/*footer*/}
                  <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                    <button
                      className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                      type="button"
                      onClick={() => setShowModal(false)}
                    >
                      Close
                    </button>
                    <button
                      className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                      type="submit"
                    >
                      Create
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </>
      ) : null}
    </>
  );
}
