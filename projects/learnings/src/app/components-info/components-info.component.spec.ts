import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentsInfoComponent } from './components-info.component';

describe('ComponentsInfoComponent', () => {
  let component: ComponentsInfoComponent;
  let fixture: ComponentFixture<ComponentsInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponentsInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentsInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
