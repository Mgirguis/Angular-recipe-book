import { Component } from '@angular/core';
import { Response } from '@angular/http';

import {DataStorageService} from '../shared/data-storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {
  constructor(private dataStorageServices: DataStorageService) {}

  onSaveData() {
    this.dataStorageServices.storeRecipes()
      .subscribe(
        (response: Response) => {
          console.log(response);
        }
      );
  }

  onFetchRecipe() {
    this.dataStorageServices.getRecipes();
  }
}
