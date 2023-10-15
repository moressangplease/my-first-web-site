var Body = {
    bgsetcolor : function(color){
        document.querySelector('body').style.backgroundColor = color;
    },
    setcolor : function(color){
        document.querySelector('body').style.color = color;
    }
}
var Links = {
    setColor : function(color){
      var alist = document.querySelectorAll('a');
      var i = 0;
      while (i < alist.length) {
        alist[i].style.color = color;
        i = i + 1;
       }
    }
}

function nightdayhandler(self){
    var target = document.querySelector('body');

    if(self.value == 'night'){
      Body.bgsetcolor('black');
      Body.setcolor('white');
      self.value = 'day';
      Links.setColor('powderblue');
    } 
    else {
      Body.bgsetcolor('white');
      Body.setcolor('black');
      self.value = 'night';
      Links.setColor('blue');
    }  
  }