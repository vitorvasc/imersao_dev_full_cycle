import crypto from 'crypto';

export type LatLng = { lat: number; lng: number };

export type RouteProps = {
  title: string;
  startPosition: LatLng;
  endPosition: LatLng;
  points?: LatLng[];
};

export class Route {
  public readonly id: string;
  public props: Required<RouteProps>;
  constructor(props: RouteProps, id?: string) {
    this.id = id || crypto.randomUUID();
    this.props = {
      ...props,
      points: props.points || [],
    };
  }

  updateTitle(title: string) {
    // Adicione aqui qualquer regra de negócio necessária para esta propriedade da classe
    this.title = title;
  }

  updatePosition(startPosition: LatLng, endPosition: LatLng) {
    // Adicione aqui qualquer regra de negócio necessária para esta propriedade da classe
    this.startPosition = startPosition;
    this.endPosition = endPosition;
  }

  updatePoints(points: LatLng[]) {
    // Adicione aqui qualquer regra de negócio necessária para esta propriedade da classe
    this.points = points;
  }

  get title() {
    return this.props.title;
  }

  get startPosition() {
    return this.props.startPosition;
  }

  get endPosition() {
    return this.props.endPosition;
  }

  get points() {
    return this.props.points;
  }

  private set title(value: string) {
    this.props.title = value;
  }

  private set startPosition(value: LatLng) {
    this.props.startPosition = value;
  }

  private set endPosition(value: LatLng) {
    this.props.endPosition = value;
  }

  private set points(value: LatLng[]) {
    this.props.points = value;
  }

  toJSON() {
    return {
      id: this.id,
      ...this.props,
    };
  }
}
