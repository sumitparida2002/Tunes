// /graphql/types/Link.ts
import { builder } from "../builder";

builder.prismaObject("Playlist", {
  fields: (t) => ({
    id: t.exposeID("id"),
    title: t.exposeString("title"),
    playlist: t.relation("UserPlaylists"),
  }),
});
