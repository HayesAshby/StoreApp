import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductManagerItemComponent } from './product-manager-item.component';

describe('ProductManagerItemComponent', () => {
  let component: ProductManagerItemComponent;
  let fixture: ComponentFixture<ProductManagerItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductManagerItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductManagerItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
