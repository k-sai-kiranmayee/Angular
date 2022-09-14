import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.scss']
})
export class DirectivesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const allHeadings = document.querySelectorAll('.directive-title');
    const allTitles = Array.from(document.querySelectorAll('.directive-notes')); /* Have to see as to why it errors when simply used as document... */
    allTitles.forEach(ele => {
      ele.setAttribute('style', 'display:none');
    })
    for (let i = 0; i < allHeadings.length; i += 1) {
      allHeadings[i].addEventListener('click', function() {
        allTitles.forEach((element, index) => {
          if (i === index) {
            element.setAttribute('style', 'display:block');
            allHeadings[index].classList.add('active');
          } else {
            element.setAttribute('style', 'display:none');
            allHeadings[index].classList.remove('active');
          }
        });
      });
    }
  }

}
