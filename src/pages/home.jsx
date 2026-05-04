import Navbar from '../components/Navbar'
import EventCard from '../components/EventCard'

function Home() {
  return (
    <div>
      <Navbar />

      <section>
        <h2>Welcome to CommunityHub</h2>
        <p>Connecting people through events and activities</p>
      </section>

      <section>
        <h2>Upcoming Events</h2>

        <EventCard
          title="Tech Meetup"
          description="Learn React and connect with developers"
        />

        <EventCard
          title="Community Cleanup"
          description="Help keep our neighborhood clean"
        />

        <EventCard
          title="Coding Workshop"
          description="Improve your frontend skills"
        />
      </section>

      <footer>
        <p>© 2026 CommunityHub</p>
      </footer>
    </div>
  )
}

export default Home