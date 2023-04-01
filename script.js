function init(){
    gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.caom/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});
// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();
}
init();

var opt = document.querySelector("#nav-prt1-in");
  var flag = 0; 
  var btn1 = document.querySelector("#btn1");
  var btn2 = document.querySelector("#btn2");
  var line1 = document.querySelector("#nav-line1");
  var line2 = document.querySelector("#nav-line2");
  var line3 = document.querySelector("#nav-line3");
  var fulscr = document.querySelector("#ful-scr");
  var img1 = document.querySelector("#img1");
  var img2 = document.querySelector("#img2");

  if (window.innerWidth <=600){
  

    opt.addEventListener("click",function(){
      if(flag == 0){
        line1.style.rotate = "45deg";
        line2.style.width = 0;
        line3.style.rotate = "-45deg";
        fulscr.style.scale = 1.5 ;
        document.querySelector("#nav").style.backgroundColor = "transparent";
        document.querySelector("#nav").style.color = "#FEF9F3";
        document.querySelector("#nav").style.borderColor = "#FEF9F3";
        document.querySelector(".nav-btn").style.borderColor = "#FEF9F3";
        document.querySelector("#nav-btn2").style.backgroundColor = "#FEF9F3";
        document.querySelector("#nav-btn2").style.color = "#000";
        
        gsap.to(".nav-lines",{
          backgroundColor : "#FEF9F3",
        })
        flag = 1
      }
      else{
        line1.style.rotate = "0deg";
        line2.style.width = "100%";
        line3.style.rotate = "0deg";
        fulscr.style.scale = 0 ;
        document.querySelector("#nav").style.backgroundColor = "#FEF9F3";
        document.querySelector("#nav").style.color = "black";
        gsap.to(".nav-lines",{
          backgroundColor : "#000",
        })
        document.querySelector("#nav").style.borderColor = "#000";
        document.querySelector(".nav-btn").style.borderColor = "#000";
        document.querySelector("#nav-btn2").style.backgroundColor = "#000";
        document.querySelector("#nav-btn2").style.color = "#FEF9F3";
    
        flag = 0
      }
      
    })

   
    btn1.addEventListener("click",function(){
      img1.style.opacity = 1 ;
      img2.style.opacity = 0 ;
      img2.style.scale = 0 ;
      img1.style.scale = 1 ;
      btn2.style.backgroundColor = "Transparent" ;
      btn1.style.backgroundColor = "#FEF9F3" ;
    
      gsap.to(".text-box1 h1",{
        y : 100,
        duration : 1,
        stagger:0.3
      })
      gsap.to(".text-box2 h1",{
        y: -100,
        duration:1,
        stagger:0.2,
        delay:1
      })
    })
    
    btn2.addEventListener("click",function(){
      img2.style.opacity = 1 ;
      img1.style.opacity = 0 ;
      img2.style.scale = 1 ;
      img1.style.scale = 0 ;
      btn1.style.backgroundColor = "Transparent" ;
      btn2.style.backgroundColor = "#FEF9F3" ;
      
      gsap.to(".text-box1 h1",{
        y : 0,
        duration : 1,
        stagger:0.3,
        delay:0.9
      })
      gsap.to(".text-box2 h1",{
        y: 100,
        duration:0.8,
        stagger:0.2
      })
    })  

    console.log("this is mobile");
  }else{
    var imgg = document.querySelectorAll(".page5-elem");
  // console.log(imgg);
  var image = document.querySelector(".image")
  
  // mouse Events
  imgg.forEach(function(elem){
    elem.addEventListener("mouseenter",function (){
        elem.childNodes[1].style.scale = 1
        
        
    })
    elem.addEventListener("mouseleave",function (){
        elem.childNodes[1].style.scale = 0
        
        
    })
    elem.addEventListener("mousemove",function (dets){
        elem.childNodes[1].style.left = `${dets.x}px`;
        // console.log("ha")
        
    })
  })
  
  // page-4
  var btn1 = document.querySelector("#btn1");
  var btn2 = document.querySelector("#btn2");
  var img1 = document.querySelector("#img1");
  var img2 = document.querySelector("#img2");
  //  console.log(btn1);
  
  btn1.addEventListener("click",function(){
    img1.style.opacity = 1 ;
    img2.style.opacity = 0 ;
    img2.style.scale = 0 ;
    img1.style.scale = 1 ;
    btn2.style.backgroundColor = "Transparent" ;
    btn1.style.backgroundColor = "#FEF9F3" ;
  
    gsap.to(".text-box1 h1",{
      y : 100,
      duration : 1,
      stagger:0.3
    })
    gsap.to(".text-box2 h1",{
      y: -100,
      duration:1,
      stagger:0.2,
      delay:1
    })
  })
  
  btn2.addEventListener("click",function(){
    img2.style.opacity = 1 ;
    img1.style.opacity = 0 ;
    img2.style.scale = 1 ;
    img1.style.scale = 0 ;
    btn1.style.backgroundColor = "Transparent" ;
    btn2.style.backgroundColor = "#FEF9F3" ;
    
    gsap.to(".text-box1 h1",{
      y : 0,
      duration : 1,
      stagger:0.3,
      delay:0.9
    })
    gsap.to(".text-box2 h1",{
      y: 100,
      duration:0.8,
      stagger:0.2
    })
  })
  
  // nav
  var line1 = document.querySelector("#nav-line1");
  var line2 = document.querySelector("#nav-line2");
  var line3 = document.querySelector("#nav-line3");
  var opt = document.querySelector("#nav-prt1-in");
  var fulscr = document.querySelector("#ful-scr");
  // console.log(line1);
  var flag = 0;
  opt.addEventListener("click",function(){
    if(flag == 0){
      line1.style.rotate = "45deg";
      line2.style.width = 0;
      line3.style.rotate = "-45deg";
      fulscr.style.scale = 1.8 ;
      document.querySelector("#nav").style.backgroundColor = "transparent";
      document.querySelector("#nav").style.color = "#FEF9F3";
      document.querySelector("#nav").style.borderColor = "#FEF9F3";
      document.querySelector(".nav-btn").style.borderColor = "#FEF9F3";
      document.querySelector("#nav-btn2").style.backgroundColor = "#FEF9F3";
      document.querySelector("#nav-btn2").style.color = "#000";
      
      gsap.to(".nav-lines",{
        backgroundColor : "#FEF9F3",
      })
      flag = 1
    }
    else{
      line1.style.rotate = "0deg";
      line2.style.width = "100%";
      line3.style.rotate = "0deg";
      fulscr.style.scale = 0 ;
      document.querySelector("#nav").style.backgroundColor = "#FEF9F3";
      document.querySelector("#nav").style.color = "black";
      gsap.to(".nav-lines",{
        backgroundColor : "#000",
      })
      document.querySelector("#nav").style.borderColor = "#000";
      document.querySelector(".nav-btn").style.borderColor = "#000";
      document.querySelector("#nav-btn2").style.backgroundColor = "#000";
      document.querySelector("#nav-btn2").style.color = "#FEF9F3";
  
      flag = 0
    }
    
  })
  
  // page-1-right
  let curimg = 1;
  let bgimg = document.querySelector("#banner");
  let b = 0;
  let leftup = document.querySelectorAll(".left1-up");
  
  setInterval(()=>{
    document.querySelector(".banner-img").style.opacity = 0;
    document.querySelector(".banner-img").style.zIndex = 0;
    
    let num = document.querySelector("#right-time h3");
    if(curimg == 1){
      
      num.innerHTML = "01";
      bgimg.childNodes[1].style.opacity=1;
      bgimg.childNodes[1].style.zIndex=1;
      // bgimg.childNodes[1].style.scale=1;
      curimg = 2
      bgimg.childNodes[7].style.opacity=0;
      // bgimg.childNodes[7].style.scale=0;
      bgimg.childNodes[7].style.zIndex=0;
      
      // console.log(bgimg.childNodes[1]);
    }else if(curimg == 2){
      num.innerHTML = "02";
  
      bgimg.childNodes[1].style.opacity=0;
      bgimg.childNodes[1].style.zIndex=0;
      // bgimg.childNodes[1].style.scale=0;
      bgimg.childNodes[3].style.opacity=1;
      bgimg.childNodes[3].style.zIndex=1;
      // bgimg.childNodes[3].style.scale=1;
      curimg = 3
      // console.log(bgimg.childNodes[3])
    }else if(curimg == 3){
      num.innerHTML = "03";
      bgimg.childNodes[3].style.opacity=0;
      bgimg.childNodes[3].style.zIndex=0;
      // bgimg.childNodes[3].style.scale=0;
      bgimg.childNodes[5].style.opacity=1;
      bgimg.childNodes[5].style.zIndex=1;
      // bgimg.childNodes[5].style.scale=1;
      curimg = 4
      // console.log(bgimg.childNodes[5])
    }else if(curimg = 4){
      num.innerHTML = "04";
    
      bgimg.childNodes[5].style.opacity=0;
      bgimg.childNodes[5].style.zIndex=0;
      // bgimg.childNodes[5].style.scale=0;
      bgimg.childNodes[7].style.opacity=1;
      bgimg.childNodes[7].style.zIndex=1;
      // bgimg.childNodes[7].style.scale=1;
      curimg = 1
      // console.log(bgimg.childNodes[7])
    }
    
  },6000)
  
  let inbar = document.querySelector("#inner-bar");
  let a = 1;
  setInterval(()=>{
    if(a === 1){
      inbar.style.width = "100%"
      inbar.style.opacity = 1;
      a = 2
    }else if(a == 2){
  
      inbar.style.opacity = 0;
      inbar.style.width = "0%";
      a = 1
    }
    
    // console.log(inbar)
  },3000)
  
  // page-1-left
  
  // console.log(leftup)
  
  setInterval(function() {
    if(b >- 400){
      gsap.to(leftup,{
        y: b+"%",
        opacity: 1,
        // stagger:0.2
      })
    }else{
      b = 100,
      
      gsap.to(leftup,{
        y:"0%",
        duration: 0.01,
        opacity:0,
        // delay:1
      })
  
    }
    b -= 100;
  },6000);
  

  
  console.log("this is laptop");
  }

  window.addEventListener("resize",function(){
    this.location.reload();
  })
  window.addEventListener("mousemove",function(dets){
    document.querySelector("#point").style.transform = `translate(${dets.clientX}px, ${dets.clientY}px)`;
  })  
