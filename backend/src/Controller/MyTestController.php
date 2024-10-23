<?php

namespace App\Controller;

use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

class MyTestController
{
	#[Route('/test')]
    public function number(): Response
    {
        $number = random_int(0, 100);

        return new Response(
            '{"test": "'.$number.'"}'
        );
    }
}
