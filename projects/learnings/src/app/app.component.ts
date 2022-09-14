import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'learnings';
  closeMenu = true;
  toggleMenu() {
    this.closeMenu = !this.closeMenu;
    const sideMenu = document.querySelector('.side-menu');
    const mainContent = document.querySelector('.main');
    if (!sideMenu || !mainContent) return;
    if (!this.closeMenu) {
      sideMenu['style'].float = 'left';
      sideMenu['style'].width = '45px';
      mainContent['style'].marginLeft = '30px';
    } else {
      sideMenu['style'].float = 'right';
      sideMenu['style'].width = '';
      mainContent['style'].marginLeft = '';
    }
  }
}
