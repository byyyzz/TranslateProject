

eventListeners();

function eventListeners(){
    document.getElementById("translate-form").addEventListener("submit",translateWord);
    document.getElementById("language").onchange=function(){
        //Arayüz
        ui.changeUI();
    }
    
}

const ui=new UI();

function translateWord(e){
    
    const translate=new Translate(document.getElementById("word").value,document.getElementById("language").value);

    translate.translateWord(function(err,response){
        if(err){
            //hata 
            console.log(err);
        }
        else{
            ui.displayTranslate(response);
        }

    });
    e.preventDefault();
 }
