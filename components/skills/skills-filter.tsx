"use client"

import { useState } from "react"
import { Sliders, ChevronDown } from "lucide-react"
import styles from "./skills-filter.module.css"

export default function SkillsFilter() {
  const [filtersVisible, setFiltersVisible] = useState(false)

  const categories = [
    "All Categories",
    "Technology",
    "Creative Arts",
    "Education",
    "Home & Garden",
    "Business",
    "Health & Wellness",
    "Culinary",
    "Languages",
    "Music",
    "Sports & Fitness",
  ]

  return (
    <div className={styles.filter}>
      <div className={styles.mobileToggle} onClick={() => setFiltersVisible(!filtersVisible)}>
        <Sliders size={18} />
        <span>Filters</span>
        <ChevronDown size={18} className={filtersVisible ? styles.rotated : ""} />
      </div>

      <div className={`${styles.filterContent} ${filtersVisible ? styles.visible : ""}`}>
        <div className={styles.section}>
          <h3 className={styles.sectionTitle}>Categories</h3>
          <ul className={styles.categoryList}>
            {categories.map((category, index) => (
              <li key={index}>
                <label className={styles.checkbox}>
                  <input type="checkbox" checked={index === 0} onChange={() => {}} />
                  <span className={styles.checkmark}></span>
                  {category}
                </label>
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.section}>
          <h3 className={styles.sectionTitle}>Skill Level</h3>
          <ul className={styles.levelList}>
            <li>
              <label className={styles.checkbox}>
                <input type="checkbox" onChange={() => {}} />
                <span className={styles.checkmark}></span>
                Beginner
              </label>
            </li>
            <li>
              <label className={styles.checkbox}>
                <input type="checkbox" onChange={() => {}} />
                <span className={styles.checkmark}></span>
                Intermediate
              </label>
            </li>
            <li>
              <label className={styles.checkbox}>
                <input type="checkbox" onChange={() => {}} />
                <span className={styles.checkmark}></span>
                Advanced
              </label>
            </li>
            <li>
              <label className={styles.checkbox}>
                <input type="checkbox" onChange={() => {}} />
                <span className={styles.checkmark}></span>
                Expert
              </label>
            </li>
          </ul>
        </div>

        <div className={styles.section}>
          <h3 className={styles.sectionTitle}>Location</h3>
          <div className={styles.rangeSlider}>
            <label>Distance (miles)</label>
            <input type="range" min="1" max="100" defaultValue="25" className={styles.slider} />
            <div className={styles.rangeValues}>
              <span>1</span>
              <span>25</span>
              <span>100</span>
            </div>
          </div>
        </div>

        <div className={styles.section}>
          <h3 className={styles.sectionTitle}>Availability</h3>
          <ul className={styles.availabilityList}>
            <li>
              <label className={styles.checkbox}>
                <input type="checkbox" onChange={() => {}} />
                <span className={styles.checkmark}></span>
                Weekdays
              </label>
            </li>
            <li>
              <label className={styles.checkbox}>
                <input type="checkbox" onChange={() => {}} />
                <span className={styles.checkmark}></span>
                Weekends
              </label>
            </li>
            <li>
              <label className={styles.checkbox}>
                <input type="checkbox" onChange={() => {}} />
                <span className={styles.checkmark}></span>
                Evenings
              </label>
            </li>
            <li>
              <label className={styles.checkbox}>
                <input type="checkbox" onChange={() => {}} />
                <span className={styles.checkmark}></span>
                Mornings
              </label>
            </li>
          </ul>
        </div>

        <button className={styles.applyButton}>Apply Filters</button>
      </div>
    </div>
  )
}
