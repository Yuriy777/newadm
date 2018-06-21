<?php


if (isset($_GET['params'])) {

    $params = explode('=', $_SERVER["REQUEST_URI"]);
    $params = explode('%26', $params[1]);


    $result = file_get_contents('http://www.kmitserver.com/crazysob/user/csob_system_get_recipe?api_key=7GjmGVQz85q6bz8q&recipe_id=' . $params[0]);
    $result = json_decode($result, true);

    makePage($result);
    var_dump($result);
}

function makePage($result)
{
    $html = '<!doctype html>' . PHP_EOL;
    $html .= '<html  dir="rtl">' . PHP_EOL;
    $html .= '<head>' . PHP_EOL;

    $html .= '<meta property="og:title" content=" רשימת קניות למתכון ' . $result['recipe_name'] .'"/>' . PHP_EOL;
    $html .= '<meta property="og:description" content="' . $result['recipe_name'] . '"/>' . PHP_EOL;
    $html .= '<meta property="og:image" itemprop="image" content="' . $result['publisher_array']['publisher_logo_url'] . '"/>' . PHP_EOL;
    $html .= '<meta property="og:type" content="website"/>' . PHP_EOL;

    $html .= '</head>' . PHP_EOL;
    $html .= '<body></body>' . PHP_EOL;
    $html .= '</html>';
    echo $html;
}

