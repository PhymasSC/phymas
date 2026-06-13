'use client'

import { Card, CardHeader, CardBody } from '@nextui-org/card'
import { Link } from '@nextui-org/link'
import AnimatedCard from './AnimatedCard'
import AnimatedChargingBar from './AnimatedChargingBar'

interface SkillCardProps {
  name: string
  description: string
  url: string
  image: React.ReactNode
  level: number
}

const SkillCard = (props: SkillCardProps) => {
  return (
    <>
      <AnimatedCard>
        <Card className="p-4 bg-transparent border border-gray-200 dark:border-gray-800 h-full w-full">
          <CardHeader className="flex flex-row items-center gap-4">
            <h2 className="text-xl font-bold uppercase">{props.name}</h2>
          </CardHeader>
          <CardBody className="overflow-visible py-2">
            <div className="flex justify-center items-center w-full mb-4">
              {props.image}
            </div>
            <p className="text-sm font-semibold uppercase">{props.description}</p>
            <div className="mt-4">
              <Link isExternal href={props.url}>
                Learn more
              </Link>
            </div>
            <div className="mt-4 flex flex-row items-center gap-2">
              <span className="text-sm">Proficiency level:</span>
              <AnimatedChargingBar
                level={props.level}
                levelInText={`Proficiency level: ${props.level}`}
              />
            </div>
          </CardBody>
        </Card>
      </AnimatedCard>
    </>
  )
}

export default SkillCard
