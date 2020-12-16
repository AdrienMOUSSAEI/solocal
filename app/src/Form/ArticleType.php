<?php

namespace App\Form;

use App\Entity\Article;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Form\Extension\Core\Type\FileType;
use Symfony\Component\Validator\Constraints\Image;
use Symfony\Component\Validator\Constraints\NotNull;

class ArticleType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $article = $options['data'] ?? null;
        $builder
            ->add('category')
            ->add('subCategory')
            ->add('title')
            ->add('description')
            ->add('price')
            ->add('note')
            ->add('creationDate')
            ->add('image')
            ->add('size')
            ->add('color');
        $imageConstraints = [
            new Image([
                       'maxSize' => '2M'
            ]),
        ];
        
        if(!$article->getImage()){
            $imageConstraints[] = new NotNull([
                'message' => 'Please upload an image'
            ]);
        }
        
        $builder
            ->add('imageFile', FileType::class, [
                'mapped' => false,
                'required' => false,
                'constraints' => $imageConstraints
            ])    
        ;
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => Article::class,
        ]);
    }
}
