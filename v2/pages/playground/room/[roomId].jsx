/* eslint-disable */

import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Gun from 'gun/gun' // https://gun.eco https://codesandbox.io/s/react-playground-forked-dceh9?file=/index.js
import 'gun/lib/open' // https://gun.eco https://codesandbox.io/s/react-playground-forked-dceh9?file=/index.js
import { classNamesLib } from 'components/ClassNames/ClassNames'
import Header from 'components/Header/Header'
import { inBrowser } from 'lib/where'

const gun = Gun({
  peers: inBrowser
    ? [
        'https://bullchat.syon.ca/gun',
        'https://gunjs.herokuapp.com/gun',
        'https://notabug.io/gun',
        // 'http://localhost:3001/gun',
        // 'http://localhost:8765/gun',
        // `${location.origin}/gun`,
        // `${location.origin}/api/gun`,
      ]
    : [],
})
global.gun = gun // for debugging

const NAMESPACE = 'decensored'

const Playground = () => {
  const router = useRouter()
  const { roomId } = router.query

  const [inputText, setInputText] = useState('')
  const [items, setItems] = useState([])
  // console.log('items', items)

  useEffect(() => {
    const getter = gun.get(NAMESPACE).get(roomId)

    getter.open((data) => {
      const items = Object.values(data)
        .filter((item) => !!item) // filter out deleted values which will appear as null
        .reverse()
      setItems(items)
    })

    // I don't know why "return getter.off" doesn't work when going to another page
    return () => {
      getter.off()
    }
  }, [roomId])

  return (
    <>
      <Header />
      <div className={classNamesLib.container}>
        <div className={classNamesLib.feedWrapper}>
          <div
            className={`${classNamesLib.feedItemWrapper} ${classNamesLib.feedItemWrapperDark}`}
          >
            <div className={classNamesLib.feedItemInner}>
              {roomId}
              <div className='flex gap-x-3'>
                <input
                  type='text'
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  className={`${classNamesLib.input} ${classNamesLib.inputDark}`}
                />
                <button
                  type='button'
                  onClick={() => {
                    const randomId = `id_${Date.now()}`
                    gun
                      .get(NAMESPACE)
                      .get(roomId)
                      .get(randomId)
                      .put({ text: inputText, id: randomId })
                    setInputText('')
                  }}
                  className={`${classNamesLib.button} ${classNamesLib.buttonDecensored}`}
                >
                  Submit
                </button>
              </div>
            </div>
          </div>

          {items.map((item) => (
            <div
              key={item.id}
              className={`${classNamesLib.feedItemWrapper} ${classNamesLib.feedItemWrapperDark}`}
            >
              <div className={classNamesLib.feedItemInnerTop}>
                <div className={classNamesLib.feedItemMetaWrapper}>
                  <div
                    className={`${classNamesLib.feedItemMetaName} ${classNamesLib.feedItemMetaNameDark}`}
                  >
                    <button
                      type='button'
                      onClick={() => {
                        gun.get(NAMESPACE).get(roomId).get(item.id).put(null)
                      }}
                      className={`${classNamesLib.button} ${classNamesLib.buttonDecensored}`}
                    >
                      Delete
                    </button>
                    {/* &lt;Username&gt; */}
                  </div>
                </div>
              </div>
              <div className={classNamesLib.feedItemInnerBottom}>
                {item.text}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default Playground
