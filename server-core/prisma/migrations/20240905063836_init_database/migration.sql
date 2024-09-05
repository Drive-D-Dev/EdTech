-- CreateTable
CREATE TABLE `Choice` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `content` TEXT NOT NULL,
    `number` INTEGER NOT NULL,
    `question_id` INTEGER NOT NULL,

    INDEX `Choice_Question_id_fk`(`question_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Question` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `content` TEXT NOT NULL,
    `explanation` TEXT NOT NULL,
    `accuracy_percentage` DECIMAL(5, 2) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Study_Set` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `stage` VARCHAR(20) NOT NULL,
    `label` VARCHAR(255) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Study_Set_Questions_List` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `question_id` INTEGER NOT NULL,
    `studyset_id` INTEGER NULL,

    INDEX `Study_Set_Questions_List_Question_id_fk`(`question_id`),
    INDEX `Study_Set_Questions_List_Study_Set_id_fk`(`studyset_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Choice` ADD CONSTRAINT `Choice_Question_id_fk` FOREIGN KEY (`question_id`) REFERENCES `Question`(`id`) ON DELETE RESTRICT ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE `Study_Set_Questions_List` ADD CONSTRAINT `Study_Set_Questions_List_Question_id_fk` FOREIGN KEY (`question_id`) REFERENCES `Question`(`id`) ON DELETE RESTRICT ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE `Study_Set_Questions_List` ADD CONSTRAINT `Study_Set_Questions_List_Study_Set_id_fk` FOREIGN KEY (`studyset_id`) REFERENCES `Study_Set`(`id`) ON DELETE RESTRICT ON UPDATE RESTRICT;
