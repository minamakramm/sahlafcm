# Implementation Plan — Website Speed Optimization & Style Enhancements

This plan outlines the specific improvements to optimize the performance (eliminate lag/freezing) and enhance the visual style of the Sahla website across all pages.

## User Review Required

> [!IMPORTANT]
> The primary performance bottle-neck is the **orbital hero section canvas loop** which currently schedules `requestAnimationFrame` continuously at 60/120 FPS even when the component is hidden (`display: none` on mobile) or completely scrolled out of view.
> We are also disabling the background orb CSS animation transitions on mobile screens, as large blurred elements are incredibly taxing on mobile GPUs, causing scrolling freezes.

## Proposed Changes

### 1. Canvas Performance Optimization

#### [MODIFY] [HeroSection.jsx](file:///d:/college/sem%204/ip/sahla/src/features/home/components/HeroSection.jsx)
- Update the `useOrbCanvas` hook to avoid calling `requestAnimationFrame` when the canvas is off-screen or invisible.
- Refactor the IntersectionObserver callback inside `useOrbCanvas` to start the loop on transition to visible, and let the loop terminate naturally when `visible` is false.
- Respect `prefersReducedMotion` by rendering a single frame on resize or visibility instead of continuously looping.

### 2. Network and Realtime Subscription Cleanups

#### [MODIFY] [Navbar.jsx](file:///d:/college/sem%204/ip/sahla/src/components/layout/Navbar.jsx)
- Remove the redundant `useEffect` inside `NavbarBell` that calls `fetchNotifications()` and `subscribeToBroadcasts()`.
- The root component (`AppInitializer` inside `Providers.jsx`) already manages the global fetching of notifications and setting up the real-time Supabase subscription, so calling them inside `NavbarBell` is redundant, triggers duplicate API requests, and risks setting up duplicate real-time sockets.

### 3. CSS Animation and Mobile Performance

#### [MODIFY] [index.css](file:///d:/college/sem%204/ip/sahla/src/index.css)
- Add a media query (`@media (max-width: 767px)`) to completely disable CSS animations on background orbs (`.orb-drift-a` to `.orb-drift-f`).
- Blurred layers with high pixel coverage cause heavy repaint/composite overhead on mobile browsers. Making them static on mobile drastically improves touch-scrolling smoothness.
- Add hardware acceleration triggers (like `translateZ(0)` or `backface-visibility: hidden`) to standard transition classes to make animations feel extra premium and smooth.

## Verification Plan

### Manual Verification
- Deploy the site in development mode using `npm run dev`.
- Verify on desktop: scroll down the homepage and check that the CPU usage drops as the `HeroSection` goes out of view (canvas loop stops).
- Verify on mobile layout (or simulated mobile): scroll pages and check that scrolling is fluid and does not freeze or stutter.
- Inspect the Network and console to verify that `fetchNotifications` is not called twice concurrently on initial load, and no duplicate realtime channels are set up.
