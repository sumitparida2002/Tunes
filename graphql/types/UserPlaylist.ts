// /graphql/types/Link.ts
import { builder } from "../builder";

builder.prismaObject("UserPlaylists", {
  fields: (t) => ({
    id: t.exposeID("id"),
    playlists: t.relation("playlists"),
    user: t.relation("username"),
  }),
});
