import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExampleRoutingComponent } from './example-routing.component';

describe('ExampleRoutingComponent', () => {
  let component: ExampleRoutingComponent;
  let fixture: ComponentFixture<ExampleRoutingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExampleRoutingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExampleRoutingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
