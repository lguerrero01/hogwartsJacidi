////////////
//Modules
////////////
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharactersRoutingModule } from './characters-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
////////////
//Components
////////////
import { CharactersComponent } from './characters.component';

@NgModule({
  declarations: [CharactersComponent],
  imports: [CommonModule, CharactersRoutingModule, SharedModule],
})
export class CharactersModule {}
