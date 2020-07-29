import {async, ComponentFixture, fakeAsync, TestBed, tick} from '@angular/core/testing';

import { CarouselComponent } from './carousel.component';
import {HttpClientTestingModule} from '@angular/common/http/testing';

describe('CarouselComponent', () => {
  let component: CarouselComponent;
  let fixture: ComponentFixture<CarouselComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarouselComponent ],
      imports: [ HttpClientTestingModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should invoke setItem method when button clicked', fakeAsync(() => {
    spyOn(component, 'setItem');

    const button = fixture.debugElement.nativeElement.querySelector('button');
    button.click();
    tick();
    expect(component.setItem).toHaveBeenCalled();
  }));

  it('should invoke setItem method with "previous" argument when first button clicked', fakeAsync(() => {
    spyOn(component, 'setItem');

    const button = fixture.debugElement.nativeElement.querySelector('button');
    button.click();
    tick();
    expect(component.setItem).toHaveBeenCalledWith('previous');
  }));

  it('should invoke setItem method with "next" argument when last button clicked', fakeAsync(() => {
    spyOn(component, 'setItem');

    const buttons = fixture.debugElement.nativeElement.querySelectorAll('button');
    const button = buttons[buttons.length - 1];
    button.click();
    tick();
    expect(component.setItem).toHaveBeenCalledWith('next');
  }));
});
