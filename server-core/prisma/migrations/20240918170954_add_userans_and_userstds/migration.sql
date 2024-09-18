-- CreateTable
CREATE TABLE "User_Study_Set" (
    "id" SERIAL NOT NULL,
    "user_id" INTEGER NOT NULL,
    "studyset_id" INTEGER NOT NULL,

    CONSTRAINT "User_Study_Set_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "User_Answer" (
    "id" SERIAL NOT NULL,
    "user_StudySet_id" INTEGER NOT NULL,
    "studyset_id" INTEGER NOT NULL,
    "question_id" INTEGER NOT NULL,
    "choice_id" INTEGER NOT NULL,

    CONSTRAINT "User_Answer_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "User_Study_Set_User_id_fk" ON "User_Study_Set"("user_id");

-- CreateIndex
CREATE INDEX "User_Study_Set_Study_Set_id_fk" ON "User_Study_Set"("studyset_id");

-- CreateIndex
CREATE INDEX "User_Answer_User_StudySet_id_fk" ON "User_Answer"("user_StudySet_id");

-- CreateIndex
CREATE INDEX "User_Answer_Study_Set_id_fk" ON "User_Answer"("studyset_id");

-- CreateIndex
CREATE INDEX "User_Answer_Question_id_fk" ON "User_Answer"("question_id");

-- CreateIndex
CREATE INDEX "User_Answer_Choice_id_fk" ON "User_Answer"("choice_id");

-- AddForeignKey
ALTER TABLE "User_Study_Set" ADD CONSTRAINT "User_Study_Set_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE "User_Study_Set" ADD CONSTRAINT "User_Study_Set_studyset_id_fkey" FOREIGN KEY ("studyset_id") REFERENCES "Study_Set"("id") ON DELETE CASCADE ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE "User_Answer" ADD CONSTRAINT "User_Answer_user_StudySet_id_fkey" FOREIGN KEY ("user_StudySet_id") REFERENCES "User_Study_Set"("id") ON DELETE CASCADE ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE "User_Answer" ADD CONSTRAINT "User_Answer_choice_id_fkey" FOREIGN KEY ("choice_id") REFERENCES "Choice"("id") ON DELETE CASCADE ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE "User_Answer" ADD CONSTRAINT "User_Answer_question_id_fkey" FOREIGN KEY ("question_id") REFERENCES "Question"("id") ON DELETE CASCADE ON UPDATE RESTRICT;
