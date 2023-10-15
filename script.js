Shery.imageEffect(".back", {
    style: 5, 
    // debug: true,
    gooey: true,
    config:{"a":{"value":1.98,"range":[0,30]},"b":{"value":-0.97,"range":[-1,1]},"aspect":{"value":2.186385737439222},"gooey":{"value":true},"infiniteGooey":{"value":true},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":false},"maskVal":{"value":1,"range":[1,5]},"scrollType":{"value":0},"geoVertex":{"range":[1,64],"value":1},"noEffectGooey":{"value":true},"onMouse":{"value":1},"noise_speed":{"value":0.2,"range":[0,10]},"metaball":{"value":0.17,"range":[0,2]},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0,"range":[0,0.1]},"noise_height":{"value":0.5,"range":[0,2]},"noise_scale":{"value":17.36,"range":[0,100]}},

  });



  let elems = document.querySelectorAll('.elem');

  elems.forEach(elem => {
    
    let h1s = elem.querySelectorAll('h1');
    let index =0;
    let ani = false;
    document.querySelector('.main').addEventListener('click',()=>{
      if(!ani){
        ani = true;
        gsap.to(h1s[index],{
          top:'-100%' ,
          duration:0.5,
          onComplete:function(){
            ani = false;
            gsap.set(this._targets[0] , {top:'100%'});
          }
        })
  
        index === h1s.length-1? index =0:index+=1;
        gsap.to(h1s[index],{top:0 , duration:0.5});
        
      }
    })
  });
