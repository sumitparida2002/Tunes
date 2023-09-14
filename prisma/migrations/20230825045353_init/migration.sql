/*
  Warnings:

  - You are about to drop the column `userPlaylistsId` on the `Playlist` table. All the data in the column will be lost.
  - You are about to drop the `UserPlaylists` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Playlist" DROP CONSTRAINT "Playlist_userPlaylistsId_fkey";

-- DropForeignKey
ALTER TABLE "UserPlaylists" DROP CONSTRAINT "UserPlaylists_userId_fkey";

-- AlterTable
ALTER TABLE "Playlist" DROP COLUMN "userPlaylistsId";

-- DropTable
DROP TABLE "UserPlaylists";
