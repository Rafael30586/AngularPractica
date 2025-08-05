import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TareasService } from './services/tareas.service';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-root',
  standalone: true, // Esto quiere decir que el componente se comporta como un micro módulo
  imports: [FormsModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{

  listaTareas: string[] = []
  nuevaTarea: string = ''

  private _tareasService = inject(TareasService) // Esta es la forma de inyectar dependencias desde Angular 16 en lugar de hacerlo por constructor

  ngOnInit(): void {
    this.listaTareas = this._tareasService.getTareas()
  }

  agregarTarea(){
    this._tareasService.agregarTarea(this.nuevaTarea)
    this.nuevaTarea = ''
    this.listaTareas = this._tareasService.getTareas()
  }

  eliminarTarea(index: number){
    this._tareasService.eliminarTarea(index)
    this.listaTareas = this._tareasService.getTareas()
  }
}
