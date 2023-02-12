class cardNews extends HTMLElement {
    constructor(){
      super();
  
      const shadow = this.attachShadow({ mode: "open"});
      shadow.appendChild(this.build());
      shadow.appendChild(this.styles());
    }
  
    build() {
      const componetRoot = document.createElement("div");
      componetRoot.setAttribute("class", "card");
  
      const cardLeft = document.createElement("div");
      cardLeft.setAttribute("class", "card__Left");
  
      const autor = document.createElement("span");
      const linktitle = document.createElement("a");
      const newscontent = document.createElement("p");
  
      cardLeft.appendChild(autor);
      autor.textContent = "by " + (this.getAttribute("autor") || "anonymous");
  
      cardLeft.appendChild(linktitle);
      linktitle.textContent = this.getAttribute("title") || "Estamos procurando a notícia no momento."
      linktitle.href =this.getAttribute("link-url");
  
      cardLeft.appendChild(newscontent);
      newscontent.textContent = this.getAttribute("contet") || "Estamos procurando a notícia no momento."
  
  
      const cardRight = document.createElement("div");
      cardRight.setAttribute("class", "card__Right");
      const newsimage = document.createElement("img")
      newsimage.src = this.getAttribute("photo") || "./assets/img/default.png"
      newsimage.alt = this.getAttribute("alt") || "sem imagem no momento"
      cardRight.appendChild(newsimage);
  
  
      componetRoot.appendChild(cardLeft);
      componetRoot.appendChild(cardRight);
  
      return componetRoot
    }
  
    styles() {
      const style = document.createElement("style");
      style.textContent = `
    
    .card{
        width: 100%;
        display: flex;
        flex-direction: row;
        margin-top: 15px;
        margin-bottom: 15px;
        box-shadow: 9px 9px 27px 0px rgba(0,0,0,0.75);
    -webkit-box-shadow: 9px 9px 27px 0px rgba(0,0,0,0.75);
    -moz-box-shadow: 9px 9px 27px 0px rgba(0,0,0,0.75);
    justify-content: space-between;
    }
    
    .card__left > span{
        font-weight: 400;
    }
    
    .card__left{
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding-left: 10px;
    }
    
    .card__left > a{
        margin-top: 15px;
        font-size: 25px;
        color: black;
        text-decoration: none;
        font-weight: bold;
    }
    
    .card__left > p{
        color: rgb(70, 70, 70);
    }
      `;
  
      return style;
    }
  }
  
  customElements.define('card-news',cardNews);