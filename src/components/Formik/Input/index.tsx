import React from 'react'
import Box from '@material-ui/core/Box'
import Fade from '@material-ui/core/Fade'
import FormControl from '@material-ui/core/FormControl'
import FormHelperText from '@material-ui/core/FormHelperText'
import FormLabel from '@material-ui/core/FormLabel'
import clsx from 'clsx'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle, faTimesCircle } from '@fortawesome/free-solid-svg-icons'
import { useField } from 'formik'
import InputBase, { InputBaseProps } from '@material-ui/core/InputBase'

import styles from './styles.module.scss'

interface IFormikInputProps
  extends Omit<Omit<InputBaseProps, 'value'>, 'onChange'> {
  rootClass?: string
  fullWidth?: boolean
  inputClass?: string
  label?: string
  name: string
  showErrorMsgs?: boolean
  [x: string]: any
}

const FormikInput: React.FC<IFormikInputProps> = ({
  className,
  rootClass,
  showErrorMsgs = false,
  name,
  label,
  fullWidth,
  inputClass,
  ...inputProps
}) => {
  const [field, meta] = useField(name)
  const hasError = !!(meta.touched && meta.error)

  return (
    <FormControl
      error={hasError}
      fullWidth={fullWidth}
      classes={{
        root: rootClass,
      }}
    >
      <FormLabel className={styles.label} htmlFor={name}>
        {label}
      </FormLabel>
      <InputBase
        autoComplete="off"
        endAdornment={
          meta.value.length >= 1 && (
            <FontAwesomeIcon
              className={meta.error ? styles.iconErr : styles.iconValid}
              icon={meta.error ? faTimesCircle : faCheckCircle}
            />
          )
        }
        {...field}
        {...inputProps}
        id={name}
        className={clsx('form-control', className)}
        classes={{
          root: clsx(styles.inputRoot, inputClass),
          input: styles.input,
          disabled: styles.disabled,
          // focused: clsx({ [styles.focused]: !hasError }),
          formControl: clsx({ [styles.danger]: hasError }),
        }}
      />
      {showErrorMsgs && (
        <Fade in={hasError}>
          <Box>
            <FormHelperText error>{meta.error || ' '}</FormHelperText>
          </Box>
        </Fade>
      )}
    </FormControl>
  )
}

export default FormikInput
