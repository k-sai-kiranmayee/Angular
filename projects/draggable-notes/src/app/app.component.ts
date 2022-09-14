import { Component,
  ElementRef,
  QueryList,
  ViewChildren, } from '@angular/core';
import {/* CdkDragDrop,  */moveItemInArray} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent{
  title = 'draggable-notes';
  notesList = [];
  newNotesList = [];
  optionChoosen = '';
  // @ViewChildren('dap') levels: QueryList<ElementRef>;
  dragEl: any;
  chooseOption(event) {
    if (!event || !event.target || !event.target.value) return;
    this.optionChoosen = event.target.value;
    /* Also can add a check saying that if notesList isn't empty - && !this.notesList.length */
    if (this.optionChoosen === 'Re-arrange') this.notesList = this.newNotesList;
  }
  addNote(event) {
    if (!event || !event.target || !event.target.value) return;
    this.notesList.push(event.target.value);
    event.target.value = '';
  }
  drop(event/* : CdkDragDrop<string[]> */) {
    moveItemInArray(this.notesList, event.previousIndex, event.currentIndex);
  }
  handleDragStart(e) {
    e.srcElement.style.opacity = '0.4';
    this.dragEl = e;
    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('text', e.srcElement.innerHTML);
  }
  handleDragEnd(e) {
    console.log(e.srcElement.innerHTML, this.dragEl.srcElement.innerHTML);
    e.srcElement.style.opacity = '1';
  }
  handleDragEnter(e) {
    e.srcElement.classList.add('over');
  }
  handleDragLeave(e) {
    e.srcElement.classList.remove('over');
  }
  handleDragOver(e) {
    if (e.preventDefault) {
      e.preventDefault();
    }
    e.dataTransfer.dropEffect = 'move';
    return false;
  }
  handleDrop(e) {
    if (e.stopPropagation) {
      e.stopPropagation();
    }
    if (this.dragEl.srcElement.innerHTML !== e.srcElement.innerHTML) {
      this.dragEl.srcElement.innerHTML = e.srcElement.innerHTML;
      e.srcElement.innerHTML = e.dataTransfer.getData('text');
    }
    const allNotes = Array.from(document.querySelectorAll('.note'));
    this.newNotesList = [];
    allNotes.forEach((note) => {
      this.newNotesList.push(note.innerHTML);
      note.classList.remove('over');
    });
    return false;
  }
}
