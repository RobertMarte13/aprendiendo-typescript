// * Type Indexing
type HeroProperties = {
  isActive?: boolean
  address: {
    planet: string
    city: string
  }
}

const addressHero: HeroProperties['address'] = {
  city: 'New York',
  planet: 'Planeta Tierra'
} // <-- De esta manera se puede reutilizar un tipo para otras utilidades.
