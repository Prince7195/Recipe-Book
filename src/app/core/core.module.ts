import { NgModule } from "@angular/core";

import { SharedModule } from "app/shared/shared.module";
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from "../app-routing.module";
import { ShoppingListService } from "app/shopping-list/shopping-list.service";
import { RecipeService } from "app/recipes/recipe.service";
import { DataStorageService } from "app/shared/data-storage.service";
import { AuthService } from "app/auth/auth.service";

@NgModule({
  declarations: [
      HomeComponent,
      HeaderComponent
    ],
  imports: [
      SharedModule,
      AppRoutingModule
    ],
    exports: [
        AppRoutingModule,
        HeaderComponent
    ],
    providers: [ShoppingListService, RecipeService, DataStorageService, AuthService],
})
export class CoreModule {}