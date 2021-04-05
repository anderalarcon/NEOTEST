/* Cartias desktop */

for(var i =1;i<=5;i++){
    document.getElementById("carita"+i).addEventListener("click",function(){
        this.setAttribute("class","caritas col-12 ")
       
        for(var i=1;i<=5;i++){
            if(i==this.id[6]){
                document.getElementById("car"+i).setAttribute("style","display")
              /*   document.getElementById("tests").setAttribute("style","margin-left:0.2rem") */
            }else{
                document.getElementById("carita"+i).removeAttribute("class")
                document.getElementById("carita"+i).setAttribute("class","btn")
                document.getElementById("car"+i).setAttribute("style","display:none")
            }
        }

    })
}


/* botones 1 desktop */

for(var i =1;i<=10;i++){
    
    document.getElementById("boton"+i).addEventListener("click",function(){
        this.setAttribute("class","botones")
        for(var i=1;i<=10;i++){
            if(i==this.id[5]||i==this.id[5]+this.id[6]){

            }else{
                document.getElementById("boton"+i).removeAttribute("class")
                document.getElementById("boton"+i).setAttribute("class","btn")
            }
        }
    })
}


/* botones 2 desktop */

for(var i =1;i<=10;i++){
   
    document.getElementById("boton"+i+"_b").addEventListener("click",function(){
        this.setAttribute("class","botones")
        for(var i=1;i<=10;i++){
            if(i==this.id[5]||i==this.id[5]+this.id[6]){

            }else{
                document.getElementById("boton"+i+"_b").removeAttribute("class")
                document.getElementById("boton"+i+"_b").setAttribute("class","btn")
            }
        }
    })
}



/*mobileeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee */
//carita principal
for(var i =1;i<=5;i++){
    document.getElementById("btnmoba_"+i).addEventListener("click",function(){
        this.setAttribute("style", "border:3px solid black;");

        for(var i=1;i<=5;i++){//ocultamos el resto
            if(i==this.id[8]){

            }else{
            document.getElementById("svg"+i).setAttribute("style","display:none")
            document.getElementById("btnmoba_"+i).setAttribute("style","")//borramos los demas macros

        }
        }

        for(var i=1;i<=5;i++){//mostramos el del click
            if(i==this.id[8])
            document.getElementById("svg"+i).setAttribute("style","")
           
            
        }
    })
}


//2222222222222222222222222222

for(var i =1;i<=6;i++){
    document.getElementById("btnmobb_"+i).addEventListener("click",function(){
        this.setAttribute("style", "border:3px solid black;");

        for(var i=1;i<=6;i++){//ocultamos el resto
            if(i==this.id[8]){

            }else{
            document.getElementById("svgb"+i).setAttribute("style","display:none")
            document.getElementById("btnmobb_"+i).setAttribute("style","")//borramos los demas macros

        }
        }

        for(var i=1;i<=6;i++){//mostramos el del click
            if(i==this.id[8])
            document.getElementById("svgb"+i).setAttribute("style","")
           
            
        }
    })
}

//3333333333333333333333333333333333333333333333333333333333333333
for(var i =1;i<=6;i++){
    document.getElementById("btnmobc_"+i).addEventListener("click",function(){
        this.setAttribute("style", "border:3px solid black;");

        for(var i=1;i<=6;i++){//ocultamos el resto
            if(i==this.id[8]){

            }else{
            document.getElementById("svgc"+i).setAttribute("style","display:none")
            document.getElementById("btnmobc_"+i).setAttribute("style","")//borramos los demas macros

        }
        }

        for(var i=1;i<=6;i++){//mostramos el del click
            if(i==this.id[8])
            document.getElementById("svgc"+i).setAttribute("style","")
           
            
        }
    })
}

//444444444444444444444444444444444444444444444444444444444444444444

for(var i =1;i<=6;i++){
    document.getElementById("btnmobd_"+i).addEventListener("click",function(){
        this.setAttribute("style", "border:3px solid black;");

        for(var i=1;i<=6;i++){//ocultamos el resto
            if(i==this.id[8]){

            }else{
            document.getElementById("svgd"+i).setAttribute("style","display:none")
            document.getElementById("btnmobd_"+i).setAttribute("style","")//borramos los demas macros

        }
        }

        for(var i=1;i<=6;i++){//mostramos el del click
            if(i==this.id[8])
            document.getElementById("svgd"+i).setAttribute("style","")
           
            
        }
    })
}

//55555555555555555555555555555555555555555555555555555555555555555555555


for(var i =1;i<=6;i++){
    document.getElementById("btnmobe_"+i).addEventListener("click",function(){
        this.setAttribute("style", "border:3px solid black;");

        for(var i=1;i<=6;i++){//ocultamos el resto
            if(i==this.id[8]){

            }else{
            document.getElementById("svge"+i).setAttribute("style","display:none")
            document.getElementById("btnmobe_"+i).setAttribute("style","")//borramos los demas macros

        }
        }

        for(var i=1;i<=6;i++){//mostramos el del click
            if(i==this.id[8])
            document.getElementById("svge"+i).setAttribute("style","")
           
            
        }
    })
}

//66666666666666666666666666666666666666666666666666666666666666666666666

for(var i =1;i<=6;i++){
    document.getElementById("btnmobf_"+i).addEventListener("click",function(){
        this.setAttribute("style", "border:3px solid black;");

        for(var i=1;i<=6;i++){//ocultamos el resto
            if(i==this.id[8]){

            }else{
            document.getElementById("svgf"+i).setAttribute("style","display:none")
            document.getElementById("btnmobf_"+i).setAttribute("style","")//borramos los demas macros

        }
        }

        for(var i=1;i<=6;i++){//mostramos el del click
            if(i==this.id[8])
            document.getElementById("svgf"+i).setAttribute("style","")
           
            
        }
    })
}
//77777777777777777777777777777777777777777777777777777777777777777777777

for(var i =1;i<=6;i++){
    document.getElementById("btnmobg_"+i).addEventListener("click",function(){
        this.setAttribute("style", "border:3px solid black;");

        for(var i=1;i<=6;i++){//ocultamos el resto
            if(i==this.id[8]){

            }else{
            document.getElementById("svgg"+i).setAttribute("style","display:none")
            document.getElementById("btnmobg_"+i).setAttribute("style","")//borramos los demas macros

        }
        }

        for(var i=1;i<=6;i++){//mostramos el del click
            if(i==this.id[8])
            document.getElementById("svgg"+i).setAttribute("style","")
           
            
        }
    })
}
//8888888888888888888888888888888888888888888888888888888888888888888888

for(var i =1;i<=6;i++){
    document.getElementById("btnmobh_"+i).addEventListener("click",function(){
        this.setAttribute("style", "border:3px solid black;");

        for(var i=1;i<=6;i++){//ocultamos el resto
            if(i==this.id[8]){

            }else{
            document.getElementById("svgh"+i).setAttribute("style","display:none")
            document.getElementById("btnmobh_"+i).setAttribute("style","")//borramos los demas macros

        }
        }

        for(var i=1;i<=6;i++){//mostramos el del click
            if(i==this.id[8])
            document.getElementById("svgh"+i).setAttribute("style","")
           
            
        }
    })
}
//99999999999999999999999999999999999999999999999999999999999999999999999
for(var i =1;i<=6;i++){
    document.getElementById("btnmobi_"+i).addEventListener("click",function(){
        this.setAttribute("style", "border:3px solid black;");

        for(var i=1;i<=6;i++){//ocultamos el resto
            if(i==this.id[8]){

            }else{
            document.getElementById("svgi"+i).setAttribute("style","display:none")
            document.getElementById("btnmobi_"+i).setAttribute("style","")//borramos los demas macros

        }
        }

        for(var i=1;i<=6;i++){//mostramos el del click
            if(i==this.id[8])
            document.getElementById("svgi"+i).setAttribute("style","")
           
            
        }
    })
}
/* botones mobile */

  for(var i =1;i<=10;i++){
    
    document.getElementById("btn_mob"+i).addEventListener("click",function(){
        
        this.setAttribute("style", "border:3px solid black");
        for(var i =1;i<=10;i++){
            if(i==this.id[7] || i==this.id[7]+this.id[8]){
            }else{
            document.getElementById("btn_mob"+i).setAttribute("style","")}
        }
    })
}




/* botones mobile 2222 */

for(var i =1;i<=10;i++){
    
    document.getElementById("btnmob2_"+i).addEventListener("click",function(){
        
        this.setAttribute("style", "border:3px solid black");
        for(var i =1;i<=10;i++){
            if(i==this.id[8] || i==this.id[8]+this.id[9]){
            }else{
            document.getElementById("btnmob2_"+i).setAttribute("style","")}
        }
    })
}
