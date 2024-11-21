-- CreateTable
CREATE TABLE `Exoplanet` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `pl_name` VARCHAR(191) NOT NULL,
    `hostname` VARCHAR(191) NOT NULL,
    `sy_snum` INTEGER NOT NULL,
    `sy_pnum` INTEGER NOT NULL,
    `discoverymethod` VARCHAR(191) NOT NULL,
    `disc_year` INTEGER NOT NULL,
    `disc_facility` VARCHAR(191) NULL,
    `pl_orbper` DOUBLE NULL,
    `pl_orbsmax` DOUBLE NULL,
    `pl_rade` DOUBLE NULL,
    `pl_bmasse` DOUBLE NULL,
    `st_spectype` VARCHAR(191) NULL,
    `st_teff` DOUBLE NULL,
    `st_rad` DOUBLE NULL,
    `st_mass` DOUBLE NULL,
    `sy_dist` DOUBLE NULL,
    `sy_vmag` DOUBLE NULL,
    `sy_kmag` DOUBLE NULL,
    `sy_gaiamag` DOUBLE NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
