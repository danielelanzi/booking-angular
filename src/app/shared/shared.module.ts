import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './components/card/card.component';
import { IntToArrayPipe } from './pipes/int-to-array.pipe';
import { SeparatorComponent } from './components/separator/separator.component';

const components =[
  CardComponent,
  SeparatorComponent
];
const pipe =[
  IntToArrayPipe
];

@NgModule({
  declarations: [
    ...components,
    ...pipe
  ],
  exports: [
    ...components,
    ...pipe
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
