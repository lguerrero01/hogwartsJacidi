import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { BaseData, Character } from '../interfaces';
import { calculateAge } from '../utils/calculateAge';

@Injectable({
  providedIn: 'root',
})
export class CharactersService {
  ///////////
  //Atributes
  ///////////
  private url = `${environment.urlAPI}/characters/house`;
  constructor(private http: HttpClient) {}

  public list(houseName: string): Observable<Character[]> {
    return this.http.get<BaseData[]>(`${this.url}/${houseName}`).pipe(
      map((v: BaseData[]) => {
        return v.map((character) => ({
          name: character.name,
          patronus: character.patronus,
          age: calculateAge(character.dateOfBirth || '', character.yearOfBirth),
          image: character.image,
          species: character.species,
          gender: character.gender,
        }));
      })
    );
  }
}
