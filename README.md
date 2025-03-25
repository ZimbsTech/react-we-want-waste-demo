# WeWantWaste Skip Selection Page Redesign

This project is a redesign of the skip selection page for WeWantWaste.co.uk, focusing on improved UI/UX, responsiveness, and maintainable React code.

## Live Demo

You can view the live demo at 
https://codesandbox.io/p/github/ZimbsTech/react-we-want-waste-demo/master?import=true

## Project Overview

The goal of this project was to redesign the skip selection page while maintaining its core functionality. The redesign focuses on:

- **Modern UI/UX**: Clean, intuitive interface with clear visual hierarchies
- **Responsive Design**: Fully responsive for mobile, tablet, and desktop views
- **Maintainable Code**: Well-structured TypeScript React components with proper separation of concerns
- **Material-UI**: Leveraging Material-UI (MUI) for consistent design patterns and components

## Implementation Approach

### Architecture

The project follows a component-based architecture with:

- **TypeScript**: For type safety and better developer experience
- **React**: For building the UI components
- **Material UI**: For design system and component library
- **Responsive Design**: Mobile-first approach with responsive breakpoints

### Key Features

1. **Process Stepper**: Visual indication of the user's progress through the booking process
2. **Skip Cards**: Responsive, interactive cards that clearly display:
   - Skip size
   - Price details (including VAT)
   - Hire period
   - Placement restrictions (road/private property)
   - Waste type restrictions
3. **Responsive Layout**: Adapts to different screen sizes:
   - Mobile: Single column layout
   - Tablet: Two column layout
   - Desktop: Three column layout
4. **Visual Feedback**: Clear indication of selected items, interactive hover states
5. **Navigation Controls**: Intuitive back/continue buttons with appropriate state management

### Code Quality

- **Component Structure**: Logically separated components for better maintainability
- **TypeScript Interfaces**: Well-defined interfaces for props and data types
- **Custom Theme**: Consistent design system with custom MUI theme configuration
- **Responsive Utilities**: Media query hooks for responsive behavior

## Setup and Installation

1. Install dependencies:
```
npm install
```

2. Start the development server:
```
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Technology Stack

- React 18
- TypeScript
- Material-UI v5
- React Router v6
- Axios

## License

MIT