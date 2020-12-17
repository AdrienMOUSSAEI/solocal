<?php
// api/src/Controller/CreateUploadsPhotosAction.php

namespace App\Controller;

use App\Entity\UploadsPhotos;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpKernel\Exception\BadRequestHttpException;

final class CreateUploadsPhotosAction
{
    public function __invoke(Request $request): UploadsPhotos
    {
        $uploadedFile = $request->files->get('file');
        if (!$uploadedFile) {
            throw new BadRequestHttpException('"file" is required');
        }

        $uploadsphotos = new UploadsPhotos();
        $uploadsphotos->file = $uploadedFile;

        return $uploadsphotos;
    }
}