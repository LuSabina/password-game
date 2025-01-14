
import { render, screen } from '@testing-library/react';
import { it, expect, describe } from 'vitest'; 
import AppBody from '../../src/components/AppBody';
import { MemoryRouter, Routes } from 'react-router-dom';




describe('App', () => {
    it('should', () => {
        render(
        <MemoryRouter>
            <AppBody name="john"/>
        </MemoryRouter>
        )

        
    })
})