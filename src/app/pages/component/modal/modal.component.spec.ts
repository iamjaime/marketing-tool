import { NgbdModalBasic } from './modal.component';
import { TestBed, async } from '@angular/core/testing';
import { FacebookService,FacebookModule, UIParams, UIResponse } from 'ngx-facebook';
import {NgbModule,ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

describe('Likes', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({

      providers:[
        NgbModule,FacebookService
      ],
      imports: [ NgbModule.forRoot (),FacebookModule.forRoot()],
      declarations: [
        NgbdModalBasic
      ]
    }).compileComponents();
  }));

  ////// for id
  //  unit test of I like videos
  it('videoLikesUrl',  () => {

    const fixture = TestBed.createComponent(NgbdModalBasic);
    const app = fixture.debugElement.componentInstance;
    expect(app.sendPublicate('1234567890','Jonathan Ramirez',"https://graph.facebook.com/1945778402415038/picture?type=normal",'https://www.facebook.com/memexicanitos/photos/a.10151603513494027.611812.93040704026/10156717475669027/?type=3&theater','likes')).toBeDefined();
  });

  //  unit test of I like photo
  it('photoLikeUrl',  () => {

    const fixture = TestBed.createComponent(NgbdModalBasic);
    const app = fixture.debugElement.componentInstance;
    expect(app.sendPublicate('1234567890',
      'Jonathan Ramirez',
      "https://graph.facebook.com/1945778402415038/picture?type=normal",
      'https://www.facebook.com/MiCiudadTolucaMetepec/photos/a.590564837701056.1073741913.127791343978410/1760237237400471/?type=3&theater',
      'likes')).toBeDefined('1234567890');
  });

  it('grupoVideoLikeURL',  () => {

    const fixture = TestBed.createComponent(NgbdModalBasic);
    const app = fixture.debugElement.componentInstance;
    expect(app.sendPublicate('1234567890',
      'Jonathan Ramirez',
      "https://graph.facebook.com/1945778402415038/picture?type=normal",
      'https://www.facebook.com/ivan.moreflores/videos/1634722739872081/',
      'likes')).toBeDefined();
  });

  it('grupoPhotoLikeURL',  () => {

    const fixture = TestBed.createComponent(NgbdModalBasic);
    const app = fixture.debugElement.componentInstance;
    expect(app.sendPublicate('1234567890',
      'Jonathan Ramirez',
      "https://graph.facebook.com/1945778402415038/picture?type=normal",
      'https://www.facebook.com/photo.php?fbid=1709177425759945&set=gm.1966444950280985&type=3&theater&ifg=1',
      'likes')).toBe('1234567890');
  });
});
