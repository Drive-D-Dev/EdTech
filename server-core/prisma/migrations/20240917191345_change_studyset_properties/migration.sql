/*
  Warnings:

  - Made the column `studyset_id` on table `Study_Set_Questions_List` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "Study_Set_Questions_List" DROP CONSTRAINT "Study_Set_Questions_List_studyset_id_fkey";

-- AlterTable
ALTER TABLE "Study_Set_Questions_List" ALTER COLUMN "studyset_id" SET NOT NULL;

-- AddForeignKey
ALTER TABLE "Study_Set_Questions_List" ADD CONSTRAINT "Study_Set_Questions_List_studyset_id_fkey" FOREIGN KEY ("studyset_id") REFERENCES "Study_Set"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
