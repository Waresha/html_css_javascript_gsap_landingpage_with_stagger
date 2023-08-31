const ami = gsap.timeline();

ami
.from( "#nav" ,{
   opacity : 0 ,
   y : 20 ,
   delay : 1
})
.from(".flow-handing h1" ,{
  opacity : 0 ,
  duration : 1 ,
  y : 20 ,
  dalay : 1 ,
  stagger : 0.5
})
.from(".happiness h3" ,{
  opacity : 0 ,
  delay : 0.5 ,
  y : 20 
})
.from(".happiness button" ,{
  opacity :0,
  y:10,
})