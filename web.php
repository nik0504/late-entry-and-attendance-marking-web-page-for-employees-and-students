<?php
   $params = require(__DIR__ . '/params.php');
   $config = [
      'id' => 'basic',
      'basePath' => dirname(__DIR__),
      'bootstrap' => ['log'],
      'modules' => [
         'hello' => [
            'class' => 'app\modules\hello\Hello',
         ],
      ],
      'components' => [
         'request' => [
            // !!! insert a secret key in the following (if it is empty) - this is 
               //required by cookie validation
            // 'enableCookieValidation'=>false,
            // 'cookieValidationKey' => 'ymoaYredfgdfgdfbZHa8gURuolioHGlK8fLXCKjO',

             'enableCookieValidation' => false,

               'enableCsrfValidation' => false,
               'parsers' => [
                  'application/json' => 'yii\web\JsonParser',
               ]
         ],
         'cache' => [
            'class' => 'yii\caching\FileCache',
         ],
         'user' => [
            'identityClass' => 'app\models\User',
            'enableAutoLogin' => true,
         ],
         'errorHandler' => [
            'errorAction' => 'site/error',
         ],
         'mailer' => [
            'class' => 'yii\swiftmailer\Mailer',
            // send all mails to a file by default. You have to set
            // 'useFileTransport' to false and configure a transport
            // for the mailer to send real emails.
            'useFileTransport' => true,
         ],
         'log' => [
            'traceLevel' => YII_DEBUG ? 3 : 0,
            'targets' => [
               [
                  'class' => 'yii\log\FileTarget',
                  'levels' => ['error', 'warning'],
               ],
            ],
         ],
         'urlManager' => [
            'enablePrettyUrl' => true,
            //'enableStrictParsing' => true,
            'showScriptName' => false,
            'rules' => [
               [
                  'class' => 'yii\rest\UrlRule', 
                  'controller' => 'employee',
               ],
               [
                  'class' => 'yii\rest\UrlRule', 
                  'controller' => 'late',
                  // 'extraPatterns' => [
                  //  //'GET ' => 'action',
                  //    'GET search' => 'search',
                  //  ],
                  // 'patterns' => [
                  //    'GET, ' => 'report',
                  // ],
               ],
               [
                  'class' => 'yii\rest\UrlRule', 
                  'controller' => 'report',
               ],
               [
                  'class' => 'yii\rest\UrlRule', 
                  'controller' =>['hello/student'],
                  // 'patterns' => [
                  //    // 'GET, HEAD get-employee-info' => 'get-employee-info',
                  //    'GET, HEAD get-employee-info/<name>' => 'get-employee-info',
                  //    'POST, PATCH put-employee-info' => 'put-employee-info',
                  //    // 'POST store-employee-info' => 'store-employee-info',
                  // ],
               ],

         //       // [
         //       //      'class' => 'yii\rest\UrlRule',
         //       //      'controller' => ['promoter'],
         //       //      'pluralize' => false,
         //       //      'patterns' => [
         //       //          'GET,HEAD get-measure-info/<store_id>' => 'get-measure-info',
         //       //          'GET,HEAD get-manual-measure-info/<store_id>' => 'get-manual-measure-info',
         //       //          'POST,PATCH send-response' => 'send-response',
         //       //          'GET,HEAD get-last-measure-info/<store_id>' => 'get-last-measure-info',
         //       //          'GET,HEAD get-pos-measure-info/<store_id>' => 'get-pos-measure-info',
         //       //          'GET,HEAD get-all-notification/<store_id>' => 'get-all-notification',
         //       //          'POST,PATCH put-notification-manually/<store_id>' => 'put-notification-manually',
         //       //          'POST,PATCH read-notification' => 'read-notification',
         //       //      ]
         //       //  ],

             ],


          ],
         // 'request' => [
            
         // ],
         'db' => require(__DIR__ . '/db.php'),
      ],
      'params' => $params,
   ];
   if (YII_ENV_DEV) {
      // configuration adjustments for 'dev' environment
      $config['bootstrap'][] = 'debug';
      $config['modules']['debug'] = [
         'class' => 'yii\debug\Module',
      ];
      $config['bootstrap'][] = 'gii';
      $config['modules']['gii'] = [
         'class' => 'yii\gii\Module',
      ];
   }
   return $config;
?>