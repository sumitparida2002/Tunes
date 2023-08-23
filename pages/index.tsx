import Image from 'next/image'
import { Inter } from 'next/font/google'
import { gql, useQuery,useMutation } from '@apollo/client'
import type { Song } from '@prisma/client'
import Card from '@/components/Card'

const inter = Inter({ subsets: ['latin'] })



const AllSongsQuery=gql`
query AllSongsQuery($first: Int, $after: ID) {
  songs(first: $first, after: $after) {
    pageInfo {
      endCursor
      hasNextPage
    }
    edges {
      cursor
      node {
        id
        name
        artist
        thumbnail
      }
    }
  }
}`

export default function Home() {
  const { data, loading, error,fetchMore } = useQuery(AllSongsQuery,
    {
      variables: { first: 3 },
    })
  if (loading) return <p>Loading...</p>
  if (error) return <p>Oh no... {error.message}</p>
  const { endCursor, hasNextPage } = data.songs.pageInfo;


  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
     <div className="container mx-auto max-w-5xl my-20">
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {data.songs.edges.map(({node}: {node:Song}) => (
            <Card props={node} />
            // <li key={node.id} className="shadow  max-w-md  rounded">
            //   <img className="shadow-sm" src={node.thumbnail? "https://upload.wikimedia.org/wikipedia/en/thumb/f/f6/Taylor_Swift_-_1989.png/220px-Taylor_Swift_-_1989.png":''} />
            //   <div className="p-5 flex flex-col space-y-2">
            //   <p className="text-lg font-medium">{node.name}</p>
            //     <p className="text-sm text-blue-500">{node.artist}</p>

            //   </div>
            // </li>
          ))}
        </ul>
        {hasNextPage ? (
          <button
            className="px-4 py-2 bg-blue-500 text-white rounded my-10"
            onClick={() => {
              fetchMore({
                variables: { after: endCursor },
                updateQuery: (prevResult, { fetchMoreResult }) => {
                  fetchMoreResult.songs.edges = [
                    ...prevResult.songs.edges,
                    ...fetchMoreResult.songs.edges,
                  ];
                  return fetchMoreResult;
                },
              });
            }}
          >
            more
          </button>
        ) : (
          <p className="my-10 text-center font-medium">
            You&apos;ve reached the end!{" "}
          </p>
        )}
      </div>

    </main>
  )
}
