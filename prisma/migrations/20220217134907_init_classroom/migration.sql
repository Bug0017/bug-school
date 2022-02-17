/*
  Warnings:

  - You are about to drop the column `section` on the `Student` table. All the data in the column will be lost.
  - Added the required column `section` to the `ClassRoom` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "ClassRoom" ADD COLUMN     "section" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Student" DROP COLUMN "section";
