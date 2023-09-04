import '@angular/compiler'; // <-- without compiler import 'ng serve' doesn't work (because of JIT mode...)
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
