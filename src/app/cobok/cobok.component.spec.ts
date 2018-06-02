import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { CobokComponent } from './cobok.component'

describe('CobokComponent', () => {
  let component: CobokComponent
  let fixture: ComponentFixture<CobokComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CobokComponent],
    }).compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(CobokComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
