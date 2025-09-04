import React from 'react'
import { TextAnimation } from '../ui/Animations'

const PageHeaders = ({title,subtitle1 ,subtitle2,description}) => {
  return (
     <header className=" py-10 md:py-14 lg:py-16">
            <div className="max-w-3xl mx-auto text-center">
              <span className="block text-xs md:text-sm font-semibold tracking-wider text-neutral-500 uppercase mb-2">
                {title}
              </span>
              <TextAnimation>
                <h1 className="text-4xl md:text-5xl font-bold mb-3">
                  {subtitle1} <span className="text-primary">{subtitle2}</span>
                </h1>
              </TextAnimation>
              <TextAnimation delay={0.2}>
                {description && (
                  <p className="text-neutral-600 md:text-lg">
                    {description}
                  </p>
                )}
              </TextAnimation>
            </div>
          </header>
    
  )
}

export default PageHeaders
