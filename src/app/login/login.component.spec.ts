import { TestBed, async } from '@angular/core/testing';
import { LoginComponent } from './login.component';
describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        LoginComponent
      ],
    }).compileComponents();
  }));



  it(`should have as title 'apdp'`, async(() => {
    const fixture = TestBed.createComponent(LoginComponent);

    const app = fixture.debugElement.componentInstance;
    expect(app.signInWithGoogle()  ).toBeDefined( );
  }));
});
