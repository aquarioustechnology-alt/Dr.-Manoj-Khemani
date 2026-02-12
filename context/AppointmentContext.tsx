'use client'

import React, { createContext, useContext, useState, useEffect } from 'react'

interface AppointmentContextType {
    isModalOpen: boolean
    openModal: () => void
    closeModal: () => void
    toggleModal: () => void
}

const AppointmentContext = createContext<AppointmentContextType | undefined>(undefined)

export function AppointmentProvider({ children }: { children: React.ReactNode }) {
    const [isModalOpen, setIsModalOpen] = useState(false)

    const openModal = () => {
        setIsModalOpen(true)
        document.body.style.overflow = 'hidden'
    }

    const closeModal = () => {
        setIsModalOpen(false)
        document.body.style.overflow = 'unset'
    }

    const toggleModal = () => {
        if (isModalOpen) closeModal()
        else openModal()
    }

    // Ensure scroll is restored on unmount
    useEffect(() => {
        return () => {
            document.body.style.overflow = 'unset'
        }
    }, [])

    return (
        <AppointmentContext.Provider value={{ isModalOpen, openModal, closeModal, toggleModal }}>
            {children}
        </AppointmentContext.Provider>
    )
}

export function useAppointment() {
    const context = useContext(AppointmentContext)
    if (context === undefined) {
        throw new Error('useAppointment must be used within an AppointmentProvider')
    }
    return context
}
