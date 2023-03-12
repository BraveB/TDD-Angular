import { ComponentFixture, TestBed } from '@angular/core/testing';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';

import { BookComponent } from './book.component';
import data from '../../../../assets/homes.json';
describe('BookComponent', () => {
  let component: BookComponent;
  let fixture: ComponentFixture<BookComponent>;
  let dialogData;
  const [home] = data;
  const element = (selector:string) =>
    fixture.nativeElement.querySelector(selector);

  beforeEach(async () => {
    await TestBed.configureTestingModule({
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
    expect(element('[data-test="title"]').textContent).toContain(home.title);
  });

  it('should show price', () => {
    expect(element('[data-test="price"]').textContent).toContain(home.price);
  });

  it('should show check in date field', () => {
    expect(element('[data-test="check-in"]')).toBeTruthy();
  });
  it('should show check in date field', () => {
    expect(element('[data-test="check-out"]')).toBeTruthy();
  });
  // should show check in date field
  // should show total
  // should book home after clicking the book button

});
