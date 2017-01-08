<?php

header("access-control-allow-origin: *");

if($_GET['city']){

    $city = str_replace(' ', '' , $_GET['city']);

    $content = file_get_contents("http://www.weather-forecast.com/locations/" . $city . "/forecasts/latest");


    preg_match('/3 Day Weather Forecast Summary:<\/b><span class="read-more-small"><span class="read-more-content"> <span class="phrase">(.*?)</s'
        , $content , $final_res);


    echo $final_res[1];

}

else{
    echo ' there is an error , could not get city';
}

?>

