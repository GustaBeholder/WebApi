import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';

const endpoint = 'http://localhost:44347/api/';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(private http: HttpClient) {}

  private extractData(res: Response) {
    let body = res;
    return body || { };
  }

  getProducts(): Observable<any> {
    return this.http.get(endpoint + 'Produtos').pipe(
      map(this.extractData));
  }

  getProduct(id): Observable<any> {
    return this.http.get(endpoint + 'Produtos/' + id).pipe(
      map(this.extractData));
  }

  addProduct (product): Observable<any> {
    console.log(product);
    return this.http.post<any>(endpoint + 'Produtos', JSON.stringify(product), httpOptions).pipe(
      tap((product) => console.log(`added product w/ id=${product.id}`)),
      catchError(this.handleError<any>('addProduct'))
    );
  }

  getProductByName(name): Observable<any> {
    return this.http.get(endpoint + 'Produtos/ByName?name=' + name).pipe(
      map(this.extractData));
  }
  
  updateProduct (id, product): Observable<any> {
    return this.http.put(endpoint + 'Produtos/' + id, JSON.stringify(product), httpOptions).pipe(
      tap(_ => console.log(`updated product id=${id}`)),
      catchError(this.handleError<any>('updateProduct'))
    );
  }

  deleteProduct (id): Observable<any> {
    return this.http.delete<any>(endpoint + 'Produtos/' + id, httpOptions).pipe(
      tap(_ => console.log(`deleted product id=${id}`)),
      catchError(this.handleError<any>('deleteProduct'))
    );
  }


  getFornecedors(): Observable<any> {
    return this.http.get(endpoint + 'Fornecedors').pipe(
      map(this.extractData));
  }

  getFornecedor(id): Observable<any> {
    return this.http.get(endpoint + 'Fornecedors/' + id).pipe(
      map(this.extractData));
  }

  getFornecedorByName(name): Observable<any> {
    return this.http.get(endpoint + 'Fornecedors/ByName?name=' + name).pipe(
      map(this.extractData));
  }

  getFornecedorByCnpj(cnpj): Observable<any> {
    return this.http.get(endpoint + 'Fornecedors/ByName?cnpj=' + cnpj).pipe(
      map(this.extractData));
  }

  addFornecedors (fornecedor): Observable<any> {
    console.log(fornecedor);
    return this.http.post<any>(endpoint + 'Fornecedors', JSON.stringify(fornecedor), httpOptions).pipe(
      tap((fornecedor) => console.log(`added product w/ id=${fornecedor.id}`)),
      catchError(this.handleError<any>('addFornecedors'))
    );
  }

  updateFornecedors (id, fornecedor): Observable<any> {
    return this.http.put(endpoint + 'Fornecedors/' + id, JSON.stringify(fornecedor), httpOptions).pipe(
      tap(_ => console.log(`updated fornecedor id=${id}`)),
      catchError(this.handleError<any>('updateFornecedors'))
    );
  }

  deleteFornecedors (id): Observable<any> {
    return this.http.delete<any>(endpoint + 'Fornecedors/' + id, httpOptions).pipe(
      tap(_ => console.log(`Fornecedor deletado id=${id}`)),
      catchError(this.handleError<any>('deleteFornecedors'))
    );
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
