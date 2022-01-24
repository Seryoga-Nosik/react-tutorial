// import PaintingList from './components/Painting/PaintingList';
// import Section from './components/Painting/Section';
// import paintings from './paintings.json';
import PageTitle from 'components/PageTitle/PageTitle';
import EventBoard from 'components/EventBoard/EventBoard';
import events from '../events.json';

export default function App() {
  return (
    <>
      {/* <Section title={'Top of week'}>
        <PaintingList items={paintings} />
      </Section> */}

      <PageTitle text="24th Core Wolds Coalition Conference" />
      <EventBoard events={events} />
    </>
  );
}
