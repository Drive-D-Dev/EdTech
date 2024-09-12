-- CreateTable
CREATE TABLE "Choice" (
    "id" SERIAL NOT NULL,
    "content" TEXT NOT NULL,
    "number" INTEGER NOT NULL,
    "question_id" INTEGER NOT NULL,

    CONSTRAINT "Choice_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Question" (
    "id" SERIAL NOT NULL,
    "content" TEXT NOT NULL,
    "explanation" TEXT NOT NULL,
    "accuracy_percentage" DECIMAL(5,2) NOT NULL,

    CONSTRAINT "Question_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Answer" (
    "question_id" INTEGER NOT NULL,
    "choice_id" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "Study_Set" (
    "id" SERIAL NOT NULL,
    "stage" VARCHAR(20) NOT NULL,
    "label" VARCHAR(255) NOT NULL,

    CONSTRAINT "Study_Set_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Study_Set_Questions_List" (
    "id" SERIAL NOT NULL,
    "question_id" INTEGER NOT NULL,
    "studyset_id" INTEGER,

    CONSTRAINT "Study_Set_Questions_List_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "Choice_Question_id_fk" ON "Choice"("question_id");

-- CreateIndex
CREATE UNIQUE INDEX "Answer_question_id_key" ON "Answer"("question_id");

-- CreateIndex
CREATE INDEX "Answer_Question_id_fk" ON "Answer"("question_id");

-- CreateIndex
CREATE INDEX "Answer_Choice_id_fk" ON "Answer"("choice_id");

-- CreateIndex
CREATE INDEX "Study_Set_Questions_List_Question_id_fk" ON "Study_Set_Questions_List"("question_id");

-- CreateIndex
CREATE INDEX "Study_Set_Questions_List_Study_Set_id_fk" ON "Study_Set_Questions_List"("studyset_id");

-- AddForeignKey
ALTER TABLE "Choice" ADD CONSTRAINT "Choice_question_id_fkey" FOREIGN KEY ("question_id") REFERENCES "Question"("id") ON DELETE RESTRICT ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE "Answer" ADD CONSTRAINT "Answer_question_id_fkey" FOREIGN KEY ("question_id") REFERENCES "Question"("id") ON DELETE RESTRICT ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE "Answer" ADD CONSTRAINT "Answer_choice_id_fkey" FOREIGN KEY ("choice_id") REFERENCES "Choice"("id") ON DELETE RESTRICT ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE "Study_Set_Questions_List" ADD CONSTRAINT "Study_Set_Questions_List_question_id_fkey" FOREIGN KEY ("question_id") REFERENCES "Question"("id") ON DELETE RESTRICT ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE "Study_Set_Questions_List" ADD CONSTRAINT "Study_Set_Questions_List_studyset_id_fkey" FOREIGN KEY ("studyset_id") REFERENCES "Study_Set"("id") ON DELETE RESTRICT ON UPDATE RESTRICT;
