import {Component, Input, Output, EventEmitter} from "@angular/core";
import {Todo} from "../shared/todo";
@Component({
    moduleId: module.id,
    selector: 'todo-item',
    templateUrl: 'todo-item.component.html',
    styleUrls: ['todo-item.component.css']
})

export class TodoItemComponent {
    // todo - это свойство !
    @Input() todo: Todo;
    @Output() delete = new EventEmitter();
    @Output() toggle = new EventEmitter();

    OnToggle(){
        this.toggle.emit(this.todo);
    }

    onDelete(){
        this.delete.emit(this.todo)
    }
}