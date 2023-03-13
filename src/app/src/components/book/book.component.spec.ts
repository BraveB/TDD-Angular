import { ComponentFixture, TestBed } from '@angular/core/testing';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';

import { BookComponent } from './book.component';
import data from '../../../../assets/homes.json';
import { FormsModule } from '@angular/forms';
describe('BookComponent', () => {
  let component: BookComponent;
  let fixture: ComponentFixture<BookComponent>;
  let dialogData;
  const [home] = data;
  const element = (selector:string) =>
    fixture.nativeElement.querySelector(selector);

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[FormsModule],
      declarations: [ BookComponent ],
      providers:[{
        provide: MAT_DIALOG_DATA, useValue: home
      }]
    })
      .compileComponents();
  });
  beforeEach(() => {
    fixture = TestBed.createComponent(BookComponent);
    dialogData = TestBed.get(MAT_DIALOG_DATA);
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
    const checkOut = element('[data-test="check-out"] input');
    checkOut.value="12/23/19";
    checkOut.dispatchEvent(new Event ('input'));
    // user enters check out date 12/23/19
    // assert that the total shows 3*25=375

    fixture.detectChanges();
    expect(element('[data-test="total"]').textContent).toContain("Total: $375");
  });

  // should book home after clicking the book button

});
