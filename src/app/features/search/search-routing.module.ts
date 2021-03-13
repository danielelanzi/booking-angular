import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NoResultsComponent } from './no-results.component';
import { SearchComponent } from './search.component';


@NgModule({
  imports: [
    RouterModule.forChild([
      {path: '', component: SearchComponent},
      {path: 'no-results', component: NoResultsComponent}
    ])],
  exports: [RouterModule]
})
export class SearchRoutingModule { }
