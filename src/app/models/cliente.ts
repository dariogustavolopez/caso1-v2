export class Cliente {
  IdCliente: number;
  Nombre: string;
  Cuit: number;
  IdTipoDocumento: string;
  NumeroDocumento: number;
  FechaNacimiento: string;
  IdSexo: string;
  IdEstadoCivil: string;
  Localidad: string;
  IdProvincia: number;
  Activo: boolean;
}
export const Clientes: Cliente[] = [
  {
    IdCliente: 3,
    Nombre: "SOSA, SIMONA",
    Cuit: 2750083085,
    IdTipoDocumento: "DNI",
    NumeroDocumento: 5008308,
    FechaNacimiento: "1945-01-01T00:00:00",
    IdSexo: "F",
    IdEstadoCivil: "S",
    Localidad: "CORDOBA CAPITAL",
    IdProvincia: 2,
    Activo: false
  },
  {
    IdCliente: 4,
    Nombre: "SOSA, SIMONA, MIGUEL F",
    Cuit: 2065152925,
    IdTipoDocumento: "DNI",
    NumeroDocumento: 6515292,
    FechaNacimiento: "1940-09-04T00:00:00",
    IdSexo: "M",
    IdEstadoCivil: "S",
    Localidad: "CORDOBA CAPITAL",
    IdProvincia: 3,
    Activo: false
  },
  {
    IdCliente: 5,
    Nombre: "GONZALEZ, RAMON ELADIO",
    Cuit: 2080096209,
    IdTipoDocumento: "DNI",
    NumeroDocumento: 8009620,
    FechaNacimiento: "1950-06-10T00:00:00",
    IdSexo: "M",
    IdEstadoCivil: "Z",
    Localidad: "CORDOBA CAPITAL",
    IdProvincia: 4,
    Activo: true
  },
  {
    IdCliente: 6,
    Nombre: "ECHENIQUE, EFRAIN",
    Cuit: 2380009119,
    IdTipoDocumento: "DNI",
    NumeroDocumento: 8000911,
    FechaNacimiento: "1948-06-18T00:00:00",
    IdSexo: "M",
    IdEstadoCivil: "C",
    Localidad: "CORDOBA CAPITAL",
    IdProvincia: 5,
    Activo: true
  },
  {
    IdCliente: 7,
    Nombre: "VALDEZ, VICENTA",
    Cuit: 2754786641,
    IdTipoDocumento: "CF",
    NumeroDocumento: 5478664,
    FechaNacimiento: "1946-10-27T00:00:00",
    IdSexo: "F",
    IdEstadoCivil: "Z",
    Localidad: "CORDOBA CAPITAL",
    IdProvincia: 6,
    Activo: true
  },
  {
    IdCliente: 8,
    Nombre: "ALBORNOZ, SILVIA BEATRIZ",
    Cuit: 2454098991,
    IdTipoDocumento: "CF",
    NumeroDocumento: 5409899,
    FechaNacimiento: "1946-08-15T00:00:00",
    IdSexo: "F",
    IdEstadoCivil: "Z",
    Localidad: "CORDOBA CAPITAL",
    IdProvincia: 4,
    Activo: true
  },

  {
    IdCliente: 9,
    Nombre: "SOSA, CLEOFO MERCEDES",
    Cuit: 2063919986,
    IdTipoDocumento: "CF",
    NumeroDocumento: 6391998,
    FechaNacimiento: "1943-09-25T00:00:00",
    IdSexo: "F",
    IdEstadoCivil: "Z",
    Localidad: "CORDOBA CAPITAL",
    IdProvincia:2,
    Activo: true
  } ,
{
IdCliente:	10,
Nombre:	"MARTINEZ, JULIA AZUCENA",
Cuit:	2320349204,
IdTipoDocumento:	"CP",
NumeroDocumento:	2034920,
FechaNacimiento:	"1935-07-21T00:00:00",
IdSexo:	"F",
IdEstadoCivil:	"S",
Localidad:	"CORDOBA CAPITAL",
IdProvincia:1,
Activo: true
} /*,
{
IdCliente	11
Nombre	"FERNANDEZ, ANGELA YOLANDA"
Cuit	2748208288
IdTipoDocumento	"CP"
NumeroDocumento	4820828
FechaNacimiento	"1944-09-12T00:00:00"
IdSexo	"F"
IdEstadoCivil	"Z"
Calle	null
NumeroCalle	null
Localidad	"EL FORTIN"
IdDepartamento	null
IdProvincia	null
IdPais	null
FechaIngreso	null
FechaEgreso	null
TieneTrabajo	null
TieneAuto	null
TieneCasa	null
CreditoMaximo	null
Mail	null
Clave	null
IdUsuario	null
9	
IdCliente	12
Nombre	"ALIENDRO, OLGA"
Cuit	2735849756
IdTipoDocumento	"CP"
NumeroDocumento	3584975
FechaNacimiento	"1938-01-11T00:00:00"
IdSexo	"F"
IdEstadoCivil	"S"
Calle	null
NumeroCalle	null
Localidad	"CRUZ DEL EJE"
IdDepartamento	null
IdProvincia	null
IdPais	null
FechaIngreso	null
FechaEgreso	null
TieneTrabajo	null
TieneAuto	null
TieneCasa	null
CreditoMaximo	null
Mail	null
Clave	null
IdUsuario	null
10	
IdCliente	13
Nombre	"AMERI, OLGA ESTHER"
Cuit	2752601925
IdTipoDocumento	"LE"
NumeroDocumento	5260192
FechaNacimiento	"1971-01-01T00:00:00"
IdSexo	"F"
IdEstadoCivil	"Z"
Calle	null
NumeroCalle	null
Localidad	"LABOULAYE"
IdDepartamento	null
IdProvincia	null
IdPais	null
FechaIngreso	null
FechaEgreso	null
TieneTrabajo	null
TieneAuto	null
TieneCasa	null
CreditoMaximo	null
Mail	null
Clave	null
IdUsuario	null
11	
IdCliente	14
Nombre	"OVIEDO, AIDEE FELIPA"
Cuit	2342945404
IdTipoDocumento	"LE"
NumeroDocumento	4294540
FechaNacimiento	"1944-08-23T00:00:00"
IdSexo	"F"
IdEstadoCivil	"S"
Calle	null
NumeroCalle	null
Localidad	"CAMINIAGA"
},
{	
IdCliente	15
Nombre	"MORENO, ELISA CRISTINA"
Cuit	2757382479
IdTipoDocumento	"PSP"
NumeroDocumento	5738247
FechaNacimiento	"1948-07-06T00:00:00"
IdSexo	"F"
IdEstadoCivil	"C"
Calle	null
NumeroCalle	null
Localidad	"DEAN FUNES"
IdDepartamento	null
IdProvincia	null
IdPais	null
FechaIngreso	null
FechaEgreso	null
TieneTrabajo	null
TieneAuto	null
TieneCasa	null
CreditoMaximo	null
Mail	null
Clave	null
IdUsuario	null
13	
IdCliente	16
Nombre	"GOMEZ, CANDELARIA ALICIA"
Cuit	2741089976
IdTipoDocumento	"DNI"
NumeroDocumento	4108997
FechaNacimiento	"1940-06-11T00:00:00"
IdSexo	"F"
IdEstadoCivil	"Z"
Calle	null
NumeroCalle	null
Localidad	"DEAN FUNES"
IdDepartamento	null
IdProvincia	null
IdPais	null
FechaIngreso	null
FechaEgreso	null
TieneTrabajo	null
TieneAuto	null
TieneCasa	null
CreditoMaximo	null
Mail	null
Clave	null
IdUsuario	null
14	
IdCliente	17
Nombre	"ORTIZ, EMILIA V"
Cuit	2746696404
IdTipoDocumento	"DNI"
NumeroDocumento	4669640
FechaNacimiento	"1946-10-03T00:00:00"
IdSexo	"F"
IdEstadoCivil	"Z"
Calle	null
NumeroCalle	null
Localidad	"BENJAMIN GOULD"
IdDepartamento	null
IdProvincia	null
IdPais	null
FechaIngreso	null
FechaEgreso	null
TieneTrabajo	null
TieneAuto	null
TieneCasa	null
CreditoMaximo	null
Mail	null
Clave	null
IdUsuario	null
15	
IdCliente	18
Nombre	"ROJAS, JORGE CORNELIO"
Cuit	2065500753
IdTipoDocumento	"DNI"
NumeroDocumento	6550075
FechaNacimiento	"1941-09-19T00:00:00"
IdSexo	"M"
IdEstadoCivil	"Z"
Calle	null
NumeroCalle	null
Localidad	"SAN MARCOS SUD"
IdDepartamento	null
IdProvincia	null
IdPais	null
FechaIngreso	null
FechaEgreso	null
TieneTrabajo	null
TieneAuto	null
TieneCasa	null
CreditoMaximo	null
Mail	null
Clave	null
IdUsuario	null
16	
IdCliente	19
Nombre	"BUENO, GERARDO"
Cuit	2065441633
IdTipoDocumento	"DNI"
NumeroDocumento	6544163
FechaNacimiento	"1937-02-21T00:00:00"
IdSexo	"M"
IdEstadoCivil	"Z"
Calle	null
NumeroCalle	null
Localidad	"SIN ASIGNAR"
IdDepartamento	null
IdProvincia	null
IdPais	null
FechaIngreso	null
FechaEgreso	null
TieneTrabajo	null
TieneAuto	null
TieneCasa	null
CreditoMaximo	null
Mail	null
Clave	null
IdUsuario	null
17	
IdCliente	20
Nombre	"STREET, SUSANA MARGARITA"
Cuit	2348895654
IdTipoDocumento	"DNI"
NumeroDocumento	4889565
FechaNacimiento	"1947-06-05T00:00:00"
IdSexo	"F"
IdEstadoCivil	"Z"
Calle	null
NumeroCalle	null
Localidad	"LABOULAYE"
IdDepartamento	null
IdProvincia	null
IdPais	null
FechaIngreso	null
FechaEgreso	null
TieneTrabajo	null
TieneAuto	null
TieneCasa	null
CreditoMaximo	null
Mail	null
Clave	null
IdUsuario	null
18	
IdCliente	21
Nombre	"SANCHEZ, GRISELDA ELINA"
Cuit	2726373820
IdTipoDocumento	"DNI"
NumeroDocumento	26373820
FechaNacimiento	"1975-10-09T00:00:00"
IdSexo	"F"
IdEstadoCivil	"S"
Calle	null
NumeroCalle	null
Localidad	"VILLA GUTIERREZ"
IdDepartamento	null
IdProvincia	null
IdPais	null
FechaIngreso	null
FechaEgreso	null
TieneTrabajo	null
TieneAuto	null
TieneCasa	null
CreditoMaximo	null
Mail	null
Clave	null
IdUsuario	null
19	
IdCliente	22
Nombre	"CENA, MARGARITA ROSA"
Cuit	2799544940
IdTipoDocumento	"DNI"
NumeroDocumento	9954494
FechaNacimiento	"1939-07-21T00:00:00"
IdSexo	"F"
IdEstadoCivil	"V"
Calle	null
NumeroCalle	null
Localidad	"LABOULAYE"
IdDepartamento	null
IdProvincia	null
IdPais	null
FechaIngreso	null
FechaEgreso	null
TieneTrabajo	null
TieneAuto	null
TieneCasa	null
CreditoMaximo	null
Mail	null
Clave	null
IdUsuario	null
20	
IdCliente	23
Nombre	"CRISTALDO MARTINEZ, DEONILDA"
Cuit	2792824402
IdTipoDocumento	"CF"
NumeroDocumento	9282440
FechaNacimiento	"1960-04-08T00:00:00"
IdSexo	"F"
IdEstadoCivil	"Z"
Calle	null
NumeroCalle	null
Localidad	"SIN ASIGNAR"
IdDepartamento	null
IdProvincia	null
IdPais	null
FechaIngreso	null
FechaEgreso	null
TieneTrabajo	null
TieneAuto	null
TieneCasa	null
CreditoMaximo	null
Mail	null
Clave	null
IdUsuario	null
21	
IdCliente	24
Nombre	"PETRELLI, FABIANA"
Cuit	2716275064
IdTipoDocumento	"CF"
NumeroDocumento	1627506
FechaNacimiento	"1962-12-03T00:00:00"
IdSexo	"F"
IdEstadoCivil	"Z"
Calle	null
NumeroCalle	null
Localidad	"RIO CEBALLOS"
IdDepartamento	null
IdProvincia	null
IdPais	null
FechaIngreso	null
FechaEgreso	null
TieneTrabajo	null
TieneAuto	null
TieneCasa	null
CreditoMaximo	null
Mail	null
Clave	null
IdUsuario	null
22	
IdCliente	25
Nombre	"MARTINEZ, GINES"
Cuit	2063770907
IdTipoDocumento	"CF"
NumeroDocumento	6377090
FechaNacimiento	"1935-05-25T00:00:00"
IdSexo	"M"
IdEstadoCivil	"S"
Calle	null
NumeroCalle	null
Localidad	"CORDOBA CAPITAL"
IdDepartamento	null
IdProvincia	null
IdPais	null
FechaIngreso	null
FechaEgreso	null
TieneTrabajo	null
TieneAuto	null
TieneCasa	null
CreditoMaximo	null
Mail	null
Clave	null
IdUsuario	null
23	
IdCliente	26
Nombre	"BARRIOS, AGUSTIN"
Cuit	2766542888
IdTipoDocumento	"CP"
NumeroDocumento	6654288
FechaNacimiento	"1945-04-02T00:00:00"
IdSexo	"M"
IdEstadoCivil	"Z"
Calle	null
NumeroCalle	null
Localidad	"LABOULAYE"
IdDepartamento	null
IdProvincia	null
IdPais	null
FechaIngreso	null
FechaEgreso	null
TieneTrabajo	null
TieneAuto	null
TieneCasa	null
CreditoMaximo	null
Mail	null
Clave	null
IdUsuario	null
24	
IdCliente	27
Nombre	"RIVERO, SUSANA ELENA"
Cuit	2759184372
IdTipoDocumento	"CP"
NumeroDocumento	5918437
FechaNacimiento	"1948-08-04T00:00:00"
IdSexo	"F"
IdEstadoCivil	"Z"
Calle	null
NumeroCalle	null
Localidad	"ARROYITO"
IdDepartamento	null
IdProvincia	null
IdPais	null
FechaIngreso	null
FechaEgreso	null
TieneTrabajo	null
TieneAuto	null
TieneCasa	null
CreditoMaximo	null
Mail	null
Clave	null
IdUsuario	null
25	
IdCliente	28
Nombre	"BLETRAMO, LEANDRO EMANUEL"
Cuit	2762650783
IdTipoDocumento	"CP"
NumeroDocumento	34273940
FechaNacimiento	"1989-05-17T00:00:00"
IdSexo	"M"
IdEstadoCivil	"S"
Calle	null
NumeroCalle	null
Localidad	"SIN ASIGNAR"
IdDepartamento	null
IdProvincia	null
IdPais	null
FechaIngreso	null
FechaEgreso	null
TieneTrabajo	null
TieneAuto	null
TieneCasa	null
CreditoMaximo	null
Mail	null
Clave	null
IdUsuario	null
26	
IdCliente	29
Nombre	"VINCENZINI, NORMA IRIS"
Cuit	2759559813
IdTipoDocumento	"LE"
NumeroDocumento	5955981
FechaNacimiento	"1950-03-05T00:00:00"
IdSexo	"F"
IdEstadoCivil	"C"
Calle	null
NumeroCalle	null
Localidad	"JUSTINIANO POSSE"
IdDepartamento	null
IdProvincia	null
IdPais	null
FechaIngreso	null
FechaEgreso	null
TieneTrabajo	null
TieneAuto	null
TieneCasa	null
CreditoMaximo	null
Mail	null
Clave	null
IdUsuario	null
27	
IdCliente	30
Nombre	"FERREYRA, MARTA GRACIELA"
Cuit	2756608163
IdTipoDocumento	"LE"
NumeroDocumento	5660816
FechaNacimiento	"1947-11-12T00:00:00"
IdSexo	"F"
IdEstadoCivil	"C"
Calle	null
NumeroCalle	null
Localidad	"ALCIRA"
IdDepartamento	null
IdProvincia	null
IdPais	null
FechaIngreso	null
FechaEgreso	null
TieneTrabajo	null
TieneAuto	null
TieneCasa	null
CreditoMaximo	null
Mail	null
Clave	null
IdUsuario	null
28	
IdCliente	31
Nombre	"VERON, MANUEL VALLE"
Cuit	2079566226
IdTipoDocumento	"PSP"
NumeroDocumento	7956622
FechaNacimiento	"1946-10-11T00:00:00"
IdSexo	"M"
IdEstadoCivil	"S"
Calle	null
NumeroCalle	null
Localidad	"LUCIO V MANSILLA"
IdDepartamento	null
IdProvincia	null
IdPais	null
FechaIngreso	null
FechaEgreso	null
TieneTrabajo	null
TieneAuto	null
TieneCasa	null
CreditoMaximo	null
Mail	null
Clave	null
IdUsuario	null
29	
IdCliente	32
Nombre	"RUIZ, ELENA VICENTA"
Cuit	2753276607
IdTipoDocumento	"DNI"
NumeroDocumento	5327660
FechaNacimiento	"1949-12-08T00:00:00"
IdSexo	"F"
IdEstadoCivil	"S"
Calle	null
NumeroCalle	null
Localidad	"SIN ASIGNAR"
IdDepartamento	null
IdProvincia	null
IdPais	null
FechaIngreso	null
FechaEgreso	null
TieneTrabajo	null
TieneAuto	null
TieneCasa	null
CreditoMaximo	null
Mail	null
Clave	null
IdUsuario	null
30	
IdCliente	33
Nombre	"SAGUILAN, LUICIANA"
Cuit	2744869891
IdTipoDocumento	"DNI"
NumeroDocumento	4486989
FechaNacimiento	"1944-01-16T00:00:00"
IdSexo	"F"
IdEstadoCivil	"S"
Calle	null
NumeroCalle	null
Localidad	"SIN ASIGNAR"
IdDepartamento	null
IdProvincia	null
IdPais	null
FechaIngreso	null
FechaEgreso	null
TieneTrabajo	null
TieneAuto	null
TieneCasa	null
CreditoMaximo	null
Mail	null
Clave	null
IdUsuario	null
31	
IdCliente	34
Nombre	"BRIZUELA, JUAN AGUSTIN"
Cuit	2071211216
IdTipoDocumento	"DNI"
NumeroDocumento	7121121
FechaNacimiento	"1943-08-29T00:00:00"
IdSexo	"M"
IdEstadoCivil	"C"
Calle	null
NumeroCalle	null
Localidad	"LUCIO V MANSILLA"
IdDepartamento	null
IdProvincia	null
IdPais	null
FechaIngreso	null
FechaEgreso	null
TieneTrabajo	null
TieneAuto	null
TieneCasa	null
CreditoMaximo	null
Mail	null
Clave	null
IdUsuario	null
32	
IdCliente	35
Nombre	"LOBO, SILVESTRE AMARANTO"
Cuit	2363804339
IdTipoDocumento	"DNI"
NumeroDocumento	6380433
FechaNacimiento	"1936-12-20T00:00:00"
IdSexo	"M"
IdEstadoCivil	"S"
Calle	null
NumeroCalle	null
Localidad	"SIN ASIGNAR"
IdDepartamento	null
IdProvincia	null
IdPais	null
FechaIngreso	null
FechaEgreso	null
TieneTrabajo	null
TieneAuto	null
TieneCasa	null
CreditoMaximo	null
Mail	null
Clave	null
IdUsuario	null
33	
IdCliente	36
Nombre	"JUAREZ, JOAQUIN AVELINO"
Cuit	2008363410
IdTipoDocumento	"DNI"
NumeroDocumento	8363410
FechaNacimiento	"1951-03-04T00:00:00"
IdSexo	"M"
IdEstadoCivil	"S"
Calle	null
NumeroCalle	null
Localidad	"SIN ASIGNAR"
IdDepartamento	null
IdProvincia	null
IdPais	null
FechaIngreso	null
FechaEgreso	null
TieneTrabajo	null
TieneAuto	null
TieneCasa	null
CreditoMaximo	null
Mail	null
Clave	null
IdUsuario	null
34	
IdCliente	37
Nombre	"HEREDIA, CARLOS"
Cuit	2078435942
IdTipoDocumento	"DNI"
NumeroDocumento	7843594
FechaNacimiento	"1949-11-18T00:00:00"
IdSexo	"M"
IdEstadoCivil	"S"
Calle	null
NumeroCalle	null
Localidad	"CORDOBA CAPITAL"
IdDepartamento	null
IdProvincia	null
IdPais	null
FechaIngreso	null
FechaEgreso	null
TieneTrabajo	null
TieneAuto	null
TieneCasa	null
CreditoMaximo	null
Mail	null
Clave	null
IdUsuario	null
35	
IdCliente	38
Nombre	"FUENTES, DIEGO HERNAN"
Cuit	2022796831
IdTipoDocumento	"DNI"
NumeroDocumento	22796831
FechaNacimiento	"1972-12-11T00:00:00"
IdSexo	"M"
IdEstadoCivil	"Z"
Calle	null
NumeroCalle	null
Localidad	"CORDOBA CAPITAL"
IdDepartamento	null
IdProvincia	null
IdPais	null
FechaIngreso	null
FechaEgreso	null
TieneTrabajo	null
TieneAuto	null
TieneCasa	null
CreditoMaximo	null
Mail	null
Clave	null
IdUsuario	null
36	
IdCliente	39
Nombre	"RIVERO, JOSE"
Cuit	2066859062
IdTipoDocumento	"CF"
NumeroDocumento	6685906
FechaNacimiento	"1938-01-01T00:00:00"
IdSexo	"M"
IdEstadoCivil	"C"
Calle	null
NumeroCalle	null
Localidad	"SIN ASIGNAR"
IdDepartamento	null
IdProvincia	null
IdPais	null
FechaIngreso	null
FechaEgreso	null
TieneTrabajo	null
TieneAuto	null
TieneCasa	null
CreditoMaximo	null
Mail	null
Clave	null
IdUsuario	null
37	
IdCliente	40
Nombre	"MACCHI, MARIA DE LUJAN"
Cuit	2757214916
IdTipoDocumento	"CF"
NumeroDocumento	5721491
FechaNacimiento	"1947-10-28T00:00:00"
IdSexo	"F"
IdEstadoCivil	"V"
Calle	null
NumeroCalle	null
Localidad	"SIN ASIGNAR"
IdDepartamento	null
IdProvincia	null
IdPais	null
FechaIngreso	null
FechaEgreso	null
TieneTrabajo	null
TieneAuto	null
TieneCasa	null
CreditoMaximo	null
Mail	null
Clave	null
IdUsuario	null
38	
IdCliente	41
Nombre	"SANCHEZ, CRISTINA DORA"
Cuit	2745068906
IdTipoDocumento	"CF"
NumeroDocumento	4506890
FechaNacimiento	"1942-09-15T00:00:00"
IdSexo	"F"
IdEstadoCivil	"S"
Calle	null
NumeroCalle	null
Localidad	"SIN ASIGNAR"
IdDepartamento	null
IdProvincia	null
IdPais	null
FechaIngreso	null
FechaEgreso	null
TieneTrabajo	null
TieneAuto	null
TieneCasa	null
CreditoMaximo	null
Mail	null
Clave	null
IdUsuario	null
39	
IdCliente	42
Nombre	"ARCE, YESICA J"
Cuit	2728113808
IdTipoDocumento	"CP"
NumeroDocumento	28113808
FechaNacimiento	"1980-03-31T00:00:00"
IdSexo	"F"
IdEstadoCivil	"S"
Calle	null
NumeroCalle	null
Localidad	"SIN ASIGNAR"
IdDepartamento	null
IdProvincia	null
IdPais	null
FechaIngreso	null
FechaEgreso	null
TieneTrabajo	null
TieneAuto	null
TieneCasa	null
CreditoMaximo	null
Mail	null
Clave	null
IdUsuario	null
40	
IdCliente	43
Nombre	"URQUIZA, CESAR DANIEL"
Cuit	2263932170
IdTipoDocumento	"CP"
NumeroDocumento	26393217
FechaNacimiento	"1978-01-21T00:00:00"
IdSexo	"M"
IdEstadoCivil	"Z"
Calle	null
NumeroCalle	null
Localidad	"CORDOBA CAPITAL"
IdDepartamento	null
IdProvincia	null
IdPais	null
FechaIngreso	null
FechaEgreso	null
TieneTrabajo	null
TieneAuto	null
TieneCasa	null
CreditoMaximo	null
Mail	null
Clave	null
IdUsuario	null
41	
IdCliente	44
Nombre	"RODRIGUEZ, DARIO MARTIN"
Cuit	2021902000
IdTipoDocumento	"CP"
NumeroDocumento	21902000
FechaNacimiento	"1970-11-06T00:00:00"
IdSexo	"M"
IdEstadoCivil	"S"
Calle	null
NumeroCalle	null
Localidad	"CORDOBA CAPITAL"
IdDepartamento	null
IdProvincia	null
IdPais	null
FechaIngreso	null
FechaEgreso	null
TieneTrabajo	null
TieneAuto	null
TieneCasa	null
CreditoMaximo	null
Mail	null
Clave	null
IdUsuario	null
42	
IdCliente	45
Nombre	"GULLI, JORGE DANIEL"
Cuit	2018429894
IdTipoDocumento	"LE"
NumeroDocumento	18429894
FechaNacimiento	"1967-10-18T00:00:00"
IdSexo	"M"
IdEstadoCivil	"Z"
Calle	null
NumeroCalle	null
Localidad	"CORDOBA CAPITAL"
IdDepartamento	null
IdProvincia	null
IdPais	null
FechaIngreso	null
FechaEgreso	null
TieneTrabajo	null
TieneAuto	null
TieneCasa	null
CreditoMaximo	null
Mail	null
Clave	null
IdUsuario	null
43	
IdCliente	46
Nombre	"NAVARRO, DANIEL ALEJANDRO"
Cuit	2020622787
IdTipoDocumento	"LE"
NumeroDocumento	20622787
FechaNacimiento	"1969-02-14T00:00:00"
IdSexo	"M"
IdEstadoCivil	"C"
Calle	null
NumeroCalle	null
Localidad	"CORDOBA CAPITAL"
IdDepartamento	null
IdProvincia	null
IdPais	null
FechaIngreso	null
FechaEgreso	null
TieneTrabajo	null
TieneAuto	null
TieneCasa	null
CreditoMaximo	null
Mail	null
Clave	null
IdUsuario	null
44	
IdCliente	47
Nombre	"RAMONDA, FRANCISCA MIGUELA"
Cuit	2747404504
IdTipoDocumento	"PSP"
NumeroDocumento	4740450
FechaNacimiento	"1947-03-02T00:00:00"
IdSexo	"F"
IdEstadoCivil	"C"
Calle	null
NumeroCalle	null
Localidad	"LA CESIRA"
IdDepartamento	null
IdProvincia	null
IdPais	null
FechaIngreso	null
FechaEgreso	null
TieneTrabajo	null
TieneAuto	null
TieneCasa	null
CreditoMaximo	null
Mail	null
Clave	null
IdUsuario	null
45	
IdCliente	48
Nombre	"BOTTI, AMELIA HAYDEE"
Cuit	2745100087
IdTipoDocumento	"DNI"
NumeroDocumento	4510008
FechaNacimiento	"1942-03-24T00:00:00"
IdSexo	"F"
IdEstadoCivil	"C"
Calle	null
NumeroCalle	null
Localidad	"LA CESIRA"
IdDepartamento	null
IdProvincia	null
IdPais	null
FechaIngreso	null
FechaEgreso	null
TieneTrabajo	null
TieneAuto	null
TieneCasa	null
CreditoMaximo	null
Mail	null
Clave	null
IdUsuario	null
46	
IdCliente	49
Nombre	"MORENO, DELIA"
Cuit	2745645261
IdTipoDocumento	"DNI"
NumeroDocumento	4564526
FechaNacimiento	"1943-08-06T00:00:00"
IdSexo	"F"
IdEstadoCivil	"Z"
Calle	null
NumeroCalle	null
Localidad	"CORDOBA CAPITAL"
IdDepartamento	null
IdProvincia	null
IdPais	null
FechaIngreso	null
FechaEgreso	null
TieneTrabajo	null
TieneAuto	null
TieneCasa	null
CreditoMaximo	null
Mail	null
Clave	null
IdUsuario	null
47	
IdCliente	50
Nombre	"MAROSTICA, CARLOS ERNESTO"
Cuit	2076934402
IdTipoDocumento	"DNI"
NumeroDocumento	7693440
FechaNacimiento	"1949-04-03T00:00:00"
IdSexo	"M"
IdEstadoCivil	"Z"
Calle	null
NumeroCalle	null
Localidad	"CORDOBA CAPITAL"
IdDepartamento	null
IdProvincia	null
IdPais	null
FechaIngreso	null
FechaEgreso	null
TieneTrabajo	null
TieneAuto	null
TieneCasa	null
CreditoMaximo	null
Mail	null
Clave	null
IdUsuario	null
48	
IdCliente	51
Nombre	"LEDESMA, MERCEDES DEL CARMEN"
Cuit	2737034350
IdTipoDocumento	"DNI"
NumeroDocumento	3703435
FechaNacimiento	"1936-11-15T00:00:00"
IdSexo	"F"
IdEstadoCivil	"Z"
Calle	null
NumeroCalle	null
Localidad	"VILLA ALLENDE"
IdDepartamento	null
IdProvincia	null
IdPais	null
FechaIngreso	null
FechaEgreso	null
TieneTrabajo	null
TieneAuto	null
TieneCasa	null
CreditoMaximo	null
Mail	null
Clave	null
IdUsuario	null
49	
IdCliente	52
Nombre	"FLORES, MERCEDES YOLANDA"
Cuit	2750979291
IdTipoDocumento	"DNI"
NumeroDocumento	5097929
FechaNacimiento	"1944-05-20T00:00:00"
IdSexo	"F"
IdEstadoCivil	"Z"
Calle	null
NumeroCalle	null
Localidad	"CORDOBA CAPITAL"
IdDepartamento	null
IdProvincia	null
IdPais	null
FechaIngreso	null
FechaEgreso	null
TieneTrabajo	null
TieneAuto	null
TieneCasa	null
CreditoMaximo	null
Mail	null
Clave	null
IdUsuario	null
50	
IdCliente	53
Nombre	"MENDOZA, MARTIN ELEUTERIO"
Cuit	2080419423
IdTipoDocumento	"DNI"
NumeroDocumento	8041942
FechaNacimiento	"1946-11-03T00:00:00"
IdSexo	"M"
IdEstadoCivil	"S"
Calle	null
NumeroCalle	null
Localidad	"CORDOBA CAPITAL"
IdDepartamento	null
IdProvincia	null
IdPais	null
FechaIngreso	null
FechaEgreso	null
TieneTrabajo	null
TieneAuto	null
TieneCasa	null
CreditoMaximo	null
Mail	null
Clave	null
IdUsuario	null
51	
IdCliente	54
Nombre	"RIVADERO, NILDA MIRTA"
Cuit	2745077913
IdTipoDocumento	"DNI"
NumeroDocumento	4507791
FechaNacimiento	"1942-08-17T00:00:00"
IdSexo	"F"
IdEstadoCivil	"C"
Calle	null
NumeroCalle	null
Localidad	"CORDOBA CAPITAL"
IdDepartamento	null
IdProvincia	null
IdPais	null
FechaIngreso	null
FechaEgreso	null
TieneTrabajo	null
TieneAuto	null
TieneCasa	null
CreditoMaximo	null
Mail	null
Clave	null
IdUsuario	null
52	
IdCliente	55
Nombre	"LUBARY, ELENA DEL CARMEN"
Cuit	2766475005
IdTipoDocumento	"CF"
NumeroDocumento	6647500
FechaNacimiento	"1951-09-14T00:00:00"
IdSexo	"F"
IdEstadoCivil	"Z"
Calle	null
NumeroCalle	null
Localidad	"ALICIA"
IdDepartamento	null
IdProvincia	null
IdPais	null
FechaIngreso	null
FechaEgreso	null
TieneTrabajo	null
TieneAuto	null
TieneCasa	null
CreditoMaximo	null
Mail	null
Clave	null
IdUsuario	null
53	
IdCliente	56
Nombre	"MALDONADO, AURORA DEL VALLE"
Cuit	2757307639
IdTipoDocumento	"CF"
NumeroDocumento	5730763
FechaNacimiento	"1948-07-04T00:00:00"
IdSexo	"F"
IdEstadoCivil	"V"
Calle	null
NumeroCalle	null
Localidad	"VILLA CARLOS PAZ"
IdDepartamento	null
IdProvincia	null
IdPais	null
FechaIngreso	null
FechaEgreso	null
TieneTrabajo	null
TieneAuto	null
TieneCasa	null
CreditoMaximo	null
Mail	null
Clave	null
IdUsuario	null
54	
IdCliente	57
Nombre	"CARRANZA, FRANCISCA CORINA"
Cuit	2715724485
IdTipoDocumento	"CF"
NumeroDocumento	1572448
FechaNacimiento	"1932-10-16T00:00:00"
IdSexo	"F"
IdEstadoCivil	"V"
Calle	null
NumeroCalle	null
Localidad	"VILLA CARLOS PAZ"
IdDepartamento	null
IdProvincia	null
IdPais	null
FechaIngreso	null
FechaEgreso	null
TieneTrabajo	null
TieneAuto	null
TieneCasa	null
CreditoMaximo	null
Mail	null
Clave	null
IdUsuario	null
55	
IdCliente	58
Nombre	"DELGADO, RAMONA"
Cuit	2762645798
IdTipoDocumento	"CP"
NumeroDocumento	6264579
FechaNacimiento	"1950-01-25T00:00:00"
IdSexo	"F"
IdEstadoCivil	"C"
Calle	null
NumeroCalle	null
Localidad	"VILLA SANTA CRUZ DEL LAGO"
IdDepartamento	null
IdProvincia	null
IdPais	null
FechaIngreso	null
FechaEgreso	null
TieneTrabajo	null
TieneAuto	null
TieneCasa	null
CreditoMaximo	null
Mail	null
Clave	null
IdUsuario	null
56	
IdCliente	59
Nombre	"LUCERO, ROSARIO DEL CARMEN"
Cuit	2738875952
IdTipoDocumento	"CP"
NumeroDocumento	3887595
FechaNacimiento	"1940-07-06T00:00:00"
IdSexo	"F"
IdEstadoCivil	"S"
Calle	null
NumeroCalle	null
Localidad	"CORDOBA CAPITAL"
IdDepartamento	null
IdProvincia	null
IdPais	null
FechaIngreso	null
FechaEgreso	null
TieneTrabajo	null
TieneAuto	null
TieneCasa	null
CreditoMaximo	null
Mail	null
Clave	null
IdUsuario	null
57	
IdCliente	60
Nombre	"DOMINGUEZ, MARTHA AMALIA"
Cuit	2756368898
IdTipoDocumento	"CP"
NumeroDocumento	5636889
FechaNacimiento	"1950-06-27T00:00:00"
IdSexo	"F"
IdEstadoCivil	"Z"
Calle	null
NumeroCalle	null
Localidad	"SIN ASIGNAR"
IdDepartamento	null
IdProvincia	null
IdPais	null
FechaIngreso	null
FechaEgreso	null
TieneTrabajo	null
TieneAuto	null
TieneCasa	null
CreditoMaximo	null
Mail	null
Clave	null
IdUsuario	null
58	
IdCliente	61
Nombre	"PIZZUTO, SEBASTIAN"
Cuit	2084118649
IdTipoDocumento	"LE"
NumeroDocumento	8411864
FechaNacimiento	"1950-09-07T00:00:00"
IdSexo	"M"
IdEstadoCivil	"Z"
Calle	null
NumeroCalle	null
Localidad	"CORDOBA CAPITAL"
IdDepartamento	null
IdProvincia	null
IdPais	null
FechaIngreso	null
FechaEgreso	null
TieneTrabajo	null
TieneAuto	null
TieneCasa	null
CreditoMaximo	null
Mail	null
Clave	null
IdUsuario	null
59	
IdCliente	62
Nombre	"GIGENA, OFELIA DORA"
Cuit	2766803177
IdTipoDocumento	"LE"
NumeroDocumento	6680317
FechaNacimiento	"1949-04-17T00:00:00"
IdSexo	"F"
IdEstadoCivil	"Z"
Calle	null
NumeroCalle	null
Localidad	"CORDOBA CAPITAL"
IdDepartamento	null
IdProvincia	null
IdPais	null
FechaIngreso	null
FechaEgreso	null
TieneTrabajo	null
TieneAuto	null
TieneCasa	null
CreditoMaximo	null
Mail	null
Clave	null
IdUsuario	null
60	
IdCliente	63
Nombre	"ROMERO, HAYDEE"
Cuit	2757307035
IdTipoDocumento	"PSP"
NumeroDocumento	5730703
FechaNacimiento	"1948-07-11T00:00:00"
IdSexo	"F"
IdEstadoCivil	"S"
Calle	null
NumeroCalle	null
Localidad	"VILLA CARLOS PAZ"
IdDepartamento	null
IdProvincia	null
IdPais	null
FechaIngreso	null
FechaEgreso	null
TieneTrabajo	null
TieneAuto	null
TieneCasa	null
CreditoMaximo	null
Mail	null
Clave	null
IdUsuario	null
61	
IdCliente	64
Nombre	"SAUR, ELENA MARIA"
Cuit	2752474472
IdTipoDocumento	"DNI"
NumeroDocumento	5247447
FechaNacimiento	"1947-01-04T00:00:00"
IdSexo	"F"
IdEstadoCivil	"Z"
Calle	null
NumeroCalle	null
Localidad	"CORRAL DE BUSTOS"
IdDepartamento	null
IdProvincia	null
IdPais	null
FechaIngreso	null
FechaEgreso	null
TieneTrabajo	null
TieneAuto	null
TieneCasa	null
CreditoMaximo	null
Mail	null
Clave	null
IdUsuario	null
62	
IdCliente	65
Nombre	"PIRIS, MARGARITA AURELIA"
Cuit	2752474480
IdTipoDocumento	"DNI"
NumeroDocumento	5247448
FechaNacimiento	"1947-04-15T00:00:00"
IdSexo	"F"
IdEstadoCivil	"S"
Calle	null
NumeroCalle	null
Localidad	"ISLA VERDE"
IdDepartamento	null
IdProvincia	null
IdPais	null
FechaIngreso	null
FechaEgreso	null
TieneTrabajo	null
TieneAuto	null
TieneCasa	null
CreditoMaximo	null
Mail	null
Clave	null
IdUsuario	null
63	
IdCliente	66
Nombre	"GUZMAN, ALEJANDRINA"
Cuit	2727989689
IdTipoDocumento	"DNI"
NumeroDocumento	2798968
FechaNacimiento	"1936-02-26T00:00:00"
IdSexo	"F"
IdEstadoCivil	"Z"
Calle	null
NumeroCalle	null
Localidad	"VILLA CARLOS PAZ"
IdDepartamento	null
IdProvincia	null
IdPais	null
FechaIngreso	null
FechaEgreso	null
TieneTrabajo	null
TieneAuto	null
TieneCasa	null
CreditoMaximo	null
Mail	null
Clave	null
IdUsuario	null
64	
IdCliente	67
Nombre	"ZAPATA, ALICIA ANGELICA"
Cuit	2748502739
IdTipoDocumento	"DNI"
NumeroDocumento	4850273
FechaNacimiento	"1944-07-14T00:00:00"
IdSexo	"F"
IdEstadoCivil	"Z"
Calle	null
NumeroCalle	null
Localidad	"ISLA VERDE"
IdDepartamento	null
IdProvincia	null
IdPais	null
FechaIngreso	null
FechaEgreso	null
TieneTrabajo	null
TieneAuto	null
TieneCasa	null
CreditoMaximo	null
Mail	null
Clave	null
IdUsuario	null
65	
IdCliente	68
Nombre	"RODRIGUEZ, MATEO ELADIO"
Cuit	2064291115
IdTipoDocumento	"DNI"
NumeroDocumento	6429111
FechaNacimiento	"1939-11-08T00:00:00"
IdSexo	"M"
IdEstadoCivil	"C"
Calle	null
NumeroCalle	null
Localidad	"CORDOBA CAPITAL"
IdDepartamento	null
IdProvincia	null
IdPais	null
FechaIngreso	null
FechaEgreso	null
TieneTrabajo	null
TieneAuto	null
TieneCasa	null
CreditoMaximo	null
Mail	null
Clave	null
IdUsuario	null
66	
IdCliente	69
Nombre	"AGUIRRE, ANDRES RAFAEL"
Cuit	2078560798
IdTipoDocumento	"DNI"
NumeroDocumento	7856079
FechaNacimiento	"1949-09-09T00:00:00"
IdSexo	"M"
IdEstadoCivil	"Z"
Calle	null
NumeroCalle	null
Localidad	"SIN ASIGNAR"
IdDepartamento	null
IdProvincia	null
IdPais	null
FechaIngreso	null
FechaEgreso	null
TieneTrabajo	null
TieneAuto	null
TieneCasa	null
CreditoMaximo	null
Mail	null
Clave	null
IdUsuario	null
67	
IdCliente	70
Nombre	"FIGUEROA, JUAN SANTOS"
Cuit	2363940879
IdTipoDocumento	"DNI"
NumeroDocumento	6394087
FechaNacimiento	"1943-11-29T00:00:00"
IdSexo	"M"
IdEstadoCivil	"C"
Calle	null
NumeroCalle	null
Localidad	"DEAN FUNES"
IdDepartamento	null
IdProvincia	null
IdPais	null
FechaIngreso	null
FechaEgreso	null
TieneTrabajo	null
TieneAuto	null
TieneCasa	null
CreditoMaximo	null
Mail	null
Clave	null
IdUsuario	null
68	
IdCliente	71
Nombre	"MARRONI, MARTA OFELIA"
Cuit	2349799314
IdTipoDocumento	"CF"
NumeroDocumento	4979931
FechaNacimiento	"1944-09-10T00:00:00"
IdSexo	"F"
IdEstadoCivil	"Z"
Calle	null
NumeroCalle	null
Localidad	"CORDOBA CAPITAL"
IdDepartamento	null
IdProvincia	null
IdPais	null
FechaIngreso	null
FechaEgreso	null
TieneTrabajo	null
TieneAuto	null
TieneCasa	null
CreditoMaximo	null
Mail	null
Clave	null
IdUsuario	null
69	
IdCliente	72
Nombre	"FRONTERA, CARLOS"
Cuit	2064872746
IdTipoDocumento	"CF"
NumeroDocumento	6487274
FechaNacimiento	"1934-05-07T00:00:00"
IdSexo	"M"
IdEstadoCivil	"Z"
Calle	null
NumeroCalle	null
Localidad	"CORDOBA CAPITAL"
IdDepartamento	null
IdProvincia	null
IdPais	null
FechaIngreso	null
FechaEgreso	null
TieneTrabajo	null
TieneAuto	null
TieneCasa	null
CreditoMaximo	null
Mail	null
Clave	null
IdUsuario	null
70	
IdCliente	73
Nombre	"GUERRERO, RAMONA IMELDA"
Cuit	2754555224
IdTipoDocumento	"CF"
NumeroDocumento	5455522
FechaNacimiento	"1947-01-18T00:00:00"
IdSexo	"F"
IdEstadoCivil	"Z"
Calle	null
NumeroCalle	null
Localidad	"CORDOBA CAPITAL"
IdDepartamento	null
IdProvincia	null
IdPais	null
FechaIngreso	null
FechaEgreso	null
TieneTrabajo	null
TieneAuto	null
TieneCasa	null
CreditoMaximo	null
Mail	null
Clave	null
IdUsuario	null
71	
IdCliente	74
Nombre	"GIMENEZ, GRACIELA BERNARDITA"
Cuit	2763970323
IdTipoDocumento	"CP"
NumeroDocumento	6397032
FechaNacimiento	"1950-08-20T00:00:00"
IdSexo	"F"
IdEstadoCivil	"Z"
Calle	null
NumeroCalle	null
Localidad	"CORDOBA CAPITAL"
IdDepartamento	null
IdProvincia	null
IdPais	null
FechaIngreso	null
FechaEgreso	null
TieneTrabajo	null
TieneAuto	null
TieneCasa	null
CreditoMaximo	null
Mail	null
Clave	null
IdUsuario	null
72	
IdCliente	75
Nombre	"SALEVA, ROSA"
Cuit	2750082496
IdTipoDocumento	"CP"
NumeroDocumento	5008249
FechaNacimiento	"1945-01-23T00:00:00"
IdSexo	"F"
IdEstadoCivil	"Z"
Calle	null
NumeroCalle	null
Localidad	"CORDOBA CAPITAL"
IdDepartamento	null
IdProvincia	null
IdPais	null
FechaIngreso	null
FechaEgreso	null
TieneTrabajo	null
TieneAuto	null
TieneCasa	null
CreditoMaximo	null
Mail	null
Clave	null
IdUsuario	null
73	
IdCliente	76
Nombre	"CEBALLO, RAMON MARCIANO"
Cuit	2084988813
IdTipoDocumento	"CP"
NumeroDocumento	8498881
FechaNacimiento	"1951-05-09T00:00:00"
IdSexo	"M"
IdEstadoCivil	"S"
Calle	null
NumeroCalle	null
Localidad	"CORDOBA CAPITAL"
IdDepartamento	null
IdProvincia	null
IdPais	null
FechaIngreso	null
FechaEgreso	null
TieneTrabajo	null
TieneAuto	null
TieneCasa	null
CreditoMaximo	null
Mail	null
Clave	null
IdUsuario	null
74	
IdCliente	77
Nombre	"FERNANDEZ, IRMA BEATRIZ"
Cuit	2757481876
IdTipoDocumento	"LE"
NumeroDocumento	5748187
FechaNacimiento	"1948-09-15T00:00:00"
IdSexo	"F"
IdEstadoCivil	"Z"
Calle	null
NumeroCalle	null
Localidad	"CORDOBA CAPITAL"
IdDepartamento	null
IdProvincia	null
IdPais	null
FechaIngreso	null
FechaEgreso	null
TieneTrabajo	null
TieneAuto	null
TieneCasa	null
CreditoMaximo	null
Mail	null
Clave	null
IdUsuario	null
75	
IdCliente	78
Nombre	"ANDRADA, IRMA DEL VALLE"
Cuit	2128741897
IdTipoDocumento	"LE"
NumeroDocumento	12874189
FechaNacimiento	"1955-01-15T00:00:00"
IdSexo	"F"
IdEstadoCivil	"Z"
Calle	null
NumeroCalle	null
Localidad	"CORDOBA CAPITAL"
IdDepartamento	null
IdProvincia	null
IdPais	null
FechaIngreso	null
FechaEgreso	null
TieneTrabajo	null
TieneAuto	null
TieneCasa	null
CreditoMaximo	null
Mail	null
Clave	null
IdUsuario	null
76	
IdCliente	79
Nombre	"PALUMBO, CLAUDIO GERARDO"
Cuit	2178448870
IdTipoDocumento	"PSP"
NumeroDocumento	17844887
FechaNacimiento	"1966-11-19T00:00:00"
IdSexo	"M"
IdEstadoCivil	"Z"
Calle	null
NumeroCalle	null
Localidad	"CORDOBA CAPITAL"
IdDepartamento	null
IdProvincia	null
IdPais	null
FechaIngreso	null
FechaEgreso	null
TieneTrabajo	null
TieneAuto	null
TieneCasa	null
CreditoMaximo	null
Mail	null
Clave	null
IdUsuario	null
77	
IdCliente	80
Nombre	"PERALTA, SILVIA PATRICIA"
Cuit	2222201887
IdTipoDocumento	"DNI"
NumeroDocumento	22220188
FechaNacimiento	"1971-04-08T00:00:00"
IdSexo	"F"
IdEstadoCivil	"Z"
Calle	null
NumeroCalle	null
Localidad	"CORDOBA CAPITAL"
IdDepartamento	null
IdProvincia	null
IdPais	null
FechaIngreso	null
FechaEgreso	null
TieneTrabajo	null
TieneAuto	null
TieneCasa	null
CreditoMaximo	null
Mail	null
Clave	null
IdUsuario	null
78	
IdCliente	81
Nombre	"BACILOPULOS, CATALINA"
Cuit	2364935674
IdTipoDocumento	"DNI"
NumeroDocumento	6493567
FechaNacimiento	"1954-06-06T00:00:00"
IdSexo	"F"
IdEstadoCivil	"Z"
Calle	null
NumeroCalle	null
Localidad	"LA FALDA"
IdDepartamento	null
IdProvincia	null
IdPais	null
FechaIngreso	null
FechaEgreso	null
TieneTrabajo	null
TieneAuto	null
TieneCasa	null
CreditoMaximo	null
Mail	null
Clave	null
IdUsuario	null
79	
IdCliente	82
Nombre	"FARAIG, OLGA ANA"
Cuit	2773467123
IdTipoDocumento	"DNI"
NumeroDocumento	7346712
FechaNacimiento	"1931-10-02T00:00:00"
IdSexo	"F"
IdEstadoCivil	"S"
Calle	null
NumeroCalle	null
Localidad	"CORDOBA CAPITAL"
IdDepartamento	null
IdProvincia	null
IdPais	null
FechaIngreso	null
FechaEgreso	null
TieneTrabajo	null
TieneAuto	null
TieneCasa	null
CreditoMaximo	null
Mail	null
Clave	null
IdUsuario	null
80	
IdCliente	83
Nombre	"GUEVARA, MARTA N"
Cuit	2762490743
IdTipoDocumento	"DNI"
NumeroDocumento	6249074
FechaNacimiento	"1949-11-30T00:00:00"
IdSexo	"F"
IdEstadoCivil	"Z"
Calle	null
NumeroCalle	null
Localidad	"LA FALDA"
IdDepartamento	null
IdProvincia	null
IdPais	null
FechaIngreso	null
FechaEgreso	null
TieneTrabajo	null
TieneAuto	null
TieneCasa	null
CreditoMaximo	null
Mail	null
Clave	null
IdUsuario	null
81	
IdCliente	84
Nombre	"BARBIERI, YOLANDA ROSA"
Cuit	2745914548
IdTipoDocumento	"DNI"
NumeroDocumento	4591454
FechaNacimiento	"1943-06-16T00:00:00"
IdSexo	"F"
IdEstadoCivil	"S"
Calle	null
NumeroCalle	null
Localidad	"CORDOBA CAPITAL"
IdDepartamento	null
IdProvincia	null
IdPais	null
FechaIngreso	null
FechaEgreso	null
TieneTrabajo	null
TieneAuto	null
TieneCasa	null
CreditoMaximo	null
Mail	null
Clave	null
IdUsuario	null
82	
IdCliente	85
Nombre	"ZARATE, NORMA AGUSTINA"
Cuit	2752155599
IdTipoDocumento	"DNI"
NumeroDocumento	5215559
FechaNacimiento	"1971-01-01T00:00:00"
IdSexo	"F"
IdEstadoCivil	"S"
Calle	null
NumeroCalle	null
Localidad	"LA FALDA"
IdDepartamento	null
IdProvincia	null
IdPais	null
FechaIngreso	null
FechaEgreso	null
TieneTrabajo	null
TieneAuto	null
TieneCasa	null
CreditoMaximo	null
Mail	null
Clave	null
IdUsuario	null
83	
IdCliente	86
Nombre	"LOPEZ, RENE ANTONIO"
Cuit	2065917786
IdTipoDocumento	"DNI"
NumeroDocumento	6591778
FechaNacimiento	"1938-11-30T00:00:00"
IdSexo	"M"
IdEstadoCivil	"Z"
Calle	null
NumeroCalle	null
Localidad	"HERNANDO"
IdDepartamento	null
IdProvincia	null
IdPais	null
FechaIngreso	null
FechaEgreso	null
TieneTrabajo	null
TieneAuto	null
TieneCasa	null
CreditoMaximo	null
Mail	null
Clave	null
IdUsuario	null
84	
IdCliente	87
Nombre	"BANEGA, TELEFORO ENRIQUE"
Cuit	2079539709
IdTipoDocumento	"CF"
NumeroDocumento	7953970
FechaNacimiento	"1945-02-20T00:00:00"
IdSexo	"M"
IdEstadoCivil	"S"
Calle	null
NumeroCalle	null
Localidad	"KILOMETRO 658"
IdDepartamento	null
IdProvincia	null
IdPais	null
FechaIngreso	null
FechaEgreso	null
TieneTrabajo	null
TieneAuto	null
TieneCasa	null
CreditoMaximo	null
Mail	null
Clave	null
IdUsuario	null
85	
IdCliente	88
Nombre	"SUAREZ, VICENTE"
Cuit	2078708558
IdTipoDocumento	"CF"
NumeroDocumento	7870855
FechaNacimiento	"1950-03-27T00:00:00"
IdSexo	"M"
IdEstadoCivil	"Z"
Calle	null
NumeroCalle	null
Localidad	"HERNANDO"
IdDepartamento	null
IdProvincia	null
IdPais	null
FechaIngreso	null
FechaEgreso	null
TieneTrabajo	null
TieneAuto	null
TieneCasa	null
CreditoMaximo	null
Mail	null
Clave	null
IdUsuario	null
86	
IdCliente	89
Nombre	"MURUA, MARIA"
Cuit	2762567827
IdTipoDocumento	"CF"
NumeroDocumento	6256782
FechaNacimiento	"1949-08-20T00:00:00"
IdSexo	"F"
IdEstadoCivil	"Z"
Calle	null
NumeroCalle	null
Localidad	"SIN ASIGNAR"
IdDepartamento	null
IdProvincia	null
IdPais	null
FechaIngreso	null
FechaEgreso	null
TieneTrabajo	null
TieneAuto	null
TieneCasa	null
CreditoMaximo	null
Mail	null
Clave	null
IdUsuario	null
87	
IdCliente	90
Nombre	"PALMIERIS, MIGUEL ANGEL"
Cuit	2066081991
IdTipoDocumento	"CP"
NumeroDocumento	6608199
FechaNacimiento	"1946-12-22T00:00:00"
IdSexo	"M"
IdEstadoCivil	"C"
Calle	null
NumeroCalle	null
Localidad	"HERNANDO"
IdDepartamento	null
IdProvincia	null
IdPais	null
FechaIngreso	null
FechaEgreso	null
TieneTrabajo	null
TieneAuto	null
TieneCasa	null
CreditoMaximo	null
Mail	null
Clave	null
IdUsuario	null
88	
IdCliente	91
Nombre	"VIVAS, CRISTINA DEL VALLE"
Cuit	2756828588
IdTipoDocumento	"CP"
NumeroDocumento	5682858
FechaNacimiento	"1948-12-19T00:00:00"
IdSexo	"F"
IdEstadoCivil	"S"
Calle	null
NumeroCalle	null
Localidad	"CORDOBA CAPITAL"
IdDepartamento	null
IdProvincia	null
IdPais	null
FechaIngreso	null
FechaEgreso	null
TieneTrabajo	null
TieneAuto	null
TieneCasa	null
CreditoMaximo	null
Mail	null
Clave	null
IdUsuario	null
89	
IdCliente	92
Nombre	"MARQUEZ, NICOLASA Z"
Cuit	2754433471
IdTipoDocumento	"CP"
NumeroDocumento	5443347
FechaNacimiento	"1947-08-24T00:00:00"
IdSexo	"F"
IdEstadoCivil	"Z"
Calle	null
NumeroCalle	null
Localidad	"SIN ASIGNAR"
IdDepartamento	null
IdProvincia	null
IdPais	null
FechaIngreso	null
FechaEgreso	null
TieneTrabajo	null
TieneAuto	null
TieneCasa	null
CreditoMaximo	null
Mail	null
Clave	null
IdUsuario	null
90	
IdCliente	93
Nombre	"MONSERRAT, ERNESTO NAZARENO"
Cuit	2078568578
IdTipoDocumento	"LE"
NumeroDocumento	7856857
FechaNacimiento	"1950-03-02T00:00:00"
IdSexo	"M"
IdEstadoCivil	"C"
Calle	null
NumeroCalle	null
Localidad	"CORDOBA CAPITAL"
IdDepartamento	null
IdProvincia	null
IdPais	null
FechaIngreso	null
FechaEgreso	null
TieneTrabajo	null
TieneAuto	null
TieneCasa	null
CreditoMaximo	null
Mail	null
Clave	null
IdUsuario	null
91	
IdCliente	94
Nombre	"CEBALLOS, ETELVINA  SEFERINA"
Cuit	2711501864
IdTipoDocumento	"LE"
NumeroDocumento	1150186
FechaNacimiento	"1942-01-09T00:00:00"
IdSexo	"F"
IdEstadoCivil	"S"
Calle	null
NumeroCalle	null
Localidad	"CORDOBA CAPITAL"
IdDepartamento	null
IdProvincia	null
IdPais	null
FechaIngreso	null
FechaEgreso	null
TieneTrabajo	null
TieneAuto	null
TieneCasa	null
CreditoMaximo	null
Mail	null
Clave	null
IdUsuario	null
92	
IdCliente	95
Nombre	"SOSA, FELIX ENRIQUE"
Cuit	2066919049
IdTipoDocumento	"PSP"
NumeroDocumento	6691904
FechaNacimiento	"1942-03-01T00:00:00"
IdSexo	"M"
IdEstadoCivil	"Z"
Calle	null
NumeroCalle	null
Localidad	"CORDOBA CAPITAL"
IdDepartamento	null
IdProvincia	null
IdPais	null
FechaIngreso	null
FechaEgreso	null
TieneTrabajo	null
TieneAuto	null
TieneCasa	null
CreditoMaximo	null
Mail	null
Clave	null
IdUsuario	null
93	
IdCliente	96
Nombre	"CARRIZO, CLARA ROSA"
Cuit	2732177749
IdTipoDocumento	"DNI"
NumeroDocumento	3217774
FechaNacimiento	"1935-03-15T00:00:00"
IdSexo	"F"
IdEstadoCivil	"Z"
Calle	null
NumeroCalle	null
Localidad	"DEAN FUNES"
IdDepartamento	null
IdProvincia	null
IdPais	null
FechaIngreso	null
FechaEgreso	null
TieneTrabajo	null
TieneAuto	null
TieneCasa	null
CreditoMaximo	null
Mail	null
Clave	null
IdUsuario	null
94	
IdCliente	97
Nombre	"ROSS, LETICIA"
Cuit	2146261743
IdTipoDocumento	"DNI"
NumeroDocumento	14626174
FechaNacimiento	"1961-09-12T00:00:00"
IdSexo	"F"
IdEstadoCivil	"Z"
Calle	null
NumeroCalle	null
Localidad	"CORDOBA CAPITAL"
IdDepartamento	null
IdProvincia	null
IdPais	null
FechaIngreso	null
FechaEgreso	null
TieneTrabajo	null
TieneAuto	null
TieneCasa	null
CreditoMaximo	null
Mail	null
Clave	null
IdUsuario	null
95	
IdCliente	98
Nombre	"OLMOS, RAMONA"
Cuit	2749745597
IdTipoDocumento	"DNI"
NumeroDocumento	4974559
FechaNacimiento	"1946-01-31T00:00:00"
IdSexo	"F"
IdEstadoCivil	"Z"
Calle	null
NumeroCalle	null
Localidad	"CORDOBA CAPITAL"
IdDepartamento	null
IdProvincia	null
IdPais	null
FechaIngreso	null
FechaEgreso	null
TieneTrabajo	null
TieneAuto	null
TieneCasa	null
CreditoMaximo	null
Mail	null
Clave	null
IdUsuario	null
96	
IdCliente	99
Nombre	"BANCHI, MARIA DEL CARMEN"
Cuit	2758817584
IdTipoDocumento	"DNI"
NumeroDocumento	5881758
FechaNacimiento	"1949-02-21T00:00:00"
IdSexo	"F"
IdEstadoCivil	"Z"
Calle	null
NumeroCalle	null
Localidad	"CORDOBA CAPITAL"
IdDepartamento	null
IdProvincia	null
IdPais	null
FechaIngreso	null
FechaEgreso	null
TieneTrabajo	null
TieneAuto	null
TieneCasa	null
CreditoMaximo	null
Mail	null
Clave	null
IdUsuario	null
97	
IdCliente	100
Nombre	"YONSON, ROBERTO ENRIQUE"
Cuit	2067546122
IdTipoDocumento	"DNI"
NumeroDocumento	6754612
FechaNacimiento	"1935-02-18T00:00:00"
IdSexo	"M"
IdEstadoCivil	"S"
Calle	null
NumeroCalle	null
Localidad	"CORDOBA CAPITAL"
IdDepartamento	null
IdProvincia	null
IdPais	null
FechaIngreso	null
FechaEgreso	null
TieneTrabajo	null
TieneAuto	null
TieneCasa	null
CreditoMaximo	null
Mail	null
Clave	null
IdUsuario	null
98	
IdCliente	101
Nombre	"CORREA, MARIA ISABEL"
Cuit	2766798718
IdTipoDocumento	"DNI"
NumeroDocumento	6679871
FechaNacimiento	"1950-11-15T00:00:00"
IdSexo	"F"
IdEstadoCivil	"S"
Calle	null
NumeroCalle	null
Localidad	"CORDOBA CAPITAL"
IdDepartamento	null
IdProvincia	null
IdPais	null
FechaIngreso	null
FechaEgreso	null
TieneTrabajo	null
TieneAuto	null
TieneCasa	null
CreditoMaximo	null
Mail	null
Clave	null
IdUsuario	null
99	
IdCliente	102
Nombre	"VERGARA, HUGO HENRIQUE"
Cuit	2079896781
IdTipoDocumento	"DNI"
NumeroDocumento	7989678
FechaNacimiento	"1946-07-10T00:00:00"
IdSexo	"M"
IdEstadoCivil	"C"
Calle	null
NumeroCalle	null
Localidad	"CORDOBA CAPITAL"
IdDepartamento	null
IdProvincia	null
IdPais	null
FechaIngreso	null
FechaEgreso	null
TieneTrabajo	null
TieneAuto	null
TieneCasa	null
CreditoMaximo	null
Mail	null
Clave	null
IdUsuario	null
100	
IdCliente	103
Nombre	"ROCHA, CARMEN ILDA"
Cuit	2724532807
IdTipoDocumento	"CF"
NumeroDocumento	2453280
FechaNacimiento	"1937-10-11T00:00:00"
IdSexo	"F"
IdEstadoCivil	"Z"
Calle	null
NumeroCalle	null
Localidad	"CORDOBA CAPITAL"
IdDepartamento	null
IdProvincia	null
IdPais	null
FechaIngreso	null
FechaEgreso	null
TieneTrabajo	null
TieneAuto	null
TieneCasa	null
CreditoMaximo	null
Mail	null
Clave	null
IdUsuario	null
101	
IdCliente	104
Nombre	"SANCHEZ, RINA"
Cuit	2760625951
IdTipoDocumento	"CF"
NumeroDocumento	6062595
FechaNacimiento	"1948-07-25T00:00:00"
IdSexo	"F"
IdEstadoCivil	"S"
Calle	null
NumeroCalle	null
Localidad	"CORDOBA CAPITAL"
IdDepartamento	null
IdProvincia	null
IdPais	null
FechaIngreso	null
FechaEgreso	null
TieneTrabajo	null
TieneAuto	null
TieneCasa	null
CreditoMaximo	null
Mail	null
Clave	null
IdUsuario	null
102	
IdCliente	105
Nombre	"SISTERNA, ANTONIO RAMON"
Cuit	2065091381
IdTipoDocumento	"CF"
NumeroDocumento	6509138
FechaNacimiento	"1939-08-14T00:00:00"
IdSexo	"M"
IdEstadoCivil	"S"
Calle	null
NumeroCalle	null
Localidad	"CORDOBA CAPITAL"
IdDepartamento	null
IdProvincia	null
IdPais	null
FechaIngreso	null
FechaEgreso	null
TieneTrabajo	null
TieneAuto	null
TieneCasa	null
CreditoMaximo	null
Mail	null
Clave	null
IdUsuario	null
103	
IdCliente	106
Nombre	"BENENCIO, TERESA BEATRIZ"
Cuit	2762571530
IdTipoDocumento	"CP"
NumeroDocumento	6257153
FechaNacimiento	"1950-01-06T00:00:00"
IdSexo	"F"
IdEstadoCivil	"Z"
Calle	null
NumeroCalle	null
Localidad	"CORDOBA CAPITAL"
IdDepartamento	null
IdProvincia	null
IdPais	null
FechaIngreso	null
FechaEgreso	null
TieneTrabajo	null
TieneAuto	null
TieneCasa	null
CreditoMaximo	null
Mail	null
Clave	null
IdUsuario	null
104	
IdCliente	107
Nombre	"FLORES, CARLOS MARTIN"
Cuit	2079453081
IdTipoDocumento	"CP"
NumeroDocumento	7945308
FechaNacimiento	"1945-09-17T00:00:00"
IdSexo	"M"
IdEstadoCivil	"C"
Calle	null
NumeroCalle	null
Localidad	"CORDOBA CAPITAL"
IdDepartamento	null
IdProvincia	null
IdPais	null
FechaIngreso	null
FechaEgreso	null
TieneTrabajo	null
TieneAuto	null
TieneCasa	null
CreditoMaximo	null
Mail	null
Clave	null
IdUsuario	null
105	
IdCliente	108
Nombre	"HINNI, MARGARITA MARIA"
Cuit	2763943997
IdTipoDocumento	"CP"
NumeroDocumento	6394399
FechaNacimiento	"1951-01-15T00:00:00"
IdSexo	"F"
IdEstadoCivil	"Z"
Calle	null
NumeroCalle	null
Localidad	"CORDOBA CAPITAL"
IdDepartamento	null
IdProvincia	null
IdPais	null
FechaIngreso	null
FechaEgreso	null
TieneTrabajo	null
TieneAuto	null
TieneCasa	null
CreditoMaximo	null
Mail	null
Clave	null
IdUsuario	null
106	
IdCliente	109
Nombre	"RODRIGUEZ, ROGELIO MANUEL"
Cuit	2066093825
IdTipoDocumento	"LE"
NumeroDocumento	6609382
FechaNacimiento	"1947-04-30T00:00:00"
IdSexo	"M"
IdEstadoCivil	"Z"
Calle	null
NumeroCalle	null
Localidad	"CORDOBA CAPITAL"
IdDepartamento	null
IdProvincia	null
IdPais	null
FechaIngreso	null
FechaEgreso	null
TieneTrabajo	null
TieneAuto	null
TieneCasa	null
CreditoMaximo	null
Mail	null
Clave	null
IdUsuario	null
107	
IdCliente	110
Nombre	"MERLO, LEOPOLDO ARGENTINO"
Cuit	2079925897
IdTipoDocumento	"LE"
NumeroDocumento	7992589
FechaNacimiento	"1946-10-25T00:00:00"
IdSexo	"M"
IdEstadoCivil	"S"
Calle	null
NumeroCalle	null
Localidad	"CORDOBA CAPITAL"
IdDepartamento	null
IdProvincia	null
IdPais	null
FechaIngreso	null
FechaEgreso	null
TieneTrabajo	null
TieneAuto	null
TieneCasa	null
CreditoMaximo	null
Mail	null
Clave	null
IdUsuario	null
108	
IdCliente	111
Nombre	"MONGE, TRANSITO ELVIO"
Cuit	2779642649
IdTipoDocumento	"PSP"
NumeroDocumento	7964264
FechaNacimiento	"1941-08-15T00:00:00"
IdSexo	"M"
IdEstadoCivil	"C"
Calle	null
NumeroCalle	null
Localidad	"CORDOBA CAPITAL"
IdDepartamento	null
IdProvincia	null
IdPais	null
FechaIngreso	null
FechaEgreso	null
TieneTrabajo	null
TieneAuto	null
TieneCasa	null
CreditoMaximo	null
Mail	null
Clave	null
IdUsuario	null
109	
IdCliente	112
Nombre	"CUELLO, LUIS EDUARDO"
Cuit	2066078974
IdTipoDocumento	"DNI"
NumeroDocumento	6607897
FechaNacimiento	"1946-11-11T00:00:00"
IdSexo	"M"
IdEstadoCivil	"Z"
Calle	null
NumeroCalle	null
Localidad	"CORDOBA CAPITAL"
IdDepartamento	null
IdProvincia	null
IdPais	null
FechaIngreso	null
FechaEgreso	null
TieneTrabajo	null
TieneAuto	null
TieneCasa	null
CreditoMaximo	null
Mail	null
Clave	null
IdUsuario	null
110	
IdCliente	113
Nombre	"GUZMAN, ALFONSO"
Cuit	2079822478
IdTipoDocumento	"DNI"
NumeroDocumento	7982247
FechaNacimiento	"1945-04-02T00:00:00"
IdSexo	"M"
IdEstadoCivil	"C"
Calle	null
NumeroCalle	null
Localidad	"CORDOBA CAPITAL"
IdDepartamento	null
IdProvincia	null
IdPais	null
FechaIngreso	null
FechaEgreso	null
TieneTrabajo	null
TieneAuto	null
TieneCasa	null
CreditoMaximo	null
Mail	null
Clave	null
IdUsuario	null
111	
IdCliente	114
Nombre	"JUHEL, JERONIMO ADRIAN"
Cuit	2064892135
IdTipoDocumento	"DNI"
NumeroDocumento	6489213
FechaNacimiento	"1934-09-30T00:00:00"
IdSexo	"M"
IdEstadoCivil	"Z"
Calle	null
NumeroCalle	null
Localidad	"CORDOBA CAPITAL"
IdDepartamento	null
IdProvincia	null
IdPais	null
FechaIngreso	null
FechaEgreso	null
TieneTrabajo	null
TieneAuto	null
TieneCasa	null
CreditoMaximo	null
Mail	null
Clave	null
IdUsuario	null
112	
IdCliente	115
Nombre	"MONJE, CARLOS HUGO"
Cuit	2079609847
IdTipoDocumento	"DNI"
NumeroDocumento	7960984
FechaNacimiento	"1949-01-11T00:00:00"
IdSexo	"M"
IdEstadoCivil	"Z"
Calle	null
NumeroCalle	null
Localidad	"VILLA ALLENDE"
IdDepartamento	null
IdProvincia	null
IdPais	null
FechaIngreso	null
FechaEgreso	null
TieneTrabajo	null
TieneAuto	null
TieneCasa	null
CreditoMaximo	null
Mail	null
Clave	null
IdUsuario	null
113	
IdCliente	116
Nombre	"SALOME, MARIA M"
Cuit	2750082879
IdTipoDocumento	"DNI"
NumeroDocumento	5008287
FechaNacimiento	"1944-12-05T00:00:00"
IdSexo	"F"
IdEstadoCivil	"Z"
Calle	null
NumeroCalle	null
Localidad	"CORDOBA CAPITAL"
IdDepartamento	null
IdProvincia	null
IdPais	null
FechaIngreso	null
FechaEgreso	null
TieneTrabajo	null
TieneAuto	null
TieneCasa	null
CreditoMaximo	null
Mail	null
Clave	null
IdUsuario	null
114	
IdCliente	117
Nombre	"PUGLIAFITO, BENEDICTA"
Cuit	2737340354
IdTipoDocumento	"DNI"
NumeroDocumento	3734035
FechaNacimiento	"1938-04-05T00:00:00"
IdSexo	"F"
IdEstadoCivil	"Z"
Calle	null
NumeroCalle	null
Localidad	"CORDOBA CAPITAL"
IdDepartamento	null
IdProvincia	null
IdPais	null
FechaIngreso	null
FechaEgreso	null
TieneTrabajo	null
TieneAuto	null
TieneCasa	null
CreditoMaximo	null
Mail	null
Clave	null
IdUsuario	null
115	
IdCliente	118
Nombre	"NUÑEZ, REBECA  INES"
Cuit	2782721568
IdTipoDocumento	"DNI"
NumeroDocumento	28272156
FechaNacimiento	"1980-08-21T00:00:00"
IdSexo	"F"
IdEstadoCivil	"Z"
Calle	null
NumeroCalle	null
Localidad	"SIN ASIGNAR"
IdDepartamento	null
IdProvincia	null
IdPais	null
FechaIngreso	null
FechaEgreso	null
TieneTrabajo	null
TieneAuto	null
TieneCasa	null
CreditoMaximo	null
Mail	null
Clave	null
IdUsuario	null
116	
IdCliente	119
Nombre	"CAMINO, ELIO PEDRO"
Cuit	2063906132
IdTipoDocumento	"CF"
NumeroDocumento	6390613
FechaNacimiento	"1942-01-28T00:00:00"
IdSexo	"M"
IdEstadoCivil	"Z"
Calle	null
NumeroCalle	null
Localidad	"SIN ASIGNAR"
IdDepartamento	null
IdProvincia	null
IdPais	null
FechaIngreso	null
FechaEgreso	null
TieneTrabajo	null
TieneAuto	null
TieneCasa	null
CreditoMaximo	null
Mail	null
Clave	null
IdUsuario	null
117	
IdCliente	120
Nombre	"VILLARREAL, MERCEDES EULOGIA"
Cuit	2746376302
IdTipoDocumento	"CF"
NumeroDocumento	4637630
FechaNacimiento	"1943-09-11T00:00:00"
IdSexo	"F"
IdEstadoCivil	"S"
Calle	null
NumeroCalle	null
Localidad	"CORDOBA CAPITAL"
IdDepartamento	null
IdProvincia	null
IdPais	null
FechaIngreso	null
FechaEgreso	null
TieneTrabajo	null
TieneAuto	null
TieneCasa	null
CreditoMaximo	null
Mail	null
Clave	null
IdUsuario	null
118	
IdCliente	121
Nombre	"MURUA, NORMA FELIPA"
Cuit	2756984009
IdTipoDocumento	"CF"
NumeroDocumento	5698400
FechaNacimiento	"1948-02-17T00:00:00"
IdSexo	"F"
IdEstadoCivil	"Z"
Calle	null
NumeroCalle	null
Localidad	"CORDOBA CAPITAL"
IdDepartamento	null
IdProvincia	null
IdPais	null
FechaIngreso	null
FechaEgreso	null
TieneTrabajo	null
TieneAuto	null
TieneCasa	null
CreditoMaximo	null
Mail	null
Clave	null
IdUsuario	null
119	
IdCliente	122
Nombre	"ROJAS, LUCIA ROSA"
Cuit	2754314863
IdTipoDocumento	"CP"
NumeroDocumento	5431486
FechaNacimiento	"1945-11-13T00:00:00"
IdSexo	"F"
IdEstadoCivil	"Z"
Calle	null
NumeroCalle	null
Localidad	"CORDOBA CAPITAL"
IdDepartamento	null
IdProvincia	null
IdPais	null
FechaIngreso	null
FechaEgreso	null
TieneTrabajo	null
TieneAuto	null
TieneCasa	null
CreditoMaximo	null
Mail	null
Clave	null
IdUsuario	null
120	
IdCliente	123
Nombre	"BULACIO, MARTA ADELMA"
Cuit	2742614357
IdTipoDocumento	"CP"
NumeroDocumento	4261435
FechaNacimiento	"1941-07-22T00:00:00"
IdSexo	"F"
IdEstadoCivil	"Z"
Calle	null
NumeroCalle	null
Localidad	"CORDOBA CAPITAL"
IdDepartamento	null
IdProvincia	null
IdPais	null
FechaIngreso	null
FechaEgreso	null
TieneTrabajo	null
TieneAuto	null
TieneCasa	null
CreditoMaximo	null
Mail	null
Clave	null
IdUsuario	null
121	
IdCliente	124
Nombre	"LOPEZ, JOSE VITALINO"
Cuit	2079668347
IdTipoDocumento	"CP"
NumeroDocumento	7966834
FechaNacimiento	"1941-09-20T00:00:00"
IdSexo	"M"
IdEstadoCivil	"Z"
Calle	null
NumeroCalle	null
Localidad	"SIN ASIGNAR"
IdDepartamento	null
IdProvincia	null
IdPais	null
FechaIngreso	null
FechaEgreso	null
TieneTrabajo	null
TieneAuto	null
TieneCasa	null
CreditoMaximo	null
Mail	null
Clave	null
IdUsuario	null
122	
IdCliente	125
Nombre	"PALMA, GLADYS MAGDALENA"
Cuit	2763976585
IdTipoDocumento	"LE"
NumeroDocumento	6397658
FechaNacimiento	"1950-08-11T00:00:00"
IdSexo	"F"
IdEstadoCivil	"Z"
Calle	null
NumeroCalle	null
Localidad	"SIN ASIGNAR"
IdDepartamento	null
IdProvincia	null
IdPais	null
FechaIngreso	null
FechaEgreso	null
TieneTrabajo	null
TieneAuto	null
TieneCasa	null
CreditoMaximo	null
Mail	null
Clave	null
IdUsuario	null
123	
IdCliente	126
Nombre	"MOLINA, RUMUALDA MERCEDES"
Cuit	2752837990
IdTipoDocumento	"LE"
NumeroDocumento	5283799
FechaNacimiento	"1946-02-05T00:00:00"
IdSexo	"F"
IdEstadoCivil	"S"
Calle	null
NumeroCalle	null
Localidad	"CORDOBA CAPITAL"
IdDepartamento	null
IdProvincia	null
IdPais	null
FechaIngreso	null
FechaEgreso	null
TieneTrabajo	null
TieneAuto	null
TieneCasa	null
CreditoMaximo	null
Mail	null
Clave	null
IdUsuario	null
124	
IdCliente	127
Nombre	"MOYA, AMELIA"
Cuit	2752795120
IdTipoDocumento	"PSP"
NumeroDocumento	5279512
FechaNacimiento	"1945-10-12T00:00:00"
IdSexo	"F"
IdEstadoCivil	"S"
Calle	null
NumeroCalle	null
Localidad	"CORDOBA CAPITAL"
IdDepartamento	null
IdProvincia	null
IdPais	null
FechaIngreso	null
FechaEgreso	null
TieneTrabajo	null
TieneAuto	null
TieneCasa	null
CreditoMaximo	null
Mail	null
Clave	null
IdUsuario	null
125	
IdCliente	128
Nombre	"SORIA, MANUEL S"
Cuit	2064447980
IdTipoDocumento	"DNI"
NumeroDocumento	6444798
FechaNacimiento	"1946-06-20T00:00:00"
IdSexo	"M"
IdEstadoCivil	"Z"
Calle	null
NumeroCalle	null
Localidad	"CORDOBA CAPITAL"
IdDepartamento	null
IdProvincia	null
IdPais	null
FechaIngreso	null
FechaEgreso	null
TieneTrabajo	null
TieneAuto	null
TieneCasa	null
CreditoMaximo	null
Mail	null
Clave	null
IdUsuario	null
126	
IdCliente	129
Nombre	"FIGUEROA, ANA DEL VALLE"
Cuit	2757200494
IdTipoDocumento	"DNI"
NumeroDocumento	5720049
FechaNacimiento	"1948-06-13T00:00:00"
IdSexo	"F"
IdEstadoCivil	"Z"
Calle	null
NumeroCalle	null
Localidad	"CORDOBA CAPITAL"
IdDepartamento	null
IdProvincia	null
IdPais	null
FechaIngreso	null
FechaEgreso	null
TieneTrabajo	null
TieneAuto	null
TieneCasa	null
CreditoMaximo	null
Mail	null
Clave	null
IdUsuario	null
127	
IdCliente	130
Nombre	"CORVALAN, TOMAS DE LA CRUZ"
Cuit	2081793310
IdTipoDocumento	"DNI"
NumeroDocumento	8179331
FechaNacimiento	"1946-12-28T00:00:00"
IdSexo	"M"
IdEstadoCivil	"Z"
Calle	null
NumeroCalle	null
Localidad	"CORDOBA CAPITAL"
IdDepartamento	null
IdProvincia	null
IdPais	null
FechaIngreso	null
FechaEgreso	null
TieneTrabajo	null
TieneAuto	null
TieneCasa	null
CreditoMaximo	null
Mail	null
Clave	null
IdUsuario	null
128	
IdCliente	131
Nombre	"BUSTO, FRANCISCA NILDA"
Cuit	2760255364
IdTipoDocumento	"DNI"
NumeroDocumento	6025536
FechaNacimiento	"1949-10-07T00:00:00"
IdSexo	"F"
IdEstadoCivil	"S"
Calle	null
NumeroCalle	null
Localidad	"CORDOBA CAPITAL"
IdDepartamento	null
IdProvincia	null
IdPais	null
FechaIngreso	null
FechaEgreso	null
TieneTrabajo	null
TieneAuto	null
TieneCasa	null
CreditoMaximo	null
Mail	null
Clave	null
IdUsuario	null
129	
IdCliente	132
Nombre	"SARMIENTO, MARGARITA DEL MILAGRO"
Cuit	2752581864
IdTipoDocumento	"DNI"
NumeroDocumento	5258186
FechaNacimiento	"1945-10-07T00:00:00"
IdSexo	"F"
IdEstadoCivil	"Z"
Calle	null
NumeroCalle	null
Localidad	"SIN ASIGNAR"
IdDepartamento	null
IdProvincia	null
IdPais	null
FechaIngreso	null
FechaEgreso	null
TieneTrabajo	null
TieneAuto	null
TieneCasa	null
CreditoMaximo	null
Mail	null
Clave	null
IdUsuario	null
130	
IdCliente	133
Nombre	"GALINDEZ, OSCAR"
Cuit	2065079411
IdTipoDocumento	"DNI"
NumeroDocumento	6507941
FechaNacimiento	"1938-08-17T00:00:00"
IdSexo	"M"
IdEstadoCivil	"Z"
Calle	null
NumeroCalle	null
Localidad	"CORDOBA CAPITAL"
IdDepartamento	null
IdProvincia	null
IdPais	null
FechaIngreso	null
FechaEgreso	null
TieneTrabajo	null
TieneAuto	null
TieneCasa	null
CreditoMaximo	null
Mail	null
Clave	null
IdUsuario	null
131	
IdCliente	134
Nombre	"SCAMPONE, ALEJANDRO PLACIDO"
Cuit	2077989731
IdTipoDocumento	"DNI"
NumeroDocumento	7798973
FechaNacimiento	"1949-05-27T00:00:00"
IdSexo	"M"
IdEstadoCivil	"S"
Calle	null
NumeroCalle	null
Localidad	"CORDOBA CAPITAL"
IdDepartamento	null
IdProvincia	null
IdPais	null
FechaIngreso	null
FechaEgreso	null
TieneTrabajo	null
TieneAuto	null
TieneCasa	null
CreditoMaximo	null
Mail	null
Clave	null
IdUsuario	null
132	
IdCliente	135
Nombre	"FERNANDEZ, CARMEN ANIBAL"
Cuit	2064383028
IdTipoDocumento	"CF"
NumeroDocumento	6438302
FechaNacimiento	"1943-11-14T00:00:00"
IdSexo	"M"
IdEstadoCivil	"C"
Calle	null
NumeroCalle	null
Localidad	"SIN ASIGNAR"
IdDepartamento	null
IdProvincia	null
IdPais	null
FechaIngreso	null
FechaEgreso	null
TieneTrabajo	null
TieneAuto	null
TieneCasa	null
CreditoMaximo	null
Mail	null
Clave	null
IdUsuario	null
133	
IdCliente	136
Nombre	"NIETO, ANGEL ANTONIO"
Cuit	2066991459
IdTipoDocumento	"CF"
NumeroDocumento	6699145
FechaNacimiento	"1944-01-22T00:00:00"
IdSexo	"M"
IdEstadoCivil	"Z"
Calle	null
NumeroCalle	null
Localidad	"CORDOBA CAPITAL"
IdDepartamento	null
IdProvincia	null
IdPais	null
FechaIngreso	null
FechaEgreso	null
TieneTrabajo	null
TieneAuto	null
TieneCasa	null
CreditoMaximo	null
Mail	null
Clave	null
IdUsuario	null
134	
IdCliente	137
Nombre	"VIGNOLA, RUBEN BENITO"
Cuit	2064315928
IdTipoDocumento	"CF"
NumeroDocumento	6431592
FechaNacimiento	"1941-01-12T00:00:00"
IdSexo	"M"
IdEstadoCivil	"Z"
Calle	null
NumeroCalle	null
Localidad	"SAN FRANCISCO"
IdDepartamento	null
IdProvincia	null
IdPais	null
FechaIngreso	null
FechaEgreso	null
TieneTrabajo	null
TieneAuto	null
TieneCasa	null
CreditoMaximo	null
Mail	null
Clave	null
IdUsuario	null
135	
IdCliente	138
Nombre	"ACHERVI, MIGUEL ANGEL"
Cuit	2064435540
IdTipoDocumento	"CP"
NumeroDocumento	6443554
FechaNacimiento	"1946-03-08T00:00:00"
IdSexo	"M"
IdEstadoCivil	"Z"
Calle	null
NumeroCalle	null
Localidad	"SAN FRANCISCO"
IdDepartamento	null
IdProvincia	null
IdPais	null
FechaIngreso	null
FechaEgreso	null
TieneTrabajo	null
TieneAuto	null
TieneCasa	null
CreditoMaximo	null
Mail	null
Clave	null
IdUsuario	null
136	
IdCliente	139
Nombre	"LENCINAS, CARLOS ALBERTO"
Cuit	2064288122
IdTipoDocumento	"CP"
NumeroDocumento	6428812
FechaNacimiento	"1939-08-29T00:00:00"
IdSexo	"M"
IdEstadoCivil	"Z"
Calle	null
NumeroCalle	null
Localidad	"SAN FRANCISCO"
IdDepartamento	null
IdProvincia	null
IdPais	null
FechaIngreso	null
FechaEgreso	null
TieneTrabajo	null
TieneAuto	null
TieneCasa	null
CreditoMaximo	null
Mail	null
Clave	null
IdUsuario	null
137	
IdCliente	140
Nombre	"NADALIN, OTILIO JOSE"
Cuit	2064260325
IdTipoDocumento	"CP"
NumeroDocumento	6426032
FechaNacimiento	"1938-08-02T00:00:00"
IdSexo	"M"
IdEstadoCivil	"C"
Calle	null
NumeroCalle	null
Localidad	"MARULL"
IdDepartamento	null
IdProvincia	null
IdPais	null
FechaIngreso	null
FechaEgreso	null
TieneTrabajo	null
TieneAuto	null
TieneCasa	null
CreditoMaximo	null
Mail	null
Clave	null
IdUsuario	null
138	
IdCliente	141
Nombre	"MOYANO, RAUL ANTONIO"
Cuit	2364345559
IdTipoDocumento	"LE"
NumeroDocumento	6434555
FechaNacimiento	"1942-04-03T00:00:00"
IdSexo	"M"
IdEstadoCivil	"S"
Calle	null
NumeroCalle	null
Localidad	"SAN FRANCISCO"
IdDepartamento	null
IdProvincia	null
IdPais	null
FechaIngreso	null
FechaEgreso	null
TieneTrabajo	null
TieneAuto	null
TieneCasa	null
CreditoMaximo	null
Mail	null
Clave	null
IdUsuario	null
139	
IdCliente	142
Nombre	"MOYANO, LINA MARGARITA"
Cuit	2787853948
IdTipoDocumento	"LE"
NumeroDocumento	8785394
FechaNacimiento	"1939-12-10T00:00:00"
IdSexo	"F"
IdEstadoCivil	"Z"
Calle	null
NumeroCalle	null
Localidad	"CORDOBA CAPITAL"
IdDepartamento	null
IdProvincia	null
IdPais	null
FechaIngreso	null
FechaEgreso	null
TieneTrabajo	null
TieneAuto	null
TieneCasa	null
CreditoMaximo	null
Mail	null
Clave	null
IdUsuario	null
140	
IdCliente	143
Nombre	"ABRATE, VICENTE BARTOLO"
Cuit	2064246667
IdTipoDocumento	"PSP"
NumeroDocumento	6424666
FechaNacimiento	"1937-08-10T00:00:00"
IdSexo	"M"
IdEstadoCivil	"Z"
Calle	null
NumeroCalle	null
Localidad	"CORDOBA CAPITAL"
IdDepartamento	null
IdProvincia	null
IdPais	null
FechaIngreso	null
FechaEgreso	null
TieneTrabajo	null
TieneAuto	null
TieneCasa	null
CreditoMaximo	null
Mail	null
Clave	null
IdUsuario	null
141	
IdCliente	144
Nombre	"GOMEZ, JUAN CARLOS"
Cuit	2079438686
IdTipoDocumento	"DNI"
NumeroDocumento	7943868
FechaNacimiento	"1945-03-03T00:00:00"
IdSexo	"M"
IdEstadoCivil	"Z"
Calle	null
NumeroCalle	null
Localidad	"SAN FRANCISCO"
IdDepartamento	null
IdProvincia	null
IdPais	null
FechaIngreso	null
FechaEgreso	null
TieneTrabajo	null
TieneAuto	null
TieneCasa	null
CreditoMaximo	null
Mail	null
Clave	null
IdUsuario	null
142	
IdCliente	145
Nombre	"HEREDIA, SARA ANTONIA"
Cuit	2737567715
IdTipoDocumento	"DNI"
NumeroDocumento	3756771
FechaNacimiento	"1938-08-10T00:00:00"
IdSexo	"F"
IdEstadoCivil	"S"
Calle	null
NumeroCalle	null
Localidad	"CORDOBA CAPITAL"
IdDepartamento	null
IdProvincia	null
IdPais	null
FechaIngreso	null
FechaEgreso	null
TieneTrabajo	null
TieneAuto	null
TieneCasa	null
CreditoMaximo	null
Mail	null
Clave	null
IdUsuario	null
143	
IdCliente	146
Nombre	"CONTRERAS, NORMA BEATRIZ"
Cuit	2207851277
IdTipoDocumento	"DNI"
NumeroDocumento	20785127
FechaNacimiento	"1969-08-08T00:00:00"
IdSexo	"F"
IdEstadoCivil	"S"
Calle	null
NumeroCalle	null
Localidad	"CORDOBA CAPITAL"
IdDepartamento	null
IdProvincia	null
IdPais	null
FechaIngreso	null
FechaEgreso	null
TieneTrabajo	null
TieneAuto	null
TieneCasa	null
CreditoMaximo	null
Mail	null
Clave	null
IdUsuario	null
144	
IdCliente	147
Nombre	"ORTEGA, JESUS"
Cuit	2084107574
IdTipoDocumento	"DNI"
NumeroDocumento	8410757
FechaNacimiento	"1948-12-25T00:00:00"
IdSexo	"M"
IdEstadoCivil	"Z"
Calle	null
NumeroCalle	null
Localidad	"CORDOBA CAPITAL"
IdDepartamento	null
IdProvincia	null
IdPais	null
FechaIngreso	null
FechaEgreso	null
TieneTrabajo	null
TieneAuto	null
TieneCasa	null
CreditoMaximo	null
Mail	null
Clave	null
IdUsuario	null
145	
IdCliente	148
Nombre	"DOMINGUEZ, AURORA"
Cuit	2759797633
IdTipoDocumento	"DNI"
NumeroDocumento	5979763
FechaNacimiento	"1949-12-21T00:00:00"
IdSexo	"F"
IdEstadoCivil	"C"
Calle	null
NumeroCalle	null
Localidad	"CORDOBA CAPITAL"
IdDepartamento	null
IdProvincia	null
IdPais	null
FechaIngreso	null
FechaEgreso	null
TieneTrabajo	null
TieneAuto	null
TieneCasa	null
CreditoMaximo	null
Mail	null
Clave	null
IdUsuario	null
146	
IdCliente	149
Nombre	"SILVESTRE, CRISTINA BARBARIANA"
Cuit	2759959765
IdTipoDocumento	"DNI"
NumeroDocumento	5995976
FechaNacimiento	"1949-06-25T00:00:00"
IdSexo	"F"
IdEstadoCivil	"Z"
Calle	null
NumeroCalle	null
Localidad	"CORDOBA CAPITAL"
IdDepartamento	null
IdProvincia	null
IdPais	null
FechaIngreso	null
FechaEgreso	null
TieneTrabajo	null
TieneAuto	null
TieneCasa	null
CreditoMaximo	null
Mail	null
Clave	null
IdUsuario	null
147	
IdCliente	150
Nombre	"SANTOS, ESTELA ELVIRA"
Cuit	2754523381
IdTipoDocumento	"DNI"
NumeroDocumento	5452338
FechaNacimiento	"1946-10-11T00:00:00"
IdSexo	"F"
IdEstadoCivil	"Z"
Calle	null
NumeroCalle	null
Localidad	"CORDOBA CAPITAL"
IdDepartamento	null
IdProvincia	null
IdPais	null
FechaIngreso	null
FechaEgreso	null
TieneTrabajo	null
TieneAuto	null
TieneCasa	null
CreditoMaximo	null
Mail	null
Clave	null
IdUsuario	null
148	
IdCliente	151
Nombre	"BARRIONUEVO, AIDA NORA"
Cuit	2756285322
IdTipoDocumento	"CF"
NumeroDocumento	5628532
FechaNacimiento	"1948-01-01T00:00:00"
IdSexo	"F"
IdEstadoCivil	"S"
Calle	null
NumeroCalle	null
Localidad	"CORDOBA CAPITAL"
IdDepartamento	null
IdProvincia	null
IdPais	null
FechaIngreso	null
FechaEgreso	null
TieneTrabajo	null
TieneAuto	null
TieneCasa	null
CreditoMaximo	null
Mail	null
Clave	null
IdUsuario	null
149	
IdCliente	152
Nombre	"GUZMAN, RAMONA  ESPERANZA"
Cuit	2761327628
IdTipoDocumento	"CF"
NumeroDocumento	6132762
FechaNacimiento	"1949-11-14T00:00:00"
IdSexo	"F"
IdEstadoCivil	"Z"
Calle	null
NumeroCalle	null
Localidad	"CORDOBA CAPITAL"
IdDepartamento	null
IdProvincia	null
IdPais	null
FechaIngreso	null
FechaEgreso	null
TieneTrabajo	null
TieneAuto	null
TieneCasa	null
CreditoMaximo	null
Mail	null
Clave	null
IdUsuario	null
150	
IdCliente	153
Nombre	"VIDELA, CONSTANCIA"
Cuit	2756981697
IdTipoDocumento	"CF"
NumeroDocumento	5698169
FechaNacimiento	"1947-11-21T00:00:00"
IdSexo	"F"
IdEstadoCivil	"Z"
Calle	null
NumeroCalle	null
Localidad	"CORDOBA CAPITAL"
IdDepartamento	null
IdProvincia	null
IdPais	null
FechaIngreso	null
FechaEgreso	null
TieneTrabajo	null
TieneAuto	null
TieneCasa	null
CreditoMaximo	null
Mail	null
Clave	null
IdUsuario	null
151	
IdCliente	154
Nombre	"CONTRERAS, MIRTA NILDA"
Cuit	2755872282
IdTipoDocumento	"CP"
NumeroDocumento	5587228
FechaNacimiento	"1947-02-08T00:00:00"
IdSexo	"F"
IdEstadoCivil	"S"
Calle	null
NumeroCalle	null
Localidad	"CORDOBA CAPITAL"
IdDepartamento	null
IdProvincia	null
IdPais	null
FechaIngreso	null
FechaEgreso	null
TieneTrabajo	null
TieneAuto	null
TieneCasa	null
CreditoMaximo	null
Mail	null
Clave	null
IdUsuario	null
152	
IdCliente	155
Nombre	"LESCANO, TEODORA ANTONIA"
Cuit	2756890411
IdTipoDocumento	"CP"
NumeroDocumento	5689041
FechaNacimiento	"1948-06-06T00:00:00"
IdSexo	"F"
IdEstadoCivil	"Z"
Calle	null
NumeroCalle	null
Localidad	"SIN ASIGNAR"
IdDepartamento	null
IdProvincia	null
IdPais	null
FechaIngreso	null
FechaEgreso	null
TieneTrabajo	null
TieneAuto	null
TieneCasa	null
CreditoMaximo	null
Mail	null
Clave	null
IdUsuario	null
153	
IdCliente	156
Nombre	"BAIGORRIA, BLANCA ALICIA"
Cuit	2717006867
IdTipoDocumento	"CP"
NumeroDocumento	1700686
FechaNacimiento	"1964-10-25T00:00:00"
IdSexo	"F"
IdEstadoCivil	"Z"
Calle	null
NumeroCalle	null
Localidad	"CORDOBA CAPITAL"
IdDepartamento	null
IdProvincia	null
IdPais	null
FechaIngreso	null
FechaEgreso	null
TieneTrabajo	null
TieneAuto	null
TieneCasa	null
CreditoMaximo	null
Mail	null
Clave	null
IdUsuario	null
154	
IdCliente	157
Nombre	"PERALTA, HILARIA LEONIDES"
Cuit	2344589834
IdTipoDocumento	"LE"
NumeroDocumento	4458983
FechaNacimiento	"1944-01-14T00:00:00"
IdSexo	"F"
IdEstadoCivil	"Z"
Calle	null
NumeroCalle	null
Localidad	"CORDOBA CAPITAL"
IdDepartamento	null
IdProvincia	null
IdPais	null
FechaIngreso	null
FechaEgreso	null
TieneTrabajo	null
TieneAuto	null
TieneCasa	null
CreditoMaximo	null
Mail	null
Clave	null
IdUsuario	null
155	
IdCliente	158
Nombre	"FERREYRA, MARIA INES"
Cuit	2364948504
IdTipoDocumento	"LE"
NumeroDocumento	6494850
FechaNacimiento	"1951-04-01T00:00:00"
IdSexo	"F"
IdEstadoCivil	"Z"
Calle	null
NumeroCalle	null
Localidad	"CORDOBA CAPITAL"
IdDepartamento	null
IdProvincia	null
IdPais	null
FechaIngreso	null
FechaEgreso	null
TieneTrabajo	null
TieneAuto	null
TieneCasa	null
CreditoMaximo	null
Mail	null
Clave	null
IdUsuario	null
156	
IdCliente	159
Nombre	"ROMERO, PETRONA ROSA"
Cuit	2754433951
IdTipoDocumento	"PSP"
NumeroDocumento	5443395
FechaNacimiento	"1947-12-04T00:00:00"
IdSexo	"F"
IdEstadoCivil	"Z"
Calle	null
NumeroCalle	null
Localidad	"QUILINO"
IdDepartamento	null
IdProvincia	null
IdPais	null
FechaIngreso	null
FechaEgreso	null
TieneTrabajo	null
TieneAuto	null
TieneCasa	null
CreditoMaximo	null
Mail	null
Clave	null
IdUsuario	null
157	
IdCliente	160
Nombre	"SANCHEZ, RAMON ESTEBAN"
Cuit	2079572897
IdTipoDocumento	"DNI"
NumeroDocumento	7957289
FechaNacimiento	"1947-02-13T00:00:00"
IdSexo	"M"
IdEstadoCivil	"Z"
Calle	null
NumeroCalle	null
Localidad	"QUILINO"
IdDepartamento	null
IdProvincia	null
IdPais	null
FechaIngreso	null
FechaEgreso	null
TieneTrabajo	null
TieneAuto	null
TieneCasa	null
CreditoMaximo	null
Mail	null
Clave	null
IdUsuario	null
158	
IdCliente	161
Nombre	"DROZCO, RAMONA ELISA"
Cuit	2759565201
IdTipoDocumento	"DNI"
NumeroDocumento	5956520
FechaNacimiento	"1949-12-30T00:00:00"
IdSexo	"F"
IdEstadoCivil	"S"
Calle	null
NumeroCalle	null
Localidad	"VILLA VALERIA"
IdDepartamento	null
IdProvincia	null
IdPais	null
FechaIngreso	null
FechaEgreso	null
TieneTrabajo	null
TieneAuto	null
TieneCasa	null
CreditoMaximo	null
Mail	null
Clave	null
IdUsuario	null
159	
IdCliente	162
Nombre	"SUAREZ, ANGELA LUCRECIA"
Cuit	2762538614
IdTipoDocumento	"DNI"
NumeroDocumento	6253861
FechaNacimiento	"1949-12-18T00:00:00"
IdSexo	"F"
IdEstadoCivil	"Z"
Calle	null
NumeroCalle	null
Localidad	"QUILINO"
IdDepartamento	null
IdProvincia	null
IdPais	null
FechaIngreso	null
FechaEgreso	null
TieneTrabajo	null
TieneAuto	null
TieneCasa	null
CreditoMaximo	null
Mail	null
Clave	null
IdUsuario	null
160	
IdCliente	163
Nombre	"VILLALBA, BENICIA DEOLINDA"
Cuit	2749687600
IdTipoDocumento	"DNI"
NumeroDocumento	4968760
FechaNacimiento	"1945-09-23T00:00:00"
IdSexo	"F"
IdEstadoCivil	"C"
Calle	null
NumeroCalle	null
Localidad	"QUILINO"
IdDepartamento	null
IdProvincia	null
IdPais	null
FechaIngreso	null
FechaEgreso	null
TieneTrabajo	null
TieneAuto	null
TieneCasa	null
CreditoMaximo	null
Mail	null
Clave	null
IdUsuario	null
161	
IdCliente	164
Nombre	"ROTH, MARIA ESTELA"
Cuit	2346687914
IdTipoDocumento	"DNI"
NumeroDocumento	4668791
FechaNacimiento	"1945-11-11T00:00:00"
IdSexo	"F"
IdEstadoCivil	"S"
Calle	null
NumeroCalle	null
Localidad	"SUCO"
IdDepartamento	null
IdProvincia	null
IdPais	null
FechaIngreso	null
FechaEgreso	null
TieneTrabajo	null
TieneAuto	null
TieneCasa	null
CreditoMaximo	null
Mail	null
Clave	null
IdUsuario	null
162	
IdCliente	165
Nombre	"GONZALES, OLGA CRISTINA"
Cuit	2757425852
IdTipoDocumento	"DNI"
NumeroDocumento	5742585
FechaNacimiento	"1948-04-24T00:00:00"
IdSexo	"F"
IdEstadoCivil	"C"
Calle	null
NumeroCalle	null
Localidad	"CRUZ DEL EJE"
IdDepartamento	null
IdProvincia	null
IdPais	null
FechaIngreso	null
FechaEgreso	null
TieneTrabajo	null
TieneAuto	null
TieneCasa	null
CreditoMaximo	null
Mail	null
Clave	null
IdUsuario	null
163	
IdCliente	166
Nombre	"SAINT, GIRONS MIRTA"
Cuit	2747421654
IdTipoDocumento	"DNI"
NumeroDocumento	4742165
FechaNacimiento	"1944-03-08T00:00:00"
IdSexo	"F"
IdEstadoCivil	"C"
Calle	null
NumeroCalle	null
Localidad	"COSQUIN"
IdDepartamento	null
IdProvincia	null
IdPais	null
FechaIngreso	null
FechaEgreso	null
TieneTrabajo	null
TieneAuto	null
TieneCasa	null
CreditoMaximo	null
Mail	null
Clave	null
IdUsuario	null
164	
IdCliente	167
Nombre	"GALLARDO, VALERIA ISABEL"
Cuit	2751786365
IdTipoDocumento	"CF"
NumeroDocumento	5178636
FechaNacimiento	"1946-05-05T00:00:00"
IdSexo	"F"
IdEstadoCivil	"V"
Calle	null
NumeroCalle	null
Localidad	"LUYABA"
IdDepartamento	null
IdProvincia	null
IdPais	null
FechaIngreso	null
FechaEgreso	null
TieneTrabajo	null
TieneAuto	null
TieneCasa	null
CreditoMaximo	null
Mail	null
Clave	null
IdUsuario	null
165	
IdCliente	168
Nombre	"ALVAREZ, AIDA MIRIAN"
Cuit	2363657514
IdTipoDocumento	"CF"
NumeroDocumento	6365751
FechaNacimiento	"1950-08-01T00:00:00"
IdSexo	"F"
IdEstadoCivil	"C"
Calle	null
NumeroCalle	null
Localidad	"CORDOBA CAPITAL"
IdDepartamento	null
IdProvincia	null
IdPais	null
FechaIngreso	null
FechaEgreso	null
TieneTrabajo	null
TieneAuto	null
TieneCasa	null
CreditoMaximo	null
Mail	null
Clave	null
IdUsuario	null
166	
IdCliente	169
Nombre	"ALTAMIRA, YOLANDA NELIDA"
Cuit	2758185073
IdTipoDocumento	"CF"
NumeroDocumento	5818507
FechaNacimiento	"1948-09-30T00:00:00"
IdSexo	"F"
IdEstadoCivil	"S"
Calle	null
NumeroCalle	null
Localidad	"CORDOBA CAPITAL"
IdDepartamento	null
IdProvincia	null
IdPais	null
FechaIngreso	null
FechaEgreso	null
TieneTrabajo	null
TieneAuto	null
TieneCasa	null
CreditoMaximo	null
Mail	null
Clave	null
IdUsuario	null
167	
IdCliente	170
Nombre	"VILLAFAÑE, DAVID CARLOS"
Cuit	2385786709
IdTipoDocumento	"CP"
NumeroDocumento	8578670
FechaNacimiento	"1951-08-09T00:00:00"
IdSexo	"M"
IdEstadoCivil	"S"
Calle	null
NumeroCalle	null
Localidad	"RIO TERCERO"
IdDepartamento	null
IdProvincia	null
IdPais	null
FechaIngreso	null
FechaEgreso	null
TieneTrabajo	null
TieneAuto	null
TieneCasa	null
CreditoMaximo	null
Mail	null
Clave	null
IdUsuario	null
168	
IdCliente	171
Nombre	"PAEZ, MARTINA NILDA"
Cuit	2754618285
IdTipoDocumento	"CP"
NumeroDocumento	5461828
FechaNacimiento	"1947-01-30T00:00:00"
IdSexo	"F"
IdEstadoCivil	"S"
Calle	null
NumeroCalle	null
Localidad	"CORDOBA CAPITAL"
IdDepartamento	null
IdProvincia	null
IdPais	null
FechaIngreso	null
FechaEgreso	null
TieneTrabajo	null
TieneAuto	null
TieneCasa	null
CreditoMaximo	null
Mail	null
Clave	null
IdUsuario	null
169	
IdCliente	172
Nombre	"LAFON, MIGUEL ANGEL"
Cuit	2079924467
IdTipoDocumento	"CP"
NumeroDocumento	7992446
FechaNacimiento	"1946-12-31T00:00:00"
IdSexo	"M"
IdEstadoCivil	"Z"
Calle	null
NumeroCalle	null
Localidad	"CORDOBA CAPITAL"
IdDepartamento	null
IdProvincia	null
IdPais	null
FechaIngreso	null
FechaEgreso	null
TieneTrabajo	null
TieneAuto	null
TieneCasa	null
CreditoMaximo	null
Mail	null
Clave	null
IdUsuario	null
170	
IdCliente	173
Nombre	"ROMERO, MARIA ANA"
Cuit	2363421014
IdTipoDocumento	"LE"
NumeroDocumento	6342101
FechaNacimiento	"1941-08-03T00:00:00"
IdSexo	"F"
IdEstadoCivil	"Z"
Calle	null
NumeroCalle	null
Localidad	"CORDOBA CAPITAL"
IdDepartamento	null
IdProvincia	null
IdPais	null
FechaIngreso	null
FechaEgreso	null
TieneTrabajo	null
TieneAuto	null
TieneCasa	null
CreditoMaximo	null
Mail	null
Clave	null
IdUsuario	null
171	
IdCliente	174
Nombre	"ACOSTA, LIDIA"
Cuit	2760623355
IdTipoDocumento	"LE"
NumeroDocumento	6062335
FechaNacimiento	"1949-07-01T00:00:00"
IdSexo	"F"
IdEstadoCivil	"Z"
Calle	null
NumeroCalle	null
Localidad	"LA PUERTA"
IdDepartamento	null
IdProvincia	null
IdPais	null
FechaIngreso	null
FechaEgreso	null
TieneTrabajo	null
TieneAuto	null
TieneCasa	null
CreditoMaximo	null
Mail	null
Clave	null
IdUsuario	null
172	
IdCliente	175
Nombre	"CHAVEZ, BLANCA GRACIELA"
Cuit	2716082053
IdTipoDocumento	"PSP"
NumeroDocumento	1608205
FechaNacimiento	"1962-10-24T00:00:00"
IdSexo	"F"
IdEstadoCivil	"Z"
Calle	null
NumeroCalle	null
Localidad	"CORDOBA CAPITAL"
IdDepartamento	null
IdProvincia	null
IdPais	null
FechaIngreso	null
FechaEgreso	null
TieneTrabajo	null
TieneAuto	null
TieneCasa	null
CreditoMaximo	null
Mail	null
Clave	null
IdUsuario	null
173	
IdCliente	176
Nombre	"GONZALEZ, EDUARDO FELICIANO"
Cuit	2063480836
IdTipoDocumento	"DNI"
NumeroDocumento	6348083
FechaNacimiento	"1940-08-16T00:00:00"
IdSexo	"M"
IdEstadoCivil	"C"
Calle	null
NumeroCalle	null
Localidad	"BIALET MASSE"
IdDepartamento	null
IdProvincia	null
IdPais	null
FechaIngreso	null
FechaEgreso	null
TieneTrabajo	null
TieneAuto	null
TieneCasa	null
CreditoMaximo	null
Mail	null
Clave	null
IdUsuario	null
174	
IdCliente	177
Nombre	"GONZALEZ, NICOLAS RAMON"
Cuit	2076390411
IdTipoDocumento	"DNI"
NumeroDocumento	7639041
FechaNacimiento	"1949-09-18T00:00:00"
IdSexo	"M"
IdEstadoCivil	"Z"
Calle	null
NumeroCalle	null
Localidad	"BIALET MASSE"
IdDepartamento	null
IdProvincia	null
IdPais	null
FechaIngreso	null
FechaEgreso	null
TieneTrabajo	null
TieneAuto	null
TieneCasa	null
CreditoMaximo	null
Mail	null
Clave	null
IdUsuario	null
175	
IdCliente	178
Nombre	"ROBLEDO, ELIDA MABEL"
Cuit	2742666926
IdTipoDocumento	"DNI"
NumeroDocumento	4266692
FechaNacimiento	"1971-01-01T00:00:00"
IdSexo	"F"
IdEstadoCivil	"Z"
Calle	null
NumeroCalle	null
Localidad	"GENERAL LEVALLE"
IdDepartamento	null
IdProvincia	null
IdPais	null
FechaIngreso	null
FechaEgreso	null
TieneTrabajo	null
TieneAuto	null
TieneCasa	null
CreditoMaximo	null
Mail	null
Clave	null
IdUsuario	null
176	
IdCliente	179
Nombre	"SALDAÑO, MARIA LIDIA"
Cuit	2754620778
IdTipoDocumento	"DNI"
NumeroDocumento	5462077
FechaNacimiento	"1947-02-19T00:00:00"
IdSexo	"F"
IdEstadoCivil	"Z"
Calle	null
NumeroCalle	null
Localidad	"CORDOBA CAPITAL"
IdDepartamento	null
IdProvincia	null
IdPais	null
FechaIngreso	null
FechaEgreso	null
TieneTrabajo	null
TieneAuto	null
TieneCasa	null
CreditoMaximo	null
Mail	null
Clave	null
IdUsuario	null
177	
IdCliente	180
Nombre	"RIVERO, PASTORA"
Cuit	2140051297
IdTipoDocumento	"DNI"
NumeroDocumento	14005129
FechaNacimiento	"1960-10-27T00:00:00"
IdSexo	"F"
IdEstadoCivil	"Z"
Calle	null
NumeroCalle	null
Localidad	"BIALET MASSE"
IdDepartamento	null
IdProvincia	null
IdPais	null
FechaIngreso	null
FechaEgreso	null
TieneTrabajo	null
TieneAuto	null
TieneCasa	null
CreditoMaximo	null
Mail	null
Clave	null
IdUsuario	null
178	
IdCliente	181
Nombre	"LAZO, JUAN"
Cuit	2065565340
IdTipoDocumento	"DNI"
NumeroDocumento	6556534
FechaNacimiento	"1945-09-16T00:00:00"
IdSexo	"M"
IdEstadoCivil	"Z"
Calle	null
NumeroCalle	null
Localidad	"CHILIBROSTE"
IdDepartamento	null
IdProvincia	null
IdPais	null
FechaIngreso	null
FechaEgreso	null
TieneTrabajo	null
TieneAuto	null
TieneCasa	null
CreditoMaximo	null
Mail	null
Clave	null
IdUsuario	null
179	
IdCliente	182
Nombre	"BRUNOTTO, AZUCENA LUCIA"
Cuit	2713312096
IdTipoDocumento	"DNI"
NumeroDocumento	13312096
FechaNacimiento	"1957-04-02T00:00:00"
IdSexo	"F"
IdEstadoCivil	"S"
Calle	null
NumeroCalle	null
Localidad	"LA FRANCIA"
IdDepartamento	null
IdProvincia	null
IdPais	null
FechaIngreso	null
FechaEgreso	null
TieneTrabajo	null
TieneAuto	null
TieneCasa	null
CreditoMaximo	null
Mail	null
Clave	null
IdUsuario	null
180	
IdCliente	183
Nombre	"DIAZ, CELIA"
Cuit	2738852626
IdTipoDocumento	"CF"
NumeroDocumento	3885262
FechaNacimiento	"1940-02-08T00:00:00"
IdSexo	"F"
IdEstadoCivil	"S"
Calle	null
NumeroCalle	null
Localidad	"CHILIBROSTE"
IdDepartamento	null
IdProvincia	null
IdPais	null
FechaIngreso	null
FechaEgreso	null
TieneTrabajo	null
TieneAuto	null
TieneCasa	null
CreditoMaximo	null
Mail	null
Clave	null
IdUsuario	null
181	
IdCliente	184
Nombre	"PAEZ, ROSA"
Cuit	2747894412
IdTipoDocumento	"CF"
NumeroDocumento	4789441
FechaNacimiento	"1944-05-17T00:00:00"
IdSexo	"F"
IdEstadoCivil	"Z"
Calle	null
NumeroCalle	null
Localidad	"BIALET MASSE"
IdDepartamento	null
IdProvincia	null
IdPais	null
FechaIngreso	null
FechaEgreso	null
TieneTrabajo	null
TieneAuto	null
TieneCasa	null
CreditoMaximo	null
Mail	null
Clave	null
IdUsuario	null
182	
IdCliente	185
Nombre	"PERALTA, TERESA DE JESUS"
Cuit	2738835764
IdTipoDocumento	"CF"
NumeroDocumento	3883576
FechaNacimiento	"1939-10-15T00:00:00"
IdSexo	"F"
IdEstadoCivil	"Z"
Calle	null
NumeroCalle	null
Localidad	"MARULL"
IdDepartamento	null
IdProvincia	null
IdPais	null
FechaIngreso	null
FechaEgreso	null
TieneTrabajo	null
TieneAuto	null
TieneCasa	null
CreditoMaximo	null
Mail	null
Clave	null
IdUsuario	null
183	
IdCliente	186
Nombre	"JUNCOS, IRMA JOSEFA"
Cuit	2748727943
IdTipoDocumento	"CP"
NumeroDocumento	4872794
FechaNacimiento	"1948-03-19T00:00:00"
IdSexo	"F"
IdEstadoCivil	"Z"
Calle	null
NumeroCalle	null
Localidad	"MARULL"
IdDepartamento	null
IdProvincia	null
IdPais	null
FechaIngreso	null
FechaEgreso	null
TieneTrabajo	null
TieneAuto	null
TieneCasa	null
CreditoMaximo	null
Mail	null
Clave	null
IdUsuario	null
184	
IdCliente	187
Nombre	"MASOERO, ENRIQUE ALFREDO"
Cuit	2060405671
IdTipoDocumento	"CP"
NumeroDocumento	6040567
FechaNacimiento	"1941-07-15T00:00:00"
IdSexo	"M"
IdEstadoCivil	"Z"
Calle	null
NumeroCalle	null
Localidad	"VILLA SANTA CRUZ DEL LAGO"
IdDepartamento	null
IdProvincia	null
IdPais	null
FechaIngreso	null
FechaEgreso	null
TieneTrabajo	null
TieneAuto	null
TieneCasa	null
CreditoMaximo	null
Mail	null
Clave	null
IdUsuario	null
185	
IdCliente	188
Nombre	"SANCHEZ, TOMASA PETRONA"
Cuit	2736105998
IdTipoDocumento	"CP"
NumeroDocumento	3610599
FechaNacimiento	"1938-09-20T00:00:00"
IdSexo	"F"
IdEstadoCivil	"Z"
Calle	null
NumeroCalle	null
Localidad	"SIN ASIGNAR"
IdDepartamento	null
IdProvincia	null
IdPais	null
FechaIngreso	null
FechaEgreso	null
TieneTrabajo	null
TieneAuto	null
TieneCasa	null
CreditoMaximo	null
Mail	null
Clave	null
IdUsuario	null
186	
IdCliente	189
Nombre	"ROMERO, ROSA EVA"
Cuit	2748438933
IdTipoDocumento	"LE"
NumeroDocumento	4843893
FechaNacimiento	"1947-08-30T00:00:00"
IdSexo	"F"
IdEstadoCivil	"S"
Calle	null
NumeroCalle	null
Localidad	"SIN ASIGNAR"
IdDepartamento	null
IdProvincia	null
IdPais	null
FechaIngreso	null
FechaEgreso	null
TieneTrabajo	null
TieneAuto	null
TieneCasa	null
CreditoMaximo	null
Mail	null
Clave	null
IdUsuario	null
187	
IdCliente	190
Nombre	"TORRES, CLAUDINA S"
Cuit	2741298958
IdTipoDocumento	"LE"
NumeroDocumento	4129895
FechaNacimiento	"1941-12-08T00:00:00"
IdSexo	"F"
IdEstadoCivil	"Z"
Calle	null
NumeroCalle	null
Localidad	"SANTA ANA"
IdDepartamento	null
IdProvincia	null
IdPais	null
FechaIngreso	null
FechaEgreso	null
TieneTrabajo	null
TieneAuto	null
TieneCasa	null
CreditoMaximo	null
Mail	null
Clave	null
IdUsuario	null
188	
IdCliente	191
Nombre	"CARRIZO, ELIA DEL VALLE"
Cuit	2346755774
IdTipoDocumento	"PSP"
NumeroDocumento	4675577
FechaNacimiento	"1943-08-12T00:00:00"
IdSexo	"F"
IdEstadoCivil	"Z"
Calle	null
NumeroCalle	null
Localidad	"CORDOBA CAPITAL"
IdDepartamento	null
IdProvincia	null
IdPais	null
FechaIngreso	null
FechaEgreso	null
TieneTrabajo	null
TieneAuto	null
TieneCasa	null
CreditoMaximo	null
Mail	null
Clave	null
IdUsuario	null
189	
IdCliente	192
Nombre	"RODRIGUEZ, MARIA ANTONIA"
Cuit	2208701107
IdTipoDocumento	"DNI"
NumeroDocumento	20870110
FechaNacimiento	"1969-05-03T00:00:00"
IdSexo	"F"
IdEstadoCivil	"Z"
Calle	null
NumeroCalle	null
Localidad	"CORDOBA CAPITAL"
IdDepartamento	null
IdProvincia	null
IdPais	null
FechaIngreso	null
FechaEgreso	null
TieneTrabajo	null
TieneAuto	null
TieneCasa	null
CreditoMaximo	null
Mail	null
Clave	null
IdUsuario	null
190	
IdCliente	193
Nombre	"MUZO, MIRTA EDITH"
Cuit	2763972911
IdTipoDocumento	"DNI"
NumeroDocumento	6397291
FechaNacimiento	"1950-11-08T00:00:00"
IdSexo	"F"
IdEstadoCivil	"S"
Calle	null
NumeroCalle	null
Localidad	"CORDOBA CAPITAL"
IdDepartamento	null
IdProvincia	null
IdPais	null
FechaIngreso	null
FechaEgreso	null
TieneTrabajo	null
TieneAuto	null
TieneCasa	null
CreditoMaximo	null
Mail	null
Clave	null
IdUsuario	null
191	
IdCliente	194
Nombre	"BENETTO, MIRTA DEL VALLE"
Cuit	2758130279
IdTipoDocumento	"DNI"
NumeroDocumento	5813027
FechaNacimiento	"1948-04-03T00:00:00"
IdSexo	"F"
IdEstadoCivil	"Z"
Calle	null
NumeroCalle	null
Localidad	"SIN ASIGNAR"
IdDepartamento	null
IdProvincia	null
IdPais	null
FechaIngreso	null
FechaEgreso	null
TieneTrabajo	null
TieneAuto	null
TieneCasa	null
CreditoMaximo	null
Mail	null
Clave	null
IdUsuario	null
192	
IdCliente	195
Nombre	"OROPEL, NELIDA ROSA"
Cuit	2756816491
IdTipoDocumento	"DNI"
NumeroDocumento	5681649
FechaNacimiento	"1946-08-31T00:00:00"
IdSexo	"F"
IdEstadoCivil	"S"
Calle	null
NumeroCalle	null
Localidad	"CORDOBA CAPITAL"
IdDepartamento	null
IdProvincia	null
IdPais	null
FechaIngreso	null
FechaEgreso	null
TieneTrabajo	null
TieneAuto	null
TieneCasa	null
CreditoMaximo	null
Mail	null
Clave	null
IdUsuario	null
193	
IdCliente	196
Nombre	"MOLINA, ROSA ESPERANZA"
Cuit	2742300352
IdTipoDocumento	"DNI"
NumeroDocumento	4230035
FechaNacimiento	"1941-12-08T00:00:00"
IdSexo	"F"
IdEstadoCivil	"Z"
Calle	null
NumeroCalle	null
Localidad	"CORDOBA CAPITAL"
IdDepartamento	null
IdProvincia	null
IdPais	null
FechaIngreso	null
FechaEgreso	null
TieneTrabajo	null
TieneAuto	null
TieneCasa	null
CreditoMaximo	null
Mail	null
Clave	null
IdUsuario	null
194	
IdCliente	197
Nombre	"BAZAN, ROQUE"
Cuit	2079955680
IdTipoDocumento	"DNI"
NumeroDocumento	7995568
FechaNacimiento	"1947-04-05T00:00:00"
IdSexo	"M"
IdEstadoCivil	"Z"
Calle	null
NumeroCalle	null
Localidad	"CORDOBA CAPITAL"
IdDepartamento	null
IdProvincia	null
IdPais	null
FechaIngreso	null
FechaEgreso	null
TieneTrabajo	null
TieneAuto	null
TieneCasa	null
CreditoMaximo	null
Mail	null
Clave	null
IdUsuario	null
195	
IdCliente	198
Nombre	"PEREYRA, OLGA BEATRIZ"
Cuit	2754899292
IdTipoDocumento	"DNI"
NumeroDocumento	5489929
FechaNacimiento	"1947-01-09T00:00:00"
IdSexo	"F"
IdEstadoCivil	"Z"
Calle	null
NumeroCalle	null
Localidad	"CORDOBA CAPITAL"
IdDepartamento	null
IdProvincia	null
IdPais	null
FechaIngreso	null
FechaEgreso	null
TieneTrabajo	null
TieneAuto	null
TieneCasa	null
CreditoMaximo	null
Mail	null
Clave	null
IdUsuario	null
196	
IdCliente	199
Nombre	"MORENO, MARIA ESTHER"
Cuit	2762585833
IdTipoDocumento	"CF"
NumeroDocumento	6258583
FechaNacimiento	"1950-03-04T00:00:00"
IdSexo	"F"
IdEstadoCivil	"Z"
Calle	null
NumeroCalle	null
Localidad	"CORDOBA CAPITAL"
IdDepartamento	null
IdProvincia	null
IdPais	null
FechaIngreso	null
FechaEgreso	null
TieneTrabajo	null
TieneAuto	null
TieneCasa	null
CreditoMaximo	null
Mail	null
Clave	null
IdUsuario	null
197	
IdCliente	211
Nombre	"ABRATE, VICENTE BARTOLO 1"
Cuit	12345667889
IdTipoDocumento	null
NumeroDocumento	null
FechaNacimiento	null
IdSexo	null
IdEstadoCivil	null
Calle	null
NumeroCalle	null
Localidad	null
IdDepartamento	null
IdProvincia	null
IdPais	null
FechaIngreso	null
FechaEgreso	null
TieneTrabajo	true
TieneAuto	null
TieneCasa	null
CreditoMaximo	null
Mail	null
Clave	null
IdUsuario	null
198	
IdCliente	212
Nombre	"ABRATE, VICENTE BARTOLO 2"
Cuit	23423423424
IdTipoDocumento	null
NumeroDocumento	null
FechaNacimiento	null
IdSexo	null
IdEstadoCivil	null
Calle	null
NumeroCalle	null
Localidad	null
IdDepartamento	null
IdProvincia	null
IdPais	null
FechaIngreso	null
FechaEgreso	null
TieneTrabajo	false
TieneAuto	null
TieneCasa	null
CreditoMaximo	null
Mail	null
Clave	null
IdUsuario	null
199	
IdCliente	213
Nombre	"ABRATE, VICENTE BARTOLO 3"
Cuit	null
IdTipoDocumento	null
NumeroDocumento	null
FechaNacimiento	null
IdSexo	null
IdEstadoCivil	null
Calle	null
NumeroCalle	null
Localidad	null
IdDepartamento	null
IdProvincia	null
IdPais	null
FechaIngreso	null
FechaEgreso	null
TieneTrabajo	null
TieneAuto	null
TieneCasa	null
CreditoMaximo	null
Mail	null
Clave	null
IdUsuario	null
200	
IdCliente	214
Nombre	"khgjhgkj"
Cuit	55678986543
IdTipoDocumento	null
NumeroDocumento	null
FechaNacimiento	null
IdSexo	null
IdEstadoCivil	null
Calle	null
NumeroCalle	null
Localidad	null
IdDepartamento	null
IdProvincia	null
IdPais	null
FechaIngreso	null
FechaEgreso	null
TieneTrabajo	null
TieneAuto	null
TieneCasa	null
CreditoMaximo	null
Mail	null
Clave	null
IdUsuario	null
201	
IdCliente	215
Nombre	"julito"
Cuit	22222222222
IdTipoDocumento	null
NumeroDocumento	null
FechaNacimiento	null
IdSexo	null
IdEstadoCivil	null
Calle	null
NumeroCalle	null
Localidad	null
IdDepartamento	null
IdProvincia	null
IdPais	null
FechaIngreso	null
FechaEgreso	null
TieneTrabajo	null
TieneAuto	null
TieneCasa	null
CreditoMaximo	null
Mail	null
Clave	null
IdUsuario	null
202	
IdCliente	216
Nombre	"julia patito"
Cuit	99999999999
IdTipoDocumento	null
NumeroDocumento	null
FechaNacimiento	null
IdSexo	null
IdEstadoCivil	null
Calle	null
NumeroCalle	null
Localidad	null
IdDepartamento	null
IdProvincia	null
IdPais	null
FechaIngreso	null
FechaEgreso	null
TieneTrabajo	false
TieneAuto	null
TieneCasa	null
CreditoMaximo	null
Mail	null
Clave	null
IdUsuario	null
203	
IdCliente	217
Nombre	"Probando"
Cuit	1234567
IdTipoDocumento	null
NumeroDocumento	null
FechaNacimiento	null
IdSexo	null
IdEstadoCivil	null
Calle	null
NumeroCalle	null
Localidad	null
IdDepartamento	null
IdProvincia	null
IdPais	null
FechaIngreso	null
FechaEgreso	null
TieneTrabajo	true
TieneAuto	null
TieneCasa	null
CreditoMaximo	null
Mail	null
Clave	null
IdUsuario	null
204	
IdCliente	218
Nombre	"Probando"
Cuit	1234567
IdTipoDocumento	null
NumeroDocumento	null
FechaNacimiento	null
IdSexo	null
IdEstadoCivil	null
Calle	null
NumeroCalle	null
Localidad	null
IdDepartamento	null
IdProvincia	null
IdPais	null
FechaIngreso	null
FechaEgreso	null
TieneTrabajo	true
TieneAuto	null
TieneCasa	null
CreditoMaximo	null
Mail	null
Clave	null
IdUsuario	null
205	
IdCliente	219
Nombre	"Probando123"
Cuit	1234567
IdTipoDocumento	null
NumeroDocumento	null
FechaNacimiento	null
IdSexo	null
IdEstadoCivil	null
Calle	null
NumeroCalle	null
Localidad	null
IdDepartamento	null
IdProvincia	null
IdPais	null
FechaIngreso	null
FechaEgreso	null
TieneTrabajo	true
TieneAuto	null
TieneCasa	null
CreditoMaximo	null
Mail	null
Clave	null
IdUsuario	null
206	
IdCliente	220
Nombre	"Probando123"
Cuit	1234567
IdTipoDocumento	null
NumeroDocumento	null
FechaNacimiento	null
IdSexo	null
IdEstadoCivil	null
Calle	null
NumeroCalle	null
Localidad	null
IdDepartamento	null
IdProvincia	null
IdPais	null
FechaIngreso	null
FechaEgreso	null
TieneTrabajo	true
TieneAuto	null
TieneCasa	null
CreditoMaximo	null
Mail	null
Clave	null
IdUsuario	null
207	
IdCliente	221
Nombre	"Probando123"
Cuit	1234567
IdTipoDocumento	null
NumeroDocumento	null
FechaNacimiento	null
IdSexo	null
IdEstadoCivil	null
Calle	null
NumeroCalle	null
Localidad	null
IdDepartamento	null
IdProvincia	null
IdPais	null
FechaIngreso	null
FechaEgreso	null
TieneTrabajo	true
TieneAuto	null
TieneCasa	null
CreditoMaximo	null
Mail	null
Clave	null
IdUsuario	null
208	
IdCliente	222
Nombre	"Probando1234"
Cuit	12345678901
IdTipoDocumento	null
NumeroDocumento	null
FechaNacimiento	null
IdSexo	null
IdEstadoCivil	null
Calle	null
NumeroCalle	null
Localidad	null
IdDepartamento	null
IdProvincia	null
IdPais	null
FechaIngreso	null
FechaEgreso	null
TieneTrabajo	null
TieneAuto	null
TieneCasa	null
CreditoMaximo	null
Mail	null
Clave	null
IdUsuario	null
209	
IdCliente	223
Nombre	"CP12"
Cuit	12345678901
IdTipoDocumento	null
NumeroDocumento	null
FechaNacimiento	null
IdSexo	null
IdEstadoCivil	null
Calle	null
NumeroCalle	null
Localidad	null
IdDepartamento	null
IdProvincia	null
IdPais	null
FechaIngreso	null
FechaEgreso	null
TieneTrabajo	true
TieneAuto	null
TieneCasa	null
CreditoMaximo	null
Mail	null
Clave	null
IdUsuario	null
210	
IdCliente	224
Nombre	"123456"
Cuit	12345678901
IdTipoDocumento	null
NumeroDocumento	null
FechaNacimiento	null
IdSexo	null
IdEstadoCivil	null
Calle	null
NumeroCalle	null
Localidad	null
IdDepartamento	null
IdProvincia	null
IdPais	null
FechaIngreso	null
FechaEgreso	null
TieneTrabajo	null
TieneAuto	null
TieneCasa	null
CreditoMaximo	null
Mail	null
Clave	null
IdUsuario	null
211	
IdCliente	225
Nombre	"Gaspar"
Cuit	12345678911
IdTipoDocumento	null
NumeroDocumento	null
FechaNacimiento	null
IdSexo	null
IdEstadoCivil	null
Calle	null
NumeroCalle	null
Localidad	null
IdDepartamento	null
IdProvincia	null
IdPais	null
FechaIngreso	null
FechaEgreso	null
TieneTrabajo	null
TieneAuto	null
TieneCasa	null
CreditoMaximo	null
Mail	null
Clave	null
IdUsuario	null
212	
IdCliente	226
Nombre	"Matute"
Cuit	12345678901
IdTipoDocumento	null
NumeroDocumento	null
FechaNacimiento	null
IdSexo	null
IdEstadoCivil	null
Calle	null
NumeroCalle	null
Localidad	null
IdDepartamento	null
IdProvincia	null
IdPais	null
FechaIngreso	null
FechaEgreso	null
TieneTrabajo	null
TieneAuto	null
TieneCasa	null
CreditoMaximo	null
Mail	null
Clave	null
IdUsuario	null
213	
IdCliente	227
Nombre	"tomasito"
Cuit	84930289483
IdTipoDocumento	null
NumeroDocumento	null
FechaNacimiento	null
IdSexo	null
IdEstadoCivil	null
Calle	null
NumeroCalle	null
Localidad	null
IdDepartamento	null
IdProvincia	null
IdPais	null
FechaIngreso	null
FechaEgreso	null
TieneTrabajo	true
TieneAuto	null
TieneCasa	null
CreditoMaximo	null
Mail	null
Clave	null
IdUsuario	null
214	
IdCliente	228
Nombre	"dfjhasdfjañlksjdfsd"
Cuit	12345678910
IdTipoDocumento	null
NumeroDocumento	null
FechaNacimiento	null
IdSexo	null
IdEstadoCivil	null
Calle	null
NumeroCalle	null
Localidad	null
IdDepartamento	null
IdProvincia	null
IdPais	null
FechaIngreso	null
FechaEgreso	null
TieneTrabajo	null
TieneAuto	null
TieneCasa	null
CreditoMaximo	null
Mail	null
Clave	null
IdUsuario	null
215	
IdCliente	229
Nombre	"darrrrrio"
Cuit	45654346789
IdTipoDocumento	null
NumeroDocumento	null
FechaNacimiento	null
IdSexo	null
IdEstadoCivil	null
Calle	null
NumeroCalle	null
Localidad	null
IdDepartamento	null
IdProvincia	null
IdPais	null
FechaIngreso	null
FechaEgreso	null
TieneTrabajo	true
TieneAuto	null
TieneCasa	null
CreditoMaximo	null
Mail	null
Clave	null
IdUsuario	null
216	
IdCliente	231
Nombre	"BEATRIZ OLAVE"
Cuit	542387000
IdTipoDocumento	null
NumeroDocumento	null
FechaNacimiento	null
IdSexo	null
IdEstadoCivil	null
Calle	null
NumeroCalle	null
Localidad	null
IdDepartamento	null
IdProvincia	null
IdPais	null
FechaIngreso	null
FechaEgreso	null
TieneTrabajo	true
TieneAuto	null
TieneCasa	null
CreditoMaximo	null
Mail	null
Clave	null
IdUsuario	null
217	
IdCliente	232
Nombre	"SFSDFS"
Cuit	2222222224444
IdTipoDocumento	null
NumeroDocumento	null
FechaNacimiento	null
IdSexo	null
IdEstadoCivil	null
Calle	null
NumeroCalle	null
Localidad	null
IdDepartamento	null
IdProvincia	null
IdPais	null
FechaIngreso	null
FechaEgreso	null
TieneTrabajo	true
TieneAuto	null
TieneCasa	null
CreditoMaximo	null
Mail	null
Clave	null
IdUsuario	null
218	
IdCliente	233
Nombre	"JUNITO JONES"
Cuit	39876543456
IdTipoDocumento	null
NumeroDocumento	null
FechaNacimiento	null
IdSexo	null
IdEstadoCivil	null
Calle	null
NumeroCalle	null
Localidad	null
IdDepartamento	null
IdProvincia	null
IdPais	null
FechaIngreso	null
FechaEgreso	null
TieneTrabajo	true
TieneAuto	null
TieneCasa	null
CreditoMaximo	null
Mail	null
Clave	null
IdUsuario	null
219	
IdCliente	235
Nombre	"XIXAR"
Cuit	90000000009
IdTipoDocumento	null
NumeroDocumento	null
FechaNacimiento	null
IdSexo	null
IdEstadoCivil	null
Calle	null
NumeroCalle	null
Localidad	null
IdDepartamento	null
IdProvincia	null
IdPais	null
FechaIngreso	null
FechaEgreso	null
TieneTrabajo	true
TieneAuto	null
TieneCasa	null
CreditoMaximo	null
Mail	null
Clave	null
IdUsuario	null
220	
IdCliente	236
Nombre	"TEEEEE"
Cuit	23232321111
IdTipoDocumento	null
NumeroDocumento	null
FechaNacimiento	null
IdSexo	null
IdEstadoCivil	null
Calle	null
NumeroCalle	null
Localidad	null
IdDepartamento	null
IdProvincia	null
IdPais	null
FechaIngreso	null
FechaEgreso	null
TieneTrabajo	false
TieneAuto	null
TieneCasa	null
CreditoMaximo	null
Mail	null
Clave	null
IdUsuario	null
221	
IdCliente	238
Nombre	"aaaaaa"
Cuit	12345678911
IdTipoDocumento	null
NumeroDocumento	null
FechaNacimiento	null
IdSexo	null
IdEstadoCivil	null
Calle	null
NumeroCalle	null
Localidad	null
IdDepartamento	null
IdProvincia	null
IdPais	null
FechaIngreso	null
FechaEgreso	null
TieneTrabajo	null
TieneAuto	null
TieneCasa	null
CreditoMaximo	null
Mail	null
Clave	null
IdUsuario	null
222	
IdCliente	239
Nombre	"aaaaaaaa"
Cuit	12345678911
IdTipoDocumento	null
NumeroDocumento	null
FechaNacimiento	null
IdSexo	null
IdEstadoCivil	null
Calle	null
NumeroCalle	null
Localidad	null
IdDepartamento	null
IdProvincia	null
IdPais	null
FechaIngreso	null
FechaEgreso	null
TieneTrabajo	null
TieneAuto	null
TieneCasa	null
CreditoMaximo	null
Mail	null
Clave	null
IdUsuario	null
223	
IdCliente	240
Nombre	"alejandro"
Cuit	12345678911
IdTipoDocumento	null
NumeroDocumento	null
FechaNacimiento	null
IdSexo	null
IdEstadoCivil	null
Calle	null
NumeroCalle	null
Localidad	null
IdDepartamento	null
IdProvincia	null
IdPais	null
FechaIngreso	null
FechaEgreso	null
TieneTrabajo	null
TieneAuto	null
TieneCasa	null
CreditoMaximo	null
Mail	null
Clave	null
IdUsuario	null
224	
IdCliente	241
Nombre	"Nicolas Jimenez"
Cuit	813687136847361
IdTipoDocumento	null
NumeroDocumento	null
FechaNacimiento	null
IdSexo	null
IdEstadoCivil	null
Calle	null
NumeroCalle	null
Localidad	null
IdDepartamento	null
IdProvincia	null
IdPais	null
FechaIngreso	null
FechaEgreso	null
TieneTrabajo	false
TieneAuto	null
TieneCasa	null
CreditoMaximo	null
Mail	null
Clave	null
IdUsuario	null
225	
IdCliente	242
Nombre	"Alexis Jimenez"
Cuit	2325264262626
IdTipoDocumento	null
NumeroDocumento	null
FechaNacimiento	null
IdSexo	null
IdEstadoCivil	null
Calle	null
NumeroCalle	null
Localidad	null
IdDepartamento	null
IdProvincia	null
IdPais	null
FechaIngreso	null
FechaEgreso	null
TieneTrabajo	true
TieneAuto	null
TieneCasa	null
CreditoMaximo	null
Mail	null
Clave	null
IdUsuario	null
226	
IdCliente	243
Nombre	""
Cuit	9873284762837
IdTipoDocumento	null
NumeroDocumento	null
FechaNacimiento	null
IdSexo	null
IdEstadoCivil	null
Calle	null
NumeroCalle	null
Localidad	null
IdDepartamento	null
IdProvincia	null
IdPais	null
FechaIngreso	null
FechaEgreso	null
TieneTrabajo	null
TieneAuto	null
TieneCasa	null
CreditoMaximo	null
Mail	null
Clave	null
IdUsuario	null
227	
IdCliente	244
Nombre	"Estoy Aqui"
Cuit	871368716837414
IdTipoDocumento	null
NumeroDocumento	null
FechaNacimiento	null
IdSexo	null
IdEstadoCivil	null
Calle	null
NumeroCalle	null
Localidad	null
IdDepartamento	null
IdProvincia	null
IdPais	null
FechaIngreso	null
FechaEgreso	null
TieneTrabajo	true
TieneAuto	null
TieneCasa	null
CreditoMaximo	null
Mail	null
Clave	null
IdUsuario	null
228	
IdCliente	245
Nombre	"MOOE"
Cuit	33990011223
IdTipoDocumento	null
NumeroDocumento	null
FechaNacimiento	"1991-07-22T03:00:00"
IdSexo	null
IdEstadoCivil	null
Calle	null
NumeroCalle	null
Localidad	null
IdDepartamento	null
IdProvincia	null
IdPais	null
FechaIngreso	null
FechaEgreso	null
TieneTrabajo	true
TieneAuto	null
TieneCasa	null
CreditoMaximo	null
Mail	null
Clave	null
IdUsuario	null
229	
IdCliente	246
Nombre	"MOOE"
Cuit	33990011223
IdTipoDocumento	null
NumeroDocumento	null
FechaNacimiento	"1991-07-22T03:00:00"
IdSexo	null
IdEstadoCivil	null
Calle	null
NumeroCalle	null
Localidad	null
IdDepartamento	null
IdProvincia	null
IdPais	null
FechaIngreso	null
FechaEgreso	null
TieneTrabajo	false
TieneAuto	null
TieneCasa	null
CreditoMaximo	null
Mail	null
Clave	null
IdUsuario	null
230	
IdCliente	247
Nombre	"MOOE"
Cuit	33990011223
IdTipoDocumento	null
NumeroDocumento	null
FechaNacimiento	"1991-07-22T03:00:00"
IdSexo	null
IdEstadoCivil	null
Calle	null
NumeroCalle	null
Localidad	null
IdDepartamento	null
IdProvincia	null
IdPais	null
FechaIngreso	null
FechaEgreso	null
TieneTrabajo	false
TieneAuto	null
TieneCasa	null
CreditoMaximo	null
Mail	null
Clave	null
IdUsuario	null
231	
IdCliente	248
Nombre	"SOFIA"
Cuit	99999911111
IdTipoDocumento	null
NumeroDocumento	null
FechaNacimiento	"1994-01-01T03:00:00"
IdSexo	null
IdEstadoCivil	null
Calle	null
NumeroCalle	null
Localidad	null
IdDepartamento	null
IdProvincia	null
IdPais	null
FechaIngreso	null
FechaEgreso	null
TieneTrabajo	false
TieneAuto	null
TieneCasa	null
CreditoMaximo	null
Mail	null
Clave	null
IdUsuario	null
232	
IdCliente	249
Nombre	"LORENA"
Cuit	88811118888
IdTipoDocumento	null
NumeroDocumento	null
FechaNacimiento	"1986-01-01T03:00:00"
IdSexo	null
IdEstadoCivil	null
Calle	null
NumeroCalle	null
Localidad	null
IdDepartamento	null
IdProvincia	null
IdPais	null
FechaIngreso	null
FechaEgreso	null
TieneTrabajo	true
TieneAuto	null
TieneCasa	null
CreditoMaximo	null
Mail	null
Clave	null
IdUsuario	null
233	
IdCliente	250
Nombre	"LORENA"
Cuit	88811118888
IdTipoDocumento	null
NumeroDocumento	null
FechaNacimiento	"1986-01-01T03:00:00"
IdSexo	null
IdEstadoCivil	null
Calle	null
NumeroCalle	null
Localidad	null
IdDepartamento	null
IdProvincia	null
IdPais	null
FechaIngreso	null
FechaEgreso	null
TieneTrabajo	false
TieneAuto	null
TieneCasa	null
CreditoMaximo	null
Mail	null
Clave	null
IdUsuario	null
234	
IdCliente	251
Nombre	"gino"
Cuit	20400303712
IdTipoDocumento	null
NumeroDocumento	null
FechaNacimiento	null
IdSexo	null
IdEstadoCivil	null
Calle	null
NumeroCalle	null
Localidad	null
IdDepartamento	null
IdProvincia	null
IdPais	null
FechaIngreso	null
FechaEgreso	null
TieneTrabajo	true
TieneAuto	null
TieneCasa	null
CreditoMaximo	null
Mail	null
Clave	null
IdUsuario	null
235	
IdCliente	252
Nombre	"CLIENTE 22:00"
Cuit	45664644654
IdTipoDocumento	null
NumeroDocumento	null
FechaNacimiento	null
IdSexo	null
IdEstadoCivil	null
Calle	null
NumeroCalle	null
Localidad	null
IdDepartamento	null
IdProvincia	null
IdPais	null
FechaIngreso	null
FechaEgreso	null
TieneTrabajo	true
TieneAuto	null
TieneCasa	null
CreditoMaximo	null
Mail	null
Clave	null
IdUsuario	null
236	
IdCliente	253
Nombre	"fsddfsd"
Cuit	33444434344
IdTipoDocumento	null
NumeroDocumento	null
FechaNacimiento	null
IdSexo	null
IdEstadoCivil	null
Calle	null
NumeroCalle	null
Localidad	null
IdDepartamento	null
IdProvincia	null
IdPais	null
FechaIngreso	null
FechaEgreso	null
TieneTrabajo	true
TieneAuto	null
TieneCasa	null
CreditoMaximo	null
Mail	null
Clave	null
IdUsuario	null
237	
IdCliente	254
Nombre	"Marcos Mariatti "
Cuit	27305865503
IdTipoDocumento	null
NumeroDocumento	null
FechaNacimiento	null
IdSexo	null
IdEstadoCivil	null
Calle	null
NumeroCalle	null
Localidad	null
IdDepartamento	null
IdProvincia	null
IdPais	null
FechaIngreso	null
FechaEgreso	null
TieneTrabajo	true
TieneAuto	null
TieneCasa	null
CreditoMaximo	null
Mail	null
Clave	null
IdUsuario	null
238	
IdCliente	255
Nombre	"FARFAN FABIO"
Cuit	12345678901
IdTipoDocumento	null
NumeroDocumento	null
FechaNacimiento	null
IdSexo	null
IdEstadoCivil	null
Calle	null
NumeroCalle	null
Localidad	null
IdDepartamento	null
IdProvincia	null
IdPais	null
FechaIngreso	null
FechaEgreso	null
TieneTrabajo	true
TieneAuto	null
TieneCasa	null
CreditoMaximo	null
Mail	null
Clave	null
IdUsuario	null
239	
IdCliente	256
Nombre	"TEST"
Cuit	12345678912
IdTipoDocumento	null
NumeroDocumento	null
FechaNacimiento	null
IdSexo	null
IdEstadoCivil	null
Calle	null
NumeroCalle	null
Localidad	null
IdDepartamento	null
IdProvincia	null
IdPais	null
FechaIngreso	null
FechaEgreso	null
TieneTrabajo	true
TieneAuto	null
TieneCasa	null
CreditoMaximo	null
Mail	null
Clave	null
IdUsuario	null
240	
IdCliente	257
Nombre	"Marcos Mariatii"
Cuit	27305865503
IdTipoDocumento	null
NumeroDocumento	null
FechaNacimiento	null
IdSexo	null
IdEstadoCivil	null
Calle	null
NumeroCalle	null
Localidad	null
IdDepartamento	null
IdProvincia	null
IdPais	null
FechaIngreso	null
FechaEgreso	null
TieneTrabajo	false
TieneAuto	null
TieneCasa	null
CreditoMaximo	null
Mail	null
Clave	null
IdUsuario	null
241	
IdCliente	258
Nombre	"Nicolas Jimenez"
Cuit	81768716387648
IdTipoDocumento	null
NumeroDocumento	null
FechaNacimiento	null
IdSexo	null
IdEstadoCivil	null
Calle	null
NumeroCalle	null
Localidad	null
IdDepartamento	null
IdProvincia	null
IdPais	null
FechaIngreso	null
FechaEgreso	null
TieneTrabajo	false
TieneAuto	null
TieneCasa	null
CreditoMaximo	null
Mail	null
Clave	null
IdUsuario	null
242	
IdCliente	259
Nombre	"El Loco Syd"
Cuit	20419571750
IdTipoDocumento	null
NumeroDocumento	null
FechaNacimiento	null
IdSexo	null
IdEstadoCivil	null
Calle	null
NumeroCalle	null
Localidad	null
IdDepartamento	null
IdProvincia	null
IdPais	null
FechaIngreso	null
FechaEgreso	null
TieneTrabajo	true
TieneAuto	null
TieneCasa	null
CreditoMaximo	null
Mail	null
Clave	null
IdUsuario	null
243	
IdCliente	260
Nombre	"Profe usted es alto capo"
Cuit	2020202020
IdTipoDocumento	null
NumeroDocumento	null
FechaNacimiento	null
IdSexo	null
IdEstadoCivil	null
Calle	null
NumeroCalle	null
Localidad	null
IdDepartamento	null
IdProvincia	null
IdPais	null
FechaIngreso	null
FechaEgreso	null
TieneTrabajo	false
TieneAuto	null
TieneCasa	null
CreditoMaximo	null
Mail	null
Clave	null
IdUsuario	null
244	
IdCliente	261
Nombre	"Bueno vamo a jugar"
Cuit	2515151515
IdTipoDocumento	null
NumeroDocumento	null
FechaNacimiento	null
IdSexo	null
IdEstadoCivil	null
Calle	null
NumeroCalle	null
Localidad	null
IdDepartamento	null
IdProvincia	null
IdPais	null
FechaIngreso	null
FechaEgreso	null
TieneTrabajo	true
TieneAuto	null
TieneCasa	null
CreditoMaximo	null
Mail	null
Clave	null
IdUsuario	null
245	
IdCliente	262
Nombre	"ElKun"
Cuit	81678176382761
IdTipoDocumento	null
NumeroDocumento	null
FechaNacimiento	null
IdSexo	null
IdEstadoCivil	null
Calle	null
NumeroCalle	null
Localidad	null
IdDepartamento	null
IdProvincia	null
IdPais	null
FechaIngreso	null
FechaEgreso	null
TieneTrabajo	true
TieneAuto	null
TieneCasa	null
CreditoMaximo	null
Mail	null
Clave	null
IdUsuario	null
246	
IdCliente	263
Nombre	"puré de papas"
Cuit	11111111111
IdTipoDocumento	null
NumeroDocumento	null
FechaNacimiento	null
IdSexo	null
IdEstadoCivil	null
Calle	null
NumeroCalle	null
Localidad	null
IdDepartamento	null
IdProvincia	null
IdPais	null
FechaIngreso	null
FechaEgreso	null
TieneTrabajo	true
TieneAuto	null
TieneCasa	null
CreditoMaximo	null
Mail	null
Clave	null
IdUsuario	null
247	
IdCliente	264
Nombre	"ensalada de lentejas y zanahoria  "
Cuit	11111111111
IdTipoDocumento	null
NumeroDocumento	null
FechaNacimiento	null
IdSexo	null
IdEstadoCivil	null
Calle	null
NumeroCalle	null
Localidad	null
IdDepartamento	null
IdProvincia	null
IdPais	null
FechaIngreso	null
FechaEgreso	null
TieneTrabajo	true
TieneAuto	null
TieneCasa	null
CreditoMaximo	null
Mail	null
Clave	null
IdUsuario	null
248	
IdCliente	265
Nombre	"DxxxDDDDDx"
Cuit	12321321321
IdTipoDocumento	null
NumeroDocumento	null
FechaNacimiento	"2020-12-22T03:00:00"
IdSexo	null
IdEstadoCivil	null
Calle	null
NumeroCalle	null
Localidad	null
IdDepartamento	null
IdProvincia	null
IdPais	null
FechaIngreso	null
FechaEgreso	null
TieneTrabajo	true
TieneAuto	null
TieneCasa	null
CreditoMaximo	null
Mail	null
Clave	null
IdUsuario	null
249	
IdCliente	268
Nombre	"fdfsdfsdf"
Cuit	11111122222
IdTipoDocumento	null
NumeroDocumento	null
FechaNacimiento	null
IdSexo	null
IdEstadoCivil	null
Calle	null
NumeroCalle	null
Localidad	null
IdDepartamento	null
IdProvincia	null
IdPais	null
FechaIngreso	null
FechaEgreso	null
TieneTrabajo	null
TieneAuto	null
TieneCasa	null
CreditoMaximo	null
Mail	null
Clave	null
IdUsuario	null
250	
IdCliente	274
Nombre	"sgrghdeh"
Cuit	11111111111
IdTipoDocumento	null
NumeroDocumento	null
FechaNacimiento	null
IdSexo	null
IdEstadoCivil	null
Calle	null
NumeroCalle	null
Localidad	null
IdDepartamento	null
IdProvincia	null
IdPais	null
FechaIngreso	null
FechaEgreso	null
TieneTrabajo	false
TieneAuto	null
TieneCasa	null
CreditoMaximo	null
Mail	null
Clave	null
IdUsuario	null
251	
IdCliente	275
Nombre	"hola"
Cuit	1937864764188187
IdTipoDocumento	null
NumeroDocumento	null
FechaNacimiento	null
IdSexo	null
IdEstadoCivil	null
Calle	null
NumeroCalle	null
Localidad	null
IdDepartamento	null
IdProvincia	null
IdPais	null
FechaIngreso	null
FechaEgreso	null
TieneTrabajo	false
TieneAuto	null
TieneCasa	null
CreditoMaximo	null
Mail	null
Clave	null
IdUsuario	null
252	
IdCliente	276
Nombre	"Test0101"
Cuit	987164
IdTipoDocumento	null
NumeroDocumento	null
FechaNacimiento	null
IdSexo	null
IdEstadoCivil	null
Calle	null
NumeroCalle	null
Localidad	null
IdDepartamento	null
IdProvincia	null
IdPais	null
FechaIngreso	null
FechaEgreso	null
TieneTrabajo	null
TieneAuto	null
TieneCasa	null
CreditoMaximo	null
Mail	null
Clave	null
IdUsuario	null
253	
IdCliente	277
Nombre	"ines"
Cuit	27225525545
IdTipoDocumento	null
NumeroDocumento	null
FechaNacimiento	null
IdSexo	null
IdEstadoCivil	null
Calle	null
NumeroCalle	null
Localidad	null
IdDepartamento	null
IdProvincia	null
IdPais	null
FechaIngreso	null
FechaEgreso	null
TieneTrabajo	true
TieneAuto	null
TieneCasa	null
CreditoMaximo	null
Mail	null
Clave	null
IdUsuario	null
254	
IdCliente	278
Nombre	"EmaPrueba1"
Cuit	1234567891011
IdTipoDocumento	null
NumeroDocumento	null
FechaNacimiento	null
IdSexo	null
IdEstadoCivil	null
Calle	null
NumeroCalle	null
Localidad	null
IdDepartamento	null
IdProvincia	null
IdPais	null
FechaIngreso	null
FechaEgreso	null
TieneTrabajo	null
TieneAuto	null
TieneCasa	null
CreditoMaximo	null
Mail	null
Clave	null
IdUsuario	null
255	
IdCliente	279
Nombre	"Ema marquez"
Cuit	3213123121234
IdTipoDocumento	null
NumeroDocumento	null
FechaNacimiento	null
IdSexo	null
IdEstadoCivil	null
Calle	null
NumeroCalle	null
Localidad	null
IdDepartamento	null
IdProvincia	null
IdPais	null
FechaIngreso	null
FechaEgreso	null
TieneTrabajo	true
TieneAuto	null
TieneCasa	null
CreditoMaximo	null
Mail	null
Clave	null
IdUsuario	null
256	
IdCliente	281
Nombre	"ajehkjahekjha"
Cuit	98239879481798
IdTipoDocumento	null
NumeroDocumento	null
FechaNacimiento	null
IdSexo	null
IdEstadoCivil	null
Calle	null
NumeroCalle	null
Localidad	null
IdDepartamento	null
IdProvincia	null
IdPais	null
FechaIngreso	null
FechaEgreso	null
TieneTrabajo	false
TieneAuto	null
TieneCasa	null
CreditoMaximo	null
Mail	null
Clave	null
IdUsuario	null

*/
];
