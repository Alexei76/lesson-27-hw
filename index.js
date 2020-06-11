function Apod(id){
    this.id = id;
    this.date = undefined;
    
  
    
    let body = document.body;
    this.container = document.createElement('div');
    this.container.setAttribute('id', this.id);
    this.dateFormatter = function(){
        let now = this.date;
        let y = now.getFullYear();
        let m = now.getMonth() + 1;
        let d = now.getDate();
        let mm = m < 10 ? '0' + m : m;
        let dd = d < 10 ? '0' + d : d;
        return '' + y + '-' + mm + '-' + dd;  

    }
    this.renderApp = function(data) {
        let body = document.body;
        let title = document.createElement('h1');
        title.innerText = data.title;
    
        let imageDiv = document.createElement('div');
        imageDiv.classList.add('image');
    
        if(data.media_type === 'video') {
            let iframe = document.createElement('iframe');
            iframe.setAttribute('src', data.url);
            iframe.setAttribute('width', '420');
            iframe.setAttribute('height', '300');
            imageDiv.append(iframe);
    
        } else {
            let image = document.createElement('img');
            image.setAttribute('src', data.url);
            imageDiv.append(image);
        }
        
    
        let paragraph = document.createElement('p');
        paragraph.innerText = data.explanation;
    
        if(data.copyright) {
            let copyrightDiv = document.createElement('div');
            copyrightDiv.classList.add('copyright');
        
            let copyrightSpan = document.createElement('span');
            copyrightSpan.innerHTML = '© ' + data.copyright;
            copyrightDiv.append(copyrightSpan);
            this.container.append(copyrightDiv);
        }
        
        this.container.append(title);
        this.container.append(imageDiv);
        this.container.append(paragraph);
    }
    
    this.addPic = function() {
        let element = document.createElement('div');
        if(this.date === undefined) {
            this.date = new Date()
            
        } else {
            this.date = new Date(this.date.setDate(this.date.getDate() - 1));
        }
       
    fetch('https://api.nasa.gov/planetary/apod?api_key=8nKfq0oD4AkMGecYwH6MVUB1B5Ua1MnC5fKiWczl&date=' + this.dateFormatter())
    .then(response => response.json())
    .then(data => this.renderApp(data))




       element.innertext = this.dateFormatter();
        this.container.append(element);
    }
    this.addPic();
    body.append(this.container);
   
}

const apod = new Apod('apod');