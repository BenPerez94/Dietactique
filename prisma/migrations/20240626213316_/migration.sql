/*
  Warnings:

  - You are about to drop the column `content` on the `Article` table. All the data in the column will be lost.
  - Added the required column `order` to the `Image` table without a default value. This is not possible if the table is not empty.
  - Added the required column `order` to the `Video` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Article" DROP COLUMN "content";

-- AlterTable
ALTER TABLE "Image" ADD COLUMN     "order" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Video" ADD COLUMN     "order" INTEGER NOT NULL;

-- CreateTable
CREATE TABLE "Content" (
    "id" TEXT NOT NULL,
    "text" TEXT NOT NULL,
    "order" INTEGER NOT NULL,
    "articleId" TEXT NOT NULL,

    CONSTRAINT "Content_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Content" ADD CONSTRAINT "Content_articleId_fkey" FOREIGN KEY ("articleId") REFERENCES "Article"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
