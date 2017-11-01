import { Post } from './posts.component';
import { TestBed, async } from '@angular/core/testing';
import { FacebookService,FacebookModule  } from 'ngx-facebook';
import {NgbModule } from '@ng-bootstrap/ng-bootstrap';


describe('Post', () => {
    beforeEach(async(() => {
      TestBed.configureTestingModule({
        providers:[ NgbModule,FacebookService ],
        imports: [ NgbModule.forRoot (),FacebookModule.forRoot()],
        declarations: [  Post ]
      }).compileComponents();
    }));

    /**
     * Handles send a notification with facebook url video
     */
    it('Send video Post',  () => {
      const fixture = TestBed.createComponent(Post);
      const app = fixture.componentInstance;
      expect(app.sendPublicate('1234567890','Jonathan Ramirez',"https://graph.facebook.com/1945778402415038/picture?type=normal",'https://www.facebook.com/memexicanitos/photos/a.10151603513494027.611812.93040704026/10156717475669027/?type=3&theater','likes')).toBeDefined();
    });

    /**
     * Handles send a notification with facebook url photo
     */
    it('Send photo Post',   () => {
      const fixture = TestBed.createComponent(Post);
      const app = fixture.componentInstance;
      expect(app.sendPublicate('1234567890', 'Jonathan Ramirez', "https://graph.facebook.com/1945778402415038/picture?type=normal", 'https://www.facebook.com/MiCiudadTolucaMetepec/photos/a.590564837701056.1073741913.127791343978410/1760237237400471/?type=3&theater', 'likes')).toBeDefined( );
    });

    /**
     * Handles send a notification with facebook url Group Video
     */
    it('Send video Post',  () => {
      const fixture = TestBed.createComponent(Post);
      const app = fixture.componentInstance;
      expect(app.sendPublicate('1234567890', 'Jonathan Ramirez', "https://graph.facebook.com/1945778402415038/picture?type=normal", 'https://www.facebook.com/ivan.moreflores/videos/1634722739872081/', 'likes')).toBeDefined();
    });

    /**
     * Handles send a notification with facebook url Group Photo
     */
    it('Send photo Post',  () => {
      const fixture = TestBed.createComponent(Post);
      const app = fixture.componentInstance;
      expect(app.sendPublicate('1234567890', 'Jonathan Ramirez',  "https://graph.facebook.com/1945778402415038/picture?type=normal", 'https://www.facebook.com/photo.php?fbid=1709177425759945&set=gm.1966444950280985&type=3&theater&ifg=1', 'likes')).toBeDefined( );
    });

     
});
