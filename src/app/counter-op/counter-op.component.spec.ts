import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterOpComponent } from './counter-op.component';

describe('CounterOpComponent', () => {
  let component: CounterOpComponent;
  let fixture: ComponentFixture<CounterOpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CounterOpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CounterOpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
