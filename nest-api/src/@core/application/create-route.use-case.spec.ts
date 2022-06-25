import { RouteInMemoryRepository } from '../infra/db/in-memory/route-in-memory.repository';
import { CreateRouteUseCase } from './create-route.use-case';

describe('CreateRouteUseCase Tests', () => {
  it('should create a new route', async () => {
    const repository = new RouteInMemoryRepository();
    const createUsecase = new CreateRouteUseCase(repository);
    const output = await createUsecase.execute({
      title: 'Minha rota',
      startPosition: { lat: 0, lng: 1 },
      endPosition: { lat: 2, lng: 3 },
    });
    expect(output).toStrictEqual({
      id: repository.items[0].id,
      title: 'Minha rota',
      startPosition: { lat: 0, lng: 1 },
      endPosition: { lat: 2, lng: 3 },
      points: [],
    });
    expect(repository.items).toHaveLength(1);
  });
});
