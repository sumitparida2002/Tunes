// /graphql/resolvers.ts
import prisma from "../lib/prisma";
export const resolvers = {
  Query: {
    songs: () => {
      return prisma.song.findMany();
    },
  },
};
