(function noDebuger(){
    function testDebuger(){
        var d=new Date();
        debugger;
        if(new Date()-d>10){
            document.body.innerHTML='<div>年轻人，不要太好奇</div>';
            return true;
        }
        return false;
    }
 
    function start(){
        while(testDebuger()){
            testDebuger();
        }
    }
    if(!testDebuger()) {
        window.onblur = function(){
            setTimeout(function(){
                start();
            },500)
        }
    }
    else{
        start();
    }
 
})();