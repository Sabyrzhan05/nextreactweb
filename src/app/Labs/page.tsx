'use client'
import axios from 'axios'
import { useState } from 'react'
import { useEffect } from 'react'
import Image from 'next/image'

export default function Labs() {

    const [hello, helloState] = useState<string>("loading")
    const [temp, setTemp] = useState<string>("loading")
    const [wind, setWind] = useState<string>("loading")
    const [tempAst, setTempAst] = useState<string>("loading")
    const [windAst, setWindAst] = useState<string>("loading")
    const [tempAlm, setTempAlm] = useState<string>("loading")
    const [windAlm, setWindAlm] = useState<string>("loading")


    const fetching = async () => {
        const response = await axios.get("http://localhost:8080/api/hello", { responseType: 'text',
            auth: {
                username: "ilyas",
                password: "ilyas1"
            }
        })
        const data = response.data
        helloState(data)
    }

    const openmeteo = async () => {
        const response = await axios.get("https://api.open-meteo.com/v1/forecast?latitude=32.2217&longitude=-110.9265&current=temperature_2m,wind_speed_10m",)
        const data = response.data.current.temperature_2m
        const data1 = response.data.current.wind_speed_10m
        setTemp(data)
        setWind(data1)
    } 

    const openmeteoAst = async () => {
        const response1 = await axios.get("https://api.open-meteo.com/v1/forecast?latitude=51.1801&longitude=71.446&current=temperature_2m,wind_speed_10m",)
        const data2 = response1.data.current.temperature_2m
        const data3 = response1.data.current.wind_speed_10m
        setTempAst(data2)
        setWindAst(data3)
    }  

    const openmeteoAlm = async () => {
        const response2 = await axios.get("https://api.open-meteo.com/v1/forecast?latitude=43.25&longitude=76.9167&current=temperature_2m,wind_speed_10m",)
        const data4 = response2.data.current.temperature_2m
        const data5 = response2.data.current.wind_speed_10m
        setTempAlm(data4)
        setWindAlm(data5)
    }


    useEffect(()=> {
        fetching()
        openmeteo()
        openmeteoAst()
        openmeteoAlm()

        const interval = setInterval(() => {
            openmeteo()
            openmeteoAst()
            openmeteoAlm()
        }, 10000)
        return () => clearInterval(interval)
    },[])

    return (
  <div>
    <p>Here is Labs page</p>
    <p className="mb-6 text-white">{hello}</p>

    <div className="flex flex-wrap gap-6 justify-center">
      <div className="bg-white border rounded-2xl shadow-md p-4 w-72 text-center">
        <img src={`/images/${hello}.png`} width="250" height="250" className="mx-auto rounded-lg" />
        <h2 className="text-xl font-semibold mt-3 text-black">Tucson</h2>
        <p className="mt-2 text-black">Temp: <span className="font-medium">{temp}°C</span></p>
        <p className="text-black">Wind: <span className="font-medium">{wind} m/s</span></p>
      </div>
      <div className="bg-white border rounded-2xl shadow-md p-4 w-72 text-center">
        <img src="/images/astana.png" width="250" height="250" className="mx-auto rounded-lg" />
        <h2 className="text-xl font-semibold mt-3 text-black">Astana</h2>
        <p className="text-black">Modern capital of Kazakhstan</p>
        <p className="mt-2 text-black">Temp: <span className="font-medium">{tempAst}°C</span></p>
        <p className="text-black">Wind:<span className="font-medium">{windAst} m/s</span></p>
      </div>
      <div className="bg-white border rounded-2xl shadow-md p-4 w-72 text-center">
        <img src="/images/almaty.png" width="250" height="250" className="mx-auto rounded-lg" />
        <h2 className="text-xl font-semibold mt-3 text-black">Almaty</h2>
        <p className="text-black">beautiful city with mountains</p>
        <p className="mt-2 text-black">Temp: <span className="font-medium">{tempAlm}°C</span></p>
        <p className="text-black">Wind: <span className="font-medium">{windAlm} m/s</span></p>
      </div>
    </div>
  </div>
)

}
