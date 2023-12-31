// pages/admin.tsx
import React from 'react'
import { type SubmitHandler, useForm } from 'react-hook-form'
import { gql, useMutation } from '@apollo/client'
import toast, { Toaster } from 'react-hot-toast'
import { getSession } from '@auth0/nextjs-auth0'
import prisma from '../lib/prisma'
import type { GetServerSideProps } from 'next'

type FormValues = {
  name: string;
  thumbnail: string;
  artist: string[];

}

const createSongMutation = gql`
  mutation createSong($name: String!, $thumbnail: String!, $artist: [String]!) {
    createSong(name: $name, thumbnail: $thumbnail, artist: $artist, ) {
      name
      thumbnail
      artist
    }
  }
`

const Admin = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormValues>()

  const [createSong, { loading, error }] = useMutation(createSongMutation, {
    onCompleted: () => reset()
  })

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    const { name, thumbnail, artist } = data

    const variables = { name, thumbnail, artist, }
    try {
      toast.promise(createSong({ variables }), {
        loading: 'Creating new link..',
        success: 'Link successfully created!🎉',
        error: `Something went wrong 😥 Please try again -  ${error}`,
      })

    } catch (error) {
      console.error(error)
    }
  }

  return (
    <div className="container mx-auto max-w-md py-12">
      <Toaster />
      <h1 className="text-3xl font-medium my-5">Create a new link</h1>
      <form className="grid grid-cols-1 gap-y-6 shadow-lg p-8 rounded-lg" onSubmit={handleSubmit(onSubmit)}>
        <label className="block">
          <span className="text-gray-700">Title</span>
          <input
            placeholder="Title"
            {...register('name', { required: true })}
            name="title"
            type="text"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          />
        </label>
        <label className="block">
          <span className="text-gray-700">Description</span>
          <input
            placeholder="Description"
            {...register('thumbnail', { required: true })}
            name="description"
            type="text"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          />
        </label>
        <label className="block">
          <span className="text-gray-700">Url</span>
          <input
            placeholder="https://example.com"
            {...register('artist', { required: true })}
            name="url"
            type="text"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          />
        </label>
 

        <button
          disabled={loading}
          type="submit"
          className="my-4 capitalize bg-blue-500 text-white font-medium py-2 px-4 rounded-md hover:bg-blue-600"
        >
          {loading ? (
            <span className="flex items-center justify-center">
              <svg
                className="w-6 h-6 animate-spin mr-1"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M11 17a1 1 0 001.447.894l4-2A1 1 0 0017 15V9.236a1 1 0 00-1.447-.894l-4 2a1 1 0 00-.553.894V17zM15.211 6.276a1 1 0 000-1.788l-4.764-2.382a1 1 0 00-.894 0L4.789 4.488a1 1 0 000 1.788l4.764 2.382a1 1 0 00.894 0l4.764-2.382zM4.447 8.342A1 1 0 003 9.236V15a1 1 0 00.553.894l4 2A1 1 0 009 17v-5.764a1 1 0 00-.553-.894l-4-2z" />
              </svg>
              Creating...
            </span>
          ) : (
            <span>Create Link</span>
          )}
        </button>
      </form>
    </div>
  )
}

export default Admin
// pages/admin.tsx
export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
    const session = await getSession(req, res);
  
    if (!session) {
      return {
        redirect: {
          permanent: false,
          destination: '/api/auth/login',
        },
        props: {},
      };
    }
  
    const user = await prisma.user.findUnique({
      select: {
        username: true,
        role: true,
      },
      where: {
        username: session.user.email,
      },
    });
  
    if (!user || user.role !== 'ADMIN') {
      return {
        redirect: {
          permanent: false,
          destination: '/404',
        },
        props: {},
      };
    }
  
    return {
      props: {},
    };
  };