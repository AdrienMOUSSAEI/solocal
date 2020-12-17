<?php

namespace App\DataPersister;

use App\Entity\Article;
use ApiPlatform\Core\DataPersister\DataPersisterInterface;
use Doctrine\ORM\EntityManagerInterface;
use App\Service\UploaderHelper;

class ArticleDataPersister implements DataPersisterInterface
{
    /**
     * @var EntityManagerInterface
     */
    private $_entityManager;
    private $_slugger;

    public function __construct(
        EntityManagerInterface $entityManager, UploaderHelper $uploaderHelper) {
        $this->_entityManager = $entityManager;
        $this->uploaderHelper = $uploaderHelper;
    }
    
    public function supports($data, array $context = []): bool
    {
        return $data instanceof Article;
    }

    /**
     * @param Article $data
     */
    public function persist($data)
    {
        //if(!empty($data->getImage())){
            /** Service UploaderHelper */
        //    $newFileName = $this->uploaderHelper->UploadArticleImage($data->getImage());
        //    $data->setImage($newFileName); 
        //}
        $this->_entityManager->persist($data);
        $this->_entityManager->flush();
    }

    public function remove($data)
    {
        $this->_entityManager->remove($data);
        $this->_entityManager->flush();
    }
    
}