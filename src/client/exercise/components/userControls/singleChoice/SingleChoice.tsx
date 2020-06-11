import React from 'react'
import { UCSingleChoice } from 'shared/exercise/types'
import { UseModelProps } from 'client/generic/hooks/model'
import { RadioInput } from 'client/generic/components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons/faCheck'
import { MarkdownWithScript } from 'client/script/components'

interface Props extends UseModelProps<number> {
  ctrl: UCSingleChoice
  readonly: boolean
}

export function SingleChoice({ readonly, ctrl, ...bindProps }: Props) {
  return (
    <div className="user-control uc-single-choice">
      {readonly ? (
        <div className="row">
          <FontAwesomeIcon icon={faCheck} className="col-1" />
          <MarkdownWithScript source={ctrl.props.options[ctrl.solution].label} className="col-11" />
        </div>
      ) : (
        ctrl.props.options.map(({ label }, idx) => (
          <div className="row" key={idx}>
            <RadioInput inputValue={idx} {...bindProps}>
              <MarkdownWithScript source={label} />
            </RadioInput>
          </div>
        ))
      )}
    </div>
  )
}