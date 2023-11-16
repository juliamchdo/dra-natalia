import {Depoimentos} from "@components/Depoimentos";
import "./style/global.scss"
export const metadata = {
    title: 'Dra. Natália Bittencourt',
    description: 'Medicina',
}

import Hero from '@components/Hero'
import Atendimentos from '@components/Atendimentos'
import Especialidades from '@components/Especialidades'
import Footer from '@components/Footer'

export default function Home() {
    return (
        <>
            <Hero/>
            <Atendimentos/>
            <Especialidades/>
            <Depoimentos />
            <Footer/>
        </>
    )
}
