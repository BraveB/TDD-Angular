import { ComponentFixture, TestBed } from '@angular/core/testing';
import { spyOnClass } from 'jasmine-es6-spies';
import { of } from 'rxjs';
import { DataService } from '../../services/data.service';
import { DialogService } from '../../services/dialog.service';
import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let dataService: jasmine.SpyObj<DataService>;
  let dialogService: jasmine.SpyObj<DialogService>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeComponent ],
      providers:[
        { provide:DataService, useFactory:()=>spyOnClass(DataService) },
        { provide:DialogService, useFactory:()=>spyOnClass(DialogService) }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    dataService = TestBed.get(DataService);
    dialogService = TestBed.get(DialogService);
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
  it('should show Book button', () => {
    const home = fixture.nativeElement.querySelector('[data-test="home"]');
    expect(home.querySelector('[data-test="book-btn"]')).toBeTruthy();
  });
  it('should use dialog service to open a dialog when clicking on Book button', () => {
    // grab the button to click
    const bookBtn = fixture.nativeElement.querySelector('[data-test="home"] button');
    // click the button
    bookBtn.click();
    // assert that the dialog service was used to open a dialog
    expect(dialogService.open).toHaveBeenCalled();
  });
});
