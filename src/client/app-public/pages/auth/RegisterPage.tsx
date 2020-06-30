import * as React from 'react'
import { useHistory } from 'react-router'
import {
  PublicPage,
  FormGroupLabel,
  Button,
  GoogleIcon,
  FacebookIcon,
  HrWithLabel,
  Alert,
  Link,
} from 'client/generic/components'
import { useModel } from '../../../generic/hooks/model'
import { useUser } from '../../../user/providers/UserProvider'
import { ProviderTypes } from '../../../user/types'
import { errorToString } from '../../../generic/utils'
import strings from '../../../localisation/strings'
import { AuthPageHeader } from '../../nav/AuthPageHeader'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'

interface RegistrationData {
  email: string
  name: string
  password: string
}

export function RegisterPage() {
  const { bind, data: registrationData } = useModel<RegistrationData>()
  const { isRegistration, loggedIn, signUp, ssoSignIn, hasError, error } = useUser()
  const history = useHistory()

  if (loggedIn) {
    history.replace('/')
  }

  const register = e => {
    e.preventDefault()
    const { email, password, name } = registrationData
    signUp(email, password, name)
  }

  const signInWithGoogle = () => ssoSignIn(ProviderTypes.Google)
  const signInWithFacebook = () => ssoSignIn(ProviderTypes.Facebook)

  return (
    <PublicPage className="page-register auth-page">
      <AuthPageHeader>
        <Link href="/login" className="btn btn-outline-primary">
          <FontAwesomeIcon icon={faUser} /> Belépés
        </Link>
      </AuthPageHeader>

      <form onSubmit={register}>
        <h1 className="text-center">Regisztráció</h1>
        <hr />
        {hasError && <Alert type="danger">{errorToString(error, strings)}</Alert>}
        <FormGroupLabel
          label="Email cím"
          type="email"
          disabled={isRegistration}
          className="form-control"
          required={true}
          autoFocus={true}
          {...bind('email')}
        />

        <FormGroupLabel
          label="Felhasználói név"
          type="text"
          disabled={isRegistration}
          className="form-control"
          required={true}
          {...bind('name')}
        />

        <FormGroupLabel
          label="Jelszó"
          type="password"
          disabled={isRegistration}
          className="form-control"
          required={true}
          {...bind('password')}
        />

        <Button btn="primary" className="text-center w-100" submit loading={isRegistration}>
          Regisztrálok
        </Button>

        <HrWithLabel label="VAGY" />
        <div className="row">
          <div className="col-sm-6 mb-3">
            <Button
              btn="outline-primary"
              disabled={isRegistration}
              className="w-100 text-center"
              onAction={signInWithFacebook}
            >
              <FacebookIcon /> Facebook
            </Button>
          </div>
          <div className="col-sm-6 mb-3">
            <Button
              btn="outline-primary"
              disabled={isRegistration}
              className="w-100 text-center"
              onAction={signInWithGoogle}
            >
              <GoogleIcon /> Google
            </Button>
          </div>
        </div>
      </form>
    </PublicPage>
  )
}