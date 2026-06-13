'use client'

import { Card, CardHeader, CardBody, CardFooter } from '@nextui-org/card'
import { Link } from '@nextui-org/link'
import { Button } from '@nextui-org/button'
import { Chip } from '@nextui-org/chip'
import AnimatedCard from './AnimatedCard'

interface ProjectCardProps {
  name: string
  date: string
  description: string
  url?: string
  source?: string
  technology: string[]
  icon: React.ReactNode
  isWip?: boolean
  wipDescription?: string
}

const ProjectCard = (props: ProjectCardProps) => {
  return (
    <>
      <AnimatedCard>
        <Card className="p-4 bg-transparent border border-gray-200 dark:border-gray-800 w-full mb-6">
          <CardHeader className="flex flex-row gap-4">
            {props.icon}
            <div className="flex flex-col">
              <h2 className="text-xl font-bold">{props.name}</h2>
              <p className="text-sm text-gray-500">{props.date}</p>
            </div>
          </CardHeader>
          <CardBody>
            <p className="text-base">{props.description}</p>
            {props.isWip && (
              <div className="mt-4 flex flex-row items-center gap-2 text-pink-500">
                <svg viewBox="0 0 24 24" fill="currentColor" height="1em" width="1em">
                  <path d="M18 10v-4c0-3.313-2.687-6-6-6s-6 2.687-6 6v4h-3v14h18v-14h-3zm-5 7.723v2.277h-2v-2.277c-.595-.347-1-.984-1-1.723 0-1.104.896-2 2-2s2 .896 2 2c0 .738-.404 1.376-1 1.723zm-5-7.723v-4c0-2.206 1.794-4 4-4 2.205 0 4 1.794 4 4v4h-8z" />
                </svg>
                <span className="text-sm">{props.wipDescription}</span>
              </div>
            )}
            <div className="mt-4 flex flex-col gap-2">
              <span className="text-sm font-semibold">Technology used:</span>
              <div className="flex flex-wrap gap-2">
                {props.technology.map((tech, index) => (
                  <Chip key={index} size="sm" color="primary" variant="flat">
                    {tech}
                  </Chip>
                ))}
              </div>
            </div>
          </CardBody>
          <CardFooter className="flex flex-wrap gap-2">
            {props.source && (
              <Button
                as={Link}
                isExternal
                href={props.source}
                variant="bordered"
                color="primary"
                radius="full"
              >
                Source code
              </Button>
            )}
            {props.url && (
              <Button
                as={Link}
                isExternal
                href={props.url}
                variant="bordered"
                color="primary"
                radius="full"
              >
                Visit deployed app
              </Button>
            )}
          </CardFooter>
        </Card>
      </AnimatedCard>
    </>
  )
}

export default ProjectCard
