import { ComponentFixture, TestBed } from '@angular/core/testing';
import { spyOnClass } from 'jasmine-es6-spies';
import { of } from 'rxjs';
import { DataService } from '../../services/data.service';
import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let dataService: jasmine.SpyObj<DataService>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeComponent ],
      providers:[{provide:DataService, useFactory:()=>spyOnClass(DataService)}]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    dataService = TestBed.get(DataService);
    dataService.getHomes$.and.returnValue(of([
      {
        title:"Home 1",
        image:"assets/listing.jpg",
        location:"new york"
      },
      {
        title:"Home 2",
        image:"assets/listing.jpg",
        location:"boston"
      },
      {
        title:"Home 3",
        image:"assets/listing.jpg",
        location:"chicago"
      }
    ]));
    fixture.detectChanges();
  });

  it('should show homes', () => {

    expect(fixture.nativeElement.querySelectorAll('[data-test="home"]').length).toBe(3);
  });
  it('should show home info', () => {
    const home = fixture.nativeElement.querySelector('[data-test="home"]');
    expect(home.querySelector('[data-test="title"]').innerText).toEqual("Home 1");
    expect(home.querySelector('[data-test="location"]').innerText).toEqual("new york");
    expect(home.querySelector('[data-test="image"]')).toBeTruthy();
  });
});
