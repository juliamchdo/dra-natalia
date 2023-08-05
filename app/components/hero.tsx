import HeroImage from '@/public/images/hero-image.jpg'
import Image from "next/image";

export default function Hero() {
    return (
        <section className="relative">

            <div className="max-w-6xl mx-auto px-4 sm:px-6 flex justify-center">

                <div className="pt-32 pb-12 md:pt-40 md:pb-20">

                    <div className="text-left float-left pb-10 md:pb-12">
                        <h1 className="text-4xl md:text-5xl font-extrabold leading-tighter tracking-tighter mb-4 "
                        >Dra. Natália Bittencourt
                        </h1>
                        <div className="max-w-2xl">
                            <p className="text-xl text-gray-600 mb-8 text-center">Cuidando de sua saúde com dedicação e
                                carinho.</p>
                        </div>
                    </div>

                    <Image className="relative rounded-full" src={HeroImage} width={400} height={400} alt="image"/>

                </div>

            </div>
        </section>
    )
}