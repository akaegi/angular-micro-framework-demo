import {Component, OnInit, ViewChild, ViewContainerRef} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'micro-host';

  @ViewChild('dummyContainer', {read: ViewContainerRef})
  dummyContainer: ViewContainerRef | undefined;

  async ngOnInit() {
    // @ts-ignore
    const plugin2 = await import(/* webpackIgnore: true */ 'plugins/microplugin2');
    this.dummyContainer?.createComponent(plugin2.Microplugin2Component);
  }

}
