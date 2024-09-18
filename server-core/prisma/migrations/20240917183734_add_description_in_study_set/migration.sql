/*
  Warnings:

  - Added the required column `description` to the `Study_Set` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Study_Set" ADD COLUMN     "description" TEXT NOT NULL;
