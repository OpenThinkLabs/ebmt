<?php

$router = new Phalcon\Mvc\Router(false);

$router->add('/:controller/:action/:params', array(
  'namespace' => 'Ebmt\Controllers',
  'controller' => 1,
  'action' => 2,
  'params' => 3,
));

$router->add('/:controller', array(
   'namespace' => 'Ebmt\Controllers',
   'controller' => 1
));

$router->add('/', array(
		'namespace' => 'Ebmt\Controllers',
		'controller' => 'index'
));


$router->add('/api/:controller/:action/:params', array(
  'namespace' => 'Ebmt\Controllers\Api',
  'controller' => 1,
  'action' => 2,
  'params' => 3,
));

$router->add('/api/:controller', array(
  'namespace' => 'Ebmt\Controllers\Api',
  'controller' => 1
));

return $router;