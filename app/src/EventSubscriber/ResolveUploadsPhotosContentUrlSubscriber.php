<?php
// api/src/EventSubscriber/ResolveUploadsPhotosContentUrlSubscriber.php

namespace App\EventSubscriber;

use ApiPlatform\Core\EventListener\EventPriorities;
use ApiPlatform\Core\Util\RequestAttributesExtractor;
use App\Entity\UploadsPhotos;
use Symfony\Component\EventDispatcher\EventSubscriberInterface;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpKernel\Event\ViewEvent;
use Symfony\Component\HttpKernel\KernelEvents;
use Vich\UploaderBundle\Storage\StorageInterface;

final class ResolveUploadsPhotosContentUrlSubscriber implements EventSubscriberInterface
{
    private $storage;

    public function __construct(StorageInterface $storage)
    {
        $this->storage = $storage;
    }

    public static function getSubscribedEvents(): array
    {
        return [
            KernelEvents::VIEW => ['onPreSerialize', EventPriorities::PRE_SERIALIZE],
        ];
    }

    public function onPreSerialize(ViewEvent $event): void
    {
        $controllerResult = $event->getControllerResult();
        $request = $event->getRequest();

        if ($controllerResult instanceof Response || !$request->attributes->getBoolean('_api_respond', true)) {
            return;
        }

        if (!($attributes = RequestAttributesExtractor::extractAttributes($request)) || !\is_a($attributes['resource_class'], UploadsPhotos::class, true)) {
            return;
        }

        $uploadsPhotos = $controllerResult;

        if (!is_iterable($uploadsPhotos)) {
            $uploadsPhotos = [$uploadsPhotos];
        }

        foreach ($uploadsPhotos as $uploadsphotos) {
            if (!$uploadsphotos instanceof $uploadsphotos) {
                continue;
            }

            $uploadsphotos->contentUrl = $this->storage->resolveUri($uploadsphotos, 'file');
        }
    }
}