import React from "react";
import { Card, CardBody, Label } from "@windmill/react-ui";
import { CartIcon, ChatIcon, MoneyIcon, PeopleIcon } from "../assets/icons";

import InfoCard, { CTA, RoundIcon } from "../components/cards/InfoCard";

function Cards() {
  return (
    <>
      <h1 className="my-6 text-2xl font-semibold text-gray-700 dark:text-gray-200 pageTitle">
        Cards
      </h1>

      <CTA />

      <h2 className="mb-4 text-lg font-semibold text-gray-600 dark:text-gray-300">
        Big section cards
      </h2>

      <Card className="mb-8 shadow-md fullWidthCard">
        <CardBody>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Large, full width sections goes here
          </p>
        </CardBody>
      </Card>



      <h2 className="mb-4 text-lg font-semibold text-gray-600 dark:text-gray-300">
        Responsive cards
      </h2>

      <div className="grid gap-6 mb-8 md:grid-cols-2 xl:grid-cols-4">
        <InfoCard title="Total clients" value="6389">
          <RoundIcon
            icon={PeopleIcon}
            iconColorClass="text-orange-500 dark:text-orange-100"
            bgColorClass="bg-orange-100 dark:bg-orange-500"
            className="mr-4"
          />
        </InfoCard>

        <InfoCard title="Account balance" value="$ 46,760.89">
          <RoundIcon
            icon={MoneyIcon}
            iconColorClass="text-green-500 dark:text-green-100"
            bgColorClass="bg-green-100 dark:bg-green-500"
            className="mr-4"
          />
        </InfoCard>

        <InfoCard title="New sales" value="376">
          <RoundIcon
            icon={CartIcon}
            iconColorClass="text-blue-500 dark:text-blue-100"
            bgColorClass="bg-blue-100 dark:bg-blue-500"
            className="mr-4"
          />
        </InfoCard>

        <InfoCard title="Pending contacts" value="35">
          <RoundIcon
            icon={ChatIcon}
            iconColorClass="text-teal-500 dark:text-teal-100"
            bgColorClass="bg-teal-100 dark:bg-teal-500"
            className="mr-4"
          />
        </InfoCard>
      </div>

      <h2 className="mb-4 text-lg font-semibold text-gray-600 dark:text-gray-300">
        Cards with title
      </h2>

      <div className="grid gap-6 mb-8 md:grid-cols-2">
        <Card className="cardWithHeading">
          <CardBody>
            <p className="mb-4 font-semibold text-gray-600 dark:text-gray-300">
              Revenue
            </p>
            <p className="text-gray-600 dark:text-gray-400">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga,
              cum commodi a omnis numquam quod? Totam exercitationem quos hic
              ipsam at qui cum numquam, sed amet ratione! Ratione, nihil
              dolorum.
            </p>
          </CardBody>
        </Card>

        <Card colored className="text-white bg-purple-600 cardWithHeading">
          <CardBody>
            <p className="mb-4 font-semibold">Colored card</p>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga,
              cum commodi a omnis numquam quod? Totam exercitationem quos hic
              ipsam at qui cum numquam, sed amet ratione! Ratione, nihil
              dolorum.
            </p>
          </CardBody>
        </Card>
      </div>

      <h2 className="mb-4 text-lg font-semibold text-gray-600 dark:text-gray-300">
        Icons
      </h2>

      <div className="px-4 py-3 mb-8 bg-white rounded-lg shadow-md dark:bg-gray-800 inputWithIconContainer">
        <Label className="inputWithIcon">
          <span>Icon left</span>
          {/* <!-- focus-within sets the color for the icon when input is focused --> */}
          <div className="relative text-gray-500 focus-within:text-purple-600 dark:focus-within:text-purple-400">
            <input
              className="block w-full pl-10 mt-1 text-sm text-black dark:text-gray-300 dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:focus:shadow-outline-gray form-input"
              placeholder="Jane Doe"
            />
            <div className="absolute inset-y-0 flex items-center ml-3 pointer-events-none">
              <PeopleIcon className="w-5 h-5" aria-hidden="true" />
            </div>
          </div>
        </Label>

        <Label className="mt-4 inputWithIcon">
          <span className="text-gray-700 dark:text-gray-400">Icon right</span>
          {/* <!-- focus-within sets the color for the icon when input is focused --> */}
          <div className="relative text-gray-500 focus-within:text-purple-600 dark:focus-within:text-purple-400">
            <input
              className="block w-full pr-10 mt-1 text-sm text-black dark:text-gray-300 dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:focus:shadow-outline-gray form-input"
              placeholder="Jane Doe"
            />
            <div className="absolute inset-y-0 right-0 flex items-center mr-3 pointer-events-none">
              <PeopleIcon className="w-5 h-5" aria-hidden="true" />
            </div>
          </div>
        </Label>
      </div>
    </>
  );
}

export default Cards;