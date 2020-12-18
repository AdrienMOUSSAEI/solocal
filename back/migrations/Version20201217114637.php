<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20201217114637 extends AbstractMigration
{
    public function getDescription() : string
    {
        return '';
    }

    public function up(Schema $schema) : void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE product ADD image_file_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE product ADD CONSTRAINT FK_D34A04AD6DB2EB0 FOREIGN KEY (image_file_id) REFERENCES uploads_photos (id)');
        $this->addSql('CREATE INDEX IDX_D34A04AD6DB2EB0 ON product (image_file_id)');
    }

    public function down(Schema $schema) : void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE product DROP FOREIGN KEY FK_D34A04AD6DB2EB0');
        $this->addSql('DROP INDEX IDX_D34A04AD6DB2EB0 ON product');
        $this->addSql('ALTER TABLE product DROP image_file_id');
    }
}
