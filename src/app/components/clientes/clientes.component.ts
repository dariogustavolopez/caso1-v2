import { Component, OnInit } from '@angular/core';
import { Cliente } from "../../models/cliente";
import { ClienteFamilia } from "../../models/cliente-familia";
import { MockClientesService } from "../../services/mock-clientes.service";
import { MockClientesFamiliasService } from "../../services/mock-clientes-familias.service";
import { ClientesService } from "../../services/clientes.service";
import { ClientesFamiliasService } from "../../services/clientes-familias.service";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ModalDialogService } from "../../services/modal-dialog.service";

@Component({
  selector: "app-clientes",
  templateUrl: "./clientes.component.html",
  styleUrls: ["./clientes.component.css"]
})
export class ClientesComponent implements OnInit {
  Titulo = "Clientes"; 
  TituloAccionABMC = {
    A: "(Agregar)",
    B: "(Eliminar)",
    M: "(Modificar)",
    C: "(Consultar)",
    L: "(Listado)"
  };
  AccionABMC = "L"; // inicialmente inicia en el listado de articulos (buscar con parametros)
  Mensajes = {
    SD: " No se encontraron registros...",
    RD: " Revisar los datos ingresados..."
  };

  Lista: Cliente[] = [];
  Familias: ClienteFamilia[] = [];
  RegistrosTotal: number;

  SinBusquedasRealizadas = true;

  Pagina = 1; // inicia pagina 1

  // opciones del combo activo
  OpcionesActivo = [
    { Id: null, Nombre: "" },
    { Id: true, Nombre: "SI" },
    { Id: false, Nombre: "NO" }
  ];

  FormFiltro: FormGroup;
  FormReg: FormGroup;
  submitted = false;

  constructor(
    public formBuilder: FormBuilder,
    private clientesService:ClientesService,
    private clientesFamiliasService: ClientesFamiliasService,
    private modalDialogService: ModalDialogService
  ) {}

  ngOnInit() {
    this.FormFiltro = this.formBuilder.group({
      Nombre: [""],
      Activo: [null]
    });
    this.FormReg = this.formBuilder.group({
      IdCliente: [0],
      Nombre: [
        "",
        [Validators.required, Validators.minLength(4), Validators.maxLength(55)]
      ],
      Cuit: [null, [Validators.required, Validators.pattern("[0-9]{11}")]],
      IdTipoDocumento: [Validators.required,Validators.maxLength(10)],

      NumeroDocumento: [null, [Validators.required, Validators.pattern("[0-9]{8}")]],
      FechaNacimiento: [
        "",
        [
          Validators.required,
          Validators.pattern(
            "(0[1-9]|[12][0-9]|3[01])[-/](0[1-9]|1[012])[-/](19|20)[0-9]{2}"
          )
        ]
      ],
      IdSexo: ["", [Validators.required]],
      IdEstadoCivil: ["", [Validators.required]],
      IdLocalidad: [Validators.required,Validators.maxLength(15)],
     
      IdProvincia: ["", [Validators.required]],
      
      
      Activo: [true]
    });

    this.GetFamiliasClientes();
  }

  GetFamiliasClientes() {
    this.clientesFamiliasService.get().subscribe((res: ClienteFamilia[]) => {
      this.Familias = res;
    });
  }

  Agregar() {
    this.AccionABMC = "A";
    this.FormReg.reset();
    this.submitted = false;
    //this.FormReg.markAsPristine();
    this.FormReg.markAsUntouched();
  }

  // Buscar segun los filtros, establecidos en FormReg
  Buscar() {
    this.SinBusquedasRealizadas = false;
    this.clientesService
      .get(this.FormFiltro.value.Nombre, this.FormFiltro.value.Activo, this.Pagina)
      .subscribe((res: any) => {
        this.Lista = res.Lista;
        this.RegistrosTotal = res.RegistrosTotal;
      });
  }

  // Obtengo un registro especifico según el Id
  BuscarPorId(Dto, AccionABMC) {
    window.scroll(0, 0); // ir al incio del scroll

    this.clientesService.getById(Dto.IdCliente).subscribe((res: any) => {
      this.FormReg.patchValue(res);

      //formatear fecha de  ISO 8061 a string dd/MM/yyyy
      var arrFecha = res.FechaNacimiento.substr(0, 10).split("-");
      this.FormReg.controls.FechaNacimiento.patchValue(
        arrFecha[2] + "/" + arrFecha[1] + "/" + arrFecha[0]
      );

      this.AccionABMC = AccionABMC;
    });
  }

  Consultar(Dto) {
    this.BuscarPorId(Dto, "C");
  }

  // comienza la modificacion, luego la confirma con el metodo Grabar
  Modificar(Dto) {
    if (!Dto.Activo) {
      this.modalDialogService.Alert('No puede modificarse un registro Inactivo.');
      return;
    }
    this.submitted = false;
    this.FormReg.markAsPristine();
    this.FormReg.markAsUntouched();
    this.BuscarPorId(Dto, "M");
  }

  // grabar tanto altas como modificaciones
  Grabar() {
    this.submitted = true;
    // verificar que los validadores esten OK
     if (this.FormReg.invalid) {
      return;
    }

    //hacemos una copia de los datos del formulario, para modificar la fecha y luego enviarlo al servidor
    const itemCopy = { ...this.FormReg.value };

    //convertir fecha de string dd/MM/yyyy a ISO para que la entienda webapi
    var arrFecha = itemCopy.FechaNacimiento.substr(0, 10).split("/");
    if (arrFecha.length == 3)
      itemCopy.FechaNacimiento = 
          new Date(
            arrFecha[2],
            arrFecha[1] - 1,
            arrFecha[0]
          ).toISOString();

    // agregar post
    if (itemCopy.IdCliente == 0 || itemCopy.IdCliente == null) {
      itemCopy.IdCliente = 0;
      this.clientesService.post(itemCopy).subscribe((res: any) => {
        this.Volver();
        this.modalDialogService.Alert('Registro agregado correctamente.');
        this.Buscar();
      });
    } else {
      // modificar put
      this.clientesService
        .put(itemCopy.IdCliente, itemCopy)
        .subscribe((res: any) => {
          this.Volver();
          this.modalDialogService.Alert('Registro modificado correctamente.');
          this.Buscar();
        });
    }
  }

// representa la baja logica 
  ActivarDesactivar(Dto) {
    this.modalDialogService.Confirm(
      "Esta seguro de " +
        (Dto.Activo ? "desactivar" : "activar") +
        " este registro?",
      undefined,
      undefined,
      undefined,
      () =>
        this.clientesService  
          .delete(Dto.IdCliente)
          .subscribe((res: any) => 
            this.Buscar()
          ),
      null
    );
  }

  // Volver desde Agregar/Modificar
  Volver() {
    this.AccionABMC = "L";
  }

  ImprimirListado() {
    this.modalDialogService.Alert('Sin desarrollar...');
  }

  GetClientesNombre(Id){
    var Clientes = this.Familias.filter(x => x.IdClientesFamilia === Id)[0];
    if (ClientesFamilia)
        return ClientesFamilia.Nombre;
    else
      return "";
  }


}