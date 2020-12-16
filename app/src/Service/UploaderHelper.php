<?php

namespace App\Service;

use Symfony\Component\HttpFoundation\File\UploadedFile;
use Gedmo\Sluggable\Util\Urlizer;

class UploaderHelper 
{
    public function __construct(string $uploadsPath)
    {
        $this->uploadsPath = $uploadsPath;
    }
    
    public function UploadArticleImage(UploadedFile $uploadedFile): string 
    {
        $destinatio = $this->uploadsPath.'/article_image';
        
        /** nom de fichier sans extension */
        $originalFilename = pathinfo($uploadedFile->getClientOriginalName(), PATHINFO_FILENAME);
        
        /** nom de fichier unique & Urlizer 
         * composer require gedmo/doctrine-extensions
         */
        $newFileName = Urlizer::urlize($originalFilename.'-'.uniqid().'-'.$uploadedFile->guessExtension());

        $uploadedFile->move(
                $destinatio,
                $newFileName
                );
        return $newFileName;
    }
}
