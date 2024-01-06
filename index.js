var num_clicks=1


async function read_file(){

    //var index=0;    
    let response = await fetch('synonyms.txt');
    let data = await response.text();
    let data_arr=data.split("~")
    //console.log("Data arr: "+data_arr[0]);
    generate_equation(data_arr, num_clicks)

    
    
}


async function generate_equation(arr_data, numberofClicks){
    
    if(numberofClicks>0){

            if(numberofClicks<arr_data.length){
                days_data=arr_data[numberofClicks-1]
                lst_data=days_data.split("|")
                //console.log("Last: "+lst_data);
                var str, i=1;

                lst_data.forEach(function(slide) {
                ele=slide.split("-")  ;
                str=`<h3>${ele[0]}</h3><br><h5>${ele[1]}</h5>`;
                document.getElementById(`ext${i}`).innerHTML = str;
                i++;
                });

           
            
            next.addEventListener("click", function(){
            /*const audio = document.getElementById("myAudio"); 
            audio.play();*/
                numberofClicks=numberofClicks+1;
                generate_equation(arr_data, numberofClicks)
            });

            prev.addEventListener("click", function(){
                numberofClicks=numberofClicks-1
                generate_equation(arr_data, numberofClicks)
            }) ;
            
            }
            else{

                numberofClicks=arr_data.length

            }


            }

    else{
    numberofClicks=1

    }
    }


    
      
    
    read_file()
    