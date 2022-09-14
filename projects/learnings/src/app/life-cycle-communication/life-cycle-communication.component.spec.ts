import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LifeCycleCommunicationComponent } from './life-cycle-communication.component';

describe('LifeCycleCommunicationComponent', () => {
  let component: LifeCycleCommunicationComponent;
  let fixture: ComponentFixture<LifeCycleCommunicationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LifeCycleCommunicationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LifeCycleCommunicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
