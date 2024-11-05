import React from 'react'
import AuthGuard from './guard/AuthGuard'
import Navbar from "../../../../ui/molecules/Navbar/Navbar"

export default function PrivateLayout(
    { children }: { children: React.ReactNode}
) {
  return (
    <>
    <Navbar />
    <AuthGuard>{children}</AuthGuard>
    </>
    
  )
}
