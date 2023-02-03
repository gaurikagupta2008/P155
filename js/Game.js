AFRAME.registerComponent("game-play",{
    schema:{
        elementId:{type:"string",default:"#coins"},
    },
    
    isCollided:function(elementId){
        const element=document.querySelector(elementId);
        element.addEventListener("collide",e=>{
            if(elementId.includes("#coins")){
                element.setAttribute("visible",false);
                console.log("ring collision");
            }
            if(elementId.includes("#fish")){
                console.log("fish collision");
            }
        });
    }
});



