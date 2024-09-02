/*
  Warnings:

  - Made the column `mainImage` on table `Article` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Article" ALTER COLUMN "mainImage" SET NOT NULL;
