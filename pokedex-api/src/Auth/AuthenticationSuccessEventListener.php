<?php

namespace App\Auth;

use Lexik\Bundle\JWTAuthenticationBundle\Event\AuthenticationSuccessEvent;
use Lexik\Bundle\JWTAuthenticationBundle\Event\JWTCreatedEvent;

class AuthenticationSuccessEventListener
{

    /**
     * @param AuthenticationSuccessEvent $event
     */
    public function onAuthenticationSuccessResponse(JWTCreatedEvent $event)
    {
        $data = $event->getData();
        $user = $event->getUser();
        $data["id"] = $user->getId();
        $event->setData($data);
    }
}
