import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RouterInfoComponent } from './router-info.component';

describe('RouterInfoComponent', () => {
  let component: RouterInfoComponent;
  let fixture: ComponentFixture<RouterInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RouterInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RouterInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
