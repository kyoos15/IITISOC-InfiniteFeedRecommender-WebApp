# Infinite Feed Recommender — Frontend

This repository contains the frontend implementation of the **Infinite Feed Recommendation Web App**, developed as part of the IITISOC 2025 Project (Project Slot: PS-12). The goal is to provide users with a personalized, infinite scrolling content feed that intelligently recommends relevant articles, videos, or posts.

## Project Objective

The objective of this project is to solve the challenge users face in discovering engaging and relevant content from the vast information available online. Many platforms fail to deliver real-time personalization, leading to user disengagement. This app addresses that by using recommendation algorithms to keep the feed fresh, relevant, and tailored to each user's interests.

## Problem Statement

Users often struggle to find engaging, relevant content amidst the vast amount of information online, leading to disengagement or wasted time on irrelevant material. Many content platforms fail to deliver personalized feeds that adapt in real-time or maintain user interest over extended sessions. This web app curates an infinite scroll feed with smart recommendations, ensuring content stays fresh, relevant, and aligned with user preferences.

## Key Features

### Core Features

- **Infinite Scroll Feed**: Dynamically loads more content as the user scrolls, without needing to refresh the page.
- **Recommendation System**: Suggests posts based on tags, categories, and basic user interaction.
- **User Personalization**: Allows users to set their content interests which are then used to personalize the feed.
- **Interaction Support**: Users can like, comment on, or view posts. These interactions contribute to improving the recommendation quality.
- **Responsive Design**: Works well on both desktop and mobile devices with a clean and adaptable UI.

### Optional / Upcoming Features

- Advanced recommendation logic based on user behavior (e.g., time spent, interactions).
- Offline caching of recently viewed content for seamless access without internet.
- Social sharing of content to external platforms.
- Creator dashboard for managing content from the channel side.
- Firebase-based user accounts for multi-device preference syncing.

## Tech Stack

| Technology       | Purpose                               |
|------------------|----------------------------------------|
| React            | Component-based frontend framework     |
| Tailwind CSS     | Utility-first CSS framework            |
| React Router     | Client-side routing                    |
| Axios            | HTTP client for API calls              |
| React Hot Toast  | Toast notifications                    |
| Heroicons        | Icons for user interface               |


## Setup Instructions

### Prerequisites

- Node.js and npm installed

### Installation

1. Clone the repository:

```bash
git clone https://github.com/Kaal-09/IITISOC-InfiniteFeedRecommender-WebApp.git
cd IITISOC-InfiniteFeedRecommender-WebApp


npm install

npm run dev

