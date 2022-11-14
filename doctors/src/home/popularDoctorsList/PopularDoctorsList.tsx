import * as React from 'react'
import { FeaturedCard } from '../ui/featuredCard/FeaturedCard'

import type { PopularDoctorsListProps } from './PopularDoctorsList.types'

export const PopularDoctorsList = ({ doctorsList }: PopularDoctorsListProps) => {
  return <div>
    {doctorsList.map((doctor) => <FeaturedCard key={doctor.id}  />)}
  </div>
}