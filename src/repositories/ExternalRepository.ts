/* eslint-disable no-unused-vars */
export default interface ExternalRepository {
  get(id: number): any;
  getAll(): any[];
  select(id: number, places: number): any;
}
