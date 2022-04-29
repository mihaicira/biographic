import { Stack } from '@mui/material';
import React from 'react';
import './Projects.scss';

export default function Projects() {
  return (
    <div className="projects">
      <Stack
        sx={{
          width: 'max-content',
          margin: '20vh 0 0 10vw',
        }}
      >
        <p>i managed to built these</p>
        <h2>projects</h2>
      </Stack>
      <Stack
        alignItems="center"
        justifyContent="center"
        direction="column"
        gap="10rem"
        sx={{ marginTop: '5rem' }}
      >
        <Project
          title="Center of francophone studies"
          subtitle="serverless website platform"
          text={
            <p>
              Link: click <br /> The Center of Francophone Studies aims to carry
              out a comprehensive and coherent research program in the field of
              francophonie from the perspective of interculturality and
              interdisciplinarity. The project has been built by a team of six
              people whose team leader was me. <br />
              The project subject belongs to the Faculty of Letters, History and
              Theology within West University of Timisoara. We developed the
              product via a patnership between that faculty and my faculty,
              within a certain subject matter.
              <br /> The website is a complex online platform that manages some
              processes that in the past have been dealt with manually. It has
              plenty of systems, such as a user account system based on roles,
              each role having its responsabilities.
            </p>
          }
          tech={['HTML', 'CSS', 'JAVASCRIPT', 'JQUERY', 'FIREBASE']}
        />

        <Project
          title="Remigoo"
          subtitle="serverless website appointment system"
          text={
            <p>
              Remigoo is a web-based appointment system website that operates as
              a third party for a fictional cinema. <br />
              It has been created in 2021-2022 by three students, a team which I
              led. Users can create their own accounts if they want to, book
              tickets to certain movies and visualize their history on their
              profile page. <br /> The online website (the link above) does not
              have the server linked to it, that's why the main functionality
              doesnt work. Though, you can press the "How to book a ticket"
              button to see the main functionalities. Check out the 404 page
              too, it's kinda cool:
              https://remigoo.herokuapp.com/somerandomstuff
            </p>
          }
          tech={['HTML', 'CSS', 'JAVASCRIPT', 'REACTJS', 'FIREBASE']}
        />

        <Project
          title="Classroom Laboratory"
          subtitle="educational website"
          text={
            <p>
              Classroom Laboratory is a classroom where selected courses are
              taught, an infrastructure for conducting experiments in teaching
              and methodology methods, and finally an arena for collaboration
              between students, teachers, researchers and the world of work.
              <br />
              It is a front-end website only, which I built alone, as a
              volunteer, for the Faculty of Sociology and Psychology (West
              University of Timișoara).When needed, I am called to update stuff
              on the website.
            </p>
          }
          tech={['HTML', 'CSS', 'JAVASCRIPT', 'JQUERY']}
        />

        <Project
          title="Rick and Morty Characters"
          subtitle="demonstrative website"
          text={
            <p>
              Link: Rick and Morty Characters The main purpose of the website is
              to present all characters from Rick and Morty TV Series. The user
              is able to search the characters by their name and filter by their
              status: dead, alive, unknown or all.
              <br />
              The user recieves the results as pages, being able to navigate
              through them. One page displays a maximum of 20 characters. Each
              character is has its own page where the user can find more
              informations about him. It's also possible for the user to share
              the URL of any character by clicking on the clipboard icon that
              can be found both on the searching page and his own detailed page.
            </p>
          }
          tech={['HTML', 'CSS', 'JAVASCRIPT', 'REACTJS', 'GRAPHQL']}
        />

        <Project
          title="Office Assistant"
          subtitle="iOS mobile attendance management tool"
          text={
            <p>
              If you're the CEO of a small business and the pandemic affected
              your employees, this application might be the one you need. Office
              Assistant lets your employee to sign up for going to office
              whenever they need to, respecting the following rule: In one day
              there can be maximum 5 employees at the office. That way, in case
              someone gets sick, you can easily acces the day that he went at
              work and check who else worked at office that day. Even more,
              employees can add a profile picture with their own accounts.
              <br />
              Office Assistant is an application that I've built during my
              Mobile Development Internship at [e-spres-oh]. I also used it at
              University for a certain subject matter. Building this project
              I've learnt how mobile applications work and the issues that might
              occur.
            </p>
          }
          tech={[
            'SWIFT',
            'SWIFTUI LIBRARY',
            'FIREBASE IOS SDK',
            'USERDEFAULTS',
          ]}
        />

        <Project
          title="Choicezz"
          subtitle="mobile web application"
          text={
            <p>
              Choicezz is the ezz way to make a choice. It's the perfect mobile
              application when you can't decide either to eat some Burger King,
              Tacobell or Mc Donald's. With Choicezz you can let the Gods decide
              for you when you have to choose between food, movies and barely
              anything. You can create your own lists of objects and even save
              them for the next visit.
              <br />
              Choicezz is a project that I've built alone from scratch while
              trying to learn ReactJS. I also needed a mobile application for a
              subject matter at University, so a mobile web application that
              uses ReactJS was a great fit.
            </p>
          }
          tech={[
            'HTML',
            'CSS',
            'JAVASCRIPT',
            'REACT',
            'FIREBASE',
            'LOCALSTORAGE',
          ]}
        />

        <Project
          title="title"
          subtitle="subtitle"
          text={<p>text</p>}
          tech={['HTML', 'CSS', 'JAVASCRIPT', 'REACT', 'FIREBASE']}
        />
      </Stack>
    </div>
  );
}

function Project(props) {
  return (
    <Stack
      alignItems="center"
      justifyContent="space-evenly"
      direction="row"
      gap="7rem"
      className="project"
      flexWrap="wrap"
      sx={{ width: '100%' }}
    >
      <Stack gap="1rem">
        <h4>{props.title}</h4>
        <h6>{props.subtitle}</h6>
        {props.text}
      </Stack>

      <Stack>
        <h6>Technologies</h6>
        {props.tech.map((t) => (
          <h6>{t}</h6>
        ))}
      </Stack>
    </Stack>
  );
}
