import { ComponentFixture, TestBed} from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { ConversorComponent } from './conversor.component';
import { MoedaService, ConversorService } from '../services';
import { NumeroDirective } from '../directives';
import { ModalCotacaoComponent } from '../utils';
import { DataBrPipe } from '../pipes';

describe('ConversorComponent', () => {
  let component: ConversorComponent;
  let fixture: ComponentFixture<ConversorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ 
        ConversorComponent,
        NumeroDirective,
        ModalCotacaoComponent,
        DataBrPipe
      ],
      imports: [
        FormsModule,
        HttpClientModule
      ],
      providers: [ 
        MoedaService, 
        ConversorService
      ],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConversorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
