export default class ShowAndHide {
    constructor(){
      this.navlist = document.querySelectorAll('.navlink');
      this.section = document.querySelectorAll('.section');
    }
  
    showAndHide(){
      for (let i=0; i<this.section.length; i++){
        this.section[i].style.display = 'none';
        this.section[0].style.display = 'block';
        this.navlist[i].addEventListener('click', ()=>{
          for (let j=0; j<this.section.length; j++){
            if (i === j) continue;
            this.section[j].style.display = 'none';
          }
          this.section[i].style.display = 'block';
        })
      }
    }
  }