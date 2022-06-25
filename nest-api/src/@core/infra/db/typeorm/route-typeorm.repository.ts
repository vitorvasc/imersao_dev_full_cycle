import { Route } from 'src/@core/domain/route.entity';
import { RouteRepositoryInterface } from 'src/@core/domain/route.repository';
import { Repository } from 'typeorm';

export class RouteTypeOrmRepository implements RouteRepositoryInterface {
  constructor(private ormRepo: Repository<Route>) {}

  async insert(route: Route): Promise<void> {
    await this.ormRepo.save(route);
  }

  async findAll(): Promise<Route[]> {
    return this.ormRepo.find();
  }
}
