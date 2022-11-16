import React, {useState, useEffect} from "react";

export default function contacto(){
    return(
        <div class="border-2 border-black rounded-lg p-5 w-[450px] md:w-[700px] px-5">
      <form action="https://formspree.io/f/meqndwke" method="POST">
        <div class="grid gap-6 mb-6 lg:grid-cols-2">
          <div>
            <label for="first_name" class="block mb-2 text-sm font-medium text-black">Nombre</label>
            <input type="text" name="nombre" id="first_name"
              class="bg-white border-2 border-black text-sm rounded-lg block w-full p-2.5 text-black" required=""/>
          </div>
          <div>
            <label for="last_name" class="block mb-2 text-sm font-medium text-black">Apellido</label>
            <input type="text" name="apellido" id="last_name"
              class="bg-white border-2 border-black text-sm rounded-lg block w-full p-2.5 text-black" required=""/>
          </div>


        </div>
        <div class="mb-6">
          <label for="email" class="block mb-2 text-sm font-medium text-black">Email</label>
          <input type="email" name="email" id="email"
            class="bg-white border-2 border-black text-sm rounded-lg block w-full p-2.5 text-black" required=""/>
        </div>

        <label for="message" class="block mb-2 text-sm font-medium text-black">Mensaje</label>
        <textarea id="message" name="message" rows="4"
          class="bg-white border-2 border-black text-sm rounded-lg block w-full p-2.5 h-30 min-h-0 max-h-60 text-black"
          required=""></textarea>
        <center>
          <div class="block mb-2 text-sm font-medium"><button type="submit"
              class="border-2 border-black text-white bg-black hover:bg-white hover:text-black duration-700 font-medium rounded-lg text-sm w-full sm:w-auto px-10 py-2.5 place-items-center mt-4">Enviar</button>
          </div>
        </center>
      </form>
    </div>
    )    
}