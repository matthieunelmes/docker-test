-- CreateTable
CREATE TABLE "Talk" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "Talk_pkey" PRIMARY KEY ("id")
);
