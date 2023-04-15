

$(document).keydown(f1)

function f1(){
    if ($('#dinoz').classList !=='jump'){

        $('#dinoz').addClass('jump')
    }
    setTimeout(
        function (){
        $('#dinoz').removeClass( 'jump')
        },1000)

}
function f2(){
   let kaktus= $('#kaktus').css('left')
    let dinoztop = $('#dinoz').css('top')
    console.log(kaktus +'--'+ dinoztop)
    dinoztop = Number(dinoztop.slice(0,-2))
    let kaktusleft = Number(kaktus.slice(0,-2))
    console.log(dinoztop)
    if (0<kaktusleft && kaktusleft<50 && dinoztop>300){
        alert('Столкнулись')
        location.reload()
    }
}
setInterval(f2,10)
 function f3(){
    let ptero= $('#ptero').css('left')
     let dinoztop = $('#dinoz').css('top')
    console.log(ptero +'--'+ dinoztop)
     dinoztop = Number(dinoztop.slice(0,-2))
     let pteroleft = Number(ptero.slice(0,-2))
     console.log(dinoztop)
     if (0<pteroleft && pteroleft<50 && dinoztop<150 ){
         alert('Сожрал')
     }

 }
  let bg_offset = 0;
  let bg_object = document.body;
  function scroll_bg(Size){
      bg_offset++;
      if (bg_offset>Size) bg_offset = 0;
      bg_object.style.backgroundPosition = bg_offset + "px0";
  }
  let Timer = window.setInterval("scroll_bg(150)", 50);
 setInterval(f3,10)