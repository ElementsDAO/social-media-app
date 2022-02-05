import React, { useState } from 'react'
import type { NextPage } from 'next'
import shallow from 'zustand/shallow'
import useStore from 'lib/store'
import Header from 'components/Header/Header'
import AsideNavigation from 'components/Navigation/AsideNavigation'
import BottomNavigation from 'components/Navigation/BottomNavigation'
import SpaceItem from 'components/Spaces/SpaceItem'
import SpacesHeader from 'components/Spaces/SpacesHeader'
import CreateSpaceDialog from 'components/Dialog/CreateSpaceDialog'
import SVGIcon from 'components/Icon/SVGIcon'
import { style } from 'styles/style'
import { sortSpaces } from 'lib/storeUtils'
import { SpaceType } from 'lib/types'

const Spaces: NextPage = () => {
  const [isSignedUp, spaces, posts] = useStore((state) => [state.isSignedUp, state.spaces, state.posts], shallow)
  const [sortType, setSortType] = React.useState('numberOfPostsInSpace')
  const [searchTerm, setSearchTerm] = React.useState('')
  const [spaceResults, setSpaceResults] = React.useState([] as SpaceType[])
  const [openCreateSpaceDialog, setOpenCreateSpaceDialog] = useState(false)

  const uniqueUsers = [
    ...new Map(posts.map((post) => [post.username, { userId: post.author, username: post.username }])).values(),
  ]

  const handleChange = (event: any) => {
    setSearchTerm(event.target.value)
  }

  // Search or sort spaces
  React.useEffect(() => {
    const result = sortSpaces(spaces, posts, sortType).filter((space) => space.name.toLowerCase().includes(searchTerm))
    setSpaceResults(result)
  }, [searchTerm, sortType, spaces, posts])

  const createSpaceItems = spaceResults.map((space: any) => <SpaceItem key={`space-${space.id}`} {...space} />)

  return (
    <>
      <Header />
      <div className={style.bodyContainer}>
        <div className={`${style.bodyContainerCol1} hide-on-mobile`}>
          <AsideNavigation />
        </div>
        <div className={style.bodyContainerCol2}>
          <div className={style.feedWrapper}>
            {isSignedUp && (
              <SpacesHeader nrOfPosts={posts.length} nrOfSpaces={spaces.length} nrOfUsers={uniqueUsers.length} />
            )}
            <div className={style.feedItemInteractionBar}>
              {isSignedUp && (
                <>
                  <button
                    type='button'
                    onClick={() => setOpenCreateSpaceDialog(true)}
                    className={`${style.button} ${style.buttonDecensored}`}
                  >
                    <SVGIcon icon='faPlus' isFixed />
                    <span className='hide-on-mobile'>Create Space</span>
                  </button>
                  <CreateSpaceDialog
                    showDialog={openCreateSpaceDialog}
                    onClose={() => setOpenCreateSpaceDialog(false)}
                  />
                </>
              )}
              <input
                value={searchTerm}
                onChange={handleChange}
                type='text'
                placeholder='Search for a space'
                className={`
                ${style.input}
                ${style.inputDefault}
                ${style.inputDefaultDark}
                ${style.inputFocus}
              `}
              />
              <select
                className={`
                ${style.input}
                ${style.inputDefault}
                ${style.inputDefaultDark}
                ${style.inputFocus}
              `}
                onChange={(e) => setSortType(e.target.value)}
              >
                <option value='numberOfPostsInSpace|desc'>Most active</option>
                <option value='latestPostIndexInSpace|desc'>Latest Activity</option>
                <option value='id|desc'>Newest Space</option>
                {/*             <option value='name|asc'>Name A-Z</option>
              <option value='name|desc'>Name Z-A</option> */}
              </select>
            </div>
            {createSpaceItems}
          </div>
        </div>
      </div>
      <div className='hide-on-desktop'>
        <BottomNavigation />
      </div>
    </>
  )
}

export default Spaces
