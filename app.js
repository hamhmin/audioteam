$(function(){
    const swiper = new Swiper('.swiper', {
        // 옵션
      
        direction: 'horizontal',
        loop: true, // true: 무한 넘김 false: 끝이 있음
      
        // 하단 pager
        pagination: {
            // class명 지정
        el: '.swiper-pagination',
          type: 'bullets'
        },
      
      });
});

// 수량 버튼
$(function(){
    $('#dec').click(function(e){
    e.preventDefault();
    var stat = $('#num').text();
    var num = parseInt(stat,10);
    num--;
    if(num<=0){

    num =1;
    }
    $('#num').text(num);
    });
    $('#inc').click(function(e){
    e.preventDefault();
    var stat = $('#num').text();
    var num = parseInt(stat,10);
    num++;
    
    if(num>5){

    num=5;
    }
    $('#num').text(num);
    });
    });
    