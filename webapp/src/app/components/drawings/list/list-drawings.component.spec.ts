import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListDrawingsComponent } from './list-drawings.component';

describe('ListDrawingsComponent', () => {
  let component: ListDrawingsComponent;
  let fixture: ComponentFixture<ListDrawingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListDrawingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListDrawingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
