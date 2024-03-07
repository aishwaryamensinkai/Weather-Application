import React from 'react'

const TopButtons = () => {
  const cities = [{
    id: 1,
    title: 'New York'
  }, {
    id: 2,
    title: 'India'
    }, {
    id: 3,
    title: 'London'
    }, {
    id: 4,
    title: 'Sydney'
    }, {
    id: 5,
    title: 'Paris'
    }]
  return (
    <div className="flex items-center justify-around my-6">
      {cities.map((city) => (
        <button key={city.id} className="text-white text-lg font-medium">{ city.title}</button>
      ))}
    </div>
  )
}

export default TopButtons
