import { useState } from 'react'
import { Avatar, Center, Container, Grid, Stack, Tabs, Text, Title, useMantineTheme } from '@mantine/core'
import DrWagner from './assets/drwagner.jpg'

const App = () => {
  const theme = useMantineTheme()

  const [activeTab, setActiveTab] = useState<string | null>('about me')

  return (
    <Container size='lg'>
      <Grid mt={25}>
        <Grid.Col span={6}>
          <Stack spacing='xs'>
            <Title order={1} color={theme.white}>
              Chris Wagner, MD
            </Title>
            <Title order={3} color={theme.white} fw={300}>
              General Surgeon
            </Title>
            <Text color={theme.white} italic size={16}>
              Since 1993, Chris Wagner, MD, provides extensive general surgical services, with an interest in colon, anti-reflux, 
              and hernia repair.  Dr. Wagner is specially trained in robotic surgery; offering patients the most 
              technologically advanced, minimally invasive procedures available. Dr. Wagner also specializes in breast, 
              gallbladder, endocrine and gastrointestinal surgery.
            </Text>
          </Stack>
        </Grid.Col>
        <Grid.Col span={6}>
          <Center>
            <Avatar
              src={DrWagner}
              alt='Dr Wagner'
              size={260}
              radius={100}
              ml={150}
            />
          </Center>
        </Grid.Col>
        <Grid.Col span={12} mt={15}>
          <Tabs
            value={activeTab} 
            onTabChange={setActiveTab}
            color='blue'
          >
            <Tabs.List grow position='center'>
              <Tabs.Tab 
                value='about me' 
                sx={{ 
                  fontSize: 20,
                  color: theme.white,
                  '&:hover': {
                    backgroundColor: 'inherit'
                  },
                  '&[data-active]': {
                    color: theme.white,
                    fontWeight: 'bold'
                  }
                }}
                color='inherit'
              >
                About Me
              </Tabs.Tab>
              <Tabs.Tab 
                value='services' 
                sx={{ 
                  fontSize: 20,
                  color: theme.white,
                  '&:hover': {
                    backgroundColor: 'inherit'
                  },
                  '&[data-active]': {
                    color: theme.white,
                    fontWeight: 'bold'
                  }
                }}
              >
                Services
              </Tabs.Tab>
              <Tabs.Tab 
                value='testimonials' 
                sx={{ 
                  fontSize: 20,
                  color: theme.white,
                  '&:hover': {
                    backgroundColor: 'inherit'
                  },
                  '&[data-active]': {
                    color: theme.white,
                    fontWeight: 'bold'
                  }
                }}
              >
                Testimonials
              </Tabs.Tab>
              <Tabs.Tab 
                value='gallery' 
                sx={{ 
                  fontSize: 20,
                  color: theme.white,
                  '&:hover': {
                    backgroundColor: 'inherit'
                  },
                  '&[data-active]': {
                    color: theme.white,
                    fontWeight: 'bold'
                  }
                }}
              >
                Gallery
              </Tabs.Tab>
            </Tabs.List>
          </Tabs>
        </Grid.Col>
      </Grid>
    </Container>
  )
}

export default App
