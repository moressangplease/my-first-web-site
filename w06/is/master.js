var Body = {
  setBackgroundColor : function(color){
    $('body').css('background-color',color)
  },
  setColor : function(color){
    $('body').css('color',color)
  }
}
var Links = {
  setColor : function(color){
    $('a').css('color', color)
    } 
  }

function colorHandler(self){
  var target = document.querySelector('body');
  if(self.value=='switch'){
    Body.setBackgroundColor('black');
    Body.setColor('white');
    Links.setColor('powderblue'); 
    self.value='switch_c';
  } else {
    Body.setBackgroundColor('white');
    Body.setColor('black');        
    Links.setColor('green');
    self.value='switch';
  }
} 