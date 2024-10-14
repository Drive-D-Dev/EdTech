/*
  Warnings:

  - You are about to drop the column `type` on the `Question` table. All the data in the column will be lost.
  - Added the required column `category` to the `Question` table without a default value. This is not possible if the table is not empty.
  - Added the required column `sub_category` to the `Question` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Question" DROP COLUMN "type",
ADD COLUMN     "category" VARCHAR(255) NOT NULL,
ADD COLUMN     "sub_category" VARCHAR(255) NOT NULL;
