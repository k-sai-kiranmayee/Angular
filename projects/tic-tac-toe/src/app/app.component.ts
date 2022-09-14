import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'tic-tac-toe';
  currentUser = 'X';
  gridValues = ['-','-','-','-','-','-','-','-','-'];
  winner = '';
  winsForX = 0;
  winsForO = 0;
  // getValue = this.getVal();
  toggleUser(event, gridIndex) {
    console.log(event, gridIndex, this.currentUser);
    // document.querySelector('.grid-container .grid-item');
    // event.target.value = this.currentUser !== 'X' ? 'O' : 'X';
    // event.target.disabled = true;
    // console.log(event, gridIndex, event.target.value);
    this.gridValues[gridIndex] = (this.currentUser !== 'X') ? 'O' : 'X';
    this.checkForWinner();
    if (this.currentUser === 'X') {
      this.currentUser = 'O';
      return;
      // return event.target.value;
    }
    this.currentUser = 'X';
    // return event.target.value;
  }
  resetGame() {
    this.gridValues = ['-','-','-','-','-','-','-','-','-'];
    this.currentUser = 'X';
    this.winner = '';
  }
  resetStats() {
    this.winsForX = 0;
    this.winsForO = 0;
    this.resetGame();
  }
  checkForWinner() {
    /* X as winner */
    if (this.gridValues[0] === 'X') {
      if (this.gridValues[1] === 'X' && this.gridValues[2] === 'X') this.winner = 'X';
      if (this.gridValues[3] === 'X' && this.gridValues[6] === 'X') this.winner = 'X';
      if (this.gridValues[4] === 'X' && this.gridValues[8] === 'X') this.winner = 'X';
    }
    if (this.gridValues[1] === 'X' && this.gridValues[4] === 'X' && this.gridValues[7] === 'X') this.winner = 'X';
    if (this.gridValues[2] === 'X') {
      if (this.gridValues[5] === 'X' && this.gridValues[8] === 'X') this.winner = 'X';
      if (this.gridValues[4] === 'X' && this.gridValues[6] === 'X') this.winner = 'X';
    }
    if (this.gridValues[3] === 'X' && this.gridValues[4] === 'X' && this.gridValues[5] === 'X') this.winner = 'X';
    if (this.gridValues[6] === 'X') {
      if (this.gridValues[7] === 'X' && this.gridValues[8] === 'X') this.winner = 'X';
    }
    /* O as winner */
    if (this.gridValues[0] === 'O') {
      if (this.gridValues[1] === 'O' && this.gridValues[2] === 'O') this.winner = 'O';
      if (this.gridValues[3] === 'O' && this.gridValues[6] === 'O') this.winner = 'O';
      if (this.gridValues[4] === 'O' && this.gridValues[8] === 'O') this.winner = 'O';
    }
    if (this.gridValues[1] === 'O' && this.gridValues[4] === 'O' && this.gridValues[7] === 'O') this.winner = 'O';
    if (this.gridValues[2] === 'O') {
      if (this.gridValues[5] === 'O' && this.gridValues[8] === 'O') this.winner = 'O';
      if (this.gridValues[4] === 'O' && this.gridValues[6] === 'O') this.winner = 'O';
    }
    if (this.gridValues[3] === 'O' && this.gridValues[4] === 'O' && this.gridValues[5] === 'O') this.winner = 'O';
    if (this.gridValues[6] === 'O') {
      if (this.gridValues[7] === 'O' && this.gridValues[8] === 'O') this.winner = 'O';
    }
    /* Draw */
    if (!this.gridValues.includes('-') && !this.winner) {
      this.winner = 'draw';
    }
    if (this.winner === 'X') this.winsForX = this.winsForX + 1;
    if (this.winner === 'O') this.winsForO = this.winsForO + 1;
  }
  // getVal() {
  //   return document.querySelector('.grid-item.1').value;
  // }
}
