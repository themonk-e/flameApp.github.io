import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlamePageComponent } from './flame-page.component';

describe('FlamePageComponent', () => {
  let component: FlamePageComponent;
  let fixture: ComponentFixture<FlamePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlamePageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FlamePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
