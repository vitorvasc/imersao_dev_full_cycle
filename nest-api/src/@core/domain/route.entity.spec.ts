import { LatLng, Route, RouteProps } from './route.entity';

describe('Route Tests', () => {
  test('should create a new route', () => {
    let routeProps: RouteProps = {
      title: 'Minha rota',
      startPosition: { lat: 0, lng: 1 },
      endPosition: { lat: 2, lng: 3 },
    };
    let route = Route.create(routeProps);
    expect(route.props).toStrictEqual({
      ...routeProps,
      points: [],
    });

    routeProps = {
      title: 'Minha rota',
      startPosition: { lat: 0, lng: 1 },
      endPosition: { lat: 2, lng: 3 },
      points: [{ lat: 10, lng: 11 }],
    };
    route = Route.create(routeProps);
    expect(route.id).toBeDefined();
    expect(route.props).toStrictEqual({
      ...routeProps,
      points: [{ lat: 10, lng: 11 }],
    });
  });

  test('should update title', () => {
    const routeProps: RouteProps = {
      title: 'Minha rota',
      startPosition: { lat: 0, lng: 1 },
      endPosition: { lat: 2, lng: 3 },
    };
    const route = Route.create(routeProps);
    route.updateTitle('Minha rota atualizada');
    expect(route.title).toStrictEqual('Minha rota atualizada');
  });

  test('should update startPosition and endPosition', () => {
    const routeProps: RouteProps = {
      title: 'Minha rota',
      startPosition: { lat: 0, lng: 1 },
      endPosition: { lat: 2, lng: 3 },
    };
    const route = Route.create(routeProps);
    const startPosition: LatLng = { lat: 10, lng: 20 };
    const endPosition: LatLng = { lat: 30, lng: 40 };
    route.updatePosition(startPosition, endPosition);
    expect(route.startPosition).toStrictEqual(startPosition);
    expect(route.endPosition).toStrictEqual(endPosition);
  });

  test('should update points', () => {
    const routeProps: RouteProps = {
      title: 'Minha rota',
      startPosition: { lat: 0, lng: 1 },
      endPosition: { lat: 2, lng: 3 },
    };
    const route = Route.create(routeProps);
    const points: LatLng[] = [{ lat: 10, lng: 20 }];
    route.updatePoints(points);
    expect(route.points).toHaveLength(1);
    expect(route.points).toStrictEqual(points);
  });
});
