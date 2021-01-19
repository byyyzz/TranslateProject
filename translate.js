function Translate(word,language){
    this.apikey="apikey";
    this.word=word;
    this.language=language;
    
    this.xhr=new XMLHttpRequest();
    //this.xhr.withCredentials = true;

}


Translate.prototype.translateWord=function(callback){

    const data = JSON.stringify({"input": `${this.word}`, "lang": `${this.language}` });
    //console.log(data);

    this.xhr.open("POST",`https://kiara-translate.p.rapidapi.com/get_translated/`);
    this.xhr.setRequestHeader("content-type", "application/json");
    this.xhr.setRequestHeader("format","json");
    this.xhr.setRequestHeader("x-rapidapi-key", "apikey");
    this.xhr.setRequestHeader("x-rapidapi-host", "kiara-translate.p.rapidapi.com");
   
    
    this.xhr.onload= () => {
        
        if(this.xhr.status===200){
            const json=JSON.parse(this.xhr.responseText);
            const text=json.translated;         
            

            callback(null,text);

        }
        else{
             callback("bir hata oluştu.",null);
            
        }

    }
    this.xhr.send((data));  

};
