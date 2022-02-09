import { Injectable } from '@angular/core'

@Injectable({
  providedIn: 'root',
})
export class UtilService {
  public replaceAll(value: string, oldCharacter: string, newCharacter: string): string {
    return value.split(oldCharacter).join(newCharacter)
  }

  public setCharAt(str: string, index: number, chr: string): string {
    if (index > str.length - 1) {
      return str
    }
    return str.substring(0, index) + chr + str.substring(index + 1)
  }
}
