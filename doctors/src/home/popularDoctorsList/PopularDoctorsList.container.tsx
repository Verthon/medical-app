import * as React from 'react'

import { PopularDoctorsList } from './PopularDoctorsList'

export const PopularDoctorsListContainer = () => {
  const popularDoctorsList = [
    { id: 1, surname: "Shouey", specialization: "Specialist Cancer", rating: 5, },
    { id: 2, surname: "Crownover", specialization: "Specialist Cardiology", rating: 4, }
  ]
  return <PopularDoctorsList doctorsList={popularDoctorsList} />
}