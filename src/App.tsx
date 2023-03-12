import { Anchor, AppShell, Avatar, Box, Card, Flex, Grid, Group, Header, Text, Title, useMantineTheme } from '@mantine/core'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { TbPhone } from 'react-icons/tb'
import DrWagner from './assets/ChristopherWagner.png'
import { Carousel } from '@mantine/carousel'
import { useMediaQuery } from '@mantine/hooks'

const AppHeader = ({ theme }: any) => {
  return (
    <Header height={100}>
      <Flex
        justify='space-between'
        p={18}
        bg='#166088'
      >
        <Anchor id='home-link' href='/'>
          <Title order={1} color='#F0EDEE' ff={theme.fontFamily}>
          CHRIS WAGNER, MD
          </Title>
        </Anchor>
        <Group>
          <Anchor className='header-link' size='lg' href='/'>Home</Anchor>
          <Anchor className='header-link' size='lg' href='/education'>Education</Anchor>
          <Anchor className='header-link' size='lg' href='/videos'>Videos</Anchor>
          <Anchor className='header-link' size='lg' href='/testimonials'>Testimonials</Anchor>
        </Group>
      </Flex>
      <Box sx={() => ({
        backgroundColor: '#EA8C55',
        height: 20
      })}></Box>
    </Header>
  )
}

const Home = () => {
  return (
    <Grid mt={25}>
      <Grid.Col md={3}>
        <Avatar
          src={DrWagner}
          alt='Dr Wagner'
          size={260}
          radius={100}
        />
      </Grid.Col>
      <Grid.Col md={7}>
        <Title order={1} color='#166088'>About Dr. Wagner</Title>
        <Text mt={30} size={20}>
          As a board-certified general surgeon, Chris Wagner, MD has been providing surgical 
          services to the Fox Valley area for more than 22 years. He has special interest in 
          robotic surgery, as well as colorectal, anti-reflux and hernia repair. Dr. Wagner has 
          expanded his practice locations throughout the Valley to include Chilton, Oshkosh and Waupaca.
        </Text>
      </Grid.Col>
      <Grid.Col md={2} />
      <Grid.Col md={3}>
        <Anchor 
          href='tel:(920)-731-8131' 
          style={{
            color: '#0A090C',
            marginLeft: 70,
            marginTop: 25
          }}>
          <TbPhone /> (920)-731-8131
        </Anchor>
      </Grid.Col>
      <Grid.Col md={9}>
        <Text size={28} color='#7F557D'>Specialties</Text>
        <Text size={20}>Colorectal Surgery</Text>
        <Text size={20}>Gastrointestinal Endoscopy</Text>
        <Text size={20}>General Surgery</Text>
        <Text size={20}>Hernia Repair</Text>
        <Text size={20}>Laparoscopy</Text>
        <Text size={20}>Reflux Treatment</Text>
        <Text size={20}>Robotic Surgery</Text>
      </Grid.Col>
    </Grid>
  )
}

const Education = () => {
  return (
    <Grid>
      <Grid.Col md={12}>
        <Card bg='#7F557D'>
          <Title order={2} color='#F0EDEE'>College</Title>
          <ul>
            <li style={{ color: '#F0EDEE' }}>
              <Text>
                Bachelor of Science, Biomedicine - Western Michigan University
              </Text>
            </li>
            <li style={{ color: '#F0EDEE' }}>
              <Text>
                Doctor of Medicine - Medical College of Wisconsin
              </Text>
            </li>
          </ul>
        </Card>
      </Grid.Col>
      <Grid.Col md={12}>
        <Card bg='#7F557D'>
          <Title order={2} color='#F0EDEE'>Graduation Training</Title>
          <ul>
            <li style={{ color: '#F0EDEE' }}>
              <Text>
                Internship - Fairview General Hospital, Cleveland
              </Text>
            </li>
            <li style={{ color: '#F0EDEE' }}>
              <Text>
                Residency - Iowa Methodist Hospital, Des Moines
              </Text>
            </li>
          </ul>
        </Card>
      </Grid.Col>
      <Grid.Col md={12}>
        <Card bg='#7F557D'>
          <Title order={2} color='#F0EDEE'>License/Certification</Title>
          <ul>
            <li style={{ color: '#F0EDEE' }}>
              <Text>
                Board Certified - General Surgery
              </Text>
            </li>
            <li style={{ color: '#F0EDEE' }}>
              <Text>
                Wisconsin State License
              </Text>
            </li>
          </ul>
        </Card>
      </Grid.Col>
    </Grid>
  )
}

const Videos = () => {
  return (
    <div>
      Videos
    </div>
  )
}

const Testimonials = () => {
  const theme = useMantineTheme()
  const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`)
  return (
    <Grid mt={25}>
      <Grid.Col md={2}>
        <Avatar
          src={DrWagner}
          alt='Dr Wagner'
          size={150}
          radius={100}
        />
      </Grid.Col>
      <Grid.Col md={7}>
        <Title order={1} color='#166088'>Testimonials</Title>
        <Text mt={20} size={20}>
        Dr. Wagner works closely with his patients to provide a comprehensive treatment plan for each individual patient. He understands the importance of working with each patient in order to ensure the best outcomes.
        </Text>
      </Grid.Col>
      <Grid.Col md={12} mt={70}>
        <Carousel
          slideSize="25%"
          breakpoints={[{ maxWidth: 'sm', slideSize: '100%', slideGap: 2 }]}
          slideGap="xl"
          align="start"
          slidesToScroll={mobile ? 1 : 4}
          controlsOffset={0}
        >
          <Carousel.Slide>
            <Card bg='#166088' padding={28}>
              <Text color='#F0EDEE' size={12}>
                Dr. Wagner operated on my son a few years ago. He delivered the highest standard of care while making both of us feel comfortable and at ease. He was very kind, caring, informative and professional. My son had great results from his surgery. Thank you Dr. Wagner.
              </Text>
              <Text color='#F0EDEE' size={12}>
                - Jodi B
              </Text>
            </Card>
          </Carousel.Slide>
          <Carousel.Slide>
            <Card bg='#EA8C55' padding={28}>
              <Text color='#F0EDEE' size={12}>
                I would highly recommend Dr. Wagner for surgery.
              </Text>
              <Text color='#F0EDEE' size={12}>
                - Tyler G
              </Text>
            </Card>
          </Carousel.Slide>
        </Carousel>
      </Grid.Col>
    </Grid>
  )
}

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path='/education' element={<Education />} />
        <Route path='/videos' element={<Videos />} />
        <Route path='/testimonials' element={<Testimonials />} />
      </Routes>
    </BrowserRouter>
  )
}

const App = () => {
  const theme = useMantineTheme()

  return (
    <AppShell
      header={<AppHeader theme={theme}/>}
    >
      <AppRoutes />
    </AppShell>
  )
}

export default App
