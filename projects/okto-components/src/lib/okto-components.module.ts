import { NgModule } from '@angular/core';
import { OktoComponentsComponent } from './okto-components.component';
import { FooComponent } from './foo/foo.component';

@NgModule({
  imports: [
  ],
  declarations: [OktoComponentsComponent, FooComponent],
  exports: [OktoComponentsComponent, FooComponent]
})
export class OktoComponentsModule { }
