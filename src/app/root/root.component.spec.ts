import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { RootComponent } from './root.component'

describe('RootComponent', () => {
  let component: RootComponent
  let fixture: ComponentFixture<RootComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [RootComponent],
    }).compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(RootComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
  it(`should have as title 'Kich's space'`, async(() => {
    const fixture = TestBed.createComponent(RootComponent)
    const app = fixture.debugElement.componentInstance
    expect(app.title).toEqual("Kich's space")
  }))
  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(RootComponent)
    fixture.detectChanges()
    const compiled = fixture.debugElement.nativeElement
    expect(compiled.querySelector('h1').textContent.trim()).toEqual("Welcome to Kich's space!")
  }))
})
