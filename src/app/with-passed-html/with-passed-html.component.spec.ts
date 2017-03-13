import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WithPassedHtmlComponent } from './with-passed-html.component';

describe('WithPassedHtmlComponent', () => {
  let component: WithPassedHtmlComponent;
  let fixture: ComponentFixture<WithPassedHtmlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WithPassedHtmlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WithPassedHtmlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
