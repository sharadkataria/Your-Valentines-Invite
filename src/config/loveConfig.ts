// ============================================================================
// Love Configuration - Personalize this file for your Valentine! 💕
// ============================================================================

/**
 * IMPORTANT: This is an EXAMPLE file to show you the structure.
 * 
 * For your actual configuration:
 * 1. Copy this file and rename it to: loveConfig.ts (without _example)
 * 2. Customize all the values with your personal information
 * 3. Make sure loveConfig.ts is in your .gitignore if keeping it private
 * 
 * OR simply edit the existing loveConfig.ts file directly.
 */

export interface Milestone {
  title: string;
  date: string;
  description: string;
}

export const loveConfig = {
  // === PERSONAL DETAILS ===
  // Replace with your actual names
  yourName: "Sharad",
  partnerName: "Mansi",
  
  // === RELATIONSHIP START DATE ===
  // Set this to when your relationship began (Singapore timezone: +08:00)
  // Format: "YYYY-MM-DDTHH:MM:SS+08:00"
  relationshipStart: "2016-10-29T00:00:00+05:30",
  
  // === VALENTINE'S DATE ===
  valentineDate: "2026-02-14",
  
  // === HEADLINE AND INTRO ===
  heroHeadline: "Dear Mansi!",
  heroSubtext: "I have a very important question to ask to you, but before that, I have something for you...",
  
  // === PHOTO GALLERY ===
  // How many photos are in /public/photos/ ?
  // Photos should be named: photo_1.jpg, photo_2.jpg, photo_3.jpg, etc.
  photoCount: 0,
  
  // === TIMELINE MILESTONES ===
  // Add your relationship milestones here
  milestones: [
    {
      title: "Test",
      date: "June 29, 2023",
      description: "Test."
    }
  ],
  
  // === EMAIL CONFIGURATION ===
  // For the "Send me your answer" button
  yourEmail: "sharad.kataria33@gmail.com", // Replace with your actual email
  emailSubject: "My Valentine's Answer 💐",
  emailBody: "Yes! I'd love to be your Valentine! 💕\n\nLove always,\n",
  
  // === INVITE DETAILS ===
  inviteTitle: "Will You Be My Valentine?",
  inviteMessage: "Looking forward to spend every day of my life with you by my side.",
  inviteDate: "February 14, 2026",
  inviteTime: "8:00 PM",
  inviteLocation: "A romantic surprise awaits...",
};

export default loveConfig;
