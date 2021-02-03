import { Component, OnInit } from '@angular/core';
import { Cliente } from './cliente';
import { ClienteService } from './cliente.service';
import { Router, ActivatedRoute} from '@angular/router';
import swal from 'sweetalert2';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html'
})
export class FormComponent implements OnInit {

   titulo:string='Crear Cliente';
   cliente:Cliente = new Cliente();

  constructor(private clienteService:ClienteService, 
              private router:Router, 
              private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.cargarCliente();
  }

  public cargarCliente():void{
    this.activatedRoute.params.subscribe(params=>{
      let id=params['id']
      
      if(id){
        this.clienteService.getCliente(id).subscribe(cliente=>{
          this.cliente=cliente;
        })
      }
    });
  }

  public create():void{
    this.clienteService.create(this.cliente).subscribe(
       cliente=> {
        swal.fire(
          'Nuevo Cliente',
          `Cliente ${cliente.nombre} creado con éxito`,
          'success'
        )
        return this.router.navigate(['/clientes'])
      
      }
    )
  }

  public update():void{
    this.clienteService.update(this.cliente).subscribe(
      cliente=>{
      swal.fire(
        'Cliente actualizado',
        `Cliente ${cliente.nombre} actualizado con éxito`,
        'success'
        )
        return this.router.navigate(['/clientes']);
      }
    )
  }


}
