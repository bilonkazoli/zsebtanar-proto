import { UCNumberList } from '../../../../../shared/exercise/types'
import { numberSortAsc, floatEq } from '../../../../generic/utils'

export function numberList(
  control: UCNumberList,
  solution: UCNumberList['solution'],
  userInput: UCNumberList['solution']
): boolean {
  if (solution.length !== userInput.length) return false

  const sortedUserInputs = userInput.map(parseFloat).sort(numberSortAsc)
  const sortedSolutions = solution.map(parseFloat).sort(numberSortAsc)

  return sortedSolutions.every((solution, idx) => floatEq(solution, sortedUserInputs[idx]))
}
