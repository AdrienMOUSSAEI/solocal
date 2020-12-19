<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20201218164637 extends AbstractMigration
{
    public function getDescription() : string
    {
        return '';
    }

    public function up(Schema $schema) : void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql("INSERT INTO `uploads_photos` (`id`, `file_path`) VALUES (1, '5fdcda81991a6.jpg');");
        $this->addSql("INSERT INTO `product` (`category`, `sub_category`, `title`, `description`, `price`, `note`, `creation_date`, `image`, `size`, `color`, `image_file_id`) "
                . "VALUES ('Accessoires IT', 'Hubs USB', 'Adaptateur USB', "
                . "'ention Hub 4-en-1 du Type C avec USB 3.0 USB 2.0, Bloc d alimentation Compatible avec Mac Air 2020-2018 MacBook Pro 13/15/16 Etc. Adaptateur USB-C avec Multiport - (C13,Or Rose)', "
                . "23.99, 3, '2020-12-18', '5fdcda81991a6.jpg', '', 'Rose',1);");
        
        $this->addSql("INSERT INTO `uploads_photos` (`id`, `file_path`) VALUES (2, '5fdcda81991a7.jpg');");
        $this->addSql("INSERT INTO `product` (`category`, `sub_category`, `title`, `description`, `price`, `note`, `creation_date`, `image`, `size`, `color`, `image_file_id`) "
                . "VALUES ('Accessoires IT', 'Cable', 'Cable USB', "
                . "'AVIWIS Câble USB Type C à USB 3.0 [2m/6.6ft] Chargeur USB C Câble USB C Nylon Tressé Synchro et Charge Rapide Compatible pour Samsung Galaxy S20/S10/S9/S8, Note10/9, Huawei P30/P20, Xiaomi, Oneplus', "
                . "6.49, 4, '2020-11-19', '5fdcda81991a7.jpg', '2M', 'Red',2);");

        $this->addSql("INSERT INTO `uploads_photos` (`id`, `file_path`) VALUES (3, '5fdcda81991a8.jpg');");
        $this->addSql("INSERT INTO `product` (`category`, `sub_category`, `title`, `description`, `price`, `note`, `creation_date`, `image`, `size`, `color`, `image_file_id`) "
                . "VALUES ('Accessoires IT', 'Cable', 'Xcords Cble', "
                . "'Xcords Cble Micro USB Chargeur Samsung - [Lot de 3, 2M] en Nylon Tressé Cble Micro USB Chargeur pour Samsung, Nexus, LG, Huawei, Smartphones Android et Plus (Carbone et Noir)', "
                . "6.49, 4, '2020-12-06', '5fdcda81991a8.jpg', '3M', 'Carbone et Noir',3);");
        
        $this->addSql("INSERT INTO `uploads_photos` (`id`, `file_path`) VALUES (4, '5fdcda81991a9.jpg');");
        $this->addSql("INSERT INTO `product` (`category`, `sub_category`, `title`, `description`, `price`, `note`, `creation_date`, `image`, `size`, `color`, `image_file_id`) "
                . "VALUES (' High-Tech', 'Téléphones portables et accessoires', 'Chargeur USB 3 Ports Universel', "
                . "'Chargeur Secteur USB 3 Ports Universel Chargeur Mural (5V 3A Max) Adaptateur USB Universel pour Apple iOS, Android, Appareils Portable Windows', "
                . "12.99, 4, '2020-08-18', '5fdcda81991a9.jpg', '', 'Blanc',4);");
        
        $this->addSql("INSERT INTO `uploads_photos` (`id`, `file_path`) VALUES (5, '5fdcda81991a10.jpg');");
        $this->addSql("INSERT INTO `product` (`category`, `sub_category`, `title`, `description`, `price`, `note`, `creation_date`, `image`, `size`, `color`, `image_file_id`) "
                . "VALUES ('High-Tech', 'Téléphones portables et accessoires', 'DIVI Chargeur de Voiture', "
                . "'DIVI Chargeur de Voiture, Ultra Compact 2 Ports USB 5V / 4.8A en Alliage d Aluminium Chargeur Allume Cigare, Charge Rapide pour iPhone XR/XS Max/ 8 Plus, Galaxy S8 / S7 / Edge, Huawei (Noir)', "
                . "9.49, 4, '2020-05-19', '5fdcda81991a10.jpg', '', 'Black',5);");

        $this->addSql("INSERT INTO `uploads_photos` (`id`, `file_path`) VALUES (6, '5fdcda81991a11.jpg');");
        $this->addSql("INSERT INTO `product` (`category`, `sub_category`, `title`, `description`, `price`, `note`, `creation_date`, `image`, `size`, `color`, `image_file_id`) "
                . "VALUES ('High-Tech', 'Smartphones et téléphones portables débloqués', 'Huawei P30', "
                . "'Huawei P30 Lite Smartphone débloqué 4G (6,15 pouces - 128Go - Double Nano SIM - Android 9.0) Peacock Blue [Version Française]', "
                . "213, 4, '2020-12-24', '5fdcda81991a11.jpg', '', 'Peacock Blue',6);");        
    }

    public function down(Schema $schema) : void
    {
        // this down() migration is auto-generated, please modify it to your needs

    }
}
