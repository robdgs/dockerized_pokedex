<?php

namespace App\Controller;

use App\DTO\Registration\RegistrationDTO;
use App\Entity\User;
use App\Repository\UserRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Serializer\SerializerInterface;

class RegistrationController extends AbstractController
{
    private SerializerInterface $serializer;
    private UserPasswordHasherInterface $passwordHasher;
    private UserRepository $userRepository;
    public function __construct(SerializerInterface $serializer, UserPasswordHasherInterface $passwordHasher, UserRepository $userRepository)
    {
        $this->passwordHasher = $passwordHasher;
        $this->serializer = $serializer;
        $this->userRepository = $userRepository;
    }

    #[Route(path: '/api/register', name: 'app_register', methods: "POST")]
    public function register(Request $request): Response
    {
        /**
         * @var RegistrationDTO $dto
         */
        $dto = $this->serializer->deserialize($request->getContent(), RegistrationDTO::class, "json" );
        $utente = new User();
        $utente->setName($dto->name);
        $utente->setSurname($dto->surname);
        $utente->setEmail($dto->email);
        $utente->setUsername($dto->email);
        $utente->setRoles(["ROLE_USER"]);
        $utente->setPassword($this->passwordHasher->hashPassword($utente, $dto->password));

        $this->userRepository->save($utente,true);


        return new JsonResponse([],200);
    }
}
