



window.onload= function() {


getColorFromLoacl();



}
// change background randomly 





let landingPage = document.querySelector(".landing-page");





function changeBackGound() {

  
  let randomImgNum = Math.floor(Math.random() * 6) +1;
  
  landingPage.style.cssText = `
  
  background-image: url("../imgs/new_0${randomImgNum}.jpg");
   
  `;
  
}




////////////////  setting Box  //////////////// 



let gearButton = document.querySelector(".togglebox");

let settingBox = document.querySelector(".settingBox");



function showAndHideSettingBox() {
  
  
  if(settingBox.classList.contains("showSettingBox"))
    {
      
      settingBox.classList.remove("showSettingBox");
      
      gearButton.children[0].classList.remove("fa-spin");
      
    }else
    {
      
      settingBox.classList.add("showSettingBox");
      
      gearButton.children[0].classList.add("fa-spin");
      
    }
    
  } 
  
  
  gearButton.addEventListener("click", showAndHideSettingBox);
  
  
  
  
  /////////change RootColor
  
  let ColorsChoeses = document.querySelectorAll(".colorsList li");
  
  
  
  ColorsChoeses.forEach((color => {
    
    color.addEventListener("click", function() {
      
      ColorsChoeses.forEach((licolor)=> licolor.classList.remove("active"));
      
      this.classList.add("active");
      changeMainColor(this)
      saveColorToLocalStorage(this)
    })
    
  }))
  
  
  
  function saveColorToLocalStorage(color)
  {
    
    window.localStorage.setItem("color",`${color.dataset.color}`)
    
  }
  
  function getColorFromLoacl()
  {
  let mainColor = localStorage.getItem("color")
  
  if(mainColor !==null)
    {
      document.documentElement.style.setProperty("--mainColor",window.localStorage.getItem("color"))
      
      setActiveClassOnLi(mainColor);
    }
    // console.log(mainColor)
    
    
  }
  
  function changeMainColor(color) {
    
    if(color.classList.contains("active"))
      {
        // document.documentElement.style.setProperty("--mainColor", "blue");
        
        let root = document.documentElement;
        
        root.style.setProperty("--mainColor" , color.dataset.color)
        
      }
      
      
    }
    
    
    
    function setActiveClassOnLi(mainColor) {
      
      ColorsChoeses.forEach(li => {li.classList.remove("active")});
      
      ColorsChoeses.forEach(licolor => {
        
        
        if(licolor.dataset.color === mainColor)
          {
            
            licolor.classList.add("active")
          }
        
        })

        
      }
      
      
      
      
      
      
      
      
      ///////random or Not Random 
      
      let buttonYes = document.querySelector(
        ".settingBox .OptionsBox .mangeRandom span.yes"
      );
      

      let buttonNo = document.querySelector(
        ".settingBox .OptionsBox .mangeRandom span.no"
      );

      
      let randomBackGround=   setInterval(() =>{
        changeBackGound();
        // console.log("lol")
      }, 5000);
      let newInterval=false;

buttonYes.addEventListener("click",(e)=>{

  if (!(e.target.classList.contains("active")) ){
    e.target.classList.add("active")
    buttonNo.classList.remove("active")
   
    
      clearInterval(randomBackGround)

    
     randomBackGround = setInterval(changeBackGound, 5000);

    newInterval=true
  
  }
  
})



buttonNo.addEventListener("click",(e)=> {
  
  if (!(e.target.classList.contains("active"))) {
    e.target.classList.add("active");
    buttonYes.classList.remove("active");

    clearInterval(randomBackGround);
    // if(newInterval)
    // {
    //   clearInterval(rondomFromButton);
    // }

    landingPage.style.cssText = `
  
  background-image: url("../imgs/new_01.jpg");
   
  `;
  }
})
      












// // random Elzero 



// let backgroundInterval;



// let backgroundLoaclItem = localStorage.getItem("backGroundOption");

// if(backgroundLoaclItem !== null)
//   {
    
//   if ( backgroundLoaclItem === "true") {

//     backgroundOption=true;
//   }else {

//     backgroundOption=false;
    
    
//   }
//   document.querySelectorAll(".settingBox .OptionsBox .mangeRandom span").forEach(element => {

//     element.classList.remove("active");

//   }) ;

//   if(backgroundLoaclItem === 'true')
//   {
//     document.querySelector(".yes").classList.add("active")
//   }else {
    
//     document.querySelector(".yes").classList.add("active")

//   }

// }




// const randomBackE1 = document.querySelectorAll(
//   ".settingBox .OptionsBox .mangeRandom span"
// );


// randomBackE1.forEach(span => {

//   span.addEventListener("click",(e)=>{

//     e.target.parentElement.querySelectorAll(".active").forEach(element => {
//       element.classList.remove("active");
//     });

//     e.target.classList.add("active");

//     if(e.target.dataset.background === "yes")
//     {

//         backgroundOption =true;


//         randomizeImgs();
//         localStorage.setItem("backGroundOption",true);
        
//       }else {
        
//         backgroundOption =false;
        
//         clearInterval(backgroundInterval)
//         localStorage.setItem("backGroundOption",false);
   
   
//       }

//   })
// })
      





// function randomizeImgs(){

//   if(backgroundOption)
//   {

//     backgroundInterval=setInterval(changeBackGound, 1000);
//   }


// }



//////fill skills 



let skillSection = document.querySelector(".skills")
;


function fillSkills(window)
{
  
  
  
  let skillOffSetTop = skillSection.offsetTop;
  
  // console.log(skillOffSetTop);
    
  
  let windowSCrollTop = window.pageYOffset;
  
  if (windowSCrollTop > (skillOffSetTop - 350)) {
   
    let spans = document.querySelectorAll(
      ".skills .skill-box .skillProgress  span"
    );


    spans.forEach(span => {

      span.style.width = span.dataset.prog;

      span.style.backgroundColor =span.dataset.color;

    })

  }

  
}





window.onscroll = function () {

  fillSkills(this);
}





///// Pop Image


let images = document.querySelectorAll(".gallery .images-box img");


images.forEach(imge =>  {

  imge.addEventListener("click", (e) => {
    console.log("lol3")
    let overlay =document.createElement("div")

    overlay.classList.add('overlay-Popup');

    document.body.appendChild(overlay);

    let popupBox = document.createElement("div");

    popupBox.className = `popup-box`;

    let popupImage =document.createElement("img");

    popupImage.src =imge.src;

    popupBox.appendChild(popupImage);

    document.body.appendChild(popupBox);


      if(imge.alt !== null)
      {
        let imgHeading =document.createElement("h3");


        let imgText =document.createTextNode(imge.alt);
      
        imgHeading.appendChild(imgText);

        popupBox.prepend(imgHeading);


      
      }


      let closeButton = document.createElement("span");

      closeButton.innerHTML="X";

      closeButton.classList.add("closePopup");

      closeButton.addEventListener("click",function() {

        overlay.remove();

        this.parentNode.remove();

      })

      popupBox.appendChild(closeButton);


  })

})

      
      
      ////////////////  setting Box  //////////////// 
      
      
      
      
      
      
      
      
      
      


