import React from 'react';
import './CustomButton.css';

/**
 * Props:
 * - text: string
 * - color: string
 * - onClick: function
 * - disabled?: boolean
 */
export default function CustomButton({ text, color, onClick, disabled = false }) {
    return (
        <button
            className="custom-button"
            style={{ backgroundColor: color }}
            onClick={onClick}
            disabled={disabled}
        >
            {text}
        </button>
    );
}
