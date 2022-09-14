import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-components-info',
  templateUrl: './components-info.component.html',
  styleUrls: ['./components-info.component.scss']
})
export class ComponentsInfoComponent implements OnInit {
  componentInfo = `
  /* To define the Component class, we need to use the @Component decorator. This function is part of the Angular Core library. */
  import { Component } from '@angular/core';
  
  
  
  /* External Declaration (meta data)
      -> Selector - name of this component: used in other .html files
      -> templateUrl - refers to the html template file (.html) of this component where html data is defined
      -> styleUrls - refers to the style template file (.scss/.css) of this component where styles can be declared
  */
  @Component({
    selector: 'app-components-info',
    templateUrl: './components-info.component.html',
    styleUrls: ['./components-info.component.scss']
  })
  
  // or
  
  
  /* Inline Declaration
      -> templateUrl - directly html data is defined (single line and multi-line)
      -> styleUrls - directly styles can be declared
  */
  @Component({
    selector: 'app-components-info',
    template: '<h1> components-info works </h1>' ||
                \`
                <h1> components-info works </h1>
                <p> a long inline template </p>
               \`,
    styles: ['h1 { font-weight: bold; }']
  })
  
  
  
  /* Export the component - to be accessible for other components */
  export class ComponentsInfoComponent {
  }
  
  
  /* Extras */
  Different ways of declaring selectors
  
  Using the CSS class name
  @Component({     
    selector: '.app-root' 
  })
  <div class="app-root"></div>
  
  
  Using attribute name
   @Component({ selector: '[app-root]' })
  <div app-root></div>
  
  
  Using attribute name and value
   @Component({     
     selector: 'div[app=components]' 
  }) 
  <div app="components"></div>
  `;
  
  dataBinding = [
    "<div [className]='red size20'>Test</div>",
    "class='red size20'",
    `<div [className]='cssStringVar'>Test</div>
    <div [className]='getClass()'>getClass</div>
    <div [className]='hasError() ? 'red' : 'size20''> conditonal operator </div>`,
    "<div [class.className]='condition'></div>",
    "<div [class.red]='hasError()' [class.size20]='hasError()'>Test</div>",
    "<element [ngClass]='expression'>...</element>",
    "<element [ngClass]='cssClass1 cssClass2'>...</element> // String Format",
    "<element [ngClass]=['cssClass1', 'cssClass2']>...</element> // Array Format",
    "<element [ngClass]={'cssClass1': true, 'cssClass2': true}>...</element> // Object Format",
    "[style.style-property] = 'style-value'",
    "<button [style.font-size||fontSize.px]='20' >Big Button</button>",
    "<element [ngStyle]={'styleNames': styleExp}>...</element>",
    "<div [ngStyle]={'font-size.px': size}>Change my size</div>",
    "<button [attr.aria-label]='closeLabel' (onclick)='closeMe()'>X</button>",
    "(target-event)='TemplateStatement'",
    "<someElement [(someProperty)]='value'></someElement>"
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
