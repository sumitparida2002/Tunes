// /graphql/types/Link.ts
import { builder } from "../builder";

builder.prismaObject("UserPlaylists", {
  fields: (t) => ({
    id: t.exposeID("id"),
    playlists: t.relation("username"),
  }),
});
