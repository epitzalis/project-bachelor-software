import { Injectable } from '@angular/core'

@Injectable({
  providedIn: 'root',
})
export class UtilService {
  public replaceAll(value: string, oldCharacter: string, newCharacter: string): string {
    return value.split(oldCharacter).join(newCharacter)
  }
}
