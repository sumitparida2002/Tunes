import Image from "next/image";
import { Inter } from "next/font/google";
import { gql, useQuery, useMutation } from "@apollo/client";
import type { Song } from "@prisma/client";
import Card from "@/components/Card";
import Link from "next/link";
import ErrorPage from "./error";

const inter = Inter({ subsets: ["latin"] });

const AllSongsQuery = gql`
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
  }
`;

export default function Home() {
  const { data, loading, error, fetchMore } = useQuery(AllSongsQuery, {
    variables: { first: 3 },
  });
  if (loading) return <p>Loading...</p>;
  if (error)
    return (
      <p>
        <ErrorPage props={error.message} />
      </p>
    );
  const { endCursor, hasNextPage } = data.songs.pageInfo;

  return (
    <main
      className={`flex min-h-screen flex-col  justify-between p-2  ${inter.className}`}
    >
      <div className="container max-w-5xl mx-[2rem] my-[1rem]">
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-5">
          {data.songs.edges.map(({ node }: { node: Song }) => (
            <Link href="/content">
              <Card props={node} />
            </Link>
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
          <>
            <p className="my-10 text-center font-medium">
              You&apos;ve reached the end!{" "}
            </p>
          </>
        )}
      </div>
    </main>
  );
}
