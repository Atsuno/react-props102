import './App.css'
import Agent from './components/Agent'
import Detail from './components/Detail'
import Features from './components/Features'
import Property from './components/Property'
import Location from './components/Location'
import Header from './components/Header'

export type PropsData = {
  property: {
    name: string
    img: string
  }
  detail: {
    price: number
    bedrooms: number
    bathrooms: number
    garage: number
  }
  features: Array<{
    name: string
    isAvailable: boolean
  }>
  location: {
    street: string
    city: string
    state: string
    zip: string
  }
  agent: {
    isPaid: boolean
    name: string
    email: string
    phone: string
  }
}

const data: Array<PropsData> = [
  {
    property: {
      name: 'Luxury Villa in Beverly Hills',
      img: 'https://picsum.photos/200?1',
    },
    detail: {
      price: 50000,
      bedrooms: 5,
      bathrooms: 6,
      garage: 3,
    },
    features: [
      {
        name: 'Swimming pool',
        isAvailable: true,
      },
      {
        name: 'Home theater',
        isAvailable: true,
      },
      {
        name: 'Wine cellar',
        isAvailable: false,
      },
      {
        name: 'Gym',
        isAvailable: true,
      },
    ],
    location: {
      street: '123 Palm Tree Road',
      city: 'Beverly Hills',
      state: 'California',
      zip: '90210',
    },
    agent: {
      isPaid: false,
      name: 'John Doe',
      email: 'john.doe@example.com',
      phone: '123-456-7890',
    },
  },
  {
    property: {
      name: 'Modern Apartment in New York',
      img: 'https://picsum.photos/200?2',
    },
    detail: {
      price: 3000000,
      bedrooms: 3,
      bathrooms: 3,
      garage: 1,
    },
    features: [
      {
        name: 'Open concept layout',
        isAvailable: false,
      },
      {
        name: 'Floor-to-ceiling windows',
        isAvailable: false,
      },
      {
        name: 'Modern kitchen with high-end appliances',
        isAvailable: true,
      },
    ],

    location: {
      street: '456 Broadway',
      city: 'New York',
      state: 'New York',
      zip: '10012',
    },
    agent: {
      isPaid: true,
      name: '',
      email: '',
      phone: '',
    },
  },
  {
    property: {
      name: 'Cozy Cottage in the Countryside',
      img: 'https://picsum.photos/200?3',
    },
    detail: {
      price: 500000,
      bedrooms: 2,
      bathrooms: 2,
      garage: 2,
    },
    features: [
      {
        name: 'Large garden',
        isAvailable: true,
      },
      {
        name: 'Wood-burning fireplace',
        isAvailable: false,
      },
      {
        name: 'Beautiful views of the surrounding nature',
        isAvailable: true,
      },
    ],

    location: {
      street: '789 Country Lane',
      city: 'Smallville',
      state: 'Countryside',
      zip: '12345',
    },
    agent: {
      isPaid: false,
      name: 'Bob Johnson',
      email: 'bob.johnson@example.com',
      phone: '555-666-7777',
    },
  },
]

const App = () => (
  <>
    <Header />
    <main>
      {data.map(({ property, location, agent, detail, features }) => (
        <Property name={property.name} img={property.img}>
          <Detail
            price={detail.price}
            bedrooms={detail.bedrooms}
            bathrooms={detail.bathrooms}
            garage={detail.garage}
          />
          <Features features={features} />
          <Location
            street={location.street}
            city={location.city}
            state={location.state}
            zip={location.zip}
          />
          <Agent
            name={agent.name}
            email={agent.email}
            phone={agent.phone}
            isPaid={agent.isPaid}
          />
        </Property>
      ))}
    </main>
  </>
)

export default App
