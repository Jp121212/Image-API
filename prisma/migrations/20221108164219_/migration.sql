/*
  Warnings:

  - The primary key for the `Currency` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `Currency` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[currencyPS]` on the table `Account` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `currencyPS` to the `Account` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Account" ADD COLUMN     "currencyPS" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Currency" DROP CONSTRAINT "Currency_pkey",
DROP COLUMN "id",
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "currencyId" SERIAL NOT NULL,
ADD CONSTRAINT "Currency_pkey" PRIMARY KEY ("currencyId");

-- CreateIndex
CREATE UNIQUE INDEX "Account_currencyPS_key" ON "Account"("currencyPS");

-- AddForeignKey
ALTER TABLE "Account" ADD CONSTRAINT "Account_currencyPS_fkey" FOREIGN KEY ("currencyPS") REFERENCES "Currency"("currencyId") ON DELETE RESTRICT ON UPDATE CASCADE;
