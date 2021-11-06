import {Entity, model, property} from '@loopback/repository';

@model()
export class Aeropuerto extends Entity {
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
  nombre: string;

  @property({
    type: 'string',
    required: true,
  })
  ciudad: string;

  @property({
    type: 'string',
    required: true,
  })
  pais: string;

  @property({
    type: 'string',
    required: true,
  })
  coord_x: string;

  @property({
    type: 'string',
    required: true,
  })
  coord_y: string;

  @property({
    type: 'string',
    required: true,
  })
  siglas: string;

  @property({
    type: 'string',
    required: true,
  })
  tipo: string;



  constructor(data?: Partial<Aeropuerto>) {
    super(data);
  }
}

export interface AeropuertoRelations {
  // describe navigational properties here
}

export type AeropuertoWithRelations = Aeropuerto & AeropuertoRelations;
