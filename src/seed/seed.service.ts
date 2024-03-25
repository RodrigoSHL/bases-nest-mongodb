import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { catchError, firstValueFrom } from 'rxjs';
import { PokeapiResponse } from './interfaces/pokeapi-response.interface';
import { AxiosError } from 'axios';
import { PokemonService } from 'src/pokemon/pokemon.service';

@Injectable()
export class SeedService {
  constructor(
    private readonly httpService: HttpService,
    private readonly pokemonService: PokemonService,
  ) {}
  async executeSeed() {
    const { data } = await firstValueFrom(
      this.httpService
        .get<PokeapiResponse>('https://pokeapi.co/api/v2/pokemon?limit=50')
        .pipe(
          catchError((error: AxiosError) => {
            console.error(error.response.data);
            throw 'An error happened!';
          }),
        ),
    );

    data.results.forEach((result) => {
      const segments = result.url.split('/');
      const name = result.name;
      const no = +segments[segments.length - 2];
      this.pokemonService.create({ name, no, type: 'normal' });
    });
    return data;
  }
}
