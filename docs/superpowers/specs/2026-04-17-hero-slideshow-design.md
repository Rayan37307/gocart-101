# Hero Component Image Slideshow Design

**Date:** 2026-04-17
**Component:** `components/Hero.jsx`

## Overview

Add slideshow functionality to the Best Sellers and 20% Discount image boxes in the Hero component. Each box independently cycles through product images with random selection and fade transitions.

## Design

### Behavior
- Each slideshow displays one image at a time
- Images cycle every 3 seconds
- Random selection with no immediate repeats (next image ≠ current image)
- Smooth fade transition between images (opacity animation)

### Image Sets
- **Best Sellers:** `product_img1, product_img2, product_img3, product_img4`
- **20% Discount:** `product_img5, product_img6, product_img7, product_img8`

### Technical Approach
- Custom React hook: `useSlideshow(images, interval)`
- Uses `useState` for current image index and opacity
- Uses `useEffect` for interval timer
- CSS transition for opacity fade effect
- `useCallback` to memoize the random selection function

## Component Changes

### New: `useSlideshow` Hook
- Input: array of images, interval in ms
- Output: `{ currentImage, isTransitioning }`
- Handles random selection logic and timing

### Modified: Hero Component
- Import product images and new hook
- Replace static `Image` with slideshow component for both boxes
- Apply fade CSS transition to images

## File Structure
```
components/
  Hero.jsx        # Modified
  hooks/
    useSlideshow.js  # New
```
