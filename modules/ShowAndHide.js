// section display one at a time
export default class ShowAndHide {
  constructor() {
    this.navlist = document.querySelectorAll('.navlink');
    this.section = document.querySelectorAll('.section');
  }

  showAndHide() {
    for (let i = 0; i < this.section.length; i+=1) {
      this.section[i].style.display = 'none';
      this.section[0].style.display = 'block';
      this.navlist[i].addEventListener('click', () => {
        for (let j = 0; j < this.section.length; j += 1){
          // eslint-disable-next-line no-continue
          if (i === j) continue;
          this.section[j].style.display = 'none';
        }
        this.section[i].style.display = 'block';
      });
    }
  }
}