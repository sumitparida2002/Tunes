import { builder } from "../builder";

builder.prismaObject("User", {
  fields: (t) => ({
    id: t.exposeID("id"),
    username: t.exposeString("username"),
    password: t.exposeString("password"),
    role: t.expose("role", { type: Role }),
    userplaylist: t.relation("UserPlaylists", { nullable: true }),
  }),
});

const Role = builder.enumType("Role", {
  values: ["USER", "ADMIN"] as const,
});
