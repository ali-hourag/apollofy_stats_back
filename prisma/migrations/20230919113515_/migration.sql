/*
  Warnings:

  - The primary key for the `UserData` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `UserData` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - A unique constraint covering the columns `[userId]` on the table `UserData` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `userId` to the `UserData` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "UserData" DROP CONSTRAINT "UserData_pkey",
ADD COLUMN     "userId" TEXT NOT NULL,
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "UserData_pkey" PRIMARY KEY ("id");

-- CreateIndex
CREATE UNIQUE INDEX "UserData_userId_key" ON "UserData"("userId");
