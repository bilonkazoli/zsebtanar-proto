import { interpretMarkdown } from 'shared/script/pocketLispMarkdown'
import { PseudoRandomNumberGenerator } from '../../../shared/math/random'
import { runtime, utils, literals } from 'pocket-lisp-stdlib'
import { valueSet } from '../../../shared/script/shared-code'
import { Interpreter, Parser, Scanner } from 'pocket-lisp'

export function interpretExerciseMarkdown(source: string, markdown: string, seed = 1) {
  const prng = new PseudoRandomNumberGenerator(seed)
  const globals = { ...runtime, ...valueSet(prng) }
  const stdout = () => undefined
  const interpreter = new Interpreter({ globals, stdout, utils }, literals)

  const interpret = script => {
    const parserResult = new Parser(new Scanner(script), literals).parse()
    if (parserResult.hasError) {
      throw parserResult.errors
    }
    return interpreter.interpret(parserResult.program)
  }

  interpret(source)

  interpretMarkdown(interpret, markdown)
}
