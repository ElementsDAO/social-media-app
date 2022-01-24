import React, { FunctionComponent } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import useStore from 'lib/store'
import { classNamesLib } from 'components/ClassNames/ClassNames'
import BaseDialog from 'components/Dialog/BaseDialog'

const SettingsDialog: FunctionComponent = () => {
  const {
    nodeActive,
    evmNode,
    setEVMnode,
    contractAddress,
    setContractPostsAddress,
    isOpenSettingsDialog,
    setIsOpenSettingsDialog,
  } = useStore((state) => ({
    nodeActive: state.nodeActive,
    evmNode: state.evmNode,
    setEVMnode: state.setEVMnode,
    contractAddress: state.contractPostsAddress,
    setContractPostsAddress: state.setContractPostsAddress,
    isOpenSettingsDialog: state.isOpenSettingsDialog,
    setIsOpenSettingsDialog: state.setIsOpenSettingsDialog,
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
    setEVMnode(data.evmNode)
    setContractPostsAddress(data.contractAddress)
    setIsOpenSettingsDialog(false)
  }

  const handleClose = (): void => {
    setIsOpenSettingsDialog(false)
  }

  return (
    <BaseDialog
      showDialog={isOpenSettingsDialog}
      onClose={handleClose}
      header='Node Settings'
      body={
        <form id='settingsForm' onSubmit={handleSubmit(onSubmit)}>
          <div className='grid grid-cols-3 gap-x-4 gap-y-8'>
            <div className='col-span-3'>
              <span
                className={`
                  ${classNamesLib.dialogLabel}
                  ${classNamesLib.dialogLabelDark}
                `}
              >
                EVM-Node
              </span>
              <input
                className={`
                  ${classNamesLib.input}
                  ${classNamesLib.inputDark}
                `}
                type='text'
                defaultValue={evmNode}
                {...register('evmNode', { required: true })}
              />
              {errors.evmNode && (
                <span className='text-red-500 text-sm'>Required Field</span>
              )}
              {!nodeActive && (
                <span className='text-red-500 text-sm'>Connection failed!</span>
              )}
            </div>
            {/* <div className=''>
                  <span
                    className={`
                      ${classNamesLib.dialogLabel}
                      ${classNamesLib.dialogLabelDark}
                    `}
                  >
                    Chain-ID
                  </span>
                  <input
                    className={`${classNamesLib.input} ${classNamesLib.inputDark}`}
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
                  ${classNamesLib.dialogLabel}
                  ${classNamesLib.dialogLabelDark}
                `}
              >
                Contract Address
              </span>
              <input
                className={`${classNamesLib.input} ${classNamesLib.inputDark}`}
                type='text'
                defaultValue={contractAddress}
                {...register('contractAddress', { required: true })}
              />
              {errors.contractAddress && (
                <span className='text-red-500 text-sm'>Required Field</span>
              )}
            </div>
          </div>
        </form>
      }
      footer={
        <>
          <button
            type='button'
            className={`
            ${classNamesLib.button}
            ${classNamesLib.buttonTransparent}
            ${classNamesLib.buttonTransparentDark}
            basis-full
          `}
            onClick={() => setIsOpenSettingsDialog(false)}
          >
            Cancel
          </button>
          <button
            type='submit'
            form='settingsForm'
            className={`${classNamesLib.button} ${classNamesLib.buttonDecensored} basis-full`}
          >
            Confirm
          </button>
        </>
      }
    />
  )
}

export default SettingsDialog
