import React from 'react'
import { Card, CardBody } from '@windmill/react-ui'
import { CartIcon, ChatIcon, MoneyIcon, PeopleIcon } from '../assets/icons'

import InfoCard, { CTA, RoundIcon } from '../components/cards/InfoCard'


function Cards() {
  return (
    <>
      <h1 className="my-6 text-2xl font-semibold text-gray-700 dark:text-gray-200 pageTitle">Cards</h1>
     

      <CTA />

      <h2 className="mb-4 text-lg font-semibold text-gray-600 dark:text-gray-300">Big section cards</h2>

      

      <Card className="mb-8 shadow-md fullWidthCard">
        <CardBody>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Large, full width sections goes here
          </p>
        </CardBody>
      </Card>
      

      
      <h2 className="mb-4 text-lg font-semibold text-gray-600 dark:text-gray-300">Cards with title</h2>

      <div className="grid gap-6 mb-8 md:grid-cols-2">
        <Card className="cardWithHeading">
          <CardBody>
            <p className="mb-4 font-semibold text-gray-600 dark:text-gray-300">Revenue</p>
            <p className="text-gray-600 dark:text-gray-400">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga, cum commodi a omnis
              numquam quod? Totam exercitationem quos hic ipsam at qui cum numquam, sed amet
              ratione! Ratione, nihil dolorum.
            </p>
          </CardBody>
        </Card>

        <Card colored className="text-white bg-purple-600 cardWithHeading">
          <CardBody>
            <p className="mb-4 font-semibold">Colored card</p>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga, cum commodi a omnis
              numquam quod? Totam exercitationem quos hic ipsam at qui cum numquam, sed amet
              ratione! Ratione, nihil dolorum.
            </p>
          </CardBody>
        </Card>
      </div>
            
    </>


  )
}

export default Cards
