import * as React from 'react'
import { render } from 'react-dom'
import { hot } from 'react-hot-ts'
import { initSentryLogger } from 'client/generic/utils/logger'
import { UserProvider } from 'client/user/providers/UserProvider'
import { OverlayProvider } from 'client/overlay/providers'
import { AdminRouter } from 'client/app-admin/provider/Router'
import { AdminApp } from 'client/app-admin/AdminApp'

import './admin.scss'
import { AssetManagerProvider } from '../assets/providers/ManageAssetProvider'

initSentryLogger()

hot(module)(
  render(
    <UserProvider>
      <AdminRouter>
        <AssetManagerProvider>
          <OverlayProvider>
            <AdminApp />
          </OverlayProvider>
        </AssetManagerProvider>
      </AdminRouter>
    </UserProvider>,
    document.getElementById('root')
  )
)