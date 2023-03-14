import { Anchor, AppShell, Avatar, Box, Burger, Card, Center, Flex, Grid, Group, Header, MediaQuery, Menu, Stack, Text, Title, useMantineTheme } from '@mantine/core'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { TbPhone } from 'react-icons/tb'
import DrWagner from './assets/ChristopherWagner.png'
import { Carousel } from '@mantine/carousel'
import { useDisclosure, useMediaQuery } from '@mantine/hooks'
import ReactPlayer from 'react-player/youtube'

const AppHeader = ({ theme }: any) => {
  const [opened, { toggle }] = useDisclosure(false)
  const label = opened ? 'Close navigation' : 'Open navigation'
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
        <MediaQuery smallerThan='md' styles={{ display: 'none' }}>
          <Group>
            <Anchor className='header-link' size='lg' href='/'>Home</Anchor>
            <Anchor className='header-link' size='lg' href='/education'>Education</Anchor>
            <Anchor className='header-link' size='lg' href='/videos'>Videos</Anchor>
            <Anchor className='header-link' size='lg' href='/testimonials'>Testimonials</Anchor>
          </Group>
        </MediaQuery>
        <MediaQuery largerThan='md' styles={{ display: 'none'}}>
          <div>
            <Menu>
              <Menu.Target>
                <Burger 
                  opened={opened} 
                  onClick={toggle}
                  color='#F0EDEE'
                  aria-label={label}
                />
              </Menu.Target>
              <Menu.Dropdown color='#F0EDEE'>
                <Menu.Item>
                  <Anchor className='header-mobile-link' size='lg' href='/'>Home</Anchor>
                </Menu.Item>
                <Menu.Item>
                  <Anchor className='header-mobile-link' size='lg' href='/education'>Education</Anchor>
                </Menu.Item>
                <Menu.Item>
                  <Anchor className='header-mobile-link' size='lg' href='/videos'>Videos</Anchor>
                </Menu.Item>
                <Menu.Item>
                  <Anchor className='header-mobile-link' size='lg' href='/testimonials'>Testimonials</Anchor>
                </Menu.Item>
              </Menu.Dropdown>
            </Menu>
          </div>
        </MediaQuery>
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
        <Stack>
          <MediaQuery smallerThan='md' styles={{ display: 'none' }}>
            <Avatar
              src={DrWagner}
              alt='Dr Wagner'
              size={260}
              radius={100}
            />
          </MediaQuery>
          <MediaQuery largerThan='md' styles={{ display: 'none' }}>
            <Center>
              <Avatar
                src={DrWagner}
                alt='Dr Wagner'
                size={260}
                radius={100}
              />
            </Center>
          </MediaQuery>
          <MediaQuery largerThan='md' styles={{ display: 'none' }}>
            <Center>
              <Anchor 
                href='tel:(920)-731-8131'
                style={{
                  color: '#0A090C',
                  marginLeft: 15,
                  marginTop: 15,
                  fontSize: '1.2em'
                }}>
                <TbPhone /> (920)-731-8131
              </Anchor>
            </Center>
          </MediaQuery>
        </Stack>
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
        <MediaQuery smallerThan='md' styles={{ display: 'none' }}>
          <Anchor 
            href='tel:(920)-731-8131' 
            style={{
              color: '#0A090C',
              marginLeft: 70,
              marginTop: 25
            }}>
            <TbPhone /> (920)-731-8131
          </Anchor>
        </MediaQuery>
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
    <Grid>
      <Grid.Col md={4}>
        <Card bg='#7F557D'>
          <Card.Section mb={10} p={10}>
            <ReactPlayer 
              url='https://www.youtube.com/watch?v=IfugNerad24' 
              controls
              width='100%'
            />
          </Card.Section>
          <Title order={5} color='#F0EDEE'>
            Robotic Incisional Hernia Surgery
          </Title>
        </Card>
      </Grid.Col>
      <Grid.Col md={4}>
        <Card bg='#7F557D'>
          <Card.Section mb={10} p={10}>
            <ReactPlayer 
              url='https://www.youtube.com/watch?v=9P5qkYPTgy8' 
              controls
              width='100%'
            />
          </Card.Section>
          <Title order={5} color='#F0EDEE'>
            Robot Assisted Sigmoid Colon Resection
          </Title>
        </Card>
      </Grid.Col>
      <Grid.Col md={4}>
        <Card bg='#7F557D'>
          <Card.Section mb={10} p={10}>
            <ReactPlayer 
              url='https://www.youtube.com/watch?v=NWN09Im88zw&feature=youtu.be' 
              controls
              width='100%'
            />
          </Card.Section>
          <Title order={5} color='#F0EDEE'>
            Robot Assisted Laparoscopic Hiatal Hernia Repair
          </Title>
        </Card>
      </Grid.Col>
      <Grid.Col md={4}>
        <Card bg='#7F557D'>
          <Card.Section mb={10} p={10}>
            <ReactPlayer 
              url='https://www.youtube.com/watch?v=ejoXQtn9pZQ' 
              controls
              width='100%'
            />
          </Card.Section>
          <Title order={5} color='#F0EDEE'>
            Robotic Inguinal Hernia Surgery
          </Title>
        </Card>
      </Grid.Col>
    </Grid>
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
          slideSize="33.3333%"
          breakpoints={[{ maxWidth: 'sm', slideSize: '100%', slideGap: 2 }]}
          slideGap="xl"
          align="start"
          slidesToScroll={mobile ? 1 : 2}
          controlsOffset={0}
        >
          <Carousel.Slide>
            <Card bg='#166088' padding={28}>
              <Text color='#F0EDEE' size={12}>
                Dr. Wagner operated on my son a few years ago. He delivered the highest standard of care while 
                making both of us feel comfortable and at ease. He was very kind, caring, informative and 
                professional. My son had great results from his surgery. Thank you Dr. Wagner.
              </Text>
              <Text color='#F0EDEE' size={12}>
                - Jodi B
              </Text>
            </Card>
          </Carousel.Slide>
          <Carousel.Slide>
            <Card bg='#EA8C55' padding={28}>
              <Text color='#F0EDEE' size={12}>
                I couldn’t have asked for a better surgeon than Dr Wagner. He was very personal and caring, 
                he always made sure to explain things in ways I could understand. My well-being felt like a 
                priority to him, and he also reached out when I was at home recovering. He definitely made my 
                first surgical experience easier and less stressful.
              </Text>
              <Text color='#F0EDEE' size={12}>
                - Emily K
              </Text>
            </Card>
          </Carousel.Slide>
          <Carousel.Slide>
            <Card bg='#7F557D' padding={28}>
              <Text color='#F0EDEE' size={12}>
                Dr. Wagner removed my gallbladder about 9 years ago. He took his time to explain the risks and 
                benefits that would come with having my gallbladder removed. He ensured that I felt safe and 
                had all of my questions answered during the entire process. His kindness and compassion was evident. 
              </Text>
              <Text color='#F0EDEE' size={12}>
                - Samantha E
              </Text>
            </Card>
          </Carousel.Slide>
          <Carousel.Slide>
            <Card bg='#166088' padding={28}>
              <Text color='#F0EDEE' size={12}>
                Dr. Wagner performed my colonoscopy 5 years ago. I was struggling with some new onset symptoms and 
                was in need of an emergent colonoscopy. He was able to fit me into his busy schedule however never 
                appeared rushed when talking to my wife and I. He made sure to set me up with a GI specialist after 
                my procedure to ensure I received treatment as soon as possible for my new diagnosis. His skills 
                and fast actions are the reason I am doing so great today.
              </Text>
              <Text color='#F0EDEE' size={12}>
                - Kyle E
              </Text>
            </Card>
          </Carousel.Slide>
          <Carousel.Slide>
            <Card bg='#EA8C55' padding={28}>
              <Text color='#F0EDEE' size={12}>
                Dr. Wagner is truly exceptional!  When our daughter experienced a situation where she needed surgery 
                on short notice, Dr. Wagner was referred as one of the best.  From the moment we entered the doors 
                to the office, we felt welcomed and cared for. We appreciated how Dr. Wagner really took his time to 
                explain the condition and treatment options. He made us feel completely at ease and confident in his 
                abilities.  Dr. Wagner has gone above and beyond to ensure the health and wellness of our daughter and 
                always felt we were his first priority. It’s rare to find a doctor that combines such personal touches 
                and care for a patient as a person with outstanding quality of medical care. We would highly recommend 
                Dr. Wagner. 
              </Text>
              <Text color='#F0EDEE' size={12}>
                - Penny & Dave K.
              </Text>
            </Card>
          </Carousel.Slide>
          <Carousel.Slide>
            <Card bg='#7F557D' padding={28}>
              <Text color='#F0EDEE' size={12}>
                I would highly recommend Dr. Wagner for surgery.
              </Text>
              <Text color='#F0EDEE' size={12}>
                - Tyler G
              </Text>
            </Card>
          </Carousel.Slide>
          <Carousel.Slide>
            <Card bg='#166088' padding={28}>
              <Text color='#F0EDEE' size={12}>
                Dr Wagner is an amazing doctor. He took care of my son. He was so responsive. He got involved with 
                radiology and changed his schedule to get my son in for surgery very quickly at Mercy Hospital. He 
                even stopped at our house to check on him. He is a very kind man with a big heart and amazing skills.
              </Text>
              <Text color='#F0EDEE' size={12}>
                - Mike H
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
