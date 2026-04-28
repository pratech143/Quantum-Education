-- CreateTable
CREATE TABLE `News` (
    `id` VARCHAR(191) NOT NULL,
    `headTitle` TEXT NOT NULL,
    `subtitle` TEXT NOT NULL,
    `label` ENUM('news', 'notice') NOT NULL DEFAULT 'news',
    `description` TEXT NOT NULL,
    `image` TEXT NULL,
    `date` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `author` VARCHAR(191) NULL,
    `authorRole` VARCHAR(191) NULL,
    `authorImage` TEXT NULL,
    `caption` TEXT NULL,
    `readTime` VARCHAR(191) NULL,
    `content` JSON NULL,
    `phases` JSON NULL,
    `pullQuote` JSON NULL,
    `isRelatedOnly` BOOLEAN NOT NULL DEFAULT false,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    INDEX `News_label_idx`(`label`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `TeamMember` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `role` VARCHAR(191) NOT NULL,
    `description` TEXT NOT NULL,
    `image` TEXT NULL,
    `socials` JSON NULL,
    `order` INTEGER NOT NULL DEFAULT 0,
    `isActive` BOOLEAN NOT NULL DEFAULT true,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    INDEX `TeamMember_order_idx`(`order`),
    INDEX `TeamMember_isActive_idx`(`isActive`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
