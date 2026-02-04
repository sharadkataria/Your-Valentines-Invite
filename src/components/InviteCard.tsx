"use client";

import loveConfig from "@/config/loveConfig";
import styles from "./InviteCard.module.css";
import { useState } from "react";

interface InviteCardProps {
  onPlayAgain: () => void;
}

export default function InviteCard({ onPlayAgain }: InviteCardProps) {
  const [showImage, setShowImage] = useState(false);
  const handleYesClick = () => {
    // Show celebration modal or directly trigger actions
    // alert('🎉 Yay! I can\'t wait to celebrate with you! 💕');
    setShowImage(true);
  };

  const handleAddToCalendar = () => {
    // Generate .ics file content
    const event = {
      title: `Valentine's Day`,
      description: loveConfig.inviteMessage,
      location: loveConfig.inviteLocation,
      startDate: new Date(loveConfig.valentineDate + "T19:00:00+08:00"), // 7:00 PM Singapore time
      endDate: new Date(loveConfig.valentineDate + "T23:00:00+08:00"),
    };

    const formatDate = (date: Date) => {
      return date.toISOString().replace(/[-:]/g, "").split(".")[0] + "Z";
    };

    const icsContent = `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//Valentine's Day//EN
BEGIN:VEVENT
UID:${Date.now()}@valentines2026
DTSTAMP:${formatDate(new Date())}
DTSTART:${formatDate(event.startDate)}
DTEND:${formatDate(event.endDate)}
SUMMARY:${event.title}
DESCRIPTION:${event.description}
LOCATION:${event.location}
STATUS:CONFIRMED
SEQUENCE:0
BEGIN:VALARM
TRIGGER:-PT2H
ACTION:DISPLAY
DESCRIPTION:Reminder: Valentine's Date in 2 hours!
END:VALARM
END:VEVENT
END:VCALENDAR`;

    // Create blob and download
    const blob = new Blob([icsContent], { type: "text/calendar" });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "valentines-date-2026.ics";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    window.URL.revokeObjectURL(url);
  };

  const handleSendAnswer = () => {
    const subject = encodeURIComponent(loveConfig.emailSubject);
    const body = encodeURIComponent(
      loveConfig.emailBody + loveConfig.partnerName,
    );
    window.location.href = `mailto:${loveConfig.yourEmail}?subject=${subject}&body=${body}`;
  };

  return (
    <div className={styles.inviteContainer}>
      <div className={styles.inviteCard}>
        <div className={styles.flowerDecoration}>
          <span>🌷</span>
          <span>💕</span>
          <span>🌷</span>
        </div>

        <h2 className={styles.inviteTitle}>
          {showImage ? "YAYYYYY ! I LOVE YOU ❤️" : loveConfig.inviteTitle}
        </h2>

        {!showImage && (
          <>
            <div className={styles.inviteDetails}>
              <div className={styles.detailItem}>
                <span className={styles.detailIcon}>📅</span>
                <div>
                  <div className={styles.detailLabel}>Date</div>
                  <div className={styles.detailValue}>
                    {loveConfig.inviteDate}
                  </div>
                </div>
              </div>

              <div className={styles.detailItem}>
                <span className={styles.detailIcon}>🕐</span>
                <div>
                  <div className={styles.detailLabel}>Time</div>
                  <div className={styles.detailValue}>
                    {loveConfig.inviteTime}
                  </div>
                </div>
              </div>

              <div className={styles.detailItem}>
                <span className={styles.detailIcon}>📍</span>
                <div>
                  <div className={styles.detailLabel}>Location</div>
                  <div className={styles.detailValue}>
                    {loveConfig.inviteLocation}
                  </div>
                </div>
              </div>
            </div>
            <p className={styles.inviteMessage}>{loveConfig.inviteMessage}</p>
          </>
        )}

        {showImage ? (
          <img
            style={{ width: "100%" }}
            src="https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExbjJidWhlOGN1ZzdndG40c2w3dnFwbGhzYW9hcXU2b3B4aGo4NnVyZiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/VXWyVyHi66NhTtpX2S/giphy.gif"
          />
        ) : (
          <div className={styles.actionButtons}>
            <button
              className={`btn-primary ${styles.yesButton}`}
              onClick={handleYesClick}
            >
              Yes! I'd Love To! 💕
            </button>

            <button className={`btn-disabled`} disabled>
              You don't have a choice! 😉
            </button>

            <div className={styles.secondaryActions}>
              <button className="btn-secondary" onClick={handleAddToCalendar}>
                📅 Add to Calendar
              </button>

              <button className="btn-secondary" onClick={handleSendAnswer}>
                💌 Send My Answer
              </button>
            </div>
          </div>
        )}

        <div className={styles.playAgainSection}>
          <button className={styles.playAgainButton} onClick={onPlayAgain}>
            🎮 Play Game Again
          </button>
        </div>

        <div className={styles.heartBorder}>
          {[...Array(6)].map((_, i) => (
            <span key={i} className={styles.heartIcon}>
              🤵🏻‍♂️ ❤️ 👰🏽‍♀️
            </span>
          ))}
        </div>
      </div>

      {/* Animated hearts background */}
      <div className={styles.floatingHearts}>
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className={styles.floatingHeart}
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${8 + Math.random() * 4}s`,
            }}
          >
            {["💕", "❤️", "💗", "💖"][Math.floor(Math.random() * 4)]}
          </div>
        ))}
      </div>
    </div>
  );
}
