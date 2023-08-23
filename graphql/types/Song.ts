// /graphql/types/Link.ts
import { builder } from "../builder";

builder.prismaObject("Song", {
  fields: (t) => ({
    id: t.exposeID("id"),
    name: t.exposeString("name"),
    thumbnail: t.exposeString("thumbnail", { nullable: true }),
    artist: t.exposeStringList("artist"),
    playlist: t.relation("Playlist", { nullable: true }),
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
