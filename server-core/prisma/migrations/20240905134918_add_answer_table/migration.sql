-- CreateTable
CREATE TABLE `Answer` (
    `question_id` INTEGER NOT NULL,
    `choice_id` INTEGER NOT NULL,

    UNIQUE INDEX `Answer_question_id_key`(`question_id`),
    INDEX `Answer_Question_id_fk`(`question_id`),
    INDEX `Answer_Choice_id_fk`(`choice_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Answer` ADD CONSTRAINT `Answer_Question_id_fk` FOREIGN KEY (`question_id`) REFERENCES `Question`(`id`) ON DELETE RESTRICT ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE `Answer` ADD CONSTRAINT `Answer_Choice_id_fk` FOREIGN KEY (`choice_id`) REFERENCES `Choice`(`id`) ON DELETE RESTRICT ON UPDATE RESTRICT;
