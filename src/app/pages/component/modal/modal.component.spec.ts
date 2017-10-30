import { NgbdModalBasic } from './modal.component';

import { async,   TestBed } from '@angular/core/testing';


describe('likes', function () {

  var comp: NgbdModalBasic;



  beforeEach(async(() => {
    TestBed.configureTestingModule({

      declarations: [ NgbdModalBasic ]

    })
      .compileComponents() ;
  }));



  ////// for id
//  unit test of I like videos
  it('videoLikes id', () => {
    expect(localStorage.setItem('id', '1234567890')).toBeDefined();

    expect(comp.likes1('1775136616123751')).toBeDefined();
  });

  //  unit test of I like photos
  it('photoLikes id', () => {
    expect(comp.likes1('1775136616123751')).toBeDefined();
  });

  //  unit test of I like  groups
  it('Grup Likes id', () => {
    expect(comp.likes1('1775136616123751')).toBeDefined( );
  });

//////for url

  //  unit test of I like videos
  it('videoLikes url', () => {
    expect(localStorage.setItem('id', '1234567890')).toBeDefined();

    expect(comp.buy('https://www.facebook.com/MundoProgramadores/photos/a.968463743269667.1073741832.347614538687927/1424471807668856/?type=3&theater','10')).toBeDefined();
  });

  //  unit test of I like photos
  it('photoLikes url', () => {
    expect(comp.buy('https://www.facebook.com/MundoProgramadores/photos/a.968463743269667.1073741832.347614538687927/1424471807668856/?type=3&theater','10')).toBeDefined();
  });

  //  unit test of I like  groups
  it('Grup Likes url', () => {
    expect(comp.buy('https://www.facebook.com/MundoProgramadores/photos/a.968463743269667.1073741832.347614538687927/1424471807668856/?type=3&theater','10')).toBeDefined( );
  });
});
