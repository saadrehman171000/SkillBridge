"use client"

import { useState } from "react"
import Image from "next/image"
import { Search, MapPin, Star, Clock, ChevronDown } from "lucide-react"
import styles from "./skills-list.module.css"

export default function SkillsList() {
  const [sortOption, setSortOption] = useState("relevance")

  const skills = [
    {
      id: 1,
      title: "Web Development",
      category: "Technology",
      level: "Intermediate",
      rating: 4.8,
      reviews: 24,
      location: "Seattle, WA",
      distance: "2.5 miles",
      availability: "Weekends",
      user: {
        name: "Alex Johnson",
        avatar: "/placeholder.svg?height=48&width=48",
        verified: true,
      },
      description:
        "I can teach you how to build responsive websites using HTML, CSS, and JavaScript. I specialize in React and Next.js frameworks.",
    },
    {
      id: 2,
      title: "Piano Lessons",
      category: "Music",
      level: "Beginner to Advanced",
      rating: 4.9,
      reviews: 36,
      location: "Portland, OR",
      distance: "5 miles",
      availability: "Weekday Evenings",
      user: {
        name: "Maria Rodriguez",
        avatar: "/placeholder.svg?height=48&width=48",
        verified: true,
      },
      description:
        "Classical piano teacher with 10+ years of experience. I can teach beginners to advanced students of all ages.",
    },
    {
      id: 3,
      title: "Cooking Classes",
      category: "Culinary",
      level: "Beginner",
      rating: 4.7,
      reviews: 18,
      location: "San Francisco, CA",
      distance: "3 miles",
      availability: "Flexible",
      user: {
        name: "Robert Chen",
        avatar: "/placeholder.svg?height=48&width=48",
        verified: false,
      },
      description:
        "Learn to cook authentic Asian cuisine. I'll teach you the basics of Chinese, Japanese, and Thai cooking with simple ingredients.",
    },
    {
      id: 4,
      title: "Photography Basics",
      category: "Creative Arts",
      level: "Beginner to Intermediate",
      rating: 4.6,
      reviews: 15,
      location: "Austin, TX",
      distance: "7 miles",
      availability: "Weekends",
      user: {
        name: "Sarah Williams",
        avatar: "/placeholder.svg?height=48&width=48",
        verified: true,
      },
      description:
        "Learn the fundamentals of photography including composition, lighting, and editing. Bring your own camera (DSLR or smartphone).",
    },
  ]

  return (
    <div className={styles.skillsContainer}>
      <div className={styles.searchBar}>
        <div className={styles.searchInput}>
          <Search size={20} className={styles.searchIcon} />
          <input type="text" placeholder="Search for skills..." />
        </div>
        <div className={styles.sortDropdown}>
          <label>Sort by:</label>
          <div className={styles.select}>
            <select value={sortOption} onChange={(e) => setSortOption(e.target.value)}>
              <option value="relevance">Relevance</option>
              <option value="newest">Newest</option>
              <option value="rating">Highest Rated</option>
              <option value="distance">Nearest</option>
            </select>
            <ChevronDown size={16} className={styles.selectIcon} />
          </div>
        </div>
      </div>

      <div className={styles.skillsList}>
        {skills.map((skill) => (
          <div key={skill.id} className={styles.skillCard}>
            <div className={styles.skillHeader}>
              <div className={styles.userInfo}>
                <Image
                  src={skill.user.avatar || "/placeholder.svg"}
                  alt={skill.user.name}
                  width={48}
                  height={48}
                  className={styles.avatar}
                />
                <div>
                  <div className={styles.userName}>
                    {skill.user.name}
                    {skill.user.verified && (
                      <span className={styles.verifiedBadge} title="Verified User">
                        ✓
                      </span>
                    )}
                  </div>
                  <div className={styles.rating}>
                    <Star size={14} className={styles.starIcon} />
                    <span>{skill.rating}</span>
                    <span className={styles.reviews}>({skill.reviews} reviews)</span>
                  </div>
                </div>
              </div>
              <div className={styles.category}>{skill.category}</div>
            </div>

            <h3 className={styles.skillTitle}>{skill.title}</h3>
            <p className={styles.skillDescription}>{skill.description}</p>

            <div className={styles.skillDetails}>
              <div className={styles.detailItem}>
                <MapPin size={16} />
                <span>{skill.distance}</span>
              </div>
              <div className={styles.detailItem}>
                <Clock size={16} />
                <span>{skill.availability}</span>
              </div>
              <div className={styles.level}>{skill.level}</div>
            </div>

            <div className={styles.skillActions}>
              <button className={styles.requestButton}>Request Skill</button>
              <button className={styles.messageButton}>Message</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
