import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountStatusComponent } from './count-status.component';

describe('CountStatusComponent', () => {
  let component: CountStatusComponent;
  let fixture: ComponentFixture<CountStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CountStatusComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CountStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
