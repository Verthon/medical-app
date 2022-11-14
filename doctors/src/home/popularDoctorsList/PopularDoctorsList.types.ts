export type PopularDoctorItem = {
  surname: string
  specialization: string
  rating: number
  imageUrl?: string
}

export type PopularDoctorsListProps = {
  doctorsList: PopularDoctorItem[]
}