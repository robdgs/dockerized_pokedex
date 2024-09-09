<?php

namespace App\Command;

use App\Entity\User;
use App\Repository\UserRepository;
use Symfony\Component\Console\Attribute\AsCommand;
use Symfony\Component\Console\Command\Command;
use Symfony\Component\Console\Input\InputArgument;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Input\InputOption;
use Symfony\Component\Console\Output\OutputInterface;
use Symfony\Component\Console\Style\SymfonyStyle;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;

#[AsCommand(
    name: 'pdx:create-admin',
    description: 'Crea un admin di Pokedex',
)]
class PdxCreateAdminCommand extends Command
{
    private UserPasswordHasherInterface $userPasswordHasher;
    private UserRepository $userRepository;
    public function __construct(UserRepository $userRepository, UserPasswordHasherInterface $userPasswordHasher)
    {
        parent::__construct();
        $this->userRepository = $userRepository;
        $this->userPasswordHasher= $userPasswordHasher;
    }

    protected function configure(): void
    {
        $this
            ->addArgument('name', InputArgument::REQUIRED, 'Nome')
            ->addArgument('surname', InputArgument::REQUIRED, 'Cognome')
            ->addArgument('email', InputArgument::REQUIRED, 'Email')
            ->addArgument('password', InputArgument::REQUIRED, 'Password')

        ;
    }

    protected function execute(InputInterface $input, OutputInterface $output): int
    {
        $io = new SymfonyStyle($input, $output);
        $name = $input->getArgument('name');
        $surname = $input->getArgument('surname');
        $email = $input->getArgument('email');
        $password = $input->getArgument('password');

        $utente = new User();
        $utente->setName($name);
        $utente->setSurname($surname);
        $utente->setEmail($email);
        $utente->setUsername($email);
        $utente->setRoles(["ROLE_ADMIN"]);
        $utente->setPassword($this->userPasswordHasher->hashPassword($utente, $password));

        $this->userRepository->save($utente,true);

        $io->success('You have a new command! Now make it your own! Pass --help to see your options.');

        return Command::SUCCESS;
    }
}
