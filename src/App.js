import DestinationSearch from './components/DestinationSearch'

import './App.css'

const initialDestinationsList = [
  {
    id: 1,
    name: 'Melaka Mosque',
    imgUrl: 'https://assets.ccbp.in/frontend/react-js/melaka-mosque-img.png',
    country: 'Mosque in Malaysia',
  },
  {
    id: 2,
    name: 'Shrubland',
    imgUrl: 'https://assets.ccbp.in/frontend/react-js/shrubland-img.png',
    country: ' southern California, Chile, Mexico, areas,Africa and Australia.',
  },
  {
    id: 3,
    name: 'New York',
    imgUrl: 'https://assets.ccbp.in/frontend/react-js/new-york-img.png',
    country:
      'City in New York State,New York City was the capital of the United States from 1785 until 1790,and has been the largest U.S. city since 1790.',
  },
  {
    id: 4,
    name: 'Escarpment',
    imgUrl: 'https://assets.ccbp.in/frontend/react-js/escarpment-img.png',
    country:
      "Escarpments are found on every continent, even Antarctica. Wavy escarpment in Australia. Earth isn't the only place on which you,ll find escarpments. Rupes, created by faulting, erosion, or the impact of a meteorite, are escarpments on other planets or moons.",
  },
  {
    id: 5,
    name: 'Westminster Abbey',
    imgUrl:
      'https://assets.ccbp.in/frontend/react-js/westminster-abbey-img.png',
    country:
      'Collegiate church in London, England,20 Deans Yd, London SW1P 3PA, UK',
  },
  {
    id: 6,
    name: 'South Downs National Park',
    imgUrl:
      'https://assets.ccbp.in/frontend/react-js/south-downs-national-park-img.png',
    country:
      'southern England, stretches for 140 kilometres (87 mi) from Winchester in the west to Eastbourne in the east through the counties of Hampshire, West Sussex and East Sussex.',
  },
  {
    id: 7,
    name: 'National Historic Site',
    imgUrl:
      'https://assets.ccbp.in/frontend/react-js/national-historic-site-img.png',
    country:
      'Salem Maritime National Historic Site was the first National Historic Site to be established in the U.S.',
  },
  {
    id: 8,
    name: 'Tower Bridge',
    imgUrl: 'https://assets.ccbp.in/frontend/react-js/tower-bridge-img.png',
    country:
      'Bascule bridge in the United Kingdom,Tower Bridge Rd, London SE1 2UP, United Kingdom',
  },
  {
    id: 9,
    name: 'Arc Here',
    imgUrl: 'https://assets.ccbp.in/frontend/react-js/arc-here-img.png',
    country:
      'Historical landmark in Nancy, France,23 Rue Héré, 54000 Nancy, France',
  },
  {
    id: 10,
    name: 'Steeple',
    imgUrl: 'https://assets.ccbp.in/frontend/react-js/steeple-img.png',
    country: 'Village in England',
  },
  {
    id: 11,
    name: 'Glaciokarst',
    imgUrl: 'https://assets.ccbp.in/frontend/react-js/glaciokarst-img.png',
    country:
      'Glaciokarst is a karst landscape that was glaciated during the cold periods of the Pleistocene and displays major landforms of glacial influence. For this reason karstification can be pre- and/or post- Pleistocene; this is not easy to classifiy. Mostly Glaciokarst has not such distinctly karst landforms.',
  },
  {
    id: 12,
    name: 'Parco Nazionale delle Cinque Terre',
    imgUrl:
      'https://assets.ccbp.in/frontend/react-js/parco-nazionale-delle-cinque-terre-img.png',
    country: 'National park in Italy,Province of La Spezia, Italy',
  },
]

const App = () => (
  <DestinationSearch initialDestinationsList={initialDestinationsList} />
)

export default App
