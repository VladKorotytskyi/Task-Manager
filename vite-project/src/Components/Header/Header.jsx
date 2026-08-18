import React, { useState } from "react";

export const Header = ({ isSidebarOpen, toggleSidebar }) => {
    return (
        <header className="header">
            <h1>Task Manager</h1>
            <button onClick={toggleSidebar}>
                {isSidebarOpen ? "Close Sidebar" : "Open Sidebar"}
            </button>
        </header>
    );
};