/**
 * Created by Andrija on 1/8/17.
 */

$(function(event){

    $('.alert').hide();

    $("#submitButton").click(function (event) {

        event.preventDefault();

        var cityName = $("#inputArea").val();

        if(cityName != ""){

            cityName.trim();

            cityName = cityName.replace(" ", "-");

            $.ajax({

                url: "getWeather.php?city="+ cityName

            })
                .done(function(data){

                    console.log("function with data");

                    if(data == ""){
                        console.log(data);
                        $('#fail').fadeIn();
                    }
                    else{
                        console.log(data);

                        $("#success").html(data).fadeIn();

                        if ($("#success").is(":visible")){
                            console.log("it is visible");
                        }
                    }

                });
        }
        else{
            $('#noCity').fadeIn();
        }


    })



});