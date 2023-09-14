-- AlterTable
ALTER TABLE "Playlist" ADD COLUMN     "userPlaylistsId" INTEGER;

-- CreateTable
CREATE TABLE "UserPlaylists" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "UserPlaylists_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Playlist" ADD CONSTRAINT "Playlist_userPlaylistsId_fkey" FOREIGN KEY ("userPlaylistsId") REFERENCES "UserPlaylists"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserPlaylists" ADD CONSTRAINT "UserPlaylists_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
