-- DropForeignKey
ALTER TABLE "Answer" DROP CONSTRAINT "Answer_choice_id_fkey";

-- DropForeignKey
ALTER TABLE "Answer" DROP CONSTRAINT "Answer_question_id_fkey";

-- DropForeignKey
ALTER TABLE "Choice" DROP CONSTRAINT "Choice_question_id_fkey";

-- DropForeignKey
ALTER TABLE "Study_Set_Questions_List" DROP CONSTRAINT "Study_Set_Questions_List_question_id_fkey";

-- DropForeignKey
ALTER TABLE "Study_Set_Questions_List" DROP CONSTRAINT "Study_Set_Questions_List_studyset_id_fkey";

-- AddForeignKey
ALTER TABLE "Choice" ADD CONSTRAINT "Choice_question_id_fkey" FOREIGN KEY ("question_id") REFERENCES "Question"("id") ON DELETE CASCADE ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE "Answer" ADD CONSTRAINT "Answer_question_id_fkey" FOREIGN KEY ("question_id") REFERENCES "Question"("id") ON DELETE CASCADE ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE "Answer" ADD CONSTRAINT "Answer_choice_id_fkey" FOREIGN KEY ("choice_id") REFERENCES "Choice"("id") ON DELETE CASCADE ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE "Study_Set_Questions_List" ADD CONSTRAINT "Study_Set_Questions_List_question_id_fkey" FOREIGN KEY ("question_id") REFERENCES "Question"("id") ON DELETE CASCADE ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE "Study_Set_Questions_List" ADD CONSTRAINT "Study_Set_Questions_List_studyset_id_fkey" FOREIGN KEY ("studyset_id") REFERENCES "Study_Set"("id") ON DELETE CASCADE ON UPDATE RESTRICT;
