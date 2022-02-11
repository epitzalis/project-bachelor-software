import { Injectable } from '@angular/core'
import { UtilService } from '@services/util.service'
import {
  ConversionPropositionTypeCalculator,
  ConversionTypeCalculator,
} from '@models/calculator.dto'

@Injectable({
  providedIn: 'root',
})
export class ConversionService {
  constructor(
    private readonly utilService: UtilService,
  ) {}

  public convertToUniversal(originalValue: string): string {
    for (const propositionCharacter in ConversionTypeCalculator) {
      originalValue = this.utilService.replaceAll(originalValue, propositionCharacter,
        ConversionTypeCalculator[propositionCharacter])
    }
    return originalValue
  }

  public convertToProposition(arrayDataUniversal: string[][]): string[][] {
    const headerColumns = this.convertHeaderToProposition(arrayDataUniversal[0])
    // Se elimina la primera fila correspondiente a la cabecera, para quedarse con las filas
    arrayDataUniversal.splice(0, 1)
    const rows = this.convertRowsToProposition(arrayDataUniversal)
    return [headerColumns, ...rows]
  }

  private convertHeaderToProposition(headerUniversal: string[]): string[] {
    for (let i = 0; i < headerUniversal.length; i++) {
      let column = headerUniversal[i]
      for (let j = 0; j < column.length; j++) {
        const character = column[j]
        if (ConversionPropositionTypeCalculator[character]) {
          // Si se encuentra el caracter, lo reemplaza por el correspondiente a una proposición
          column = column.replace(character, ConversionPropositionTypeCalculator[character])
        }
      }
      headerUniversal[i] = column
    }
    return headerUniversal
  }

  private convertRowsToProposition(rows: string[][]): string[][] {
    // Se convierten los 0 a Falso y los 1 a Verdadero
    for (let i = 0; i < rows.length; i++) {
      const row = rows[i]
      for (let j = 0; j < row.length; j++) {
        const character = row[j]
        rows[i][j] = character === '0' ? 'F' : 'V'
      }
    }
    return rows
  }
}
