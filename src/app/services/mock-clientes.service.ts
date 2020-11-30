import { Injectable } from '@angular/core';
import { of } from "rxjs";
import { Cliente, Clientes } from "../models/cliente";

@Injectable({
  providedIn: "root"
})
export class MockClientesService {
  constructor() {}
  get(Nombre: string, Activo: boolean, pagina: number): any {
    var Lista = Clientes.filter(
     item =>
        // Nombre == null  chequea por null y undefined
        // Nombre === null  chequea solo por null
        (Nombre == null ||
          Nombre == "" ||
          item.Nombre.toUpperCase().includes(Nombre.toUpperCase())) &&
        (Activo == null || item.Activo == Activo)
    );
    //ordenar
    Lista = Lista.sort( (a,b) => a.Nombre.toUpperCase() > b.Nombre.toUpperCase() ? 1 : -1 );
    // paginar con slice
    var RegistrosTotal = Lista.length;
    var RegistroDesde = (pagina - 1) * 10;
    Lista = Lista.slice(RegistroDesde, RegistroDesde + 10);
    return of({ Lista: Lista, RegistrosTotal: RegistrosTotal });
  }
  // no usamos get con parametros porque javascript no soporta sobrecarga de metodos!
  getById(Id: number) {
    var items: Cliente = Clientes.filter(x => x.IdCliente === Id)[0];
    return of(items);
  }

  post(obj: Cliente) {
    obj.IdCliente = new Date().getTime();
    Clientes.push(obj);
    return of(obj);
  }

  put(Id: number, obj: Cliente) {
    var indice;
    var items = Clientes.filter(function(item, index) {
      if (item.IdCliente === Id) {
        indice = index;
      }
    });
    Clientes[indice] = obj;
    return of(obj);
  }

  delete(Id: number) {
    var items = Clientes.filter(x => x.IdCliente === Id);
    items[0].Activo = !items[0].Activo;
    return of(items[0]);
  }

}