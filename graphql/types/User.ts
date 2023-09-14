import { builder } from "../builder";

builder.prismaObject("User", {
  fields: (t) => ({
    id: t.exposeID("id"),
    username: t.exposeString("username"),
    password: t.exposeString("password"),
    role: t.expose("role", { type: Role }),
  }),
});

builder.queryField("users", (t) =>
  // 2.
  t.prismaConnection({
    // 3.
    type: "User",
    cursor: "id",
    // 4.
    resolve: (query, _parent, _args, _ctx, _info) =>
      prisma.user.findMany({ ...query }),
  })
);

const Role = builder.enumType("Role", {
  values: ["USER", "ADMIN"] as const,
});
