export interface Pharmacy {
    id: number,
    title: string,
    rating: string,
    category: string,
    address: string,
    website: string,
    phoneNumber: string,
    monday: string,
    tuesday: string,
    wednesday: string,
    thursday: string,
    friday: string,
    saturday: string,
    sunday: string,
    latitude: string,
    longitude: string
}

export interface Clinic {
  id: number,
  title: string,
  rating: string,
  category: string,
  address: string,
  website: string,
  phoneNumber: string,
  monday: string,
  tuesday: string,
  wednesday: string,
  thursday: string,
  friday: string,
  saturday: string,
  sunday: string,
  latitude: string,
  longitude: string
}

export interface Symptom {
  id: number,
  description: String;
}

export interface Comment {
  id: number,
  description: string,
  published: Date,
  disease: Disease,
}

export interface Disease {
  id: number,
  name: string,
  type: string,
  description: string,
  symptoms: Symptom[],
  comments: Comment[]
}


