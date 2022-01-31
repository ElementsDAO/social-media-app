import React, { FunctionComponent } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import SVGIcon from 'components/Icon/SVGIcon'
import useStore from 'lib/store'
import { nodeIsUpAndRunning } from 'lib/storeUtils'
import { style } from 'styles/style'
import BaseDialog from 'components/Dialog/BaseDialog'

interface SettingsDialogProps {
  showDialog: boolean
  onClose: () => void
}

const SettingsDialog: FunctionComponent<SettingsDialogProps> = ({
  showDialog,
  onClose,
}) => {
  const { contract, nodeInfo, setNodeInfo, cacheFlush } = useStore((state) => ({
    contract: state.contract,
    nodeInfo: state.nodeInfo,
    setNodeInfo: state.setNodeInfo,
    cacheFlush: state.cacheFlush,
  }))

  // HANDLE FORM SUBMIT
  type FormValues = {
    evmNode: string
    contractAddress: string
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>()

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    cacheFlush()
    setNodeInfo({
      evmNode: data.evmNode,
      contractPostsAddress: data.contractAddress,
    })
    onClose()
  }

  return (
    <BaseDialog
      showDialog={showDialog}
      onClose={onClose}
      header='Node Settings'
      body={
        <form id='settingsForm' onSubmit={handleSubmit(onSubmit)}>
          <div className='grid grid-cols-3 gap-x-4 gap-y-8'>
            <div className='col-span-3'>
              <span
                className={`
                  ${style.dialogLabel}
                  ${style.dialogLabelDark}
                `}
              >
                EVM-Node
              </span>
              <div className={style.inputWrapper}>
                <input
                  className={`
                    ${style.input}
                    ${style.inputDark}
                  `}
                  type='text'
                  defaultValue={nodeInfo.evmNode}
                  {...register('evmNode', { required: true })}
                />
                {errors.evmNode && (
                  <div
                    className={`${style.formValidation} ${style.formValidationError}`}
                  >
                    <span
                      className={`${style.formValidationText} ${style.formValidationTextError}`}
                    >
                      Required Field
                    </span>
                  </div>
                )}
                {!nodeIsUpAndRunning(contract) && (
                  <div
                    className={`${style.formValidation} ${style.formValidationError}`}
                  >
                    <SVGIcon
                      icon='faExclamationTriangle'
                      className={`${style.formValidationText} ${style.formValidationTextError} mr-3`}
                    />
                    <span
                      className={`${style.formValidationText} ${style.formValidationTextError}`}
                    >
                      Connection failed!
                    </span>
                  </div>
                )}
              </div>
            </div>
            {/* <div className=''>
                  <span
                    className={`
                      ${style.dialogLabel}
                      ${style.dialogLabelDark}
                    `}
                  >
                    Chain-ID
                  </span>
                  <input
                    className={`${style.input} ${style.inputDark}`}
                    type='text'
                    defaultValue={chainId}
                    {...register('chainId', { required: true })}
                  />
                  {errors.chainId && (
                    <span className='text-red-500 text-sm'>Required Field</span>
                  )}
                </div> */}
            <div className='col-span-3'>
              <span
                className={`
                  ${style.dialogLabel}
                  ${style.dialogLabelDark}
                `}
              >
                Contract Address
              </span>
              <div className={style.inputWrapper}>
                <input
                  className={`${style.input} ${style.inputDark}`}
                  type='text'
                  defaultValue={nodeInfo.contractPostsAddress}
                  {...register('contractAddress', { required: true })}
                />
                {errors.contractAddress && (
                  <div
                    className={`${style.formValidation} ${style.formValidationError}`}
                  >
                    <span
                      className={`${style.formValidationText} ${style.formValidationTextError}`}
                    >
                      Required Field
                    </span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </form>
      }
      footer={
        <>
          <button
            type='button'
            className={`
            ${style.button}
            ${style.buttonTransparent}
            ${style.buttonTransparentDark}
            basis-full
          `}
            onClick={() => onClose()}
          >
            Cancel
          </button>
          <button
            type='submit'
            form='settingsForm'
            className={`${style.button} ${style.buttonDecensored} basis-full`}
          >
            Confirm
          </button>
        </>
      }
    />
  )
}

export default SettingsDialog
