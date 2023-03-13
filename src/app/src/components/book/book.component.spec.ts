import { ComponentFixture, TestBed } from '@angular/core/testing';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';

import { BookComponent } from './book.component';
import data from '../../../../assets/homes.json';
import { DataService } from '../../services/data.service';
import { spyOnClass } from 'jasmine-es6-spies';
import { of } from 'rxjs';

describe('BookComponent', () => {
  let component: BookComponent;
  let fixture: ComponentFixture<BookComponent>;
  let dataService: jasmine.SpyObj<DataService>;
  let dialogData;
  const [home] = data;
  const element = (selector:string) =>
    fixture.nativeElement.querySelector(selector);

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[FormsModule],
      declarations: [ BookComponent ],
      providers:[
        { provide: MAT_DIALOG_DATA, useValue: home },
        { provide: DataService, useFactory:()=>spyOnClass(DataService) }
    ]
    })
      .compileComponents();
  });
  beforeEach(() => {
    fixture = TestBed.createComponent(BookComponent);
    dialogData = TestBed.get(MAT_DIALOG_DATA);
    dataService = TestBed.get(DataService);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should show title', () => {
    expect(element('[data-test="title"]').textContent).toEqual(`Book ${home.title}`);
  });

  it('should show price', () => {
    expect(element('[data-test="price"]').textContent).toEqual(`$${home.price} per night`);
  });

  it('should show check in date field', () => {
    expect(element('[data-test="check-in"]')).toBeTruthy();
  });
  it('should show check out date field', () => {
    expect(element('[data-test="check-out"]')).toBeTruthy();
  });
  it('should show total', () => {
    // user enters check in date 12/20/19
    const checkIn = element('[data-test="check-in"] input');
    checkIn.value="12/20/19";
    checkIn.dispatchEvent(new Event ('input'));
    // user enters check out date 12/23/19
    const checkOut = element('[data-test="check-out"] input');
    checkOut.value="12/23/19";
    checkOut.dispatchEvent(new Event ('input'));
    // assert that the total shows 3*25=375
    fixture.detectChanges();
    expect(element('[data-test="total"]').textContent).toContain("Total: $375");
  });

  it('should book home after clicking the book button', () => {
    dataService.bookHome$.and.returnValue(of(null));
    // user enters check in date 12/20/19
    const checkIn = element('[data-test="check-in"] input');
    checkIn.value="12/20/19";
    checkIn.dispatchEvent(new Event ('input'));
    const checkOut = element('[data-test="check-out"] input');
    checkOut.value="12/23/19";
    checkOut.dispatchEvent(new Event ('input'));
    fixture.detectChanges();
    element('[data-test="book-btn"] button').click();
    fixture.detectChanges();
    expect(dataService.bookHome$).toHaveBeenCalled();
  });
});
