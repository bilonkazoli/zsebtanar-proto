import React from 'react'
import { Dialog, DialogHeader, DialogBody, DialogFooter } from 'client/overlay/components'
import { useDialog, useOverlayDispatch } from 'client/overlay/providers'
import { isAdvancedUploadSupported } from 'client/generic/utils/browser'
import { DnDOverlay } from '../components/DnDOverlay'
import { useFileDrop } from 'client/generic/hooks'
import { AddFileButton } from '../components/AddFileButton'
import { useManageAssetsDispatch, useManageAssets } from '../providers/ManageAssetProvider'
import { useGetAssetByGroup } from '../services/assets'
import { Loading, Alert } from '../../generic/components'
import { FileUploadModal } from './FileUploadModal'

export function AssetBrowserModal() {
  const { closeModal } = useDialog()
  const { handler } = useManageAssets()
  const { openModal } = useOverlayDispatch()
  const { addFiles } = useManageAssetsDispatch()
  const {
    isPending,
    isLoading,
    isSuccess,
    result,
    hasNoResult,
    hasError,
    error
  } = useGetAssetByGroup(handler?.group)
  useFileDrop(addFiles)

  const close = () => closeModal()

  const selectFiles = ({ value: files }) => {
    addFiles(files)
    openModal(<FileUploadModal />)
  }

  return (
    <div>
      {isAdvancedUploadSupported && <DnDOverlay />}
      <Dialog className="file-manager" size="large">
        <DialogHeader onClose={close}>Képek</DialogHeader>
        <DialogBody>
          {isPending || (isLoading && <Loading />)}
          {isSuccess || (hasNoResult && <div className="msg-block">Nincs feltöltött fájl.</div>)}
          {hasError && <Alert>{JSON.stringify(error)}</Alert>}
          {isSuccess ||
            (result?.length && (
              <div>
                {result.map(file => (
                  <button
                    key={file.id}
                    className="m-1 float-left btn btn-light"
                    title={file.fileName}
                    onClick={() => closeModal(file)}
                  >
                    <figure className="figure">
                      <div className="img" style={{ backgroundImage: `url(${file.url})` }} />
                      <figcaption className="figure-caption text-center text-truncate">
                        {file.fileName}
                      </figcaption>
                    </figure>
                  </button>
                ))}
              </div>
            ))}
        </DialogBody>
        <DialogFooter>
          <div className="form-group">
            <AddFileButton value={[]} name="files" onChange={selectFiles} />
            <small id="passwordHelpInline" className="text-muted">
              csak <code>jpg</code>, <code>png</code>, <code>gif</code> és <code>webp</code>{' '}
              tölthető fel,
              <br />a maximális képmáret 3Mb
            </small>
          </div>
        </DialogFooter>
      </Dialog>
    </div>
  )
}
