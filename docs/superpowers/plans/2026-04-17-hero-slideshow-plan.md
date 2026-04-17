# Hero Image Slideshow Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add random slideshow functionality to Best Sellers and 20% Discount image boxes in Hero component.

**Architecture:** Custom React hook `useSlideshow` manages timer and random image selection. Hero component uses the hook with CSS fade transitions for smooth image cycling.

**Tech Stack:** React (useState, useEffect, useCallback), Tailwind CSS transitions

---

## File Structure

```
components/
  Hero.jsx        # Modify - add slideshow to image boxes
  hooks/
    useSlideshow.js  # Create - custom hook for slideshow logic
```

---

## Task 1: Create useSlideshow Hook

**Files:**
- Create: `components/hooks/useSlideshow.js`

- [ ] **Step 1: Create useSlideshow.js with random slideshow logic**

```javascript
'use client'

import { useState, useEffect, useCallback } from 'react'

export function useSlideshow(images, interval = 3000) {
    const [currentIndex, setCurrentIndex] = useState(0)
    const [isTransitioning, setIsTransitioning] = useState(false)

    const getRandomNextIndex = useCallback((current, total) => {
        let next
        do {
            next = Math.floor(Math.random() * total)
        } while (next === current && total > 1)
        return next
    }, [])

    useEffect(() => {
        if (!images || images.length === 0) return

        const timer = setInterval(() => {
            setIsTransitioning(true)
            setTimeout(() => {
                setCurrentIndex(prev => getRandomNextIndex(prev, images.length))
                setIsTransitioning(false)
            }, 300)
        }, interval)

        return () => clearInterval(timer)
    }, [images, interval, getRandomNextIndex])

    return {
        currentImage: images[currentIndex],
        currentIndex,
        isTransitioning
    }
}
```

- [ ] **Step 2: Export function (already done in step 1)**

- [ ] **Step 3: Commit**

```bash
git add components/hooks/useSlideshow.js
git commit -m "feat: add useSlideshow hook for random image cycling"
```

---

## Task 2: Add product images to assets export

**Files:**
- Modify: `assets/assets.js`

- [ ] **Step 1: Add product_img1-8 to assets export**

Update line 24-28 in `assets/assets.js`:

```javascript
export const assets = {
    upload_area, hero_model_img,
    hero_product_img1, hero_product_img2, gs_logo,
    product_img1, product_img2, product_img3, product_img4,
    product_img5, product_img6, product_img7, product_img8,
    product_img9, product_img10, product_img11, product_img12,
}
```

- [ ] **Step 2: Commit**

```bash
git add assets/assets.js
git commit -m "feat: export product_img1-8 for slideshow use"
```

---

## Task 3: Update Hero Component

**Files:**
- Modify: `components/Hero.jsx`

- [ ] **Step 1: Update imports in Hero.jsx**

Add import for `useSlideshow` hook:

```javascript
import { useSlideshow } from './hooks/useSlideshow'
```

No need to change the `assets` import - product_img1-8 are now in the assets object.

- [ ] **Step 2: Create BestSellersSlideshow component**

Add after imports:

```javascript
const BestSellersSlideshow = () => {
    const { currentImage, isTransitioning } = useSlideshow([
        assets.product_img1, assets.product_img2, assets.product_img3, assets.product_img4
    ])
    return (
        <Image 
            className={`w-35 transition-opacity duration-300 ${isTransitioning ? 'opacity-0' : 'opacity-100'}`} 
            src={currentImage} 
            alt="Best product" 
        />
    )
}
```

- [ ] **Step 3: Create DiscountSlideshow component**

Add after BestSellersSlideshow:

```javascript
const DiscountSlideshow = () => {
    const { currentImage, isTransitioning } = useSlideshow([
        assets.product_img5, assets.product_img6, assets.product_img7, assets.product_img8
    ])
    return (
        <Image 
            className={`w-35 transition-opacity duration-300 ${isTransitioning ? 'opacity-0' : 'opacity-100'}`} 
            src={currentImage} 
            alt="Discount product" 
        />
    )
}
```

- [ ] **Step 4: Replace static Image components**

Replace line 37:
```jsx
<Image className='w-35' src={assets.hero_product_img1} alt="" />
```
with:
```jsx
<BestSellersSlideshow />
```

Replace line 44:
```jsx
<Image className='w-35' src={assets.hero_product_img2} alt="" />
```
with:
```jsx
<DiscountSlideshow />
```

- [ ] **Step 5: Commit**

```bash
git add components/Hero.jsx
git commit -m "feat: add slideshow components for Best Sellers and Discount sections"
```

---

## Verification

- [ ] **Step 1: Test slideshow functionality**

Run dev server and verify:
- Images change every 3 seconds
- No immediate repeats (same image won't show twice in a row)
- Fade transition is smooth (300ms opacity animation)

```bash
npm run dev
```
