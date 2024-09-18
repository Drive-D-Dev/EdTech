/*
  Warnings:

  - Added the required column `time` to the `User_Study_Set` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "User_Study_Set" ADD COLUMN     "time" INTEGER NOT NULL;
