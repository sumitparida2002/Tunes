// /graphql/types/Link.ts
import { builder } from "../builder";

builder.prismaObject("Playlist", {
  fields: (t) => ({
    id: t.exposeID("id"),
    title: t.exposeString("title"),
    playlist: t.relation("playlist", { nullable: true }),
  }),
});

builder.queryField("playlists", (t) =>
  // 2.
  t.prismaConnection({
    // 3.
    type: "Playlist",
    cursor: "id",
    // 4.
    resolve: (query, _parent, _args, _ctx, _info) =>
      prisma.playlist.findMany({ ...query }),
  })
);

builder.mutationField("createPlaylist", (t) =>
  t.prismaField({
    type: "Playlist",
    args: {
      title: t.arg.string({ required: true }),
    },
    resolve: async (query, _parent, args, ctx) => {
      const { title } = args;
      console.log("yo");

      // if (!(await ctx).user) {
      //   throw new Error("You have to be logged in to perform this action");
      // }

      // const user = await prisma.user.findUnique({
      //   where: {
      //     username: (await ctx).user?.email,
      //   },
      // });

      return prisma.playlist.create({
        ...query,
        data: {
          title,
        },
      });
    },
  })
);
