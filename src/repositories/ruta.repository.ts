import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, BelongsToAccessor} from '@loopback/repository';
import {MongoDataSource} from '../datasources';
import {Ruta, RutaRelations, Aeropuerto} from '../models';
import {AeropuertoRepository} from './aeropuerto.repository';

export class RutaRepository extends DefaultCrudRepository<
  Ruta,
  typeof Ruta.prototype.id,
  RutaRelations
> {

  public readonly origenrelacionorigenFK: BelongsToAccessor<Aeropuerto, typeof Ruta.prototype.id>;

  public readonly destinoFK: BelongsToAccessor<Aeropuerto, typeof Ruta.prototype.id>;

  constructor(
    @inject('datasources.mongo') dataSource: MongoDataSource, @repository.getter('AeropuertoRepository') protected aeropuertoRepositoryGetter: Getter<AeropuertoRepository>,
  ) {
    super(Ruta, dataSource);
    this.destinoFK = this.createBelongsToAccessorFor('destinoFK', aeropuertoRepositoryGetter,);
    this.registerInclusionResolver('destinoFK', this.destinoFK.inclusionResolver);
    this.origenrelacionorigenFK = this.createBelongsToAccessorFor('origenrelacionorigenFK', aeropuertoRepositoryGetter,);
    this.registerInclusionResolver('origenrelacionorigenFK', this.origenrelacionorigenFK.inclusionResolver);
  }
}
