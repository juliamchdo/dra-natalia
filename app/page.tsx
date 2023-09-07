export const metadata = {
    title: 'Dra. Natália Bittencourt',
    description: 'Medicina',
}

import Hero from '@components/hero'
import Features from '@components/features'
import Especialidades from '@components/Especialidades'
import Testimonials from '@components/testimonials'

export default function Home() {
    return (
        <>
            <Hero/>
            <Features/>
            <Especialidades/>
            <Testimonials/>
        </>
    )
}
