/* eslint-disable max-len */
/* prettier-ignore */
export const classNamesLib = {
  body: 'font-sans bg-slate-100 text-gray-900',
  bodyDark: 'dark:bg-darkmode-100 dark:text-gray-400',

  bodyContainer: 'container mx-auto max-w-screen-lg px-3 flex pt-5 sm:pt-10 sm:gap-x-[2%]',
  bodyContainerCol1: 'flex-none w-[34px] sm:w-48',
  bodyContainerCol2: 'flex-auto px-3',
  container: 'container mx-auto max-w-md px-3',

  headerWrapper: 'sticky top-0 left-0 right-0 bg-gradient w-full flex flex-col items-start z-10',
  headerInner: 'flex w-full gap-y-5 p-4 justify-between items-center',

  inputWrapper: 'relative',
  input: 'form-input px-3 rounded w-full focus:outline-none border border-gray-300 text-gray-900 focus:ring-1 focus:ring-purple-700 h-[40px]',
  inputDark: 'dark:bg-darkmode-100 dark:border-hidden dark:text-white',

  form: 'px-3 w-full rounded w-full h-28',
  formTransparent: '!p-0 bg-transparent border-none outline-none focus:outline-none resize-none',
  formDark: 'placeholder:text-gray-900',
  formPlaceholder: 'placeholder:italic placeholder:text-gray-400',
  formPlaceholderDark: 'placeholder:dark:text-darkmode-1500',
  formValidation: 'px-[9px] py-1 flex items-center absolute left-[3px] right-[3px] rounded-b bg-opacity-20',
  formValidationError: 'bg-red-500',
  formValidationText: 'text-xs',
  formValidationTextError: 'text-red-500',

  button: 'font-medium px-4 rounded whitespace-nowrap cursor-pointer h-[40px]',
  buttonNoXsPadding: 'px-0 sm:px-4',
  buttonDecensored: 'bg-highlight-900 hover:bg-purple-800 text-white',
  buttonDecensoredHeader: 'bg-purple-500 hover:bg-purple-700 text-white',
  buttonTransparent: 'bg-transparent text-gray-900 hover:text-purple-900',
  buttonTransparentDark: 'dark:text-gray-500',

  dialogOverlay: 'fixed inset-0 bg-black opacity-70',
  dialogWrapper: 'flex fixed top-20 w-full mx-auto items-center justify-center',
  dialogInner: 'relative bg-white w-full max-w-sm mx-auto shadow-xl rounded bg-white divide-y divide-solid divide-gray-200',
  dialogInnerDark: 'dark:bg-darkmode-600 dark:divide-darkmode-1000',
  dialogHeader: 'text-xl text-bold text-center px-8 py-4',
  dialogHeaderDark: 'dark:text-gray-300',
  dialogLabel: 'block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2',
  dialogLabelDark: 'dark:text-gray-300',
  dialogBody: 'p-8',
  dialogFooter: 'flex gap-y-10 justify-between px-8 py-4',

  popoverWrapper: 'rounded bg-white w-52 divide-y divide-solid divide-gray-200 shadow-xl',
  popoverWrapperDark: 'dark:bg-darkmode-600 dark:divide-darkmode-1000',
  popoverHeader: 'px-4 py-3',
  popoverHeaderLabel: 'text-xs',
  popoverHeaderName: 'text-lg dark:text-gray-300',
  popoverBody: 'p-2 flex flex-col gap-y-1',
  popoverBodyButton: 'rounded flex items-center gap-x-3 text-left p-2 text-sm text-gray-900 hover:text-highlight-900 hover:bg-highlight-10',
  popoverBodyButtonDark: 'dark:text-gray-300 dark:hover:text-white dark:hover:bg-highlight-900',

  navigationAsideWrapper: 'sticky top-[80px] sm:top-[100px]',
  navigationAsideInner: 'flex flex-col justify-between h-screen-header',
  navigationAsideInnerTop: '',
  navigationAsideInnerBottom: 'pb-4',
  navigationAsideButtonWrapper: 'flex flex-col gap-y-1',
  navigationAsideButton: 'rounded flex items-center gap-x-3 text-left p-2 text-sm text-gray-900 hover:text-white hover:bg-highlight-500 cursor-pointer',
  navigationAsideButtonDark: 'dark:text-gray-300 dark:hover:text-white dark:hover:bg-highlight-500',
  navigationAsideButtonActive: 'font-bold text-highlight-900 dark:text-highlight-500',
  navigationAsideButtonText: 'hidden sm:block',
  navigationAsideButtonIcon: 'w-[40px] text-lg sm:text-sm',
  navigationAsideButtonIconInvisible: 'text-lg sm:text-sm opacity-0',
  navigationAsideButtonSpacer: 'h-5',
  navigationAsideBottomInteractionWrapper: 'flex flex-col flex-col-reverse items-center gap-3 sm:justify-between sm:flex-row',
  navigationAsideInteractionSwitch: 'mt-2 sm:mt-0',
  navigationAsideSocialButtonWrapper: 'flex flex-col sm:flex-row gap-2',
  navigationAsideSocialButton: 'text-lg sm:text-xl text-gray-900 hover:text-highlight-900',
  navigationAsideSocialButtonDark: 'dark:text-gray-300 dark:hover:text-white',

  navigationBottomWrapper: 'fixed left-0 right-0 bottom-0 flex gap-y-5 bg-white',
  navigationBottomWrapperDark: 'dark:bg-darkmode-100 dark:divide-darkmode-1000',
  navigationBottomInner: 'py-4 sm:py-6 flex gap-y-5',
  navigationBottomItem: 'flex grow flex-col items-center justify-center cursor-pointer text-2xl',
  navigationBottomItemColor: 'text-highlight-900 hover:text-purple-800 dark:text-highlight-500 dark:hover:text-highlight-100',
  navigationBottomItemColorActive: 'text-purple-800 dark:text-highlight-100',
  navigationBottomItemText: 'relative text-xs mt-2 flex flex-col min-w-[30px]',
  navigationBottomMotionSpan: 'h-[1px] absolute -left-1 -right-1 -bottom-2',
  navigationBottomMotionSpanColor: 'bg-purple-800',
  navigationBottomMotionSpanColorDark: 'dark:bg-highlight-100',

  feedWrapper: 'flex flex-col gap-y-5 mb-[80px] sm:mb-[120px]',
  // feedPostsWrapper: 'flex flex-col gap-y-5',

  feedItemWrapper: 'bg-white rounded divide-y divide-solid divide-gray-200 shadow-sm',
  feedItemWrapperDark: 'dark:bg-darkmode-600 dark:divide-darkmode-200',
  feedItemInner: 'rounded p-5',
  feedItemInnerTop: 'rounded-t p-5',
  feedItemInnerBottom: 'px-5 py-3 rounded-b flex justify-between',
  feedItemInnerBottomCol: 'flex gap-x-3 items-center',
  feedItemMetaWrapper: 'flex justify-between mb-2',
  feedItemMetaTimestamp: 'text-xs text-right text-gray-500',
  feedItemMetaName: 'font-bold text-gray-900',
  feedItemMetaNameDark: 'dark:text-gray-300',
  feedItemText: 'break-words break-all font-light',
  feedItemTextDark: '',
  feedItemInteractionIcon: 'cursor-pointer text-highlight-40 hover:text-highlight-500',
  feedItemInteractionIconDark: 'dark:text-darkmode-1700 dark:hover:text-highlight-400',

  spaceHeaderWrapper: 'bg-gradient rounded px-5 py-7',
  spaceHeaderInner: 'flex flex-col justify-center',
  spaceHeaderTitle: 'text-center text-white text-2xl',
  spaceHeaderColsWrapper: 'flex w-full mx-auto justify-evenly text-white pt-2 text-center',
  spaceHeaderColWrapper: 'flex flex-col',
  spaceHeaderColTitle: 'text-2xl mt-2 font-bold',
  spaceHeaderColText: 'text-xs font-light',

  tag: 'flex-none uppercase text-xs tracking-wide font-medium px-2 py-1 rounded',
  tagNotClickable: 'bg-highlight-10 text-highlight-900',
  tagNotClickableDark: 'dark:bg-darkmode-1000 dark:text-highlight-400',
  tagClickable: 'bg-highlight-10 text-highlight-500 hover:text-highlight-900',
  tagClickableDark: 'dark:bg-darkmode-1000 dark:text-darkmode-1900 dark:hover:text-highlight-400',

  switch: 'rounded-full bg-slate-300 p-[3px] w-[40px] h-[25px] flex',
  switchDark: 'rounded-full dark:bg-darkmode-600',
  switchInner: 'rounded-full text-gray-900 w-[19px] h-[19px] flex justify-center items-center',
  switchInnerDark: 'dark:text-white',
}
