import React, { FunctionComponent } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faArrowLeft,
  faBookmark,
  faCheck,
  faCircle,
  faClipboard,
  faCog,
  faComment,
  faComments,
  faExclamationTriangle,
  faEye,
  faEyeSlash,
  faHeart,
  faIdBadge,
  faIdCardAlt,
  faMinusSquare,
  faMoon,
  faPlus,
  faRedoAlt,
  faRocket,
  faSatellite,
  faSatelliteDish,
  faSearch,
  faShare,
  faShieldAlt,
  faSignOutAlt,
  faSpinner,
  faSun,
  faTimes,
  faTrash,
  faUser,
  faUserAstronaut,
  faUserPlus,
} from '@fortawesome/free-solid-svg-icons'
import { faDiscord, faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { IconProp } from '@fortawesome/fontawesome-svg-core'

interface IconProps {
  icon: string
  className?: string
  isFixed?: boolean
  onClick?: () => void
}

const iconLookup: { [unit: string]: any } = {
  faArrowLeft: faArrowLeft,
  faBookmark: faBookmark,
  faCheck: faCheck,
  faCircle: faCircle,
  faClipboard: faClipboard,
  faCog: faCog,
  faComment: faComment,
  faComments: faComments,
  faDiscord: faDiscord,
  faExclamationTriangle: faExclamationTriangle,
  faEye: faEye,
  faEyeSlash: faEyeSlash,
  faGithub: faGithub,
  faHeart: faHeart,
  faIdBadge: faIdBadge,
  faIdCardAlt: faIdCardAlt,
  faMinusSquare: faMinusSquare,
  faMoon: faMoon,
  faPlus: faPlus,
  faRedoAlt: faRedoAlt,
  faRocket: faRocket,
  faSatellite: faSatellite,
  faSatelliteDish: faSatelliteDish,
  faSearch: faSearch,
  faShare: faShare,
  faShieldAlt: faShieldAlt,
  faSignOutAlt: faSignOutAlt,
  faSpinner: faSpinner,
  faSun: faSun,
  faTimes: faTimes,
  faTrash: faTrash,
  faTwitter: faTwitter,
  faUser: faUser,
  faUserAstronaut: faUserAstronaut,
  faUserPlus: faUserPlus,
}

const Icon: FunctionComponent<IconProps> = ({ icon, className, isFixed = false, onClick }) => {
  const setIcon = (): IconProp => {
    const getIcon = iconLookup[icon]
    if (!getIcon) console.warn(`${icon} undefined`)
    return getIcon
  }

  return <FontAwesomeIcon fixedWidth={isFixed} icon={setIcon()} className={className} onClick={onClick} />
}

export default Icon
