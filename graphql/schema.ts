// graphql/schema.ts
import "./types/Song";
import "./types/User";
import "./types/Playlist";
import "./types/UserPlaylist";

import { builder } from "./builder";

export const schema = builder.toSchema();
