$(document).ready(function(){
var nb = 2

    $("select option:selected").each(function () {
       nb = $(this).text();
    })
    $("select").change(function () {
        var str = "";
        $("select option:selected").each(function () {
              str = $(this).text();
            });
        nb = str
       
      })
     
     /** ici on met le nombre de bande que l on veut**/

   
        var $taille = $('.band img').width()
    var $hauteur = $('.band img').height()
        $hauteur = $hauteur + 'px'
    var $taille_prime = $taille + 'px'
      $('.group').css('width',$taille_prime)
    $('.group').css('height',$hauteur)

    var $link=$('.effet img').attr('src')
   

   

    $('#valide').click(function(){
 
     
  var $tiers= $taille / nb
  
    var $tiers1 = $tiers + 'px'
    var $depart =- $tiers + 'px'
   
    var bandy= "bandy1"
    
    var nbcalc = nb -1
    nbcalc = 100 / nbcalc 



    $('.group').append('<div class="band band0" style="left: '+$depart+';width:'+$tiers1+';height:'+$hauteur+';background: url('+$link+') 0% 0;"></div>')
  
    $('.band0').stop().animate({left:"0px"},700)  

    for(var i =1;i < nb; i++){
        
        var $bon = $tiers * i + 'px'
         bandy = 'bandy'+ i
         var nbande = nbcalc * i +'%'
         
          $('.group').append('<div class="band bandy'+i+'" style="left: '+$bon+' ;width:0;height:'+$hauteur+';background: url('+$link+') '+nbande+' 0;"></div>')
   
        $("."+ bandy).animate({width:$tiers},700)
    }
})



   

  })