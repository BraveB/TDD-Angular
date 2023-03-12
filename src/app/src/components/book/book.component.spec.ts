import { ComponentFixture, TestBed } from '@angular/core/testing';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';

import { BookComponent } from './book.component';
import data from '../../../../assets/homes.json';

describe('BookComponent', () => {
  let component: BookComponent;
  let fixture: ComponentFixture<BookComponent>;
  let dialogData;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookComponent ],
      providers:[{
        provide: MAT_DIALOG_DATA, useValue: data[0]
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
    expect(fixture.nativeElement.querySelector('[data-test="title"]').textContent).toContain('Home 1');
  });
  // should show price
  // should show check in date field
  // should show check in date field
  // should show total
  // should book home after clicking the book button

});
