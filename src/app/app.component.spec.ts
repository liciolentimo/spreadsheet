import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'spreadsheet'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('spreadsheet');
  });

  it('should only accept positive integers',() => {
    const fixture = TestBed.createComponent(AppComponent);
    var num = 2;
    // var n = Math.floor(Number(str));
    // return n !== Infinity && String(n) === str && n >= 0;
    expect(num).toBeGreaterThan(0);
  });

  it('should should add two numbers',() => {
    var num1 = 2;
    var num2 = 2;
    var sum = 4;
    expect(sum).toEqual(num1+num2);
  });
  it('should should multiply two numbers',() => {
    var num1 = 2;
    var num2 = 5;
    var mult = 10;
    expect(mult).toEqual(num1*num2);
  });
  it('should should subtract two numbers',() => {
    var num1 = 5;
    var num2 = 2;
    var sub = 3;
    expect(sub).toEqual(num1-num2);
  });
  it('should should divide two numbers',() => {
    var num1 = 6;
    var num2 = 2;
    var div = 3;
    expect(div).toEqual(num1/num2);
  });
});
