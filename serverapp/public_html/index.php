<?php

require_once __DIR__.'/../vendor/autoload.php';

$app = new Silex\Application();

$app->get('/hello', function() {
    return 'Hello!';
});

$app->get('/dad', function(Silex\Application $app) {
	$obj = (object) 'ciao';
	return $app->json($obj);
});

$app->run();
