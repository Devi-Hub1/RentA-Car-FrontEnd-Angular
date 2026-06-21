import { TestBed } from '@angular/core/testing';
import { HelloWorldComponent } from './hello-world.component';

describe('HelloWorldComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HelloWorldComponent]
    });
  });

  it('should create the component', () => {
    const fixture = TestBed.createComponent(HelloWorldComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });

  it('should display "Hello World"', () => {
    const fixture = TestBed.createComponent(HelloWorldComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Hello World');
  });
});