import {Entity, model, property, hasMany} from '@loopback/repository';
import {Empleado} from './empleado.model';
import {Sucursal} from './sucursal.model';

@model()
export class Empresa extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  id?: string;

  @property({
    type: 'string',
    required: true,
  })
  razonSocial: string;

  @property({
    type: 'string',
    required: true,
  })
  Nit: string;

  @hasMany(() => Empleado)
  empleados: Empleado[];

  @hasMany(() => Sucursal)
  sucursals: Sucursal[];

  constructor(data?: Partial<Empresa>) {
    super(data);
  }
}

export interface EmpresaRelations {
  // describe navigational properties here
}

export type EmpresaWithRelations = Empresa & EmpresaRelations;