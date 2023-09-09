/*
  Warnings:

  - You are about to drop the `Talk` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Talk";

-- CreateTable
CREATE TABLE "talks" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "talks_pkey" PRIMARY KEY ("id")
);
