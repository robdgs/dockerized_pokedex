<?php

namespace App\Controller;

use App\Entity\Pokemon;
use App\Entity\User;
use App\Exceptions\AlreadyOwnedPokemonException;
use App\Repository\UserRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bridge\Doctrine\Attribute\MapEntity;
use Symfony\Component\Serializer\SerializerInterface;

class PokedexController extends AbstractController
{
    private SerializerInterface $serializer;
    private UserRepository $userRepository;
    public function __construct(SerializerInterface $serializer, UserRepository $userRepository)
    {
        $this->serializer = $serializer;
        $this->userRepository = $userRepository;
    }

    #[Route(path: '/api/users/{id}/pokemons', name: 'user_pokemon_get', methods: "GET")]
    public function getUserPokemons(User $user){
        $pokemons = $this->serializer->serialize($user->getPokemons(),"json");
        return new Response($pokemons);
    }

    #[Route(path: '/api/users/{id}/pokemons/{pokemonId}', name: 'user_pokemon_post', methods: "POST")]
    public function addPokemonToUser(#[MapEntity(mapping: ["id" => "id"])] User $user,#[MapEntity(mapping: ["pokemonId" => "id"])] Pokemon $pokemon){
        try{
            $user->addPokemon($pokemon);
            $this->userRepository->save($user,true);
            return new JsonResponse([],Response::HTTP_CREATED);
        } catch (AlreadyOwnedPokemonException $alreadyOwnedPokemonException){
            return new JsonResponse("Hai già questo pokemon", Response::HTTP_BAD_REQUEST);
        } catch(\Exception $exception){
            return new JsonResponse($exception->getMessage(), Response::HTTP_BAD_REQUEST);
        }

    }

    #[Route(path: '/api/users/{id}/pokemons/{pokemonId}', name: 'user_pokemon_delete', methods: "DELETE")]
    public function removePokemonToUser(#[MapEntity(mapping: ["id" => "id"])] User $user,#[MapEntity(mapping: ["pokemonId" => "id"])] Pokemon $pokemon){
        try{
            $user->removePokemon($pokemon);
            $this->userRepository->save($user,true);
            return new JsonResponse([],Response::HTTP_NO_CONTENT);
        }  catch(\Exception $exception){
            return new JsonResponse($exception->getMessage(), Response::HTTP_BAD_REQUEST);
        }
    }
}
