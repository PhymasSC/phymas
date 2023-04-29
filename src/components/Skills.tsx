import { Card, Text, Col, Row, Grid, Button } from '@nextui-org/react'
import { motion } from 'framer-motion'
import AnimatedCard from './AnimatedCard'
import SkillCard from './SkillCard'

const Skills = () => {
  return (
    <>
      <Grid.Container gap={3}>
        <Grid xs={12}>
          <Text h1>Skills.</Text>
        </Grid>
        <Grid xs={12} md={4}>
          <AnimatedCard>
            <SkillCard />
          </AnimatedCard>
        </Grid>
        <Grid xs={12} md={4}>
          <AnimatedCard>
            <SkillCard />
          </AnimatedCard>
        </Grid>
        <Grid xs={12} md={4}>
          <AnimatedCard>
            <SkillCard />
          </AnimatedCard>
        </Grid>
        <Grid xs={12} md={4}>
          <AnimatedCard>
            <SkillCard />
          </AnimatedCard>
        </Grid>
        <Grid xs={12} md={4}>
          <AnimatedCard>
            <SkillCard />
          </AnimatedCard>
        </Grid>
        <Grid xs={12} md={4}>
          <AnimatedCard>
            <SkillCard />
          </AnimatedCard>
        </Grid>
      </Grid.Container>
    </>
  )
}

export default Skills
