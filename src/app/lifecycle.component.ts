import {
  Component, OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked,
  AfterViewInit, AfterViewChecked, OnDestroy, SimpleChanges, Input, ViewChild, ContentChild
} from '@angular/core';

@Component({
  selector: 'app-lifecycle',
  template: `
    <p>lifecycle Works!</p>
    <ng-content></ng-content>
    <hr>
    <p #boundParagraph>{{ bindable }}</p>
    <p>{{ boundParagraph.textContent }}</p>
  `,
  styles: []
})
export class LifecycleComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {
  @ContentChild('boundContent')
  boundContent;

  @ViewChild('boundParagraph')
  boundParagraph;

  @Input()
  bindable = 1000;

  constructor() {
  }

  ngOnInit() {
    this.log('ngOnInit');
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.log('ngOnChanges');
    this.log(JSON.stringify(changes));
  }

  ngDoCheck(): void {
    this.log('ngDoCheck');
  }

  ngAfterContentInit(): void {
    this.log('ngAfterContentInit');
    this.log(this.boundContent);
  }

  ngAfterContentChecked(): void {
    this.log('ngAfterContentChecked');
  }

  ngAfterViewInit(): void {
    this.log('ngAfterViewInit');
    this.log(this.boundParagraph);
  }

  ngAfterViewChecked(): void {
    this.log('ngAfterViewChecked');
  }

  ngOnDestroy(): void {
    this.log('ngOnDestroy');
  }

  private log(hook: string) {
    console.log(hook);
  }
}
