<?php 
$loader = new \Phalcon\Loader();

/**
 * We're a registering a set of directories taken from the configuration file
 */
$loader->registerDirs(
	array(
		$config->application->controllersDir,
		$config->application->pluginsDir,
		$config->application->libraryDir,
		$config->application->modelsDir,
	)
)->register();


/**
 * We're a registering a set of directories taken from the configuration file
 */
$loader->registerNamespaces(array(
		'Ebmt\Controllers' => __DIR__ . '/../controllers/',
		'Ebmt\Controllers\Api' => __DIR__ . '/../controllers/api',
		'Ebmt\Models' => __DIR__ . '/../models',
		'Ebmt\Library' => __DIR__ . '/../library'
))->register();

