import React from 'react'
import {NavLink} from 'react-router-dom'
import { FaHome, FaMoneyBill, FaCar, FaBox,  } from "react-icons/fa";

const route = [
  { path: "/store-dash/dashboard", label: "Dashboard", Icon: FaHome }

]
export const RouteSeletect = () => {
  return (
    <nav className="w-60 bg-stone-600 p-4 rounded-xl shadow-lg space-y-2">

    </nav>
  )
}