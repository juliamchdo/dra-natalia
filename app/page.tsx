import "./style/global.scss"

import Atendimentos from '@components/Atendimentos'
import {Depoimentos} from "@components/Depoimentos";
import Especialidades from '@components/Especialidades'
import Footer from '@components/Footer'
import Hero from '@components/Hero'

export const metadata = {
    title: 'Dra. Natália Bittencourt',
    description: 'Medicina',
}


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
