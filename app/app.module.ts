import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {AppComponent} from "./app.component";
import {FormsModule} from "@angular/forms";
import {TodoFormComponent} from "./todo-form/todo-form.component";
import {TodoListCOmponent} from "./todo-list/todo-list.component";
import {TodoItemComponent} from "./todo-item/todo-item.component";
@NgModule({
    imports: [
        BrowserModule,
        FormsModule
    ],
    declarations: [
        AppComponent,
        TodoFormComponent,
        TodoListCOmponent,
        TodoItemComponent

    ],
    bootstrap: [AppComponent]
})
export class AppModule{

}