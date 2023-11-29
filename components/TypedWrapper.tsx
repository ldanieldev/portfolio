'use client'
import { useEffect, useRef } from 'react'
import Typed from 'typed.js'

type props = {
  fallbackText: string
  stringList: string[]
}

export default function TypedWrapper({ fallbackText, stringList }: props) {
  const TypedElement = useRef(null)

  useEffect(() => {
    if (!TypedElement.current) {
      return
    }

    const typed = new Typed(TypedElement.current, {
      stringsElement: '.typed-strings',
      typeSpeed: 100,
      backDelay: 1000,
      loop: true,
      contentType: 'html',
    })

    return () => {
      typed.destroy()
    }
  }, [])

  return (
    <div className="typed-wrapper">
      <div className="typed-strings hidden">
        {stringList.map((string, idx) => (
          <p key={idx}>{string}</p>
        ))}
      </div>
      <span ref={TypedElement} className="text-primary uppercase font-bold">
        {fallbackText}
      </span>
    </div>
  )
}
