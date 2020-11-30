import { Injectable } from "@angular/core";
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse,
  HttpParams
} from "@angular/common/http";
import { of } from "rxjs";
import { Cliente } from "../models/cliente";

@Injectable({
  providedIn: "root"
})
export class ClientesFamiliasService {
  resourceUrl: string;
  constructor(private httpClient: HttpClient) {
    
    //this.resourceUrl = "https://pav2.azurewebsites.net/api/articulosfamilias";

    this.resourceUrl = "https://pav2.azurewebsites.net/api/articulos";

  }

  get() {
    return this.httpClient.get(this.resourceUrl);
  }
}
