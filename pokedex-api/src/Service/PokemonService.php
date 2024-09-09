<?php

namespace App\Service;

use App\Entity\Pokemon;
use Symfony\Component\Serializer\SerializerInterface;

class PokemonService
{

    private SerializerInterface $serializer;
    public function __construct(SerializerInterface $serializer)
    {
        $this->serializer = $serializer;
    }

    public function savePokemon($content){
        $pokemon = $this->serializer->deserialize($content,Pokemon::class,"json");
        dump($pokemon);
    }
}
