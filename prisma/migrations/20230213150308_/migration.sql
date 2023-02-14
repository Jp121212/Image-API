/*
  Warnings:

  - The primary key for the `Images` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `Images` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[image]` on the table `Images` will be added. If there are existing duplicate values, this will fail.
  - The required column `_id` was added to the `Images` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.

*/
-- AlterTable
ALTER TABLE "Images" DROP CONSTRAINT "Images_pkey",
DROP COLUMN "id",
ADD COLUMN     "_id" TEXT NOT NULL,
ADD CONSTRAINT "Images_pkey" PRIMARY KEY ("_id");

-- CreateIndex
CREATE UNIQUE INDEX "Images_image_key" ON "Images"("image");
