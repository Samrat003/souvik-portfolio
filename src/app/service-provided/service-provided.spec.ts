import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceProvided } from './service-provided';

describe('ServiceProvided', () => {
  let component: ServiceProvided;
  let fixture: ComponentFixture<ServiceProvided>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServiceProvided]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServiceProvided);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
