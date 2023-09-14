// /graphql/types/Link.ts
import { builder } from "../builder";

builder.prismaObject("Song", {
  fields: (t) => ({
    id: t.exposeID("id"),
    name: t.exposeString("name"),
    thumbnail: t.exposeString("thumbnail", { nullable: true }),
    artist: t.exposeStringList("artist"),
    // playlist: t.relation("Playlist", { nullable: true }),
  }),
});

builder.queryField("songs", (t) =>
  // 2.
  t.prismaConnection({
    // 3.
    type: "Song",
    cursor: "id",
    // 4.
    resolve: (query, _parent, _args, _ctx, _info) =>
      prisma.song.findMany({ ...query }),
  })
);

builder.mutationField("createSong", (t) =>
  t.prismaField({
    type: "Song",
    args: {
      name: t.arg.string({ required: true }),
      artist: t.arg.stringList({ required: true }),
      thumbnail: t.arg.string({ required: true }),
    },
    resolve: async (query, _parent, args, ctx) => {
      const { name, artist, thumbnail } = args;

      if (!(await ctx).user) {
        throw new Error("You have to be logged in to perform this action");
      }

      const user = await prisma.user.findUnique({
        where: {
          username: (await ctx).user?.email,
        },
      });

      if (!user || user.role !== "ADMIN") {
        throw new Error("You don have permission ot perform this action");
      }

      return prisma.song.create({
        ...query,
        data: {
          name,
          artist,
          thumbnail,
        },
      });
    },
  })
);
