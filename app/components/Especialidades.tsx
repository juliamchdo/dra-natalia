import React from "react";
import {Card} from "@components/Card";

export default function Especialidades() {

  return (
    <section className="relative" id="especialidades">

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">

          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 mb-4">Especialidades</h2>
          </div>

          <div className="max-w-sm mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-3 items-start md:max-w-2xl lg:max-w-none">
            <Card />
          </div>
        </div>
      </div>
    </section>
  )
}