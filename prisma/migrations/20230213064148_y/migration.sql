/*
  Warnings:

  - The primary key for the `Images` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- AlterTable
ALTER TABLE "Images" DROP CONSTRAINT "Images_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "Images_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Images_id_seq";
