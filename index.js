function Apod(id){
    this.id = id;
    this.date = undefined;
    
  
    
    let body = document.body;
    this.container = document.createElement('div');
    this.container.setAttribute('id', this.id);
    this.addPic = function() {
        let element = document.createElement('div');
        if(this.date === undefined) {
            this.date = new Date()
            
        } else {
            this.date = new Date(this.date.setDate(this.date.getDate() - 1));
        }
       
    fetch('https://api.nasa.gov/planetary/apod?api_key=8nKfq0oD4AkMGecYwH6MVUB1B5Ua1MnC5fKiWczl?date=' +this.date)
    .then(response => response.json())
    .then(data => renderApp(data))
    function renderApp(data) {
     let body = document.body;
     let imageDiv = document.createElement('div');
    imageDiv.classList.add('image');
    
  
        let image = document.createElement('img');
        image.setAttribute('src', data.url);
        imageDiv.append(image);
        body.append(imageDiv);
       
    }


       
        this.container.append(element);
    }
    this.addPic();
   
}

const apod = new Apod('apod');